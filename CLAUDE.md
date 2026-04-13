# CLAUDE.md — 漫画制作ワークフロー操作ガイド

このリポジトリは「WEB3.0 終わたから」の漫画制作ワークフローを管理しています。
ユーザーはGitHubの操作に慣れていないため、**git/GitHubの操作はすべてあなた（Claude Code）が代行してください。**

## あなたの役割

- ファイルの作成・編集・削除はすべてあなたが行う
- gitのcommit・pushもあなたが行う（ユーザーに git コマンドを教えない）
- ユーザーが「保存して」「アップして」と言ったら、commit + push する
- ユーザーが「新しいエピソードを作って」と言ったら、テンプレートをコピーして新エピソードを作成する

## リポジトリ構造

```
claude-knowledge/   Claude Projectsにアップロードする固定ナレッジ（6ファイル）
bible/              漫画バイブル（キャラ・世界観・作画ルール等の詳細版）
episodes/           エピソード別の設計書・プロンプト
  _episode-template/  新エピソード用テンプレート
  ep01/               エピソード1（サンプル）
diff-log/           画像生成の差分ログ（成功/失敗の記録）
references/         参照画像の管理
migration/          既存Claude Projectsからの情報移行ツール
scripts/            操作用ヘルパースクリプト
```

## よく使う操作

### 新エピソードの作成
ユーザーが「EP02を作って」等と言ったら:
```bash
bash scripts/new-episode.sh 02
```

### バイブルの統合（bible/ → claude-knowledge/01_manga-bible.md）
ユーザーが「バイブルを統合して」「ナレッジを更新して」と言ったら:
```bash
bash scripts/sync-bible.sh
```

### 差分ログの新規作成
ユーザーが「P01のログを作って」等と言ったら:
```bash
bash scripts/new-diff-log.sh 01 P01
```

### 保存（commit + push）
ユーザーが「保存して」「アップして」「更新して」と言ったら:
```bash
git add -A && git commit -m "[変更内容の要約]" && git push
```

---

## ワークフロー改善ツール（コピペ削減・セッション管理・情報劣化防止）

### Thread B の準備（プロンプト変換）
ユーザーが「Thread Bの準備して」「プロンプト変換の準備」「P02をプロンプトにして」等と言ったら:
```bash
bash scripts/bundle-thread-b.sh 01 P02
```
→ 出力をそのまま Claude Projects の新しい Thread B に貼り付けられる。キャラ英語プロンプト・禁止事項・出力テンプレートを自動で含む。

### Thread A の準備（ページ設計）
ユーザーが「Thread Aの準備して」「P04の設計始めたい」「次のページ」等と言ったら:
```bash
bash scripts/bundle-thread-a.sh 01 P04
```
→ 話の設計書・前ページ・差分ログフィードバックを自動で含む。

### パイプライン検証
ユーザーが「チェックして」「確認して」「整合性見て」等と言ったら:
```bash
bash scripts/validate-pipeline.sh 01 P02   # 単一ページ
bash scripts/validate-pipeline.sh 01        # 全ページ
```
→ 設計書→プロンプト→差分ログ間の情報欠落を自動検出。

### セッション終了・チェックポイント
ユーザーが「セッション終わり」「今日はここまで」「チェックポイント」等と言ったら:
```bash
bash scripts/checkpoint-save.sh "EP01 P03まで完了、P04は構図ラフ途中"
```
→ 現在の状態をスナップショットとして `sessions/checkpoints/` に保存。次回は最新チェックポイントを読んで引き継ぎ。

### セッション再開
ユーザーが「前の続き」「どこまでやった？」等と言ったら:
1. `sessions/checkpoints/` の最新ファイルを読む
2. 現在の状況をユーザーに伝える
3. 次のアクションを提案する

## 5層アーキテクチャ

1. **漫画バイブル** (`bible/` + `claude-knowledge/01_manga-bible.md`) — 不変の正本。キャラ設定、世界観、作画ルール
2. **話の設計書** (`episodes/epXX/episode-design.md`) — エピソードの目的、オチ、感情の波
3. **ページ設計書** (`episodes/epXX/pages/PXX.md`) — コマ単位の構図・表情・セリフ確定
4. **Nano Bananaプロンプト** (`episodes/epXX/prompts/PXX-prompt.md`) — ページ設計を英語プロンプトに変換
5. **差分ログ** (`diff-log/log-epXX-PXX.md`) — 生成結果の記録・禁止事項のフィードバック

## ファイル編集のルール

- `bible/` 配下のファイルを編集した場合、ユーザーに「バイブル統合版（claude-knowledge/01_manga-bible.md）も更新しますか？」と確認する
- `diff-log/` にバイブル更新候補がある場合、ユーザーに通知する
- テンプレートファイル（`_` で始まるもの）は直接編集しない。コピーして使う

## 制作サイクルのサポート

ユーザーが漫画制作の各ステップで助けを求めたら、以下の流れに沿ってサポートする:

1. **企画** → `episodes/epXX/episode-design.md` を編集
2. **ページ設計** → `episodes/epXX/pages/PXX.md` を作成・編集（3パス: 構図→表情→セリフ）
3. **プロンプト変換** → `episodes/epXX/prompts/PXX-prompt.md` を作成。`claude-knowledge/04_prompt-conversion-rules.md` の変換辞書を参照
4. **差分ログ** → `diff-log/log-epXX-PXX.md` を作成・編集
5. **バイブル更新** → ユーザー承認後に `bible/` と `claude-knowledge/01_manga-bible.md` を更新

## 注意事項

- ユーザーにgitコマンドやGitHub操作を要求しない
- 「プルリクエスト」「マージ」等のGit用語は使わない。「保存」「更新」「反映」で伝える
- 英語のシステムファイルはユーザーに見せる必要がない。裏方として扱う
- ユーザーが「これ使って」とテキストを渡してきたら、適切なファイルに書き込む
