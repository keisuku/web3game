#!/bin/bash
# ═══════════════════════════════════════════════════════════
# セッションチェックポイント保存
# 現在の制作状況をスナップショットとして記録する。
# 次のセッション開始時に読み込むことで、コンテキスト引き継ぎをスムーズにする。
#
# 使い方: bash scripts/checkpoint-save.sh [メモ]
# 例:     bash scripts/checkpoint-save.sh "EP01 P03まで完了、P04の構図ラフ途中"
# ═══════════════════════════════════════════════════════════

MEMO="$*"
DATE=$(date +%Y-%m-%d 2>/dev/null || echo "unknown")
TIME=$(date +%H:%M 2>/dev/null || echo "unknown")

CHECKPOINT_DIR="sessions/checkpoints"
mkdir -p "$CHECKPOINT_DIR"

FILENAME="${DATE}_checkpoint.md"
FILEPATH="$CHECKPOINT_DIR/$FILENAME"

# ── チェックポイントを生成 ──
{
  echo "# セッションチェックポイント"
  echo ""
  echo "- 日時: ${DATE} ${TIME}"
  echo ""

  # 制作状況（status.shの出力を取り込み）
  echo "## 制作状況"
  echo ""
  if [ -f "scripts/status.sh" ]; then
    bash scripts/status.sh 2>/dev/null
  fi
  echo ""

  # パイプライン検証結果
  echo "## パイプライン状態"
  echo ""
  for ep_dir in episodes/ep*/; do
    [ ! -d "$ep_dir" ] && continue
    case "$ep_dir" in *_*) continue ;; esac
    EP_NAME=$(basename "$ep_dir" | sed 's/ep//')
    if [ -f "scripts/validate-pipeline.sh" ]; then
      bash scripts/validate-pipeline.sh "$EP_NAME" 2>/dev/null
    fi
  done
  echo ""

  # 最近のコミット
  echo "## 最近の変更"
  echo ""
  echo '```'
  git log --oneline -5 2>/dev/null || echo "(git情報なし)"
  echo '```'
  echo ""

  # メモ
  echo "## メモ"
  echo ""
  if [ -n "$MEMO" ]; then
    echo "$MEMO"
  else
    echo "[ここにセッションのメモを記入]"
  fi
  echo ""

  # 次のアクション
  echo "## 次のアクション"
  echo ""
  echo "- [ ] [次にやるべきことを記入]"
  echo ""

} > "$FILEPATH"

echo "チェックポイントを保存しました: $FILEPATH"
