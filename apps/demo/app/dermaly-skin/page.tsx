'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { AppointmentForm } from '@scala-sites/clinicoos/components/appointment-form'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'SkinFirst — Accessible Skincare Clinic',
  description: 'Medical-grade skincare treatments from £79. HydraFacial, injectables, microneedling, and chemical peels — by trained practitioners in Shoreditch.',
  url: 'https://skinfirst.example.com',
  telephone: '+44 20 3667 9100',
  email: 'hello@skinfirst.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '34 Redchurch Street',
    addressLocality: 'Shoreditch',
    addressRegion: 'London',
    postalCode: 'E2 7DP',
    addressCountry: 'GB',
  },
  priceRange: '££',
  openingHours: 'Mo-Sa 09:00-20:00',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is SkinFirst a medical clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All injectables are performed by licensed aesthetic practitioners working under medical supervision. We are fully insured and compliant with UK aesthetics regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is SkinFirst different from a regular beauty salon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use medical-grade devices and professional formulations not available in beauty salons. Every new client receives a skin analysis before any treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your treatments suitable for darker skin tones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our practitioners are trained and experienced in treating Fitzpatrick types IV–VI. We use devices appropriate for all skin tones and always perform patch tests.',
      },
    },
  ],
}

// ─── Data ────────────────────────────────────────────────────────────────────

const packages = [
  {
    id: 'starter',
    name: 'Starter Skin',
    tagline: 'Perfect first treatment',
    price: 79,
    originalPrice: null as number | null,
    urgency: null as string | null,
    features: [
      'Skin analysis & consultation (30 min)',
      'Medical-grade facial (HydraFacial lite)',
      'Customised treatment plan',
      'Take-home skincare sample kit',
    ],
    cta: 'Book Starter Skin',
    highlight: false,
  },
  {
    id: 'glow',
    name: 'Glow Package',
    tagline: 'Our most popular combo',
    price: 249,
    originalPrice: 320,
    urgency: '3 slots left this week',
    features: [
      'Full skin consultation & mapping',
      'Medical HydraFacial (75 min)',
      'LED light therapy session',
      'Dermapen microneedling (1 zone)',
      'Bespoke home skincare protocol',
      '1 follow-up check-in (video)',
    ],
    cta: 'Book Glow Package',
    highlight: true,
  },
  {
    id: 'transform',
    name: 'Transform Course',
    tagline: '6-week results programme',
    price: 695,
    originalPrice: 890,
    urgency: 'August intake — limited',
    features: [
      '3× Medical HydraFacials',
      '2× Dermapen microneedling sessions',
      '1× IPL photorejuvenation',
      'Monthly progress photography',
      'Medical skincare protocol (prescription)',
      'WhatsApp support throughout',
    ],
    cta: 'Book Transform Course',
    highlight: false,
  },
]

const treatments = [
  { id: 'a1', name: 'Skin Consultation & Analysis', tagline: 'Where every treatment starts', price: 45, duration: '30 min', redeemable: true, badge: null as string | null },
  { id: 'a2', name: 'Medical HydraFacial', tagline: 'Deep cleanse, extract, infuse — zero downtime', price: 135, duration: '60 min', redeemable: false, badge: 'Most Popular' },
  { id: 'a3', name: 'Anti-Wrinkle Injections', tagline: 'Natural results, licensed practitioners only', price: 195, duration: '30 min', redeemable: false, badge: null },
  { id: 'a4', name: 'Lip Filler', tagline: 'Volume, definition, hydration', price: 295, duration: '45 min', redeemable: false, badge: null },
  { id: 'a5', name: 'Dermapen Microneedling', tagline: 'For scars, pores, and texture', price: 220, duration: '60 min', redeemable: false, badge: null },
  { id: 'a6', name: 'Chemical Peel (Glycolic/Lactic)', tagline: 'Pigmentation, glow, and clarity', price: 95, duration: '45 min', redeemable: false, badge: null },
  { id: 'a7', name: 'LED Light Therapy', tagline: 'Collagen boost & acne reduction', price: 65, duration: '30 min', redeemable: false, badge: 'Add-on' },
  { id: 'a8', name: 'Acne Treatment Programme', tagline: 'Medical-led, prescription if needed', price: 175, duration: '60 min', redeemable: false, badge: null },
]

const reviews = [
  {
    id: '1',
    author: 'Lola M.',
    rating: 5,
    text: 'SkinFirst gives me the same results as Harley Street — honestly, better in some ways — at a fraction of the price. The Glow Package is incredible value.',
    date: '2026-07-30',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Jamie C.',
    rating: 5,
    text: 'Super approachable and not at all intimidating. I\'d been putting off getting a skin consultation for years. Just honest advice — no pressure.',
    date: '2026-07-19',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Blessing A.',
    rating: 5,
    text: 'As someone with melanin-rich skin, finding a clinic that actually knows what they\'re doing for darker skin tones is rare. The team at SkinFirst are genuinely knowledgeable.',
    date: '2026-07-08',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Amy P.',
    rating: 5,
    text: 'Booked the Transform Course for my wedding and couldn\'t believe the difference in my skin by week 6. The WhatsApp support meant I always had someone to answer my questions.',
    date: '2026-06-25',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Marcus T.',
    rating: 5,
    text: 'Booked for my partner as a gift. She\'s now a convert and booked herself on the Glow Package two days later. The team are warm, the clinic is spotless.',
    date: '2026-06-11',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Is SkinFirst a medical clinic?',
    answer: 'Yes. All injectables (anti-wrinkle, fillers) are performed by licensed aesthetic practitioners working under medical supervision. Our HydraFacial and peel treatments are delivered by trained therapists. We are fully insured and compliant with UK aesthetics regulations.',
  },
  {
    question: 'How is SkinFirst different from a regular beauty salon?',
    answer: 'We use medical-grade devices and professional formulations not available in beauty salons. Every new client receives a skin analysis before any treatment. We tailor every protocol to your skin type, concerns, and goals.',
  },
  {
    question: 'I\'ve never had a skin treatment before. Where do I start?',
    answer: 'Start with the Skin Consultation & Analysis (£45, redeemable against treatment). In 30 minutes you\'ll know exactly what your skin needs, what\'s realistic to achieve, and what your options are — with no pressure.',
  },
  {
    question: 'Are your treatments suitable for darker skin tones?',
    answer: 'Yes, and it\'s something we take seriously. Our practitioners are trained and experienced in treating Fitzpatrick types IV–VI. We use devices appropriate for all skin tones and always perform patch tests before laser or chemical treatments.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. For treatments and packages over £200, we offer interest-free payment plans via our third-party partner (Klarna and Clearpay accepted). Select your plan at checkout or mention it when booking via WhatsApp.',
  },
  {
    question: 'What are the slots left this week about?',
    answer: 'We deliberately cap weekly bookings to maintain quality and give every client proper time and attention. When we say "3 slots left", that reflects real availability in our system. Booking early in the week is always advisable.',
  },
]

const siteConfig = {
  name: 'SkinFirst — Accessible Skincare Clinic',
  tagline: 'Medical skincare for everyone, Shoreditch',
  phone: '+44 20 3667 9100',
  email: 'hello@skinfirst.example.com',
  address: '34 Redchurch Street, Shoreditch, London E2 7DP',
  social: { instagram: '#', facebook: '#' },
}

// ─── Custom Hero — Before/After Reveal ───────────────────────────────────────

function BeforeAfterHero() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(10, Math.min(90, x)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(10, Math.min(90, x)))
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#faf5f0' }}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes baFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sliderGlow {
          0%, 100% { box-shadow: 0 0 0 4px rgba(225,29,72,0.2), 0 0 0 8px rgba(225,29,72,0.08); }
          50% { box-shadow: 0 0 0 6px rgba(225,29,72,0.35), 0 0 0 12px rgba(225,29,72,0.12); }
        }
        .ba-a0 { animation: baFadeUp 0.7s ease both; }
        .ba-a1 { animation: baFadeUp 0.7s 0.12s ease both; }
        .ba-a2 { animation: baFadeUp 0.7s 0.24s ease both; }
        .ba-a3 { animation: baFadeUp 0.7s 0.36s ease both; }
        .ba-a4 { animation: baFadeUp 0.7s 0.48s ease both; }
        .slider-handle { animation: sliderGlow 2.5s ease-in-out infinite; }
      `}</style>

      {/* Urgency banner */}
      <div style={{
        background: '#e11d48',
        color: '#fff',
        padding: '12px 24px',
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: 600,
        position: 'relative',
        zIndex: 30,
      }}>
        August availability filling fast — 3 Glow Package slots remaining this week.{' '}
        <a href="#booking" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 800 }}>Book now →</a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 44px)',
        }}
      >
        {/* Left: Before/After interactive split */}
        <div
          style={{
            position: 'relative',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            overflow: 'hidden',
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE — left side, darker */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&h=1200&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.75) saturate(0.7)',
            }}
          />

          {/* AFTER — right side, brighter, revealed via clip-path */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&h=1200&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(1.08) saturate(1.15)',
              clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              transition: isDragging ? 'none' : 'clip-path 0.05s',
            }}
          />

          {/* Before label */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              backdropFilter: 'blur(8px)',
              zIndex: 5,
            }}
          >
            Before
          </div>

          {/* After label */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(225,29,72,0.85)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              zIndex: 5,
            }}
          >
            After
          </div>

          {/* Slider line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              width: '3px',
              background: '#e11d48',
              zIndex: 6,
              transform: 'translateX(-50%)',
              boxShadow: '0 0 12px rgba(225,29,72,0.5)',
            }}
          />

          {/* Slider handle */}
          <div
            className="slider-handle"
            style={{
              position: 'absolute',
              top: '50%',
              left: `${sliderPos}%`,
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#e11d48',
              border: '3px solid #ffffff',
              zIndex: 7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'grab',
            }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="white">
              <polyline points="5,1 1,6 5,11" strokeWidth="1.5" stroke="white" fill="none" />
              <polyline points="15,1 19,6 15,11" strokeWidth="1.5" stroke="white" fill="none" />
            </svg>
          </div>

          {/* Drag hint */}
          <div
            style={{
              position: 'absolute',
              bottom: '28px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              backdropFilter: 'blur(8px)',
              zIndex: 5,
              whiteSpace: 'nowrap',
            }}
          >
            ← Drag to reveal →
          </div>
        </div>

        {/* Right: Copy */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 52px',
            background: '#faf5f0',
          }}
        >
          <p
            className="ba-a0"
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#e11d48',
              marginBottom: '16px',
            }}
          >
            Medical Skincare · Shoreditch
          </p>

          <h1
            className="ba-a1"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#2c1a13',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Great Skin
            <br />
            Shouldn&rsquo;t Cost
            <br />
            <span style={{ color: '#e11d48' }}>a Fortune</span>
          </h1>

          <p
            className="ba-a2"
            style={{
              fontSize: '1rem',
              color: '#8c6e62',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '400px',
            }}
          >
            Medical-grade skincare treatments from £79. HydraFacial, injectables,
            microneedling, and chemical peels — by trained practitioners, in Shoreditch.
          </p>

          {/* Quick review proof */}
          <div
            className="ba-a3"
            style={{ marginBottom: '32px' }}
          >
            {[
              { name: 'Lola M.', quote: 'Same results as Harley Street at a fraction of the price.' },
              { name: 'Blessing A.', quote: 'Finally a clinic that knows how to treat darker skin tones.' },
            ].map(r => (
              <div
                key={r.name}
                style={{
                  padding: '14px 18px',
                  background: '#ffffff',
                  border: '1px solid #e0d0c8',
                  borderRadius: '10px',
                  marginBottom: '10px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: '#f59e0b', fontSize: '0.8rem', flexShrink: 0 }}>★★★★★</span>
                <div>
                  <p style={{ fontSize: '0.85rem', color: '#2c1a13', margin: '0 0 4px', fontStyle: 'italic' }}>&ldquo;{r.quote}&rdquo;</p>
                  <p style={{ fontSize: '0.72rem', color: '#8c6e62', margin: 0, fontWeight: 600 }}>— {r.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="ba-a4"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <a
              href="#booking"
              style={{
                display: 'inline-block',
                padding: '15px 28px',
                background: '#e11d48',
                color: '#ffffff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(225,29,72,0.3)',
              }}
            >
              Book a Consultation — £45
            </a>
            <a
              href="#packages"
              style={{
                display: 'inline-block',
                padding: '15px 28px',
                background: 'transparent',
                color: '#2c1a13',
                border: '1.5px solid #e0d0c8',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              View Packages
            </a>
          </div>

          {/* Key badges */}
          <div
            className="ba-a4"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}
          >
            {['Licensed Practitioners', 'Fitzpatrick I–VI', 'All Skin Tones', 'Zero Pressure'].map(chip => (
              <span
                key={chip}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#9c6b58',
                  background: '#f3ede8',
                  border: '1px solid #e0d0c8',
                  padding: '4px 12px',
                  borderRadius: '20px',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Packages Section ─────────────────────────────────────────────────────

function PackagesSection() {
  return (
    <section id="packages" style={{ padding: '80px 24px', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '10px' }}>
            Treatment Packages
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '12px' }}>
            Real results, honest prices
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '1rem' }}>
            Bundled packages save you up to 25% versus individual treatments.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {packages.map(pkg => (
            <div key={pkg.id} style={{
              background: pkg.highlight ? 'var(--color-primary)' : 'var(--color-background)',
              border: pkg.highlight ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
            }}>
              {pkg.urgency && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: '#e11d48', color: '#fff',
                  fontSize: '0.68rem', fontWeight: 800, padding: '4px 10px', borderRadius: '20px',
                }}>
                  {pkg.urgency}
                </div>
              )}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: pkg.highlight ? '#fff' : 'var(--color-text)', marginBottom: '4px' }}>{pkg.name}</h3>
              <p style={{ fontSize: '0.85rem', color: pkg.highlight ? 'rgba(255,255,255,0.75)' : 'var(--color-text-muted)', marginBottom: '24px' }}>{pkg.tagline}</p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 800, color: pkg.highlight ? '#fff' : 'var(--color-text)' }}>£{pkg.price}</span>
                {pkg.originalPrice && (
                  <span style={{ fontSize: '1rem', color: pkg.highlight ? 'rgba(255,255,255,0.55)' : 'var(--color-text-muted)', marginLeft: '10px', textDecoration: 'line-through' }}>
                    £{pkg.originalPrice}
                  </span>
                )}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pkg.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: pkg.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)' }}>
                    <span style={{ color: pkg.highlight ? 'rgba(255,255,255,0.9)' : 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#booking" style={{
                display: 'block', textAlign: 'center', padding: '13px 24px', borderRadius: '10px',
                background: pkg.highlight ? '#fff' : 'var(--color-primary)',
                color: pkg.highlight ? 'var(--color-primary)' : '#fff',
                fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
              }}>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Treatments List ──────────────────────────────────────────────────────

function TreatmentsList() {
  const [open, setOpen] = useState(false)
  const visible = open ? treatments : treatments.slice(0, 5)
  return (
    <section style={{ padding: '72px 24px', background: 'var(--color-background)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>
            À la Carte Treatments
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
            Book individual treatments or combine them. Consultation fee of £45 redeemable against your first treatment.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {visible.map(tx => (
            <div key={tx.id} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '18px 22px', background: 'var(--color-surface)',
              border: '1px solid var(--color-border)', borderRadius: '12px', gap: '16px',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)' }}>{tx.name}</span>
                  {tx.badge && (
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '20px', background: 'var(--color-secondary)', color: 'var(--color-primary)', border: '1px solid var(--color-border)' }}>
                      {tx.badge}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>{tx.tagline} · {tx.duration}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                <span style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text)' }}>£{tx.price}</span>
                <a href="#booking" style={{
                  padding: '8px 18px', borderRadius: '8px', background: 'var(--color-primary)',
                  color: '#fff', fontWeight: 600, fontSize: '0.8125rem', textDecoration: 'none',
                }}>
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
        {!open && treatments.length > 5 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => setOpen(true)} style={{
              background: 'transparent', border: '1px solid var(--color-border)',
              borderRadius: '8px', padding: '10px 28px', fontSize: '0.875rem',
              fontWeight: 600, color: 'var(--color-text)', cursor: 'pointer',
            }}>
              Show all {treatments.length} treatments
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DermalySkin() {
  const theme = createCustomTheme('minimal', {
    primary: '#5c4033',
    primaryHover: '#4a3028',
    secondary: '#f3ede8',
    accent: '#9c6b58',
    background: '#faf5f0',
    surface: '#ffffff',
    text: '#2c1a13',
    textMuted: '#8c6e62',
    border: '#e0d0c8',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* Hero */}
      <BeforeAfterHero />

      {/* Packages */}
      <PackagesSection />

      {/* Urgency CTA repeat */}
      <div style={{ background: 'var(--color-primary)', padding: '32px 24px', textAlign: 'center' }}>
        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: '8px' }}>
          3 Glow Package slots left this week
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '20px', fontSize: '0.9375rem' }}>
          Save £71 vs individual treatments. Next available slot: tomorrow 11:00 AM.
        </p>
        <a href="#booking" style={{
          display: 'inline-block', padding: '14px 36px', borderRadius: '8px',
          background: '#fff', color: 'var(--color-primary)', fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
        }}>
          Reserve My Slot →
        </a>
      </div>

      {/* Treatments à la carte */}
      <TreatmentsList />

      {/* Booking Form */}
      <div id="booking" style={{ background: 'var(--color-secondary)' }}>
        <AppointmentForm
          departments={['Skin Consultation', 'HydraFacial', 'Anti-Wrinkle Injections', 'Fillers', 'Microneedling', 'Chemical Peel', 'LED Therapy', 'Glow Package', 'Transform Course']}
          title="Book Your Treatment"
          subtitle="Fill in the form and we'll confirm your slot within 1 hour. First consultation £45 — redeemable against treatment."
        />
      </div>

      {/* Full review carousel */}
      <div style={{ background: 'var(--color-background)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-surface)' }}>
        <FAQAccordion items={faqs} verticalName="DermalyOS — Skin" locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442036679100"
        message="Hi, I'd like to book a treatment at SkinFirst Shoreditch"
      />
    </div>
  )
}
