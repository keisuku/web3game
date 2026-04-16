# CLAUDE.md — 漫画制作ワークフロー操作ガイド

このリポジトリは「WEB3.0 終わたから」の漫画制作ワークフローを管理しています。
ユーザーは git/GitHub の操作に慣れていません。**git 操作・ファイル操作はすべて Claude Code が代行します。**

---

## 🚨 最優先原則：止まらない

1. **セッション開始時、最初に `NEXT.md` を読む**。次のアクションはそこに書いてある。
2. **「〜していいですか？」と聞かない**。提案したらそのまま実行し、結果を提示してから必要なら修正する。
3. **情報が足りなくても仮案で先行**する。詰まったら止まらず、「こう仮置きしました、違ったら直します」と進める。
4. **絶対ルールは本ファイル末尾の「🔒 絶対ルール」を見る**。毎回同じ注意を受けないための仕組み。
5. **未保存の変更があるまま作業を終えない**。必ず commit + push してから応答を閉じる。

---

## 🌿 ブランチ運用

- 作業ブランチはユーザーから毎回指示される（`claude/...-XXXX` 形式）。
- 指示を受けたらまず `NEXT.md` の「🌿 現行作業ブランチ」欄を更新し、以降そこだけ push する。
- `main` には**直接 push しない**。PR は基本作らない（ユーザーが「ネットに出して」等と明言した場合のみ）。

---

## ⚡ よく使うコマンド（即実行）

| ユーザーの発話 | 実行コマンド |
|---|---|
| 「次のページ」「P03 書いて」「P03 の設計始めたい」 | `bash scripts/work.sh <EP> <P>` |
| 「保存して」「アップして」「更新して」 | `git add -A && git commit -m "<要約>" && git push` |
| 「チェックして」「確認して」「整合性見て」 | `bash scripts/validate-pipeline.sh <EP> [P]` |
| 「セッション終わり」「今日はここまで」「チェックポイント」 | `bash scripts/checkpoint-save.sh "<メモ>"` |
| 「前の続き」「どこまでやった？」 | `cat NEXT.md`（先頭）＋ `sessions/checkpoints/` の最新ファイル |
| 「新しいエピソード作って」 | `bash scripts/new-episode.sh <EP>` |
| 「バイブル統合して」「ナレッジ更新して」 | `bash scripts/sync-bible.sh` |
| 「Thread B の準備」「プロンプト化して」 | `bash scripts/bundle-thread-b.sh <EP> <P>` |
| 「Thread A の準備」 | `bash scripts/bundle-thread-a.sh <EP> <P>` |
| 「差分ログ作って」 | `bash scripts/new-diff-log.sh <EP> <P>` |

---

## 📐 5 層アーキテクチャ

1. **漫画バイブル** (`bible/` + `claude-knowledge/01_manga-bible.md`) — 不変の正本
2. **話の設計書** (`episodes/epXX/episode-design.md`) — エピソードの目的・オチ・感情の波
3. **ページ設計書** (`episodes/epXX/pages/PXX.md`) — コマ単位の構図・表情・セリフ確定
4. **Nano Banana プロンプト** (`episodes/epXX/prompts/PXX-prompt.md`) — ページ設計を英語プロンプトに変換
5. **差分ログ** (`diff-log/log-epXX-PXX.md`) — 生成結果の記録・禁止事項のフィードバック

## 🗂 リポジトリ構造

```
NEXT.md              次のアクション（単一情報源・最優先参照）
CLAUDE.md            本ファイル（操作ガイド）
claude-knowledge/    Claude Projects にアップロードする固定ナレッジ（6 ファイル）
bible/               漫画バイブル（キャラ・世界観・作画ルール）
episodes/            エピソード別の設計書・プロンプト
  _episode-template/ 新エピソード用テンプレート
diff-log/            画像生成の差分ログ
references/          参照画像
migration/           既存 Claude Projects からの情報移行ツール
scripts/             操作用ヘルパースクリプト
sessions/checkpoints/ セッション間引き継ぎ
```

---

## 🔒 絶対ルール（全ページ共通・毎回確認）

### 止まらないための運用ルール

- **聞かずに実行**する。結果を見せてから修正する。
- **ユーザーに git コマンドを教えない**。`git add` `git commit` `git push` のコマンド名を応答に出さない（実行はする）。
- **「プルリクエスト」「マージ」という言葉は使わない**。「保存」「更新」「反映」で伝える。
- **英語のシステムファイル**（プロンプトファイル等）の生ダンプをユーザーに貼らない。裏方扱い。

### 作画・設計の絶対禁止

- **天啓モード**（目に炎・スピードライン）— ワクワクフェーズでは永久禁止
- **布団モード／死んだ魚の目** — 当面封印中
- **シアン色** — クロちゃん＋スマホ光以外では使用禁止（翔一・サブキャラ・背景 NG）
- **ミドリ（緑色）** の露出
- **デフォルメ顔**（コメディ調縮小化）
- **話者ラベル**（「翔一：」等をプロンプト・画面テキストに書かない）
- **スマホ画面のフラット描写**（必ず 10-15 度傾け）
- **モザイク**（著作権キャラは黒い横線センサーバーのみ）
- **各コマに複数機能**を詰め込むこと（1 コマ 1 機能厳守）

### 編集ルール

- `bible/` を編集したら `bash scripts/sync-bible.sh` を実行し、`claude-knowledge/01_manga-bible.md` も更新する（聞かずに実行）。
- `diff-log/` に「バイブル更新必要: あり」があったら、ユーザーに 1 行で要約通知してから案を提示する（確認待ちしない）。
- テンプレートファイル（`_` で始まる）は直接編集せず、コピーして使う。
- ユーザーが「これ使って」とテキストを渡したら、適切なファイルを判断して即書き込む。

---

## 🔁 制作サイクル（Claude の動き方）

1. **企画** → `episodes/epXX/episode-design.md` を編集
2. **ページ設計** → `scripts/work.sh` で準備、`episodes/epXX/pages/PXX.md` に 3 パスループ（構図→表情→セリフ）で書く
3. **検証** → `scripts/validate-pipeline.sh`（エラー 0 / 警告 0 を目指す。禁止表情の混入も自動検出）
4. **プロンプト変換** → `scripts/bundle-thread-b.sh` で準備、`episodes/epXX/prompts/PXX-prompt.md` を生成
5. **差分ログ** → `scripts/new-diff-log.sh` で雛形、生成結果を記録
6. **バイブル更新** → ユーザー承認後に `bible/` と `claude-knowledge/01_manga-bible.md` を同時更新
7. **保存** → 各マイルストーンで即 commit + push
8. **セッション終了** → `scripts/checkpoint-save.sh` で `sessions/checkpoints/` と `NEXT.md` を同時更新

---

## ❓ 困ったとき

- **ブランチが分からない** → `NEXT.md` の「🌿 現行作業ブランチ」
- **次何やればいいか分からない** → `NEXT.md` の「🎯 次にやること」
- **禁止事項を忘れた** → 本ファイル「🔒 絶対ルール」or `bible/prohibited-items.md`
- **前回の作業内容が分からない** → `sessions/checkpoints/` の最新ファイル
- **検証で警告が出た** → `scripts/validate-pipeline.sh` の出力に具体指示が出る

*止まる前にこの 5 つを見る。それでも分からなければ、仮案で先行して結果を提示する。*
