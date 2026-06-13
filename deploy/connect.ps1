# Быстрое SSH-подключение к серверу по данным из config.env (PowerShell).
# Запуск:  .\deploy\connect.ps1
$ErrorActionPreference = 'Stop'
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$cfg = Join-Path $dir 'config.env'
if (-not (Test-Path $cfg)) {
  Write-Host "X Нет файла $cfg" -ForegroundColor Red
  Write-Host "  Создайте его: Copy-Item deploy/config.env.example deploy/config.env  и впишите данные сервера."
  exit 1
}

# Читаем config.env в переменные
$conf = @{}
Get-Content $cfg | ForEach-Object {
  $line = $_.Trim()
  if ($line -and -not $line.StartsWith('#') -and $line.Contains('=')) {
    $k, $v = $line.Split('=', 2)
    $conf[$k.Trim()] = $v.Trim()
  }
}

$port = if ($conf['SERVER_PORT']) { $conf['SERVER_PORT'] } else { '22' }
$args = @('-p', $port)
if ($conf['SSH_KEY']) { $args += @('-i', $conf['SSH_KEY']) }
$target = "$($conf['SERVER_USER'])@$($conf['SERVER_HOST'])"

Write-Host "-> Подключаюсь к $target`:$port ..." -ForegroundColor Cyan
& ssh @args $target
