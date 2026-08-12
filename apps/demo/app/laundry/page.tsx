'use client'

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
  blue: '#38bdf8',
  blueDark: '#0284c7',
  blueDeep: '#0c4a6e',
  white: '#ffffff',
  offWhite: '#f1f5f9',
  mint: '#34d399',
  mintDark: '#059669',
  slate: '#64748b',
  slateLight: '#94a3b8',
  dark: '#0f172a',
  cardBg: '#e8f4fd',
} as const

const S = {
  page: { backgroundColor: C.white, color: C.dark } as React.CSSProperties,
  sectionWhite: { backgroundColor: C.white } as React.CSSProperties,
  sectionOff: { backgroundColor: C.offWhite } as React.CSSProperties,
  sectionDark: { backgroundColor: C.dark, color: C.white } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  blueDark: { color: C.blueDark } as React.CSSProperties,
  mint: { color: C.mint } as React.CSSProperties,
  slate: { color: C.slate } as React.CSSProperties,
  slateLight: { color: C.slateLight } as React.CSSProperties,
  dark: { color: C.dark } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'FreshPress Laundry',
  description: 'Professional laundry, dry cleaning and ironing with free collection & delivery',
  url: 'https://freshpress.example.com',
  locale: 'en',
  vertical: 'laundryos',
  theme: 'clean',
  branding: { primaryColor: C.blue, accentColor: C.mint },
  contact: {
    phone: '+44 20 7946 1122',
    email: 'hello@freshpress.com',
    whatsapp: '+442079461122',
    address: '18 Laundry Lane, Shoreditch, London E1 6RF',
    coordinates: { lat: 51.5227, lng: -0.0760 },
  },
  social: {
    instagram: 'freshpresslaundry',
    facebook: 'https://facebook.com/freshpresslaundry',
  },
  seo: {
    title: 'FreshPress Laundry | Wash, Dry Clean & Delivery London',
    description: 'Professional laundry service with free collection & delivery in London. Eco-friendly products, fast turnaround.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  { icon: '👕', name: 'Wash & Fold', price: '£3/kg', desc: 'Washed, tumble dried and neatly folded. Minimum 3kg order.', color: C.blue },
  { icon: '🧥', name: 'Dry Cleaning', price: 'from £8', desc: 'Professional dry cleaning for suits, dresses, and delicates.', color: C.blueDark },
  { icon: '🔥', name: 'Ironing', price: '£2.50/item', desc: 'Steam-pressed to perfection. Shirts, trousers, dresses and more.', color: C.mint },
  { icon: '🛏️', name: 'Duvets & Bedding', price: '£15', desc: 'Single, double, king and super-king duvets. Pillows included.', color: C.blueDark },
  { icon: '👗', name: 'Wedding Dress', price: '£50', desc: 'Specialist cleaning and preservation for bridal gowns.', color: C.blue },
  { icon: '🏢', name: 'Corporate Plans', price: 'Custom', desc: 'Uniforms, workwear, and bulk contracts for businesses.', color: C.mint },
]

const steps = [
  { n: '01', title: 'Schedule Pickup', desc: 'Book online or via WhatsApp. We collect from your door at your chosen time.' },
  { n: '02', title: 'We Clean It', desc: 'Expert cleaning with eco-friendly detergents in our Shoreditch facility.' },
  { n: '03', title: 'Fresh Delivery', desc: 'Your clean laundry is returned within 24–48 hours, packaged and ready.' },
]

const turnarounds = [
  { service: 'Wash & Fold', time: '24 hours', express: '12 hours (+£5)' },
  { service: 'Dry Cleaning', time: '48 hours', express: '24 hours (+£8)' },
  { service: 'Ironing', time: '24 hours', express: 'Same day (+£5)' },
  { service: 'Duvets', time: '48 hours', express: '24 hours (+£10)' },
  { service: 'Wedding Dress', time: '5–7 days', express: 'N/A' },
]

const subscriptions = [
  {
    name: 'Weekly',
    price: '£29.99/wk',
    items: ['Up to 8kg laundry', 'Free collection & delivery', 'Priority turnaround', '10% off dry cleaning'],
    highlight: false,
  },
  {
    name: 'Bi-Weekly',
    price: '£24.99/wk',
    items: ['Up to 8kg laundry', 'Free collection & delivery', '5% off dry cleaning', 'Flexible scheduling'],
    highlight: true,
  },
]

const reviews: Review[] = [
  { id: '1', author: 'Priya S.', rating: 5, text: 'Absolutely brilliant service. My white shirts have never looked so crisp. The driver arrived exactly on time and my order was back within 24 hours.', date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'Marcus T.', rating: 5, text: 'I was sceptical about a laundry delivery service but FreshPress converted me. My suit came back in better condition than when I bought it.', date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Lena K.', rating: 5, text: 'I sent in my wedding dress for cleaning and preservation. The result was incredible — looks brand new. Worth every penny.', date: '2026-08-02', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Oliver R.', rating: 4, text: 'The bi-weekly subscription is a game changer. No more weekend laundry battles. Clean clothes appear magically at my door.', date: '2026-08-04', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What areas do you cover?', answer: 'We cover all London postcodes within the M25. Collection and delivery is free on all orders over £20. For orders under £20, a £3.99 delivery fee applies.' },
  { question: 'Do you use eco-friendly products?', answer: 'Yes. We use plant-based, biodegradable detergents and energy-efficient machines. Our packaging is 100% recyclable. We are proud to be carbon-neutral.' },
  { question: 'What happens if something is damaged?', answer: 'We are fully insured. In the rare event of damage, we will compensate you for the replacement value of the item. Simply contact us within 48 hours of delivery.' },
  { question: 'Can I specify detergent preferences?', answer: 'Absolutely. We offer fragrance-free, sensitive skin, and hypoallergenic options. Just let us know when booking and we will use your preferred product.' },
  { question: 'How do subscriptions work?', answer: 'You schedule a recurring weekly or bi-weekly collection. We send a reminder the day before, collect your laundry in a reusable bag we provide, and return it fresh within 24 hours.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '08:00–10:00', available: true, spotsLeft: 3 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00–12:00', available: true, spotsLeft: 5 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '13:00–15:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '15:00–17:00', available: true, spotsLeft: 4 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '17:00–19:00', available: true, spotsLeft: 6 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FreshPress Laundry',
  description: 'Professional laundry, dry cleaning and ironing with free collection and delivery in London.',
  url: 'https://freshpress.example.com',
  telephone: '+44 20 7946 1122',
  email: 'hello@freshpress.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Laundry Lane, Shoreditch',
    addressLocality: 'London',
    postalCode: 'E1 6RF',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5227, longitude: -0.0760 },
  openingHours: ['Mo-Sa 07:00-20:00', 'Su 09:00-18:00'],
  priceRange: '££',
  image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1200&h=630&fit=crop',
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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.white}f2`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.blue}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span style={{ fontSize: 22 }}>✿</span>
          <span className="font-semibold tracking-tight text-lg" style={{ color: C.blueDeep }}>FreshPress</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'How It Works', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: C.slate }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.blue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.slate)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: C.blue, color: C.white }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.blueDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.blue)}
          >
            Book Pickup
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function LaundryOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Keyframe animations */}
      <style>{`
        @keyframes float-bubble {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.55; }
          50% { transform: translateY(-30px) scale(1.06); opacity: 0.8; }
        }
        @keyframes spin-drum {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bubble-drift {
          0% { transform: translateY(0) translateX(0) scale(1); }
          33% { transform: translateY(-20px) translateX(12px) scale(1.05); }
          66% { transform: translateY(-10px) translateX(-8px) scale(0.97); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        .fade-up { animation: fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-d1 { animation: fade-up 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-d2 { animation: fade-up 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-d3 { animation: fade-up 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both; }
        .laundry-service-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px ${C.blue}22; }
        .laundry-service-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      `}</style>

      <div className="scroll-progress" style={{ background: C.blue }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Floating bubbles + drum spin
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: `linear-gradient(135deg, ${C.white} 0%, #e0f2fe 50%, #f0fdf4 100%)` }}
      >
        {/* Floating bubble circles */}
        {[
          { size: 180, top: '8%', left: '5%', delay: '0s', dur: '6s' },
          { size: 120, top: '20%', left: '78%', delay: '1.2s', dur: '7.5s' },
          { size: 240, top: '55%', left: '88%', delay: '0.5s', dur: '9s' },
          { size: 90,  top: '70%', left: '3%',  delay: '2s',   dur: '5.5s' },
          { size: 160, top: '35%', left: '60%', delay: '0.8s', dur: '8s' },
          { size: 70,  top: '80%', left: '45%', delay: '1.5s', dur: '6.5s' },
          { size: 200, top: '10%', left: '40%', delay: '2.5s', dur: '10s' },
          { size: 110, top: '60%', left: '25%', delay: '0.3s', dur: '7s' },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              background: `radial-gradient(circle at 35% 35%, ${C.blue}55, ${C.blue}11)`,
              animation: `bubble-drift ${b.dur} ${b.delay} ease-in-out infinite`,
              border: `1px solid ${C.blue}33`,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Service pills */}
            <div className="fade-up flex flex-wrap gap-2 mb-8">
              {['Wash & Fold', 'Dry Clean', 'Iron', 'Delivery'].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${C.blue}18`, color: C.blueDark, border: `1px solid ${C.blue}33` }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <h1 className="fade-up-d1 text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6" style={{ color: C.blueDeep }}>
              Fresh &amp; Clean,<br />
              <span style={{ color: C.blue }}>Delivered.</span>
            </h1>

            <p className="fade-up-d2 text-lg font-light leading-relaxed mb-8 max-w-md" style={{ color: C.slate }}>
              Professional laundry, dry cleaning and ironing — collected from your door and returned fresh within 24 hours. Eco-friendly. No fuss.
            </p>

            <div className="fade-up-d3 flex flex-wrap gap-4 mb-10">
              <a
                href="#booking"
                className="px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-lg"
                style={{ backgroundColor: C.blue, color: C.white }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.blueDark; e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.blue; e.currentTarget.style.transform = 'scale(1)' }}
              >
                Schedule Pickup
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 border"
                style={{ borderColor: C.blue, color: C.blue, backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.blue}12` }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                View Prices
              </a>
            </div>

            {/* Stats */}
            <div className="fade-up-d3 flex gap-10">
              {[['4,200+', 'Happy Customers'], ['24h', 'Turnaround'], ['100%', 'Eco Products']].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold" style={{ color: C.blueDark }}>{val}</div>
                  <div className="text-xs font-medium uppercase tracking-wide" style={{ color: C.slate }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: spinning drum visual */}
          <div className="flex items-center justify-center relative">
            {/* Outer ring */}
            <div
              className="relative"
              style={{
                width: 340,
                height: 340,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${C.offWhite} 0%, #dbeafe 100%)`,
                boxShadow: `0 0 80px ${C.blue}33, 0 0 0 2px ${C.blue}44`,
              }}
            >
              {/* Spinning drum inner */}
              <div
                style={{
                  position: 'absolute',
                  inset: 32,
                  borderRadius: '50%',
                  border: `3px solid ${C.blue}`,
                  animation: 'spin-drum 4s linear infinite',
                  background: `conic-gradient(from 0deg, ${C.blue}22, ${C.blue}66, ${C.blue}11, ${C.blue}55)`,
                }}
              >
                {/* Drum holes */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    style={{
                      position: 'absolute',
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      backgroundColor: `${C.blue}88`,
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateY(-90px) translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </div>
              {/* Center icon */}
              <div
                className="absolute inset-0 flex items-center justify-center text-5xl"
                style={{ userSelect: 'none' }}
              >
                🫧
              </div>
            </div>
            {/* Floating mini-bubbles around drum */}
            {[
              { top: '-5%', left: '50%', size: 40, delay: '0s' },
              { top: '50%', left: '-3%', size: 28, delay: '1s' },
              { top: '90%', left: '30%', size: 34, delay: '0.5s' },
              { top: '15%', left: '95%', size: 22, delay: '1.8s' },
            ].map((b, i) => (
              <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: b.size,
                  height: b.size,
                  top: b.top,
                  left: b.left,
                  background: `radial-gradient(circle at 30% 30%, ${C.mint}99, ${C.mint}22)`,
                  animation: `float-bubble 3.5s ${b.delay} ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={C.white} />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES GRID
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: C.mint }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.blueDeep }}>Our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="laundry-service-card reveal-up rounded-2xl p-8 border"
                style={{
                  borderColor: `${svc.color}22`,
                  backgroundColor: `${svc.color}06`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: C.blueDeep }}>{svc.name}</h3>
                <p className="text-2xl font-light mb-3" style={{ color: svc.color }}>{svc.price}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS — 3 steps
          ═══════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionOff}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: C.blue }}>Process</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.blueDeep }}>Pickup &amp; Delivery</h2>
            <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: C.slate }}>Three simple steps from your door to fresh laundry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {steps.map((step, i) => (
              <div key={step.n} className="reveal-up text-center relative" style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px"
                    style={{ background: `linear-gradient(to right, ${C.blue}44, transparent)` }}
                  />
                )}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black"
                  style={{ backgroundColor: C.blue, color: C.white, boxShadow: `0 8px 24px ${C.blue}44` }}
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: C.blueDeep }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TURNAROUND TIMES
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: C.mint }}>Speed</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.blueDeep }}>Turnaround Times</h2>
          </div>
          <div className="reveal-up rounded-2xl overflow-hidden border" style={{ borderColor: `${C.blue}22` }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: C.blue }}>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Standard</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Express</th>
                </tr>
              </thead>
              <tbody>
                {turnarounds.map((row, i) => (
                  <tr
                    key={row.service}
                    style={{ backgroundColor: i % 2 === 0 ? C.white : `${C.blue}06` }}
                  >
                    <td className="px-6 py-4 text-sm font-medium" style={{ color: C.blueDeep }}>{row.service}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: C.slate }}>{row.time}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: C.mint }}>{row.express}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ECO-FRIENDLY
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <img
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop&q=90"
              alt="Eco-friendly laundry products"
              className="w-full rounded-3xl object-cover"
              style={{ height: 420 }}
            />
          </div>
          <div className="reveal-right">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: C.mint }}>Planet First</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: C.blueDeep }}>Eco-Friendly<br />by Default</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.slate }}>
              Every load is washed with plant-based, biodegradable detergents. Our machines run on 30% less water than household average. All packaging is 100% recyclable. We are certified carbon-neutral.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🌱', label: 'Plant-based detergents' },
                { icon: '💧', label: '30% less water' },
                { icon: '♻️', label: '100% recyclable packaging' },
                { icon: '0️⃣', label: 'Carbon neutral delivery' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: `${C.mint}11` }}>
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: C.blueDeep }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUBSCRIPTIONS
          ═══════════════════════════════════════ */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: C.mint }}>Save More</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.white }}>Subscription Plans</h2>
            <p className="mt-4 text-base" style={{ color: C.slateLight }}>Never think about laundry again.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {subscriptions.map((plan, i) => (
              <div
                key={plan.name}
                className="reveal-up rounded-2xl p-8 border"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  borderColor: plan.highlight ? C.mint : `${C.white}22`,
                  backgroundColor: plan.highlight ? `${C.mint}11` : `${C.white}08`,
                  boxShadow: plan.highlight ? `0 0 40px ${C.mint}22` : 'none',
                }}
              >
                {plan.highlight && (
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ backgroundColor: C.mint, color: C.dark }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1" style={{ color: C.white }}>{plan.name}</h3>
                <p className="text-3xl font-light mb-6" style={{ color: plan.highlight ? C.mint : C.blue }}>{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: C.slateLight }}>
                      <span style={{ color: C.mint }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="block w-full py-3 rounded-full text-center text-sm font-bold transition-all duration-300"
                  style={{
                    backgroundColor: plan.highlight ? C.mint : 'transparent',
                    color: plan.highlight ? C.dark : C.white,
                    border: plan.highlight ? 'none' : `1px solid ${C.white}44`,
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlight) e.currentTarget.style.backgroundColor = `${C.white}11`
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlight) e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Subscribe Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: C.blue }}>Ready?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: C.blueDeep }}>
              Schedule Your<br />Pickup
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.slate }}>
              We collect from your door and return fresh laundry within 24–48 hours. Confirm via WhatsApp in under a minute.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Hours', detail: 'Mon–Sat 7:00–20:00 · Sun 9:00–18:00' },
                { title: 'Coverage', detail: 'All London postcodes within M25' },
                { title: 'Minimum', detail: '3kg for Wash & Fold. No minimum for dry cleaning.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[36px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.blue}44` }} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: C.blue }}>{info.title}</p>
                    <p className="text-sm" style={{ color: C.slate }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 4200, label: 'orders completed this year' }}
              vertical="laundryos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionOff}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: C.mint }}>Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.blueDeep }}>What Customers Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: C.blue }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: C.blueDeep }}>Common Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="LaundryOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079461122" message="Hi! I'd like to schedule a laundry pickup with FreshPress" vertical="laundryos" />
    </div>
  )
}
