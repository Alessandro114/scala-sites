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
  dark: '#0f172a',
  darkAlt: '#1e293b',
  water: '#06b6d4',
  waterDark: '#0891b2',
  waterLight: '#22d3ee',
  chrome: '#c0c0c0',
  chromeDim: '#94a3b8',
  white: '#ffffff',
  muted: '#64748b',
  border: '#1e293b',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'ShineZone',
  description: 'Showroom shine, every time — professional car valeting',
  url: 'https://shinezone.example.com',
  locale: 'en',
  vertical: 'carwashos',
  theme: 'modern',
  branding: { primaryColor: C.dark, accentColor: C.water },
  contact: {
    phone: '+44 20 7946 0788',
    email: 'info@shinezone.com',
    whatsapp: '+442079460788',
    address: '12 Depot Road, Park Royal, London NW10 7DP',
    coordinates: { lat: 51.5266, lng: -0.2838 },
  },
  social: {
    instagram: 'shinezonedetailing',
    facebook: 'https://facebook.com/shinezonedetailing',
  },
  seo: {
    title: 'ShineZone Car Wash | Professional Valeting & Detailing',
    description: 'Showroom shine every time. Express wash, full valet, ceramic coating. From £8.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const packages = [
  {
    name: 'Express Wash',
    price: '£8',
    duration: '20 min',
    color: C.darkAlt,
    accent: C.chromeDim,
    features: ['Exterior rinse & wash', 'Wheel clean', 'Window wipe', 'Tyre dressing', 'Air freshener'],
    popular: false,
  },
  {
    name: 'Full Valet',
    price: '£18',
    duration: '60 min',
    color: C.waterDark,
    accent: C.water,
    features: ['Full exterior wash & dry', 'Interior vacuum & wipe', 'Dash & door panel clean', 'Wheel & tyre clean', 'Glass inside & out', 'Carpet shampoo'],
    popular: true,
  },
  {
    name: 'Premium Detail',
    price: '£35',
    duration: '2.5 hrs',
    color: C.dark,
    accent: C.waterLight,
    features: ['Machine polish & wax', 'Clay bar decontamination', 'Leather conditioning', 'Engine bay clean', 'Odour treatment', 'UV protectant interior', 'Full glass treatment'],
    popular: false,
  },
  {
    name: 'Ceramic Coating',
    price: '£250',
    duration: '1 day',
    color: C.dark,
    accent: C.chrome,
    features: ['Paint decontamination', '2-stage machine polish', 'Pro ceramic coating', '5-year paint protection', 'Hydrophobic finish', 'Certification included'],
    popular: false,
  },
]

const subscriptions = [
  { name: 'Weekly', price: '£25', period: '/month', desc: 'Express wash every week', highlight: false },
  { name: 'Monthly', price: '£45', period: '/month', desc: 'Full valet 2×/month + express wash 2×/month', highlight: true },
  { name: 'Annual VIP', price: '£350', period: '/year', desc: 'Unlimited express + 1 premium detail/month', highlight: false },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop', label: 'Ferrari After Detail', type: 'after' },
  { src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop', label: 'Ceramic Coating Result', type: 'after' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop', label: 'BMW M3 Full Valet', type: 'after' },
  { src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop', label: 'Porsche Premium Detail', type: 'after' },
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop', label: 'Range Rover Valet', type: 'before' },
  { src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop', label: 'Mercedes S-Class', type: 'after' },
]

const reviews: Review[] = [
  { id: '1', author: 'James F.', rating: 5, text: 'Ceramic coating on my Porsche GT3 RS. The hydrophobic finish is extraordinary — water just sheets right off. Spotless work from start to finish.', date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'Emily R.', rating: 5, text: 'Full valet every fortnight on subscription. They always do the passenger footwell even though it\'s not in the plan. Exceptional attention to detail.', date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Mark S.', rating: 5, text: 'Mobile service to my office — they detailed my M4 while I was in meetings. Picked up the keys, returned them, car looked brand new. Brilliant.', date: '2026-08-02', source: 'google', verified: true },
  { id: '4', author: 'Natasha K.', rating: 5, text: 'Fleet account for 8 company cars. Consistent, professional, on schedule every single time. Our vehicles always look immaculate for client visits.', date: '2026-07-15', source: 'google', verified: true },
  { id: '5', author: 'Tom W.', rating: 4, text: 'Premium detail on a 3-year-old car that had been neglected. I honestly didn\'t recognise it when they handed it back. Phenomenal transformation.', date: '2026-07-31', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How long does each service take?', answer: 'Express wash: 20–30 minutes. Full valet: 60–90 minutes. Premium detail: 2–3 hours. Ceramic coating: full day (8 hours). We always give you a precise time estimate when you book.' },
  { question: 'Do you offer a mobile valeting service?', answer: 'Yes! Our mobile team comes to your home or office. We bring our own water supply and power — no connections needed. Available across all London postcodes and within 20 miles. A small travel charge may apply outside Zone 2.' },
  { question: 'What makes ceramic coating worth the premium?', answer: 'Unlike wax or sealants which last weeks, our professional ceramic coating forms a permanent bond with your paint and lasts 3–5 years. It\'s self-cleaning, scratch-resistant (7H hardness) and makes your car dramatically easier to maintain.' },
  { question: 'Do you have fleet or corporate accounts?', answer: 'Yes. We manage fleet accounts for companies with 2–200+ vehicles. Dedicated account manager, priority booking, monthly invoicing and volume discounts. Contact us for a fleet assessment.' },
  { question: 'Are you able to treat pet hair in the interior?', answer: 'Absolutely. Pet hair removal is included in our Full Valet and Premium Detail. We use specialist tools and a pet-odour treatment. For very heavy pet hair, an upholstery shampooing service is recommended — let us know when booking.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '08:00', available: true, spotsLeft: 4 },
  { id: '2', date: today, time: '09:30', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '11:00', available: true, spotsLeft: 3 },
  { id: '4', date: today, time: '13:00', available: true, spotsLeft: 1 },
  { id: '5', date: today, time: '14:30', available: true, spotsLeft: 5 },
  { id: '6', date: today, time: '16:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.dark, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.darkAlt } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.dark } as React.CSSProperties,
  water: { color: C.water } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.chromeDim } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ShineZone Car Wash & Detailing',
  description: 'Professional car wash, valeting and ceramic coating services in London.',
  url: 'https://shinezone.example.com',
  telephone: '+44 20 7946 0788',
  email: 'info@shinezone.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Depot Road, Park Royal',
    addressLocality: 'London',
    postalCode: 'NW10 7DP',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5266, longitude: -0.2838 },
  priceRange: '£',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '08:00', closes: '17:00' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark" style={{ borderBottom: `1px solid ${C.water}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-black tracking-tight text-lg" style={{ color: C.water }}>Shine</span>
          <span className="font-light tracking-tight text-lg" style={{ color: C.white }}>Zone</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Packages', 'Gallery', 'Subscriptions', 'Booking'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.chromeDim }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.chromeDim)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.water, color: C.water, borderRadius: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.water
              e.currentTarget.style.color = C.dark
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.water
            }}
          >
            Book Now
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
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.dark }}>
      <style>{`
        @keyframes drop-fall {
          0% { transform: translateY(-20px) scaleY(0.3); opacity: 0; }
          20% { opacity: 1; transform: translateY(0) scaleY(1); }
          80% { opacity: 1; }
          100% { transform: translateY(40px) scaleY(0.3); opacity: 0; }
        }
        @keyframes sparkle-pop {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        @keyframes beam-sweep {
          0% { opacity: 0; transform: translateX(-100%) skewX(-20deg); }
          50% { opacity: 0.12; }
          100% { opacity: 0; transform: translateX(200%) skewX(-20deg); }
        }
        .water-drop {
          position: absolute;
          width: 3px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          background: linear-gradient(to bottom, rgba(34,211,238,0.9), rgba(6,182,212,0.5));
          animation: drop-fall 2s ease-in-out infinite;
        }
        .sparkle-star {
          position: absolute;
          font-size: 18px;
          animation: sparkle-pop 2.5s ease-in-out infinite;
          color: ${C.waterLight};
        }
        .beam {
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          background: linear-gradient(to right, transparent, rgba(34,211,238,0.08), transparent);
          animation: beam-sweep 6s ease-in-out infinite;
        }
      `}</style>

      {/* Dirty→clean gradient bg metaphor */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #1a0a00 0%, ${C.dark} 35%, ${C.dark} 65%, #001a1f 100%)` }} />

      {/* Light beam sweep */}
      <div className="beam" style={{ animationDelay: '0s' }} />
      <div className="beam" style={{ animationDelay: '3s' }} />

      {/* Falling water drops */}
      {[10, 22, 38, 52, 66, 78, 88].map((left, i) => (
        <div
          key={i}
          className="water-drop"
          style={{
            left: `${left}%`,
            top: '15%',
            height: `${12 + (i % 3) * 6}px`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${1.8 + (i % 3) * 0.4}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Sparkle stars */}
      {[
        { top: 25, left: 15 }, { top: 35, right: 20 }, { top: 55, left: 70 },
        { top: 70, left: 30 }, { top: 20, right: 40 }, { top: 80, right: 15 },
      ].map((pos, i) => (
        <div
          key={i}
          className="sparkle-star"
          style={{
            top: `${pos.top}%`,
            left: pos.left ? `${pos.left}%` : undefined,
            right: (pos as { right?: number }).right ? `${(pos as { right: number }).right}%` : undefined,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Car silhouette subtle bg */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none" style={{ opacity: 0.05 }}>
        <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop"
          alt=""
          className="w-2/3 h-full object-cover"
          style={{ filter: 'grayscale(100%)' }} width={1200} height={800} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-20 stagger-children">
        <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={{ color: C.water }}>
          Professional Car Detailing &middot; London
        </p>

        <h1 className="mb-8">
          {['Showroom', 'Shine,', 'Every Time.'].map((line, i) => (
            <span
              key={line}
              className="reveal-clip-up block font-black leading-[0.88] tracking-tight"
              style={{
                color: i < 2 ? C.white : C.water,
                fontSize: 'clamp(3rem, 9vw, 8rem)',
                animationDelay: `${i * 0.15}s`,
                letterSpacing: '-0.03em',
                textShadow: i === 2 ? `0 0 30px ${C.water}88` : 'none',
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Package comparison mini-cards in hero */}
        <div className="reveal-up flex flex-wrap gap-3 mb-10" style={{ animationDelay: '0.5s' }}>
          {packages.map((pkg) => (
            <a
              key={pkg.name}
              href="#packages"
              className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer"
              style={{
                background: pkg.popular ? `${C.water}22` : `rgba(255,255,255,0.06)`,
                border: `1px solid ${pkg.popular ? C.water : C.darkAlt}`,
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.water; e.currentTarget.style.background = `${C.water}22` }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = pkg.popular ? C.water : C.darkAlt; e.currentTarget.style.background = pkg.popular ? `${C.water}22` : `rgba(255,255,255,0.06)` }}
            >
              <div>
                <div className="text-xs tracking-wider uppercase" style={{ color: pkg.popular ? C.water : C.chromeDim }}>{pkg.name}</div>
                <div className="text-lg font-light" style={{ color: C.white }}>{pkg.price}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
          <a
            href="#booking"
            className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
            style={{ borderColor: C.water, color: C.water, borderRadius: 4 }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.water; e.currentTarget.style.color = C.dark }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.water }}
          >
            Book a Wash
          </a>
          <a
            href="#packages"
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
            style={{ color: C.chromeDim }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.chromeDim)}
          >
            See Packages
          </a>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function CarWashPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.water }} />

      <Navbar />
      <Hero />

      {/* MARQUEE */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.water }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Express Wash £8', 'Full Valet £18', 'Premium Detail £35', 'Ceramic Coating £250', 'Mobile Service', 'Fleet Accounts', 'Subscriptions', 'Same-Day Booking'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: C.dark }}>{item}</span>
                  <span className="text-base" style={{ color: `${C.dark}55` }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.water}>Packages</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Choose Your Clean</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className="reveal-up rounded-2xl relative overflow-hidden"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: pkg.popular
                    ? `linear-gradient(160deg, ${C.waterDark}, ${C.dark})`
                    : `rgba(255,255,255,0.04)`,
                  border: `1px solid ${pkg.popular ? C.water : C.border}`,
                  boxShadow: pkg.popular ? `0 0 40px ${C.water}22` : 'none',
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-px left-0 right-0 text-center py-1.5 text-xs tracking-widest uppercase"
                    style={{ background: C.water, color: C.dark, fontWeight: 700 }}
                  >
                    Most Popular
                  </div>
                )}
                <div className={`p-7 ${pkg.popular ? 'pt-9' : ''}`}>
                  <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: pkg.accent }}>{pkg.duration}</div>
                  <h3 className="text-xl font-light mb-2" style={S.white}>{pkg.name}</h3>
                  <div className="text-4xl font-extralight mb-6" style={{ color: pkg.accent }}>{pkg.price}</div>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs font-light" style={{ color: C.chromeDim }}>
                        <span style={{ color: pkg.accent }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className="block text-center py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300"
                    style={{
                      background: pkg.popular ? C.water : `rgba(255,255,255,0.06)`,
                      color: pkg.popular ? C.dark : C.chromeDim,
                      borderRadius: 8,
                      border: pkg.popular ? 'none' : `1px solid ${C.border}`,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = pkg.popular ? C.waterLight : C.water; e.currentTarget.style.color = C.dark }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = pkg.popular ? C.water : `rgba(255,255,255,0.06)`; e.currentTarget.style.color = pkg.popular ? C.dark : C.chromeDim }}
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIPTIONS */}
      <section id="subscriptions" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.water}>Subscription Plans</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Always Clean, Always Covered</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {subscriptions.map((sub, i) => (
              <div
                key={sub.name}
                className="reveal-up p-8 rounded-2xl text-center"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: sub.highlight ? `linear-gradient(135deg, ${C.waterDark}, ${C.dark})` : `rgba(255,255,255,0.04)`,
                  border: `1px solid ${sub.highlight ? C.water : C.border}`,
                  boxShadow: sub.highlight ? `0 0 30px ${C.water}22` : 'none',
                }}
              >
                <h3 className="text-lg font-light mb-3" style={S.white}>{sub.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-3">
                  <span className="text-4xl font-extralight" style={{ color: C.water }}>{sub.price}</span>
                  <span className="text-sm mb-1" style={{ color: C.chromeDim }}>{sub.period}</span>
                </div>
                <p className="text-xs font-light mb-6" style={{ color: C.chromeDim }}>{sub.desc}</p>
                <a
                  href="#booking"
                  className="block py-3 text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: sub.highlight ? C.water : `rgba(255,255,255,0.06)`,
                    color: sub.highlight ? C.dark : C.chromeDim,
                    borderRadius: 8,
                    border: sub.highlight ? 'none' : `1px solid ${C.border}`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.water; e.currentTarget.style.color = C.dark }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = sub.highlight ? C.water : `rgba(255,255,255,0.06)`; e.currentTarget.style.color = sub.highlight ? C.dark : C.chromeDim }}
                >
                  Subscribe
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.water}>Before & After</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Results Speak</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="reveal-up group relative overflow-hidden rounded-xl"
                style={{ height: 260, animationDelay: `${i * 0.07}s` }}
              >
                <Image src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to top, ${C.dark}dd, transparent)` }}
                >
                  <div>
                    <span
                      className="text-[10px] tracking-widest uppercase px-2 py-0.5 mr-2"
                      style={{
                        background: img.type === 'after' ? C.water : C.chromeDim,
                        color: C.dark,
                        borderRadius: 4,
                        fontWeight: 700,
                      }}
                    >
                      {img.type}
                    </span>
                    <span className="text-xs font-light" style={{ color: C.white }}>{img.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE & FLEET */}
      <section className="py-20 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: '🚗', title: 'Mobile Service', desc: 'We come to you. Home, office or car park — we bring everything needed. Available across all London postcodes.' },
            { icon: '🏢', title: 'Fleet & Corporate', desc: 'Dedicated fleet accounts. Volume pricing, monthly invoicing and priority scheduling for 2–200+ vehicles.' },
          ].map((item) => (
            <div
              key={item.title}
              className="reveal-up p-8 rounded-2xl"
              style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${C.water}22` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-light mb-3" style={S.white}>{item.title}</h3>
              <p className="text-sm font-light leading-relaxed mb-5" style={S.muted}>{item.desc}</p>
              <a href="#booking" className="text-sm tracking-wider" style={{ color: C.water }}>
                Enquire now →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.water}>What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDeep}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.water}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="CarWashOS" locale="en" />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionDark}>
        <div className="blob absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none" style={{ backgroundColor: C.water, filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.water}>Book a Service</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Ready for<br />Showroom Shine?
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Book online, arrive, drive away gleaming. We handle walk-ins and bookings 7 days a week.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Hours', detail: 'Mon–Fri 07:30–18:00 | Sat–Sun 08:00–17:00' },
                { title: 'Location', detail: '12 Depot Road, Park Royal, NW10 7DP — free customer parking' },
                { title: 'Mobile', detail: 'We come to you — home, office, anywhere in London' },
                { title: 'Walk-ins', detail: 'Welcome for Express Wash — no appointment needed' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.water}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.water}>{info.title}</p>
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
              socialProof={{ count: 428, label: 'cars washed this month' }}
              vertical="carwashos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460788" message="Hi! I'd like to book a car wash" vertical="carwashos" />
    </div>
  )
}
