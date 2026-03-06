$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8000

Set-Location $root

$existing = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if ($existing) {
    $pids = $existing | Select-Object -ExpandProperty OwningProcess -Unique
    foreach ($pid in $pids) {
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    }
}

$command = "Set-Location '$root'; python -m http.server $port --bind 127.0.0.1"
Start-Process powershell -ArgumentList "-NoProfile", "-NoExit", "-Command", $command

Write-Host "Preview server started at http://127.0.0.1:$port"
