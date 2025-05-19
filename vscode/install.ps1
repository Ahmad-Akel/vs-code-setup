Write-Host "🚀 Setting up VS Code profile 'minamx'..."

# Backup existing files (optional)
$BackupDir = "$env:USERPROFILE\vscode-backup-$(Get-Date -Format 'yyyyMMddHHmmss')"
New-Item -ItemType Directory -Path $BackupDir -Force
if (Test-Path "$env:APPDATA\Code\User\settings.json") { Copy-Item "$env:APPDATA\Code\User\settings.json" -Destination $BackupDir }
if (Test-Path "$env:APPDATA\Code\User\keybindings.json") { Copy-Item "$env:APPDATA\Code\User\keybindings.json" -Destination $BackupDir }

# Install extensions
if (Test-Path "extensions.txt") {
  Write-Host "📦 Installing extensions..."
  Get-Content extensions.txt | ForEach-Object {
    code --install-extension $_ --force
  }
}

# Apply settings and keybindings
$VSCodeUserDir = "$env:APPDATA\Code\User"
New-Item -ItemType Directory -Path $VSCodeUserDir -Force

Write-Host "⚙️  Applying settings and keybindings..."
Copy-Item "settings.json" -Destination "$VSCodeUserDir\"
Copy-Item "keybindings.json" -Destination "$VSCodeUserDir\"

Write-Host "✅ Done! Restart VS Code to see changes."