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
  trustBlue: '#1e40af',
  trustBlueDark: '#1e3a8a',
  trustBlueMid: '#2563eb',
  white: '#ffffff',
  offWhite: '#f8fafc',
  lightBlue: '#eff6ff',
  secGreen: '#16a34a',
  secGreenLight: '#22c55e',
  grey: '#64748b',
  greyLight: '#94a3b8',
  greyDark: '#1e293b',
  silver: '#e2e8f0',
} as const

const S = {
  pageBg: { backgroundColor: C.offWhite, color: C.greyDark } as React.CSSProperties,
  blue: { color: C.trustBlue } as React.CSSProperties,
  green: { color: C.secGreen } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.grey } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Meridian Insurance',
  description: 'Independent insurance brokers — protection you can trust',
  url: 'https://meridianinsurance.example.com',
  locale: 'en',
  vertical: 'insureos',
  theme: 'light',
  branding: { primaryColor: C.trustBlue, accentColor: C.secGreen },
  contact: {
    phone: '+44 1234 567 890',
    email: 'advice@meridianinsurance.com',
    whatsapp: '+441234567890',
    address: '12 Market Square, Bristol BS1 1EQ',
    coordinates: { lat: 51.4545, lng: -2.5879 },
  },
  social: {
    instagram: 'meridianinsurance',
    facebook: 'https://facebook.com/meridianinsurance',
  },
  seo: {
    title: 'Meridian Insurance — Protection You Can Trust',
    description: 'Independent insurance brokers with 50 years of expertise. 98% claims paid.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const insuranceTypes = [
  { name: 'Home', from: '£15/mo', icon: '🏠', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', desc: 'Buildings & contents cover. New-for-old replacement, accidental damage, and legal expenses included.', popular: true },
  { name: 'Motor', from: '£25/mo', icon: '🚗', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop', desc: 'Comprehensive, third party, fire & theft. Optional breakdown cover and courtesy car included.' },
  { name: 'Business', from: '£40/mo', icon: '🏢', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', desc: 'Public liability, employers\' liability, professional indemnity, and commercial property in one policy.' },
  { name: 'Life', from: '£12/mo', icon: '💛', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&h=400&fit=crop', desc: 'Level term, decreasing term, and whole-of-life policies. Critical illness cover available as add-on.' },
  { name: 'Travel', from: '£5/trip', icon: '✈️', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop', desc: 'Single trip, multi-trip annual, and backpacker policies. Medical, cancellation, and gadget cover.' },
  { name: 'Pet', from: '£8/mo', icon: '🐾', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop', desc: 'Lifetime and time-limited vet fee cover for dogs and cats. Dental, third party liability included.' },
]

const claimsProcess = [
  { step: '01', title: 'Call or Message Us', desc: 'Phone, WhatsApp, or online form — 24/7 for emergencies.' },
  { step: '02', title: 'We Register Your Claim', desc: 'Assigned a dedicated claims handler within 2 hours.' },
  { step: '03', title: 'Assessment', desc: 'Our assessor reviews documents and arranges any inspection needed.' },
  { step: '04', title: 'Payment or Settlement', desc: 'Most claims settled within 5 working days. BACS or cheque.' },
]

const partners = ['AXA', 'Aviva', 'Zurich', 'RSA', 'LV=', 'Allianz', 'Hiscox', 'NFU Mutual']

const reviews: Review[] = [
  { id: '1', author: 'Patricia H.', rating: 5, text: 'Had a burst pipe and called Meridian at 11pm. Claims handler called back in 20 minutes. New kitchen fitted within the week. Unbelievable service.', date: '2026-07-12', source: 'google', verified: true },
  { id: '2', author: 'Robert C.', rating: 5, text: 'They searched 30+ providers for my van fleet. Saved £2,400 on our annual premium. The advice was genuinely independent — not just the highest commission product.', date: '2026-07-24', source: 'google', verified: true },
  { id: '3', author: 'Janet M.', rating: 5, text: 'As an accountant running my own practice, the PI cover advice was invaluable. They explained things in plain English — no jargon, no pressure.', date: '2026-08-01', source: 'google', verified: true },
  { id: '4', author: 'Darren S.', rating: 4, text: 'Switched home and contents after 20 years with the same insurer. Better cover, lower price. I only wish I\'d come to Meridian sooner.', date: '2026-07-19', source: 'tripadvisor', verified: true },
  { id: '5', author: 'Emma W.', rating: 5, text: 'My cat needed an emergency operation costing £3,800. Meridian\'s pet policy paid out 100% within 5 days. Worth every penny.', date: '2026-07-30', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Are you an insurer or a broker?', answer: 'We are an independent broker. We search across 40+ insurers to find the best cover for your needs — we are not tied to any single provider.' },
  { question: 'How quickly can I get a quote?', answer: 'Most quotes take 10-15 minutes over the phone or online. For complex business insurance, we may need 24 hours to approach specialist underwriters.' },
  { question: 'What should I do if I need to make a claim?', answer: 'Call our 24/7 claims line or send a WhatsApp message. We handle everything on your behalf — you don\'t need to deal with the insurer directly.' },
  { question: 'Can I combine multiple policies?', answer: 'Yes — we offer multi-policy discounts and can combine home, motor, and life cover in a single review. Many clients save 15-25% by consolidating.' },
  { question: 'Do you charge a broker fee?', answer: 'We are remunerated by commission from insurers. For commercial policies, a transparent arrangement fee may apply — always disclosed upfront.' },
  { question: 'Can I change or cancel my policy mid-term?', answer: 'Yes. Most policies can be amended or cancelled at any time. We handle all changes directly with the insurer. Pro-rata refunds apply in most cases.' },
  { question: 'Do you offer advice for businesses?', answer: 'Absolutely. We have a dedicated commercial team covering all business classes from sole traders to large SMEs. PI, D&O, cyber, and fleet all available.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:30', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '16:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const insureJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Meridian Insurance',
  description: 'Independent insurance brokers with 50 years of expertise.',
  url: 'https://meridianinsurance.example.com',
  telephone: '+44 1234 567 890',
  email: 'advice@meridianinsurance.com',
  foundingDate: '1974',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Market Square',
    addressLocality: 'Bristol',
    postalCode: 'BS1 1EQ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4545, longitude: -2.5879 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1840' },
}

const insureFaqJsonLd = {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ borderBottom: `1px solid ${C.silver}`, boxShadow: '0 1px 8px rgba(30,64,175,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center text-sm font-bold" style={{ backgroundColor: C.trustBlue, color: C.white, borderRadius: '4px' }}>M</div>
          <span className="font-medium tracking-tight text-base" style={S.blue}>Meridian Insurance</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Products', 'Claims', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors duration-200"
              style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.trustBlue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.grey)}
            >
              {item}
            </a>
          ))}
          <a href="#quote"
            className="px-6 py-2.5 text-sm font-medium transition-all duration-300"
            style={{ backgroundColor: C.trustBlue, color: C.white, borderRadius: '4px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.trustBlueMid)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.trustBlue)}
          >
            Get a Quote
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
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.trustBlueDark} 0%, ${C.trustBlue} 50%, #3b82f6 100%)` }}>
      <style>{`
        @keyframes shieldCheck {
          0% { opacity: 0; stroke-dashoffset: 50; }
          50% { opacity: 1; }
          100% { opacity: 1; stroke-dashoffset: 0; }
        }
        @keyframes trustPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4); }
          50% { box-shadow: 0 0 0 16px rgba(22, 163, 74, 0); }
        }
        @keyframes slideInStat {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes coverPillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .check-path {
          stroke-dasharray: 50;
          animation: shieldCheck 0.8s ease-out 1.2s forwards;
          opacity: 0;
        }
        .trust-pulse { animation: trustPulse 2.5s ease-in-out infinite 2s; }
        .stat-slide { animation: slideInStat 0.5s ease-out forwards; opacity: 0; }
        .stat-slide-1 { animation-delay: 0.8s; }
        .stat-slide-2 { animation-delay: 1.0s; }
        .stat-slide-3 { animation-delay: 1.2s; }
        .pill-float { animation: coverPillFloat 3s ease-in-out infinite; }
        .pill-float-2 { animation: coverPillFloat 3s ease-in-out infinite; animation-delay: 1s; }
        .pill-float-3 { animation: coverPillFloat 3s ease-in-out infinite; animation-delay: 2s; }
      `}</style>

      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px]" style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          borderRadius: '50%', transform: 'translate(30%, -30%)',
        }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px]" style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          borderRadius: '50%', transform: 'translate(-30%, 30%)',
        }} />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={`${i * 10}%`} y1="0" x2={`${i * 10}%`} y2="100%" stroke="white" strokeWidth="1" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="0" y1={`${i * 12.5}%`} x2="100%" y2={`${i * 12.5}%`} stroke="white" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: content */}
        <div className="stagger-children">
          <p className="reveal-clip-up text-xs tracking-[0.4em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Independent Brokers &middot; Since 1974
          </p>

          <h1 className="mb-6">
            {['Protection', 'You Can', 'Trust.'].map((w, i) => (
              <span key={w} className="reveal-clip-up block font-light leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: C.white, animationDelay: `${i * 0.12}s` }}>
                {w}
              </span>
            ))}
          </h1>

          <p className="reveal-up text-lg font-light leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.75)', animationDelay: '0.4s' }}>
            Independent advice. Whole-of-market access. Local office, real people.
            We compare 40+ insurers so you don&rsquo;t have to.
          </p>

          {/* Cover type pills */}
          <div className="reveal-up flex flex-wrap gap-3 mb-10" style={{ animationDelay: '0.5s' }}>
            {['Home', 'Motor', 'Business', 'Life', 'Travel', 'Pet'].map((type, i) => (
              <span key={type}
                className={`text-xs tracking-wider uppercase px-4 py-2 font-medium cursor-pointer transition-all duration-300 ${i === 0 ? 'pill-float' : i === 1 ? 'pill-float-2' : 'pill-float-3'}`}
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: C.white, borderRadius: '100px', border: '1px solid rgba(255,255,255,0.25)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
              >
                {type}
              </span>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
            <a href="#quote"
              className="px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300"
              style={{ backgroundColor: C.secGreen, color: C.white, borderRadius: '4px' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.secGreenLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.secGreen)}
            >
              Get a Free Quote
            </a>
            <a href="#products"
              className="border px-10 py-4 text-sm tracking-[0.15em] uppercase font-light transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: C.white, borderRadius: '4px' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
            >
              View Products
            </a>
          </div>
        </div>

        {/* Right: shield icon + trust stats */}
        <div className="reveal-right flex flex-col items-center">
          {/* Animated shield */}
          <div className="relative mb-12">
            <svg width="200" height="220" viewBox="0 0 200 220">
              <path d="M 100,10 L 185,48 L 185,110 C 185,160 100,210 100,210 C 100,210 15,160 15,110 L 15,48 Z"
                fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              <path d="M 100,10 L 185,48 L 185,110 C 185,160 100,210 100,210 C 100,210 15,160 15,110 L 15,48 Z"
                fill="rgba(255,255,255,0.05)" />
              <path className="check-path trust-pulse" d="M 65,110 L 90,135 L 140,85"
                fill="none" stroke={C.secGreen} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="trust-pulse w-16 h-16 flex items-center justify-center" style={{ backgroundColor: `${C.secGreen}22`, borderRadius: '50%' }}>
                <span className="text-3xl"></span>
              </div>
            </div>
          </div>

          {/* Trust stats bar */}
          <div className="w-full grid grid-cols-3 gap-4">
            {[
              { n: '50', suffix: ' Years', l: 'In Business' },
              { n: '100K', suffix: '+', l: 'Policies Written' },
              { n: '98%', suffix: '', l: 'Claims Paid' },
            ].map((s, i) => (
              <div key={s.l}
                className={`stat-slide stat-slide-${i + 1} text-center p-4`}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="text-2xl font-extralight mb-1" style={S.white}>{s.n}<span style={{ color: C.secGreenLight, fontSize: '0.9em' }}>{s.suffix}</span></div>
                <div className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function InsurancePage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insureJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insureFaqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.secGreen }} />

      <Navbar />
      <Hero />

      {/* ═══════════════════════════════════════
          PRODUCTS
          ═══════════════════════════════════════ */}
      <section id="products" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>What We Cover</p>
            <h2 className="text-4xl md:text-6xl font-light" style={{ color: C.greyDark }}>Insurance Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {insuranceTypes.map((type, i) => (
              <div key={type.name}
                className="reveal-up group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${i * 0.08}s`, borderRadius: '8px', border: `1px solid ${C.silver}`, background: C.white }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={type.image} alt={type.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.trustBlueDark}cc, transparent 60%)` }} />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{type.icon}</span>
                    {type.popular && (
                      <span className="text-xs font-medium px-2 py-0.5" style={{ backgroundColor: C.secGreen, color: C.white, borderRadius: '4px' }}>Most Popular</span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold" style={{ color: C.greyDark }}>{type.name} Insurance</h3>
                    <div className="text-right">
                      <div className="text-xs" style={S.muted}>from</div>
                      <div className="text-lg font-semibold" style={S.blue}>{type.from}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={S.muted}>{type.desc}</p>
                  <a href="#quote"
                    className="block text-center py-2.5 text-sm font-medium transition-all duration-300"
                    style={{ backgroundColor: C.lightBlue, color: C.trustBlue, borderRadius: '4px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.trustBlue; e.currentTarget.style.color = C.white; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.lightBlue; e.currentTarget.style.color = C.trustBlue; }}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: C.lightBlue }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <h2 className="text-3xl md:text-4xl font-light" style={{ color: C.greyDark }}>Why Choose Meridian?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              { icon: '🔍', title: 'Independent Advice', desc: 'We are not tied to any insurer. We search the whole market to find the right cover at the right price for you.' },
              { icon: '⚡', title: 'Fast Claims', desc: 'Dedicated claims handlers answer within 2 hours. 98% of claims settled within 5 working days.' },
              { icon: '🏢', title: 'Local Office', desc: 'Real people, local knowledge. Pop in to our Bristol office or call us — no automated phone trees.' },
            ].map((p, i) => (
              <div key={p.title} className="reveal-up text-center p-8 bg-white" style={{ animationDelay: `${i * 0.1}s`, borderRadius: '8px', boxShadow: '0 2px 12px rgba(30,64,175,0.06)' }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: C.greyDark }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={S.muted}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLAIMS PROCESS
          ═══════════════════════════════════════ */}
      <section id="claims" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Simple &amp; Fast</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.greyDark }}>How to Make a Claim</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 stagger-children">
            {claimsProcess.map((step, i) => (
              <div key={step.step} className="reveal-up relative" style={{ animationDelay: `${i * 0.1}s` }}>
                {i < claimsProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px" style={{ backgroundColor: C.silver, zIndex: 0 }} />
                )}
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: C.trustBlue, color: C.white, borderRadius: '50%' }}>{step.step}</div>
                  <h3 className="font-semibold mb-2" style={{ color: C.greyDark }}>{step.title}</h3>
                  <p className="text-sm" style={S.muted}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARTNERS
          ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ backgroundColor: C.lightBlue }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs tracking-[0.3em] uppercase mb-8" style={S.muted}>We Access These Insurers &amp; More</p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <div key={p} className="px-6 py-3 font-semibold text-sm bg-white"
                style={{ borderRadius: '4px', color: C.grey, border: `1px solid ${C.silver}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSTANT QUOTE CTA
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ backgroundColor: C.trustBlue }}>
        <div className="max-w-3xl mx-auto text-center reveal-up">
          <h2 className="text-3xl md:text-5xl font-light mb-4" style={S.white}>Ready for Better Cover?</h2>
          <p className="text-lg font-light mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Free, no-obligation quote in 15 minutes. We compare 40+ insurers.
          </p>
          <a href="#quote"
            className="inline-block px-12 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
            style={{ backgroundColor: C.secGreen, color: C.white, borderRadius: '4px' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.secGreenLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.secGreen)}
          >
            Get My Free Quote
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          QUOTE BOOKING
          ═══════════════════════════════════════ */}
      <section id="quote" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Book a Consultation</p>
            <h2 className="text-4xl font-light mb-6" style={{ color: C.greyDark }}>Get Your<br />Free Quote</h2>
            <p className="leading-relaxed mb-8" style={S.muted}>
              Speak to one of our advisers for a no-obligation review.
              We&rsquo;ll compare the market and explain your options in plain English.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Office Hours', detail: 'Mon–Fri 09:00–17:30 | Sat 09:00–13:00' },
                { label: '24/7 Claims', detail: 'Emergency claims line always open' },
                { label: 'Phone', detail: '+44 1234 567 890' },
                { label: 'Address', detail: '12 Market Square, Bristol BS1 1EQ' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.trustBlue}33` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.blue}>{info.label}</p>
                    <p className="text-sm" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 241, label: 'quotes requested this month' }}
              vertical="insureos" onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.greyDark }}>What Our Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blue}>Common Questions</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.greyDark }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="InsuranceOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441234567890" message="Hi Meridian! I'd like a free insurance quote" vertical="insureos" />
    </div>
  )
}
