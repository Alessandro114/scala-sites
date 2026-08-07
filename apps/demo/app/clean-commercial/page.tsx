'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'

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
    text: 'We switched from a national FM provider to SparkForce and the difference was immediate. Responsive, professional, and genuinely invested in quality. The 4-hour emergency callout has saved us twice.',
    date: '2026-07-08',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Patrick W., Building Manager — Canary Wharf',
    rating: 5,
    text: 'Managing a mixed-use development of 40 units requires complete reliability. SparkForce has been flawless for 18 months — their digital sign-off system integrates perfectly with our facilities software.',
    date: '2026-06-28',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Nadia L., Head of Workplace — City of London',
    rating: 5,
    text: 'Best commercial cleaning tender we have ever issued. Pricing was transparent, mobilisation took 5 days, and quality has been consistently excellent. Highly recommend for City offices.',
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
      <Hero
        title="Commercial Cleaning That Won't Let You Down"
        subtitle="SLA-backed contract cleaning for City of London offices, retail spaces, and mixed-use developments. Daily, weekly, and monthly contracts from £13/hr."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600"
        ctaPrimary={{ label: 'Get a Free Quote', href: '#quote' }}
        ctaSecondary={{ label: 'View Contracts', href: '#tiers' }}
      />

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

      {/* Trust Logos */}
      <section style={{ padding: '56px 24px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '28px' }}>
            Trusted by property managers, FM teams, and operators across the City
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 32px' }}>
            {trustLogos.map(name => (
              <span key={name} style={{
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: 'var(--color-text-muted)',
                padding: '10px 20px',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                letterSpacing: '0.04em',
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

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
