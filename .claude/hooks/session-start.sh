#!/bin/bash
set -euo pipefail

# Web環境のみで実行
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# google-genai のインストール（未インストールの場合のみ）
if ! python3 -c "import google.genai" 2>/dev/null; then
  pip install google-genai 2>&1
fi

# Pillow（PDF比較用、未インストールの場合のみ）
if ! python3 -c "from PIL import Image" 2>/dev/null; then
  pip install Pillow 2>&1
fi

# Gemini APIキーを .env から読み込んでセッションに設定
if [ -f "$CLAUDE_PROJECT_DIR/.env" ]; then
  GEMINI_KEY=$(grep '^GEMINI_API_KEY=' "$CLAUDE_PROJECT_DIR/.env" | cut -d'=' -f2-)
  if [ -n "$GEMINI_KEY" ]; then
    echo "export GEMINI_API_KEY=\"$GEMINI_KEY\"" >> "$CLAUDE_ENV_FILE"
  fi
fi
