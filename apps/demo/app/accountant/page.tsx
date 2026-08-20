'use client'

import { useEffect, useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import type { Review, FAQItem, SiteConfig, TeamMember } from '@scala-sites/core/lib/types'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Sterling & Cole',
  description: 'ICAEW and ACCA chartered accountants at Canary Wharf. Tax planning, business advisory, annual accounts, payroll, VAT and company formation.',
  url: 'https://sterlingandcole.example.com',
  telephone: '+44 20 7418 8200',
  email: 'enquiries@sterlingandcole.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'One Canada Square',
    addressLocality: 'Canary Wharf',
    addressRegion: 'London',
    postalCode: 'E14 5AB',
    addressCountry: 'GB',
  },
  foundingDate: '1992',
  priceRange: '££££',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a free consultation involve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 30-minute meeting with one of our partners. We review your current accounting arrangements, identify any immediate risks or savings opportunities, and outline how we can add value. No obligation and no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you registered with a professional body?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sterling & Cole is regulated by ICAEW and holds a practising certificate from ACCA. All partners are fully qualified and bound by professional ethical standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you take on a new client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most engagements, we can onboard a new client within five working days of completing our engagement letter and KYC checks.',
      },
    },
  ],
}

// ─── Theme ────────────────────────────────────────────────────────────────────

const sterlingTheme = createCustomTheme('minimal', {
  primary: '#1e3a5f',
  primaryHover: '#162d4a',
  secondary: '#f5f3ef',
  accent: '#c9a84c',
  background: '#f5f3ef',
  surface: '#ffffff',
  text: '#1e3a5f',
  textMuted: '#5a6a7e',
  border: '#ddd8ce',
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const siteConfig: SiteConfig = {
  name: 'Sterling & Cole',
  description: 'Chartered Accountants — One Canada Square, Canary Wharf, London E14 5AB',
  url: 'https://sterlingandcole.example.com',
  locale: 'en',
  vertical: 'praxisos',
  theme: 'minimal',
  branding: { primaryColor: '#1e3a5f', accentColor: '#c9a84c' },
  contact: {
    phone: '+44 20 7418 8200',
    email: 'enquiries@sterlingandcole.com',
    whatsapp: '+442074188200',
    address: 'One Canada Square, Canary Wharf, London E14 5AB',
    coordinates: { lat: 51.5055, lng: -0.0194 },
  },
  social: {},
  seo: {
    title: 'Sterling & Cole — Chartered Accountants, Canary Wharf',
    description: 'ICAEW and ACCA chartered accountants in Canary Wharf, London.',
  },
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Jonathan Sterling',
    role: 'Managing Partner — FCA, ICAEW',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=top',
    specialties: ['Tax Planning', 'Corporate Finance', 'M&A Advisory'],
    bookable: true,
  },
  {
    id: '2',
    name: 'Diana Cole',
    role: 'Senior Partner — FCCA, ACCA',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=top',
    specialties: ['Business Advisory', 'Financial Reporting', 'Audit'],
    bookable: true,
  },
  {
    id: '3',
    name: 'Marcus Okafor',
    role: 'Tax Partner — CTA, ATT',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=top',
    specialties: ['Corporation Tax', 'VAT', 'International Tax'],
    bookable: true,
  },
  {
    id: '4',
    name: 'Priya Mehta',
    role: 'Director — ACA, ICAEW',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=top',
    specialties: ['Payroll', 'Company Formation', 'Bookkeeping'],
    bookable: true,
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Richard B.',
    rating: 5,
    text: 'Sterling & Cole have managed our group accounts for six years. Their tax planning advice alone has saved us over £340,000. Jonathan and his team are meticulous and proactive.',
    date: '2026-07-12',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Charlotte W.',
    rating: 5,
    text: 'Diana completely restructured our company\'s financial reporting ahead of our Series A. The investors were impressed with the quality of our accounts. Exceptional firm.',
    date: '2026-06-28',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Tariq H.',
    rating: 5,
    text: 'Marcus navigated an HMRC compliance review with absolute confidence. His command of VAT and corporation tax law is remarkable. We came out with zero additional liability.',
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Sarah M.',
    rating: 5,
    text: 'Set up two new subsidiaries through Priya — the whole process was seamless. Registered in under a week, full payroll running within the month.',
    date: '2026-08-02',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What does a free consultation involve?',
    answer: 'Your free initial consultation is a 30-minute meeting with one of our partners, held at our Canary Wharf offices or via video call. We review your current accounting arrangements, identify any immediate risks or savings opportunities, and outline how we can add value. There is no obligation and no cost.',
  },
  {
    question: 'How is your fee structured?',
    answer: 'Most clients are on a fixed monthly retainer covering their core accounting and tax compliance needs. We agree the scope and fixed fee in writing before we start — no surprises. Ad-hoc advisory work is quoted separately before any engagement.',
  },
  {
    question: 'Are you registered with a professional body?',
    answer: 'Yes. Sterling & Cole is regulated by the Institute of Chartered Accountants in England & Wales (ICAEW) and holds a practising certificate from ACCA. All our partners are fully qualified and bound by professional ethical standards.',
  },
  {
    question: 'Can you help with Making Tax Digital (MTD)?',
    answer: 'Absolutely. All our clients are fully MTD-compliant. We use HMRC-approved cloud accounting software (Xero, QuickBooks, Sage) and manage all quarterly VAT submissions and MTD income tax reporting on your behalf.',
  },
  {
    question: 'Do you work with overseas businesses or international clients?',
    answer: 'Yes. We have extensive experience advising internationally focused businesses, non-domiciled individuals, and overseas companies with UK operations on cross-border tax structures, transfer pricing, and double tax treaty planning.',
  },
  {
    question: 'How quickly can you take on a new client?',
    answer: 'For most engagements, we can onboard a new client within five working days of completing our engagement letter and KYC checks. For urgent matters — such as an HMRC inquiry or a time-sensitive transaction — please call us directly.',
  },
]

const services = [
  {
    icon: '£',
    title: 'Tax Planning',
    description: 'Strategic personal and corporate tax planning that legally minimises your liability — from R&D tax credits and capital allowances to inheritance tax mitigation.',
    stat: '£2.1bn client turnover managed',
  },
  {
    icon: '📊',
    title: 'Business Advisory',
    description: 'From growth strategy and cash flow forecasting to management accounts and board reporting — we act as a trusted finance partner, not just a year-end filing service.',
    stat: '320+ businesses advised',
  },
  {
    icon: '📋',
    title: 'Annual Accounts',
    description: 'Statutory accounts prepared to FRS 102 or IFRS standards, filed accurately and on time with Companies House and HMRC. Clear, well-presented financials.',
    stat: 'Filed 4,800+ sets of accounts',
  },
  {
    icon: '👥',
    title: 'Payroll',
    description: 'Full payroll bureau service including RTI submissions, auto-enrolment pension administration, P60s, P11Ds, and construction industry scheme (CIS) compliance.',
    stat: '6,200 employees on payroll',
  },
  {
    icon: '🧾',
    title: 'VAT',
    description: 'VAT registration, quarterly returns, Making Tax Digital compliance, partial exemption calculations, and advice on international transactions.',
    stat: '100% MTD compliant',
  },
  {
    icon: '🏢',
    title: 'Company Formation',
    description: 'Register your limited company, LLP, or branch in as little as 24 hours. We handle all HMRC and Companies House registrations and initial tax structuring.',
    stat: '850+ companies incorporated',
  },
]

const sectors = [
  { name: 'Technology & SaaS', icon: '💻' },
  { name: 'Property & Real Estate', icon: '🏢' },
  { name: 'Healthcare & Life Sciences', icon: '🏥' },
  { name: 'Retail & Ecommerce', icon: '🛍' },
  { name: 'Financial Services', icon: '🏦' },
  { name: 'Professional Services', icon: '📁' },
  { name: 'Hospitality & Leisure', icon: '🍽' },
  { name: 'Manufacturing & Supply Chain', icon: '⚙' },
]

const credentials = [
  { badge: 'ICAEW', label: 'Institute of Chartered Accountants in England & Wales' },
  { badge: 'ACCA', label: 'Association of Chartered Certified Accountants' },
  { badge: 'CTA', label: 'Chartered Tax Adviser — Chartered Institute of Taxation' },
  { badge: 'ATT', label: 'Association of Taxation Technicians' },
  { badge: 'Xero', label: 'Xero Platinum Partner' },
  { badge: 'QBO', label: 'QuickBooks ProAdvisor Gold' },
]

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2200 }: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const id = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(id)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(id)
  }, [started, target, duration])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// ─── Custom Hero — Numbers Authority ─────────────────────────────────────────

// Module scope on purpose: the interval in this component reads the array
// length, and a per-render array would make it a reactive dependency of
// the effect that drives the cycling display.
const FIGURES = ['£340K', '£2.1B', '4,800+', '£14M', '1,400+']

function NumbersAuthorityHero() {
  const navy = '#1e3a5f'
  const charcoal = '#181c24'
  const gold = '#c9a84c'

  const [figureIdx, setFigureIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setFigureIdx(i => (i + 1) % FIGURES.length)
        setVisible(true)
      }, 350)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: charcoal,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes numFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes figureIn {
          from { opacity: 0; transform: translateY(-16px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes figureOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(16px); }
        }
        @keyframes graphLine {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        .num-a0 { animation: numFadeUp 0.8s ease both; }
        .num-a1 { animation: numFadeUp 0.8s 0.1s ease both; }
        .num-a2 { animation: numFadeUp 0.8s 0.25s ease both; }
        .num-a3 { animation: numFadeUp 0.8s 0.4s ease both; }
        .num-a4 { animation: numFadeUp 0.8s 0.55s ease both; }
        .figure-in { animation: figureIn 0.35s ease both; }
        .figure-out { animation: figureOut 0.35s ease both; }
        .graph-path { stroke-dasharray: 600; animation: graphLine 2.5s 0.5s ease forwards; }
      `}</style>

      {/* Graph line pattern background */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.07, pointerEvents: 'none' }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Rising graph line */}
        <polyline
          className="graph-path"
          points="0,700 120,680 240,620 360,580 480,500 600,430 720,350 840,280 960,200 1080,140 1200,80"
          fill="none"
          stroke="#059669"
          strokeWidth="3"
        />
        {/* Grid lines */}
        {[200, 350, 500, 650].map(y => (
          <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="#ffffff" strokeWidth="0.5" />
        ))}
        {[200, 400, 600, 800, 1000].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="#ffffff" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Subtle vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(30,58,95,0.25) 0%, transparent 65%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: Copy */}
        <div>
          {/* "Chartered Since 1992" badge */}
          <div
            className="num-a0"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.35)',
              borderRadius: '40px',
              marginBottom: '28px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: gold, display: 'block' }} />
            <span
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: gold,
              }}
            >
              Chartered Since 1992 · Canary Wharf
            </span>
          </div>

          <h1
            className="num-a1"
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#f0ece6',
              marginBottom: '28px',
              letterSpacing: '-0.01em',
            }}
          >
            Trusted by Businesses
            <br />
            That Demand More
            <br />
            <em style={{ color: gold, fontWeight: 300 }}>From Their Accountants.</em>
          </h1>

          <p
            className="num-a2"
            style={{
              fontSize: '1.0625rem',
              color: '#8ea4bc',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            Sterling &amp; Cole — ICAEW and ACCA Chartered Accountants at Canary Wharf.
            Proactive tax planning, expert business advisory, and financial clarity for ambitious companies.
          </p>

          {/* Stats row */}
          <div
            className="num-a3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '40px',
              maxWidth: '440px',
            }}
          >
            {[
              { label: 'Client Turnover', value: 2100000000, prefix: '£', suffix: '', display: '£2.1bn' },
              { label: 'Active Clients', value: 1400, prefix: '', suffix: '+', display: '1,400+' },
              { label: 'Years of Practice', value: 34, prefix: '', suffix: ' yrs', display: '34 yrs' },
              { label: 'Tax Saved (avg/yr)', value: 340000, prefix: '£', suffix: '', display: '£340K+' },
            ].map(stat => (
              <div
                key={stat.label}
                style={{
                  padding: '18px 20px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: gold,
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.display}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#6a7f96', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="num-a4" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#booking"
              style={{
                display: 'inline-block',
                padding: '15px 32px',
                background: gold,
                color: navy,
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              }}
            >
              Book Free Consultation
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-block',
                padding: '15px 32px',
                background: 'transparent',
                color: '#c8d8e8',
                border: '1.5px solid rgba(200,216,232,0.25)',
                borderRadius: '10px',
                fontWeight: 500,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right: Large animated figure display */}
        <div style={{ textAlign: 'center' }}>
          {/* Animated cycling number */}
          <div
            style={{
              padding: '48px 32px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '24px',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background accent */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(5,150,105,0.15), transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <p
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6a7f96',
                marginBottom: '12px',
              }}
            >
              We have managed
            </p>

            <div
              key={figureIdx}
              className={visible ? 'figure-in' : 'figure-out'}
              style={{
                fontFamily: '"Georgia", serif',
                fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                fontWeight: 300,
                color: '#059669',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '-0.03em',
              }}
            >
              {FIGURES[figureIdx]}
            </div>

            <p
              style={{
                fontSize: '0.72rem',
                color: '#4a6075',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}
            >
              for clients just like you
            </p>

            {/* Figure dots indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '20px' }}>
              {FIGURES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: i === figureIdx ? gold : 'rgba(255,255,255,0.15)',
                    transition: 'background 0.3s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Credentials mini-grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {['ICAEW', 'ACCA', 'CTA', 'Xero Gold'].map(badge => (
              <div
                key={badge}
                style={{
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#059669',
                    display: 'block',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: '"Georgia", serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#c8d8e8',
                    letterSpacing: '0.04em',
                  }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const navy = '#1e3a5f'
  const gold = '#c9a84c'
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
      background: 'rgba(245,243,239,0.97)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid #ddd8ce',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <a href="#" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', gap: '2px' }}>
          <span style={{ fontWeight: 800, fontSize: '1.05rem', color: navy, letterSpacing: '-0.01em', fontFamily: '"Georgia", serif' }}>
            Sterling &amp; Cole
          </span>
          <span style={{ fontSize: '0.6rem', color: gold, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Chartered Accountants &middot; Canary Wharf
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[{ label: 'Services', href: '#services' }, { label: 'Our Team', href: '#team' }, { label: 'Sectors', href: '#sectors' }, { label: 'FAQ', href: '#faq' }].map(link => (
            <a key={link.href} href={link.href} style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#5a6a7e', fontWeight: 500 }}>
              {link.label}
            </a>
          ))}
          <a href="#booking" style={{
            padding: '9px 22px', background: navy, color: gold,
            border: '1px solid ' + gold, borderRadius: '8px',
            fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none',
          }}>
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccountantDemoPage() {
  const navy = '#1e3a5f'
  const gold = '#c9a84c'
  const cream = '#f5f3ef'
  const white = '#ffffff'
  const muted = '#5a6a7e'

  return (
    <div style={themeToStyleObject(sterlingTheme) as React.CSSProperties}>
      <Navbar />

      {/* Hero */}
      <NumbersAuthorityHero />

      {/* Stats bar */}
      <div style={{ background: navy, padding: '24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '52px' }}>
          {[
            { stat: 'Est. 1992', label: 'Chartered Since 1992' },
            { stat: '£2.1bn', label: 'Client Turnover Managed' },
            { stat: '1,400+', label: 'Active Clients' },
            { stat: '4', label: 'Professional Qualifications' },
          ].map(item => (
            <div key={item.stat} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: gold, fontFamily: '"Georgia", serif', letterSpacing: '-0.01em' }}>
                {item.stat}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#9eb3c8', textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '3px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials */}
      <div style={{ background: white, padding: '40px 24px', borderBottom: '1px solid #ddd8ce' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '0.72rem', color: muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', fontWeight: 600 }}>
            Regulated &amp; Accredited By
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {credentials.map(c => (
              <div key={c.badge} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '16px 20px', border: '1px solid #ddd8ce', borderRadius: '10px', minWidth: '130px' }}>
                <span style={{ fontWeight: 900, fontSize: '1rem', color: navy, fontFamily: '"Georgia", serif', letterSpacing: '0.04em' }}>{c.badge}</span>
                <span style={{ fontSize: '0.6rem', color: muted, textAlign: 'center', lineHeight: 1.3 }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" style={{ background: cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: navy, fontFamily: '"Georgia", serif', marginBottom: '8px' }}>
            Our Services
          </h2>
          <p style={{ textAlign: 'center', color: muted, marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}>
            A complete accounting and advisory practice covering every aspect of your financial life.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '24px' }}>
            {services.map(s => (
              <div key={s.title} style={{ background: white, borderRadius: '14px', padding: '32px 28px', border: '1px solid #ddd8ce', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: navy, fontFamily: '"Georgia", serif' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: muted, lineHeight: 1.6 }}>{s.description}</p>
                <span style={{ marginTop: 'auto', fontSize: '0.72rem', fontWeight: 700, color: gold, letterSpacing: '0.04em', textTransform: 'uppercase', borderTop: '1px solid #ddd8ce', paddingTop: '12px' }}>
                  {s.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" style={{ background: white }}>
        <TeamGrid members={team} locale="en" onBook={() => { const el = document.getElementById('booking'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} />
      </div>

      {/* Client Stats Banner */}
      <div style={{ background: navy, padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', color: '#9eb3c8', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 600 }}>Our Track Record</p>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: white, fontFamily: '"Georgia", serif', marginBottom: '16px', lineHeight: 1.2 }}>
            £2.1bn in client turnover managed every year.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#9eb3c8', maxWidth: '580px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            From sole traders to listed companies, our clients trust us to protect their finances, minimise their tax, and keep them ahead of regulatory change.
          </p>
          <a href="#booking" style={{ display: 'inline-block', padding: '14px 36px', background: gold, color: navy, borderRadius: '10px', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none' }}>
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Booking Widget */}
      <div id="booking" style={{ background: cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, color: navy, fontFamily: '"Georgia", serif', marginBottom: '8px' }}>
            Book Your Free Consultation
          </h2>
          <p style={{ textAlign: 'center', color: muted, marginBottom: '40px' }}>
            30 minutes with a qualified partner — no obligation, no cost. Available in-person at Canary Wharf or by video call.
          </p>
          <BookingWidget
            locale="en"
            showGuestCount={false}
            vertical="accountantos"
            accentColor={navy}
            slots={[
              { id: 's1', date: '2026-08-11', time: '09:00', available: true },
              { id: 's2', date: '2026-08-11', time: '10:30', available: true },
              { id: 's3', date: '2026-08-11', time: '14:00', available: true },
              { id: 's4', date: '2026-08-12', time: '09:30', available: true },
              { id: 's5', date: '2026-08-12', time: '11:00', available: true },
              { id: 's6', date: '2026-08-13', time: '10:00', available: true },
              { id: 's7', date: '2026-08-13', time: '15:00', available: true },
            ]}
            socialProof={{ count: 1400, label: 'clients trust Sterling & Cole' }}
            onSubmit={async (data) => {
              console.log('Consultation booking:', data)
              await new Promise(r => setTimeout(r, 1000))
            }}
          />
        </div>
      </div>

      {/* Reviews */}
      <div style={{ background: white }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* Industry Sectors */}
      <div id="sectors" style={{ background: cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: navy, fontFamily: '"Georgia", serif', marginBottom: '8px' }}>
            Industry Sectors We Serve
          </h2>
          <p style={{ color: muted, marginBottom: '48px' }}>Deep expertise across the sectors that drive the London economy.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {sectors.map(s => (
              <div key={s.name} style={{ background: white, borderRadius: '12px', padding: '24px 16px', border: '1px solid #ddd8ce', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.6rem' }}>{s.icon}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: navy, textAlign: 'center' }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" style={{ background: white }}>
        <FAQAccordion items={faqs} verticalName="AccountantOS" locale="en" />
      </div>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442074188200"
        message="Good morning, I would like to arrange a free initial consultation with Sterling & Cole Chartered Accountants."
        vertical="accountantos"
      />
    </div>
  )
}
