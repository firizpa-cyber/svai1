#!/usr/bin/env bash
# Первичная настройка Ubuntu-сервера: Node.js 20, PM2, Nginx, firewall, Nginx-vhost.
# Этот скрипт КОПИРУЕТСЯ на сервер и выполняется ТАМ автоматически из deploy.sh
# при первом запуске (или вручную: bash server-setup.sh).
#
# Переменные ждёт через окружение: APP_DIR APP_NAME APP_PORT DOMAIN LETSENCRYPT_EMAIL
set -euo pipefail

# Полностью неинтерактивный apt: без вопросов needrestart/конфигов,
# иначе установка подвисает на скрытом prompt.
export DEBIAN_FRONTEND=noninteractive
export NEEDRESTART_MODE=a
export NEEDRESTART_SUSPEND=1
APT_OPTS=(-y -o Dpkg::Options::=--force-confold -o Dpkg::Options::=--force-confdef)

APP_DIR="${APP_DIR:-/var/www/svai}"
APP_NAME="${APP_NAME:-svai}"
APP_PORT="${APP_PORT:-3000}"
DOMAIN="${DOMAIN:-_}"
LETSENCRYPT_EMAIL="${LETSENCRYPT_EMAIL:-}"

log() { echo -e "\n\033[1;36m▸ $*\033[0m"; }

SUDO=""
[[ "$(id -u)" -ne 0 ]] && SUDO="sudo"

log "Обновляю списки пакетов"
$SUDO apt-get update -y

log "Ставлю базовые пакеты (curl, git, nginx, rsync)"
$SUDO apt-get install -y curl git nginx rsync ca-certificates

if ! command -v node >/dev/null 2>&1; then
  log "Ставлю Node.js 20 LTS (NodeSource)"
  curl -fsSL https://deb.nodesource.com/setup_20.x | $SUDO -E bash -
  $SUDO apt-get install -y nodejs
else
  log "Node.js уже установлен: $(node -v)"
fi

if ! command -v pm2 >/dev/null 2>&1; then
  log "Ставлю PM2 глобально"
  $SUDO npm install -g pm2
else
  log "PM2 уже установлен: $(pm2 -v)"
fi

log "Готовлю каталог приложения: $APP_DIR"
$SUDO mkdir -p "$APP_DIR"
$SUDO chown -R "$(id -un)":"$(id -gn)" "$APP_DIR"

# ── Nginx vhost ────────────────────────────────────────────────
if [[ -f "$APP_DIR/deploy/nginx.conf.template" ]]; then
  log "Настраиваю Nginx для домена: $DOMAIN"
  TMP_CONF="/tmp/${APP_NAME}.nginx.conf"
  sed -e "s/__DOMAIN__/${DOMAIN}/g" -e "s/__APP_PORT__/${APP_PORT}/g" \
    "$APP_DIR/deploy/nginx.conf.template" > "$TMP_CONF"
  $SUDO mv "$TMP_CONF" "/etc/nginx/sites-available/${APP_NAME}"
  $SUDO ln -sf "/etc/nginx/sites-available/${APP_NAME}" "/etc/nginx/sites-enabled/${APP_NAME}"
  # Убираем дефолтный сайт, чтобы не перехватывал запросы
  $SUDO rm -f /etc/nginx/sites-enabled/default
  $SUDO nginx -t && $SUDO systemctl reload nginx
  log "Nginx настроен и перезагружен"
fi

# ── Firewall ───────────────────────────────────────────────────
if command -v ufw >/dev/null 2>&1; then
  log "Открываю порты в firewall (OpenSSH + Nginx)"
  $SUDO ufw allow OpenSSH       >/dev/null 2>&1 || true
  $SUDO ufw allow 'Nginx Full'  >/dev/null 2>&1 || true
fi

# ── SSL (Let's Encrypt) — только если задан email и реальный домен ──
if [[ -n "$LETSENCRYPT_EMAIL" && "$DOMAIN" != "_" ]]; then
  log "Ставлю certbot и выпускаю SSL-сертификат"
  $SUDO apt-get install -y certbot python3-certbot-nginx
  DOMAIN_ARGS=""
  for d in $DOMAIN; do DOMAIN_ARGS="$DOMAIN_ARGS -d $d"; done
  # shellcheck disable=SC2086
  $SUDO certbot --nginx $DOMAIN_ARGS --non-interactive --agree-tos -m "$LETSENCRYPT_EMAIL" --redirect || \
    echo "⚠ Не удалось выпустить сертификат (проверьте, что домен указывает на этот сервер). Сайт работает по HTTP."
fi

log "Настройка сервера завершена ✔"
