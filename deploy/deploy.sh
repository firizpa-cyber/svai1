#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────
#  Деплой Nuxt-сайта на Ubuntu-сервер одной командой.
#  Запуск (в Git Bash на Windows):   ./deploy/deploy.sh
#
#  Что делает:
#   1. Архивирует исходники (без node_modules/.output/.git) и заливает по SSH.
#   2. На сервере: ставит зависимости, СОБИРАЕТ Nuxt, запускает через PM2.
#   3. При первом запуске поднимает Node/PM2/Nginx (server-setup.sh).
#
#  Сборка идёт НА СЕРВЕРЕ (Linux) — поэтому нативные модули (sharp и пр.)
#  собираются правильно, без проблем «собрано на Windows».
# ─────────────────────────────────────────────────────────────────────────
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$DIR/.." && pwd)"

if [[ ! -f "$DIR/config.env" ]]; then
  echo "✗ Нет файла deploy/config.env"
  echo "  Создайте:  cp deploy/config.env.example deploy/config.env   и впишите данные сервера."
  exit 1
fi
# shellcheck disable=SC1091
source "$DIR/config.env"

: "${SERVER_HOST:?Укажите SERVER_HOST в config.env}"
: "${SERVER_USER:?Укажите SERVER_USER в config.env}"
SERVER_PORT="${SERVER_PORT:-22}"
APP_DIR="${APP_DIR:-/var/www/svai}"
APP_NAME="${APP_NAME:-svai}"
APP_PORT="${APP_PORT:-3000}"
DOMAIN="${DOMAIN:-_}"
LETSENCRYPT_EMAIL="${LETSENCRYPT_EMAIL:-}"

SSH_OPTS=(-p "$SERVER_PORT" -o StrictHostKeyChecking=accept-new)
[[ -n "${SSH_KEY:-}" ]] && SSH_OPTS+=(-i "$SSH_KEY")
TARGET="${SERVER_USER}@${SERVER_HOST}"

log() { echo -e "\n\033[1;36m▸ $*\033[0m"; }

# ── 1. Заливаем исходники ────────────────────────────────────────────────
log "Готовлю архив исходников"
TARBALL="$(mktemp -t svai-XXXXXX).tar.gz"
trap 'rm -f "$TARBALL"' EXIT

tar -czf "$TARBALL" \
  --exclude='./node_modules' \
  --exclude='./.output' \
  --exclude='./.nuxt' \
  --exclude='./.git' \
  --exclude='./.vercel' \
  --exclude='./backend/node_modules' \
  --exclude='./backend/dist' \
  -C "$PROJECT_ROOT" .

SIZE="$(du -h "$TARBALL" | cut -f1)"
log "Заливаю на ${TARGET}:${APP_DIR} (архив ${SIZE})"
ssh "${SSH_OPTS[@]}" "$TARGET" "mkdir -p '$APP_DIR'"
scp -P "$SERVER_PORT" ${SSH_KEY:+-i "$SSH_KEY"} "$TARBALL" "$TARGET:$APP_DIR/_deploy.tar.gz"

# ── 2. Распаковка + сборка + запуск на сервере ───────────────────────────
log "Разворачиваю на сервере (установка, сборка, запуск)"
ssh "${SSH_OPTS[@]}" "$TARGET" bash -s <<REMOTE
set -euo pipefail
export APP_DIR='$APP_DIR'
export APP_NAME='$APP_NAME'
export APP_PORT='$APP_PORT'
export DOMAIN='$DOMAIN'
export LETSENCRYPT_EMAIL='$LETSENCRYPT_EMAIL'

cd "\$APP_DIR"
tar -xzf _deploy.tar.gz
rm -f _deploy.tar.gz

# Первичная настройка сервера, если Node/PM2 ещё нет
if ! command -v node >/dev/null 2>&1 || ! command -v pm2 >/dev/null 2>&1; then
  echo "→ Первичная настройка сервера..."
  bash deploy/server-setup.sh
fi
# Конфиг Nginx (на случай, если домен поменялся) — без переустановки пакетов
if [[ -f deploy/nginx.conf.template ]] && command -v nginx >/dev/null 2>&1; then
  SUDO=""; [[ "\$(id -u)" -ne 0 ]] && SUDO="sudo"
  sed -e "s/__DOMAIN__/\${DOMAIN}/g" -e "s/__APP_PORT__/\${APP_PORT}/g" \
    deploy/nginx.conf.template | \$SUDO tee /etc/nginx/sites-available/\${APP_NAME} >/dev/null
  \$SUDO ln -sf /etc/nginx/sites-available/\${APP_NAME} /etc/nginx/sites-enabled/\${APP_NAME}
  \$SUDO rm -f /etc/nginx/sites-enabled/default
  \$SUDO nginx -t && \$SUDO systemctl reload nginx || true
fi

echo "→ Устанавливаю зависимости (npm ci)..."
npm ci

echo "→ Собираю Nuxt..."
npm run build:nuxt

# Кладём PM2-конфиг в корень приложения
cp deploy/ecosystem.config.cjs ./ecosystem.config.cjs

echo "→ Запускаю через PM2..."
export APP_NAME APP_PORT
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save

# Автозапуск PM2 после перезагрузки сервера
SUDO=""; [[ "\$(id -u)" -ne 0 ]] && SUDO="sudo"
pm2 startup systemd -u "\$(id -un)" --hp "\$HOME" 2>/dev/null | grep -E '^sudo' | \$SUDO bash || true

echo ""
pm2 status
echo "✔ Деплой завершён"
REMOTE

log "Готово! Сайт развёрнут на http://${SERVER_HOST}  (домен: ${DOMAIN})"
