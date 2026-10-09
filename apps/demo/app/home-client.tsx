'use client'

import Link from 'next/link'
import { useState } from 'react'

import { verticals, CATEGORIES, type Category } from './lib/catalog'
import { tagline } from './lib/i18n'
import { useLang } from './components/lang-provider'
import { LangSwitcher } from './components/lang-switcher'
import { EcosystemBar } from './components/ecosystem-bar'


const CATEGORY_COLORS: Record<Category, string> = {
  All: 'from-violet-600 to-indigo-600',
  'Food & Drink': 'from-orange-500 to-red-500',
  Property: 'from-blue-600 to-cyan-500',
  'Health & Beauty': 'from-pink-500 to-rose-400',
  Creative: 'from-purple-600 to-fuchsia-500',
  'Professional Services': 'from-slate-600 to-blue-700',
  Education: 'from-violet-600 to-purple-500',
  Automotive: 'from-zinc-600 to-slate-500',
  Entertainment: 'from-red-600 to-purple-600',
  'Home Services': 'from-teal-600 to-blue-500',
  Travel: 'from-sky-500 to-indigo-500',
  Retail: 'from-amber-500 to-orange-500',
  Community: 'from-rose-500 to-amber-500',
}

export default function HomeClient() {
  const { lang, t } = useLang()
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? verticals : verticals.filter((v) => v.category === active)

  return (
    <div className="min-h-screen" style={{ background: '#080c14' }}>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(8,12,20,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7)' }}>S</div>
          <span className="text-white font-semibold tracking-tight">SCALA Sites</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t('nav.platform')}
          </a>
          <Link href="/pricing" className="text-sm font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t('nav.pricing')}
          </Link>
          <LangSwitcher />
          <a
            href="https://github.com/Alessandro114/scala-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(ellipse at center, #6c63ff 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse at center, #a855f7 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-32 right-1/4 w-[300px] h-[300px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse at center, #06b6d4 0%, transparent 70%)', filter: 'blur(60px)' }} />
          {/* subtle grid overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide uppercase"
            style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.35)', color: '#a5b4fc' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {t('hero.badge')}
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            <span className="block">{t('hero.title1', { n: verticals.length })}</span>
            <span className="block" style={{ background: 'linear-gradient(135deg,#6c63ff 0%,#a855f7 40%,#06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            {t('hero.sub')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Next.js 14', 'TypeScript', 'Tailwind CSS', t('hero.tagTemplates', { n: verticals.length }), 'MIT License'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7)' }}>
              {t('cta.github')}
            </a>
            <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
              {t('cta.platform')}
            </a>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="sticky top-16 z-40 px-4 py-3" style={{ background: 'rgba(8,12,20,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-1">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat
              // Extract the two Tailwind color names for inline gradient
              const gradParts = CATEGORY_COLORS[cat].replace('from-', '').replace(' to-', ' ').split(' ')
              // We use inline style for the active state using a simple mapping
              const gradMap: Record<string, string> = {
                'violet-600': '#7c3aed', 'indigo-600': '#4f46e5',
                'orange-500': '#f97316', 'red-500': '#ef4444',
                'blue-600': '#2563eb', 'cyan-500': '#06b6d4',
                'pink-500': '#ec4899', 'rose-400': '#fb7185',
                'purple-600': '#9333ea', 'fuchsia-500': '#d946ef',
                'slate-600': '#475569', 'blue-700': '#1d4ed8',
                'purple-500': '#a855f7',
                'zinc-600': '#52525b', 'slate-500': '#64748b',
                'red-600': '#dc2626',
                'teal-600': '#0d9488', 'blue-500': '#3b82f6',
                'sky-500': '#0ea5e9', 'indigo-500': '#6366f1',
                'amber-500': '#f59e0b', 'amber-500-2': '#f59e0b',
                'rose-500': '#f43f5e',
              }
              const fromColor = gradMap[gradParts[0]] || '#6c63ff'
              const toColor = gradMap[gradParts[1]] || '#a855f7'

              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive ? 'text-white scale-105' : 'hover:opacity-80'
                  }`}
                  style={
                    isActive
                      ? { background: `linear-gradient(135deg, ${fromColor}, ${toColor})`, boxShadow: '0 2px 12px rgba(108,99,255,0.3)' }
                      : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }
                  }
                >
                  {cat === 'All' ? t('filter.all') : t(`cat.${cat}`)}
                  <span className="ml-1.5 opacity-60">
                    {cat === 'All' ? verticals.length : verticals.filter((v) => v.category === cat).length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((v) => (
            <Link
              key={v.slug}
              href={v.slug}
              className="group relative rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#0d1117' }}
            >
              {/* color preview band */}
              <div className="h-28 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${v.color} 0%, ${v.colorEnd} 100%)` }}>
                {/* subtle noise/texture overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)' }} />
                {/* icon */}
                <div className="absolute bottom-3 left-4 text-4xl" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}>
                  {v.icon}
                </div>
                {/* category pill */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                  style={{ background: 'rgba(0,0,0,0.45)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)' }}>
                  {t(`cat.${v.category}`)}
                </div>
                {/* arrow on hover */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
                  <span className="text-white text-xs">→</span>
                </div>
              </div>

              {/* card body */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1 leading-tight group-hover:text-violet-300 transition-colors">
                  {v.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {tagline(lang, v.slug, v.tagline)}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: v.colorEnd }} />
                  <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {t('card.view')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {t('filter.empty')}
          </div>
        )}
      </main>

      {/* ── PLATFORM BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #0d0c1f 0%, #1a1040 50%, #0a1628 100%)', border: '1px solid rgba(108,99,255,0.25)' }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, #6c63ff 0%, transparent 60%)', filter: 'blur(40px)' }} />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#a5b4fc' }}>{t('banner.eyebrow')}</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('banner.title')}
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              {t('banner.body')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7)' }}>
                {t('banner.cta1')}
              </a>
              <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
                {t('banner.cta2')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t px-6 py-8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-6xl mx-auto mb-6"><EcosystemBar /></div>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: 'rgba(255,255,255,0.3)' }}>
          <div className="flex items-center gap-4">
            <span>SCALA Sites</span>
            <span style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
            <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors">GitHub</a>
            <span style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
            <span>{t('footer.licensed')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>{t('footer.builtWith')}</span>
            <span className="font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Next.js + TypeScript</span>
            <span style={{ color: 'rgba(255,255,255,0.12)' }}>·</span>
            <span>{t('footer.poweredBy')}</span>
            <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer"
              className="font-medium hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
              SCALA AI OS
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
