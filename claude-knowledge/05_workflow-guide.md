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

---

## セッション管理ルール（長くなりすぎ対策）

<!-- EN: Session management rules to prevent context degradation from long conversations. -->

### スレッドの寿命ルール

長いスレッドはClaudeの品質を劣化させます。以下のルールで管理してください。

| スレッド種別 | 推奨寿命 | 新しくすべきタイミング |
|---|---|---|
| Thread A（設計） | 1ページにつき1スレッド | ページの3パスが完了したら終了 |
| Thread B（変換） | 必ず毎回新規 | 1ページ=1スレッド（混ぜない） |
| 企画整理 | 1エピソードにつき1スレッド | 設計書が承認されたら終了 |

### 新スレッドを始めるべき危険信号

以下のいずれかが起きたら、**すぐにスレッドを終了して新しく始める**:

1. Claudeがバイブルにない設定を勝手に追加し始めた
2. キャラクターの口調やビジュアルが変わった
3. スレッドが20メッセージ（往復10回）を超えた
4. 前の話題を忘れてループし始めた
5. 「こうした方が面白い」等の創作的提案が増えた

### セッション開始のベストプラクティス

1. **コンテキストバンドルを使う**: Claude Code に「Thread Aの準備して」と伝えて、自動生成されたバンドルを新スレッドに貼る
2. **参照ナレッジを明示**: スレッドの最初のメッセージで「01_manga-bible.md と 03_manga-grammar.md を参照して」と明示指定する
3. **タスクを1つに絞る**: 「P04の構図ラフを作って」のように具体的に。複数タスクを1スレッドに詰め込まない
4. **前回の続きは状態を渡す**: 「前ページ（P03）の設計書は以下です」と明示的に渡す。Claudeの記憶に頼らない

### セッション終了時の手順

1. Claude Code に「チェックポイント保存」と伝える
2. 次にやるべきことをメモに含める
3. 必要なファイルを保存してもらう

<!-- EN: Thread lifespan rules: Thread A = 1 per page, Thread B = always new per page. Danger signals: Claude inventing settings, character drift, >20 messages, looping. Best practice: use context bundles, explicit knowledge references, single-task focus. -->

---

## コンテキストバンドル（コピペ削減ツール）

<!-- EN: Context bundles reduce copy-paste effort by automatically assembling all needed information into one block. -->

### 概要

従来、Thread B を始めるには以下をすべて手動コピペしていた:
1. ページ設計書を開いてコピー
2. キャラクターの英語プロンプトをバイブルからコピー
3. 禁止事項リストをコピー
4. 出力テンプレートを確認

**コンテキストバンドルはこれを1回のコピペに削減する。**

### Thread B バンドル（プロンプト変換用）

Claude Code に「Thread Bの準備して。EP01 P02」と伝えると:
- 承認済みページ設計書
- 全キャラクターのNano Banana用英語プロンプト
- 固定Do Notリスト
- 出力テンプレート

が1ブロックにまとまって出力される。これをそのまま Claude Projects の新しい Thread B に貼り付ける。

### Thread A バンドル（ページ設計用）

Claude Code に「Thread Aの準備して。EP01 P04」と伝えると:
- 話の設計書
- 前ページの設計書（連続性確認用）
- 差分ログからのフィードバック
- 作成済みページ一覧
- タスク指示

が1ブロックにまとまる。

<!-- EN: Context bundles assemble all needed reference materials into one copy-paste block. Thread B bundles include: page design, character English prompts, Do Not list, output template. Thread A bundles include: episode design, previous page, diff log feedback, task instruction. -->

---

## 情報劣化防止ルール

<!-- EN: Rules to prevent information degradation across the pipeline. Each stage must preserve all information from the previous stage without adding or losing content. -->

### 劣化が起きるポイントと対策

| パイプライン段階 | 劣化リスク | 対策 |
|---|---|---|
| 設計書 → プロンプト | コマの要素が変換漏れ | パイプライン検証で Panel数/コマ数 一致を確認 |
| プロンプト → 生成 | Do Not が欠落して別人化 | 固定Do Notリストを毎回含める（バンドルが自動化） |
| 生成 → 差分ログ | フィードバックが曖昧 | 「問題点」「良かった点」「次回反映」の3項目を必ず記録 |
| 差分ログ → バイブル | 更新が放置される | パイプライン検証で未反映候補を警告 |
| セッション間 | 前回の文脈を忘れる | チェックポイントで状態を保存・引き継ぎ |

### 情報の正本ルール

1. **バイブルが唯一の正本**: 設定情報は `bible/` にあるものだけが正しい。スレッド内での発言は正本ではない
2. **ファイルから引用**: 設定を参照する時は、必ずファイルの内容をコピーして渡す。「さっき言ったやつ」に頼らない
3. **変換は足し算禁止**: Thread B では設計書の情報を英語に変換するだけ。「こういう雰囲気も追加した方がいい」は禁止
4. **差分ログは事実のみ**: 「たぶんこうだった」ではなく、実際の生成結果を正確に記録する

### パイプライン検証の使い方

Claude Code に「チェックして」と伝えると、以下を自動検証する:

- ✓ ページ設計書のコマ数が2-6の範囲か
- ✓ 各コマに構図・表情が定義されているか
- ✓ プロンプトのPanel数がコマ数と一致するか
- ✓ Do Notリストがプロンプトに含まれているか
- ✓ 差分ログの未反映バイブル更新候補がないか

**各ステップの完了時に検証を実行することを推奨。**

<!-- EN: Information integrity rules: (1) Bible is the only source of truth, (2) Always copy from files, never from memory, (3) No additions during conversion, (4) Diff logs record facts only. Run pipeline validation after each step. -->
