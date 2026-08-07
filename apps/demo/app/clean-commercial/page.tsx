'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SparkForce Commercial Cleaning',
  description: 'SLA-backed contract cleaning for City of London offices, retail spaces, and mixed-use developments.',
  url: 'https://sparkforce.example.com',
  telephone: '+44 20 7638 9200',
  email: 'contracts@sparkforce.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 Bartholomew Lane',
    addressLocality: 'City of London',
    postalCode: 'EC2N 2AX',
    addressCountry: 'GB',
  },
  priceRange: '££',
  areaServed: ['City of London', 'Canary Wharf', 'Shoreditch', 'Southwark'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can you mobilise a new contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For standard commercial contracts, we typically mobilise within 5–10 working days. Emergency or interim cover can be arranged within 24–48 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your operatives directly employed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All SparkForce operatives are directly employed, DBS-checked, and trained in-house to our standards. We do not use agency staff for ongoing contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your minimum contract term?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Weekly and Daily contracts have a minimum initial term of 3 months, then rolling monthly. Our Monthly contract is 30-day rolling from day one.',
      },
    },
  ],
}

// ─── Data ────────────────────────────────────────────────────────────────────

const tiers = [
  {
    id: 'daily',
    label: 'Daily Contract',
    tagline: 'For high-footfall offices & retail',
    price: '£18',
    unit: '/hr/operative',
    highlight: false,
    sla: '4-hr response guarantee',
    features: [
      'Monday–Friday cleaning operative(s)',
      'Consumables replenishment (soap, paper, bins)',
      'Daily sign-off sheet & digital log',
      'Dedicated account manager',
      'Monthly performance review',
      '24/7 emergency contact line',
    ],
  },
  {
    id: 'weekly',
    label: 'Weekly Contract',
    tagline: 'Most popular for SME offices',
    price: '£15',
    unit: '/hr/operative',
    highlight: true,
    sla: '8-hr response guarantee',
    features: [
      'Scheduled weekly visit(s)',
      'Deep clean included quarterly',
      'Consumables management included',
      'Photographic completion reports',
      'Dedicated account manager',
      'Flexible rescheduling — 48hr notice',
    ],
  },
  {
    id: 'monthly',
    label: 'Monthly Contract',
    tagline: 'Light-use spaces & storage',
    price: '£13',
    unit: '/hr/operative',
    highlight: false,
    sla: 'Next-day response',
    features: [
      'Monthly scheduled visit',
      'Comprehensive checklist-based clean',
      'Photoevidence report on completion',
      'Access via key or fob management',
      'Online booking portal access',
      'No lock-in — 30-day rolling',
    ],
  },
]

const trustLogos = [
  'Savills', 'JLL', 'CBRE', 'Knight Frank', 'WeWork', 'IWG / Regus',
]

const slaStats = [
  { value: '99.4%', label: 'SLA Adherence' },
  { value: '<4 hrs', label: 'Avg Emergency Response' },
  { value: '340+', label: 'Commercial Contracts' },
  { value: '0', label: 'Contract Breaches (2026)' },
]

const reviews = [
  {
    id: '1',
    author: 'Tom B., Facilities Manager — Finsbury Square',
    rating: 5,
    text: 'SparkForce has cleaned our 180-person office for two years. Zero complaints from staff, zero missed visits. The daily reporting and account manager make everything effortless to manage.',
    date: '2026-07-20',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Rachel K., Operations Director — EC2',
    rating: 5,
    text: 'We switched from a national FM provider to SparkForce and the difference was immediate. Responsive, professional, and genuinely invested in quality.',
    date: '2026-07-08',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Patrick W., Building Manager — Canary Wharf',
    rating: 5,
    text: 'Managing a mixed-use development of 40 units requires complete reliability. SparkForce has been flawless for 18 months.',
    date: '2026-06-28',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Nadia L., Head of Workplace — City of London',
    rating: 5,
    text: 'Best commercial cleaning tender we have ever issued. Pricing was transparent, mobilisation took 5 days, and quality has been consistently excellent.',
    date: '2026-06-14',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'How quickly can you mobilise a new contract?',
    answer: 'For standard commercial contracts, we typically mobilise within 5–10 working days. Emergency or interim cover can be arranged within 24–48 hours for existing enquiries. Contact us for same-week starts.',
  },
  {
    question: 'Are your operatives directly employed?',
    answer: 'Yes. All SparkForce operatives are directly employed, DBS-checked, and trained in-house to our standards. We do not use agency staff for ongoing contracts — this is critical to consistency and accountability.',
  },
  {
    question: 'What does the 4-hour SLA cover?',
    answer: 'Our Daily Contract SLA covers emergency response: spillages, bio-hazard situations, flood aftermath, or any urgent cleaning need raised during contracted hours. We guarantee attendance within 4 hours of notification.',
  },
  {
    question: 'Do you supply consumables?',
    answer: 'Yes — our Daily and Weekly contracts include full consumables management: hand soap, paper towels, toilet rolls, bin liners, and hand sanitiser. Monthly contracts include consumable replenishment at cost.',
  },
  {
    question: 'What is your minimum contract term?',
    answer: 'Our Weekly and Daily contracts have a minimum initial term of 3 months, then rolling monthly. Our Monthly contract is 30-day rolling from day one. We do not lock clients into long-term contracts.',
  },
  {
    question: 'Do you cover outside normal business hours?',
    answer: 'Absolutely. Many of our clients require early morning (from 05:30) or evening (until 23:00) cleaning to avoid business disruption. We operate 365 days per year including bank holidays — at a weekend supplement rate.',
  },
]

const siteConfig = {
  name: 'SparkForce Commercial Cleaning',
  tagline: 'Contract cleaning for the City of London',
  phone: '+44 20 7638 9200',
  email: 'contracts@sparkforce.example.com',
  address: '1 Bartholomew Lane, City of London EC2N 2AX',
  social: { instagram: '#', facebook: '#', linkedin: '#' },
}

// ─── Quote Form ────────────────────────────────────────────────────────────

function QuoteForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', size: '', frequency: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1100))
    setSubmitted(true)
    setLoading(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #2d3f52',
    background: '#101e2b',
    color: '#e0e1dd',
    fontSize: '0.9375rem',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#8a9db0',
    marginBottom: '6px',
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '56px 24px', background: '#0d1b2a', borderRadius: '16px', border: '1px solid #2d3f52' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.75rem' }}>
          ✓
        </div>
        <h3 style={{ color: '#e0e1dd', fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>Quote Request Received</h3>
        <p style={{ color: '#8a9db0', lineHeight: 1.6 }}>
          Thank you, <strong style={{ color: '#e0e1dd' }}>{form.name}</strong>. Our commercial team will prepare a tailored quote and contact you within 2 business hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input type="text" required value={form.name} onChange={set('name')} placeholder="Jane Smith" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Company *</label>
          <input type="text" required value={form.company} onChange={set('company')} placeholder="Acme Ltd" style={inputStyle} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Email *</label>
          <input type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone *</label>
          <input type="tel" required value={form.phone} onChange={set('phone')} placeholder="+44 7700 900000" style={inputStyle} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>Office Size (sq ft)</label>
          <select value={form.size} onChange={set('size')} style={inputStyle}>
            <option value="">Select size</option>
            <option value="under-500">Under 500 sq ft</option>
            <option value="500-2000">500–2,000 sq ft</option>
            <option value="2000-5000">2,000–5,000 sq ft</option>
            <option value="5000-15000">5,000–15,000 sq ft</option>
            <option value="15000+">15,000+ sq ft</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Cleaning Frequency</label>
          <select value={form.frequency} onChange={set('frequency')} style={inputStyle}>
            <option value="">Select frequency</option>
            <option value="daily">Daily (Mon–Fri)</option>
            <option value="weekly">Weekly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="monthly">Monthly</option>
            <option value="adhoc">Ad hoc / One-off</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Additional Requirements</label>
        <textarea
          value={form.notes}
          onChange={set('notes')}
          rows={3}
          placeholder="Any specific requirements: specialist areas, security clearance needed, out-of-hours access, etc."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '16px 24px',
          borderRadius: '8px',
          border: 'none',
          background: loading ? '#2d3f52' : '#e0e1dd',
          color: '#0d1b2a',
          fontSize: '1rem',
          fontWeight: 800,
          cursor: loading ? 'not-allowed' : 'pointer',
          letterSpacing: '0.02em',
          transition: 'background 0.2s',
        }}
      >
        {loading ? 'Sending Request...' : 'Get a Free Quote →'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#5a6e7f', margin: 0 }}>
        No obligation. We respond within 2 business hours.
      </p>
    </form>
  )
}

// ─── Custom Hero — Corporate Navy Diagonal Split ───────────────────────────

function CorporateHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .corp-a0 { animation: slideInLeft 0.8s ease both; }
        .corp-a1 { animation: fadeUp 0.7s 0.1s ease both; }
        .corp-a2 { animation: fadeUp 0.7s 0.25s ease both; }
        .corp-a3 { animation: fadeUp 0.7s 0.4s ease both; }
        .corp-a4 { animation: fadeUp 0.7s 0.55s ease both; }
        .stat-card:hover { transform: translateY(-3px); }
        .stat-card { transition: transform 0.2s; }
      `}</style>

      {/* Navy top-left panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#0d1b2a',
          clipPath: 'polygon(0 0, 62% 0, 50% 100%, 0 100%)',
          zIndex: 0,
        }}
      />

      {/* White bottom-right panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#f2f2f0',
          clipPath: 'polygon(62% 0, 100% 0, 100% 100%, 50% 100%)',
          zIndex: 0,
        }}
      />

      {/* Subtle navy texture on left side */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '62%',
          height: '100%',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)',
          zIndex: 1,
        }}
      />

      {/* Building silhouette graphic on right */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '4%',
          zIndex: 2,
          opacity: 0.07,
        }}
      >
        <svg width="280" height="400" viewBox="0 0 280 400" fill="#0d1b2a">
          <rect x="60" y="80" width="60" height="320" />
          <rect x="130" y="20" width="80" height="380" />
          <rect x="220" y="120" width="40" height="280" />
          <rect x="10" y="160" width="40" height="240" />
        </svg>
      </div>

      {/* Stats bar across diagonal intersection */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '0',
          background: '#e0e1dd',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
          whiteSpace: 'nowrap',
        }}
        className="corp-a4"
      >
        {[
          { value: '500+', label: 'Contracts' },
          { value: '2M sqft', label: 'Cleaned/Week' },
          { value: 'ISO 14001', label: 'Certified' },
          { value: '99.4%', label: 'SLA Rate' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="stat-card"
            style={{
              padding: '18px 28px',
              textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(13,27,42,0.12)' : 'none',
            }}
          >
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0d1b2a', letterSpacing: '-0.02em' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.65rem', color: '#4a5a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginTop: '2px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '140px 40px 180px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left: Title on navy */}
        <div>
          {/* Briefcase icon */}
          <div
            className="corp-a0"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '28px',
              fontSize: '1.5rem',
            }}
          >
            🏢
          </div>

          <p
            className="corp-a1"
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#4da6d9',
              marginBottom: '18px',
            }}
          >
            Contract Cleaning · City of London
          </p>

          <h1
            className="corp-a2"
            style={{
              fontFamily: '"Arial Narrow", "Arial", sans-serif',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: '#e0e1dd',
              marginBottom: '28px',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            Commercial
            <br />
            Cleaning
            <br />
            <span style={{ color: '#4da6d9' }}>That Won&rsquo;t</span>
            <br />
            Let You Down
          </h1>

          <p
            className="corp-a3"
            style={{
              fontSize: '1rem',
              color: '#8a9db0',
              lineHeight: 1.65,
              maxWidth: '400px',
              marginBottom: '36px',
            }}
          >
            SLA-backed contract cleaning for City of London offices, retail spaces,
            and mixed-use developments. Daily, weekly, and monthly contracts from £13/hr.
          </p>

          <div className="corp-a3" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#quote"
              style={{
                display: 'inline-block',
                padding: '15px 32px',
                background: '#e0e1dd',
                color: '#0d1b2a',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="#tiers"
              style={{
                display: 'inline-block',
                padding: '15px 32px',
                background: 'transparent',
                color: '#e0e1dd',
                border: '1.5px solid rgba(224,225,221,0.3)',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              View Contracts
            </a>
          </div>
        </div>

        {/* Right: trust proof on lighter bg */}
        <div style={{ paddingLeft: '20px' }}>
          <p
            className="corp-a2"
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4a5a6a',
              marginBottom: '20px',
            }}
          >
            Trusted by Property &amp; FM Leaders
          </p>

          <div
            className="corp-a3"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}
          >
            {trustLogos.map(name => (
              <span
                key={name}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#2d3f52',
                  padding: '9px 16px',
                  border: '1px solid rgba(13,27,42,0.15)',
                  borderRadius: '8px',
                  background: '#ffffff',
                  letterSpacing: '0.02em',
                }}
              >
                {name}
              </span>
            ))}
          </div>

          {/* SLA promise card */}
          <div
            className="corp-a4"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              border: '1px solid rgba(13,27,42,0.1)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f0fdf4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0d1b2a' }}>
                Our SLA Promise
              </span>
            </div>
            {[
              'Response within 4 hours — guaranteed',
              '99.4% SLA adherence in 2026',
              'Zero contract breaches this year',
              'Directly employed, DBS-checked operatives',
            ].map(line => (
              <div key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#16a34a', fontWeight: 700, flexShrink: 0, marginTop: '1px', fontSize: '0.85rem' }}>✓</span>
                <span style={{ fontSize: '0.875rem', color: '#3a4f60', lineHeight: 1.4 }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CleanCommercial() {
  const theme = createCustomTheme('bold', {
    primary: '#e0e1dd',
    primaryHover: '#c8c9c5',
    secondary: '#0d1b2a',
    accent: '#4da6d9',
    background: '#0d1b2a',
    surface: '#101e2b',
    text: '#e0e1dd',
    textMuted: '#8a9db0',
    border: '#2d3f52',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* Hero */}
      <CorporateHero />

      {/* Repeat CTA bar */}
      <div style={{ background: '#e0e1dd', padding: '20px 24px', textAlign: 'center' }}>
        <a href="#quote" style={{
          display: 'inline-block',
          padding: '14px 40px',
          borderRadius: '8px',
          background: '#0d1b2a',
          color: '#e0e1dd',
          fontWeight: 800,
          fontSize: '1rem',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}>
          Get a Free Quote — Respond in 2 Hours
        </a>
        <span style={{ display: 'block', fontSize: '0.8rem', color: '#4a5a6a', marginTop: '8px' }}>
          No commitment. Tailored to your premises.
        </span>
      </div>

      {/* SLA Stats */}
      <section style={{ padding: '72px 24px', background: '#0a1520' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 800, color: '#e0e1dd', marginBottom: '48px' }}>
            Performance You Can Hold Us To
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {slaStats.map(st => (
              <div key={st.label} style={{ padding: '28px 20px', border: '1px solid #2d3f52', borderRadius: '12px', background: '#101e2b' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#e0e1dd', lineHeight: 1 }}>{st.value}</div>
                <div style={{ fontSize: '0.8rem', color: '#8a9db0', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section id="tiers" style={{ padding: '80px 24px', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '12px' }}>
              Contract Tiers
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              Choose the frequency that matches your footfall. All contracts include account management and SLA.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {tiers.map(tier => (
              <div key={tier.id} style={{
                background: tier.highlight ? '#e0e1dd' : 'var(--color-surface)',
                border: tier.highlight ? '2px solid #e0e1dd' : '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
              }}>
                {tier.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#4da6d9',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '5px 16px',
                    borderRadius: '20px',
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: tier.highlight ? '#0d1b2a' : 'var(--color-text)', marginBottom: '4px' }}>{tier.label}</h3>
                <p style={{ fontSize: '0.85rem', color: tier.highlight ? '#4a5a6a' : 'var(--color-text-muted)', marginBottom: '20px' }}>{tier.tagline}</p>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: tier.highlight ? '#0d1b2a' : 'var(--color-text)' }}>{tier.price}</span>
                  <span style={{ fontSize: '0.85rem', color: tier.highlight ? '#4a5a6a' : 'var(--color-text-muted)', marginLeft: '6px' }}>{tier.unit}</span>
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#16a34a', marginBottom: '24px', padding: '6px 12px', background: '#f0fdf4', borderRadius: '6px', display: 'inline-block' }}>
                  SLA: {tier.sla}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: tier.highlight ? '#1a2e3a' : 'var(--color-text-muted)' }}>
                      <span style={{ color: '#4da6d9', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#quote" style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px 24px',
                  borderRadius: '8px',
                  background: tier.highlight ? '#0d1b2a' : 'transparent',
                  border: tier.highlight ? '2px solid #0d1b2a' : '2px solid var(--color-border)',
                  color: tier.highlight ? '#e0e1dd' : 'var(--color-text)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}>
                  Get a Free Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" style={{ padding: '80px 24px', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '10px' }}>
              Get a Free Quote
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              Tell us about your premises. We respond within 2 business hours with a tailored proposal.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Reviews */}
      <div style={{ background: 'var(--color-background)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-surface)' }}>
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Final CTA */}
      <section style={{ padding: '72px 24px', background: '#e0e1dd', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d1b2a', marginBottom: '12px' }}>
          Ready to raise your cleaning standard?
        </h2>
        <p style={{ color: '#3a4f60', marginBottom: '32px', fontSize: '1rem' }}>
          Join 340+ City businesses that trust SparkForce. No lock-in contracts. First clean free on annual contracts.
        </p>
        <a href="#quote" style={{
          display: 'inline-block',
          padding: '16px 44px',
          borderRadius: '8px',
          background: '#0d1b2a',
          color: '#e0e1dd',
          fontWeight: 800,
          fontSize: '1.0625rem',
          textDecoration: 'none',
        }}>
          Get a Free Quote →
        </a>
      </section>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442076389200"
        message="Hi, I'd like to get a commercial cleaning quote from SparkForce"
      />
    </div>
  )
}
