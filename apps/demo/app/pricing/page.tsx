'use client'

import { useState, useEffect, useRef } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ToolCategory {
  id: string
  name: string
  icon: string
  tools: string
  avgMonthly: number
  defaultOn: boolean
  description: string
}

const CATEGORIES: ToolCategory[] = [
  {
    id: 'website',
    name: 'Website Builder',
    icon: '◻',
    tools: 'Wix €17-159/mo · Squarespace €16-49/mo · WordPress €25-45/mo',
    avgMonthly: 35,
    defaultOn: true,
    description: 'Drag-and-drop builder with templates, CMS, and basic ecommerce.',
  },
  {
    id: 'hosting',
    name: 'Web Hosting',
    icon: '⬡',
    tools: 'SiteGround €18-45/mo · WP Engine €30-60/mo · Kinsta €29-50/mo',
    avgMonthly: 30,
    defaultOn: true,
    description: 'Managed hosting for your site files, database, and traffic.',
  },
  {
    id: 'domain',
    name: 'Domain Name',
    icon: '◈',
    tools: '.com ~€15/yr · .it ~€15/yr · .co.uk ~€12/yr',
    avgMonthly: 1.5,
    defaultOn: true,
    description: 'Annual renewal after the first-year promo expires.',
  },
  {
    id: 'email',
    name: 'Business Email',
    icon: '✉',
    tools: 'Google Workspace €7-22/user/mo · M365 €7-22/user/mo · Zoho €1-6/user/mo',
    avgMonthly: 35,
    defaultOn: true,
    description: '5 users on Google Workspace Starter. Your team needs professional email.',
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: '◎',
    tools: 'HubSpot €15-100/seat/mo · Salesforce €25-80/seat/mo · Pipedrive €14-79/seat/mo',
    avgMonthly: 40,
    defaultOn: true,
    description: 'Track leads, customers, and deals. Scales painfully fast.',
  },
  {
    id: 'booking',
    name: 'Booking & Scheduling',
    icon: '◷',
    tools: 'Calendly €10-20/seat/mo · Acuity €16-49/mo · SimplyBook €12-50/mo',
    avgMonthly: 20,
    defaultOn: true,
    description: 'Let customers book appointments. Essential for service businesses.',
  },
  {
    id: 'chat',
    name: 'Live Chat',
    icon: '◉',
    tools: 'Tidio €29-68/mo · Intercom €29-132/seat/mo · Drift €208+/mo',
    avgMonthly: 68,
    defaultOn: false,
    description: 'Real-time chat widget on your site. Hidden costs multiply fast.',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp API',
    icon: '◌',
    tools: 'Meta fees €0.015-0.05/msg · Twilio markup · BSP setup fees',
    avgMonthly: 40,
    defaultOn: false,
    description: '2,000 marketing messages/month. Every message costs money.',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: '◫',
    tools: 'GA4 free · Plausible €9-19/mo · Hotjar €32-80/mo · Fathom €15-74/mo',
    avgMonthly: 32,
    defaultOn: false,
    description: 'Heatmaps, recordings, and privacy-first analytics beyond GA4.',
  },
  {
    id: 'seo',
    name: 'SEO Tools',
    icon: '◭',
    tools: 'Ahrefs €129-449/mo · SEMrush €140-500/mo · Moz €39-239/mo',
    avgMonthly: 140,
    defaultOn: false,
    description: 'Keyword research, backlink analysis, rank tracking. Expensive but used.',
  },
  {
    id: 'forms',
    name: 'Forms',
    icon: '▣',
    tools: 'Typeform €29-99/mo · JotForm €25-129/mo · Tally free-€24/mo',
    avgMonthly: 29,
    defaultOn: true,
    description: 'Contact forms, lead capture, surveys. Priced by response volume.',
  },
  {
    id: 'reviews',
    name: 'Review Management',
    icon: '★',
    tools: 'Trustpilot €99-799/mo · Podium €399+/mo · Birdeye €299-499/mo',
    avgMonthly: 99,
    defaultOn: false,
    description: 'Collect, display, and respond to customer reviews at scale.',
  },
  {
    id: 'email_mktg',
    name: 'Email Marketing',
    icon: '◈',
    tools: 'Mailchimp €13-350/mo · Brevo €9-65/mo · Kit €33-89/mo',
    avgMonthly: 27,
    defaultOn: true,
    description: 'Campaigns, automations, newsletters. Cost scales with list size.',
  },
  {
    id: 'social',
    name: 'Social Media Tools',
    icon: '◇',
    tools: 'Buffer €5-25/mo · Hootsuite €99-249/mo · Later €19-80/mo',
    avgMonthly: 15,
    defaultOn: false,
    description: 'Schedule posts across channels. Fragmented dashboards add up.',
  },
  {
    id: 'ssl',
    name: 'SSL Certificate',
    icon: '◆',
    tools: "Let's Encrypt free · Sectigo €8-25/yr · DigiCert EV €200-400/yr",
    avgMonthly: 4,
    defaultOn: false,
    description: 'Most SMBs overpay for SSL. Free works fine for 99% of cases.',
  },
  {
    id: 'chatbot',
    name: 'AI Chatbot',
    icon: '◐',
    tools: 'Intercom Fin €0.99/resolution · Tidio Lyro +€39/mo · ChatGPT Team €25/user/mo',
    avgMonthly: 50,
    defaultOn: false,
    description: '1,000 AI-resolved conversations/month. Outcome-based pricing bites.',
  },
]

const INDUSTRY_DATA = [
  { name: 'Restaurant', min: 4200, max: 8400, icon: '🍽' },
  { name: 'Salon / Spa', min: 3600, max: 6000, icon: '✂' },
  { name: 'Real Estate Agency', min: 6000, max: 12000, icon: '🏠' },
  { name: 'Hotel', min: 8000, max: 18000, icon: '🛎' },
  { name: 'Gym / Fitness', min: 3000, max: 5400, icon: '◎' },
  { name: 'Law Firm', min: 5400, max: 10800, icon: '⚖' },
  { name: 'Medical Clinic', min: 4800, max: 9600, icon: '✚' },
]

const FREE_FEATURES = [
  { name: 'Full Website', saves: 35, desc: 'Production-ready, industry-optimized template. No drag-and-drop lock-in.' },
  { name: 'Global Hosting', saves: 30, desc: 'Vercel edge network. Handles 100K visits/month. 99.9% uptime.' },
  { name: 'SSL + HTTPS', saves: 4, desc: "Auto-renewing Let's Encrypt. Same cert the Fortune 500 trusts." },
  { name: 'On-Page SEO', saves: 12, desc: 'Structured data, meta tags, sitemaps, og:image — all pre-configured.' },
  { name: 'Contact Forms', saves: 29, desc: 'Unlimited submissions. No per-response fees. No branding watermark.' },
  { name: 'Booking Widget', saves: 20, desc: 'Appointment scheduling embedded in your site. Zero commission.' },
  { name: 'Analytics Ready', saves: 9, desc: 'GA4 + privacy-first setup. You own every data point.' },
  { name: 'Blog / CMS', saves: 25, desc: 'MDX-powered. Write in Markdown, deploy in seconds.' },
  { name: 'Review Display', saves: 15, desc: 'Showcase your Google/Trustpilot reviews without paying Trustpilot.' },
  { name: 'Mobile First', saves: 0, desc: 'Responsive by default. Every template tested on 12 screen sizes.' },
  { name: 'WhatsApp Button', saves: 0, desc: 'Click-to-chat with your WhatsApp number. No API fees.' },
  { name: 'Multi-language', saves: 0, desc: 'i18n support baked in. Reach customers in their language.' },
]

const UPGRADE_FEATURES = [
  {
    name: 'SARA AI Assistant',
    replaces: 'Intercom Fin',
    replacesCost: 990,
    icon: '◎',
    desc: 'Handles 1,000 conversations/month. Understands your menu, services, and FAQs out of the box.',
  },
  {
    name: 'WhatsApp Automation',
    replaces: 'WhatsApp API + Bot',
    replacesCost: 240,
    icon: '◌',
    desc: 'Automated campaigns, order confirmations, appointment reminders. All from your SCALA dashboard.',
  },
  {
    name: 'AI CRM',
    replaces: 'HubSpot Starter',
    replacesCost: 100,
    icon: '◈',
    desc: 'Auto-qualifies leads, logs conversations, and surfaces hot prospects without manual entry.',
  },
  {
    name: 'AI Analytics',
    replaces: 'Hotjar + Ahrefs Lite',
    replacesCost: 209,
    icon: '◫',
    desc: 'Behavioral heatmaps, conversion funnels, and SEO gap analysis — in one dashboard.',
  },
  {
    name: 'Marketing Automation',
    replaces: 'Mailchimp Premium + Buffer',
    replacesCost: 375,
    icon: '◇',
    desc: 'Email sequences, social scheduling, and campaign analytics. All AI-drafted.',
  },
  {
    name: 'Voice AI',
    replaces: 'No market equivalent',
    replacesCost: 0,
    icon: '◐',
    desc: 'AI phone agent that answers calls, books appointments, and escalates to you. 24/7.',
  },
]

// ─── Counter Hook ──────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, duration = 600) {
  const [value, setValue] = useState(0)
  const prev = useRef(0)

  useEffect(() => {
    const start = prev.current
    const diff = target - start
    const steps = Math.ceil(duration / 16)
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + diff * eased))
      if (step >= steps) {
        clearInterval(timer)
        prev.current = target
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return value
}

// ─── Hero Counter Cycler ───────────────────────────────────────────────────────

const CYCLE_ITEMS = [
  { label: 'Wix Business', value: '€46/mo' },
  { label: 'HubSpot Pro', value: '€100/seat/mo' },
  { label: 'Intercom Fin', value: '€0.99/resolution' },
  { label: 'Trustpilot Plus', value: '€319/mo' },
  { label: 'SEMrush Pro', value: '€140/mo' },
  { label: 'WP Engine', value: '€30/mo' },
  { label: 'Podium Core', value: '€399/mo' },
  { label: 'Hootsuite Team', value: '€249/mo' },
]

function HeroCycler() {
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % CYCLE_ITEMS.length)
        setFade(true)
      }, 300)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const item = CYCLE_ITEMS[idx]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <span style={{ color: '#a78bfa', fontWeight: 700 }}>{item.label}</span>
      <span style={{ color: '#f87171', fontWeight: 700, fontFamily: 'monospace' }}>{item.value}</span>
    </span>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [active, setActive] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(CATEGORIES.map((c) => [c.id, c.defaultOn]))
  )

  const monthlyTotal = CATEGORIES.filter((c) => active[c.id]).reduce((sum, c) => sum + c.avgMonthly, 0)
  const annualTotal = monthlyTotal * 12
  const scalaAnnual = 97 * 12
  const savings = annualTotal - scalaAnnual

  const animatedAnnual = useAnimatedCounter(annualTotal)
  const animatedMonthly = useAnimatedCounter(monthlyTotal)
  const animatedSavings = useAnimatedCounter(Math.max(savings, 0))

  const toggleAll = (state: boolean) => {
    setActive(Object.fromEntries(CATEGORIES.map((c) => [c.id, state])))
  }

  const setPreset = (preset: 'smb' | 'lean' | 'full') => {
    if (preset === 'smb') {
      setActive(Object.fromEntries(CATEGORIES.map((c) => [c.id, c.defaultOn])))
    } else if (preset === 'lean') {
      const lean = ['website', 'hosting', 'domain', 'email', 'forms']
      setActive(Object.fromEntries(CATEGORIES.map((c) => [c.id, lean.includes(c.id)])))
    } else {
      setActive(Object.fromEntries(CATEGORIES.map((c) => [c.id, true])))
    }
  }

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: '1px solid #1e1e2e', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)', zIndex: 50 }}>
        <a href="/" style={{ color: '#a78bfa', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          SCALA Sites
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://app.get-scala.com" style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>Try SCALA AI</a>
          <a href="https://github.com/Alessandro114/scala-sites" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>GitHub</a>
          <a href="/" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 }}>
            Get Free Site
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '100px', padding: '0.35rem 1rem', marginBottom: '2rem', fontSize: '0.8rem', color: '#c4b5fd', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Content Marketing · Data-backed · August 2026
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem' }}>
          Your Website Costs{' '}
          <span style={{ background: 'linear-gradient(135deg, #f87171, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            €6,660/Year.
          </span>
          <br />
          Ours Costs{' '}
          <span style={{ background: 'linear-gradient(135deg, #34d399, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            €0.
          </span>
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 1rem', lineHeight: 1.6 }}>
          We analyzed 16 categories of tools that SMBs pay for. Here&apos;s what we found.
        </p>

        <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '3rem' }}>
          Right now someone is paying: <HeroCycler />
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#calculator"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', display: 'inline-block' }}
          >
            Calculate My Stack Cost →
          </a>
          <a
            href="/"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'inline-block' }}
          >
            Get Free Site
          </a>
        </div>

        {/* Hero stats strip */}
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #1e1e2e' }}>
          {[
            { val: '14', label: 'Vendor relationships managed', note: 'avg SMB' },
            { val: '€555/mo', label: 'Average fragmented stack cost', note: 'our research' },
            { val: '€0', label: 'SCALA Sites base cost', note: 'forever' },
            { val: '95%', label: 'Of SMBs over-pay for tools', note: 'our estimate' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', minWidth: '140px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#a78bfa', letterSpacing: '-0.03em' }}>{s.val}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.7rem', color: '#4a4a5e', marginTop: '0.1rem' }}>({s.note})</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STACK TAX CALCULATOR ── */}
      <section id="calculator" style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            The <span style={{ color: '#f87171' }}>Stack Tax</span> Calculator
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '520px', margin: '0 auto' }}>
            Toggle the tools your business uses. Watch the annual cost climb. Then see what SCALA replaces.
          </p>
        </div>

        {/* Preset buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Typical SMB', preset: 'smb' as const },
            { label: 'Lean Startup', preset: 'lean' as const },
            { label: 'Full Stack', preset: 'full' as const },
          ].map(({ label, preset }) => (
            <button
              key={preset}
              onClick={() => setPreset(preset)}
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#c4b5fd', padding: '0.4rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => toggleAll(false)}
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#64748b', padding: '0.4rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
          >
            Clear All
          </button>
        </div>

        {/* Category grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '0.875rem', marginBottom: '2rem' }}>
          {CATEGORIES.map((cat) => {
            const on = active[cat.id]
            return (
              <button
                key={cat.id}
                onClick={() => setActive((prev) => ({ ...prev, [cat.id]: !prev[cat.id] }))}
                style={{
                  background: on ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${on ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '10px',
                  padding: '1rem 1.15rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'inherit',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.1rem', color: on ? '#a78bfa' : '#4a4a5e' }}>{cat.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: on ? '#e2e8f0' : '#94a3b8' }}>{cat.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: on ? '#f87171' : '#4a4a5e', fontFamily: 'monospace' }}>
                      €{cat.avgMonthly}/mo
                    </span>
                    <div style={{
                      width: '32px', height: '18px', borderRadius: '100px',
                      background: on ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'rgba(255,255,255,0.1)',
                      position: 'relative', flexShrink: 0, transition: 'background 0.15s ease',
                    }}>
                      <div style={{
                        position: 'absolute', top: '2px',
                        left: on ? '16px' : '2px',
                        width: '14px', height: '14px',
                        borderRadius: '50%', background: '#fff',
                        transition: 'left 0.15s ease',
                      }} />
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 0.35rem', lineHeight: 1.4 }}>{cat.description}</p>
                <p style={{ fontSize: '0.7rem', color: '#4a4a5e', margin: 0, lineHeight: 1.3 }}>{cat.tools}</p>
              </button>
            )
          })}
        </div>

        {/* Running total bar */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.75rem 2rem', position: 'sticky', bottom: '1.5rem', backdropFilter: 'blur(12px)', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Your monthly spend</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#f87171', fontFamily: 'monospace', letterSpacing: '-0.03em' }}>
                €{animatedMonthly.toLocaleString()}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Your annual spend</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#f87171', fontFamily: 'monospace', letterSpacing: '-0.03em' }}>
                €{animatedAnnual.toLocaleString()}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>With SCALA (€97/mo)</div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#34d399', fontFamily: 'monospace', letterSpacing: '-0.03em' }}>
                €{scalaAnnual.toLocaleString()}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>You save</div>
              <div style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, background: 'linear-gradient(135deg, #34d399, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'monospace', letterSpacing: '-0.03em' }}>
                €{animatedSavings.toLocaleString()}
              </div>
              {savings > 0 && (
                <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.25rem' }}>per year</div>
              )}
            </div>
          </div>

          {savings > 0 && (
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>
                That&apos;s <strong style={{ color: '#e2e8f0' }}>{Math.round(savings / 12).toLocaleString()} €/month</strong> you&apos;re currently burning on tool subscriptions.
              </p>
              <a
                href="/"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '0.6rem 1.5rem', borderRadius: '7px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}
              >
                Get Free Site →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── FREE FEATURES GRID ── */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(124,58,237,0.04)', borderTop: '1px solid #1e1e2e', borderBottom: '1px solid #1e1e2e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              What SCALA Gives You for{' '}
              <span style={{ background: 'linear-gradient(135deg, #34d399, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Free
              </span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '480px', margin: '0 auto' }}>
              Every SCALA Sites template ships with these included. No trial, no credit card, no vendor lock-in.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {FREE_FEATURES.map((f) => (
              <div
                key={f.name}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.25rem 1.35rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0' }}>{f.name}</div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '0.5rem' }}>
                    {f.saves > 0 ? (
                      <>
                        <div style={{ fontSize: '0.7rem', color: '#64748b', textDecoration: 'line-through' }}>
                          €{f.saves}/mo
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399' }}>€0</div>
                      </>
                    ) : (
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399' }}>€0</div>
                    )}
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              All templates are MIT licensed. You own the code. You own the data.
            </p>
          </div>
        </div>
      </section>

      {/* ── UPGRADE SECTION ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            The SCALA Upgrade —{' '}
            <span style={{ color: '#a78bfa' }}>€97/month</span>
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '560px', margin: '0 auto' }}>
            When you&apos;re ready for AI, this is what €97/month replaces. Each item below costs more than €97 on its own.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
          {UPGRADE_FEATURES.map((f) => (
            <div
              key={f.name}
              style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '12px', padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem', color: '#a78bfa' }}>{f.icon}</span>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#e2e8f0' }}>{f.name}</div>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0 0 1rem', lineHeight: 1.5 }}>{f.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Replaces:</span>
                <span style={{ fontSize: '0.78rem', color: '#f87171', textDecoration: 'line-through' }}>
                  {f.replaces}
                  {f.replacesCost > 0 ? ` €${f.replacesCost.toLocaleString()}/mo` : ''}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>→</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#34d399' }}>Included in €97/mo</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px', padding: '1.5rem 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.35rem' }}>
            Combined replacement cost of SCALA AI features
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f87171', textDecoration: 'line-through', fontFamily: 'monospace' }}>
              €{UPGRADE_FEATURES.reduce((s, f) => s + f.replacesCost, 0).toLocaleString()}/mo
            </span>
            <span style={{ fontSize: '1.25rem', color: '#64748b' }}>vs</span>
            <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34d399', fontFamily: 'monospace' }}>
              €97/mo with SCALA
            </span>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY BENCHMARKS ── */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid #1e1e2e', borderBottom: '1px solid #1e1e2e' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              What Your Industry <span style={{ color: '#f87171' }}>Actually Spends</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
              Average annual tech stack spend by vertical. These are real numbers from industry surveys and vendor pricing data.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {INDUSTRY_DATA.map((ind) => {
              const midpoint = (ind.min + ind.max) / 2
              const maxForScale = 18000
              const widthPct = (midpoint / maxForScale) * 100

              return (
                <div
                  key={ind.name}
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.1rem 1.5rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{ind.icon}</span>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0', flex: 1 }}>{ind.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.85rem', color: '#f87171', fontWeight: 700, fontFamily: 'monospace' }}>
                        €{ind.min.toLocaleString()}–€{ind.max.toLocaleString()}/yr
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>vs</span>
                      <span style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 700, fontFamily: 'monospace' }}>€1,164/yr</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${widthPct}%`, background: 'linear-gradient(90deg, #f87171, #fb923c)', borderRadius: '100px', transition: 'width 0.5s ease' }} />
                    </div>
                    <div style={{ flexShrink: 0, height: '6px', width: `${(1164 / 18000) * 100}%`, maxWidth: '8px', background: '#34d399', borderRadius: '100px' }} />
                  </div>
                  <div style={{ marginTop: '0.4rem', fontSize: '0.72rem', color: '#4a4a5e' }}>
                    Save up to <strong style={{ color: '#34d399' }}>€{(ind.max - 1164).toLocaleString()}/yr</strong> by switching to SCALA
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINE PRINT ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            The Fine Print
          </h2>
          <p style={{ color: '#94a3b8' }}>
            (There isn&apos;t any. But we wrote it anyway.)
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1rem' }}>
          {[
            {
              title: 'MIT Licensed. Forever.',
              body: 'Every template in SCALA Sites is MIT licensed. That means you can use it commercially, modify it, fork it, and never owe us anything. The license will not change.',
              icon: '◎',
            },
            {
              title: '100K visits/month free.',
              body: "Vercel's free Hobby tier handles 100,000 pageviews/month with 100GB bandwidth. That covers 95% of SMBs. When you outgrow it, you upgrade — not us.",
              icon: '◷',
            },
            {
              title: 'You own your code.',
              body: 'Deploy on Vercel, Netlify, Cloudflare Pages, or your own server. The code is yours. There is no SCALA-specific runtime, no proprietary dependency, no lock-in.',
              icon: '◈',
            },
            {
              title: 'You own your data.',
              body: 'Form submissions, analytics, customer data — all goes where you configure it. We have no access to your users. We collect nothing from your deployed site.',
              icon: '◆',
            },
            {
              title: 'SCALA AI is optional.',
              body: 'The free site works perfectly without SCALA AI. The €97/mo plan adds AI features — SARA assistant, WhatsApp automation, CRM. If you never upgrade, the site stays free.',
              icon: '◐',
            },
            {
              title: 'No lock-in. Export and leave.',
              body: 'If you decide to move to Wix, Squarespace, or anywhere else, export your content and go. We built this on open standards specifically so you never feel trapped.',
              icon: '◌',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.35rem 1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1rem', color: '#a78bfa' }}>{item.icon}</span>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0' }}>{item.title}</div>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHARE CALLOUT ── */}
      <section style={{ padding: '3rem 2rem', background: 'rgba(124,58,237,0.08)', borderTop: '1px solid rgba(124,58,237,0.2)', borderBottom: '1px solid rgba(124,58,237,0.2)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.75rem' }}>
            Know an SMB owner overpaying for their website stack?
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Share this page. The calculator alone has saved people hours of research — and the realization usually hits hard.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://twitter.com/intent/tweet?text=Holy%20shit.%20I%20just%20calculated%20my%20business%27%20website%20stack%20costs%20%E2%82%AC6%2C660%2Fyear.%20And%20I%20could%20get%20the%20same%20thing%20for%20%E2%82%AC0.%20%F0%9F%A4%AF&url=https%3A%2F%2Fsites.get-scala.com%2Fpricing`}
              target="_blank"
              rel="noreferrer"
              style={{ background: '#1a1a2e', border: '1px solid #2d2d4e', color: '#e2e8f0', padding: '0.6rem 1.25rem', borderRadius: '7px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
            >
              Share on X / Twitter
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsites.get-scala.com%2Fpricing&title=Your+Website+Costs+%E2%82%AC6%2C660%2FYear.+Ours+Costs+%E2%82%AC0.`}
              target="_blank"
              rel="noreferrer"
              style={{ background: '#1a1a2e', border: '1px solid #2d2d4e', color: '#e2e8f0', padding: '0.6rem 1.25rem', borderRadius: '7px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
            >
              Share on LinkedIn
            </a>
            <button
              onClick={() => {
                navigator.clipboard?.writeText('https://sites.get-scala.com/pricing')
              }}
              style={{ background: '#1a1a2e', border: '1px solid #2d2d4e', color: '#e2e8f0', padding: '0.6rem 1.25rem', borderRadius: '7px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
            >
              Copy Link
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Stop paying the stack tax
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem', lineHeight: 1.1 }}>
            Get Your Free Business Site Today
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Pick your industry template. Deploy in minutes. No credit card, no vendor, no lock-in.
            The site is yours — free, forever.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href="/"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '9px', textDecoration: 'none', fontWeight: 800, fontSize: '1.05rem', display: 'inline-block', boxShadow: '0 0 40px rgba(124,58,237,0.3)' }}
            >
              Browse Free Templates →
            </a>
            <a
              href="https://app.get-scala.com"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', padding: '1rem 2rem', borderRadius: '9px', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem', display: 'inline-block' }}
            >
              Try SCALA AI (€97/mo)
            </a>
          </div>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://analyze.get-scala.com"
              style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'underline', textDecorationColor: '#2d2d4e' }}
            >
              Analyze My Current Site →
            </a>
            <a
              href="https://github.com/Alessandro114/scala-sites"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'underline', textDecorationColor: '#2d2d4e' }}
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid #1e1e2e', padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#4a4a5e', fontSize: '0.78rem', margin: 0 }}>
          Pricing data sourced from vendor websites, August 2026. Prices exclude VAT. Annual billing used in all comparisons.
          SCALA Sites is open source (MIT). SCALA AI Platform is a separate commercial product.{' '}
          <a href="https://get-scala.com" style={{ color: '#64748b', textDecoration: 'none' }}>get-scala.com</a>
        </p>
      </footer>
    </div>
  )
}
