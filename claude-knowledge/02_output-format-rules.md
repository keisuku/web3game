# 出力フォーマット規定

<!-- EN: This document specifies the exact fixed formats Claude must use for every output type. Free-form output is prohibited. -->

すべての出力は、以下の指定フォーマットに厳密に従ってください。
フォーマット外の自由記述は禁止です。

---

## 1. エピソード企画の整理出力（Thread A）

編集者からネタやリサーチ結果を受け取った際の出力フォーマット:

<!-- EN: Episode planning output format. All 7 fields are mandatory. -->

```
## 企画要約
[1〜2文で要約]

## 面白さの核
[この話が面白い理由を1点に絞って記述]

## 感情のピーク
[最も感情が高まる瞬間とその内容]

## 漫画として効く見せ場
- 見せ場1: [内容]
- 見せ場2: [内容]
- 見せ場3: [内容（あれば）]

## コマ割り上の注意
[このエピソード特有のコマ割りで気をつけるべきこと]

## 使うべき参照画像
- [ref_id]: [使用場面と理由]

## 使うべきではない表現
- [表現]: [避ける理由]
```

**7項目すべて必須。** 該当なしの場合は「なし」と記入。

---

## 2. ページ設計書の出力（Thread A）

<!-- EN: Page design output format. Each panel must have composition, expression, and dialogue summary. -->

```
ページID: P[XX]
エピソードID: EP[XX]
目的: [このページの機能・役割]

コマ1: [構図] / [表情・感情] / [セリフ要約]
コマ2: [構図] / [表情・感情] / [セリフ要約]
コマ3: [構図] / [表情・感情] / [セリフ要約]
コマ4: [構図] / [表情・感情] / [セリフ要約]

参照画像: [ref_id1], [ref_id2]
禁止: [ページ固有の禁止事項]
```

各コマは `構図 / 表情・感情 / セリフ要約` の3要素を `/` 区切りで記述。
コマ数はページの目的に応じて2〜6の範囲で調整。

---

## 3. Nano Banana用プロンプト出力（Thread B）

<!-- EN: Nano Banana prompt output format. This is the ONLY output type that uses English. Mechanically convert from approved page design — do NOT add new creative information. -->

```
Japanese manga page, black and white.
Keep character identity consistent with reference image.

Panel 1: [ページ設計書コマ1から変換]
Panel 2: [ページ設計書コマ2から変換]
Panel 3: [ページ設計書コマ3から変換]
Panel 4: [ページ設計書コマ4から変換]

Composition: [ページ全体の構図方針]
Camera: [使用するカメラアングル]
Mood: [ページの雰囲気・トーン]

Do not change: face shape, hairstyle, costume details, character age impression.
Do not add: extra characters, extra objects, text artifacts.
[ページ固有の禁止事項を英語で追記]
```

**このフォーマットは英語で出力すること。**
ページ設計書にない情報を追加しないこと。

---

## 4. 差分ログ出力

<!-- EN: Diff log output format. Used after image generation attempts. -->

```
日付: [YYYY-MM-DD]
ページID: P[XX]
エピソードID: EP[XX]
試行番号: [N]

結果: [成功 / 失敗 / 部分成功]

問題点:
- [発生した問題]

良かった点:
- [うまくいった要素]

次回への反映:
- [次の試行で変更すべきこと]

バイブル更新候補: [あり / なし]
更新内容: [ありの場合、何を更新するか]
```

---

## 5. 採用/却下の判断待ち出力

<!-- EN: When presenting options for editor review. Always present as numbered options, never as recommendations. -->

編集者に判断を仰ぐ際のフォーマット:

```
## 候補一覧

### 候補1
[内容]

### 候補2
[内容]

### 候補3
[内容（あれば）]

## 判断が必要な点
[どの観点で選ぶべきか、判断基準の提示]
```

**「おすすめ」や「こちらが良い」等の主観的推奨は禁止。** 候補を並列で提示し、編集者が選ぶ。
