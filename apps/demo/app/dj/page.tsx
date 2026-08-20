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
  black: '#050505',
  darkAlt: '#0a0a0a',
  dark2: '#0f0f0f',
  cyan: '#22d3ee',
  cyanDark: '#0891b2',
  cyanGlow: '#67e8f9',
  magenta: '#e879f9',
  magentaDark: '#c026d3',
  blue: '#3b82f6',
  blueGlow: '#60a5fa',
  white: '#ffffff',
  muted: '#6b7280',
  mutedLight: '#9ca3af',
  border: '#1a1a1a',
} as const

const S = {
  page: { backgroundColor: C.black, color: C.white } as React.CSSProperties,
  sectionBlack: { backgroundColor: C.black } as React.CSSProperties,
  sectionDark: { backgroundColor: C.darkAlt } as React.CSSProperties,
  sectionDark2: { backgroundColor: C.dark2 } as React.CSSProperties,
  cyan: { color: C.cyan } as React.CSSProperties,
  magenta: { color: C.magenta } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  mutedLight: { color: C.mutedLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'DJ NEXUS',
  description: 'Professional DJ for clubs, weddings, corporate events and festivals in London',
  url: 'https://djnexus.example.com',
  locale: 'en',
  vertical: 'djos',
  theme: 'neon',
  branding: { primaryColor: C.cyan, accentColor: C.magenta },
  contact: {
    phone: '+44 7700 900123',
    email: 'book@djnexus.com',
    whatsapp: '+447700900123',
    address: 'London, UK (available UK-wide + international)',
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  social: {
    instagram: 'djnexuslondon',
    facebook: 'https://facebook.com/djnexuslondon',
  },
  seo: {
    title: 'DJ NEXUS | Club, Wedding & Event DJ London',
    description: 'Professional DJ available for clubs, weddings, corporate events and festivals. House, R&B, Latin and custom sets.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const djServices = [
  { name: 'Club Night', price: '£500', desc: 'Resident and guest sets for clubs, bars and late-night venues. 3–6 hour sets. Any genre.', color: C.cyan, icon: '🎧' },
  { name: 'Wedding DJ', price: '£800', desc: 'Ceremony music, cocktail hour, wedding breakfast and reception. Bespoke playlist consultation included.', color: C.magenta, icon: '💒' },
  { name: 'Corporate Events', price: '£600', desc: 'Award evenings, product launches, summer parties and Christmas events. Professional, polished.', color: C.blue, icon: '🏢' },
  { name: 'Festival Set', price: '£1,500', desc: '45–90 minute headline sets for festivals, outdoor events and large venues.', color: C.magenta, icon: '🎪' },
  { name: 'Live Remix', price: '£2,000', desc: 'Live remixing with a vocalist or live instrumentalist. A unique, unforgettable hybrid experience.', color: C.cyan, icon: '🎹' },
]

const musicStyles = [
  { genre: 'House', sub: 'Deep, Tech, Melodic, Progressive', color: C.cyan },
  { genre: 'R&B', sub: 'Classic, Neo-Soul, Contemporary', color: C.magenta },
  { genre: 'Hip Hop', sub: 'Old School, Trap, Afrobeats', color: C.blue },
  { genre: '80s & 90s', sub: 'Pop, Disco, Classic Anthems', color: C.magenta },
  { genre: 'Latin', sub: 'Reggaeton, Salsa, Baile Funk', color: C.cyan },
  { genre: 'Custom', sub: 'Your playlist, your vision, our expertise', color: C.blue },
]

const gearItems = [
  { name: 'Pioneer CDJ-3000s', desc: 'Industry-standard club decks. Used at every major club worldwide.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop' },
  { name: 'Allen & Heath Xone:96', desc: 'Analogue 4-channel club mixer with legendary sound quality.', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop' },
  { name: 'L-Acoustics KARA II', desc: 'Professional line-array PA system for 50–1,000 person venues.', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop' },
  { name: 'Pioneer RMX-1000', desc: 'Performance FX unit for live remix sessions and dynamic sets.', image: 'https://images.unsplash.com/photo-1571327073757-71d13c7ca935?w=600&h=400&fit=crop' },
]

const upcomingGigs = [
  { venue: 'Fabric London', date: 'August 15, 2026', time: '23:00–03:00', type: 'Club', tickets: true },
  { venue: 'Glasshouse Private Members', date: 'August 23, 2026', time: '20:00–01:00', type: 'Private', tickets: false },
  { venue: 'Lovebox Festival', date: 'September 5, 2026', time: '17:00–18:30', type: 'Festival', tickets: true },
  { venue: 'The Ned Hotel', date: 'September 18, 2026', time: '19:00–23:00', type: 'Corporate', tickets: false },
  { venue: 'Corsica Studios', date: 'October 1, 2026', time: '22:00–04:00', type: 'Club', tickets: true },
]

const reviews: Review[] = [
  { id: '1', author: 'Elena V.', rating: 5, text: "NEXUS absolutely destroyed it at Fabric. Reading the room perfectly, peak-time energy when it needed to hit, breathing space when it needed it. Best set I've seen this year.", date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Tom & Sophie R.', rating: 5, text: 'We were nervous about having a DJ at our wedding but NEXUS made it effortless. Every single transition, every song choice — flawless. Our guests danced all night.', date: '2026-07-26', source: 'google', verified: true },
  { id: '3', author: 'Marcus C.', rating: 5, text: "The live remix set with our sax player was the highlight of the entire product launch. Three people came up asking for the DJ's contact before the night was over.", date: '2026-08-02', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Aisha M.', rating: 5, text: "Lovebox 2025 — NEXUS had the tent rammed in 10 minutes. Latin into house into drum & bass, all seamless. Already booked them for next year's event.", date: '2026-08-05', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How far in advance should I book?', answer: 'We typically book 4–8 weeks in advance for club nights and corporate events, and 3–6 months for weddings. Summer dates and New Year\'s Eve fill up quickly — contact us as early as possible for prime dates.' },
  { question: 'Do you bring your own equipment?', answer: 'Yes. We carry full professional equipment including CDJs, mixer, controller and backup systems. For larger events we can also supply PA, subwoofers, lighting rigs and LED panels. Venue rider available on request.' },
  { question: 'Can I request specific songs or genres?', answer: 'Absolutely. For weddings and private events we offer a full playlist consultation including first dance, special songs and a "do not play" list. For club nights we tailor the set to the venue\'s sound and crowd profile.' },
  { question: 'Do you travel outside London?', answer: 'Yes. We regularly perform across the UK and internationally. Travel and accommodation costs are added for events more than 50 miles from Central London. Contact us for a quote.' },
  { question: 'What happens if there is a technical failure?', answer: 'We carry full backup equipment to every event — spare laptop, spare controller, spare cables and power solutions. In 200+ events we have never had an unresolved technical issue. We are prepared for everything.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: 'Evening (18:00–23:00)', available: true, spotsLeft: 3 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: 'Late Night (22:00–03:00)', available: true, spotsLeft: 2 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: 'Afternoon (14:00–18:00)', available: true, spotsLeft: 4 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: 'All Day (12:00–23:00)', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DJ NEXUS',
  description: 'Professional DJ based in London available for clubs, weddings, corporate events and festivals.',
  url: 'https://djnexus.example.com',
  telephone: '+44 7700 900123',
  email: 'book@djnexus.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  priceRange: '£££',
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
// EQUALIZER BARS COMPONENT
// ─────────────────────────────────────────────
function EqualizerBars({ color, barCount = 15 }: { color: string; barCount?: number }) {
  const heights = [40, 70, 55, 85, 60, 95, 45, 80, 65, 90, 50, 75, 40, 85, 60]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 100 }}>
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: heights[i % heights.length],
            backgroundColor: color,
            borderRadius: '2px 2px 0 0',
            animation: `eq-bar-${i % 5} ${0.4 + (i % 5) * 0.15}s ${i * 0.04}s ease-in-out infinite alternate`,
            boxShadow: `0 0 8px ${color}88`,
          }}
        />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.black}ee`, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${C.cyan}33` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-black tracking-[0.3em] text-base" style={{ color: C.cyan, textShadow: `0 0 20px ${C.cyan}88` }}>
          NEXUS
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Gigs', 'Gear', 'Book'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold transition-all duration-200"
              style={{ color: C.muted }}
              onMouseEnter={(e) => { e.currentTarget.style.color = C.cyan; e.currentTarget.style.textShadow = `0 0 12px ${C.cyan}` }}
              onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; e.currentTarget.style.textShadow = 'none' }}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="px-5 py-2.5 text-sm font-black transition-all duration-300 border"
            style={{ borderColor: C.cyan, color: C.cyan, textShadow: `0 0 12px ${C.cyan}` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.cyan; e.currentTarget.style.color = C.black; e.currentTarget.style.textShadow = 'none' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.cyan; e.currentTarget.style.textShadow = `0 0 12px ${C.cyan}` }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function DJOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes eq-bar-0 { from { height: 20px; } to { height: 80px; } }
        @keyframes eq-bar-1 { from { height: 40px; } to { height: 95px; } }
        @keyframes eq-bar-2 { from { height: 15px; } to { height: 70px; } }
        @keyframes eq-bar-3 { from { height: 50px; } to { height: 100px; } }
        @keyframes eq-bar-4 { from { height: 25px; } to { height: 85px; } }
        @keyframes vinyl-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes neon-flicker {
          0%, 96%, 100% { opacity: 1; }
          97% { opacity: 0.4; }
          98% { opacity: 0.9; }
          99% { opacity: 0.3; }
        }
        @keyframes hero-slam {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color, #22d3ee); }
          50% { box-shadow: 0 0 60px var(--glow-color, #22d3ee), 0 0 120px var(--glow-color, #22d3ee)44; }
        }
        .hero-s1 { animation: hero-slam 0.7s 0s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-s2 { animation: hero-slam 0.7s 0.12s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-s3 { animation: hero-slam 0.7s 0.24s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-s4 { animation: hero-slam 0.7s 0.38s cubic-bezier(0.16,1,0.3,1) both; }
        .neon-text-cyan {
          color: ${C.cyan};
          text-shadow: 0 0 10px ${C.cyan}, 0 0 30px ${C.cyan}88, 0 0 60px ${C.cyan}44;
          animation: neon-flicker 8s infinite;
        }
        .neon-text-magenta {
          color: ${C.magenta};
          text-shadow: 0 0 10px ${C.magenta}, 0 0 30px ${C.magenta}88, 0 0 60px ${C.magenta}44;
        }
        .service-card-dj:hover { transform: translateY(-4px) scale(1.01); }
        .service-card-dj { transition: transform 0.3s ease; }
        .gig-row:hover { background-color: rgba(34,211,238,0.06) !important; }
        .gig-row { transition: background-color 0.2s ease; }
        .genre-badge:hover { transform: scale(1.05); box-shadow: 0 0 24px var(--badge-glow); }
        .genre-badge { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .mix-player { cursor: pointer; }
        .mix-player:hover { border-color: ${C.cyan} !important; }
        .mix-player { transition: border-color 0.2s ease; }
      `}</style>

      <div className="scroll-progress" style={{ background: `linear-gradient(90deg, ${C.cyan}, ${C.magenta})` }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Neon dark + equalizer + vinyl
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden pt-20 pb-0"
        style={{ backgroundColor: C.black }}
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${C.cyan}04 2px, ${C.cyan}04 4px)`,
          }}
        />

        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(${C.cyan}08 1px, transparent 1px),
              linear-gradient(90deg, ${C.cyan}08 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Neon glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position: 'absolute', top: '20%', left: '60%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${C.cyan}15, transparent 70%)`, filter: 'blur(40px)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '20%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${C.magenta}12, transparent 70%)`, filter: 'blur(40px)' }} />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 w-full pb-16 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-end">
          {/* Left: text */}
          <div>
            {/* Event badges */}
            <div className="hero-s1 flex flex-wrap gap-2 mb-10">
              {['Club', 'Wedding', 'Corporate', 'Festival'].map((type, i) => (
                <span
                  key={type}
                  className="px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] border"
                  style={{
                    borderColor: i % 2 === 0 ? `${C.cyan}66` : `${C.magenta}66`,
                    color: i % 2 === 0 ? C.cyan : C.magenta,
                    backgroundColor: i % 2 === 0 ? `${C.cyan}0a` : `${C.magenta}0a`,
                    textShadow: `0 0 10px ${i % 2 === 0 ? C.cyan : C.magenta}66`,
                  }}
                >
                  {type}
                </span>
              ))}
            </div>

            <h1 className="hero-s2 mb-8">
              <span
                className="block text-6xl md:text-8xl font-black tracking-tight leading-none"
                style={{ color: C.white, letterSpacing: '-0.02em' }}
              >
                Your Night.
              </span>
              <span
                className="neon-text-cyan block text-6xl md:text-8xl font-black tracking-tight leading-none"
              >
                Your Sound.
              </span>
            </h1>

            <p className="hero-s3 text-base font-light leading-relaxed max-w-lg mb-10" style={{ color: C.muted }}>
              200+ events. Fabric, Corsica, Lovebox, Glastonbury. Club DJ, wedding specialist, corporate performer. If it needs music, NEXUS makes it unforgettable.
            </p>

            <div className="hero-s4 flex flex-wrap gap-4 mb-16">
              <a
                href="#book"
                className="px-8 py-4 text-sm font-black tracking-[0.1em] uppercase border transition-all duration-300"
                style={{
                  borderColor: C.cyan,
                  color: C.black,
                  backgroundColor: C.cyan,
                  boxShadow: `0 0 30px ${C.cyan}55`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 60px ${C.cyan}88` }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 30px ${C.cyan}55` }}
              >
                Book a Date
              </a>
              <a
                href="#services"
                className="px-8 py-4 text-sm font-black tracking-[0.1em] uppercase border transition-all duration-300"
                style={{ borderColor: `${C.white}22`, color: C.white }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.magenta}66`; e.currentTarget.style.color = C.magenta }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.white}22`; e.currentTarget.style.color = C.white }}
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="hero-s4 flex gap-10">
              {[['200+', 'Events'], ['10+', 'Years'], ['50K+', 'Dancefloor hrs']].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black neon-text-cyan">{val}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: C.muted }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: spinning vinyl */}
          <div className="hidden md:flex items-center justify-center pb-8">
            <div className="relative" style={{ width: 300, height: 300 }}>
              {/* Vinyl record outer */}
              <div
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 50% 50%,
                      ${C.black} 0%,
                      ${C.black} 15%,
                      #1a1a1a 15.5%,
                      ${C.black} 16%,
                      ${C.black} 25%,
                      #222 25.5%,
                      ${C.black} 26%,
                      ${C.black} 35%,
                      #1a1a1a 35.5%,
                      ${C.black} 36%,
                      ${C.black} 45%,
                      #222 45.5%,
                      ${C.black} 46%,
                      ${C.black} 55%,
                      #1a1a1a 55.5%,
                      ${C.black} 56%,
                      ${C.black} 65%,
                      #222 65.5%,
                      ${C.black} 66%,
                      ${C.black} 75%,
                      #1a1a1a 75.5%,
                      ${C.black} 76%
                    )
                  `,
                  animation: 'vinyl-spin 3s linear infinite',
                  boxShadow: `0 0 0 2px #333, 0 0 40px ${C.cyan}33, 0 0 80px ${C.magenta}22`,
                }}
              >
                {/* Center label */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    background: `conic-gradient(from 0deg, ${C.cyan}, ${C.magenta}, ${C.blue}, ${C.cyan})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      backgroundColor: C.black,
                    }}
                  />
                </div>
              </div>

              {/* Neon ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${C.cyan}22, 0 0 60px ${C.cyan}33`, borderRadius: '50%', border: `1px solid ${C.cyan}33` }}
              />
            </div>
          </div>
        </div>

        {/* Equalizer bars at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden flex items-end">
          <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%', gap: 0, height: 100 }}>
            {Array.from({ length: 80 }).map((_, i) => {
              const baseHeight = 20 + (Math.sin(i * 0.4) * 30 + 30)
              const color = i % 3 === 0 ? C.cyan : i % 3 === 1 ? C.magenta : C.blue
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: baseHeight,
                    backgroundColor: color,
                    opacity: 0.6,
                    animation: `eq-bar-${i % 5} ${0.35 + (i % 7) * 0.08}s ${i * 0.02}s ease-in-out infinite alternate`,
                  }}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3 neon-text-cyan">What I Do</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {djServices.map((svc, i) => (
              <div
                key={svc.name}
                className="service-card-dj reveal-up rounded-xl p-8 border cursor-pointer"
                style={{
                  animationDelay: `${i * 0.09}s`,
                  borderColor: `${svc.color}33`,
                  backgroundColor: `${svc.color}06`,
                  boxShadow: `inset 0 0 40px ${svc.color}06`,
                }}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-xl font-black mb-2" style={{ color: C.white }}>{svc.name}</h3>
                <p className="text-3xl font-black mb-3" style={{ color: svc.color, textShadow: `0 0 20px ${svc.color}66` }}>{svc.price}</p>
                <p className="text-sm leading-relaxed font-light" style={{ color: C.muted }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MUSIC STYLES
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionBlack}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: C.magenta, textShadow: `0 0 12px ${C.magenta}` }}>Genres</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Music Styles</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 stagger-children">
            {musicStyles.map((style, i) => (
              <div
                key={style.genre}
                className="genre-badge reveal-up rounded-xl p-6 border text-center cursor-pointer"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  borderColor: `${style.color}33`,
                  backgroundColor: `${style.color}08`,
                  ['--badge-glow' as string]: `${style.color}44`,
                }}
              >
                <h3
                  className="text-2xl font-black mb-1"
                  style={{ color: style.color, textShadow: `0 0 20px ${style.color}66` }}
                >
                  {style.genre}
                </h3>
                <p className="text-xs font-light" style={{ color: C.muted }}>{style.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GEAR
          ═══════════════════════════════════════ */}
      <section id="gear" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark2}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3 neon-text-cyan">The Rig</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Setup &amp; Gear</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {gearItems.map((item, i) => (
              <div
                key={item.name}
                className="reveal-up rounded-xl overflow-hidden border cursor-pointer group"
                style={{ animationDelay: `${i * 0.08}s`, borderColor: `${C.cyan}22` }}
              >
                <div className="h-40 overflow-hidden">
                  <Image src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                    style={{ filter: 'brightness(0.6) saturate(0.7)' }} width={1200} height={800} />
                </div>
                <div className="p-4" style={{ backgroundColor: `${C.cyan}08` }}>
                  <h3 className="font-black text-sm mb-1" style={{ color: C.cyan }}>{item.name}</h3>
                  <p className="text-xs leading-relaxed font-light" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          UPCOMING GIGS
          ═══════════════════════════════════════ */}
      <section id="gigs" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionBlack}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: C.magenta, textShadow: `0 0 12px ${C.magenta}` }}>Live</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Upcoming Gigs</h2>
          </div>

          <div className="reveal-up space-y-2">
            {upcomingGigs.map((gig, i) => (
              <div
                key={i}
                className="gig-row flex items-center justify-between p-5 rounded-xl border"
                style={{ borderColor: `${C.white}0f`, backgroundColor: `${C.white}04` }}
              >
                <div className="flex items-center gap-6">
                  <span
                    className="text-xs font-black uppercase tracking-wider px-2 py-1 rounded border"
                    style={{
                      borderColor: gig.type === 'Club' ? `${C.cyan}44` : gig.type === 'Festival' ? `${C.magenta}44` : `${C.blue}44`,
                      color: gig.type === 'Club' ? C.cyan : gig.type === 'Festival' ? C.magenta : C.blue,
                      backgroundColor: gig.type === 'Club' ? `${C.cyan}0a` : gig.type === 'Festival' ? `${C.magenta}0a` : `${C.blue}0a`,
                    }}
                  >
                    {gig.type}
                  </span>
                  <div>
                    <p className="font-black text-base" style={{ color: C.white }}>{gig.venue}</p>
                    <p className="text-xs font-light" style={{ color: C.muted }}>{gig.date} · {gig.time}</p>
                  </div>
                </div>
                {gig.tickets && (
                  <a
                    href="#"
                    className="text-xs font-black uppercase tracking-wider px-4 py-2 border transition-all duration-200"
                    style={{ borderColor: `${C.cyan}44`, color: C.cyan }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.cyan}18` }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    Tickets
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MIX PREVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3 neon-text-cyan">Listen</p>
            <h2 className="text-4xl md:text-6xl font-black" style={{ color: C.white }}>Mix Previews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children">
            {[
              { title: 'Deep House Selection Vol.3', duration: '58:32', plays: '12.4K', color: C.cyan },
              { title: 'R&B & Neo-Soul Mix 2026', duration: '45:17', plays: '8.9K', color: C.magenta },
              { title: 'Wedding Reception Classics', duration: '63:44', plays: '21.2K', color: C.blue },
              { title: 'Festival Sunrise Set', duration: '90:00', plays: '31.7K', color: C.cyan },
            ].map((mix, i) => (
              <div
                key={mix.title}
                className="mix-player reveal-up rounded-xl p-6 border"
                style={{ animationDelay: `${i * 0.1}s`, borderColor: `${mix.color}33`, backgroundColor: `${mix.color}08` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-black text-sm mb-1" style={{ color: C.white }}>{mix.title}</h3>
                    <p className="text-xs" style={{ color: C.muted }}>{mix.duration} · {mix.plays} plays</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: mix.color, boxShadow: `0 0 20px ${mix.color}55` }}
                  >
                    <span style={{ color: C.black, fontSize: 18, marginLeft: 2 }}>▶</span>
                  </div>
                </div>
                {/* Fake waveform */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 32 }}>
                  {Array.from({ length: 60 }).map((_, j) => (
                    <div
                      key={j}
                      style={{
                        flex: 1,
                        height: `${20 + Math.sin(j * 0.5) * 40 + Math.random() * 20}%`,
                        backgroundColor: j < 22 ? mix.color : `${mix.color}33`,
                        borderRadius: 1,
                        minHeight: 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionBlack}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: C.magenta, textShadow: `0 0 12px ${C.magenta}` }}>The Word</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>What People Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="book" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4 neon-text-cyan">Ready?</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: C.white }}>Book a Date</h2>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: C.muted }}>
              Fill in the form and I will respond within 4 hours with availability and a quote. Dates fill fast — especially weekends.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Availability', detail: 'Weekends, weekdays, bank holidays — contact to check.' },
                { title: 'Lead Time', detail: 'Minimum 2 weeks for standard bookings. Rush bookings considered.' },
                { title: 'Response', detail: 'WhatsApp or email reply within 4 hours guaranteed.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div
                    className="w-1 min-h-[36px] rounded-full flex-shrink-0"
                    style={{ background: `linear-gradient(to bottom, ${C.cyan}, ${C.magenta})` }}
                  />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide mb-0.5" style={{ color: C.cyan }}>{info.title}</p>
                    <p className="text-sm font-light" style={{ color: C.muted }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live equalizer decoration */}
            <div className="mt-10">
              <EqualizerBars color={C.cyan} barCount={15} />
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 200, label: 'events performed' }}
              vertical="djos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionBlack}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-3" style={{ color: C.magenta, textShadow: `0 0 12px ${C.magenta}` }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: C.white }}>Questions?</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="DJOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+447700900123" message="Hi! I'd like to book DJ NEXUS for my event" vertical="djos" />
    </div>
  )
}
