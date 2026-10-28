"""Playwright check for the shared site chrome (scala-sites issues #1 dark mode, #2 hamburger).
Usage: (npm run build && npx next start --port 3099) then: python3 tests/playwright-chrome.py [base_url]
For every template slug: at 390px the hamburger exists (when the template has a desktop link group), is >= 44px,
opens a panel whose links are >= 44px high, closes on Escape; the theme toggle is >= 44px and flips data-theme;
dark mode persists across reload and a fixed nav stays fixed after scrolling in dark mode."""
import re, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3099'
SHOT = sys.argv[2] if len(sys.argv) > 2 else '/tmp/cafe-dark.png'
catalog = (Path(__file__).resolve().parent.parent / 'app/lib/catalog.ts').read_text()
slugs = sorted(set(re.findall(r"slug:\s*'/([^']+)'", catalog)) - {'pricing'})
fails, with_menu, without_menu = [], 0, []

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={'width': 390, 'height': 800})
    page = ctx.new_page()
    for s in slugs:
        page.goto(f'{BASE}/{s}', wait_until='load')
        page.wait_for_timeout(250)
        t = page.locator('.sc-theme-toggle')
        if t.count() != 1:
            fails.append(f'{s}: theme toggle missing'); continue
        bb = t.bounding_box()
        if bb['width'] < 44 or bb['height'] < 44: fails.append(f'{s}: toggle {bb["width"]}x{bb["height"]}')
        btn = page.locator('.sc-nav-btn')
        if btn.count() == 1:
            with_menu += 1
            bb = btn.bounding_box()
            if bb['width'] < 44 or bb['height'] < 44: fails.append(f'{s}: hamburger {bb["width"]}x{bb["height"]}')
            btn.click()
            if btn.get_attribute('aria-expanded') != 'true' or not page.locator('.sc-nav-panel').is_visible(): fails.append(f'{s}: panel did not open')
            for a in page.locator('.sc-nav-panel a').all():
                if a.bounding_box()['height'] < 44: fails.append(f'{s}: panel link < 44px'); break
            page.keyboard.press('Escape')
            if page.locator('.sc-nav-panel').is_visible(): fails.append(f'{s}: Escape did not close')
        else:
            without_menu.append(s)
        before = page.evaluate("document.documentElement.dataset.theme")
        t.click()
        after = page.evaluate("document.documentElement.dataset.theme")
        if after == before or after not in ('light', 'dark'): fails.append(f'{s}: toggle did not flip ({before} -> {after})')
        if after == 'light': t.click()  # leave dark on, as the persistence check below expects
    page.goto(f'{BASE}/cafe', wait_until='load'); page.wait_for_timeout(250)
    if page.evaluate("document.documentElement.dataset.theme") != 'dark': fails.append('cafe: dark not persisted after reload')
    top0 = page.locator('.sc-theme-toggle').bounding_box()['y']
    page.mouse.wheel(0, 1500); page.wait_for_timeout(300)
    top1 = page.locator('.sc-theme-toggle').bounding_box()['y']
    if abs(top0 - top1) > 1: fails.append(f'cafe dark: fixed toggle moved on scroll ({top0} -> {top1})')
    nav_top = page.evaluate("document.querySelector('nav[data-sc-nav]')?.getBoundingClientRect().top")
    if nav_top is None or abs(nav_top) > 1: fails.append(f'cafe dark: fixed nav moved on scroll (top={nav_top})')
    # cafe is dark by design: once inverted it looks light, so the toggle must offer "dark mode"
    lab = page.locator('.sc-theme-toggle').get_attribute('aria-label')
    if 'dark' not in lab: fails.append(f'cafe: toggle label should reflect what is shown, got {lab!r}')
    page.screenshot(path=SHOT)
    page.goto(f'{BASE}/', wait_until='load'); page.wait_for_timeout(250)
    if page.locator('.sc-theme-toggle').count() or page.evaluate("document.documentElement.dataset.theme") != 'light': fails.append('hub: chrome must not appear')
    d = b.new_context(viewport={'width': 1280, 'height': 800}).new_page()
    d.goto(f'{BASE}/cafe', wait_until='load'); d.wait_for_timeout(250)
    if d.locator('.sc-nav-btn').is_visible(): fails.append('cafe desktop: hamburger visible')
    b.close()

print(f'templates: {len(slugs)}, with hamburger: {with_menu}, without desktop link group: {len(without_menu)}')
if without_menu: print('no menu on:', ', '.join(without_menu))
print('FAILURES:' if fails else 'ALL CHECKS PASSED', *fails, sep='\n')
sys.exit(1 if fails else 0)
