'use client'

import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type {
  SiteConfig,
  Review,
  FAQItem,
  BookingSlot,
} from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  navy: '#1e3a8a',
  navyDark: '#112266',
  navyDeep: '#0c1a55',
  lensBlue: '#e0f2fe',
  lensLight: '#f0f9ff',
  gold: '#d4a574',
  goldLight: '#e8c49a',
  white: '#ffffff',
  offWhite: '#f8faff',
  muted: '#64748b',
  mutedLight: '#94a3b8',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'ClearVision Opticians',
  description: 'Expert eye care — exams, frames & contact lenses',
  url: 'https://clearvision.example.com',
  locale: 'en',
  vertical: 'opticos',
  theme: 'classic',
  branding: { primaryColor: C.navy, accentColor: C.gold },
  contact: {
    phone: '+44 20 7123 4567',
    email: 'hello@clearvision.example.com',
    whatsapp: '+442071234567',
    address: '14 Kensington High Street, London W8 4PT',
    coordinates: { lat: 51.5008, lng: -0.1929 },
  },
  social: {
    instagram: 'clearvisionopticians',
    facebook: 'https://facebook.com/clearvisionopticians',
  },
  seo: {
    title: 'ClearVision Opticians | Eye Tests, Designer Frames & Contact Lenses',
    description: 'Expert eye care in the heart of London. Comprehensive eye tests, designer frames, contact lenses, and children\'s vision care.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    icon: '👁',
    name: 'Comprehensive Eye Exams',
    desc: 'Full OCT retinal scans and digital acuity testing. Detect cataracts, glaucoma, and macular degeneration early.',
    price: 'From £45',
  },
  {
    icon: '🔵',
    name: 'Contact Lenses',
    desc: 'Daily, monthly, and specialist toric lenses fitted by our optometrists. Free trial pair on first visit.',
    price: 'Trial free',
  },
  {
    icon: '👶',
    name: "Children's Vision",
    desc: 'NHS-funded eye tests for under-16s. Early detection of lazy eye, squints, and reading difficulties.',
    price: 'NHS funded',
  },
  {
    icon: '🚨',
    name: 'Emergency Eye Care',
    desc: 'Red eye, sudden vision loss, foreign body removal — same-day urgent appointments available.',
    price: 'Call now',
  },
]

const frameCategories = [
  {
    name: 'Designer',
    brands: ['Tom Ford', 'Gucci', 'Ray-Ban', 'Prada'],
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=400&fit=crop',
    price: 'From £180',
  },
  {
    name: 'Budget',
    brands: ['Value range', 'NHS frames', 'Own brand'],
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop',
    price: 'From £39',
  },
  {
    name: 'Sports',
    brands: ['Oakley', 'Nike Vision', 'Rudy Project'],
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: 'From £120',
  },
  {
    name: 'Sunglasses',
    brands: ['Maui Jim', 'Persol', 'Polaroid'],
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: 'From £79',
  },
]

const lensTechnologies = [
  {
    name: 'Blue-Light Filter',
    desc: 'Reduce digital eye strain from screens. Ideal for office workers and gamers spending 4+ hours at devices daily.',
    badge: 'Most popular',
  },
  {
    name: 'Progressive Lenses',
    desc: 'Seamless transition from near to far vision — no visible line. The modern alternative to bifocals.',
    badge: 'Premium',
  },
  {
    name: 'Transitions',
    desc: 'Automatically darken in sunlight, clear indoors. Protect your eyes without carrying separate sunglasses.',
    badge: 'Convenient',
  },
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Lead Optometrist, MCOptom',
    years: '12 years experience',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop',
  },
  {
    name: 'James Okafor',
    role: 'Dispensing Optician, FBDO',
    years: '8 years experience',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Contact Lens Specialist',
    years: '6 years experience',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Rachel T.',
    rating: 5,
    text: 'The most thorough eye test I\'ve ever had. Dr. Chen found early signs of dry eye syndrome that two previous opticians missed. Life-changing.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Marcus F.',
    rating: 5,
    text: 'Booked via WhatsApp and got a same-day appointment for an emergency. Staff were calm, professional, and got a piece of grit out of my eye safely.',
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Nadia K.',
    rating: 5,
    text: 'My son has been coming here since age 3. They\'re brilliant with children — patient, playful, and thorough. The virtual try-on made choosing frames actually fun.',
    date: '2026-08-01',
    source: 'trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Oliver B.',
    rating: 4,
    text: 'Excellent range of designer frames. The blue-light lenses have genuinely reduced my headaches after a full day at the screen. Would recommend.',
    date: '2026-08-03',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Amara L.',
    rating: 5,
    text: 'Switched from my NHS practice and will never go back. The OCT scan spotted something that\'s now being monitored by the hospital. Possibly caught early.',
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'How often should I have an eye test?',
    answer: 'Adults should have an eye test every two years, or annually if you wear glasses or contact lenses, are over 70, or have a family history of eye disease. Children should be tested annually.',
  },
  {
    question: 'Are eye tests free on the NHS?',
    answer: 'NHS-funded eye tests are available for children under 16, adults 60+, those on certain benefits, people with diabetes or glaucoma, and those at risk of glaucoma. We accept all NHS vouchers.',
  },
  {
    question: 'Can I try contact lenses if I\'ve never worn them before?',
    answer: 'Absolutely. We offer a free contact lens trial with a fitting appointment. Our specialists will find the right lens type for your prescription and lifestyle.',
  },
  {
    question: 'What is an OCT scan and do I need one?',
    answer: 'An OCT (Optical Coherence Tomography) scan creates a detailed 3D image of the back of your eye. We recommend it for all patients over 25 — it can detect early signs of glaucoma, macular degeneration, and diabetic eye disease years before symptoms appear.',
  },
  {
    question: 'How long does it take to get new glasses?',
    answer: 'Most single-vision glasses are ready in 5–7 working days. Progressive/varifocal lenses take 7–10 days. Express same-day glazing is available on selected frames and prescriptions.',
  },
  {
    question: 'Do you accept insurance and private health plans?',
    answer: 'Yes. We accept Bupa, AXA, Aviva, and Vitality health plans. We also accept all NHS optical vouchers. Contact us with your insurance details before booking and we\'ll confirm coverage.',
  },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 1 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 2 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '11:30', available: true, spotsLeft: 1 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 3 },
  { id: '5', date: new Date().toISOString().split('T')[0], time: '15:30', available: true, spotsLeft: 2 },
  { id: '6', date: new Date().toISOString().split('T')[0], time: '16:30', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://clearvision.example.com',
  name: 'ClearVision Opticians',
  description: 'Expert eye care — comprehensive eye exams, designer frames, contact lenses, and emergency eye care in London.',
  url: 'https://clearvision.example.com',
  telephone: '+44 20 7123 4567',
  email: 'hello@clearvision.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Kensington High Street',
    addressLocality: 'London',
    postalCode: 'W8 4PT',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5008, longitude: -0.1929 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '17:00' },
  ],
  priceRange: '££',
  sameAs: ['https://instagram.com/clearvisionopticians'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────
const S = {
  pageBg: { backgroundColor: C.white, color: C.navyDeep } as React.CSSProperties,
  sectionNavy: { backgroundColor: C.navy } as React.CSSProperties,
  sectionNavyDark: { backgroundColor: C.navyDark } as React.CSSProperties,
  sectionNavyDeep: { backgroundColor: C.navyDeep } as React.CSSProperties,
  sectionLight: { backgroundColor: C.lensLight } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  mutedLight: { color: C.mutedLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.navyDeep}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.gold}33` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Lens logo mark */}
          <div style={{ position: 'relative', width: 32, height: 32 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              border: `2px solid ${C.gold}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: C.gold }} />
            </div>
          </div>
          <span style={{ color: C.white, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 300 }}>
            ClearVision
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Frames', 'Team', 'Book'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.mutedLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.gold
              e.currentTarget.style.color = C.navyDeep
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.gold
            }}
          >
            Book Eye Test
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function OpticOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="scroll-progress" style={{ background: C.gold }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Lens Focus Effect
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: C.navyDeep }}
      >
        {/* Lens radial gradient — sharp center, blurred edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 55% 55% at 50% 50%, ${C.lensBlue}18 0%, ${C.navy}44 40%, ${C.navyDeep} 75%)`,
          }}
        />

        {/* Outer blur ring */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 90% 90% at 50% 50%, transparent 50%, ${C.navyDeep}cc 100%)`,
          }}
        />

        {/* Eye chart decorative — far right */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-10 select-none pointer-events-none"
          style={{ color: C.white, fontFamily: 'monospace' }}
        >
          {['E', 'FP', 'TOZ', 'LPED', 'PECFD', 'EDFCZP', 'FELOPZD'].map((row, i) => (
            <div key={i} style={{ fontSize: `${2.2 - i * 0.25}rem`, letterSpacing: '0.3em', fontWeight: 700 }}>
              {row}
            </div>
          ))}
        </div>

        {/* Floating frame silhouettes */}
        <style>{`
          @keyframes frameFloat1 {
            0%, 100% { transform: translateY(0px) rotate(-12deg); }
            50% { transform: translateY(-18px) rotate(-10deg); }
          }
          @keyframes frameFloat2 {
            0%, 100% { transform: translateY(0px) rotate(8deg); }
            50% { transform: translateY(-22px) rotate(10deg); }
          }
          @keyframes frameFloat3 {
            0%, 100% { transform: translateY(0px) rotate(-3deg); }
            50% { transform: translateY(-14px) rotate(-1deg); }
          }
          @keyframes lensShimmer {
            0%, 100% { opacity: 0.06; }
            50% { opacity: 0.12; }
          }
        `}</style>

        {/* Frame silhouette 1 — top left */}
        <div
          className="absolute top-24 left-16 hidden md:block pointer-events-none"
          style={{ animation: 'frameFloat1 6s ease-in-out infinite' }}
        >
          <div style={{
            width: 120, height: 44, borderRadius: 8,
            border: `2px solid ${C.gold}44`,
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: '50%', left: -30, width: 30, height: 2, backgroundColor: `${C.gold}33`, transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', top: '50%', right: -30, width: 30, height: 2, backgroundColor: `${C.gold}33`, transform: 'translateY(-50%)' }} />
          </div>
        </div>

        {/* Frame silhouette 2 — bottom right */}
        <div
          className="absolute bottom-32 right-32 hidden md:block pointer-events-none"
          style={{ animation: 'frameFloat2 7.5s ease-in-out infinite' }}
        >
          <div style={{
            width: 90, height: 90, borderRadius: '50%',
            border: `2px solid ${C.lensBlue}33`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', border: `1px solid ${C.lensBlue}22` }} />
          </div>
        </div>

        {/* Frame silhouette 3 — mid left */}
        <div
          className="absolute top-1/2 left-24 hidden lg:block pointer-events-none"
          style={{ animation: 'frameFloat3 8s ease-in-out infinite' }}
        >
          <div style={{
            width: 80, height: 32, borderRadius: 4,
            border: `1.5px solid ${C.gold}22`,
          }} />
        </div>

        {/* Central content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto stagger-children">
          <p
            className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8"
            style={{ color: C.gold }}
          >
            Kensington &middot; London &middot; Est. 2008
          </p>

          <h1 className="mb-10">
            {['See the', 'World', 'Clearly.'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block font-extralight leading-[0.9] tracking-tight"
                style={{
                  color: i === 1 ? C.gold : C.white,
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  animationDelay: `${i * 0.15}s`,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto"
            style={{ color: C.mutedLight, animationDelay: '0.5s' }}
          >
            State-of-the-art OCT eye examinations. Over 800 frames in-store.
            Contact lens fitting by our experienced optometrists.
          </p>

          {/* Stats bar */}
          <div
            className="reveal-up flex flex-wrap justify-center gap-8 mb-14"
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { n: '4,200+', label: 'Patients' },
              { n: 'MCOptom', label: 'Qualified' },
              { n: '800+', label: 'Frames' },
              { n: 'NHS', label: 'Accepted' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div style={{ color: C.gold, fontSize: '1.5rem', fontWeight: 300 }}>{s.n}</div>
                <div style={{ color: C.mutedLight, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div
            className="reveal-up flex flex-wrap justify-center gap-4"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href="#book"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.gold, color: C.gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.gold
                e.currentTarget.style.color = C.navyDeep
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.gold
              }}
            >
              Book Eye Test
            </a>
            <a
              href="#frames"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: C.mutedLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
            >
              View Frames
            </a>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={C.white} />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionLight}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              What We Offer
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.navyDeep }}>
              Eye Care Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="reveal-up group cursor-default rounded-2xl p-8 transition-all duration-500"
                style={{
                  backgroundColor: C.white,
                  border: `1px solid ${C.navy}11`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: '0 4px 24px rgba(30,58,138,0.06)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 48px rgba(30,58,138,0.15)`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(30,58,138,0.06)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 className="text-lg font-light mb-3" style={{ color: C.navyDeep }}>{s.name}</h3>
                <p className="text-sm font-light leading-relaxed mb-4" style={S.muted}>{s.desc}</p>
                <span
                  className="text-xs tracking-[0.2em] uppercase font-medium"
                  style={{ color: C.gold }}
                >
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. FRAMES COLLECTION
          ═══════════════════════════════════════ */}
      <section id="frames" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              800+ Frames In-Store
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.navyDeep }}>
              Frames Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {frameCategories.map((cat, i) => (
              <div
                key={cat.name}
                className="reveal-up relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s`, height: '300px' }}
              >
                <img
                  src={cat.image}
                  alt={`${cat.name} frames`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${C.navyDeep}ee 0%, ${C.navyDeep}55 50%, transparent 100%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: C.gold }}>{cat.price}</p>
                  <h3 className="text-2xl font-extralight mb-2" style={{ color: C.white }}>{cat.name}</h3>
                  <p className="text-xs tracking-[0.15em]" style={{ color: C.mutedLight }}>
                    {cat.brands.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. LENS TECHNOLOGY
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionNavyDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              Advanced Optics
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.white}>
              Lens Technology
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {lensTechnologies.map((lt, i) => (
              <div
                key={lt.name}
                className="reveal-up rounded-2xl p-10"
                style={{
                  background: `linear-gradient(135deg, ${C.navy}88, ${C.navyDeep})`,
                  border: `1px solid ${C.gold}22`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Lens graphic */}
                <div style={{ marginBottom: '2rem', position: 'relative', width: 64, height: 64 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    border: `2px solid ${C.gold}66`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `radial-gradient(circle, ${C.lensBlue}18, transparent)`,
                  }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: `${C.gold}33` }} />
                  </div>
                </div>
                <div
                  className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: `${C.gold}22`, color: C.gold, border: `1px solid ${C.gold}33` }}
                >
                  {lt.badge}
                </div>
                <h3 className="text-xl font-light mb-4" style={S.white}>{lt.name}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: C.mutedLight }}>{lt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. VIRTUAL TRY-ON CTA
          ═══════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 px-6 md:px-16 text-center"
        style={{ background: `linear-gradient(135deg, ${C.lensBlue}, ${C.white})` }}
      >
        <div className="max-w-3xl mx-auto reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.navy }}>New Feature</p>
          <h2 className="text-3xl md:text-5xl font-extralight mb-6" style={{ color: C.navyDeep }}>
            Virtual Frame Try-On
          </h2>
          <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
            Upload your photo and try on any of our 800+ frames from the comfort of your home.
            Find your perfect fit before you visit the store.
          </p>
          <button
            className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
            style={{ borderColor: C.navy, color: C.navy }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.navy
              e.currentTarget.style.color = C.white
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.navy
            }}
          >
            Try Frames Virtually
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TEAM
          ═══════════════════════════════════════ */}
      <section id="team" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>
              Our Specialists
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.navyDeep }}>
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-children">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal-up text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative mb-6 mx-auto" style={{ width: 180, height: 180 }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: `3px solid ${C.gold}66` }}
                  />
                </div>
                <h3 className="text-xl font-light mb-1" style={{ color: C.navyDeep }}>{member.name}</h3>
                <p className="text-sm tracking-[0.1em] mb-2" style={{ color: C.gold }}>{member.role}</p>
                <p className="text-xs" style={S.muted}>{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. NHS & INSURANCE
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-16" style={S.sectionNavyDeep}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={S.gold}>Accepted Plans</p>
            <h2 className="text-2xl md:text-3xl font-extralight" style={S.white}>NHS &amp; Private Insurance Welcome</h2>
          </div>
          <div className="reveal-right flex flex-wrap gap-4">
            {['NHS Vouchers', 'Bupa', 'AXA Health', 'Aviva', 'Vitality'].map((plan) => (
              <div
                key={plan}
                className="px-5 py-3 rounded-full text-sm font-light tracking-wide"
                style={{ border: `1px solid ${C.gold}44`, color: C.gold }}
              >
                {plan}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionLight}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Patient Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.navyDeep }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.white }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.navyDeep }}>
              Frequently Asked
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. BOOKING
          ═══════════════════════════════════════ */}
      <section id="book" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={S.sectionNavyDark}>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top right, ${C.gold}11, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Appointments</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.white}>
              Book Your<br />Eye Test
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mutedLight }}>
              Most tests take 30&ndash;45 minutes. Same-day appointments often available.
              Emergency slots kept free daily.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Opening Hours', detail: 'Mon–Fri 9:00–18:00 | Sat 9:00–17:00' },
                { title: 'NHS Patients', detail: 'Free test if eligible. Bring your NHS card.' },
                { title: 'Location', detail: '14 Kensington High Street, W8 4PT. High St Ken tube (1 min).' },
                { title: 'Children', detail: 'Under-16 eye tests are NHS-funded. No charge.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.gold}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{info.title}</p>
                    <p className="text-sm font-light" style={{ color: C.mutedLight }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 214, label: 'eye tests booked this month' }}
              vertical="opticos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="+442071234567"
        message="Hi! I'd like to book an eye test at ClearVision"
        vertical="opticos"
      />
    </div>
  )
}
