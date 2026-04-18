"""EP01-REBOOTのbuild/*.txtをindex.htmlのpromptTextsEP01REBOOTに同期"""
import pathlib, sys

if hasattr(sys.stdout, "reconfigure"):
    try: sys.stdout.reconfigure(encoding="utf-8")
    except Exception: pass

build_dir = pathlib.Path("episodes/ep01-reboot/prompts/build")
build_files = sorted(build_dir.glob("P*.txt"))
prompts = []
for bf in build_files:
    with bf.open(encoding='utf-8') as f:
        text = f.read().strip()
    text = text.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    prompts.append(text)

new_block = "const promptTextsEP01REBOOT = [\n"
for t in prompts:
    new_block += '`' + t + '`,\n'
new_block += '];'

html_path = pathlib.Path("index.html")
html = html_path.read_text(encoding='utf-8')

start = html.find("const promptTextsEP01REBOOT = [")
if start < 0:
    print("promptTextsEP01REBOOT not found")
    sys.exit(1)
end = html.find('];', start) + 2
html = html[:start] + new_block + html[end:]

html_path.write_text(html, encoding='utf-8')
print(f"synced {len(build_files)} pages, block size {len(new_block)}")
