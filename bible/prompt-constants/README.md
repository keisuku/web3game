# prompt-constants — プロンプト固定ブロック

Nano Banana 用プロンプトの **固定部分** を集約するディレクトリ。
これらを更新すると、`scripts/build-prompt.sh` 経由で**全ページに自動反映**される。

## 構成

```
prompt-constants/
├── base-style.md                  画風・用紙・Togashi hybrid（全ページ冒頭）
├── prohibited-core.md             コア禁止事項（全ページ末尾、15 行以下を死守）
├── layouts/
│   ├── vertical-3.md              縦積み 3 コマ
│   ├── vertical-4.md              縦積み 4 コマ
│   ├── vertical-5.md              縦積み 5 コマ
│   └── vertical-4-bottomsplit.md  下段左右分割（EP02 P02 タイプ）
└── characters/
    ├── shouichi.md                翔一各モード英語プロンプト
    └── kuro.md                    クロちゃん各モード英語プロンプト
```

## 使い方（ページ設計者向け）

各ページのプロンプトファイルは**YAML フロントマター ＋ コマ別可変部分**で書く:

```markdown
---
layout: vertical-4
characters:
  shouichi: [analysis, shrewd-smile-deep]
  kuro: [bari-kyari, gentle]
mood: "Observer's quiet discovery. Analytical, not excited."
page_specific_ban:
  - "Do not show the man running yet"
  - "No rainbow color in this page"
---

## Panel 1 (top, 25%)
Scene: [シーンの要点を 1-2 行]
Expression: [表情のモード名 or 短い記述]
Dialogue:
- [セリフ 1]
- [セリフ 2]
```

`scripts/build-prompt.sh EP PXX` を実行すると、固定部分＋可変部分が結合された**完全プロンプト**が出力される（`episodes/epXX/prompts/build/PXX.txt`）。

## 更新ルール

- **固定部分を変更したら全ページに影響する**。コミット時の差分確認は必須。
- 禁止事項を増やしたくなっても `prohibited-core.md` は 15 行以下を死守。ページ固有は各ページで。
- キャラのモードを増やすときは `characters/*.md` に追記、既存モードは編集しない（他ページが依存）。
