# グローバル禁止事項

**最終更新日: 2026-04-12**

## Nano Banana 蓄積禁止事項（Do Not指示リスト）

1. 翔一の布団モード（死んだ魚の目）の使用 — ワクワクフェーズでは永久封印
2. 天啓モード（正面顔＋眼鏡シアン発光＋スピードライン） — 永久禁止
3. プロンプト内セリフに話者名ラベル（「翔一：」等） — AIが画面上にテキストとして描く
4. クロちゃんのお腹露出（ブレザー着用維持。CLAUDEマークは服の上）
5. 冨樫型ハイブリッドの[STYLE]指示省略
6. 修正依頼への「出しますか？」確認 — 即座に全文出力
7. 職業図鑑カードでIMG_3631と異なるフレーム（銀フレーム、青背景、minimalistフレームNG）
8. 職業図鑑カードに「STEPN 職業編」の大見出し（表紙専用）
9. スマホ画面をフラットに描く — 必ず10〜15度傾ける
10. 著作権キャラにモザイク — 黒い横線センサーバーのみ
11. クロちゃんのロボ要素省略（片腕クローム、機械の目、顎メタリック、首回路）
12. ミドリ（緑色）露出
13. サイドキャラにシアン使用

## 画像生成での失敗パターン

### パネル重複
- 問題: ABILITY RANK/STATUSパネルが2つ出る
- 原因: プロンプトの構造指示が曖昧
- 対策: 「SINGLE ABILITY RANK panel, SINGLE STATUS panel — no duplicates」を明記

### 背景テキスト混入
- 問題: 背景にテキストラベルが表示される
- 原因: テキスト指示が背景に漏れる
- 対策: 「NO visible text labels in background」を明記

### フレーム不統一（職業図鑑）
- 問題: 銀フレームやminimalistフレームになる
- 原因: IMG_3631テンプレート未参照
- 対策: IMG_3631を「ABSOLUTE FRAME TEMPLATE」として毎回添付

### 否定形の不明確さ
- 問題: 禁止指示が無視される
- 原因: 曖昧な否定形
- 対策: 「NOT a blue background」「NOT silver frame」等と明示的に書く

## Nano Banana プロンプト固定順序

```
ASPECT RATIO → REFERENCE → [STYLE（Togashi hybrid method必須）] → [DENSITY LEVEL: Lv.X] → [SCENE] → [CHARACTERS] → [COMPOSITION] → [DIALOGUE] → [LIGHTING] → [BACKGROUND]
```

## 修正時のルール
- 確認なしに即座に完全な全文プロンプトを出力する
- 「出しますか？」と聞かない
