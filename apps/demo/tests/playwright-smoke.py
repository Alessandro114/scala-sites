# Smoke test (needs: next build + next start --port 3099, python3 playwright). Run: python3 -I tests/playwright-smoke.py
import re,json,sys
from playwright.sync_api import sync_playwright
BASE='http://localhost:3099'
LANGS=['en','it','es','pt','de','fr']
PAGES=['/','/pricing','/restaurant','/clinic','/law']
EN_STOP=re.compile(r'\b(the|and|with|for|of|your|our)\b',re.I)
res=[];
with sync_playwright() as p:
    b=p.chromium.launch()
    for vp,(w,h) in {'desktop':(1280,800),'mobile':(390,844)}.items():
        # Accept-Language it-IT must NOT change the default
        ctx=b.new_context(viewport={'width':w,'height':h},locale='it-IT')
        pg=ctx.new_page(); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
        pg.goto(BASE+'/'); pg.wait_for_timeout(600)
        res.append((vp,'default-with-it-IT-browser','html_lang=',pg.evaluate('document.documentElement.lang'),'h1=',pg.inner_text('h1')[:40].replace('\n',' ')))
        ctx.close()
        for lang in LANGS:
            for path in PAGES:
                ctx=b.new_context(viewport={'width':w,'height':h}); pg=ctx.new_page(); errs=[]
                pg.on('pageerror',lambda e:errs.append(str(e)))
                pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
                pg.goto(f'{BASE}{path}?lang={lang}'); pg.wait_for_timeout(500)
                ov=pg.evaluate('document.documentElement.scrollWidth-document.documentElement.clientWidth')
                hl=pg.evaluate('document.documentElement.lang')
                row=dict(vp=vp,lang=lang,path=path,overflow=ov,html_lang=hl,js_errors=[e[:100] for e in errs if 'googletagmanager' not in e and 'ERR_' not in e and 'unsplash' not in e.lower()])
                if path in ('/','/pricing'):
                    txt=pg.inner_text('body')
                    row['en_words']=sorted(set(m.lower() for m in EN_STOP.findall(txt))) if lang!='en' else None
                    row['h1']=pg.inner_text('h1')[:50].replace('\n',' ')
                res.append(row); ctx.close()
    b.close()
bad=[r for r in res if isinstance(r,dict) and (r['overflow']>0 or r['js_errors'] or (r['html_lang']!=(r['lang'] if r['path'] in ('/','/pricing') else 'en')) or r.get('en_words'))]
for r in res:
    if not isinstance(r,dict): print(r)
print('total',len([r for r in res if isinstance(r,dict)]),'bad',len(bad))
for r in bad: print(json.dumps(r,ensure_ascii=False))
