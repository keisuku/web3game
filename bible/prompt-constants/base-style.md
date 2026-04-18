# 画風・描画ルール固定ブロック（全ページ共通・冒頭に必ず付加）

> このファイルの内容は `build-prompt.sh` がプロンプト冒頭に自動挿入する。
> **ページ固有のプロンプトには重複して書かない。**
> 変更が必要な場合はこのファイルを 1 箇所だけ更新すれば全ページに波及する。

```
Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.

RIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.

Black-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.

Smartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).
```
