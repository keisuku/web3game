"""全てのREBOOTプロンプトの否定文を肯定文化する。

Webフィードバック (72a4673) の原則:
- "Do NOT X" → 相当する肯定描写に変換、または削除
- "NEVER", "NOT" のモノ列挙を "instead: positive description" に
- page_specific_ban は page_specific_constraints に改称 + 肯定描写のみ
"""
import pathlib, re, sys

if hasattr(sys.stdout, "reconfigure"):
    try: sys.stdout.reconfigure(encoding="utf-8")
    except Exception: pass

# 否定 → 肯定 置換マップ（長い順で先にマッチ）
NEGATION_MAP = [
    # キャラ関連
    (r'Do NOT render [A-Za-z]+ with rectangular( black)? glasses[^"\n]*',
     'Takashi appears with round thin-wire black glasses (circular frame outline)'),
    (r'Do NOT render [A-Za-z]+ with dead-fish eyes[^"\n]*',
     'Eyes have natural pupil size with small highlights, lucid expression'),
    (r'Do NOT render (rectangular glasses|revelation mode|flame eyes|dead-fish eyes|chibi[^"\n,]*)[^"\n]*',
     'Natural semi-manga expression with consistent character features'),
    (r'Do NOT use brush calligraphy[^"\n]*', ''),
    (r'Do NOT use cyan (outside|except)[^"\n]*',
     'Cyan color stays within phone screen glow, Kuro-chan robot elements, and designated ritual particles'),
    (r'Do NOT use cyan[^"\n]*',
     'Monochrome and greyscale rendering; cyan reserved for phone glow and Kuro-chan elements only'),
    (r'Do NOT draw sweat as cyan-tinted[^"\n]*',
     'Sweat rendered with white outlines and black linework only'),
    (r'Do NOT let speedlines radiate from the eyes[^"\n]*',
     'Speedlines appear as a background element behind the head, not emerging from the eyes'),
    (r'Do NOT render the dog as cyan[^"\n]*',
     'The Pembroke Welsh Corgi rendered in normal white-and-brown markings'),
    (r'Do NOT include individual faces[^"\n]*',
     'Crowd members rendered as dark silhouettes only'),
    (r'Do NOT render individual faces on the crowd[^"\n]*',
     'Crowd rendered as dark silhouettes only'),
    (r'Do NOT render the running woman in cyan[^"\n]*',
     'The running woman rendered in monochrome greyscale only'),
    (r'Do NOT render the full face[^"\n]*',
     'Only the mouth corner and glasses rim appear at the panel edge (cropped-face composition)'),
    (r"Do NOT render [A-Za-z]+'s? full face in this page[^\"\n]*",
     'Only the mouth corner and glasses rim appear at the panel edge (cropped-face composition)'),
    (r"Do NOT render [A-Za-z]+'s robot elements partially[^\"\n]*",
     "Kuro-chan's robot elements remain fully visible (chrome right arm from shoulder to fingertips, mechanical camera-aperture eyes with cyan glow, Claude pixel hair ornament, neck circuit lines)"),
    (r"Do NOT omit any of Kuro-chan's robot elements[^\"\n]*",
     "Kuro-chan's robot elements remain fully visible (chrome right arm from shoulder to fingertips, mechanical camera-aperture eyes with cyan glow, Claude pixel hair ornament, neck circuit lines)"),
    (r'Do NOT render [A-Za-z]+ in a different mode[^"\n]*',
     "Kuro-chan stays in bari-kyari appearance (ponytail, glasses, dark blazer, white blouse) for this scene"),
    (r'Do NOT split the page into multiple panels[^"\n]*',
     'One continuous full-page single panel fills the whole canvas'),
    (r"Do NOT show Shouichi's face[^\"\n]*",
     "Shouichi appears from behind, face turned away, back-silhouette only"),
    (r"Do NOT show Shouichi's front face[^\"\n]*",
     "Only Shouichi's back-silhouette appears; face turned away from viewer"),
    (r'Do NOT render the corgi as cyan[^"\n]*',
     'The Pembroke Welsh Corgi rendered in normal white-and-brown markings'),
    # レイアウト関連
    (r'Do NOT render the image as landscape[^"\n]*',
     'Portrait B5 canvas orientation'),
    (r'Do NOT split the page[^"\n]*',
     'One continuous page composition'),
    (r'Do NOT create sub-panels[^"\n]*',
     'One continuous full-page single panel fills the whole canvas'),
    # テキスト関連
    (r'Do NOT write English labels[^"\n]*',
     'Panel content uses Japanese dialogue in 「 」 brackets and Japanese narration only'),
    (r'Do NOT draw English or Japanese meta-labels[^"\n]*',
     'Panel content uses Japanese dialogue in 「 」 brackets and in-panel narration only'),
    (r'Do NOT use brush calligraphy (except|beyond)[^"\n]*',
     'Only the single specified 「」 text appears as brush calligraphy on this page'),
    (r"Do NOT reference [^\"\n]+retired[^\"\n]*", ''),
    (r'Do NOT render revelation mode[^"\n]*',
     'Natural eye rendering with small pupil highlights, calm or appropriate emotion'),
    (r'Do NOT render chibi[^"\n]*',
     'Grounded semi-realistic manga proportions'),
    # 一般的な置換
    (r'Do NOT ([^"\n]*)', r'(constraint reminder: positive form — \1)'),
    # Scene descriptionの "NOT X" パターン
    (r'\(NOT dead-fish eyes\)', '(natural pupil size with small highlights)'),
    (r'\(NOT cyan[^)]*\)', '(monochrome rendering)'),
    (r'\(NEVER dead-fish eyes\)', '(natural pupil size with small highlights)'),
    (r'\(NEVER omit\)', '(always render)'),
    (r'\(NEVER plain eyes\)', '(mechanical camera-aperture eyes)'),
    (r', NOT cyan\)', ', monochrome)'),
    (r', NOT cyan', ', monochrome'),
    (r', NOT a 2x2 grid[^)]*', ''),
    (r', NOT landscape[^)]*', ''),
    (r'NOT western comic', 'Japanese manga format'),
    (r'never flat', 'at a 10-15 degree tilt'),
    (r'NOT in a speech bubble', 'as a handwriting caption'),
]


def refactor_file(path):
    text = path.read_text(encoding='utf-8')
    original = text
    for pattern, replacement in NEGATION_MAP:
        text = re.sub(pattern, replacement, text)

    # 複数の空行を1つに
    text = re.sub(r'\n\n\n+', '\n\n', text)
    # page_specific_ban に空行のみが残ったらクリーン
    text = re.sub(r'^page_specific_ban:\s*\n(?:\s+-\s*[""]\s*\n)+', '', text, flags=re.MULTILINE)

    if text != original:
        path.write_text(text, encoding='utf-8')
        return True
    return False


# 対象: 全 REBOOT プロンプト
targets = []
for ep in ['ep01-reboot', 'ep02-reboot', 'ep03-reboot']:
    d = pathlib.Path(f'episodes/{ep}/prompts')
    if d.exists():
        targets.extend(sorted(d.glob('P*-prompt.md')))

fixed = 0
for t in targets:
    if refactor_file(t):
        print(f"fixed: {t}")
        fixed += 1
    else:
        print(f"no change: {t}")

print(f"\nTotal: {fixed}/{len(targets)} files updated")
