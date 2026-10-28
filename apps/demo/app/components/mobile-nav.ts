// Mobile hamburger for the 70+ bespoke templates (issue #2).
// Every template hides its desktop link group with `hidden md:flex` (or md:block/inline-flex) and shows nothing
// on phones. Instead of editing each template, enhanceNav() finds that group inside the page's main <nav>,
// adds a 44px button (visible < md only) and a panel with copies of its links.

const DESKTOP_GROUP = '[class~="hidden"][class*="md:flex"], [class~="hidden"][class*="md:block"], [class~="hidden"][class*="md:inline-flex"]'

export interface NavTarget { nav: HTMLElement; groups: HTMLElement[]; links: HTMLAnchorElement[] }

const textLinks = (el: Element) => Array.from(el.querySelectorAll<HTMLAnchorElement>('a[href]')).filter((a) => (a.textContent || '').trim())

/**
 * Two shapes exist in the templates:
 *  1. a link group already hidden on phones (`hidden md:flex`): only the button is missing;
 *  2. inline-styled navs whose links stay visible and crowd a 390px screen: a parent holding 2+ direct
 *     text links is the group, and the stylesheet hides it below md once the hamburger is there.
 */
export function findNavTarget(doc: Document): NavTarget | null {
  for (const nav of Array.from(doc.querySelectorAll<HTMLElement>('nav'))) {
    if (nav.hasAttribute('data-sc-nav') || nav.hasAttribute('aria-label')) continue // ecosystem bar, already enhanced
    const hidden = nav.querySelector<HTMLElement>(DESKTOP_GROUP)
    if (hidden) {
      const links = textLinks(hidden)
      if (links.length > 0) return { nav, groups: [hidden], links }
      continue
    }
    const groups: HTMLElement[] = []
    for (const parent of Array.from(nav.querySelectorAll<HTMLElement>('*'))) {
      const direct = Array.from(parent.children).filter((c) => c.tagName === 'A' && (c.textContent || '').trim() && c.getAttribute('href'))
      if (direct.length >= 2) groups.push(parent)
    }
    const links = groups.flatMap((g) => Array.from(g.children).filter((c): c is HTMLAnchorElement => c.tagName === 'A' && !!(c.textContent || '').trim()))
    if (links.length >= 2) return { nav, groups, links }
  }
  return null
}

/** Adds the hamburger; returns a cleanup function, or null when the page has no suitable nav. */
export function enhanceNav(doc: Document): (() => void) | null {
  const target = findNavTarget(doc)
  if (!target) return null
  const { nav, groups, links } = target
  const group = groups[groups.length - 1]
  nav.setAttribute('data-sc-nav', '')
  for (const g of groups) g.setAttribute('data-sc-links', '')
  if (getComputedStyle(nav).position === 'static') nav.style.position = 'relative'

  const panelId = 'sc-nav-panel'
  const button = doc.createElement('button')
  button.type = 'button'
  button.className = 'sc-nav-btn'
  button.setAttribute('aria-label', 'Menu')
  button.setAttribute('aria-expanded', 'false')
  button.setAttribute('aria-controls', panelId)
  button.innerHTML = '<span aria-hidden="true"></span>'

  const panel = doc.createElement('div')
  panel.id = panelId
  panel.className = 'sc-nav-panel'
  panel.hidden = true
  for (const a of links) {
    const copy = doc.createElement('a')
    copy.href = a.getAttribute('href') || '#'
    copy.textContent = (a.textContent || '').trim()
    if (a.target) { copy.target = a.target; copy.rel = 'noopener noreferrer' }
    panel.appendChild(copy)
  }

  const setOpen = (open: boolean) => {
    panel.hidden = !open
    button.setAttribute('aria-expanded', String(open))
  }
  const onClick = () => setOpen(panel.hidden)
  const onPanelClick = (e: Event) => { if ((e.target as HTMLElement).closest('a')) setOpen(false) }
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); button.focus() } }
  const mq = doc.defaultView!.matchMedia('(min-width: 768px)')
  const onMq = () => { if (mq.matches) setOpen(false) }

  button.addEventListener('click', onClick)
  panel.addEventListener('click', onPanelClick)
  doc.addEventListener('keydown', onKey)
  mq.addEventListener('change', onMq)
  group.insertAdjacentElement('afterend', button)
  nav.appendChild(panel)

  return () => {
    button.removeEventListener('click', onClick)
    panel.removeEventListener('click', onPanelClick)
    doc.removeEventListener('keydown', onKey)
    mq.removeEventListener('change', onMq)
    button.remove()
    panel.remove()
    nav.removeAttribute('data-sc-nav')
    for (const g of groups) g.removeAttribute('data-sc-links')
  }
}
