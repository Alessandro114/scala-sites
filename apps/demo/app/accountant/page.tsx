'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import type { Review, FAQItem, SiteConfig, TeamMember } from '@scala-sites/core/lib/types'

// --- THEME ---

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

// --- DATA ---

const siteConfig: SiteConfig = {
  name: 'Sterling & Cole',
  description: 'Chartered Accountants — One Canada Square, Canary Wharf, London E14 5AB',
  url: 'https://sterlingandcole.example.com',
  locale: 'en',
  vertical: 'praxisos',
  theme: 'minimal',
  branding: {
    primaryColor: '#1e3a5f',
    accentColor: '#c9a84c',
  },
  contact: {
    phone: '+44 20 7418 8200',
    email: 'enquiries@sterlingandcole.com',
    whatsapp: '+442074188200',
    address: 'One Canada Square, Canary Wharf, London E14 5AB',
    coordinates: { lat: 51.5055, lng: -0.0194 },
  },
  social: {
  },
  seo: {
    title: 'Sterling & Cole — Chartered Accountants, Canary Wharf',
    description:
      'ICAEW and ACCA chartered accountants in Canary Wharf, London. Tax planning, business advisory, annual accounts, payroll, VAT and company formation for businesses and high-net-worth individuals.',
  },
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Jonathan Sterling',
    role: 'Managing Partner — FCA, ICAEW',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=top',
    specialties: ['Tax Planning', 'Corporate Finance', 'M&A Advisory'],
    bookable: true,
  },
  {
    id: '2',
    name: 'Diana Cole',
    role: 'Senior Partner — FCCA, ACCA',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=top',
    specialties: ['Business Advisory', 'Financial Reporting', 'Audit'],
    bookable: true,
  },
  {
    id: '3',
    name: 'Marcus Okafor',
    role: 'Tax Partner — CTA, ATT',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=top',
    specialties: ['Corporation Tax', 'VAT', 'International Tax'],
    bookable: true,
  },
  {
    id: '4',
    name: 'Priya Mehta',
    role: 'Director — ACA, ICAEW',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=top',
    specialties: ['Payroll', 'Company Formation', 'Bookkeeping'],
    bookable: true,
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Richard B.',
    rating: 5,
    text: 'Sterling & Cole have managed our group accounts for six years. Their tax planning advice alone has saved us over £340,000. Jonathan and his team are meticulous, proactive, and a genuine pleasure to work with.',
    date: '2026-07-12',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Charlotte W.',
    rating: 5,
    text: "Diana completely restructured our company's financial reporting ahead of our Series A. The investors were impressed with the quality of our accounts — and so were we. Exceptional firm.",
    date: '2026-06-28',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Tariq H.',
    rating: 5,
    text: 'Marcus navigated an HMRC compliance review with absolute confidence. His command of VAT and corporation tax law is remarkable. We came out with zero additional liability. Highly recommended.',
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Sarah M.',
    rating: 5,
    text: 'Set up two new subsidiaries through Priya — the whole process was seamless. Registered in under a week, full payroll running within the month. Everything just works when you work with Sterling & Cole.',
    date: '2026-08-02',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'What does a free consultation involve?',
    answer:
      'Your free initial consultation is a 30-minute meeting with one of our partners, held at our Canary Wharf offices or via video call. We review your current accounting arrangements, identify any immediate risks or savings opportunities, and outline how we can add value. There is no obligation and no cost.',
  },
  {
    question: 'How is your fee structured?',
    answer:
      'Most clients are on a fixed monthly retainer covering their core accounting and tax compliance needs. We agree the scope and fixed fee in writing before we start — no surprises. Ad-hoc advisory work is quoted separately before any engagement.',
  },
  {
    question: 'Are you registered with a professional body?',
    answer:
      'Yes. Sterling & Cole is regulated by the Institute of Chartered Accountants in England & Wales (ICAEW) and holds a practising certificate from ACCA. All our partners are fully qualified and bound by professional ethical standards and continuing professional development requirements.',
  },
  {
    question: 'Can you help with Making Tax Digital (MTD)?',
    answer:
      'Absolutely. All our clients are fully MTD-compliant. We use HMRC-approved cloud accounting software (Xero, QuickBooks, Sage) and manage all quarterly VAT submissions and MTD income tax reporting on your behalf. We also run training sessions for your finance team if required.',
  },
  {
    question: 'Do you work with overseas businesses or international clients?',
    answer:
      'Yes. We have extensive experience advising internationally focused businesses, non-domiciled individuals, and overseas companies with UK operations on cross-border tax structures, transfer pricing, and double tax treaty planning. We maintain referral relationships with leading tax advisers in the EU, US, and Middle East.',
  },
  {
    question: 'How quickly can you take on a new client?',
    answer:
      'For most engagements, we can onboard a new client within five working days of completing our engagement letter and KYC checks. For urgent matters — such as an HMRC inquiry or a time-sensitive transaction — please call us directly and we will prioritise your matter immediately.',
  },
]

// --- SERVICES ---

const services = [
  {
    icon: '£',
    title: 'Tax Planning',
    description:
      'Strategic personal and corporate tax planning that legally minimises your liability — from R&D tax credits and capital allowances to inheritance tax mitigation and entrepreneur\u2019s relief.',
    stat: '£2.1bn client turnover managed',
  },
  {
    icon: '📊',
    title: 'Business Advisory',
    description:
      'From growth strategy and cash flow forecasting to management accounts and board reporting — we act as a trusted finance partner, not just a year-end filing service.',
    stat: '320+ businesses advised',
  },
  {
    icon: '📋',
    title: 'Annual Accounts',
    description:
      'Statutory accounts prepared to FRS 102 or IFRS standards, filed accurately and on time with Companies House and HMRC. Clear, well-presented financials that give you confidence.',
    stat: 'Filed 4,800+ sets of accounts',
  },
  {
    icon: '👥',
    title: 'Payroll',
    description:
      'Full payroll bureau service including RTI submissions, auto-enrolment pension administration, P60s, P11Ds, and construction industry scheme (CIS) compliance.',
    stat: '6,200 employees on payroll',
  },
  {
    icon: '🧾',
    title: 'VAT',
    description:
      'VAT registration, quarterly returns, Making Tax Digital compliance, partial exemption calculations, and advice on international transactions and reverse charge rules.',
    stat: '100% MTD compliant',
  },
  {
    icon: '🏢',
    title: 'Company Formation',
    description:
      'Register your limited company, LLP, or branch in as little as 24 hours. We handle all HMRC and Companies House registrations, shareholder agreements, and initial tax structuring.',
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

// --- NAVBAR ---

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(245,243,239,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #ddd8ce',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '70px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', gap: '2px' }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.05rem',
              color: '#1e3a5f',
              letterSpacing: '-0.01em',
              fontFamily: '"Georgia", "Times New Roman", serif',
            }}
          >
            Sterling &amp; Cole
          </span>
          <span
            style={{
              fontSize: '0.6rem',
              color: '#c9a84c',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Chartered Accountants &middot; Canary Wharf
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Services', href: '#services' },
            { label: 'Our Team', href: '#team' },
            { label: 'Sectors', href: '#sectors' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                textDecoration: 'none',
                color: '#5a6a7e',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            style={{
              padding: '9px 22px',
              background: '#1e3a5f',
              color: '#c9a84c',
              border: '1px solid #c9a84c',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- PAGE ---

export default function AccountantDemoPage() {
  const navy = '#1e3a5f'
  const gold = '#c9a84c'
  const cream = '#f5f3ef'
  const white = '#ffffff'
  const muted = '#5a6a7e'

  return (
    <div style={themeToStyleObject(sterlingTheme) as React.CSSProperties}>
      <Navbar />

      <Hero
        title="Trusted by Businesses That Demand More From Their Accountants."
        subtitle="Sterling & Cole — ICAEW and ACCA Chartered Accountants at Canary Wharf. Proactive tax planning, expert business advisory, and financial clarity for ambitious companies."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
        ctaPrimary={{ label: 'Book Free Consultation', href: '#booking' }}
        ctaSecondary={{ label: 'Our Services', href: '#services' }}
        overlayOpacity={0.72}
        height="full"
      />

      {/* Stats bar */}
      <div style={{ background: navy, padding: '24px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '52px',
          }}
        >
          {[
            { stat: 'Est. 1987', label: 'Nearly 40 Years of Practice' },
            { stat: '£2.1bn', label: 'Client Turnover Managed' },
            { stat: '1,400+', label: 'Active Clients' },
            { stat: '4', label: 'Professional Qualifications' },
          ].map((item) => (
            <div key={item.stat} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: gold,
                  fontFamily: '"Georgia", "Times New Roman", serif',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: '#9eb3c8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  marginTop: '3px',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials / Trust badges */}
      <div style={{ background: white, padding: '40px 24px', borderBottom: '1px solid #ddd8ce' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.72rem',
              color: muted,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              fontWeight: 600,
            }}
          >
            Regulated &amp; Accredited By
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            {credentials.map((c) => (
              <div
                key={c.badge}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '16px 20px',
                  border: `1px solid #ddd8ce`,
                  borderRadius: '10px',
                  minWidth: '130px',
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: navy,
                    fontFamily: '"Georgia", serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.badge}
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    color: muted,
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" style={{ background: cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: 800,
              color: navy,
              fontFamily: '"Georgia", serif',
              marginBottom: '8px',
            }}
          >
            Our Services
          </h2>
          <p style={{ textAlign: 'center', color: muted, marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}>
            A complete accounting and advisory practice covering every aspect of your financial life.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
              gap: '24px',
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: white,
                  borderRadius: '14px',
                  padding: '32px 28px',
                  border: '1px solid #ddd8ce',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: navy,
                    fontFamily: '"Georgia", serif',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: muted, lineHeight: 1.6 }}>{s.description}</p>
                <span
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: gold,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    borderTop: `1px solid #ddd8ce`,
                    paddingTop: '12px',
                  }}
                >
                  {s.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" style={{ background: white }}>
        <TeamGrid
          members={team}
          locale="en"
          onBook={() => {
            const el = document.getElementById('booking')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      {/* Client Stats Banner */}
      <div style={{ background: navy, padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.7rem',
              color: '#9eb3c8',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 600,
            }}
          >
            Our Track Record
          </p>
          <h2
            style={{
              fontSize: '2.4rem',
              fontWeight: 800,
              color: white,
              fontFamily: '"Georgia", serif',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            £2.1bn in client turnover managed every year.
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#9eb3c8',
              maxWidth: '580px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            From sole traders to listed companies, our clients trust us to protect their finances, minimise their tax, and keep them ahead of regulatory change.
          </p>
          <a
            href="#booking"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: gold,
              color: navy,
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Booking Widget */}
      <div id="booking" style={{ background: cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: navy,
              fontFamily: '"Georgia", serif',
              marginBottom: '8px',
            }}
          >
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
              { id: "s1", date: '2026-08-11', time: '09:00', available: true },
              { id: "s2", date: '2026-08-11', time: '10:30', available: true },
              { id: "s3", date: '2026-08-11', time: '14:00', available: true },
              { id: "s4", date: '2026-08-12', time: '09:30', available: true },
              { id: "s5", date: '2026-08-12', time: '11:00', available: true },
              { id: "s6", date: '2026-08-13', time: '10:00', available: true },
              { id: "s7", date: '2026-08-13', time: '15:00', available: true },
            ]}
            socialProof={{ count: 1400, label: 'clients trust Sterling & Cole' }}
            onSubmit={async (data) => {
              console.log('Consultation booking:', data)
              await new Promise((r) => setTimeout(r, 1000))
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
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              color: navy,
              fontFamily: '"Georgia", serif',
              marginBottom: '8px',
            }}
          >
            Industry Sectors We Serve
          </h2>
          <p style={{ color: muted, marginBottom: '48px' }}>
            Deep expertise across the sectors that drive the London economy.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {sectors.map((s) => (
              <div
                key={s.name}
                style={{
                  background: white,
                  borderRadius: '12px',
                  padding: '24px 16px',
                  border: '1px solid #ddd8ce',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>{s.icon}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: navy, textAlign: 'center' }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" style={{ background: white }}>
        <FAQAccordion items={faqs} locale="en" />
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
