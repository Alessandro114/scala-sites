'use client'
import Image from 'next/image';

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem, BookingSlot } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  deep: '#003f5c',
  ocean: '#0077b6',
  turquoise: '#00b4d8',
  aqua: '#90e0ef',
  white: '#ffffff',
  offWhite: '#f0f9ff',
  slate: '#334155',
  slateDark: '#1e293b',
  slateLight: '#64748b',
  muted: '#94a3b8',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'AquaClear Pools',
  description: 'Crystal clear pools — expertly maintained, every day',
  url: 'https://aquaclearpools.example.com',
  locale: 'en',
  vertical: 'poolos',
  theme: 'modern',
  branding: { primaryColor: C.ocean, accentColor: C.turquoise },
  contact: {
    phone: '+44 20 7946 0112',
    email: 'info@aquaclearpools.com',
    whatsapp: '+442079460112',
    address: '18 Riverside Drive, Richmond, London TW9 1EH',
    coordinates: { lat: 51.4613, lng: -0.3037 },
  },
  social: {
    instagram: 'aquaclearpools',
    facebook: 'https://facebook.com/aquaclearpools',
  },
  seo: {
    title: 'AquaClear Pools | Professional Pool Cleaning & Maintenance Services',
    description: 'Crystal clear pools every day. Expert pool cleaning, chemical balancing, equipment repair and renovation.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    icon: '◈',
    name: 'Pool Cleaning',
    desc: 'Full vacuuming, wall brushing, skimming and filter backwash. Leave it spotless every visit.',
    price: 'From £45',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop',
  },
  {
    icon: '⬡',
    name: 'Chemical Balancing',
    desc: 'Precise pH, chlorine, alkalinity and calcium hardness testing and correction.',
    price: 'Included in plans',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
  {
    icon: '◉',
    name: 'Equipment Repair',
    desc: 'Pumps, filters, heaters, chlorinators — we diagnose and fix all major brands.',
    price: 'From £120',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    icon: '◈',
    name: 'Pool Renovation',
    desc: 'Re-tiling, resurfacing, LED lighting upgrades and full pool refurbishments.',
    price: 'From £2,500',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
  },
  {
    icon: '◎',
    name: 'Hot Tub Service',
    desc: 'Water treatment, jet cleaning, cover maintenance and full sanitisation.',
    price: 'From £55',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
  },
  {
    icon: '⬟',
    name: 'Pool Covers',
    desc: 'Supply, fitting and servicing of thermal, safety and automatic pool covers.',
    price: 'From £350',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
]

const plans = [
  {
    name: 'Weekly',
    price: '£45',
    period: '/visit',
    highlight: true,
    features: ['Weekly cleaning visit', 'Chemical balancing', 'Filter inspection', 'Priority callout', 'Monthly water report'],
  },
  {
    name: 'Bi-Weekly',
    price: '£30',
    period: '/visit',
    highlight: false,
    features: ['Fortnightly cleaning', 'Chemical testing', 'Filter check', 'Standard callout', 'Seasonal report'],
  },
  {
    name: 'Seasonal',
    price: '£85',
    period: '/visit',
    highlight: false,
    features: ['Opening & closing', 'Full chemical reset', 'Equipment health check', 'Winterisation service', 'Annual report'],
  },
]

const portfolio = [
  { src: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop', label: 'Richmond Infinity Pool' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop', label: 'Kensington Rooftop Pool' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop', label: 'Surrey Spa Complex' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', label: 'Chelsea Garden Pool' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', label: 'Hampstead Pool Renovation' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', label: 'Mayfair Hotel Spa' },
]

const reviews: Review[] = [
  { id: '1', author: 'James H.', rating: 5, text: 'AquaClear transformed our neglected pool into something stunning. The weekly service is impeccable — we never have to think about maintenance now.', date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'Sarah M.', rating: 5, text: 'Called them on a Monday with a green pool crisis. By Wednesday it was crystal clear. Unbelievably fast and professional.', date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Robert A.', rating: 5, text: 'The chemical balancing is so precise — pH always spot on. My kids swim every day without irritated eyes. Cannot recommend enough.', date: '2026-08-01', source: 'google', verified: true },
  { id: '4', author: 'Catherine L.', rating: 5, text: 'Had our 20-year-old pool completely renovated. The result is breathtaking. New tiling, LED lighting, auto cover. Worth every penny.', date: '2026-08-03', source: 'tripadvisor', verified: true },
  { id: '5', author: 'David T.', rating: 4, text: 'Reliable, knowledgeable team. They spotted a pump issue during a routine visit that could have caused expensive damage. Saved us thousands.', date: '2026-07-15', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How often should I have my pool professionally cleaned?', answer: 'We recommend weekly cleaning for pools in regular use, especially during summer. This keeps water chemistry balanced, prevents algae build-up and ensures your equipment runs efficiently.' },
  { question: 'What chemicals do you use and are they safe?', answer: 'We use professional-grade, UK-approved pool chemicals. All are safe when properly dosed — which is exactly what our technicians ensure. We test and document every chemical level on every visit.' },
  { question: 'Do you cover emergency pool repairs?', answer: 'Yes! We offer same-day emergency callouts for urgent issues like pump failures, leaks or severe water quality problems. Call us or WhatsApp for a rapid response.' },
  { question: 'Can you service both indoor and outdoor pools?', answer: 'Absolutely. We service residential and commercial pools of all types — outdoor, indoor, above-ground, in-ground, heated, and natural swimming ponds. Hot tubs and swim spas too.' },
  { question: 'What areas do you cover?', answer: 'We cover all London boroughs plus Surrey, Berkshire and Hertfordshire. If you\'re unsure whether we reach you, just send us a WhatsApp and we\'ll confirm within minutes.' },
  { question: 'Do I need to be home during the service visit?', answer: 'Not necessarily. Many clients give us gate/access codes and we complete the visit while they\'re at work. You\'ll receive a digital service report with photos after every visit.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '08:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '10:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '12:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 1 },
  { id: '5', date: today, time: '16:00', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.slateDark, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.slateDark } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.deep } as React.CSSProperties,
  sectionSlate: { backgroundColor: C.slate } as React.CSSProperties,
  ocean: { color: C.ocean } as React.CSSProperties,
  turquoise: { color: C.turquoise } as React.CSSProperties,
  aqua: { color: C.aqua } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AquaClear Pools',
  description: 'Professional pool cleaning, chemical balancing, equipment repair and renovation services in London and Surrey.',
  url: 'https://aquaclearpools.example.com',
  telephone: '+44 20 7946 0112',
  email: 'info@aquaclearpools.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Riverside Drive',
    addressLocality: 'Richmond, London',
    postalCode: 'TW9 1EH',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4613, longitude: -0.3037 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '16:00' },
  ],
  priceRange: '££',
  areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 51.5074, longitude: -0.1278 }, geoRadius: '50000' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark" style={{ borderBottom: `1px solid ${C.turquoise}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: `radial-gradient(circle at 40% 40%, ${C.aqua}, ${C.ocean})`,
              boxShadow: `0 0 16px ${C.turquoise}66`,
            }}
          />
          <span className="font-light tracking-[0.25em] text-sm uppercase" style={{ color: C.white }}>
            AquaClear
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Plans', 'Portfolio', 'Booking'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.turquoise, color: C.turquoise, borderRadius: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.turquoise
              e.currentTarget.style.color = C.slateDark
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.turquoise
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// WATER RIPPLE HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${C.deep} 0%, ${C.ocean} 45%, ${C.turquoise} 100%)` }}
    >
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes ripple2 {
          0% { transform: scale(0.3); opacity: 0.6; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        @keyframes ripple3 {
          0% { transform: scale(0.5); opacity: 0.4; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes float-temp {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes shimmer-pool {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .ripple-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(144,224,239,0.6);
          animation: ripple 4s ease-out infinite;
        }
        .ripple-ring:nth-child(2) { animation: ripple2 4s ease-out 1.3s infinite; }
        .ripple-ring:nth-child(3) { animation: ripple3 4s ease-out 2.6s infinite; }
        .temp-badge { animation: float-temp 3s ease-in-out infinite; }
        .pool-shimmer {
          background: linear-gradient(90deg, transparent, rgba(144,224,239,0.15), transparent);
          background-size: 200% 100%;
          animation: shimmer-pool 3s linear infinite;
        }
      `}</style>

      {/* Animated water surface overlay */}
      <div className="absolute inset-0 pool-shimmer pointer-events-none" />

      {/* Ripple rings — centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-64 h-64">
          <div className="ripple-ring" style={{ inset: '30%' }} />
          <div className="ripple-ring" style={{ inset: '25%' }} />
          <div className="ripple-ring" style={{ inset: '20%', borderColor: `rgba(0,180,216,0.4)` }} />
        </div>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,63,92,0.5) 0%, rgba(0,63,92,0.2) 50%, rgba(0,63,92,0.7) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto stagger-children">
        <p
          className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8"
          style={{ color: C.aqua }}
        >
          Professional Pool Services &middot; London &amp; Surrey
        </p>

        <h1 className="mb-8">
          {['Crystal Clear,', 'Every Day.'].map((line, i) => (
            <span
              key={line}
              className="reveal-clip-up block font-extralight leading-[0.9] tracking-tight"
              style={{
                color: C.white,
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                animationDelay: `${i * 0.2}s`,
                textShadow: `0 0 40px ${C.turquoise}44`,
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          className="reveal-up text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: `${C.white}cc`, animationDelay: '0.4s' }}
        >
          From routine cleaning to full pool renovation — our technicians keep your water
          pristine, your equipment running, and your family safe all year round.
        </p>

        {/* Stat badges strip */}
        <div
          className="reveal-up flex flex-wrap items-center justify-center gap-6 mb-12"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { val: '500+', label: 'Pools Maintained' },
            { val: '12 yrs', label: 'Experience' },
            { val: '4.9★', label: 'Google Rating' },
          ].map((stat) => (
            <div
              key={stat.val}
              className="text-center px-6 py-3"
              style={{
                background: `rgba(255,255,255,0.1)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${C.aqua}33`,
                borderRadius: 8,
                minWidth: 120,
              }}
            >
              <div className="text-2xl font-light" style={{ color: C.aqua }}>{stat.val}</div>
              <div className="text-xs tracking-wider uppercase" style={{ color: `${C.white}88` }}>{stat.label}</div>
            </div>
          ))}

          {/* Temperature indicator badge */}
          <div
            className="temp-badge px-6 py-3 flex items-center gap-3"
            style={{
              background: `rgba(0,180,216,0.2)`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${C.turquoise}55`,
              borderRadius: 8,
            }}
          >
            <div style={{ fontSize: 24 }}>🌡</div>
            <div>
              <div className="text-xl font-light" style={{ color: C.aqua }}>28°C</div>
              <div className="text-xs tracking-wider uppercase" style={{ color: `${C.white}88` }}>Ideal Temp</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal-up flex flex-wrap gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
          <a
            href="#booking"
            className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
            style={{ borderColor: C.aqua, color: C.aqua, borderRadius: 4 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.aqua
              e.currentTarget.style.color = C.deep
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.aqua
            }}
          >
            Book a Service
          </a>
          <a
            href="#services"
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
            style={{ color: `${C.white}aa` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${C.white}aa`)}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Pool dimension badge — bottom left */}
      <div
        className="absolute bottom-10 left-10 hidden md:block"
        style={{
          background: `rgba(0,63,92,0.8)`,
          backdropFilter: 'blur(12px)',
          border: `1px solid ${C.turquoise}44`,
          borderRadius: 8,
          padding: '12px 20px',
        }}
      >
        <div className="text-xs tracking-widest uppercase mb-1" style={{ color: C.muted }}>
          Pool Dimensions
        </div>
        <div className="text-sm font-light" style={{ color: C.aqua }}>
          All sizes 10m² — 500m²
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2">
        <div className="text-xs tracking-[0.3em] uppercase" style={{ color: `${C.white}55` }}>
          Scroll
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, ${C.turquoise}, transparent)`,
          }}
        />
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PoolServicePage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.turquoise }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          MARQUEE TICKER
          ═══════════════════════════════════════ */}
      <section className="relative py-5 overflow-hidden" style={{ backgroundColor: C.turquoise }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Pool Cleaning', 'Chemical Balancing', 'Equipment Repair', 'Pool Renovation', 'Hot Tub Service', 'Pool Covers', 'Same-Day Emergency', 'Water Testing'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: C.deep }}>
                    {item}
                  </span>
                  <span className="text-base" style={{ color: `${C.deep}66` }}>◈</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="relative py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>
              Complete Pool Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="reveal-up group relative overflow-hidden rounded-xl cursor-pointer"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.turquoise}22`,
                  transition: 'border-color 0.4s, transform 0.4s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${C.turquoise}66`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${C.turquoise}22`
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={svc.image}
                    alt={svc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.slateDark}, transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="text-2xl mb-3" style={{ color: C.turquoise }}>{svc.icon}</div>
                  <h3 className="text-lg font-light mb-2" style={S.white}>{svc.name}</h3>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.muted}>{svc.desc}</p>
                  <div
                    className="text-sm tracking-wider"
                    style={{ color: C.aqua }}
                  >
                    {svc.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAINTENANCE PLANS
          ═══════════════════════════════════════ */}
      <section id="plans" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={S.sectionDeep}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${C.turquoise}11, transparent 70%)` }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>Maintenance Plans</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>
              Choose Your Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className="reveal-up rounded-2xl p-8 relative"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: plan.highlight
                    ? `linear-gradient(135deg, ${C.ocean}, ${C.turquoise})`
                    : `rgba(255,255,255,0.06)`,
                  border: plan.highlight ? 'none' : `1px solid ${C.turquoise}22`,
                  boxShadow: plan.highlight ? `0 0 40px ${C.ocean}44` : 'none',
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase px-4 py-1"
                    style={{ background: C.aqua, color: C.deep, borderRadius: 20, fontWeight: 600 }}
                  >
                    Most Popular
                  </div>
                )}
                <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: plan.highlight ? C.deep : C.muted }}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-extralight" style={{ color: plan.highlight ? C.deep : C.white }}>
                    {plan.price}
                  </span>
                  <span className="text-sm mb-2" style={{ color: plan.highlight ? `${C.deep}aa` : C.muted }}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-light" style={{ color: plan.highlight ? C.deep : C.muted }}>
                      <span style={{ color: plan.highlight ? C.deep : C.turquoise }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="block text-center mt-8 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300"
                  style={{
                    background: plan.highlight ? `rgba(0,0,0,0.2)` : `${C.turquoise}22`,
                    color: plan.highlight ? C.deep : C.turquoise,
                    borderRadius: 6,
                    border: plan.highlight ? `1px solid ${C.deep}33` : `1px solid ${C.turquoise}44`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = plan.highlight ? `rgba(0,0,0,0.3)` : `${C.turquoise}44` }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = plan.highlight ? `rgba(0,0,0,0.2)` : `${C.turquoise}22` }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO GALLERY
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="relative py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>Our Work</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Pool Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {portfolio.map((img, i) => (
              <div
                key={i}
                className="reveal-up group relative overflow-hidden rounded-xl"
                style={{ height: 280, animationDelay: `${i * 0.07}s` }}
              >
                <Image src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to top, ${C.deep}dd, transparent)` }}
                >
                  <span className="text-sm tracking-[0.15em] uppercase font-light" style={{ color: C.white }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WATER TESTING CALLOUT
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={{ background: `linear-gradient(135deg, ${C.ocean}22, ${C.turquoise}11)`, borderTop: `1px solid ${C.turquoise}22`, borderBottom: `1px solid ${C.turquoise}22` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>Water Testing</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.white}>
              Precision Chemistry,<br />Every Visit
            </h2>
            <p className="text-base font-light leading-relaxed" style={S.muted}>
              We test 7 parameters on every visit: pH, free chlorine, combined chlorine, total alkalinity,
              calcium hardness, cyanuric acid, and total dissolved solids. You receive a digital water quality
              report after every service — no guesswork, no shortcuts.
            </p>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[
              { param: 'pH Level', ideal: '7.2 – 7.6', icon: '⬡' },
              { param: 'Free Chlorine', ideal: '1.0 – 3.0 ppm', icon: '◉' },
              { param: 'Alkalinity', ideal: '80 – 120 ppm', icon: '◈' },
              { param: 'Calcium Hardness', ideal: '200 – 400 ppm', icon: '◎' },
            ].map((p) => (
              <div
                key={p.param}
                className="p-5 rounded-xl"
                style={{ background: `rgba(255,255,255,0.05)`, border: `1px solid ${C.turquoise}22` }}
              >
                <div className="text-xl mb-2" style={{ color: C.turquoise }}>{p.icon}</div>
                <div className="text-sm font-light mb-1" style={{ color: C.white }}>{p.param}</div>
                <div className="text-xs" style={{ color: C.aqua }}>{p.ideal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EMERGENCY REPAIRS
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16 text-center" style={S.sectionDeep}>
        <div className="max-w-3xl mx-auto reveal-up">
          <div
            className="inline-flex items-center gap-3 mb-6 px-5 py-2 text-xs tracking-widest uppercase"
            style={{ background: `${C.turquoise}22`, color: C.aqua, borderRadius: 20, border: `1px solid ${C.turquoise}33` }}
          >
            <span>⚡</span> Emergency Response Available
          </div>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.white}>
            Pool Crisis? We&rsquo;re On It.
          </h2>
          <p className="text-base font-light mb-8" style={S.muted}>
            Same-day emergency callouts for pump failures, leaks, green water and equipment breakdowns.
            Call or WhatsApp us and we&rsquo;ll dispatch a technician within hours.
          </p>
          <a
            href="tel:+442079460112"
            className="inline-block border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.turquoise, color: C.turquoise, borderRadius: 4 }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.turquoise; e.currentTarget.style.color = C.deep }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.turquoise }}
          >
            Call Now: +44 20 7946 0112
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="relative py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionDeep}>
        <div className="blob absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none" style={{ backgroundColor: C.turquoise, filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>Book a Service</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Get Your<br />Free Quote
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Tell us about your pool and we&rsquo;ll provide a no-obligation quote within 2 hours.
              No call centres — speak directly with our senior technicians.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Service Hours', detail: 'Mon–Fri 07:00–18:00 | Sat 08:00–16:00' },
                { title: 'Coverage', detail: 'All London boroughs, Surrey, Berkshire, Hertfordshire' },
                { title: 'Response Time', detail: 'Emergency same-day | Standard 48h' },
                { title: 'Guarantee', detail: '100% satisfaction — if the water isn\'t perfect, we come back free' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.turquoise}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.turquoise}>{info.title}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 214, label: 'pools serviced this month' }}
              vertical="poolos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.turquoise}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="PoolOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460112" message="Hi! I'd like a quote for pool service" vertical="poolos" />

      <style>{`
        .image-reveal:hover > div[style*="clip-path"] {
          clip-path: inset(0 0 0 0) !important;
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  )
}
