#!/usr/bin/env python3
# ─────────────────────────────────────────────────────────────────────────
#  Деплой Nuxt-сайта на Ubuntu-сервер по SSH (на чистом Python).
#
#  Использование:
#    1) pip install paramiko
#    2) впишите SERVER_IP и SERVER_PASSWORD в файл credentials.py
#    3) python deploy/deploy.py
#
#  Скрипт:
#    • архивирует исходники (без node_modules/.output/.git и т.п.);
#    • заливает архив на сервер по SFTP;
#    • на сервере ставит (при первом запуске) Node/PM2/Nginx, собирает Nuxt
#      и запускает сайт через PM2.
#
#  По умолчанию вход под root (как обычно у свежих VPS). Если у вас другой
#  пользователь — поменяйте SERVER_USER ниже (нужен root или passwordless sudo).
# ─────────────────────────────────────────────────────────────────────────
import io
import os
import sys
import tarfile

# На Windows консоль бывает в cp1251 — принудительно выводим в UTF-8,
# иначе спецсимволы/кириллица роняют скрипт с UnicodeEncodeError.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# ── Настройки (большинство менять не нужно) ──────────────────────────────
SERVER_USER = "root"            # пользователь SSH
SERVER_PORT = 22                # порт SSH
APP_DIR     = "/var/www/svai"   # куда ставить проект на сервере
APP_NAME    = "svai"            # имя процесса в PM2
APP_PORT    = "3000"            # внутренний порт Nuxt (наружу — только Nginx)
DOMAIN      = "zavod-vintovikh-svai.com www.zavod-vintovikh-svai.com"
LETSENCRYPT_EMAIL = ""          # email для бесплатного SSL (пусто = без HTTPS)

# Что НЕ заливать на сервер
EXCLUDE_DIRS = {
    "node_modules", ".output", ".nuxt", ".git", ".vercel",
    os.path.join("backend", "node_modules"), os.path.join("backend", "dist"),
}

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(HERE)


def log(msg):
    print(f"\n\033[1;36m▸ {msg}\033[0m", flush=True)


def load_credentials():
    sys.path.insert(0, HERE)
    try:
        import credentials  # noqa
    except ImportError:
        sys.exit("✗ Нет файла deploy/credentials.py — создайте его с SERVER_IP и SERVER_PASSWORD.")
    ip = getattr(credentials, "SERVER_IP", "").strip()
    pwd = getattr(credentials, "SERVER_PASSWORD", "")
    if not ip or not pwd:
        sys.exit("✗ Заполните SERVER_IP и SERVER_PASSWORD в deploy/credentials.py")
    return ip, pwd


def _exclude(tarinfo):
    # tarinfo.name приходит вида "./path"; нормализуем
    name = tarinfo.name.lstrip("./")
    parts = name.replace("\\", "/").split("/")
    if parts and parts[0] in EXCLUDE_DIRS:
        return None
    # вложенные исключения (backend/node_modules и т.п.)
    norm = name.replace("\\", "/")
    for ex in EXCLUDE_DIRS:
        ex_norm = ex.replace("\\", "/")
        if "/" in ex_norm and (norm == ex_norm or norm.startswith(ex_norm + "/")):
            return None
    return tarinfo


def build_tarball():
    log("Готовлю архив исходников")
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        tar.add(PROJECT_ROOT, arcname=".", filter=_exclude)
    buf.seek(0)
    size_mb = len(buf.getvalue()) / 1024 / 1024
    print(f"  размер архива: {size_mb:.1f} МБ")
    return buf


def remote_deploy_script():
    """Bash-скрипт, который выполнится на сервере."""
    return f"""set -e
export APP_DIR='{APP_DIR}'
export APP_NAME='{APP_NAME}'
export APP_PORT='{APP_PORT}'
export DOMAIN='{DOMAIN}'
export LETSENCRYPT_EMAIL='{LETSENCRYPT_EMAIL}'

cd "$APP_DIR"
tar -xzf _deploy.tar.gz
rm -f _deploy.tar.gz

# Первичная настройка сервера, если Node/PM2 ещё нет
if ! command -v node >/dev/null 2>&1 || ! command -v pm2 >/dev/null 2>&1; then
  echo "→ Первичная настройка сервера..."
  bash deploy/server-setup.sh
fi

# Обновляем конфиг Nginx (на случай смены домена)
if [ -f deploy/nginx.conf.template ] && command -v nginx >/dev/null 2>&1; then
  SUDO=""; [ "$(id -u)" -ne 0 ] && SUDO="sudo"
  sed -e "s/__DOMAIN__/${{DOMAIN}}/g" -e "s/__APP_PORT__/${{APP_PORT}}/g" \
    deploy/nginx.conf.template | $SUDO tee /etc/nginx/sites-available/${{APP_NAME}} >/dev/null
  $SUDO ln -sf /etc/nginx/sites-available/${{APP_NAME}} /etc/nginx/sites-enabled/${{APP_NAME}}
  $SUDO rm -f /etc/nginx/sites-enabled/default
  $SUDO nginx -t && $SUDO systemctl reload nginx || true
fi

echo "→ Устанавливаю зависимости (npm ci)..."
npm ci

echo "→ Собираю Nuxt..."
npm run build:nuxt

cp deploy/ecosystem.config.cjs ./ecosystem.config.cjs

echo "→ Запускаю через PM2..."
export APP_NAME APP_PORT
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save

SUDO=""; [ "$(id -u)" -ne 0 ] && SUDO="sudo"
pm2 startup systemd -u "$(id -un)" --hp "$HOME" 2>/dev/null | grep -E '^sudo' | $SUDO bash || true

echo ""
pm2 status
echo "✔ Деплой завершён"
"""


def main():
    try:
        import paramiko
    except ImportError:
        sys.exit("✗ Нужен модуль paramiko. Установите:  pip install paramiko")

    ip, password = load_credentials()
    tarball = build_tarball()

    log(f"Подключаюсь к {SERVER_USER}@{ip}:{SERVER_PORT}")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(
        hostname=ip, port=SERVER_PORT, username=SERVER_USER,
        password=password, look_for_keys=False, allow_agent=False, timeout=30,
    )

    try:
        # 1. Создаём каталог и заливаем архив по SFTP
        client.exec_command(f"mkdir -p '{APP_DIR}'")[1].channel.recv_exit_status()
        log(f"Заливаю архив в {APP_DIR}/_deploy.tar.gz")
        sftp = client.open_sftp()
        sftp.putfo(tarball, f"{APP_DIR}/_deploy.tar.gz")
        sftp.close()

        # 2. Разворачиваем на сервере, стримим вывод
        log("Разворачиваю на сервере (установка, сборка, запуск)")
        script = remote_deploy_script()
        stdin, stdout, stderr = client.exec_command(f"bash -s", get_pty=True)
        stdin.write(script)
        stdin.write("\nexit\n")
        stdin.flush()

        for line in iter(stdout.readline, ""):
            sys.stdout.write(line)
            sys.stdout.flush()

        code = stdout.channel.recv_exit_status()
        if code != 0:
            sys.exit(f"\n✗ Деплой завершился с ошибкой (код {code}). Смотрите вывод выше.")
    finally:
        client.close()

    log(f"Готово! Сайт развёрнут на http://{ip}  (домен: {DOMAIN})")


if __name__ == "__main__":
    main()
