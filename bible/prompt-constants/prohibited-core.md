# コア禁止事項（全ページ共通・末尾に必ず付加）

> **プロジェクト普遍のルールのみ**を列挙する。キャラ固有のルール（翔一の眼鏡形状など）は `characters/<name>.md` の `strict-rules` セクションに記載し、build-prompt.sh が該当キャラが登場するページで条件付きで挿入する。
> AI が見落とす確率を下げるため、このリストを 12 行以下に保つ。

```
HARD RULES — violations are failures:

1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.

2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).

3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.

4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).

5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no "CLIMAX", "見せ場", "PANEL 1" labels). No speaker labels like "翔一：" or "クロちゃん：" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.

6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.

7. Forbidden words: Do NOT reference "雀鬼", "桜井章一", "全ツッパ" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).
```
