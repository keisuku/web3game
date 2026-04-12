# 制作ワークフローガイド

<!-- EN: Complete production cycle documentation. Both Claude and the human editor should follow this workflow. -->

---

## ロール分担

| 役割 | 担当 | 権限 |
|---|---|---|
| 企画整理・変換 | Claude | フォーマットに従った整形のみ |
| 編集・監修・最終判断 | 人間（あなた） | すべての採用/却下/修正の決定権 |
| 不変の正本 | 漫画バイブル | 唯一の設定情報源 |
| 画像化 | Nano Banana（Gemini） | プロンプトに基づく画像生成 |
| 進化の記録 | 差分ログ | 失敗/成功のフィードバック蓄積 |

<!-- EN: Claude = organization/conversion only. Human = editor with all decision authority. Bible = single source of truth. Nano Banana = image rendering. Diff log = feedback accumulation. -->

---

## 制作サイクル（6ステップ）

### Step 1: エピソード企画

```
担当: 人間（発案）→ Claude Thread A（整理）
入力: 人間のアイデア・ネタ・リサーチ結果
出力: 話の設計書（episode-design.md）
判断: 人間が承認して次へ
```

1. 人間がアイデアやリサーチ結果をClaude Thread Aに渡す
2. Claudeは `02_output-format-rules.md` のエピソード企画フォーマットで整形する
3. 人間が出力を確認し、「採用/却下/修正」を決定する
4. **Claudeに再び自由作文させない。** 修正が必要なら、人間が具体的に指示する
5. 承認されたら `episodes/epXX/episode-design.md` として保存する

### Step 2: ページ設計（3パスループ）

```
担当: Claude Thread A（設計）← 人間（各パスで監修）
入力: 承認済み話の設計書 + 漫画バイブル + 漫画文法
出力: 各ページ設計書（pages/PXX.md）
判断: 各パスで人間が確認
```

**Pass 1: 構図ラフ**
1. Claudeがコマ割りと視線誘導の配置を設計する
2. セリフは仮、表情はラベルのみ
3. 人間が確認 → 承認 or 修正指示

**Pass 2: 表情・流れ補正**
1. Claudeがキャラクターの感情表現を確定する
2. コマ間のテンポを確認する
3. 人間が確認 → 承認 or 修正指示

**Pass 3: セリフ・演出仕上げ**
1. セリフの文字数・配置を確定する
2. 効果音の配置を決定する
3. 漫画文法チェックリストを全項目確認する
4. 人間が最終承認 → ページ設計書を確定

### Step 3: プロンプト変換

```
担当: Claude Thread B（機械的変換）
入力: 承認済みページ設計書 + 変換ルール + バイブル英語プロンプト
出力: Nano Banana用プロンプト（prompts/PXX-prompt.md）
判断: 人間が確認してNano Bananaに投入
```

1. **新しいチャット（Thread B）を開く**
2. 承認済みのページ設計書をThread Bに渡す
3. Claudeは `04_prompt-conversion-rules.md` の変換辞書に従い、機械的に英語プロンプトに変換する
4. **新しい情報を足さない。** 設計書にない要素は変換しない
5. 人間がプロンプトを確認し、Nano Bananaに投入する

### Step 4: 画像生成と反復

```
担当: 人間（Nano Banana操作）→ 人間（評価）
入力: プロンプト + 参照画像
出力: 生成画像
判断: 人間が評価
```

1. Nano Bananaにプロンプトを投入する
2. 参照画像がある場合は一緒にアップロードする
3. 生成結果を評価する:
   - **成功** → Step 5で記録、次のページへ
   - **部分成功** → Nano Banana上でプロンプトを微調整してリトライ
   - **失敗** → Step 5で記録、プロンプトを根本修正

**3回ループの推奨:**
- 1回目: 構図優先でラフ生成
- 2回目: 表情とコマの流れだけ修正
- 3回目: セリフと演出の微調整

### Step 5: 差分ログ記録

```
担当: 人間（記録）→ Claude（整理）
入力: 生成結果の評価
出力: 差分ログエントリ（diff-log/log-epXX-PXX.md）
判断: 人間がバイブル更新の要否を判断
```

1. 生成結果（成功/失敗/部分成功）を差分ログに記録する
2. 問題点、良かった点、次回への反映を記載する
3. バイブル更新候補がある場合はフラグを立てる

### Step 6: バイブル更新（まれに実施）

```
担当: 人間のみ（決定権）
入力: 差分ログからの更新候補
出力: 漫画バイブルの改訂
```

1. 差分ログに蓄積された更新候補を確認する
2. **人間が判断して**バイブルを更新する（Claudeは提案のみ）
3. 更新内容を `diff-log/prohibition-updates.md` に記録する
4. `claude-knowledge/01_manga-bible.md` を再アップロードする

---

## 新エピソード開始の手順

1. `episodes/_episode-template/` を `episodes/epXX/` にコピーする
2. Step 1からサイクルを開始する
3. 完成したらStep 5の差分ログを集約する

```bash
cp -r episodes/_episode-template/ episodes/ep02/
```

---

## よくある失敗と対策

| 失敗パターン | 原因 | 対策 |
|---|---|---|
| Claudeが設定を忘れる | ナレッジの未参照 | Thread開始時に参照ドキュメントを明示指定 |
| キャラクターが別人になる | 英語プロンプトのブレ | バイブルの固定英語プロンプトを毎回コピペ |
| コマ割りが単調になる | 漫画文法の未適用 | Pass 1で6原則チェックリストを実行 |
| プロンプトが肥大化する | 情報の追加 | Thread Bでは変換のみ、足さない |
| トーンが作品と合わない | バイブル未参照 | art-style.md の固定スタイルプロンプトを使う |
