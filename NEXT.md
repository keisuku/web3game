# NEXT — 次のアクション（単一情報源）

> このファイルはセッション復帰時の**最優先参照先**。
> Claude Code は会話の冒頭で必ずこのファイルを読み、ここの指示に従って即着手する。
> 不明点があっても**ユーザーに確認せず**、このファイルの方針で進める。

---

## 🎯 次にやること（1 行）

**Codexリビルド実施中。Markdown正本→Python CLI→自動生成ダッシュボードへ移行済み。次はEP03-REBOOTの画像生成・差分ログ記録に戻れる状態**

---

## 2026-04-27 Codex リビルドで完了

1. **`AGENTS.md` 新設**: Codex 用の作業規約、検証コマンド、生成ルールを追加
2. **`scripts/web3game.py` 新設**: Windows / Codex 対応の正本CLI（status / build-prompt / sync-dashboard / validate）
3. **`index.html` 根本再構築**: 手書き巨大JS配列を廃止し、`assets/dashboard-data.js` + `assets/site.js` + `assets/site.css` に分離
4. **`.claude/skills/` 新設**: Claude Code project Skills をリポジトリ管理に移行
5. **EP03-REBOOT検証改善**: スマホ傾き、右上→左下、表情フィールド不足を主要ページで補正
6. **Bash互換ラッパー更新**: `build-prompt.sh` / `sync-dashboard.sh` / `validate-pipeline.sh` / `status.sh` / `new-episode.sh` はPython CLIを呼ぶ
7. **EP03-REBOOT 検証結果**: `python scripts\web3game.py validate 03-reboot` がエラー0 / 警告0

ローカル確認:

```powershell
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate 03-reboot
node --check assets\site.js
```

---

## 2026-04-19 完了した大規模整備

1. **`bible/technique-library.md` 新設**: 70 技法カタログ（EP01/EP02/EP03/正解ver5枚から抽出）
2. **`bible/prompt-constants/prohibited-core.md` 刷新**: キャラ依存を排除、翔一/タカシ/クロちゃん個別の strict-rules 方式に
3. **`scripts/build-prompt.sh` 拡張**: strict-rules 自動挿入機構
4. **`docs/skills-inventory.md` 新設**: 21 Skills の完全カタログ
5. **Skills 導入（~/.claude/skills/）**:
   - 独自: manga-page, manga-prompt, manga-review, manga-feedback, manga-episode-plan, manga-character-design
   - Meta: skill-creator (anthropic), write-a-skill (mattpocock)
   - Planning: grill-me, brainstorming, writing-plans, domain-model, zoom-out
   - Editing: edit-article, ubiquitous-language
   - Quality: verification-before-completion
   - Execution: dispatching-parallel-agents, subagent-driven-development, using-superpowers
6. **EP01-REBOOT 全 8 ページ完成**: 正解ver 5 枚完全踏襲、X 4 枚組×2 構成、毛筆特大 3 回使い切り、16 パターン中 8 種使用
7. **Index.html に EP01-REBOOT タブ追加**、プロンプト全 8 本ビルド済み

旧タスク: EP03 P05〜P08 の画像生成（プロンプト `episodes/ep03/prompts/build/PXX.txt` ビルド済み）— 保留中

## 🧱 プロンプト新フォーマット（重要）

**固定部分**（`bible/prompt-constants/`）と**可変部分**（各 `PXX-prompt.md` の YAML ＋コマ別）を分離:

- 画風・キャラ・禁止事項・レイアウトテンプレは `bible/prompt-constants/` に集約、全ページで共有
- 各ページの `prompts/PXX-prompt.md` は YAML フロントマター（layout / characters / mood / page_specific_ban）＋コマ別の scene/expression/dialogue **だけ**
- `bash scripts/build-prompt.sh 03 PXX` で結合 → `prompts/build/PXX.txt` に出力
- `bash scripts/sync-dashboard.sh 03` で全ページビルド＋ index.html 同期まで一撃
- **禁止事項を追加したいときは `bible/prompt-constants/prohibited-core.md` を 1 箇所だけ更新→全ページに波及**

## 🌿 現行作業ブランチ

`claude/continue-ep03-p02-Wgu0N`

## 👀 今 URL を開いたら何が見えるか

- 現在: PR #15 マージ前なら旧構成（EP02 のみ）
- PR #15 マージ後の数分以内: EP02 / EP03 切替スイッチャー＋ EP03 全 **8 ページ**新構成＋全プロンプト本文をダッシュボードから直接コピー可能
- PR #15: https://github.com/keisuku/web3game/pull/15

---

## 🔒 絶対ルール（毎回確認）

1. **止まらない**。「〜していいですか？」と聞かずに提案＋即実行。確認は結果提示後にやる
2. **ブランチを間違えない**。上記ブランチにのみ push
3. **git 操作はユーザーに教えない**。すべて Claude 側で完結
4. **禁止表情**: 天啓モード（目に炎＋スピードライン）／死んだ魚の目（布団モード）／デフォルメ顔 — 使用禁止
5. **シアン色禁止**（クロちゃん＋スマホ光以外）
6. **スマホ画面は必ず 10-15 度傾け**
7. **話者ラベル禁止**（「翔一：」等をプロンプトに書かない）
8. **各コマの機能は 1 つに絞る**
9. **保存して＝ commit + push**（「プルリクエスト」という言葉は使わない）
10. **ページ設計書／プロンプトを書いたら index.html の該当エピソード配列も同時更新**（ダッシュボード同期ルール）

---

## 📍 EP03 進捗スナップショット（全 8 ページ）

| P | 時制 | 機能 | 密度 | 設計書 | プロンプト |
|---|---|---|---|---|---|
| P01 | 回想 9月中旬 | 順序の発見 | Lv.3 | ✅ | ✅ |
| P02 | 回想 9月下旬 | ジェム高騰・庶民締め出し（80→320k） | Lv.3-4 | ✅ | ✅ |
| P03 | 回想 9/28 | GMT 実装・「ジェムさえあれば」 | Lv.3-4 | ✅ | ✅ |
| **P04** | **回想 10/12** | **★虹実装・60%プール** | **Lv.5** | ✅ | ✅（虹ビジュアル初回発注） |
| **P05** | **現代 2026** | **クロちゃん講義・Web3 失敗構造** | **Lv.3-4** | ✅ | ✅（クロちゃんバリキャリ） |
| P06 | 現代→過去 | 悟り＋震える指（曖昧） | Lv.3 | ✅ | ✅ |
| P07 | 回想 10/12 深夜 | **エンハンス儀式の夜**（儀式粒子化） | Lv.4 | ✅ | ✅ |
| **P08** | **回想 10/12 深夜→朝** | **★外れ・再挑戦／EP04 ブリッジ** | **Lv.3-4** | ✅ | ✅ |

**全 8 ページ：設計書 ✅ / プロンプト ✅ / validate エラー 0 警告 0**

---

## 🧭 EP03 新構成の核

- **順序のスリル**: 実装が先じゃない。「Comfort 必要らしい」の噂 → ジェム高騰 → 庶民締め出し → 実装で皆歓喜 → 2 週間で虹が全部持っていく → クロちゃん講義 → 震える指 → 実行 → 外れ → 再挑戦
- **ワクワク＋いかがわしい**: P01 観察→ P02 シャーデンフロイデ芽生え→ P03 勝者気取り→ P04 反転→ P05 悟り→ P06 震え→ P07 儀式→ P08 シュレディンガー
- **具体金額**: Ruby Gem 80/140/210/320k、日給 2,500 円、虹靴 3,200 万、虹ジェム 280 万、エンハンス 0.4%、5 足焼却 66 万、外れ価値 40k
- **クロちゃん講義（P05）**: 運営は天才的／Web3 99.9% 失敗／メルカリ級のシンプルさが必要／2026 年もまだ成功例なし
- **EP04 フック**: P08 の「次回：虹追い職業編 — 1,000 回焼いても、止まらない者たち」

## 📚 画像生成時に読む必須ファイル

1. `episodes/ep03/prompts/P01-prompt.md` 〜 `P08-prompt.md` — 各プロンプト本文
2. `bible/characters/protagonist.md` — 翔一各モード英語プロンプト
3. `bible/characters/kuro-chan.md` — クロちゃんバリキャリ／ GENTLE モード英語プロンプト（P05 必須）
4. `bible/prohibited-items.md` — Nano Banana の Do Not 蓄積
5. `references/images/` — 参照画像（ref_hero_v1, ref_kuro_bari 等）

## 🛠️ 画像生成ワークフロー（8 回）

```bash
# 各ページの差分ログ雛形を作り、Nano Banana で生成 → 結果を記録
bash scripts/new-diff-log.sh 03 P01
# → diff-log/log-ep03-P01.md に試行結果を記録
# プロンプトは episodes/ep03/prompts/P01-prompt.md のコードブロックをそのまま Nano Banana に投入
# 同様に P02〜P08
```

## ✅ 完了の判定（ダッシュボード同期ルール含む）

- 各ページの生成成功（`diff-log/log-ep03-PXX.md` に「結果: 成功」が記録される）
- `bash scripts/validate-pipeline.sh 03 PXX` → エラー 0 / 警告 0（継続）
- `https://keisuku.github.io/web3game/` を開いて EP03 タブで該当ページ＋プロンプトが見える
- 本ファイル（NEXT.md）の「次にやること」を「Thread A 次回（EP04 虹追い章）着手」等に更新
- commit + push（ブランチ: `claude/continue-ep03-p02-Wgu0N`）

---

## 💬 ユーザーの既知のストレス源（再発させない）

- **止まる**のが最大ストレス。少しでも詰まったら「仮案で先行→後から差分修正」の原則で進む
- 同じ注意を繰り返される（禁止表情等）→ 本ファイル＋ validate-pipeline.sh の自動検出で防ぐ
- ブランチを間違える／忘れる → 本ファイル冒頭の「🌿 現行作業ブランチ」を毎回読む
- 引き継ぎで迷子になる → 本ファイルだけ読めば復帰できる構造を維持する
- **「マージしても何も変わらない」問題** → 「今 URL を開いたら何が見えるか」を本ファイル冒頭に明示／ダッシュボード同期をルーチンに組み込み

---

*このファイルは `scripts/checkpoint-save.sh` 実行時に自動更新される。*
*手動で更新する場合は「次にやること」「進捗スナップショット」「今 URL を開いたら何が見えるか」を直せばよい。*
