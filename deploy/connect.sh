#!/usr/bin/env bash
# Быстрое SSH-подключение к серверу по данным из config.env.
# Запуск (в Git Bash):  ./deploy/connect.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ ! -f "$DIR/config.env" ]]; then
  echo "✗ Нет файла $DIR/config.env"
  echo "  Создайте его:  cp deploy/config.env.example deploy/config.env  и впишите данные сервера."
  exit 1
fi
# shellcheck disable=SC1091
source "$DIR/config.env"

SSH_OPTS=(-p "${SERVER_PORT:-22}")
[[ -n "${SSH_KEY:-}" ]] && SSH_OPTS+=(-i "$SSH_KEY")

echo "→ Подключаюсь к ${SERVER_USER}@${SERVER_HOST}:${SERVER_PORT:-22} ..."
exec ssh "${SSH_OPTS[@]}" "${SERVER_USER}@${SERVER_HOST}"
