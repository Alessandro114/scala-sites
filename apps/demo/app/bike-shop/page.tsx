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
  charcoal: '#1f2937',
  charcoalDark: '#111827',
  charcoalLight: '#374151',
  red: '#dc2626',
  redDark: '#b91c1c',
  redLight: '#ef4444',
  lime: '#84cc16',
  limeDark: '#65a30d',
  white: '#ffffff',
  offWhite: '#f9fafb',
  muted: '#9ca3af',
  border: '#374151',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'VeloHub',
  description: 'Ride. Repair. Repeat. — London\'s premier bike shop',
  url: 'https://velohub.example.com',
  locale: 'en',
  vertical: 'bikeos',
  theme: 'modern',
  branding: { primaryColor: C.charcoal, accentColor: C.red },
  contact: {
    phone: '+44 20 7946 0211',
    email: 'info@velohub.com',
    whatsapp: '+442079460211',
    address: '88 Cycle Lane, Hackney, London E8 3QE',
    coordinates: { lat: 51.5372, lng: -0.0554 },
  },
  social: {
    instagram: 'velohublondon',
    facebook: 'https://facebook.com/velohublondon',
  },
  seo: {
    title: 'VeloHub Bike Shop | Road, MTB, E-Bikes & Workshop Services',
    description: 'Ride. Repair. Repeat. Premium bikes and expert workshop. London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const categories = [
  {
    name: 'Road Bikes',
    desc: 'Lightweight carbon and aluminium road bikes for training, sportives and everyday speed.',
    priceFrom: '£599',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
    brands: ['Trek', 'Giant', 'Cannondale'],
    accent: C.red,
  },
  {
    name: 'Mountain Bikes',
    desc: 'Hardtails and full-sus MTBs for trails, enduro and downhill riding.',
    priceFrom: '£449',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop',
    brands: ['Santa Cruz', 'Trek', 'Specialized'],
    accent: C.lime,
  },
  {
    name: 'E-Bikes',
    desc: 'Pedal-assist e-bikes for commuting, cargo and adventure. Up to 100km range.',
    priceFrom: '£1,299',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop',
    brands: ['Bosch', 'Shimano', 'Riese & Müller'],
    accent: '#4ade80',
  },
  {
    name: 'Urban / Commuter',
    desc: 'Practical, stylish and reliable bikes for the daily grind. Racks, lights and guards fitted.',
    priceFrom: '£349',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop',
    brands: ['Brompton', 'Bobbin', 'Mango'],
    accent: C.muted,
  },
  {
    name: 'Kids',
    desc: 'Balance bikes through to 26" wheel bikes. Fitted in-store for safety and comfort.',
    priceFrom: '£120',
    image: 'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&h=600&fit=crop',
    brands: ['Frog', 'Islabikes', 'Woom'],
    accent: C.lime,
  },
  {
    name: 'Accessories',
    desc: 'Helmets, locks, lights, clothing, nutrition and everything your ride needs.',
    priceFrom: '£5',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&h=600&fit=crop',
    brands: ['Giro', 'Kryptonite', 'Wahoo'],
    accent: C.redLight,
  },
]

const workshopServices = [
  { name: 'Safety Check', price: '£25', time: '30 min', desc: 'Brakes, gears, wheels, lights — a quick health check and basic adjustments.' },
  { name: 'Tune-Up Service', price: '£45', time: '2 hrs', desc: 'Gear & brake adjustment, wheel truing, drivetrain clean and lube, safety check.' },
  { name: 'Full Overhaul', price: '£150', time: '1 day', desc: 'Complete strip-down, deep clean, bearing service, fresh cables and full rebuild.' },
  { name: 'Wheel Build', price: '£80', time: '1 day', desc: 'Hand-built custom wheels. We source spokes and hubs to your spec.' },
]

const reviews: Review[] = [
  { id: '1', author: 'Alex T.', rating: 5, text: 'Bought a Trek Domane for sportive season. The team spent 90 minutes on a proper fit, adjusted everything, and explained every component. Totally different to any online experience.', date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Priya M.', rating: 5, text: 'Full overhaul on my 10-year-old MTB. It rides better than new. The workshop genuinely cares about the bikes they work on — you can feel it in the quality.', date: '2026-07-26', source: 'google', verified: true },
  { id: '3', author: 'Chris B.', rating: 5, text: 'Test rode 4 e-bikes before choosing my Riese & Müller. No sales pressure, just genuine knowledge and enthusiasm. Perfect service.', date: '2026-08-01', source: 'google', verified: true },
  { id: '4', author: 'Emma W.', rating: 5, text: 'Joined VeloClub through the shop. Sunday rides have been the highlight of my week for 6 months. Great community, all levels welcome.', date: '2026-07-14', source: 'google', verified: true },
  { id: '5', author: 'Sam K.', rating: 4, text: 'Kids bike fitted on a Saturday — super patient with my daughter, she was nervous. She chose the exact colour she wanted and rode out smiling. Mission accomplished.', date: '2026-07-30', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do you offer bike fitting?', answer: 'Yes. Professional bike fitting is available for road bikes and e-bikes. A basic fit is included with every new bike purchase. Advanced bike fitting with video analysis is £95 and takes 2 hours — it eliminates discomfort and maximises power transfer.' },
  { question: 'Can I test ride before buying?', answer: 'Absolutely. We encourage test rides on all bikes in our range. Road and MTB test rides are available daily — just bring valid ID and allow 30–60 minutes. For e-bikes, we have a dedicated test route and can arrange a longer loan period for serious buyers.' },
  { question: 'Do you buy or part-exchange used bikes?', answer: 'Yes. We accept quality used bikes in part-exchange against new purchases. We also buy outright if the bike and condition are right. Bring the bike in and we\'ll assess it on the spot.' },
  { question: 'How long does workshop service take?', answer: 'Safety check: same-day. Tune-up: 2–3 hours or same-day with a booking. Full overhaul: 1–2 working days. During busy periods (spring/summer) we recommend booking ahead. Urgent repairs are handled as priority — call us.' },
  { question: 'Do you offer cycling club rides?', answer: 'Yes! VeloClub meets every Sunday morning at 08:30 outside the shop. All levels welcome — we split into pace groups (Social, Intermediate, Fast). It\'s free for customers and £3/ride for non-customers. Follow us on Instagram for weekly routes.' },
  { question: 'Do you offer financing?', answer: 'Yes. 0% finance is available on bikes over £400 with Pay4Later — spread the cost over 6, 12 or 24 months with no interest. Subject to status. Available on all new bikes, including e-bikes.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '10:30', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '12:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 1 },
  { id: '5', date: today, time: '15:30', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.charcoalDark, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.charcoal } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.charcoalDark } as React.CSSProperties,
  red: { color: C.red } as React.CSSProperties,
  lime: { color: C.lime } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VeloHub Bike Shop',
  description: 'Premium bike shop and workshop in Hackney, London. Road, MTB, e-bikes, urban, kids and accessories.',
  url: 'https://velohub.example.com',
  telephone: '+44 20 7946 0211',
  email: 'info@velohub.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '88 Cycle Lane',
    addressLocality: 'Hackney, London',
    postalCode: 'E8 3QE',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5372, longitude: -0.0554 },
  priceRange: '££',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '17:00' },
  ],
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark" style={{ borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div style={{ position: 'relative', width: 32, height: 32 }}>
            <style>{`
              @keyframes cog-spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .cog-icon { animation: cog-spin-slow 8s linear infinite; transform-origin: center; }
            `}</style>
            <svg width="32" height="32" viewBox="0 0 32 32" className="cog-icon">
              <path
                d="M16 10 L18 6 L20 10 L24 9 L23 13 L27 14 L24 17 L27 20 L23 21 L24 25 L20 24 L18 28 L16 24 L12 25 L13 21 L9 20 L12 17 L9 14 L13 13 L12 9 Z"
                fill="none"
                stroke={C.red}
                strokeWidth="1.5"
              />
              <circle cx="16" cy="16" r="3.5" fill={C.red} />
            </svg>
          </div>
          <span className="font-black tracking-tight text-lg" style={{ color: C.white }}>Velo</span>
          <span className="font-light tracking-tight text-lg" style={{ color: C.red }}>Hub</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Shop', 'Workshop', 'Club', 'Contact'].map((item) => (
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
            href="#contact"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.red, color: C.red, borderRadius: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.red
              e.currentTarget.style.color = C.white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.red
            }}
          >
            Book Workshop
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.charcoalDark }}>
      <style>{`
        @keyframes cog-hero-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cog-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .hero-cog { animation: cog-hero-rotate 12s linear infinite; transform-origin: center; }
        .hero-cog-small { animation: cog-counter 8s linear infinite; transform-origin: center; }
        @keyframes slide-in-left {
          0% { transform: translateX(-10%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .hero-photo { animation: slide-in-left 1s ease-out forwards; }
      `}</style>

      {/* Diagonal split layout */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left: photo */}
        <div className="relative h-[45vh] md:h-full overflow-hidden hero-photo">
          <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1600&fit=crop&q=85"
            alt="Urban cyclist on VeloHub bike"
            className="w-full h-full object-cover" width={1200} height={800} />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to right, transparent 60%, ${C.charcoalDark})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, transparent 60%, ${C.charcoalDark}) ` }}
          />
          {/* Red diagonal accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom right, ${C.red}22, transparent)`,
              clipPath: 'polygon(0 0, 40% 0, 0 60%)',
            }}
          />
        </div>

        {/* Right: clean white-ish */}
        <div className="relative hidden md:block" style={{ backgroundColor: C.charcoalDark }} />
      </div>

      {/* Gear/cog decorative SVG — top right */}
      <div className="absolute top-16 right-16 hidden md:block opacity-20 pointer-events-none" style={{ width: 160, height: 160 }}>
        <svg viewBox="0 0 160 160" className="hero-cog" width="160" height="160">
          <path
            d="M80 30 L88 10 L96 30 L116 24 L112 44 L132 50 L116 64 L132 78 L112 84 L116 104 L96 98 L88 118 L80 98 L60 104 L64 84 L44 78 L60 64 L44 50 L64 44 L60 24 Z"
            fill="none"
            stroke={C.red}
            strokeWidth="3"
          />
          <circle cx="80" cy="80" r="22" fill="none" stroke={C.red} strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-20 hidden md:block opacity-10 pointer-events-none" style={{ width: 80, height: 80 }}>
        <svg viewBox="0 0 80 80" className="hero-cog-small" width="80" height="80">
          <path d="M40 15 L44 5 L48 15 L58 12 L56 22 L66 25 L58 32 L66 39 L56 42 L58 52 L48 49 L44 59 L40 49 L30 52 L32 42 L22 39 L30 32 L22 25 L32 22 L30 12 Z" fill="none" stroke={C.lime} strokeWidth="2" />
          <circle cx="40" cy="40" r="10" fill="none" stroke={C.lime} strokeWidth="1.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-16 grid grid-cols-1 md:grid-cols-[55fr_45fr]">
        {/* Left (over image on mobile, right side on desktop) */}
        <div className="hidden md:block" />
        <div className="stagger-children">
          <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-6" style={{ color: C.red }}>
            London&rsquo;s Bike Shop &middot; Est. 2009
          </p>

          <h1 className="mb-6">
            {['Ride.', 'Repair.', 'Repeat.'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block font-black leading-[0.85] tracking-tight uppercase"
                style={{
                  color: i === 0 ? C.red : i === 1 ? C.white : C.lime,
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  animationDelay: `${i * 0.15}s`,
                  letterSpacing: '-0.03em',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Category pills */}
          <div className="reveal-up flex flex-wrap gap-2 mb-8" style={{ animationDelay: '0.45s' }}>
            {['Road', 'MTB', 'Urban', 'E-Bike'].map((cat, i) => (
              <a
                key={cat}
                href="#shop"
                className="text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  background: i === 3 ? `${C.lime}22` : `rgba(255,255,255,0.08)`,
                  border: `1px solid ${i === 3 ? C.lime : C.border}`,
                  color: i === 3 ? C.lime : C.muted,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.red; e.currentTarget.style.color = C.red }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = i === 3 ? C.lime : C.border; e.currentTarget.style.color = i === 3 ? C.lime : C.muted }}
              >
                {cat}
              </a>
            ))}
          </div>

          <p
            className="reveal-up text-base font-light leading-relaxed max-w-md mb-10"
            style={{ color: C.muted, animationDelay: '0.5s' }}
          >
            London&rsquo;s most knowledgeable bike shop. Expert workshop, genuine brands, zero BS.
            We ride everything we sell and fix everything that moves.
          </p>

          <div className="reveal-up flex flex-wrap gap-6 mb-10" style={{ animationDelay: '0.55s' }}>
            {[
              { val: '500+', label: 'Bikes in stock' },
              { val: '15 yrs', label: 'Experience' },
              { val: '4.9★', label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.val} className="text-center">
                <div className="text-2xl font-extralight" style={{ color: C.red }}>{stat.val}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: C.muted }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#shop"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.red, color: C.red, borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.red; e.currentTarget.style.color = C.white }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.red }}
            >
              Browse Bikes
            </a>
            <a
              href="#workshop"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.lime, color: C.lime, borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.lime; e.currentTarget.style.color = C.charcoalDark }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.lime }}
            >
              Book Workshop
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BikeShopPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.red }} />

      <Navbar />
      <Hero />

      {/* MARQUEE */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.red }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Road Bikes', 'Mountain Bikes', 'E-Bikes', 'Urban & Commuter', 'Kids Bikes', 'Accessories', 'Workshop Services', 'VeloClub Rides'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: C.white }}>{item}</span>
                  <span className="text-sm" style={{ color: `${C.white}55` }}>⬡</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SHOP CATEGORIES */}
      <section id="shop" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>The Shop</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Bikes for Every Ride</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="reveal-up group relative overflow-hidden rounded-xl"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.border}`,
                  transition: 'border-color 0.4s, transform 0.4s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cat.accent}55`
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}, transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light" style={S.white}>{cat.name}</h3>
                    <div className="text-sm font-light" style={{ color: cat.accent }}>From {cat.priceFrom}</div>
                  </div>
                  <p className="text-sm font-light leading-relaxed mb-4" style={S.muted}>{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.brands.map((brand) => (
                      <span
                        key={brand}
                        className="text-[10px] tracking-wider uppercase px-2 py-0.5"
                        style={{
                          background: `${cat.accent}15`,
                          color: cat.accent,
                          borderRadius: 4,
                          border: `1px solid ${cat.accent}33`,
                        }}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section id="workshop" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.lime}>Workshop Services</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Expert Mechanics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {workshopServices.map((svc, i) => (
              <div
                key={svc.name}
                className="reveal-up p-7 rounded-2xl"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.border}`,
                  transition: 'border-color 0.4s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.lime}44` }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-light" style={S.white}>{svc.name}</h3>
                  <div className="text-right">
                    <div className="text-xl font-light" style={{ color: C.lime }}>{svc.price}</div>
                    <div className="text-xs" style={{ color: C.muted }}>{svc.time}</div>
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed mb-5" style={S.muted}>{svc.desc}</p>
                <a
                  href="#contact"
                  className="text-xs tracking-wider uppercase"
                  style={{ color: C.lime }}
                >
                  Book this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEST RIDE */}
      <section className="py-16 px-6 md:px-16 text-center" style={S.sectionDark}>
        <div className="max-w-2xl mx-auto reveal-up">
          <div
            className="inline-flex items-center gap-3 mb-6 px-5 py-2 text-xs tracking-widest uppercase"
            style={{ background: `${C.red}15`, color: C.red, borderRadius: 20, border: `1px solid ${C.red}33` }}
          >
            <span>🚲</span> Test Rides Available Daily
          </div>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.white}>
            Not Sure? Just Ride.
          </h2>
          <p className="text-base font-light mb-8" style={S.muted}>
            Test rides are available daily on all in-stock bikes. Road test route: 4km loop around Victoria Park.
            E-bike extended loans available for serious buyers.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.red, color: C.red, borderRadius: 4 }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.red; e.currentTarget.style.color = C.white }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.red }}
          >
            Book a Test Ride
          </a>
        </div>
      </section>

      {/* CYCLING CLUB */}
      <section id="club" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDeep}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.lime}>VeloClub</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-6" style={S.white}>
              Join the<br />Community
            </h2>
            <p className="text-base font-light leading-relaxed mb-6" style={S.muted}>
              Sunday rides, group sportive entries, social events and member discounts. VeloClub is
              free for customers — the best thing we offer beyond the bikes.
            </p>
            <div className="space-y-4">
              {[
                { icon: '🕗', detail: 'Sunday 08:30 — meet outside the shop' },
                { icon: '⚡', detail: 'All pace groups — Social, Intermediate, Fast' },
                { icon: '🎉', detail: 'Monthly socials, sportive group entries, kit' },
              ].map((item) => (
                <div key={item.detail} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-light" style={{ color: C.muted }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 360 }}>
              <Image src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=700&fit=crop"
                alt="VeloClub group ride"
                className="w-full h-full object-cover" width={1200} height={800} />
              <div
                className="absolute inset-0 flex items-end p-8"
                style={{ background: `linear-gradient(to top, ${C.charcoalDark}dd, transparent)` }}
              >
                <div>
                  <div className="text-3xl font-extralight mb-1" style={{ color: C.lime }}>200+</div>
                  <div className="text-sm tracking-wider uppercase" style={{ color: C.muted }}>Active Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCING */}
      <section className="py-16 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto text-center reveal-up">
          <div
            className="inline-flex items-center gap-3 mb-6 px-5 py-2 text-xs tracking-widest uppercase"
            style={{ background: `${C.lime}15`, color: C.lime, borderRadius: 20, border: `1px solid ${C.lime}33` }}
          >
            <span>💳</span> 0% Finance Available
          </div>
          <h2 className="text-3xl font-extralight mb-4" style={S.white}>
            Spread the Cost — 0% Interest
          </h2>
          <p className="text-base font-light mb-6" style={S.muted}>
            Finance available on bikes over £400. Pay over 6, 12 or 24 months with zero interest.
            Subject to status.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['6 months', '12 months', '24 months'].map((term) => (
              <div
                key={term}
                className="px-6 py-4 rounded-xl"
                style={{ background: `rgba(132,204,22,0.08)`, border: `1px solid ${C.lime}22` }}
              >
                <div className="text-xl font-extralight" style={{ color: C.lime }}>0%</div>
                <div className="text-xs tracking-wider uppercase" style={{ color: C.muted }}>{term}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDeep}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>What Riders Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="BikeOS" locale="en" />
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionDeep}>
        <div className="blob absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none" style={{ backgroundColor: C.red, filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>Visit Us</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Come In,<br />Say Hello.
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              No hard sell. Just bikes, knowledge and genuine enthusiasm. Walk in or book a workshop slot.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Address', detail: '88 Cycle Lane, Hackney, London E8 3QE' },
                { title: 'Hours', detail: 'Tue–Fri 09:00–18:30 | Sat–Sun 09:00–17:00 | Closed Mon' },
                { title: 'Workshop', detail: 'Book ahead recommended — especially Sat/Sun' },
                { title: 'Parking', detail: 'Cycle parking directly outside. Car parking on Shrubland Rd' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.red}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.red}>{info.title}</p>
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
              socialProof={{ count: 156, label: 'bikes serviced this month' }}
              vertical="bikeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460211" message="Hi! I'd like to know more about VeloHub" vertical="bikeos" />
    </div>
  )
}
