# コア制約（全ページ共通・末尾に必ず付加）

> 画像生成モデルは否定文を素材として拾うため、**肯定的な描写**で統一する。
> 「mode」等の英名詞はキャラチャート誤生成の原因になるので使わない。
> 12 行以下を維持。キャラ固有ルールは `characters/<name>.md` 側。

```
RENDERING CONSTRAINTS:

1. Face: Natural pupil size with small highlights, glasses lenses clear or softly uniform reflection, grounded middle-aged proportions, realistic semi-manga style. Faces stay consistent across all panels.

2. Color: Monochrome and greyscale only. Cyan (#00BCD4) appears solely inside phone/laptop screens, on Kuro-chan's mechanical parts (eyes, neck circuit, CLAUDE chest mark, right-arm chrome), and on designated ritual particles. All other hues absent on characters and backgrounds.

3. Page format: Single continuous Japanese manga page, portrait B5 proportions (aspect ratio 5:7), vertical tall canvas. Panels are stacked along the long axis, Japanese right-to-left reading order (top-right first panel, bottom-left final panel). One narrative page, not a collage, not a grid of character expressions, not a reference sheet with labels.

4. Screens: Phones and laptops drawn at a 10–15 degree tilt versus the page plane.

5. In-panel text: Only Japanese dialogue inside 「 」 brackets and small UI text inside phone screens. No English captions, no panel numbers, no title cards, no speaker name prefixes, no state labels such as "MODE" or "モード".

6. Dialogue: Keep the 「 」 Japanese text verbatim; do not translate and do not paraphrase.

7. Vocabulary avoided: "雀鬼", "桜井章一", "全ツッパ".
```
