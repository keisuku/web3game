# 教訓 — プロンプトは肯定文で書く（2026-04-19 確定）

**出典**: Web版セッションでEP03の画像生成時にGemini 2.5 Flash Imageが「縦4コマ」ではなく「2×3のキャラ表情チャート（FUTON MODE / WORK MODE / REVELATION MODE 等のラベル付き）」を生成した事件。

**修正コミット**: `72a4673 プロンプト制約を肯定文化・キャラチャート誤生成を防止`

---

## なぜ否定文がダメなのか

画像生成モデル（Gemini 2.5 Flash Image / Nano Banana）は、プロンプトに含まれる **名詞を素材として拾う** 性質がある。
「NO revelation mode」「NOT dead-fish eyes」「Do NOT draw chibi face」のような記述は、モデルにとって:

- "revelation mode" = 素材候補
- "dead-fish eyes" = 素材候補
- "chibi face" = 素材候補

と解釈され、**禁止していたはずの要素が画面に出現する**。

さらに深刻なのは、「WORK mode」「FUTON mode」「REVELATION mode」のような **"mode"という英名詞が5回以上** プロンプトに登場すると、モデルは:

> 「色々なmodeを並べて描け」＝キャラ紹介図（表情チャート）

と解釈し、**縦積みマンガページではなく、キャラクターデザインシートが生成される**。

---

## 絶対ルール

### ❌ 使わない語彙・パターン

| NGパターン | 例 |
|---|---|
| "NOT X" / "NO X" | NO revelation mode / NOT dead-fish eyes |
| "Do not / Do NOT X" | Do NOT draw cyan / Do not render flame eyes |
| "NEVER X" | NEVER omit / NEVER on skin |
| "without X" | without star-flash（一部例外OK、但し注意） |
| モード名の連呼 | WORK mode / FUTON mode / REVELATION mode |
| 「not a grid」などの否定的形式警告（一部例外OK、下記参照） | NOT a 2x2 grid / NOT landscape |

### ✅ 使う語彙・パターン

| OKパターン | 例 |
|---|---|
| 肯定的描写 | "Natural pupil size with small highlights" |
| "X instead" / "X only" | "Monochrome greyscale only" |
| 機能説明 | "Eyes carry a lucid stunned expression" |
| 素材そのもの | "White outlines and black linework for sweat beads" |

### ⚠️ 例外的にOKなnot表現（1-2個まで）

- `"one narrative page, not a collage, not a grid of character expressions, not a reference sheet with labels"` — **これは唯一の例外**。Geminiが特にキャラチャート誤生成しやすいため、この1文だけ "not a X" 形式で防御。
- `"not just fingertips"` 等の "not just X" は素材拾いリスクが低い（"fingertips"は通常のパーツ名）ので限定的にOK

---

## 変換辞書

プロンプトを書くときの置換テーブル:

| 否定表現 | 肯定表現 |
|---|---|
| NOT dead-fish eyes | natural pupil size with small highlights |
| NO revelation mode | calm eye rendering with small pupil highlights |
| Do NOT use cyan | Monochrome greyscale; cyan reserved for phone/laptop screens and Kuro-chan's robot parts |
| NOT in a speech bubble | rendered as a handwriting caption |
| NOT flat | at a 10-15 degree tilt |
| NOT western comic | Japanese manga format |
| Do NOT draw individual faces on crowd | Crowd rendered as dark silhouettes only |
| NOT exaggerated | naturally proportioned |
| NOT cyan or special-colored (dog) | rendered in normal white-and-brown markings |
| NOT a 2x2 grid | Single continuous narrative page, vertical tall canvas |
| Do NOT split into multiple panels | One continuous full-page single panel |
| Face NOT shown | Face out of frame |
| Do NOT render [X] | Describe what TO render instead |

---

## 運用ルール（今後のページ制作）

### 新規プロンプト作成時
- 書き始める前にこのファイルを読む
- `Do NOT` / `NO ` / `NEVER` を打ち込む前に **肯定形に言い換えられるか** を考える
- 書いた後、`grep -c "Do NOT\|NEVER\| NOT "` で残存チェック

### 既存プロンプト改訂時
- `scripts/refactor-prompts-positive.py` / `-v2.py` で一括変換可能
- ただし自動変換後は必ず手動でレビュー（文脈が壊れていないか）

### 推論チェック
- Geminiのビルド出力が予期しないレイアウト（2x2グリッド・キャラチャート）を出したら:
  1. プロンプトの "mode" 出現回数をカウント
  2. "NOT / NEVER / Do NOT" をカウント
  3. 多ければこのファイルのパターンで肯定化
  4. 再ビルド → 再生成

---

## 影響範囲

このルールは以下すべてに適用する:
- `bible/prompt-constants/base-style.md`
- `bible/prompt-constants/prohibited-core.md`（**"RENDERING CONSTRAINTS"** という肯定語に改名済み）
- `bible/prompt-constants/layouts/*.md`
- `bible/prompt-constants/characters/*.md`
- `episodes/*/prompts/PXX-prompt.md` すべて
- `bible/technique-library.md`（将来の新技法追加時も肯定形で）

---

## 教訓の要約（1行で）

**画像生成AIに禁止を伝えたければ、肯定形で描写する。「NO X」は「X を描け」と読まれる。**
