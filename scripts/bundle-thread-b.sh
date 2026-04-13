#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Thread B コンテキストバンドル生成
# ページ設計書 → Nano Banana用プロンプト変換に必要な全情報を
# 1ブロックにまとめて出力する。コピペ1回で Thread B を開始できる。
#
# 使い方: bash scripts/bundle-thread-b.sh <episode番号> <ページID>
# 例:     bash scripts/bundle-thread-b.sh 01 P02
# ═══════════════════════════════════════════════════════════

EP="$1"
PAGE="$2"

if [ -z "$EP" ] || [ -z "$PAGE" ]; then
  echo "使い方: bash scripts/bundle-thread-b.sh <episode番号> <ページID>"
  echo "例:     bash scripts/bundle-thread-b.sh 01 P02"
  exit 1
fi

# ページIDを正規化 (P1, P.1, p01 → P01)
PAGE_NUM=$(echo "$PAGE" | tr -d 'Pp.' | sed 's/^0*//')
[ -z "$PAGE_NUM" ] && PAGE_NUM=1
PAGE_ID=$(printf "P%02d" "$PAGE_NUM")

PAGE_FILE="episodes/ep${EP}/pages/${PAGE_ID}.md"

if [ ! -f "$PAGE_FILE" ]; then
  echo "エラー: ${PAGE_FILE} が見つかりません"
  exit 1
fi

# ────────────────────────────────
# 出力開始
# ────────────────────────────────

cat << 'HEADER'
══════════════════════════════════════════════
 プロンプト変換依頼（Thread B）
══════════════════════════════════════════════
HEADER

echo " EP${EP} ${PAGE_ID}"
echo ""
echo "04_prompt-conversion-rules.md に従い、以下のページ設計書を"
echo "Nano Banana用の英語プロンプトに機械的に変換してください。"
echo "設計書にない情報は絶対に追加しないでください。"
echo ""

# ── ページ設計書 ──
echo "──────────────────────────────────────────"
echo "■ 承認済みページ設計書"
echo "──────────────────────────────────────────"
echo ""
cat "$PAGE_FILE"
echo ""

# ── キャラクター英語プロンプト ──
echo "──────────────────────────────────────────"
echo "■ 使用キャラクターの英語プロンプト"
echo "──────────────────────────────────────────"
echo ""

for char_file in bible/characters/*.md; do
  # テンプレートはスキップ
  case "$char_file" in *_*) continue ;; esac
  [ ! -f "$char_file" ] && continue

  # Nano Banana用プロンプトがあるキャラだけ出力
  if ! grep -q "Nano Banana用 固定英語プロンプト" "$char_file"; then
    continue
  fi

  CHAR_NAME=$(head -1 "$char_file" | sed 's/^# //')
  echo "### ${CHAR_NAME}"

  # 「Nano Banana用 固定英語プロンプト」セクションからコードブロックを抽出
  awk '
    /Nano Banana用 固定英語プロンプト/ { printing=1; next }
    printing && /^```$/ && !inside { inside=1; next }
    printing && /^```$/ && inside { print ""; printing=0; inside=0; next }
    printing && inside { print }
  ' "$char_file"

  # モード別追加プロンプトがあれば抽出
  if grep -q "モード別追加プロンプト" "$char_file"; then
    echo "（モード別）"
    awk '
      /モード別追加プロンプト/ { printing=1; next }
      printing && /^```$/ && !inside { inside=1; next }
      printing && /^```$/ && inside { print ""; printing=0; inside=0; next }
      printing && inside { print }
    ' "$char_file"
  fi
done

# ── ページ固有の禁止事項を抽出 ──
PAGE_PROHIBITIONS=$(grep -i "禁止" "$PAGE_FILE" 2>/dev/null | grep -v "^#" | head -5)

echo "──────────────────────────────────────────"
echo "■ 禁止事項（プロンプト末尾に必ず含めること）"
echo "──────────────────────────────────────────"
echo ""
echo "Do not change: face shape, hairstyle, costume details, character age impression."
echo "Do not add: extra characters, extra objects, text artifacts."
if [ -n "$PAGE_PROHIBITIONS" ]; then
  echo ""
  echo "（ページ固有の禁止事項 → 英語に変換して追記）"
  echo "$PAGE_PROHIBITIONS"
fi
echo ""

# ── 出力フォーマット ──
echo "──────────────────────────────────────────"
echo "■ 出力フォーマット（この構造で出力）"
echo "──────────────────────────────────────────"
echo ""
cat << 'TEMPLATE'
Japanese manga page, black and white.
Keep character identity consistent with reference image.

Panel 1: [設計書コマ1から変換]
Panel 2: [設計書コマ2から変換]
...

Composition: [ページ全体の構図方針]
Camera: [使用するカメラアングル]
Mood: [ページの雰囲気・トーン]

Do not change: face shape, hairstyle, costume details, character age impression.
Do not add: extra characters, extra objects, text artifacts.
[ページ固有の禁止事項を英語で追記]
TEMPLATE
