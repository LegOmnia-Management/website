"""Génère les images de partage (1200x630) dans public/og/ avec Chromium headless.
Usage : python3 scripts/og/generate.py   (Pillow requis)
"""
import os, subprocess, tempfile, base64
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
IMG = os.path.join(ROOT, 'src/assets/img')
OUT = os.path.join(ROOT, 'public/og')
import glob
CHROME = os.environ.get('CHROME') or (glob.glob('/opt/pw-browsers/chromium-*/chrome-linux/chrome') or ['chromium'])[0]

# (fichier, accent, titre, sous-titre, capture d'écran)
PAGES = [
    ('default', '#6b63d0,#5ce1e6', "L'IA juridique pour l'Afrique francophone", "Recherche juridique IA · 17+ pays · 100 000+ documents", 'application/homeDesktop.png'),
    ('app', '#6b63d0,#5ce1e6', "L'application LegOmnia", "Recherche, analyse et gestion de vos documents juridiques", 'application/iaDesktop.png'),
    ('omnia', '#6b63d0,#5ce1e6', "OMNIA", "Moteur de recherche juridique par IA : OHADA et droits nationaux, sources citées", 'application/searchDesktop.png'),
    ('geode', '#6b63d0,#e896f6', "Géode", "GED intelligente et cartographie juridique pour les professionnels du droit", 'geode/dashboard2.png'),
    ('omniscan', '#6b63d0,#5ce1e6', "OmniScan", "Analyse IA de contrats et documents juridiques : OCR, anonymisation, résumés", 'application/analyseDesktop.png'),
    ('transformation', '#4a0f9d,#6b63d0', "Transformation digitale juridique", "Numérisation, structuration et exploitation des données juridiques africaines", 'omniscan/pipeline.png'),
    ('use-cases', '#4a0f9d,#e896f6', "Cas d'usage LegOmnia", "Avocats, juristes d'entreprise, institutions, investisseurs", 'application/homeDesktop.png'),
]

def b64(path):
    with open(os.path.join(IMG, path), 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()

TPL = """<html><body style="margin:0;width:1200px;height:630px;overflow:hidden;font-family:Lato,Helvetica,Arial,sans-serif;
background:linear-gradient(135deg,#FDFDE1 0%,#F4F4EC 100%);position:relative">
<div style="position:absolute;left:0;top:0;bottom:0;width:14px;background:linear-gradient(180deg,{c1},{c2})"></div>
<div style="position:absolute;left:70px;top:60px;font:700 34px Georgia,serif;color:#4a0f9d">legOmnia</div>
<div style="position:absolute;left:70px;top:190px;width:520px">
  <div style="font:700 56px/1.1 Georgia,serif;color:#212529">{title}</div>
  <div style="margin-top:24px;font-size:24px;line-height:1.4;color:#495057">{sub}</div>
</div>
<div style="position:absolute;left:640px;top:120px;width:520px;height:390px;border-radius:18px;overflow:hidden;
box-shadow:0 20px 50px rgba(74,15,157,.28);border:1px solid rgba(0,0,0,.08);background:#fff">
  <img src="{shot}" style="width:100%;height:100%;object-fit:cover;object-position:left top"></div>
<div style="position:absolute;left:70px;bottom:50px;font-size:22px;color:#4a0f9d;font-weight:700">legomnia.com</div>
</body></html>"""

os.makedirs(OUT, exist_ok=True)
with tempfile.TemporaryDirectory() as tmp:
    for name, accent, title, sub, shot in PAGES:
        c1, c2 = accent.split(',')
        html = os.path.join(tmp, name + '.html')
        png = os.path.join(tmp, name + '.png')
        open(html, 'w').write(TPL.format(c1=c1, c2=c2, title=title, sub=sub, shot=b64(shot)))
        subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
                        '--window-size=1200,800', f'--screenshot={png}', 'file://' + html],
                       check=True, capture_output=True)
        Image.open(png).convert('RGB').crop((0, 0, 1200, 630)).save(os.path.join(OUT, name + '.jpg'), quality=85, optimize=True)
        print('ok', name)
