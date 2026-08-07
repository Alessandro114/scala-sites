'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import type { Review, FAQItem, SiteConfig, TeamMember } from '@scala-sites/core/lib/types'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'NumbrCrunch',
  description: 'Modern accountants for startups and freelancers in Shoreditch. Fixed monthly pricing from £99. MTD certified. Xero specialists.',
  url: 'https://numbrcrunch.example.com',
  telephone: '+44 20 3856 7700',
  email: 'hello@numbrcrunch.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 Scrutton Street',
    addressLocality: 'Shoreditch',
    addressRegion: 'London',
    postalCode: 'EC2A 4RJ',
    addressCountry: 'GB',
  },
  priceRange: '££',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I switch from my current accountant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it\'s easier than you think. We handle the entire handover — we\'ll write to your old accountant, collect all your records and filing history, and have you fully onboarded within 5 working days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with pre-revenue startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — in fact many of our clients are pre-revenue. Getting your accounting set up correctly from day one prevents expensive headaches later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel at any time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. There are no long-term contracts. You can cancel with 30 days\' notice at any point.',
      },
    },
  ],
}

// ─── Theme ────────────────────────────────────────────────────────────────────

const numbrTheme = createCustomTheme('minimal', {
  primary: '#2d2d2d',
  primaryHover: '#1a1a1a',
  secondary: '#f7f7f7',
  accent: '#00b4d8',
  background: '#f7f7f7',
  surface: '#ffffff',
  text: '#2d2d2d',
  textMuted: '#6b6b6b',
  border: '#e5e5e5',
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const siteConfig: SiteConfig = {
  name: 'NumbrCrunch',
  description: 'Accountants for Startups & Freelancers — Shoreditch, London',
  url: 'https://numbrcrunch.example.com',
  locale: 'en',
  vertical: 'praxisos',
  theme: 'minimal',
  branding: { primaryColor: '#2d2d2d', accentColor: '#00b4d8' },
  contact: {
    phone: '+44 20 3856 7700',
    email: 'hello@numbrcrunch.com',
    whatsapp: '+442038567700',
    address: '22 Scrutton Street, Shoreditch, London EC2A 4RJ',
    coordinates: { lat: 51.5248, lng: -0.0817 },
  },
  social: {},
  seo: {
    title: 'NumbrCrunch — Accountants for Startups & Freelancers, London',
    description: 'Modern accountants for startups and freelancers in Shoreditch. Fixed monthly pricing from £99.',
  },
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Zoe Hartley',
    role: 'Founder & Head of Accounts — ACA, MTD Certified',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&crop=top',
    specialties: ['Startup Accounts', 'R&D Tax Credits', 'Seed/Series A'],
    bookable: true,
  },
  {
    id: '2',
    name: 'Ravi Patel',
    role: 'Senior Accountant — ACCA, Xero Advisor',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=top',
    specialties: ['Freelancer Taxes', 'IR35', 'Self-Assessment'],
    bookable: true,
  },
  {
    id: '3',
    name: 'Imani Brooks',
    role: 'Tax Specialist — ATT, MTD Certified',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop&crop=top',
    specialties: ['VAT Returns', 'Corporation Tax', 'PAYE & Payroll'],
    bookable: true,
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'James T.',
    rating: 5,
    text: 'Zoe proactively flagged an R&D credit I had no idea I qualified for — saved me £8,200. Night and day difference from my old high-street accountant.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Layla C.',
    rating: 5,
    text: 'As a freelance designer, IR35 was a constant worry. Ravi sorted my contract reviews and now I pay myself in the most tax-efficient way possible. Brilliant value for £99 a month.',
    date: '2026-07-08',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Mehmet A.',
    rating: 5,
    text: 'We raised our seed round in April and needed our accounts investor-ready fast. NumbrCrunch turned it around in 4 days.',
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Sophie D.',
    rating: 5,
    text: 'Getting a quote took literally 2 minutes. Onboarded the same week. I actually understand my finances now. That\'s priceless.',
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Can I switch from my current accountant?',
    answer: 'Yes, and it\'s easier than you think. We handle the entire handover — we\'ll write to your old accountant, collect all your records and filing history, and have you fully onboarded within 5 working days. No disruption to your business.',
  },
  {
    question: 'What\'s included in each plan?',
    answer: 'Every plan includes: Xero subscription, bank reconciliation, monthly management accounts, quarterly VAT returns, annual accounts and corporation tax, self-assessment (where applicable), and unlimited email support.',
  },
  {
    question: 'Are you Making Tax Digital (MTD) compliant?',
    answer: 'Absolutely. All our accountants are MTD certified and we use HMRC-approved software. We handle all quarterly VAT submissions and income tax filing automatically.',
  },
  {
    question: 'Do you work with pre-revenue startups?',
    answer: 'Yes — in fact many of our clients are pre-revenue. Getting your accounting set up correctly from day one prevents expensive headaches later.',
  },
  {
    question: 'What if I need help with R&D tax credits?',
    answer: 'R&D tax credit claims are included from our Startup plan upwards. Our average claim is £14,000. If you do not qualify, we will tell you upfront — no charge.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. There are no long-term contracts. You can cancel with 30 days\' notice at any point. We will ensure a clean handover to your new accountant with all your records in order.',
  },
]

const pricingTiers = [
  {
    name: 'Freelancer',
    price: '£99',
    period: '/mo',
    ideal: 'Sole traders, contractors & consultants',
    features: ['Xero subscription included', 'Self-assessment tax return', 'Quarterly VAT returns', 'IR35 contract review (1/yr)', 'Annual accounts', 'Bank reconciliation', 'Unlimited email support'],
    highlight: false,
  },
  {
    name: 'Startup',
    price: '£249',
    period: '/mo',
    ideal: 'Limited companies with up to 10 employees',
    features: ['Everything in Freelancer', 'Payroll for up to 5 people', 'Monthly management accounts', 'R&D tax credit claims', 'Corporation tax return', 'Investor-ready financial pack', 'Priority phone & email support'],
    highlight: true,
  },
  {
    name: 'Scaleup',
    price: '£499',
    period: '/mo',
    ideal: 'Fast-growing companies, post-seed or Series A',
    features: ['Everything in Startup', 'Payroll for up to 25 people', 'Quarterly board reporting', 'Due diligence support', 'Share option (EMI) advice', 'Dedicated senior accountant', 'Same-day response guarantee'],
    highlight: false,
  },
]

const steps = [
  { num: '01', title: 'Get a quote in 2 minutes', desc: 'Answer 6 quick questions about your business. We give you a fixed price instantly — no hidden fees, no hourly surprises.' },
  { num: '02', title: 'We handle the switch', desc: 'We contact your current accountant, collect all your records, and onboard you to Xero. You do nothing except say yes.' },
  { num: '03', title: 'Relax. We have it covered.', desc: 'Your accounts, tax, payroll, and VAT run on autopilot. We flag issues before they become problems. You focus on your business.' },
]

const trustStats = [
  { stat: '2,400+', label: 'Active Clients' },
  { stat: '£14M', label: 'Tax Saved for Clients' },
  { stat: '98%', label: 'Client Retention Rate' },
  { stat: '4.9/5', label: 'Average Google Rating' },
]

// ─── Custom Hero — Startup Energy / Gradient Mesh ─────────────────────────────

function StartupEnergyHero() {
  const blue = '#00b4d8'
  const dark = '#2d2d2d'

  const metricCards = [
    { label: 'Tax Saved', value: '£2.4M', sub: 'for our clients', color: '#8b5cf6', icon: '⚡' },
    { label: 'Startups Helped', value: '340+', sub: 'and counting', color: '#00b4d8', icon: '🚀' },
    { label: 'R&D Claims', value: '£8M+', sub: 'recovered', color: '#059669', icon: '🔬' },
  ]

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes startupFade {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes meshDrift {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(2deg) scale(1.04); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes rocketPulse {
          0%, 100% { transform: translateY(0) rotate(-10deg); opacity: 0.15; }
          50% { transform: translateY(-20px) rotate(-10deg); opacity: 0.25; }
        }
        .su-a0 { animation: startupFade 0.8s ease both; }
        .su-a1 { animation: startupFade 0.8s 0.1s ease both; }
        .su-a2 { animation: startupFade 0.8s 0.2s ease both; }
        .su-a3 { animation: startupFade 0.8s 0.3s ease both; }
        .su-a4 { animation: startupFade 0.8s 0.4s ease both; }
        .su-a5 { animation: startupFade 0.8s 0.5s ease both; }
        .mesh-bg { animation: meshDrift 12s ease-in-out infinite; }
        .card-float-0 { animation: cardFloat 3.8s 0s ease-in-out infinite; }
        .card-float-1 { animation: cardFloat 3.8s 0.6s ease-in-out infinite; }
        .card-float-2 { animation: cardFloat 3.8s 1.2s ease-in-out infinite; }
        .rocket-bg { animation: rocketPulse 5s ease-in-out infinite; }
      `}</style>

      {/* Gradient mesh background */}
      <div style={{ position: 'absolute', inset: 0, background: '#0f0e17', zIndex: 0 }} />
      <div
        className="mesh-bg"
        style={{
          position: 'absolute',
          inset: '-20%',
          zIndex: 1,
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(139,92,246,0.45) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 20%, rgba(0,180,216,0.35) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(5,150,105,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 65%, rgba(59,130,246,0.25) 0%, transparent 45%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Giant rocket background element */}
      <div
        className="rocket-bg"
        style={{
          position: 'absolute',
          bottom: '-60px',
          right: '-40px',
          fontSize: '22rem',
          zIndex: 2,
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        🚀
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 40px 100px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: Copy */}
        <div>
          {/* Brand badge */}
          <div
            className="su-a0"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 16px',
              background: 'rgba(0,180,216,0.12)',
              border: '1px solid rgba(0,180,216,0.3)',
              borderRadius: '40px',
              marginBottom: '24px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: blue, display: 'block' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue }}>
              Accountants for Startups &amp; Freelancers
            </span>
          </div>

          <h1
            className="su-a1"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.03em',
            }}
          >
            Stop worrying
            <br />
            about tax.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8b5cf6, #00b4d8, #059669)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Start building.
            </span>
          </h1>

          <p
            className="su-a2"
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              maxWidth: '460px',
              marginBottom: '36px',
            }}
          >
            NumbrCrunch gives startups and freelancers a brilliant accountant,
            Xero included, at a flat monthly price. MTD certified. No surprises. Cancel anytime.
          </p>

          {/* Feature chips */}
          <div
            className="su-a3"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}
          >
            {[
              { label: 'Xero Included', color: '#00b4d8' },
              { label: 'MTD Certified', color: '#8b5cf6' },
              { label: 'R&D Claims', color: '#059669' },
              { label: 'No Lock-in', color: '#f59e0b' },
            ].map(chip => (
              <span
                key={chip.label}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: chip.color,
                  background: `${chip.color}18`,
                  border: `1px solid ${chip.color}35`,
                  padding: '5px 14px',
                  borderRadius: '20px',
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="su-a4"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}
          >
            <a
              href="#quote"
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: blue,
                color: '#ffffff',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                boxShadow: `0 4px 24px rgba(0,180,216,0.35)`,
              }}
            >
              Get a Quote in 2 Minutes
            </a>
            <a
              href="#pricing"
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}
            >
              See Pricing
            </a>
          </div>

          {/* Trust stats inline */}
          <div
            className="su-a5"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '28px' }}
          >
            {trustStats.map(item => (
              <div key={item.stat}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: blue, letterSpacing: '-0.02em' }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Floating glassmorphism metric cards */}
        <div
          style={{
            position: 'relative',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            paddingLeft: '24px',
          }}
        >
          {metricCards.map((card, i) => (
            <div
              key={card.label}
              className={`card-float-${i}`}
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${card.color}30`,
                borderRadius: '20px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
                marginLeft: i === 1 ? '32px' : i === 2 ? '16px' : '0',
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `${card.color}20`,
                  border: `1px solid ${card.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  {card.label}
                </div>
                <div
                  style={{
                    fontSize: '1.9rem',
                    fontWeight: 900,
                    color: card.color,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {card.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginTop: '3px' }}>
                  {card.sub}
                </div>
              </div>
            </div>
          ))}

          {/* Bottom CTA card */}
          <div
            className="su-a5"
            style={{
              background: 'rgba(0,180,216,0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(0,180,216,0.25)',
              borderRadius: '16px',
              padding: '18px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                Free quote — 2 minutes
              </div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)' }}>
                No spam. No obligation.
              </div>
            </div>
            <a
              href="#quote"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: blue,
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.8125rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Start →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const blue = '#00b4d8'
  const dark = '#2d2d2d'
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)', borderBottom: '1px solid #e5e5e5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span style={{ fontWeight: 900, fontSize: '1.25rem', color: dark, letterSpacing: '-0.03em', fontFamily: 'system-ui, sans-serif' }}>Numbr</span>
          <span style={{ fontWeight: 900, fontSize: '1.25rem', color: blue, letterSpacing: '-0.03em', fontFamily: 'system-ui, sans-serif' }}>Crunch</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {[{ label: 'Pricing', href: '#pricing' }, { label: 'How it works', href: '#how-it-works' }, { label: 'Team', href: '#team' }, { label: 'FAQ', href: '#faq' }].map(link => (
            <a key={link.href} href={link.href} style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#6b6b6b', fontWeight: 500 }}>{link.label}</a>
          ))}
          <a href="#quote" style={{ padding: '9px 22px', background: blue, color: '#ffffff', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none' }}>
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Quote Form ───────────────────────────────────────────────────────────────

function QuoteForm() {
  const blue = '#00b4d8'
  const dark = '#2d2d2d'
  return (
    <div id="quote" style={{ background: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #e5e5e5', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', maxWidth: '520px', margin: '0 auto' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: dark, marginBottom: '6px' }}>Get a Quote in 2 Minutes</h3>
      <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginBottom: '28px' }}>No commitment. Fixed price. Ready to start this week.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {[
          { label: 'Your name', type: 'text', placeholder: 'Alex Johnson' },
          { label: 'Email address', type: 'email', placeholder: 'alex@yourstartup.com' },
          { label: 'Business type', type: 'text', placeholder: 'e.g. SaaS startup, freelance designer' },
          { label: 'Annual revenue (approx)', type: 'text', placeholder: 'e.g. £0 (pre-revenue), £120,000' },
        ].map(field => (
          <div key={field.label} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 600, color: dark }}>{field.label}</label>
            <input type={field.type} placeholder={field.placeholder} style={{ padding: '10px 14px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '0.9rem', color: dark, outline: 'none', background: '#fafafa' }} />
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: dark }}>What do you need help with?</label>
          <select style={{ padding: '10px 14px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '0.9rem', color: dark, background: '#fafafa' }}>
            <option>Annual accounts &amp; tax return</option>
            <option>Payroll setup</option>
            <option>VAT registration &amp; returns</option>
            <option>R&amp;D tax credit claim</option>
            <option>Company formation</option>
            <option>Everything — I need a full accountant</option>
          </select>
        </div>
        <button type="submit" onClick={e => e.preventDefault()} style={{ marginTop: '8px', padding: '14px', background: blue, color: '#ffffff', border: 'none', borderRadius: '10px', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer' }}>
          Get My Free Quote →
        </button>
        <p style={{ fontSize: '0.72rem', color: '#aaa', textAlign: 'center' }}>2,400+ businesses trust NumbrCrunch. No spam. No obligation.</p>
      </form>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccountantStartupDemoPage() {
  const blue = '#00b4d8'
  const dark = '#2d2d2d'
  const light = '#f7f7f7'
  const white = '#ffffff'
  const muted = '#6b6b6b'

  return (
    <div style={themeToStyleObject(numbrTheme) as React.CSSProperties}>
      <Navbar />

      {/* Hero */}
      <StartupEnergyHero />

      {/* How it Works */}
      <div id="how-it-works" style={{ background: white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: dark, marginBottom: '8px' }}>How It Works</h2>
          <p style={{ color: muted, marginBottom: '52px' }}>Switching accountants (or getting your first) has never been easier.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
            {steps.map(step => (
              <div key={step.num} style={{ textAlign: 'left', padding: '32px', background: light, borderRadius: '14px', border: '1px solid #e5e5e5' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: blue, marginBottom: '16px', letterSpacing: '-0.03em' }}>{step.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: dark, marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', color: muted, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" style={{ background: light, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: dark, marginBottom: '8px' }}>Transparent, Fixed Pricing</h2>
          <p style={{ color: muted, marginBottom: '52px' }}>One flat monthly fee. Everything included. No hourly billing. No surprises.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '24px', alignItems: 'start' }}>
            {pricingTiers.map(tier => (
              <div key={tier.name} style={{
                background: tier.highlight ? dark : white,
                borderRadius: '16px', padding: '36px 28px',
                border: tier.highlight ? `2px solid ${blue}` : '1px solid #e5e5e5',
                display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative',
              }}>
                {tier.highlight && (
                  <div style={{
                    position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                    background: blue, color: white, fontSize: '0.7rem', fontWeight: 800,
                    padding: '4px 16px', borderRadius: '20px', letterSpacing: '0.06em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>Most Popular</div>
                )}
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: tier.highlight ? white : dark, marginBottom: '4px' }}>{tier.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: tier.highlight ? '#aaa' : muted }}>{tier.ideal}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: tier.highlight ? blue : dark, letterSpacing: '-0.03em' }}>{tier.price}</span>
                  <span style={{ fontSize: '0.85rem', color: tier.highlight ? '#aaa' : muted }}>{tier.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: tier.highlight ? '#d0d0d0' : dark, lineHeight: 1.4 }}>
                      <span style={{ color: blue, fontWeight: 800, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#quote" style={{
                  display: 'block', padding: '13px',
                  background: tier.highlight ? blue : 'transparent',
                  color: tier.highlight ? white : dark,
                  border: tier.highlight ? 'none' : `2px solid ${dark}`,
                  borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem',
                  textDecoration: 'none', textAlign: 'center', marginTop: 'auto',
                }}>
                  {tier.highlight ? 'Get Started — Most Popular' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '28px', fontSize: '0.8rem', color: muted }}>
            All prices exclude VAT. Annual payment saves 2 months. Cancel with 30 days notice.
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div style={{ background: white }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* Team */}
      <div id="team" style={{ background: light }}>
        <TeamGrid members={team} locale="en" onBook={() => { const el = document.getElementById('quote'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} />
      </div>

      {/* Quote Form */}
      <div style={{ background: white, padding: '80px 24px' }}>
        <QuoteForm />
      </div>

      {/* FAQ */}
      <div id="faq" style={{ background: light }}>
        <FAQAccordion items={faqs} locale="en" />
      </div>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442038567700"
        message="Hi NumbrCrunch! I'd like to get a quote for accounting services for my startup/freelance business."
        vertical="accountantos"
      />
    </div>
  )
}
