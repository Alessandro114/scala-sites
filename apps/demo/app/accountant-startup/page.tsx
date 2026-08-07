'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import type { Review, FAQItem, SiteConfig, TeamMember } from '@scala-sites/core/lib/types'

// --- THEME ---

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

// --- DATA ---

const siteConfig: SiteConfig = {
  name: 'NumbrCrunch',
  description: 'Accountants for Startups & Freelancers — Shoreditch, London',
  url: 'https://numbrcrunch.example.com',
  locale: 'en',
  vertical: 'praxisos',
  theme: 'minimal',
  branding: {
    primaryColor: '#2d2d2d',
    accentColor: '#00b4d8',
  },
  contact: {
    phone: '+44 20 3856 7700',
    email: 'hello@numbrcrunch.com',
    whatsapp: '+442038567700',
    address: '22 Scrutton Street, Shoreditch, London EC2A 4RJ',
    coordinates: { lat: 51.5248, lng: -0.0817 },
  },
  social: {
  },
  seo: {
    title: 'NumbrCrunch — Accountants for Startups & Freelancers, London',
    description:
      'Modern accountants for startups and freelancers in Shoreditch. Fixed monthly pricing from £99. MTD certified. Xero specialists. Get a quote in 2 minutes.',
  },
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Zoe Hartley',
    role: 'Founder & Head of Accounts — ACA, MTD Certified',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&crop=top',
    specialties: ['Startup Accounts', 'R&D Tax Credits', 'Seed/Series A'],
    bookable: true,
  },
  {
    id: '2',
    name: 'Ravi Patel',
    role: 'Senior Accountant — ACCA, Xero Advisor',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=top',
    specialties: ['Freelancer Taxes', 'IR35', 'Self-Assessment'],
    bookable: true,
  },
  {
    id: '3',
    name: 'Imani Brooks',
    role: 'Tax Specialist — ATT, MTD Certified',
    photo:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop&crop=top',
    specialties: ['VAT Returns', 'Corporation Tax', 'PAYE & Payroll'],
    bookable: true,
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'James T.',
    rating: 5,
    text: "Switched to NumbrCrunch from my old high-street accountant last year. Night and day difference. Everything's on Xero, I can see my accounts in real time, and Zoe proactively flagged an R&D credit I had no idea I qualified for — saved me £8,200.",
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Layla C.',
    rating: 5,
    text: 'As a freelance designer, IR35 was a constant worry. Ravi sorted my contract reviews, set up a proper limited company structure, and now I pay myself in the most tax-efficient way possible. Brilliant value for £99 a month.',
    date: '2026-07-08',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Mehmet A.',
    rating: 5,
    text: 'We raised our seed round in April and needed our accounts investor-ready fast. NumbrCrunch turned it around in 4 days. The investors complimented the quality of our financial pack. Could not have asked for more.',
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Sophie D.',
    rating: 5,
    text: "Getting a quote took literally 2 minutes on the website. Onboarded the same week. Imani has been responsive, clear, and proactive. I actually understand my finances now. That's priceless.",
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Can I switch from my current accountant?',
    answer:
      "Yes, and it's easier than you think. We handle the entire handover — we'll write to your old accountant, collect all your records and filing history, and have you fully onboarded within 5 working days. No disruption to your business.",
  },
  {
    question: "What's included in each plan?",
    answer:
      'Every plan includes: Xero subscription, bank reconciliation, monthly management accounts, quarterly VAT returns, annual accounts and corporation tax, self-assessment (where applicable), and unlimited email support. Higher tiers add payroll, R&D tax credit claims, investor-ready reporting, and priority phone support.',
  },
  {
    question: 'Are you Making Tax Digital (MTD) compliant?',
    answer:
      'Absolutely. All our accountants are MTD certified and we use HMRC-approved software. We handle all quarterly VAT submissions and income tax filing automatically — you never need to log into HMRC yourself.',
  },
  {
    question: 'Do you work with pre-revenue startups?',
    answer:
      "Yes — in fact many of our clients are pre-revenue. Getting your accounting set up correctly from day one prevents expensive headaches later. We'll get you registered, set up on Xero, and make sure your cap table, founder salaries, and share options are structured for future investment.",
  },
  {
    question: 'What if I need help with R&D tax credits?',
    answer:
      'R&D tax credit claims are included from our Startup plan upwards. We assess your eligibility, prepare the technical report and financial schedules, and submit the claim to HMRC. Our average claim is £14,000. If you do not qualify, we will tell you upfront — no charge.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'Yes. There are no long-term contracts. You can cancel with 30 days\u2019 notice at any point. We will ensure a clean handover to your new accountant with all your records in order.',
  },
]

// --- PRICING TIERS ---

const pricingTiers = [
  {
    name: 'Freelancer',
    price: '£99',
    period: '/mo',
    ideal: 'Sole traders, contractors & consultants',
    features: [
      'Xero subscription included',
      'Self-assessment tax return',
      'Quarterly VAT returns',
      'IR35 contract review (1/yr)',
      'Annual accounts',
      'Bank reconciliation',
      'Unlimited email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Startup',
    price: '£249',
    period: '/mo',
    ideal: 'Limited companies with up to 10 employees',
    features: [
      'Everything in Freelancer',
      'Payroll for up to 5 people',
      'Monthly management accounts',
      'R&D tax credit claims',
      'Corporation tax return',
      'Investor-ready financial pack',
      'Priority phone & email support',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Scaleup',
    price: '£499',
    period: '/mo',
    ideal: 'Fast-growing companies, post-seed or Series A',
    features: [
      'Everything in Startup',
      'Payroll for up to 25 people',
      'Quarterly board reporting',
      'Due diligence support',
      'Share option (EMI) advice',
      'Dedicated senior accountant',
      'Same-day response guarantee',
    ],
    cta: 'Get Started',
    highlight: false,
  },
]

const steps = [
  {
    num: '01',
    title: 'Get a quote in 2 minutes',
    desc: 'Answer 6 quick questions about your business. We give you a fixed price instantly — no hidden fees, no hourly surprises.',
  },
  {
    num: '02',
    title: 'We handle the switch',
    desc: 'We contact your current accountant, collect all your records, and onboard you to Xero. You do nothing except say yes.',
  },
  {
    num: '03',
    title: 'Relax. We have it covered.',
    desc: 'Your accounts, tax, payroll, and VAT run on autopilot. We flag issues before they become problems. You focus on your business.',
  },
]

const trustStats = [
  { stat: '2,400+', label: 'Active Clients' },
  { stat: '£14M', label: 'Tax Saved for Clients' },
  { stat: '98%', label: 'Client Retention Rate' },
  { stat: '4.9/5', label: 'Average Google Rating' },
]

// --- NAVBAR ---

function Navbar() {
  const blue = '#00b4d8'
  const dark = '#2d2d2d'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #e5e5e5',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: '1.25rem',
              color: dark,
              letterSpacing: '-0.03em',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Numbr
          </span>
          <span
            style={{
              fontWeight: 900,
              fontSize: '1.25rem',
              color: blue,
              letterSpacing: '-0.03em',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Crunch
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {[
            { label: 'Pricing', href: '#pricing' },
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Team', href: '#team' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                textDecoration: 'none',
                color: '#6b6b6b',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            style={{
              padding: '9px 22px',
              background: blue,
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- QUOTE FORM (inline, no external component needed) ---

function QuoteForm() {
  const blue = '#00b4d8'
  const dark = '#2d2d2d'

  return (
    <div
      id="quote"
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '40px',
        border: '1px solid #e5e5e5',
        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
        maxWidth: '520px',
        margin: '0 auto',
      }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: dark, marginBottom: '6px' }}>
        Get a Quote in 2 Minutes
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginBottom: '28px' }}>
        No commitment. Fixed price. Ready to start this week.
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {[
          { label: 'Your name', type: 'text', placeholder: 'Alex Johnson' },
          { label: 'Email address', type: 'email', placeholder: 'alex@yourstartup.com' },
          { label: 'Business type', type: 'text', placeholder: 'e.g. SaaS startup, freelance designer' },
          { label: 'Annual revenue (approx)', type: 'text', placeholder: 'e.g. £0 (pre-revenue), £120,000' },
        ].map((field) => (
          <div key={field.label} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 600, color: dark }}>{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              style={{
                padding: '10px 14px',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: dark,
                outline: 'none',
                background: '#fafafa',
              }}
            />
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={{ fontSize: '0.78rem', fontWeight: 600, color: dark }}>What do you need help with?</label>
          <select
            style={{
              padding: '10px 14px',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: dark,
              background: '#fafafa',
            }}
          >
            <option>Annual accounts &amp; tax return</option>
            <option>Payroll setup</option>
            <option>VAT registration &amp; returns</option>
            <option>R&amp;D tax credit claim</option>
            <option>Company formation</option>
            <option>Everything — I need a full accountant</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            marginTop: '8px',
            padding: '14px',
            background: blue,
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '0.95rem',
            fontWeight: 800,
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
          onClick={(e) => e.preventDefault()}
        >
          Get My Free Quote →
        </button>
        <p style={{ fontSize: '0.72rem', color: '#aaa', textAlign: 'center' }}>
          2,400+ businesses trust NumbrCrunch. No spam. No obligation.
        </p>
      </form>
    </div>
  )
}

// --- PAGE ---

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
      <Hero
        title="Stop worrying about tax. Start building your business."
        subtitle="NumbrCrunch gives startups and freelancers a brilliant accountant, Xero included, at a flat monthly price. MTD certified. No surprises. Cancel anytime."
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
        ctaPrimary={{ label: 'Get a Quote in 2 Minutes', href: '#quote' }}
        ctaSecondary={{ label: 'See Pricing', href: '#pricing' }}
        overlayOpacity={0.78}
        height="full"
      />

      {/* Trust stats bar */}
      <div style={{ background: dark, padding: '22px 24px' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '48px',
          }}
        >
          {trustStats.map((item) => (
            <div key={item.stat} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: blue,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  fontSize: '0.66rem',
                  color: '#aaa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  marginTop: '2px',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div id="how-it-works" style={{ background: white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: dark, marginBottom: '8px' }}>
            How It Works
          </h2>
          <p style={{ color: muted, marginBottom: '52px' }}>
            Switching accountants (or getting your first) has never been easier.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '32px',
            }}
          >
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  textAlign: 'left',
                  padding: '32px',
                  background: light,
                  borderRadius: '14px',
                  border: '1px solid #e5e5e5',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: blue,
                    marginBottom: '16px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: dark, marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: muted, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" style={{ background: light, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: dark, marginBottom: '8px' }}>
            Transparent, Fixed Pricing
          </h2>
          <p style={{ color: muted, marginBottom: '52px' }}>
            One flat monthly fee. Everything included. No hourly billing. No surprises.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '24px',
              alignItems: 'start',
            }}
          >
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlight ? dark : white,
                  borderRadius: '16px',
                  padding: '36px 28px',
                  border: tier.highlight ? `2px solid ${blue}` : '1px solid #e5e5e5',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative',
                }}
              >
                {tier.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: blue,
                      color: white,
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 16px',
                      borderRadius: '20px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: tier.highlight ? white : dark,
                      marginBottom: '4px',
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: tier.highlight ? '#aaa' : muted }}>
                    {tier.ideal}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: 900,
                      color: tier.highlight ? blue : dark,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {tier.price}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: tier.highlight ? '#aaa' : muted }}>
                    {tier.period}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.85rem',
                        color: tier.highlight ? '#d0d0d0' : dark,
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: blue, fontWeight: 800, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  style={{
                    display: 'block',
                    padding: '13px',
                    background: tier.highlight ? blue : 'transparent',
                    color: tier.highlight ? white : dark,
                    border: tier.highlight ? 'none' : `2px solid ${dark}`,
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    marginTop: 'auto',
                  }}
                >
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

      {/* Reviews inline */}
      <div style={{ background: white }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* Team */}
      <div id="team" style={{ background: light }}>
        <TeamGrid
          members={team}
          locale="en"
          onBook={() => {
            const el = document.getElementById('quote')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
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
