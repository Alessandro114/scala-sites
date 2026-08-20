'use client'
import Image from 'next/image';

import { useState } from 'react'
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
  midnight: '#0f172a',
  dark: '#1e293b',
  blue: '#3b82f6',
  blueLight: '#60a5fa',
  blueDark: '#2563eb',
  silver: '#e2e8f0',
  silverDim: '#94a3b8',
  white: '#ffffff',
  border: '#1e293b',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'PrimeRent',
  description: 'Premium car rental — drive your way',
  url: 'https://primerent.example.com',
  locale: 'en',
  vertical: 'rentos',
  theme: 'modern',
  branding: { primaryColor: C.midnight, accentColor: C.blue },
  contact: {
    phone: '+44 20 7946 0999',
    email: 'info@primerent.com',
    whatsapp: '+442079460999',
    address: '5 Terminal Way, Heathrow, London TW6 2AE',
    coordinates: { lat: 51.4700, lng: -0.4543 },
  },
  social: {
    instagram: 'primerentuk',
    facebook: 'https://facebook.com/primerentuk',
  },
  seo: {
    title: 'PrimeRent | Premium Car Rental — Economy to Luxury, From £25/day',
    description: 'Drive your way. Economy, SUV, luxury and electric car hire. Instant booking.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const fleetCategories = [
  {
    category: 'Economy',
    price: '£25',
    period: '/day',
    example: 'Toyota Yaris or similar',
    specs: { doors: 5, seats: 5, fuel: 'Petrol', transmission: 'Manual' },
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop',
    accent: C.silverDim,
    tags: ['City driving', 'Best value'],
  },
  {
    category: 'Compact',
    price: '£35',
    period: '/day',
    example: 'Volkswagen Golf or similar',
    specs: { doors: 5, seats: 5, fuel: 'Diesel', transmission: 'Automatic' },
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop',
    accent: C.silver,
    tags: ['Most popular', 'Comfortable'],
  },
  {
    category: 'SUV',
    price: '£55',
    period: '/day',
    example: 'BMW X3 or similar',
    specs: { doors: 5, seats: 7, fuel: 'Diesel', transmission: 'Automatic' },
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop',
    accent: C.blue,
    tags: ['Family trips', 'Road trips'],
  },
  {
    category: 'Luxury',
    price: '£95',
    period: '/day',
    example: 'Mercedes E-Class or similar',
    specs: { doors: 4, seats: 5, fuel: 'Petrol', transmission: 'Automatic' },
    image: 'https://images.unsplash.com/photo-1441148345475-03a2e82f9719?w=800&h=500&fit=crop',
    accent: C.blueLight,
    tags: ['Business travel', 'Special occasions'],
  },
  {
    category: 'Electric',
    price: '£45',
    period: '/day',
    example: 'Tesla Model 3 or similar',
    specs: { doors: 4, seats: 5, fuel: 'Electric', transmission: 'Automatic' },
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
    accent: '#4ade80',
    tags: ['Zero emissions', 'Free charging'],
  },
  {
    category: 'Van',
    price: '£50',
    period: '/day',
    example: 'Ford Transit or similar',
    specs: { doors: 3, seats: 3, fuel: 'Diesel', transmission: 'Manual' },
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop',
    accent: C.silverDim,
    tags: ['Cargo & moving', 'Events'],
  },
]

const insuranceOptions = [
  { name: 'Basic Cover', price: '£0', detail: 'Included — £1,500 excess on damage', features: ['Third party included', 'Theft protection', '£1,500 excess'] },
  { name: 'Standard', price: '£8/day', detail: 'Reduce excess to £500', features: ['All Basic cover', 'Excess reduced to £500', 'Windscreen cover'] },
  { name: 'Premium', price: '£18/day', detail: 'Zero excess, complete peace of mind', features: ['Zero excess', 'Full damage waiver', 'Personal accident', 'Tyre & glass cover'] },
]

const reviews: Review[] = [
  { id: '1', author: 'Richard H.', rating: 5, text: 'Rented a Tesla for 2 weeks. Pickup was flawless, car was pristine. The free charging network access made it genuinely cheaper than petrol. Will not use anyone else.', date: '2026-07-22', source: 'google', verified: true },
  { id: '2', author: 'Sarah J.', rating: 5, text: 'Business travel — Mercedes E-Class for client meetings. Always immaculate, always on time for delivery. The account management is outstanding.', date: '2026-07-30', source: 'google', verified: true },
  { id: '3', author: 'Mike L.', rating: 5, text: 'Booked a 7-seater for a family road trip Scotland. Smooth process, competitive price, and the car was in showroom condition. Kids loved it.', date: '2026-08-03', source: 'google', verified: true },
  { id: '4', author: 'Anna K.', rating: 4, text: 'Last-minute booking at Heathrow — they had a car ready within 45 minutes. Incredible efficiency. Slight admin hiccup on collection but sorted immediately.', date: '2026-07-18', source: 'google', verified: true },
  { id: '5', author: 'David C.', rating: 5, text: 'Monthly van rental for our landscaping business. Consistent quality, proper maintenance, and the monthly billing is simple. Genuinely excellent fleet management.', date: '2026-07-25', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What documents do I need to rent a car?', answer: 'You need a valid driving licence (UK or international), a credit card in the driver\'s name, and a form of ID (passport preferred). For EU/international licences, you may need an official translation. All documents must be presented on collection.' },
  { question: 'What is the minimum age to rent?', answer: 'The standard minimum age is 21 years. Drivers aged 21–24 may have restrictions on certain vehicle categories (Luxury, large SUVs) and a young driver surcharge applies. Drivers must hold a full licence for at least 12 months.' },
  { question: 'Can I add an additional driver?', answer: 'Yes. Additional drivers are £8/day per driver. They must be present at vehicle collection with their driving licence. Spouses/domestic partners are often free — ask us at booking.' },
  { question: 'Do you offer delivery and collection?', answer: 'Yes! We deliver to and collect from anywhere in London and the Home Counties for £20–£40 depending on distance. Airport delivery (Heathrow, Gatwick, Stansted, Luton) is available 24/7 with advance notice.' },
  { question: 'What fuel policy do you have?', answer: 'Our standard policy is full-to-full: you collect the car with a full tank and return it full. If you prefer, we offer a prepaid fuel option where we fill the tank and you return it at any level — convenience at a set price.' },
  { question: 'What happens if the car is damaged?', answer: 'Report damage immediately via our 24/7 line. With basic cover, you\'re liable for up to £1,500 excess. Standard cover reduces this to £500; Premium reduces it to £0. Normal wear is never charged. We assess fairly with photos taken on collection and return.' },
  { question: 'Do you offer long-term rental?', answer: 'Absolutely. Monthly rental plans are available for all categories at significantly reduced daily rates. Long-term rentals (30+ days) qualify for 20–35% discounts. Corporate accounts with fleet management are also available.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '07:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '09:00', available: true, spotsLeft: 5 },
  { id: '3', date: today, time: '11:00', available: true, spotsLeft: 2 },
  { id: '4', date: today, time: '13:00', available: true, spotsLeft: 4 },
  { id: '5', date: today, time: '15:00', available: true, spotsLeft: 1 },
  { id: '6', date: today, time: '17:00', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.midnight, color: C.white } as React.CSSProperties,
  sectionDark: { backgroundColor: C.dark } as React.CSSProperties,
  sectionDeep: { backgroundColor: C.midnight } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  blueLight: { color: C.blueLight } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  silver: { color: C.silver } as React.CSSProperties,
  muted: { color: C.silverDim } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PrimeRent Car Rental',
  description: 'Premium car rental from economy to luxury. Delivery & collection. London & UK airports.',
  url: 'https://primerent.example.com',
  telephone: '+44 20 7946 0999',
  email: 'info@primerent.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5 Terminal Way',
    addressLocality: 'Heathrow, London',
    postalCode: 'TW6 2AE',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4700, longitude: -0.4543 },
  priceRange: '££',
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
// AVAILABILITY CHECKER
// ─────────────────────────────────────────────
function AvailabilityChecker() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [location, setLocation] = useState('London Heathrow')
  const [category, setCategory] = useState('Compact')

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: `rgba(59,130,246,0.08)`,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${C.blue}44`,
      }}
    >
      <h3 className="text-base font-light mb-5" style={{ color: C.white }}>Check Availability</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs tracking-widest uppercase mb-1.5 block" style={{ color: C.blue }}>Pick-up</label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full py-2.5 px-3 text-sm rounded-lg outline-none"
              style={{ background: `rgba(255,255,255,0.06)`, border: `1px solid ${C.border}`, color: C.white }}
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase mb-1.5 block" style={{ color: C.blue }}>Drop-off</label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full py-2.5 px-3 text-sm rounded-lg outline-none"
              style={{ background: `rgba(255,255,255,0.06)`, border: `1px solid ${C.border}`, color: C.white }}
            />
          </div>
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase mb-1.5 block" style={{ color: C.blue }}>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full py-2.5 px-3 text-sm rounded-lg outline-none appearance-none"
            style={{ background: `rgba(255,255,255,0.06)`, border: `1px solid ${C.border}`, color: C.white }}
          >
            {['London Heathrow', 'London Gatwick', 'London City', 'Central London', 'Delivery to my address'].map((l) => (
              <option key={l} value={l} style={{ background: C.midnight }}>{l}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs tracking-widest uppercase mb-1.5 block" style={{ color: C.blue }}>Category</label>
          <div className="flex flex-wrap gap-2">
            {['Economy', 'Compact', 'SUV', 'Luxury', 'Electric', 'Van'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-3 py-1.5 text-xs rounded-lg transition-all duration-200"
                style={{
                  background: category === cat ? C.blue : `rgba(255,255,255,0.06)`,
                  color: category === cat ? C.white : C.silverDim,
                  border: `1px solid ${category === cat ? C.blue : C.border}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <a
          href="#booking"
          className="block text-center py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300"
          style={{ background: C.blue, color: C.white, borderRadius: 8 }}
          onMouseEnter={(e) => { e.currentTarget.style.background = C.blueLight }}
          onMouseLeave={(e) => { e.currentTarget.style.background = C.blue }}
        >
          Check Availability
        </a>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark" style={{ borderBottom: `1px solid ${C.blue}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-black tracking-tight text-lg" style={{ color: C.blue }}>Prime</span>
          <span className="font-light tracking-tight text-lg" style={{ color: C.white }}>Rent</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Fleet', 'Locations', 'Insurance', 'Booking'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.silverDim }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.silverDim)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-400"
            style={{ borderColor: C.blue, color: C.blue, borderRadius: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.blue
              e.currentTarget.style.color = C.white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.blue
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
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.midnight }}>
      <style>{`
        @keyframes headlight-sweep {
          0% { opacity: 0; transform: rotate(-30deg) scale(0.8); }
          30% { opacity: 0.15; }
          70% { opacity: 0.15; }
          100% { opacity: 0; transform: rotate(30deg) scale(1.2); }
        }
        @keyframes headlight-pulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.12; }
        }
        .headlight-beam {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(60px);
          animation: headlight-pulse 4s ease-in-out infinite;
        }
        .headlight-sweep {
          position: absolute;
          width: 100%;
          height: 100%;
          background: conic-gradient(from -60deg at 15% 50%, transparent 0deg, rgba(59,130,246,0.1) 20deg, transparent 40deg);
          animation: headlight-sweep 8s ease-in-out infinite;
        }
      `}</style>

      {/* Headlight beam effects */}
      <div
        className="headlight-beam"
        style={{ top: '20%', right: '10%', background: C.blue }}
      />
      <div
        className="headlight-beam"
        style={{ top: '40%', right: '25%', background: C.blueLight, animationDelay: '2s' }}
      />
      <div className="headlight-sweep" />

      {/* Background car image */}
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?w=1800&h=1200&fit=crop&q=85"
          alt="PrimeRent premium car fleet"
          className="w-full h-full object-cover"
          style={{ opacity: 0.12 }} width={1200} height={800} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.midnight}f0 0%, ${C.midnight}bb 60%, ${C.dark}cc 100%)` }} />
      </div>

      {/* Fleet category pills — floating top right */}
      <div className="absolute top-28 right-8 hidden md:flex flex-col gap-2">
        {['Economy', 'SUV', 'Luxury', 'Electric'].map((cat, i) => (
          <div
            key={cat}
            className="text-xs tracking-wider uppercase px-4 py-2 rounded-full"
            style={{
              background: `rgba(59,130,246,${0.1 + i * 0.04})`,
              border: `1px solid ${C.blue}${i === 1 ? 'aa' : '44'}`,
              color: i === 1 ? C.blueLight : C.silverDim,
              backdropFilter: 'blur(8px)',
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-16 grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 items-center">
        <div className="stagger-children">
          <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={{ color: C.blue }}>
            Premium Car Rental &middot; London &amp; UK Airports
          </p>

          <h1 className="mb-8">
            {['Drive', 'Your', 'Way.'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block font-black leading-[0.88] tracking-tight uppercase"
                style={{
                  color: i === 2 ? C.blue : C.white,
                  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                  animationDelay: `${i * 0.15}s`,
                  letterSpacing: '-0.04em',
                  textShadow: i === 2 ? `0 0 40px ${C.blue}55` : 'none',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed max-w-xl mb-10"
            style={{ color: C.silverDim, animationDelay: '0.45s' }}
          >
            From compact city cars to luxury executive vehicles and zero-emission electric.
            Instant booking, free delivery, and transparent pricing — no hidden fees.
          </p>

          <div className="reveal-up flex flex-wrap gap-6 mb-10" style={{ animationDelay: '0.5s' }}>
            {[
              { val: '200+', label: 'Vehicles' },
              { val: '4.9★', label: 'Google Rating' },
              { val: '24/7', label: 'Support' },
              { val: '£0', label: 'Hidden Fees' },
            ].map((stat) => (
              <div key={stat.val} className="text-center">
                <div className="text-2xl font-extralight" style={{ color: C.blue }}>{stat.val}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: C.silverDim }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a
              href="#fleet"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.blue, color: C.blue, borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.blue; e.currentTarget.style.color = C.white }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.blue }}
            >
              Browse Fleet
            </a>
            <a
              href="tel:+442079460999"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: C.silverDim }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.silverDim)}
            >
              +44 20 7946 0999
            </a>
          </div>
        </div>

        {/* Availability checker */}
        <div className="reveal-right">
          <AvailabilityChecker />
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function CarRentalPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.blue }} />

      <Navbar />
      <Hero />

      {/* MARQUEE */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.blue }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['Economy from £25/day', 'Compact from £35/day', 'SUV from £55/day', 'Luxury from £95/day', 'Electric from £45/day', 'Free Delivery', '24/7 Support', 'No Hidden Fees'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm tracking-[0.2em] uppercase font-light" style={{ color: C.white }}>{item}</span>
                  <span className="text-sm" style={{ color: `${C.white}55` }}>›</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Our Fleet</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>Choose Your Drive</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {fleetCategories.map((car, i) => (
              <div
                key={car.category}
                className="reveal-up group rounded-2xl overflow-hidden"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  background: `rgba(255,255,255,0.04)`,
                  border: `1px solid ${C.border}`,
                  transition: 'border-color 0.4s, transform 0.4s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${car.accent}55`
                  e.currentTarget.style.transform = 'translateY(-6px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={car.image} alt={car.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1200} height={800} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.dark}, transparent)` }} />
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
                    {car.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wider uppercase px-2 py-0.5"
                        style={{ background: `${car.accent}22`, color: car.accent, borderRadius: 4, border: `1px solid ${car.accent}33` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-light" style={S.white}>{car.category}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-extralight" style={{ color: car.accent }}>{car.price}</span>
                      <span className="text-xs" style={{ color: C.silverDim }}>{car.period}</span>
                    </div>
                  </div>
                  <p className="text-xs mb-4" style={{ color: C.silverDim }}>{car.example}</p>
                  <div className="flex gap-4 text-xs" style={{ color: C.silverDim }}>
                    <span>{car.specs.seats} seats</span>
                    <span>·</span>
                    <span>{car.specs.transmission}</span>
                    <span>·</span>
                    <span>{car.specs.fuel}</span>
                  </div>
                  <a
                    href="#booking"
                    className="block text-center mt-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300"
                    style={{
                      background: `${car.accent}15`,
                      color: car.accent,
                      borderRadius: 8,
                      border: `1px solid ${car.accent}33`,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${car.accent}30` }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `${car.accent}15` }}
                  >
                    Book This Category
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-20 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Pick-up Locations</p>
            <h2 className="text-3xl md:text-4xl font-extralight" style={S.white}>We&rsquo;re Where You Are</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {['Heathrow T2/T3/T5', 'Gatwick N&S', 'London City Airport', 'Central London', 'Stansted', 'Luton Airport', 'Delivery to you', 'Hotel Collection'].map((loc, i) => (
              <div
                key={loc}
                className="reveal-up p-5 rounded-xl text-center"
                style={{ animationDelay: `${i * 0.06}s`, background: `rgba(59,130,246,0.06)`, border: `1px solid ${C.blue}22` }}
              >
                <div className="text-xl mb-2">📍</div>
                <div className="text-xs font-light" style={{ color: C.silver }}>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section id="insurance" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Insurance Options</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Your Protection, Your Choice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {insuranceOptions.map((opt, i) => (
              <div
                key={opt.name}
                className="reveal-up p-7 rounded-2xl"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  background: i === 2 ? `linear-gradient(135deg, ${C.blueDark}66, ${C.dark})` : `rgba(255,255,255,0.04)`,
                  border: `1px solid ${i === 2 ? C.blue : C.border}`,
                }}
              >
                <div className="text-lg font-light mb-1" style={S.white}>{opt.name}</div>
                <div className="text-2xl font-extralight mb-2" style={{ color: i === 2 ? C.blueLight : C.silverDim }}>{opt.price}</div>
                <div className="text-xs mb-5" style={{ color: C.silverDim }}>{opt.detail}</div>
                <ul className="space-y-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: C.silverDim }}>
                      <span style={{ color: i === 2 ? C.blueLight : C.blue }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY & LONG-TERM */}
      <section className="py-16 px-6 md:px-16" style={S.sectionDeep}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🚗', title: 'Delivery & Collection', desc: 'We bring the car to your home, hotel or office and collect when you\'re done. Available across London and Home Counties — from £20.' },
            { icon: '📅', title: 'Long-Term Rental', desc: 'Monthly plans for businesses and individuals. Up to 35% off daily rates. Fleet management, multiple drivers, dedicated account support.' },
          ].map((item) => (
            <div
              key={item.title}
              className="reveal-up p-8 rounded-2xl"
              style={{ background: `rgba(59,130,246,0.06)`, border: `1px solid ${C.blue}22` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-light mb-3" style={S.white}>{item.title}</h3>
              <p className="text-sm font-light leading-relaxed mb-5" style={S.muted}>{item.desc}</p>
              <a href="#booking" className="text-sm tracking-wider" style={{ color: C.blue }}>Enquire now →</a>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>What Clients Say</p>
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
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.white}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="CarRentalOS" locale="en" />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 grain overflow-hidden" style={S.sectionDark}>
        <div className="blob absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none" style={{ backgroundColor: C.blue, filter: 'blur(100px)' }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Book a Car</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Reserve<br />Your Vehicle
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Instant confirmation. No deposit required. Free cancellation up to 24 hours before pickup.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Hours', detail: '24/7 booking. Collection desk Mon–Sun 06:00–23:00' },
                { title: 'Cancellation', detail: 'Free cancellation up to 24h before pickup' },
                { title: 'Minimum', detail: '21+ years, full licence held 12+ months' },
                { title: 'Fuel', detail: 'Full-to-full policy — transparent, no surprises' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.blue}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.blue}>{info.title}</p>
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
              socialProof={{ count: 289, label: 'vehicles reserved this week' }}
              vertical="rentos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460999" message="Hi! I'd like to rent a car" vertical="rentos" />
    </div>
  )
}
