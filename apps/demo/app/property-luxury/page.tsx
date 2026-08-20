'use client'
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'

// ─── Color palette ───────────────────────────────────────────────────────────
const C = {
  charcoal: '#2c2c2c',
  charcoalDeep: '#1a1a1a',
  gold: '#b8963e',
  goldLight: '#d4b66a',
  goldMuted: 'rgba(184,150,62,0.25)',
  offWhite: '#f9f7f4',
  cream: '#f0ece4',
  textMuted: '#8a8577',
  borderSubtle: 'rgba(184,150,62,0.15)',
  overlay: 'rgba(28,28,28,0.65)',
}

// ─── Mock data ───────────────────────────────────────────────────────────────

const featuredProperties = [
  {
    id: '1',
    title: 'Grand Penthouse — One Hyde Park',
    area: 'Knightsbridge',
    price: '£18,500,000',
    beds: 5, baths: 6, sqft: '6,674',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'Georgian Townhouse — Eaton Square',
    area: 'Belgravia',
    price: '£9,750,000',
    beds: 6, baths: 5, sqft: '5,167',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Sky Residence — The Shard',
    area: 'London Bridge',
    price: '£5,200,000',
    beds: 3, baths: 3, sqft: '2,637',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Lateral Apartment — Park Lane',
    area: 'Mayfair',
    price: '£32,000/month',
    beds: 4, baths: 4, sqft: '3,444',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Neo-Classical Villa — Bishops Avenue',
    area: 'Hampstead',
    price: '£14,200,000',
    beds: 8, baths: 7, sqft: '11,840',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop',
  },
  {
    id: '6',
    title: 'River View Duplex — Chelsea Embankment',
    area: 'Chelsea',
    price: '£22,000/month',
    beds: 3, baths: 3, sqft: '2,260',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=900&h=600&fit=crop',
  },
]

const services = [
  { title: 'Sales', icon: '■', desc: 'Discreet marketing and negotiation for prime residential and trophy assets above £2m.' },
  { title: 'Lettings', icon: '◆', desc: 'Corporate and diplomatic lettings across Mayfair, Belgravia, Knightsbridge and Chelsea.' },
  { title: 'Property Management', icon: '▲', desc: 'White-glove estate management for absentee owners and family offices.' },
  { title: 'Development', icon: '●', desc: 'Site acquisition, planning consultancy and sales agency for boutique residential schemes.' },
  { title: 'International', icon: '◎', desc: 'Cross-border acquisitions with tax, visa and structuring guidance for global UHNWI.' },
]

const testimonials = [
  {
    quote: 'In 30 years of property investment across four continents, I have never encountered an agency that combines discretion, market intelligence, and execution at the level Mayfair & Partners delivers.',
    name: 'Sir Edward Pemberton',
    detail: 'Sold: £22m Eaton Square Townhouse',
  },
  {
    quote: 'Sebastian structured the acquisition of our London portfolio — six properties across Mayfair and Knightsbridge — with flawless coordination. He understood our privacy requirements without a single briefing note.',
    name: 'Nadia Al-Fayed',
    detail: 'Acquired: £47m Portfolio, 6 Properties',
  },
  {
    quote: 'Relocating our family from Munich, Isabelle had us settled in our Knightsbridge apartment within a week of arrival. The furnished specification was exactly as described. An extraordinary personal service.',
    name: 'Dr. Christoph Muller',
    detail: 'Let: £18,000/month Knightsbridge',
  },
]

const siteConfig = {
  name: 'Mayfair & Partners',
  tagline: 'Ultra-Prime Real Estate — Prime Central London Since 1987',
  phone: '+44 20 7493 8000',
  email: 'prime@mayfairandpartners.com',
  address: '40 Berkeley Square, Mayfair, London W1J 5AL',
  social: { instagram: '#', facebook: '#' },
}

// ─── Animated counter hook ───────────────────────────────────────────────────

function useCountUp(end: number, duration = 2000, suffix = '') {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return { ref, display: `${value}${suffix}` }
}

// ─── SECTION 1: Hero — Cinematic ─────────────────────────────────────────────

function HeroCinematic() {
  return (
    <section className="relative w-full h-screen overflow-hidden grain">
      {/* Ken Burns background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Luxury estate aerial view"
          className="w-full h-full object-cover"
          style={{
            animation: 'kenBurns 10s ease-in-out infinite alternate',
          }} width={1200} height={800} />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.4) 40%, rgba(20,20,20,0.15) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col justify-end h-full pb-32 px-6 md:px-16 lg:px-24" style={{ zIndex: 2 }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: 48, height: 1, background: C.gold }} />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: C.gold, letterSpacing: '0.3em' }}
          >
            Est. 1987
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-4"
          style={{
            color: C.offWhite,
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          Mayfair<br />
          <span style={{ fontStyle: 'italic', fontWeight: 300 }}>&amp; Partners</span>
        </h1>

        <p
          className="text-base md:text-lg max-w-md mb-12"
          style={{ color: 'rgba(249,247,244,0.6)', lineHeight: 1.6 }}
        >
          Ultra-Prime Real Estate Since 1987
        </p>

        {/* Search strip */}
        <div
          className="flex flex-col md:flex-row items-stretch gap-0 rounded-sm overflow-hidden max-w-4xl"
          style={{
            border: `1px solid rgba(184,150,62,0.3)`,
          }}
        >
          {[
            { label: 'Location', placeholder: 'Mayfair, Belgravia...' },
            { label: 'Property Type', placeholder: 'Penthouse, Villa...' },
            { label: 'Price Range', placeholder: '£2m — £30m' },
          ].map((field, i) => (
            <div
              key={field.label}
              className="flex-1 px-6 py-4"
              style={{
                borderRight: i < 2 ? `1px solid rgba(184,150,62,0.15)` : 'none',
                background: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <label
                className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                style={{ color: C.gold }}
              >
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full bg-transparent outline-none text-sm"
                style={{ color: C.offWhite }}
              />
            </div>
          ))}
          <button
            className="px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
            style={{
              background: 'transparent',
              color: C.gold,
              borderLeft: `1px solid rgba(184,150,62,0.3)`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = C.gold
              e.currentTarget.style.color = C.charcoalDeep
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = C.gold
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Ken Burns keyframes */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.06) translate(-1%, -1%); }
        }
      `}</style>
    </section>
  )
}

// ─── SECTION 2: Stats strip ──────────────────────────────────────────────────

function StatsStrip() {
  const stat1 = useCountUp(42, 2200)     // £4.2bn
  const stat2 = useCountUp(340, 2000)    // 340+
  const stat3 = useCountUp(70, 1800)     // 70%
  const stat4 = useCountUp(38, 2400)     // 38

  const stats = [
    { ref: stat1.ref, prefix: '£', value: stat1.display, decimal: '.2', suffix: 'bn', label: 'Total Sales Volume' },
    { ref: stat2.ref, prefix: '', value: stat2.display, decimal: '', suffix: '+', label: 'Prime Properties' },
    { ref: stat3.ref, prefix: '', value: stat3.display, decimal: '', suffix: '%', label: 'International Clients' },
    { ref: stat4.ref, prefix: '', value: stat4.display, decimal: '', suffix: '', label: 'Years of Excellence' },
  ]

  return (
    <section
      className="diagonal-top relative py-24 md:py-32"
      style={{ background: C.charcoalDeep, zIndex: 2 }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} ref={s.ref} className="text-center reveal-up">
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-3"
                style={{
                  color: C.gold,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                }}
              >
                {s.prefix === '£' ? '£4.2' : s.value}{s.prefix !== '£' ? s.suffix : 'bn'}
              </p>
              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: 'rgba(249,247,244,0.45)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 3: Featured properties — Staggered ─────────────────────────────

function FeaturedProperties() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24" style={{ background: C.offWhite }}>
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 reveal-up">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: 48, height: 1, background: C.gold }} />
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: C.gold }}>
            Portfolio
          </span>
        </div>
        <h2
          className="text-4xl md:text-5xl font-light"
          style={{ color: C.charcoal, fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Featured Properties
        </h2>
      </div>

      {/* Staggered 2-col grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {featuredProperties.map((p, i) => (
          <div
            key={p.id}
            className="reveal-up image-reveal group"
            style={{
              marginTop: i % 2 === 1 ? '60px' : '0',
            }}
          >
            {/* Image container */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/3', borderRadius: '2px' }}
            >
              <Image src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{}} width={1200} height={800} />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.3) 50%, transparent 100%)',
                }}
              >
                <div className="flex items-center gap-6 text-xs uppercase tracking-[0.15em]" style={{ color: 'rgba(249,247,244,0.8)' }}>
                  <span>{p.beds} Beds</span>
                  <span style={{ color: C.gold }}>|</span>
                  <span>{p.baths} Baths</span>
                  <span style={{ color: C.gold }}>|</span>
                  <span>{p.sqft} sq ft</span>
                </div>
              </div>

              {/* Price overlay — bottom left */}
              <div className="absolute bottom-0 left-0 px-5 py-3" style={{ background: 'rgba(26,26,26,0.85)' }}>
                <span
                  className="text-sm font-medium tracking-wide"
                  style={{ color: C.gold }}
                >
                  {p.price}
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4">
              <h3
                className="text-lg font-normal mb-1"
                style={{ color: C.charcoal, fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {p.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.textMuted }}>
                {p.area}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── SECTION 4: About / Split screen ─────────────────────────────────────────

function AboutSplit() {
  const values = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Off-Market Expertise',
      desc: 'Over 60% of our transactions never reach a public portal. Our buyer network of 3,200+ qualified UHNWI ensures discreet, competitive outcomes.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: 'Global Reach',
      desc: '70% of our clients are international. We speak Mandarin, Arabic, French, Italian and Russian in-house, bridging global capital with London property.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Absolute Discretion',
      desc: 'NDA-protected transactions, confidential marketing programmes, and a client list that will never appear in a press release.',
    },
  ]

  return (
    <section className="split-screen" style={{ minHeight: '100vh' }}>
      {/* Left — Sticky portrait */}
      <div
        className="relative overflow-hidden"
        style={{ background: C.cream }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center p-12">
          <div className="relative">
            {/* Blob decoration */}
            <div
              className="blob absolute -top-8 -left-8 w-72 h-72 opacity-30"
              style={{ background: C.gold, zIndex: 0 }}
            />
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
              alt="Senior partner portrait"
              className="relative w-full max-w-sm object-cover reveal-scale"
              style={{ zIndex: 1, borderRadius: '2px', aspectRatio: '3/4' }} width={1200} height={800} />
            {/* Caption card */}
            <div
              className="absolute -bottom-6 -right-6 px-6 py-4"
              style={{
                background: C.charcoalDeep,
                zIndex: 2,
                borderRadius: '2px',
              }}
            >
              <p className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: C.gold }}>
                Since 1987
              </p>
              <p className="text-sm font-light" style={{ color: C.offWhite }}>
                40 Berkeley Square, Mayfair
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right — Scrolling content */}
      <div
        className="flex flex-col justify-center py-24 px-8 md:px-16"
        style={{ background: C.offWhite }}
      >
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-5 reveal-up">
            <div style={{ width: 48, height: 1, background: C.gold }} />
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: C.gold }}>
              Our Story
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-light mb-8 reveal-up"
            style={{ color: C.charcoal, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            A heritage of trust in Prime Central London
          </h2>

          <p className="text-base leading-relaxed mb-12 reveal-up" style={{ color: C.textMuted }}>
            Founded in 1987 from a single office on Berkeley Square, Mayfair &amp; Partners has
            grown to become one of London&rsquo;s most respected independent estate agencies. We operate
            exclusively in the prime and super-prime segment, handling transactions that demand
            the highest levels of discretion, market intelligence, and personal commitment.
          </p>

          {/* Value props */}
          <div className="space-y-10">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-5 reveal-up">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    border: `1px solid ${C.borderSubtle}`,
                    borderRadius: '2px',
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <h4
                    className="text-sm font-medium uppercase tracking-[0.1em] mb-2"
                    style={{ color: C.charcoal }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 5: Services — Bento grid ────────────────────────────────────────

function ServicesBento() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24" style={{ background: C.charcoalDeep }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 48, height: 1, background: C.gold }} />
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: C.gold }}>
              Services
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ color: C.offWhite, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            What We Do
          </h2>
        </div>

        {/* Bento grid */}
        <div className="bento-grid stagger-children">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card magnetic-card relative flex flex-col justify-end p-6 md:p-8 cursor-pointer group"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid rgba(184,150,62,0.12)`,
                borderRadius: '4px',
              }}
            >
              {/* Icon */}
              <span
                className="text-2xl md:text-3xl mb-4 block transition-transform duration-500 group-hover:translate-y-[-4px]"
                style={{ color: C.gold }}
              >
                {s.icon}
              </span>

              <h3
                className="text-lg md:text-xl font-light mb-2"
                style={{ color: C.offWhite, fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {s.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(249,247,244,0.5)' }}>
                {s.desc}
              </p>

              {/* Subtle corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(225deg, rgba(184,150,62,0.15) 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 6: Testimonials — Large stacked quotes ──────────────────────────

function TestimonialsStacked() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24" style={{ background: C.offWhite }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20 reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: 48, height: 1, background: C.gold }} />
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: C.gold }}>
              Client Voices
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ color: C.charcoal, fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Trusted by the World&rsquo;s Most Discerning
          </h2>
        </div>

        {/* Stacked quotes */}
        <div className="space-y-20">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal-up"
              style={{
                borderLeft: `2px solid ${C.gold}`,
                paddingLeft: '2rem',
              }}
            >
              {/* Large quotation mark */}
              <span
                className="block text-7xl md:text-8xl leading-none font-serif mb-4"
                style={{
                  color: C.gold,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  opacity: 0.6,
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="text-xl md:text-2xl font-light leading-relaxed mb-8"
                style={{
                  color: C.charcoal,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div>
                <p
                  className="text-sm font-medium uppercase tracking-[0.15em] mb-1"
                  style={{ color: C.charcoal }}
                >
                  {t.name}
                </p>
                <p className="text-xs tracking-wide" style={{ color: C.gold }}>
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 7: Consultation booking ─────────────────────────────────────────

function ConsultationBooking() {
  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 px-6 md:px-16 lg:px-24 grain"
      style={{ background: C.charcoalDeep }}
    >
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 48, height: 1, background: C.gold }} />
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: C.gold }}>
                Private Consultation
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light mb-6"
              style={{ color: C.offWhite, fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Book a Private<br />Consultation
            </h2>

            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(249,247,244,0.55)' }}>
              Whether you are acquiring a flagship residence, divesting a portfolio, or seeking
              a prime London rental, our directors are available for a private consultation at your
              convenience — in Berkeley Square or by secure video call.
            </p>

            {/* Gold line separator */}
            <div style={{ width: 80, height: 1, background: C.goldMuted }} />
          </div>

          {/* Right widget */}
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              showGuestCount={false}
              accentColor={C.gold}
              vertical="property-luxury"
              socialProof={{ count: 47, label: 'consultations booked this month' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

const propertyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mayfair & Partners',
  description: 'Ultra-Prime Real Estate Since 1987. Discreet sales, lettings, and property management for prime central London.',
  telephone: '+44 20 7493 8000',
  email: 'prime@mayfairandpartners.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '40 Berkeley Square',
    addressLocality: 'London',
    postalCode: 'W1J 5AL',
    addressCountry: 'GB',
  },
}

const propertyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    { '@type': 'Question', name: 'What types of properties does Mayfair & Partners handle?', acceptedAnswer: { '@type': 'Answer', text: 'We specialise in prime and super-prime residential property across Mayfair, Belgravia, Knightsbridge, and Chelsea — sales, lettings, and investment portfolios above £2m.' } },
    { '@type': 'Question', name: 'Do you handle off-market transactions?', acceptedAnswer: { '@type': 'Answer', text: 'Over 60% of our transactions never reach a public portal. Our buyer network of 3,200+ qualified UHNWI ensures discreet, competitive outcomes.' } },
    { '@type': 'Question', name: 'Do you work with international clients?', acceptedAnswer: { '@type': 'Answer', text: '70% of our clients are international. We speak Mandarin, Arabic, French, Italian and Russian in-house, bridging global capital with London property.' } },
    { '@type': 'Question', name: 'How do I book a private consultation?', acceptedAnswer: { '@type': 'Answer', text: 'Our directors are available for a private consultation at your convenience — in Berkeley Square or by secure video call. Use the booking form or contact us directly.' } },
  ],
}

export default function PropertyLuxuryDemo() {
  return (
    <div
      style={{
        '--color-primary': C.charcoal,
        '--color-primaryHover': C.charcoalDeep,
        '--color-secondary': C.cream,
        '--color-accent': C.gold,
        '--color-background': C.offWhite,
        '--color-bg': C.offWhite,
        '--color-surface': '#f5f2ec',
        '--color-text': C.charcoal,
        '--color-text-muted': C.textMuted,
        '--color-border': '#e5ddd0',
        '--font-heading': 'Georgia, "Times New Roman", serif',
      } as React.CSSProperties}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyFaqJsonLd) }} />
      {/* Scroll progress */}
      <div className="scroll-progress" />

      {/* 1. Hero — Cinematic */}
      <HeroCinematic />

      {/* 2. Stats strip */}
      <StatsStrip />

      {/* 3. Featured properties — Staggered */}
      <FeaturedProperties />

      {/* 4. About — Split screen */}
      <AboutSplit />

      {/* 5. Services — Bento grid */}
      <ServicesBento />

      {/* 6. Testimonials — Large stacked quotes */}
      <TestimonialsStacked />

      {/* 7. Consultation booking */}
      <ConsultationBooking />

      {/* 8. Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442074938000"
        message="Good day. I would like to arrange a private consultation regarding prime London property."
      />
    </div>
  )
}
