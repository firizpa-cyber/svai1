// Конфиг PM2 для запуска собранного Nuxt-сервера.
// Сам читает .env из папки приложения, чтобы переменные (SMTP, аналитика)
// попали в процесс — Nitro в проде не подхватывает .env автоматически.
const fs = require('fs');
const path = require('path');

function loadEnv(file) {
  const env = {};
  if (!fs.existsSync(file)) return env;
  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || !line.includes('=')) continue;
    const idx = line.indexOf('=');
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

const appDir = __dirname;
const fileEnv = loadEnv(path.join(appDir, '.env'));

module.exports = {
  apps: [
    {
      name: process.env.APP_NAME || 'svai',
      script: '.output/server/index.mjs',
      cwd: appDir,
      exec_mode: 'cluster',
      instances: 1,
      max_memory_restart: '512M',
      env: {
        ...fileEnv,
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: process.env.APP_PORT || fileEnv.PORT || '3000',
      },
    },
  ],
};
