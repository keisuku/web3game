"""第2パス：残った否定文を肯定文化"""
import pathlib, re, sys

if hasattr(sys.stdout, "reconfigure"):
    try: sys.stdout.reconfigure(encoding="utf-8")
    except Exception: pass

PATTERNS = [
    # 吹き出し関連
    (r', NOT a speech bubble', ', rendered as a handwriting caption'),
    (r', NOT in a speech bubble', ', rendered as a handwriting caption'),
    (r', NOT in speech bubbles', ', rendered as handwriting captions'),
    (r', NOT in a bubble', ', rendered as a handwriting caption'),
    # キャラ関連
    (r'He is NOT in dead-fish-eye despair mode[^.]*\.', 'His pupils retain small white highlights, showing lucid confusion.'),
    (r'NOT on skin', 'on the jacket fabric'),
    (r'NOT exaggerated', 'naturally proportioned'),
    # 色
    (r'\(white and brown, proper breed rendering — NOT cyan or special-colored\)', '(white and brown Pembroke Welsh Corgi, normal markings)'),
    # 目・眼鏡
    (r'NOT star-shaped, NOT flash rays, just a clean bright highlight', 'a clean uniform soft highlight'),
    (r'NOT star-flash, NOT rays', 'a clean soft glint'),
    (r'\(NOT star-shape, NOT rays\)', '(uniform soft highlight)'),
    # トーン
    (r'NOT warning', 'as positive excitement'),
    (r'NOT mean/smug/warning-tone', 'as excited-shrewd and playful'),
    (r'NOT mean-spirited', 'playful and upbeat'),
    # 面不可視
    (r'\(face NOT visible\)', '(face out of frame)'),
    (r"Shouichi's figure is NOT visible", "Shouichi's figure is absent from the panel"),
    (r'Face NOT shown', 'Face out of frame'),
    (r"Shouichi is NOT visible in this panel", "Shouichi is absent from this panel"),
    # 方向
    (r'do NOT radiate from the eyes', 'originate from the background behind the head'),
    # 変換ミス
    (r'\(constraint reminder: positive form — render Shouichi\'s smile as mean — it is excited-shrewd, NOT warning\)',
     'Shouichi\'s smile stays excited-shrewd and playful throughout'),
    (r'\(constraint reminder: positive form — [^)]*\)', ''),
    # その他の NOT 残り
    (r'Confused, not destroyed\.', 'Confused but still lucid.'),
]


def refactor(path):
    text = path.read_text(encoding='utf-8')
    original = text
    for pattern, replacement in PATTERNS:
        text = re.sub(pattern, replacement, text)
    # 複数空行を1つに
    text = re.sub(r'\n\n\n+', '\n\n', text)
    if text != original:
        path.write_text(text, encoding='utf-8')
        return True
    return False


targets = []
for ep in ['ep01-reboot', 'ep02-reboot', 'ep03-reboot']:
    d = pathlib.Path(f'episodes/{ep}/prompts')
    if d.exists():
        targets.extend(sorted(d.glob('P*-prompt.md')))

fixed = 0
for t in targets:
    if refactor(t):
        print(f"fixed: {t.name}")
        fixed += 1
print(f"\nTotal v2 pass: {fixed}/{len(targets)}")
