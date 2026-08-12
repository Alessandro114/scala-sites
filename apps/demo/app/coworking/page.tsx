'use client'

import { useState } from 'react'
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
  warmWhite: '#fafaf8',
  parchment: '#f3f2ee',
  sage: '#7c9082',
  sageDark: '#5e6e63',
  sageLight: '#a8b8ad',
  charcoal: '#2d2d2d',
  charcoalLight: '#3d3d3d',
  coral: '#e8734a',
  coralDark: '#d4623a',
  coralLight: '#f08060',
  ink: '#1a1a1a',
  mutedText: '#6b6b6b',
  border: '#e2e0da',
  borderDark: '#cccac3',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Harbour Works',
  description: 'Premium coworking space in the heart of London — flexible desks, private offices, and meeting rooms',
  url: 'https://harbourworks.example.com',
  locale: 'en',
  vertical: 'coworkos',
  theme: 'minimal',
  branding: { primaryColor: C.charcoal, accentColor: C.coral },
  contact: {
    phone: '+44 20 7123 4567',
    email: 'hello@harbourworks.com',
    whatsapp: '+442071234567',
    address: '32 Shad Thames, Bermondsey, London SE1 2YG',
    coordinates: { lat: 51.5036, lng: -0.075 },
  },
  social: {
    instagram: 'harbourworksldn',
    facebook: 'https://facebook.com/harbourworksldn',
  },
  seo: {
    title: 'Harbour Works | Premium Coworking Space — London',
    description:
      'Flexible desks, private offices, and meeting rooms in the heart of London. Join 400+ professionals. Hot desks from £25/day.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const spaces = [
  {
    name: 'Hot Desk',
    price: '£25',
    unit: '/day',
    monthly: '£350/mo',
    capacity: '1 person',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
    description: 'Flexible daily access to our open workspace. Perfect for freelancers and remote workers.',
    features: ['Open-plan workspace', 'High-speed Wi-Fi', 'Lounge access', 'Complimentary coffee'],
    badge: null,
  },
  {
    name: 'Dedicated Desk',
    price: '£350',
    unit: '/mo',
    monthly: null,
    capacity: '1 person',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80',
    description: 'Your own permanent desk, locked storage, and a home base in the building.',
    features: ['Reserved desk 24/7', 'Lockable storage', 'Mail handling', '10 meeting room hrs/mo'],
    badge: 'Most Popular',
  },
  {
    name: 'Private Office',
    price: '£800',
    unit: '/mo',
    monthly: null,
    capacity: '2–6 people',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80',
    description: 'Fully furnished private offices for teams that need focus and confidentiality.',
    features: ['Fully furnished', 'Branded door sign', 'Climate control', 'Unlimited meeting rooms'],
    badge: 'For Teams',
  },
  {
    name: 'Meeting Room',
    price: '£45',
    unit: '/hr',
    monthly: null,
    capacity: '4–12 people',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&q=80',
    description: 'Professional meeting rooms with AV, video conferencing, and catering on request.',
    features: ['4K display & AV', 'Video conferencing', 'Whiteboard wall', 'Catering available'],
    badge: null,
  },
]

const amenities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
    name: 'Wi-Fi 1Gbps',
    desc: 'Symmetrical gigabit fibre, multiple SSIDs',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
      </svg>
    ),
    name: 'Free Coffee',
    desc: 'Specialty espresso bar, all day',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </svg>
    ),
    name: 'Bike Storage',
    desc: 'Secure caged bike park + pumps',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 15.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5S14.38 13 13 13s-2.5 1.12-2.5 2.5zm5-10c0 1.38-1.12 2.5-2.5 2.5S10.5 6.88 10.5 5.5 11.62 3 13 3s2.5 1.12 2.5 2.5zM5.5 11c1.38 0 2.5-1.12 2.5-2.5S6.88 6 5.5 6 3 7.12 3 8.5 4.12 11 5.5 11zm15 0c1.38 0 2.5-1.12 2.5-2.5S21.88 6 20.5 6 18 7.12 18 8.5 19.12 11 20.5 11zM5.5 13C4.12 13 3 14.12 3 15.5S4.12 18 5.5 18s2.5-1.12 2.5-2.5S6.88 13 5.5 13z" />
      </svg>
    ),
    name: 'Showers',
    desc: '6 private showers with towel service',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
    name: 'Event Space',
    desc: 'Bookable for up to 80 attendees',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18V15c0 3 3.58 6 7 6s7-3 7-6v-3.82L22 9 12 3zm6 10l-6 3.36L6 13v-1.36l6 3.36 6-3.36V13z" />
      </svg>
    ),
    name: 'Lounge',
    desc: 'Breakout sofas, reading nooks',
  },
]

const upcomingEvents = [
  {
    date: 'AUG 14',
    title: 'Founder Networking Breakfast',
    desc: 'Monthly morning meetup for startup founders. Catered breakfast, lightning pitches, open floor.',
    attendees: 34,
    tag: 'Networking',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=320&fit=crop&q=80',
  },
  {
    date: 'AUG 21',
    title: 'Growth Marketing Workshop',
    desc: 'Hands-on session on paid acquisition, retention, and analytics for early-stage teams.',
    attendees: 22,
    tag: 'Workshop',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=320&fit=crop&q=80',
  },
  {
    date: 'SEP 04',
    title: 'Design Critique Evening',
    desc: 'Open critique session for designers and product teams. All levels welcome. BYOW.',
    attendees: 18,
    tag: 'Community',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?w=500&h=320&fit=crop&q=80',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Amelia R.',
    rating: 5,
    text: "I've worked from coworking spaces across London and Harbour Works is genuinely the best. The coffee is exceptional, the Wi-Fi never drops, and the community events are actually worth attending.",
    date: '2026-07-22',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Ben C.',
    rating: 5,
    text: "Moved our 4-person team from a serviced office to a private office here and haven't looked back. The monthly rate is far better value and the building is stunning.",
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Nadia V.',
    rating: 5,
    text: "As a freelance consultant who needs client-facing meeting rooms, this is exactly what I needed. Professional environment, AV always works, catering can be ordered in advance. Faultless.",
    date: '2026-08-04',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Tom P.',
    rating: 5,
    text: "The networking events alone are worth the membership. I've found two collaborators and a client directly through connections made here. The community manager is brilliant.",
    date: '2026-07-18',
    source: 'trustpilot',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Can I try before committing to a membership?',
    answer:
      "Yes — we offer a free day pass on your first visit so you can experience the space before choosing a plan. Book online or simply drop in between 09:00–17:00 on a weekday and speak to reception.",
  },
  {
    question: 'Are there long-term contracts?',
    answer:
      "Hot desks and dedicated desks are month-to-month with 30 days notice to cancel. Private offices have a minimum three-month term. We don't believe in locking people in — if it's not working for you, we'd rather know.",
  },
  {
    question: 'What are your access hours?',
    answer:
      "Dedicated desks and private offices have 24/7 keycard access. Hot desks are available 07:00–22:00 Monday to Friday and 09:00–18:00 weekends. Meeting rooms can be booked outside these hours by arrangement.",
  },
  {
    question: 'Is there parking available?',
    answer:
      "There is no on-site parking, but several NCP car parks are within a 5-minute walk. We strongly encourage cycling — our bike storage fits 40 bikes and there are showers on site. Tower Hill and London Bridge stations are each under 10 minutes on foot.",
  },
  {
    question: 'Can I use the address for my business registration?',
    answer:
      "Yes — dedicated desk and private office members can use the Shad Thames address as their registered business address. Mail handling is included, with forwarding available for an additional fee.",
  },
  {
    question: 'Do you offer day passes for meeting rooms?',
    answer:
      "Meeting rooms can be booked by anyone — you do not need a membership. Rates start at £45/hour. Book online up to 60 days in advance. Catering and AV setup can be arranged with 48 hours notice.",
  },
  {
    question: 'Is the space accessible?',
    answer:
      "Yes — Harbour Works is fully wheelchair accessible with step-free access from the street, a lift to all floors, and accessible bathrooms on every level. Please contact us if you have any specific requirements.",
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 6 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 4 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 8 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessLd = generateLocalBusinessJsonLd(siteConfig)
const faqLd = generateFAQJsonLd(faqs)

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
        backgroundColor: `${C.warmWhite}f5`,
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
        {/* Logo mark */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="0" y="0" width="13" height="13" fill={C.coral} rx="2" />
            <rect x="15" y="0" width="13" height="13" fill={C.sage} rx="2" />
            <rect x="0" y="15" width="13" height="13" fill={C.sage} rx="2" />
            <rect x="15" y="15" width="13" height="13" fill={C.charcoal} rx="2" />
          </svg>
          <span
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: C.charcoal,
              letterSpacing: '-0.02em',
            }}
          >
            Harbour Works
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
          {['Spaces', 'Amenities', 'Community', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '0.875rem',
                color: C.mutedText,
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#tour"
          style={{
            backgroundColor: C.coral,
            color: C.warmWhite,
            padding: '10px 24px',
            fontWeight: 700,
            fontSize: '0.875rem',
            textDecoration: 'none',
            borderRadius: '4px',
            letterSpacing: '0.02em',
          }}
        >
          Book a Tour
        </a>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  LIVE COUNTER (client-interactive)
// ═══════════════════════════════════════════════
function LiveDeskCounter() {
  const [count] = useState(12)

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: `${C.warmWhite}cc`,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${C.border}`,
        padding: '12px 20px',
        borderRadius: '40px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      {/* Live pulse */}
      <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px' }}>
        <span
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            animation: 'hwPing 1.8s cubic-bezier(0,0,0.2,1) infinite',
          }}
        />
        <span
          style={{
            position: 'relative',
            display: 'inline-flex',
            width: '10px',
            height: '10px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
          }}
        />
      </span>
      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: C.charcoal }}>
        <span style={{ color: C.coral, fontSize: '1.1rem' }}>{count}</span>
        {' '}desks available today
      </span>
    </div>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function CoworkOSDemoPage() {
  return (
    <div style={{ backgroundColor: C.warmWhite, color: C.charcoal }}>
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
          1. HERO — Glassmorphism overlay on full-bleed image
          ═══════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Full-bleed background image */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=1000&fit=crop&q=85"
          alt="Harbour Works coworking space"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />

        {/* Gradient mesh behind glassmorphism panel */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 80% 60% at 20% 50%, ${C.sage}55 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 80% 30%, ${C.coral}33 0%, transparent 55%),
              linear-gradient(135deg, ${C.charcoal}88 0%, ${C.charcoal}44 50%, transparent 100%)
            `,
          }}
        />

        {/* Glassmorphism content panel */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '700px',
            margin: '0 48px',
            padding: '56px 56px',
            backgroundColor: 'rgba(250,250,248,0.82)',
            backdropFilter: 'blur(24px)',
            border: `1px solid rgba(255,255,255,0.7)`,
            boxShadow: '0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.5) inset',
            borderRadius: '4px',
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div
              style={{
                width: '36px',
                height: '2px',
                backgroundColor: C.coral,
              }}
            />
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.sageDark,
              }}
            >
              Shad Thames, London SE1
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 800,
              color: C.ink,
              letterSpacing: '-0.04em',
              lineHeight: '1.05',
              marginBottom: '20px',
            }}
          >
            Work where<br />
            <span style={{ color: C.coral }}>ambition</span><br />
            belongs.
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: C.mutedText,
              lineHeight: '1.7',
              marginBottom: '36px',
              maxWidth: '480px',
            }}
          >
            Flexible desks and private offices for London&apos;s most driven
            teams. From solo founders to scaling startups — with a community
            that actually knows your name.
          </p>

          {/* Live desk counter */}
          <div style={{ marginBottom: '36px' }}>
            <LiveDeskCounter />
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a
              href="#tour"
              style={{
                backgroundColor: C.coral,
                color: C.warmWhite,
                padding: '14px 36px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '4px',
                letterSpacing: '0.02em',
              }}
            >
              Book a Free Tour
            </a>
            <a
              href="#spaces"
              style={{
                border: `2px solid ${C.border}`,
                color: C.charcoal,
                padding: '14px 36px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              View Spaces
            </a>
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes hwPing {
            75%, 100% { transform: scale(2.4); opacity: 0; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════
          2. SPACES SHOWCASE
          ═══════════════════════════════════════ */}
      <section
        id="spaces"
        style={{ backgroundColor: C.parchment, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.coral,
                marginBottom: '12px',
              }}
            >
              Our Spaces
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.ink,
                letterSpacing: '-0.04em',
                margin: 0,
              }}
            >
              A Space for Every Way You Work
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {spaces.map((space, i) => (
              <div
                key={space.name}
                className="reveal-up"
                style={{
                  backgroundColor: C.warmWhite,
                  border: `1px solid ${C.border}`,
                  overflow: 'hidden',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  animationDelay: `${i * 0.08}s`,
                  position: 'relative',
                }}
              >
                {/* Badge */}
                {space.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      zIndex: 5,
                      backgroundColor: C.coral,
                      color: C.warmWhite,
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '2px',
                    }}
                  >
                    {space.badge}
                  </div>
                )}

                {/* Image */}
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={space.image}
                    alt={space.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '28px 28px 32px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: C.ink, margin: '0 0 4px' }}>
                        {space.name}
                      </h3>
                      <span style={{ fontSize: '0.775rem', color: C.sageLight, fontWeight: 600 }}>
                        {space.capacity}
                      </span>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>
                      <span
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 900,
                          color: C.coral,
                          letterSpacing: '-0.04em',
                          lineHeight: '1',
                        }}
                      >
                        {space.price}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: C.mutedText, display: 'block' }}>
                        {space.unit}
                      </span>
                      {space.monthly && (
                        <span style={{ fontSize: '0.7rem', color: C.sageLight, display: 'block' }}>
                          {space.monthly}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: C.mutedText, lineHeight: '1.6', marginBottom: '20px' }}>
                    {space.description}
                  </p>

                  {/* Feature list */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                    {space.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: C.charcoal }}>
                        <span style={{ color: C.sage, fontSize: '0.7rem' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#tour"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      border: `2px solid ${C.charcoal}`,
                      color: C.charcoal,
                      padding: '11px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      letterSpacing: '0.03em',
                      transition: 'background-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = C.charcoal
                      el.style.color = C.warmWhite
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = 'transparent'
                      el.style.color = C.charcoal
                    }}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. AMENITIES GRID
          ═══════════════════════════════════════ */}
      <section
        id="amenities"
        style={{ backgroundColor: C.warmWhite, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: C.coral,
                  marginBottom: '12px',
                }}
              >
                Included in Every Membership
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  color: C.ink,
                  letterSpacing: '-0.04em',
                  marginBottom: '24px',
                }}
              >
                Everything You Need to Do Your Best Work
              </h2>
              <p style={{ fontSize: '0.95rem', color: C.mutedText, lineHeight: '1.7' }}>
                Every membership includes full building access, all amenities, and
                access to our community events calendar — no add-on fees or hidden extras.
              </p>
            </div>

            <div
              className="reveal-right"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2px',
              }}
            >
              {amenities.map((amenity, i) => (
                <div
                  key={amenity.name}
                  style={{
                    backgroundColor: C.parchment,
                    padding: '32px 24px',
                    cursor: 'default',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.warmWhite }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.parchment }}
                >
                  <div style={{ color: C.sage, marginBottom: '16px' }}>{amenity.icon}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: C.ink, marginBottom: '6px' }}>
                    {amenity.name}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: C.mutedText, lineHeight: '1.5' }}>
                    {amenity.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. COMMUNITY SECTION
          ═══════════════════════════════════════ */}
      <section
        id="community"
        style={{ backgroundColor: C.charcoal, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.coral,
                marginBottom: '12px',
              }}
            >
              The Community
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.warmWhite,
                letterSpacing: '-0.04em',
                margin: '0 0 16px',
              }}
            >
              More than a desk
            </h2>
            <p style={{ fontSize: '1rem', color: C.sageLight, maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
              Harbour Works is built around people. Our community spans 30+ industries,
              holds events every week, and genuinely collaborates.
            </p>
          </div>

          {/* Stats */}
          <div
            className="reveal-up"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2px',
              marginBottom: '64px',
            }}
          >
            {[
              { value: '400+', label: 'Active Members', sub: 'Founders, creatives, and specialists' },
              { value: '18', label: 'Events / Month', sub: 'Workshops, socials, and mentoring' },
              { value: '30+', label: 'Industries', sub: 'From fintech to fashion' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: '#363636',
                  padding: '48px 36px',
                  textAlign: 'center',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    color: C.coral,
                    letterSpacing: '-0.05em',
                    lineHeight: '1',
                    marginBottom: '12px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: C.warmWhite,
                    marginBottom: '6px',
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: C.sageLight }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Virtual tour placeholder */}
          <div
            className="reveal-up"
            style={{
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '16/7',
              cursor: 'pointer',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=700&fit=crop&q=85"
              alt="Harbour Works virtual tour"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  backgroundColor: C.coral,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 12px rgba(232,115,74,0.25)',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill={C.warmWhite}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span
                style={{
                  color: C.warmWhite,
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Watch the Virtual Tour
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. MEMBERSHIP PLAN COMPARISON TABLE
          ═══════════════════════════════════════ */}
      <section
        id="pricing"
        style={{ backgroundColor: C.parchment, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.coral,
                marginBottom: '12px',
              }}
            >
              Membership Plans
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.ink,
                letterSpacing: '-0.04em',
                margin: 0,
              }}
            >
              Simple, Honest Pricing
            </h2>
          </div>

          {/* Comparison table */}
          <div
            className="reveal-up"
            style={{
              backgroundColor: C.warmWhite,
              border: `1px solid ${C.border}`,
              overflow: 'hidden',
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr repeat(3, 1fr)',
                backgroundColor: C.charcoal,
              }}
            >
              <div style={{ padding: '24px 28px', color: C.sageLight, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Features
              </div>
              {[
                { name: 'Hot Desk', price: '£25/day', highlight: false },
                { name: 'Dedicated', price: '£350/mo', highlight: true },
                { name: 'Private Office', price: '£800+/mo', highlight: false },
              ].map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    padding: '24px 20px',
                    borderLeft: `1px solid ${plan.highlight ? C.coral : '#444'}`,
                    backgroundColor: plan.highlight ? `${C.coral}22` : 'transparent',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: C.warmWhite, fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                    {plan.name}
                  </div>
                  <div style={{ color: plan.highlight ? C.coralLight : C.sageLight, fontSize: '0.825rem', fontWeight: 600 }}>
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Table rows */}
            {[
              { feature: '24/7 Building Access', hot: false, ded: true, priv: true },
              { feature: 'High-Speed Gigabit Wi-Fi', hot: true, ded: true, priv: true },
              { feature: 'Free Coffee & Tea', hot: true, ded: true, priv: true },
              { feature: 'Lounge & Breakout Areas', hot: true, ded: true, priv: true },
              { feature: 'Showers & Bike Storage', hot: true, ded: true, priv: true },
              { feature: 'Lockable Storage', hot: false, ded: true, priv: true },
              { feature: 'Mail Handling', hot: false, ded: true, priv: true },
              { feature: 'Registered Business Address', hot: false, ded: true, priv: true },
              { feature: 'Meeting Room Hours/mo', hot: '2 hrs', ded: '10 hrs', priv: 'Unlimited' },
              { feature: 'Dedicated Parking', hot: false, ded: false, priv: '1 space' },
            ].map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr repeat(3, 1fr)',
                  borderTop: `1px solid ${C.border}`,
                  backgroundColor: i % 2 === 0 ? C.warmWhite : C.parchment,
                }}
              >
                <div style={{ padding: '16px 28px', fontSize: '0.875rem', color: C.charcoal, fontWeight: 500 }}>
                  {row.feature}
                </div>
                {([row.hot, row.ded, row.priv] as (boolean | string)[]).map((val, j) => (
                  <div
                    key={j}
                    style={{
                      padding: '16px 20px',
                      borderLeft: `1px solid ${C.border}`,
                      textAlign: 'center',
                      backgroundColor: j === 1 ? `${C.coral}06` : 'transparent',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    {typeof val === 'string' ? (
                      <span style={{ color: C.charcoal }}>{val}</span>
                    ) : val ? (
                      <span style={{ color: C.sage, fontSize: '1.1rem' }}>✓</span>
                    ) : (
                      <span style={{ color: C.borderDark }}>—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. MEMBER TESTIMONIALS
          ═══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: C.warmWhite, padding: '96px 0' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div className="reveal-up">
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.coral,
                marginBottom: '12px',
              }}
            >
              Member Stories
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: C.ink,
                letterSpacing: '-0.04em',
              }}
            >
              What Our Members Say
            </h2>
          </div>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. UPCOMING EVENTS
          ═══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: C.parchment, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            className="reveal-up"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: C.coral,
                  marginBottom: '12px',
                }}
              >
                What&apos;s On
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: C.ink,
                  letterSpacing: '-0.04em',
                  margin: 0,
                }}
              >
                Upcoming Events
              </h2>
            </div>
            <a
              href="#"
              style={{
                fontSize: '0.875rem',
                color: C.coral,
                textDecoration: 'none',
                fontWeight: 700,
                borderBottom: `1px solid ${C.coral}`,
                paddingBottom: '2px',
              }}
            >
              View All Events &rarr;
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {upcomingEvents.map((event, i) => (
              <div
                key={event.title}
                className="reveal-up"
                style={{
                  backgroundColor: C.warmWhite,
                  border: `1px solid ${C.border}`,
                  overflow: 'hidden',
                  borderRadius: '4px',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {/* Event image */}
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Date badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: C.coral,
                      color: C.warmWhite,
                      padding: '6px 14px',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {event.date}
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: C.sage,
                      backgroundColor: `${C.sage}15`,
                      padding: '3px 10px',
                      borderRadius: '2px',
                      marginBottom: '12px',
                    }}
                  >
                    {event.tag}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.ink, marginBottom: '10px' }}>
                    {event.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: C.mutedText, lineHeight: '1.6', marginBottom: '16px' }}>
                    {event.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '0.775rem', color: C.sageLight, fontWeight: 600 }}>
                      {event.attendees} attending
                    </span>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.8rem',
                        color: C.coral,
                        textDecoration: 'none',
                        fontWeight: 700,
                      }}
                    >
                      RSVP &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. BOOK A TOUR
          ═══════════════════════════════════════ */}
      <section
        id="tour"
        style={{ backgroundColor: C.warmWhite, padding: '96px 24px' }}
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
                color: C.coral,
                marginBottom: '12px',
              }}
            >
              Come and See Us
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: C.ink,
                letterSpacing: '-0.04em',
                marginBottom: '20px',
              }}
            >
              Book a Free Tour
            </h2>
            <p style={{ fontSize: '0.95rem', color: C.mutedText, lineHeight: '1.7', marginBottom: '40px' }}>
              The best way to know if a space is right for you is to experience it.
              Tours take 30 minutes and include a complimentary coffee. No hard sell, ever.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  label: 'Address',
                  value: '32 Shad Thames, London SE1 2YG',
                  sub: '10 min walk from London Bridge',
                },
                {
                  label: 'Phone',
                  value: '020 7123 4567',
                  sub: 'Mon–Fri 08:00–20:00',
                },
                {
                  label: 'Email',
                  value: 'hello@harbourworks.com',
                  sub: 'We reply within 2 hours',
                },
              ].map((info) => (
                <div
                  key={info.label}
                  style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: `${C.coral}15`,
                      borderRadius: '4px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: C.coral,
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: C.sageLight,
                        marginBottom: '4px',
                      }}
                    >
                      {info.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: C.ink, marginBottom: '2px' }}>
                      {info.value}
                    </div>
                    <div style={{ fontSize: '0.775rem', color: C.mutedText }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 89, label: 'tours booked this month' }}
              vertical="coworkos"
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
        style={{ backgroundColor: C.parchment, padding: '96px 24px' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.coral,
                marginBottom: '12px',
              }}
            >
              Questions
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: C.ink,
                letterSpacing: '-0.04em',
              }}
            >
              Frequently Asked
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="CoworkOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. FOOTER
          ═══════════════════════════════════════ */}
      <Footer config={siteConfig} locale="en" />

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="+442071234567"
        message="Hi! I'd like to find out more about Harbour Works coworking."
        vertical="coworkos"
      />
    </div>
  )
}
