#!/usr/bin/env python3
# Утилита: выполнить ОДНУ команду на сервере по SSH и показать вывод.
# Использование:  python deploy/ssh_run.py "команда на сервере"
import sys, os

for _s in (sys.stdout, sys.stderr):
    try: _s.reconfigure(encoding="utf-8", errors="replace")
    except Exception: pass

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import credentials, paramiko

cmd = sys.argv[1] if len(sys.argv) > 1 else "echo no-command"

c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect(credentials.SERVER_IP, username="root", password=credentials.SERVER_PASSWORD,
          look_for_keys=False, allow_agent=False, timeout=30)

chan = c.get_transport().open_session()
chan.set_combine_stderr(True)
chan.exec_command(cmd)
while True:
    data = chan.recv(4096)
    if not data:
        break
    sys.stdout.write(data.decode("utf-8", "replace"))
    sys.stdout.flush()
code = chan.recv_exit_status()
c.close()
print(f"\n[exit {code}]")
sys.exit(code)
