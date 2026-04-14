# Nano Banana プロンプト作成チェックリスト

**最終更新日: 2026-04-14**
**目的: プロンプト作成時に毎回参照し、技法・ルールの欠落を防ぐ**

---

## 🚨 絶対違反禁止ルール（過去500回以上指摘されている最重要項目）

**これらが守られていないと即ページ全体を作り直す。言い訳は一切不可。**

### ルール1: 日本漫画の読み方向は「右上→左下」

- ❌ 禁止: `Eye flow: top-left to bottom-right`、`左上→右下`
- ✅ 必須: `Eye flow: top-RIGHT to bottom-LEFT (Japanese manga reading direction, right-to-left)`
- **ページの最後のコマ（オチ・決めゼリフ）は必ず「下段左」に置く**
- 2コマ並列時：**先に読むコマが右、後に読むコマが左**
- 例: コマ3→コマ4の順なら、コマ3が「下段右」、コマ4が「下段左」

### ルール2: 縦長ポートレート必須

- ❌ 禁止: 横長・2x2グリッド・ランドスケープで出力される
- ✅ 必須: プロンプト冒頭に `Vertical single-page manga layout, portrait orientation, taller than wide.` を書く
- ✅ 必須: `Aspect ratio: portrait page (vertical manga page, NOT landscape, NOT 2x2 grid)`
- パネル配置は**上から下に縦に積む**と明示する（Panel 1 on top, Panel 2 below, etc.）

### ルール3: メタラベル・注釈を絶対にプロンプト本文に書かない

**AIはプロンプトの文字を画面にテキストとして描くため、以下は全部NG：**

- ❌ 禁止: `CLIMAX PANEL`, `CLIMAX`, `MAIN SHOWCASE`
- ❌ 禁止: `（溜め）`, `（見せ場）`, `（感情の解放）`, `（対比）`, `（間）`, `（呼吸）`, `（ページ引き）`
- ❌ 禁止: `[STYLE: ... Panel 1 sketchy setup（溜め）...]` のような日本語注釈混じりメタタグ
- ✅ 必須: メタ情報は**変換者メモ**（プロンプト本文の外）に書く
- ✅ 必須: プロンプト本文には「描いて欲しい絵」と「セリフ」だけを書く

### ルール4: 大文字/小文字の区別表記もプロンプト本文に書かない

- ❌ 禁止: `大文字「やっぱり運営は天才的だ！」`、`小文字「まだSTEPNは死んでないぞ！！」`
- ✅ 必須: テキスト処理指示は英語で別途記述（例：`Large bold impact text for the declaration, smaller supporting text for the follow-up`）、そしてセリフ本体は「」で囲むだけ

---

## 必須チェック項目（1つでも欠けたら不合格）

### A. 構造ルール

- [ ] **固定スタイルプロンプト**を冒頭に含めている（`art-style.md`記載の固定文）
- [ ] **[STYLE: Togashi hybrid method]** を指定している（setupはラフ、climaxは精密描写）
- [ ] **[DENSITY LEVEL: Lv.X]** を各コマに指定している
- [ ] **固定Do Not**（face shape, hairstyle, costume details, character age impression / extra characters, extra objects, text artifacts）を含めている
- [ ] **ページ固有の禁止事項**を英語Do Not句で含めている

### B. セリフ・テキスト（最重要 — 過去100回指摘済み）

- [ ] **セリフは日本語のまま**プロンプトに含めている（英語に翻訳しない）
- [ ] セリフに**話者名ラベル（「翔一：」等）を含めていない**（AIが画面にテキストとして描く）
- [ ] 大文字インパクトテキスト（「終わった」「Comfort」等）は**日本語で**記載している
- [ ] セリフの長さに応じた視覚処理を指定している（短文→large bold / 長文→multiple lines, varying sizes）

### C. 漫画文法6原則（`03_manga-grammar.md`）

- [ ] **原則1: 溜め→解放** — 見せ場コマの前に溜めコマ（静・余白・ワイドショット）がある
- [ ] **原則2: 視線誘導** — 左上→右下に視線が通る構成になっている
- [ ] **原則3: 重要セリフは小コマ** — ストーリー上重要なセリフが小コマに配置されている
- [ ] **原則4: 感情変化は顔アップ** — 感情の転換点が顔クローズアップで描かれている
- [ ] **原則5: 1コマ1機能** — 説明コマと感情コマが混在していない
- [ ] **原則6: オチ前に余白** — ページ末やフックの前に余白（間・呼吸）がある

### D. キャラクター固定プロンプト

- [ ] 翔一: `A 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in.` をそのまま使用
- [ ] 翔一のモード指定が正しい（ANALYSIS / CONFIDENT / PAPA / CASUAL WALK 等）
- [ ] クロちゃん登場時: 固定英語プロンプト（`characters/kuro-chan.md`記載）をそのまま使用
- [ ] 禁止モード（FUTON死んだ魚の目 / REVELATION天啓モード）を使っていない

### E. 作画ルール

- [ ] スマホ画面は**10-15度傾けたパース**で描く指示がある（フラット禁止）
- [ ] シアン(#00BCD4)は**クロちゃんのロボ要素 + スマホ画面光のみ**に限定している
- [ ] 群衆シーンでは**個別の顔を描かない**（dark silhouettes only）
- [ ] 横顔指示は**strict side profile view, not front-facing** と明示的に書いている
- [ ] 密度Lv.1-2（ラフ）とLv.4-5（精密）の**落差を最大化**する指示がある

---

## プロンプト固定順序（`prohibited-items.md`記載）

```
ASPECT RATIO → REFERENCE → [STYLE] → [DENSITY LEVEL] → [SCENE] → [CHARACTERS] → [COMPOSITION] → [DIALOGUE] → [LIGHTING] → [BACKGROUND]
```

---

## 固定スタイルプロンプト（本編用 — 毎回冒頭に貼る）

```
Black-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Single accent color: cyan (#00BCD4) ONLY for Kuro-chan's robot elements and smartphone screen glow. No other colors. Smartphone screens drawn at 10-15 degree tilt, never flat.
```

---

## セリフの書き方パターン

| セリフの特徴 | プロンプトでの視覚処理 |
|---|---|
| 短い叫び（4文字以下）例:「終わった」 | Large bold impact text, single phrase dominating panel |
| 中程度の感嘆（10-20文字）例:「ゲームのルールが……変わった」 | Bold text with moderate size, allowing breathing room |
| 長文の台詞（20文字以上） | Multiple lines of text in varying sizes wrapping around character |
| 2行構成の台詞 | Two separate text elements — specify placement (above/below, left/right) |
| 独白・モノローグ | Thought text in smaller font, placed in negative space |
| 列挙・箇条書き | Enumeration text, stacked vertically in small panel |

---

## コマ割りパターン集（確立済み）

| パターン名 | 構成 | 用途 | 使用実績 |
|---|---|---|---|
| 魚住パロディ型 | 大ゴマ80% + 下段小コマ | 衝撃オープニング | EP01 P01 |
| 三段構成 | 上30% + 中30% + 下40% | 標準的な展開ページ | EP01 P03 |
| 溜め→解放2段 | 上段setup + 下段impact | 見せ場直前 | EP02 P02 |
| 概念図→スケール→感情 | 情報図解 → 圧倒数字 → 顔アップ | 知的興奮のクライマックス | EP02 P03 |
| 分析→証拠→間→決断 | バスト → スマホ → 横顔小コマ → 顔アップ | 決断ページ | EP02 P04 |
| 全面スプラッシュ | 1コマ全面 | 変身・覚醒シーン | EP01 P06 |
| 後ろ姿+振り返り片目 | 群衆 + 主人公背面 + 片目 | エピソード末の引き | EP01 P11 |
| 対角線5コマ | 右上大 → 対角小3 → 左下大 | 高速視線誘導 + 感情着地 | 未使用（あかね噺参照） |

---

## 失敗パターンと対策（差分ログ蓄積）

| 失敗 | 原因 | 対策プロンプト |
|---|---|---|
| 群衆に個別の顔 | シルエット指示不足 | `no individual facial features on crowd, dark silhouettes only` |
| 横顔が正面向きに | 曖昧な指示 | `strict side profile view, not front-facing` |
| パネル重複 | 構造指示の曖昧さ | `SINGLE panel — no duplicates` |
| 背景にテキスト混入 | テキスト指示の漏れ | `NO visible text labels in background` |
| 英語テキストが出力される | セリフを英語で書いた | **セリフは必ず日本語で記載する** |
| ドヤ顔が出すぎる | smug/confident の多用 | 場面に合った表情を選ぶ（ワクワク、気づき等） |
| 暗すぎるビジュアル | dark atmosphere指示 | `weariness, NOT despair` 等で明示的に区別 |

---

## 1ページの黄金律

**読者を「次のページが欲しくて仕方ない」状態にすることがすべて。**
**「起」または「起承」どまりで終わる。**
