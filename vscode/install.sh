#!/bin/bash

# Exit on error
set -e

echo "🚀 Setting up VS Code profile 'minamx'..."

# Backup existing files (optional)
BACKUP_DIR="$HOME/vscode-backup-$(date +%s)"
mkdir -p "$BACKUP_DIR"
[ -f "$HOME/Library/Application Support/Code/User/settings.json" ] && cp "$HOME/Library/Application Support/Code/User/settings.json" "$BACKUP_DIR/"
[ -f "$HOME/Library/Application Support/Code/User/keybindings.json" ] && cp "$HOME/Library/Application Support/Code/User/keybindings.json" "$BACKUP_DIR/"

# Install extensions
if [ -f "extensions.txt" ]; then
  echo "📦 Installing extensions..."
  while read -r extension; do
    code --install-extension "$extension" --force
  done < extensions.txt
fi

# Apply settings and keybindings
VSCODE_USER_DIR="$HOME/Library/Application Support/Code/User"
mkdir -p "$VSCODE_USER_DIR"

echo "⚙️  Applying settings and keybindings..."
cp settings.json "$VSCODE_USER_DIR/"
cp keybindings.json "$VSCODE_USER_DIR/"

echo "✅ Done! Restart VS Code to see changes."