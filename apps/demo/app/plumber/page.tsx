'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { generateLocalBusinessJsonLd, generateFAQJsonLd } from '@scala-sites/core/lib/seo'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  navy: '#1b2838',
  navyDark: '#131d28',
  navyDeep: '#0e161f',
  steel: '#4a6fa5',
  steelLight: '#6389ba',
  orange: '#ff6b35',
  orangeDark: '#e55a25',
  white: '#ffffff',
  offWhite: '#f0f4f8',
  muted: '#8fa3b8',
  mutedDark: '#6b8299',
  border: '#253547',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Swift Plumbing & Heating',
  description: '24/7 emergency plumbing and heating services across London',
  url: 'https://swiftplumbing.example.com',
  locale: 'en',
  vertical: 'plumberos',
  theme: 'industrial',
  branding: { primaryColor: C.navy, accentColor: C.orange },
  contact: {
    phone: '+44 20 3456 7890',
    email: 'info@swiftplumbing.com',
    whatsapp: '+442034567890',
    address: '18 Tooley Street, Bermondsey, London SE1 2TH',
    coordinates: { lat: 51.5045, lng: -0.0865 },
  },
  social: {
    instagram: 'swiftplumbingltd',
    facebook: 'https://facebook.com/swiftplumbingltd',
  },
  seo: {
    title: 'Swift Plumbing & Heating | Emergency Plumber — London',
    description:
      '24/7 emergency plumber in London. Boiler installation, bathroom fitting, drain unblocking, gas safety. Licensed, insured, 60-minute response.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    icon: '⚡',
    name: 'Emergency Repairs',
    desc: 'Burst pipes, leaks, no hot water — we respond within 60 minutes, day or night.',
    urgent: true,
  },
  {
    icon: '🔥',
    name: 'Boiler Installation',
    desc: 'Worcester Bosch & Vaillant approved installers. Full supply, install & commission.',
    urgent: false,
  },
  {
    icon: '🚿',
    name: 'Bathroom Fitting',
    desc: 'Complete bathroom renovations — from design through to tiling and final fit.',
    urgent: false,
  },
  {
    icon: '♨️',
    name: 'Heating Systems',
    desc: 'Underfloor heating, radiator installation, power flushing and full system design.',
    urgent: false,
  },
  {
    icon: '🌀',
    name: 'Drain Unblocking',
    desc: 'High-pressure jetting, CCTV drain surveys, and permanent unblocking solutions.',
    urgent: false,
  },
  {
    icon: '🛡️',
    name: 'Gas Safety',
    desc: 'Gas Safe registered engineers. Annual landlord certificates and safety checks.',
    urgent: false,
  },
]

const projects = [
  {
    title: 'Victorian Terrace Bathroom',
    location: 'Clapham, SW4',
    desc: 'Full gut and refurbishment of a period bathroom — new suite, tiling, heated towel rail.',
    before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1552566628-f0a4c69a02ca?w=600&h=400&fit=crop',
    duration: '5 days',
  },
  {
    title: 'Boiler Replacement',
    location: 'Islington, N1',
    desc: 'Old back boiler replaced with new combi unit. Full system flush and pressure test.',
    before: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
    duration: '1 day',
  },
  {
    title: 'Emergency Burst Pipe',
    location: 'Hackney, E8',
    desc: 'Called at 02:00, on site by 02:45. Pipe isolated, repaired, and property made safe.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    duration: '3 hours',
  },
  {
    title: 'Underfloor Heating Install',
    location: 'Chelsea, SW3',
    desc: 'Wet UFH system across open-plan ground floor, connected to existing combi boiler.',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=400&fit=crop',
    duration: '3 days',
  },
  {
    title: 'Drain CCTV & Jetting',
    location: 'Brixton, SW2',
    desc: 'Recurring blockage diagnosed via CCTV survey. Root intrusion cleared with jetting.',
    before: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=600&h=400&fit=crop',
    duration: '4 hours',
  },
  {
    title: 'En-Suite Wet Room',
    location: 'Kensington, W8',
    desc: 'Full wet room conversion with waterproofing, linear drain, and thermostatic shower.',
    before: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=600&h=400&fit=crop',
    duration: '6 days',
  },
]

const serviceAreas = [
  'Central London', 'North London', 'East London',
  'South London', 'West London', 'Greater London',
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Rebecca T.',
    rating: 5,
    text: "Pipe burst at midnight on a Friday. Swift had someone at my door within 55 minutes. Sorted in two hours and left the place spotless. Genuinely could not have asked for more.",
    date: '2026-07-18',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'David H.',
    rating: 5,
    text: "Used Swift for our bathroom refit. The quote was fair, the timeline was accurate, and the result is beautiful. The tiler they work with is exceptional. Highly recommend.",
    date: '2026-07-25',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Sarah M.',
    rating: 5,
    text: "New boiler installed cleanly and efficiently. Engineer explained everything — efficiency ratings, smart thermostat setup, servicing schedule. Very professional throughout.",
    date: '2026-08-02',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'James L.',
    rating: 5,
    text: "As a landlord with six properties, I need a plumber I can trust completely. Swift handle all my gas safety certificates and emergency calls. Absolute reliability.",
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Priya K.',
    rating: 5,
    text: "Blocked drain that two other companies couldn't fix. Swift did a CCTV survey, found the root cause immediately, and jetted it clear in one visit. No recurring issues since.",
    date: '2026-07-14',
    source: 'trustpilot',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Are you available 24/7 for emergencies?',
    answer:
      "Yes — our emergency line is staffed around the clock, 365 days a year. For genuine emergencies (burst pipes, no heating in winter, gas leaks) we aim to be on site within 60 minutes across Greater London.",
  },
  {
    question: 'Are your engineers Gas Safe registered?',
    answer:
      "All of our engineers hold valid Gas Safe registration. You can verify any engineer's credentials on the Gas Safe Register website using their ID number, which they will show you on arrival.",
  },
  {
    question: 'Do you provide written quotes before starting work?',
    answer:
      "Always. For planned works, we visit the property to assess and provide a fixed written quote. For emergency call-outs, we quote before beginning any chargeable work beyond the initial callout fee.",
  },
  {
    question: 'What warranty do you offer on your work?',
    answer:
      "All our workmanship carries a 12-month guarantee. New boiler installations come with the manufacturer's warranty (typically 5–10 years) plus our 12-month installation guarantee.",
  },
  {
    question: 'How quickly can you fit a new bathroom?',
    answer:
      "A standard bathroom refurbishment typically takes 5–7 working days depending on the scope. We project manage the full process including tiling, electrics (via a registered electrician), and final fit-out.",
  },
  {
    question: 'What does the callout charge cover?',
    answer:
      "The £75 callout fee covers the engineer travelling to your property and diagnosing the problem. All repair work is quoted separately at competitive rates before any work begins.",
  },
  {
    question: 'Do you work with landlords and letting agents?',
    answer:
      "Yes — we have dedicated accounts for landlords and letting agents. We provide annual gas safety certificates (CP12), emergency cover for tenants, and periodic maintenance packages.",
  },
  {
    question: 'Can you supply materials as well as fit them?',
    answer:
      "Absolutely. We supply all required parts for repairs and can supply fixtures for bathroom and heating projects. We have trade accounts with major suppliers and pass on competitive pricing.",
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 3 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '13:00', available: true, spotsLeft: 1 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '15:00', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '17:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessLd = generateLocalBusinessJsonLd(siteConfig)
const faqLd = generateFAQJsonLd(faqs)

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBase: { backgroundColor: C.navyDeep, color: C.white } as React.CSSProperties,
  sectionNavy: { backgroundColor: C.navy } as React.CSSProperties,
  sectionDark: { backgroundColor: C.navyDark } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.navyDeep } as React.CSSProperties,
  orange: { color: C.orange } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  border: { borderColor: C.border } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: `${C.navyDeep}f0`,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: C.orange,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1rem',
              color: C.white,
              clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
            }}
          >
            S
          </div>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: C.white, letterSpacing: '-0.01em' }}>
            Swift Plumbing
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
          {['Services', 'Projects', 'Pricing', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: '0.875rem', color: C.muted, textDecoration: 'none', fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:+442034567890"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: C.orange,
            color: C.white,
            padding: '10px 20px',
            fontWeight: 700,
            fontSize: '0.875rem',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now
        </a>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function PlumberOSDemoPage() {
  return (
    <div style={S.pageBase}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Industrial Bold Custom
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          backgroundColor: C.navyDeep,
        }}
      >
        {/* Background image with strong overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&h=900&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: 0.18,
          }}
        />

        {/* Diagonal geometric slash — SVG overlay */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Steel-blue diagonal band */}
          <polygon
            points="900,0 1440,0 1440,900 1100,900"
            fill={C.steel}
            opacity="0.08"
          />
          {/* Orange accent slash */}
          <polygon
            points="820,0 900,0 1050,900 970,900"
            fill={C.orange}
            opacity="0.25"
          />
          {/* Fine grid texture lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={200 + i * 110}
              y1="0"
              x2={200 + i * 110 - 200}
              y2="900"
              stroke={C.steel}
              strokeWidth="1"
              opacity="0.06"
            />
          ))}
        </svg>

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '120px 24px 0',
            width: '100%',
          }}
        >
          {/* Emergency badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: `${C.orange}1a`,
              border: `1px solid ${C.orange}66`,
              padding: '6px 16px',
              marginBottom: '32px',
            }}
          >
            {/* Pulsing red dot */}
            <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px' }}>
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                  animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#ef4444',
                  borderRadius: '50%',
                }}
              />
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: C.orange,
              }}
            >
              Lines Open Now
            </span>
          </div>

          {/* Headline — condensed bold industrial */}
          <h1 style={{ margin: '0 0 24px', lineHeight: '0.88', fontWeight: 900, letterSpacing: '-0.04em' }}>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(64px, 12vw, 148px)',
                color: C.white,
                textTransform: 'uppercase',
              }}
            >
              24/7
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 7.5vw, 96px)',
                color: C.orange,
                textTransform: 'uppercase',
              }}
            >
              Emergency
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 7.5vw, 96px)',
                color: C.white,
                textTransform: 'uppercase',
              }}
            >
              Plumber
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: C.muted,
              maxWidth: '520px',
              lineHeight: '1.6',
              marginBottom: '40px',
              fontWeight: 400,
            }}
          >
            Licensed, insured, and on your doorstep in under 60 minutes.
            Covering all of Greater London — day, night, bank holidays.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '80px' }}>
            <a
              href="tel:+442034567890"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: C.orange,
                color: C.white,
                padding: '16px 36px',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              020 3456 7890
            </a>
            <a
              href="#booking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: `2px solid ${C.steel}`,
                color: C.white,
                padding: '16px 36px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Stats bar at bottom of hero */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            backgroundColor: C.navy,
            borderTop: `1px solid ${C.border}`,
            width: '100%',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5,000+', label: 'Jobs Completed' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '60min', label: 'Response Time' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '28px 24px',
                  borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 900,
                    color: C.orange,
                    letterSpacing: '-0.03em',
                    lineHeight: '1',
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: C.muted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyframes for ping animation */}
        <style>{`
          @keyframes ping {
            75%, 100% { transform: scale(2.2); opacity: 0; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════
          2. SERVICES GRID
          ═══════════════════════════════════════ */}
      <section
        id="services"
        style={{ ...S.sectionNavy, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section header */}
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Our Services
            </h2>
          </div>

          {/* 3-col grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2px',
            }}
          >
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="reveal-up"
                style={{
                  backgroundColor: C.navyDark,
                  padding: '40px 36px',
                  borderLeft: svc.urgent ? `3px solid ${C.orange}` : `3px solid ${C.border}`,
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  animationDelay: `${i * 0.07}s`,
                  transition: 'background-color 0.25s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1f3347' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.navyDark }}
              >
                {svc.urgent && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: `${C.orange}22`,
                      color: C.orange,
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      border: `1px solid ${C.orange}44`,
                    }}
                  >
                    Emergency
                  </span>
                )}
                <div style={{ fontSize: '2.25rem', marginBottom: '20px' }}>{svc.icon}</div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: C.white,
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {svc.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: '1.65', margin: 0 }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. WHY CHOOSE US
          ═══════════════════════════════════════ */}
      <section style={{ ...S.sectionDeep, padding: '96px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              The Swift Standard
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Why Customers Trust Us
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill={C.orange}>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                ),
                title: 'Fully Licensed & Insured',
                desc: 'Every engineer holds Gas Safe registration and full public liability insurance. Our work meets or exceeds UK building regulations — every time.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill={C.orange}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                ),
                title: 'Fixed-Price Quotes',
                desc: 'We quote before we start and stick to it. No hidden call-out fees buried in the small print. The price we give is the price you pay.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill={C.orange}>
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                ),
                title: '12-Month Guarantee',
                desc: "All our workmanship is guaranteed for 12 months. Boiler installations carry the manufacturer's warranty on top. If anything isn't right, we come back — no charge.",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className="reveal-up"
                style={{
                  backgroundColor: C.navyDark,
                  border: `1px solid ${C.border}`,
                  padding: '48px 36px',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ marginBottom: '24px' }}>{pillar.icon}</div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: C.white,
                    marginBottom: '16px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: '1.7', margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. RECENT PROJECTS
          ═══════════════════════════════════════ */}
      <section
        id="projects"
        style={{ ...S.sectionNavy, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              Portfolio
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Recent Projects
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="reveal-up"
                style={{
                  backgroundColor: C.navyDark,
                  border: `1px solid ${C.border}`,
                  overflow: 'hidden',
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                {/* Before/After image pair */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '180px', position: 'relative' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={project.before}
                      alt={`${project.title} — before`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.6)' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        backgroundColor: `${C.navyDeep}cc`,
                        color: C.muted,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                      }}
                    >
                      Before
                    </span>
                  </div>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={project.after}
                      alt={`${project.title} — after`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: `${C.orange}dd`,
                        color: C.white,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                      }}
                    >
                      After
                    </span>
                  </div>
                  {/* Centre divider line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: '50%',
                      width: '2px',
                      backgroundColor: C.orange,
                      zIndex: 5,
                    }}
                  />
                </div>

                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '10px',
                    }}
                  >
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.white, margin: 0 }}>
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: C.orange,
                        backgroundColor: `${C.orange}1a`,
                        padding: '3px 10px',
                        whiteSpace: 'nowrap',
                        marginLeft: '12px',
                      }}
                    >
                      {project.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: C.steelLight, marginBottom: '10px', fontWeight: 600 }}>
                    {project.location}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: C.muted, lineHeight: '1.6', margin: 0 }}>
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. SERVICE AREAS
          ═══════════════════════════════════════ */}
      <section style={{ ...S.sectionDeep, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Map placeholder */}
            <div
              className="reveal-left"
              style={{
                backgroundColor: C.navyDark,
                border: `1px solid ${C.border}`,
                borderRadius: '2px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&q=80"
                alt="London coverage map"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: C.orange,
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ transform: 'rotate(45deg)', fontSize: '1.25rem' }}>📍</span>
                </div>
                <span style={{ color: C.white, fontWeight: 700, fontSize: '1rem' }}>
                  All of Greater London
                </span>
              </div>
            </div>

            {/* Area list */}
            <div className="reveal-right">
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: C.orange,
                  marginBottom: '12px',
                }}
              >
                Coverage
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 800,
                  color: C.white,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Covering All of London
              </h2>
              <p style={{ fontSize: '0.95rem', color: C.muted, lineHeight: '1.7', marginBottom: '36px' }}>
                Based in Bermondsey, we cover every postcode across Greater London.
                Our fleet of vans means we can always dispatch the nearest engineer
                within the hour.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                }}
              >
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      backgroundColor: C.navyDark,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <span style={{ color: C.orange, fontSize: '0.75rem' }}>▶</span>
                    <span style={{ fontSize: '0.875rem', color: C.white, fontWeight: 600 }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. PRICING TRANSPARENCY
          ═══════════════════════════════════════ */}
      <section
        id="pricing"
        style={{ ...S.sectionNavy, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              Transparent Pricing
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
                margin: '0 0 16px',
              }}
            >
              No Surprises
            </h2>
            <p style={{ fontSize: '1rem', color: C.muted, maxWidth: '560px', margin: '0 auto' }}>
              We publish our guide prices. Your quote is confirmed before any work begins.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '2px',
            }}
          >
            {[
              { service: 'Callout Charge', price: 'From £75', note: 'Applied to first hour' },
              { service: 'Hourly Rate', price: '£90/hr', note: 'After first hour' },
              { service: 'Boiler Service', price: '£95', note: 'Includes safety check' },
              { service: 'Boiler Installation', price: 'From £1,800', note: 'Supply & fit' },
              { service: 'Bathroom Refit', price: 'From £3,500', note: 'Full project managed' },
              { service: 'Drain Unblocking', price: 'From £150', note: 'Jetting + clearance' },
              { service: 'Gas Safety Cert', price: '£75', note: 'CP12 landlord cert' },
              { service: 'Emergency Out-of-Hours', price: '+£40', note: 'On top of standard rate' },
            ].map((item, i) => (
              <div
                key={item.service}
                className="reveal-up"
                style={{
                  backgroundColor: C.navyDark,
                  padding: '32px 28px',
                  borderBottom: `2px solid ${i % 2 === 0 ? C.orange + '44' : C.border}`,
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    fontWeight: 900,
                    color: C.orange,
                    letterSpacing: '-0.03em',
                    marginBottom: '8px',
                  }}
                >
                  {item.price}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: C.white, marginBottom: '6px' }}>
                  {item.service}
                </div>
                <div style={{ fontSize: '0.775rem', color: C.muted }}>{item.note}</div>
              </div>
            ))}
          </div>

          <p
            className="reveal-up"
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              color: C.mutedDark,
              marginTop: '32px',
            }}
          >
            All prices include VAT. A written quote is always provided before work commences.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. REVIEWS
          ═══════════════════════════════════════ */}
      <section style={{ ...S.sectionDeep, padding: '96px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="reveal-up">
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              Customer Reviews
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
              }}
            >
              What Customers Say
            </h2>
          </div>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. BOOKING
          ═══════════════════════════════════════ */}
      <section
        id="booking"
        style={{ ...S.sectionNavy, padding: '96px 24px' }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          <div className="reveal-left">
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              Book a Visit
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Schedule Your<br />Appointment
            </h2>
            <p style={{ fontSize: '0.95rem', color: C.muted, lineHeight: '1.7', marginBottom: '40px' }}>
              Book online for planned works. For emergencies, call us directly — we do not keep you waiting.
            </p>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  label: 'Emergency Line',
                  value: '020 3456 7890',
                  sub: 'Available 24/7, 365 days',
                  href: 'tel:+442034567890',
                },
                {
                  label: 'WhatsApp',
                  value: 'Message Us',
                  sub: 'Typical reply in under 5 minutes',
                  href: `https://wa.me/442034567890`,
                },
                {
                  label: 'Email',
                  value: 'info@swiftplumbing.com',
                  sub: 'For quotes and non-urgent enquiries',
                  href: 'mailto:info@swiftplumbing.com',
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    backgroundColor: C.navyDark,
                    border: `1px solid ${C.border}`,
                    padding: '20px 24px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.orange }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = C.border }}
                >
                  <div
                    style={{
                      width: '4px',
                      alignSelf: 'stretch',
                      backgroundColor: C.orange,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: C.orange,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {contact.label}
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: C.white, marginBottom: '2px' }}>
                      {contact.value}
                    </div>
                    <div style={{ fontSize: '0.775rem', color: C.muted }}>{contact.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 128, label: 'jobs booked this month' }}
              vertical="plumberos"
              onSubmit={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════ */}
      <section
        id="faq"
        style={{ ...S.sectionDeep, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.orange,
                marginBottom: '12px',
              }}
            >
              Questions
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
              }}
            >
              Frequently Asked
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. EMERGENCY CTA BANNER
          ═══════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.orange,
          padding: '64px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: '12px', height: '12px' }}>
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: C.white,
                    borderRadius: '50%',
                    animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    width: '12px',
                    height: '12px',
                    backgroundColor: C.white,
                    borderRadius: '50%',
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: `${C.white}cc`,
                }}
              >
                Engineers Available Now
              </span>
            </div>
            <h3
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 900,
                color: C.white,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Plumbing Emergency?
            </h3>
            <p style={{ fontSize: '1.1rem', color: `${C.white}cc`, margin: '8px 0 0' }}>
              Don&apos;t wait. Call now — we&apos;ll be there within the hour.
            </p>
          </div>
          <a
            href="tel:+442034567890"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: C.white,
              color: C.orange,
              padding: '20px 48px',
              fontWeight: 900,
              fontSize: '1.25rem',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={C.orange}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            020 3456 7890
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          11. FOOTER
          ═══════════════════════════════════════ */}
      <Footer config={siteConfig} locale="en" />

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="+442034567890"
        message="Hi! I need a plumber — can you help?"
        vertical="plumberos"
      />
    </div>
  )
}
