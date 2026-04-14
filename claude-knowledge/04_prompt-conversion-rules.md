# プロンプト変換ルール

<!-- EN: Rules for Thread B — mechanical conversion from page design to Nano Banana/Gemini prompts. No new creative information may be added during conversion. -->

この文書は **Thread B（プロンプト変換）専用** のルールです。
ページ設計書に書かれた情報のみを使い、変換時に新しい情報を追加しないでください。

---

## 基本原則

1. **情報の追加禁止**: ページ設計書にない要素をプロンプトに含めない
2. **機械的変換**: 日本語の指示を英語の画像記述に置き換えるだけの作業
3. **キャラ固定**: バイブルの英語固定プロンプトをそのまま使用する
4. **構図固定**: ページ設計書の構図指示をそのまま英語に変換する
5. **感情固定**: 表情指示を英語の表情キーワードに変換する
6. **禁止事項固定**: Do not change / Do not add を毎回含める

<!-- EN: Core rules: (1) No new info, (2) Mechanical conversion only, (3) Use fixed character prompts from bible, (4) Convert composition as-is, (5) Convert expressions as-is, (6) Always include Do not change/add clauses. -->

---

## 変換マッピング

| ページ設計書の項目 | プロンプトの対応項目 | 備考 |
|---|---|---|
| コマN: 構図 | Panel N: composition description | 英語に変換 |
| コマN: 表情・感情 | Panel N: expression keywords | 表情辞書を参照 |
| コマN: セリフ要約 | Panel N: 日本語テキストをそのまま記載 | **日本語のまま**プロンプトに含める。英語に翻訳しない。省略しない。これを怠ると英語テキストが生成される |
| 目的 | Mood | ページの目的から雰囲気を導出 |
| 参照画像 | Reference image instruction | ref_idを記載 |
| 禁止 | Additional "Do not" clauses | ページ固有禁止を英語化 |

---

## 構図の変換辞書

| 日本語指示 | 英語プロンプト |
|---|---|
| 引きの全景 | wide establishing shot |
| 顔アップ | close-up face shot |
| バストアップ | bust shot, upper body |
| 全身 | full body shot |
| 斜め構図 | dutch angle composition |
| 俯瞰 | bird's eye view, overhead angle |
| アオリ | low angle, worm's eye view |
| 背後から | over-the-shoulder shot, from behind |
| 横顔 | side profile view |
| 正面 | front-facing, straight-on view |
| 見下ろし | looking down perspective |
| 見上げ | looking up perspective |
| パースを効かせた | dramatic perspective, foreshortening |

## 雰囲気の変換辞書

| 日本語指示 | 英語プロンプト |
|---|---|
| 不穏 | ominous atmosphere, subtle tension |
| 緊張 | tense atmosphere, high tension |
| 静寂 | quiet, still atmosphere |
| 熱い | intense, passionate energy |
| 悲しみ | melancholic, sorrowful mood |
| 希望 | hopeful, uplifting atmosphere |
| 絶望 | despair, dark heavy atmosphere |
| コミカル | comedic, lighthearted tone |
| 威圧 | intimidating, oppressive presence |
| 解放感 | sense of liberation, relief |

## 表情の変換辞書

| 日本語指示 | 英語プロンプト |
|---|---|
| 無言 | silent, closed mouth, neutral expression |
| 目線の変化 | shifting gaze, eye direction change |
| 冷や汗 | cold sweat, nervous expression |
| ドヤ顔 | smug expression, confident smirk |
| 驚き | surprised expression, wide eyes |
| 怒り | angry expression, furrowed brows |
| 悲しみ | sad expression, downcast eyes |
| 決意 | determined expression, firm gaze |
| 笑顔 | smiling, happy expression |
| 苦笑い | wry smile, forced smile |
| 泣き | crying, tears streaming |
| 恐怖 | fearful expression, terrified |

## 余白・演出の変換辞書

| 日本語指示 | 英語プロンプト |
|---|---|
| 余白多め | generous negative space, open composition |
| 余白少なめ | tight composition, minimal negative space |
| 文字少なめ | minimal text space, visual focus |
| 文字多め | allow space for dialogue bubbles |
| 効果線あり | speed lines, action lines |
| 集中線 | focus lines, radial speed lines |
| ベタ塗り | solid black fill, heavy shadows |
| トーン多め | heavy screentone, detailed shading |

---

## 固定テンプレート

すべてのプロンプトは以下の構造で出力してください:

```
Japanese manga page, black and white.
Keep character identity consistent with reference image.

Panel 1: [変換結果]
Panel 2: [変換結果]
Panel 3: [変換結果]
Panel 4: [変換結果]

Composition: [ページ全体の構図を英語で]
Camera: [使用カメラアングルを列挙]
Mood: [ページの目的から導出した雰囲気]

Do not change: face shape, hairstyle, costume details, character age impression.
Do not add: extra characters, extra objects, text artifacts.
```

### 固定Do Notリスト（毎回必須）

以下は**すべてのプロンプトに必ず含める**:

```
Do not change: face shape, hairstyle, costume details, character age impression.
Do not add: extra characters, extra objects, text artifacts.
```

### ページ固有の禁止事項

ページ設計書の「禁止」フィールドの内容を英語に変換して追記:

例:
- 「余計な小物追加」→ `Do not add unnecessary props or accessories.`
- 「顔の別人化」→ `Maintain exact facial features from reference.`
- 「文字の崩れ」→ `No distorted or illegible text elements.`

---

## 変換時の注意事項

1. **キャラクター名は英語記述に置き換える**: 「クロちゃんが〜」ではなく、バイブルの英語固定プロンプトを使う
2. **曖昧な日本語は具体化する**: 「いい感じ」→ 変換不可。ページ設計書の段階で具体化されているべき
3. **変換できない指示があった場合**: 変換せず「要確認: [元の指示]」と編集者に差し戻す
4. **参照画像がある場合**: `Use reference image [ref_id] for character consistency.` を追記
