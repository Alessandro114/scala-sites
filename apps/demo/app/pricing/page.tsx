'use client'

import Link from 'next/link'
import { useLang } from '../components/lang-provider'
import { LangSwitcher } from '../components/lang-switcher'
import { EcosystemBar } from '../components/ecosystem-bar'

const GITHUB = 'https://github.com/Alessandro114/scala-sites'
const PLATFORM = 'https://get-scala.com/en/pricing'
const CONTACT = 'https://get-scala.com/en/contact'

const muted = { color: 'rgba(255,255,255,0.55)' } as const
const card = { background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' } as const
const gradient = { background: 'linear-gradient(135deg,#6c63ff,#a855f7)' } as const

interface Plan {
  id: 'free' | 'sara' | 'growth' | 'scale' | 'ent'
  features: number
  href: string
  cta?: 'plan.free.cta' | 'plan.ent.cta' | 'plan.more'
  accent?: boolean
}

const PLANS: Plan[] = [
  { id: 'free', features: 3, href: GITHUB, cta: 'plan.free.cta' },
  { id: 'sara', features: 3, href: PLATFORM, cta: 'plan.more' },
  { id: 'growth', features: 2, href: PLATFORM, cta: 'plan.more' },
  { id: 'scale', features: 2, href: PLATFORM, cta: 'plan.more' },
  { id: 'ent', features: 3, href: CONTACT, cta: 'plan.ent.cta', accent: true },
]

export default function PricingPage() {
  const { t } = useLang()
  const p = (k: string) => t(`pr.${k}`)

  return (
    <div className="min-h-screen text-white" style={{ background: '#080c14' }}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(8,12,20,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <Link href="/" className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={gradient}>S</span>
          <span className="font-semibold tracking-tight">SCALA Sites</span>
        </Link>
        <div className="flex items-center gap-3">
          <a href="https://get-scala.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline text-sm font-medium" style={muted}>
            {t('nav.platform')}
          </a>
          <LangSwitcher />
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-32 pb-14 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#a5b4fc' }}>{p('hero.eyebrow')}</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
          <span className="block">{p('hero.title1')}</span>
          <span className="block" style={{ background: 'linear-gradient(135deg,#6c63ff,#a855f7 45%,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {p('hero.title2')}
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg" style={{ ...muted, lineHeight: 1.7 }}>{p('hero.sub')}</p>
      </header>

      {/* PLANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {PLANS.map((pl) => (
            <div key={pl.id} className="rounded-2xl p-6 flex flex-col"
              style={pl.accent ? { ...card, border: '1px solid rgba(108,99,255,0.5)', background: 'linear-gradient(160deg,#12102a,#0d1117)' } : card}>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: '#a5b4fc' }}>{p(`plan.${pl.id}.name`)}</h2>
              <div className="text-3xl font-extrabold">{p(`plan.${pl.id}.price`)}</div>
              {pl.id !== 'free' && <div className="text-xs mt-1 mb-5" style={muted}>{p(`plan.${pl.id}.note`)}</div>}
              {pl.id === 'free' && <div className="text-xs mt-1 mb-5" style={muted}>{p('plan.free.note')}</div>}
              <ul className="space-y-2 text-sm flex-1 mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {Array.from({ length: pl.features }, (_, i) => (
                  <li key={i} className="flex gap-2"><span aria-hidden="true" style={{ color: '#34d399' }}>✓</span><span>{p(`plan.${pl.id}.f${i + 1}`)}</span></li>
                ))}
              </ul>
              {pl.cta && (
                <a href={pl.href} target="_blank" rel="noopener noreferrer"
                  className="text-center px-4 py-2.5 rounded-xl text-sm font-semibold"
                  style={pl.accent ? { ...gradient, color: '#fff' } : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}>
                  {p(pl.cta)}
                </a>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm">
          <a href={PLATFORM} target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc' }}>{p('plan.compare')}</a>
        </p>
      </section>

      {/* ADD-ONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{p('addons.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(['wa', 'voice', 'waapi'] as const).map((a) => (
            <div key={a} className="rounded-xl p-5 text-center" style={card}>
              <div className="font-semibold mb-1">{p(`addons.${a}`)}</div>
              <div style={{ color: '#a5b4fc' }}>{p(`addons.${a}.price`)}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-4" style={muted}>{p('addons.note')}</p>
      </section>

      {/* WHY A PLATFORM */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{p('why.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="rounded-xl p-5" style={card}>
              <h3 className="font-semibold mb-2">{p(`why.${n}.t`)}</h3>
              <p className="text-sm" style={{ ...muted, lineHeight: 1.6 }}>{p(`why.${n}.d`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TCO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">{p('tco.title')}</h2>
        <div className="rounded-xl overflow-x-auto" style={card}>
          <table className="w-full text-sm text-left">
            <thead>
              <tr style={{ color: '#a5b4fc' }}>
                <th scope="col" className="p-4 font-semibold">{p('tco.col.tool')}</th>
                <th scope="col" className="p-4 font-semibold">{p('tco.col.cost')}</th>
                <th scope="col" className="p-4 font-semibold">{p('tco.col.scala')}</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <tr key={n} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <th scope="row" className="p-4 font-medium">{p(`tco.r${n}.tool`)}</th>
                  <td className="p-4" style={muted}>{p(`tco.r${n}.cost`)}</td>
                  <td className="p-4" style={{ color: '#34d399' }}>{p(`tco.r${n}.scala`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center font-semibold mt-5">{p('tco.total')}</p>
        <p className="text-xs text-center mt-2" style={muted}>{p('tco.note')}</p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">{p('faq.title')}</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((n) => (
            <details key={n} className="rounded-xl p-5" style={card}>
              <summary className="font-semibold cursor-pointer">{p(`faq.${n}.q`)}</summary>
              <p className="mt-3 text-sm" style={{ ...muted, lineHeight: 1.7 }}>{p(`faq.${n}.a`)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg,#0d0c1f,#1a1040 50%,#0a1628)', border: '1px solid rgba(108,99,255,0.25)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{p('cta.title')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl text-sm font-semibold" style={gradient}>{p('cta.primary')}</a>
            <Link href="/" className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>{p('cta.secondary')}</Link>
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-6xl mx-auto"><EcosystemBar /></div>
      </footer>
    </div>
  )
}
