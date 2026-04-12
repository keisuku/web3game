# WEB3.0 終わたから — 漫画制作ワークフロー

Claude Projects + Nano Banana（Gemini画像生成）を使った漫画制作のためのドキュメント管理システムです。

---

## コンセプト

**Claudeに覚えておいてもらう代わりに、ドキュメントに覚えさせる。**

| 役割 | 担当 |
|---|---|
| 企画整理・変換 | Claude（フォーマット変換のみ） |
| 編集・監修・最終判断 | あなた |
| 不変の正本 | 漫画バイブル |
| 画像化 | Nano Banana（Gemini） |
| 進化の記録 | 差分ログ |

---

## ディレクトリ構造

```
claude-knowledge/  ... Claude Projectsにアップロードする固定ナレッジ（6ファイル）
bible/             ... 漫画バイブルの詳細版（あなたが編集する作業ファイル）
episodes/          ... エピソード別の設計書・プロンプト
diff-log/          ... 生成の成功/失敗記録
references/        ... 参照画像の管理
migration/         ... 既存プロジェクトからの情報移行ツール
```

---

## クイックスタート

### 初回セットアップ（情報の移行）

1. `migration/extraction-prompts.md` を開く
2. 各プロンプトを既存のClaude Projectsチャットにコピペして投げる
3. Claudeの出力を、指定された `bible/` 配下のファイルに貼り付ける
4. 全項目の引き出しが完了したら、`claude-knowledge/01_manga-bible.md` に統合する
5. `claude-knowledge/` の6ファイルをClaude Projectsの新しいプロジェクトにアップロードする

### 新エピソードの開始

```bash
cp -r episodes/_episode-template/ episodes/ep02/
```

### 制作サイクル

1. **企画**: アイデアをClaude Thread Aに渡す → 固定フォーマットで整形される
2. **ページ設計**: 3パスループ（構図→表情→セリフ）で確定する
3. **プロンプト変換**: Claude Thread Bで機械的に英語プロンプトに変換する
4. **画像生成**: Nano Bananaにプロンプト+参照画像を投入する
5. **記録**: 結果を差分ログに記録する
6. **改善**: 差分ログからバイブルを更新する（まれに）

詳細は `claude-knowledge/05_workflow-guide.md` を参照。

---

## 5層アーキテクチャ

| 層 | ファイル | 更新頻度 |
|---|---|---|
| 漫画バイブル | `claude-knowledge/01_manga-bible.md` + `bible/` | まれ（編集者判断のみ） |
| 話の設計書 | `episodes/epXX/episode-design.md` | エピソードごと |
| ページ設計書 | `episodes/epXX/pages/PXX.md` | ページごと |
| Nano Bananaプロンプト | `episodes/epXX/prompts/PXX-prompt.md` | ページごと |
| 差分ログ | `diff-log/log-epXX-PXX.md` | 生成試行ごと |
