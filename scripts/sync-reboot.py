"""EP01/EP02/EP03 REBOOTのbuild/*.txtをindex.htmlに同期"""
import pathlib, sys

if hasattr(sys.stdout, "reconfigure"):
    try: sys.stdout.reconfigure(encoding="utf-8")
    except Exception: pass

def sync_ep(ep_name, var_name):
    build_dir = pathlib.Path(f"episodes/ep{ep_name}/prompts/build")
    build_files = sorted(build_dir.glob("P*.txt"))
    if not build_files:
        print(f"No build files for ep{ep_name}")
        return
    prompts = []
    for bf in build_files:
        with bf.open(encoding='utf-8') as f:
            text = f.read().strip()
        text = text.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        prompts.append(text)
    new_block = f"const {var_name} = [\n"
    for t in prompts:
        new_block += '`' + t + '`,\n'
    new_block += '];'
    html_path = pathlib.Path("index.html")
    html = html_path.read_text(encoding='utf-8')
    start = html.find(f"const {var_name} = [")
    if start < 0:
        print(f"{var_name} not found in index.html")
        return
    end = html.find('];', start) + 2
    html = html[:start] + new_block + html[end:]
    html_path.write_text(html, encoding='utf-8')
    print(f"synced {var_name}: {len(build_files)} pages, block size {len(new_block)}")

sync_ep("01-reboot", "promptTextsEP01REBOOT")
sync_ep("02-reboot", "promptTextsEP02REBOOT")
sync_ep("03-reboot", "promptTextsEP03REBOOT")
