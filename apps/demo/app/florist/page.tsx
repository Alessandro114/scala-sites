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
  blush: '#f9cdd3',
  blushDeep: '#f0b0ba',
  blushLight: '#fde8eb',
  sage: '#8fbc8f',
  sageDark: '#5a8a5a',
  sageMid: '#7aaa7a',
  cream: '#fdf8f5',
  creamDark: '#f0e8e0',
  forest: '#2d5016',
  forestMid: '#3d6820',
  muted: '#8a7878',
  dimmed: '#b09898',
  white: '#ffffff',
} as const

const siteConfig: SiteConfig = {
  name: 'Petal & Stem',
  description: 'Seasonal bouquets, wedding flowers and same-day delivery in London',
  url: 'https://petalandstem.example.com',
  locale: 'en',
  vertical: 'floristos',
  theme: 'classic',
  branding: { primaryColor: C.forest, accentColor: C.blush },
  contact: {
    phone: '+44 20 7946 0567',
    email: 'hello@petalandstem.example.com',
    whatsapp: '+442079460567',
    address: '8 Royal Hospital Road, Chelsea, London SW3 4HT',
    coordinates: { lat: 51.4875, lng: -0.1611 },
  },
  social: { instagram: 'petalandstem_london', facebook: 'https://facebook.com/petalandstem' },
  seo: {
    title: 'Petal & Stem — Flowers for Every Moment.',
    description: 'Seasonal bouquets, wedding flowers, same-day delivery. Chelsea, London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const occasions = [
  { name: 'Birthday', emoji: '🎂', desc: 'Joyful, bright and celebratory. Built to make them smile the moment they open the door.', from: '£35' },
  { name: 'Sympathy', emoji: '🕊️', desc: 'Gentle whites and soft tones. Dignified and heartfelt, arranged with care.', from: '£45' },
  { name: 'Anniversary', emoji: '❤️', desc: 'Romantic roses and lush peonies. Timeless combinations for lasting love.', from: '£55' },
  { name: 'Wedding', emoji: '💍', desc: 'Bridal bouquets, table centrepieces and venue dressing. Full service available.', from: '£POA' },
  { name: 'New Baby', emoji: '🌸', desc: 'Soft pastels and gentle fragrance. A perfect welcome for a new arrival.', from: '£40' },
  { name: 'Thank You', emoji: '✨', desc: 'Warm and considered. Because some words are better said with flowers.', from: '£35' },
]

const bouquets = [
  { name: 'Garden Party', desc: 'English roses, sweet peas, snapdragons', price: '£35', img: 'https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=400&h=500&fit=crop' },
  { name: 'Blush Romance', desc: 'Peonies, garden roses, ranunculus', price: '£55', img: 'https://images.unsplash.com/photo-1487530811015-780c53a9f71b?w=400&h=500&fit=crop' },
  { name: 'Wildflower Meadow', desc: 'Cornflowers, cosmos, grasses', price: '£40', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop' },
  { name: 'Classic White', desc: 'Lilies, freesia, white roses', price: '£45', img: 'https://images.unsplash.com/photo-1486551937199-baf066858de7?w=400&h=500&fit=crop' },
  { name: 'Autumn Harvest', desc: 'Dahlias, chrysanthemums, berries', price: '£50', img: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400&h=500&fit=crop' },
  { name: 'Tropical Dream', desc: 'Birds of paradise, heliconias, anthuriums', price: '£65', img: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=500&fit=crop' },
  { name: 'Spring Morning', desc: 'Tulips, hyacinths, daffodils', price: '£38', img: 'https://images.unsplash.com/photo-1589194853617-f5bc58f7f7c6?w=400&h=500&fit=crop' },
  { name: 'Bespoke Creation', desc: 'Designed around your brief', price: 'From £60', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=500&fit=crop' },
]

const subscriptions = [
  { plan: 'Weekly', price: '£25/delivery', saving: 'Best for flower lovers', features: ['Fresh seasonal bouquet every week', 'Same-day delivery slot', 'Seasonal surprise rotation', 'Pause anytime, no penalty'] },
  { plan: 'Bi-Weekly', price: '£22/delivery', saving: 'Most popular', features: ['Delivery every 2 weeks', 'Larger bouquet size', 'Grower notes included', 'Free vase on signup'], highlight: true },
  { plan: 'Monthly', price: '£20/delivery', saving: 'Best value per delivery', features: ['Monthly luxury arrangement', 'Statement seasonal piece', 'Priority slot booking', 'Complimentary ribbon upgrade'] },
]

const weddingServices = [
  { service: 'Bridal Bouquet', desc: 'Hand-tied, individually designed for the bride.' },
  { service: 'Bridesmaids', desc: 'Coordinated smaller bouquets and buttonholes.' },
  { service: 'Ceremony Flowers', desc: 'Arch, aisle, pew ends and signing table.' },
  { service: 'Reception Tables', desc: 'Centrepieces from bud vases to statement towers.' },
  { service: 'Venue Dressing', desc: 'Full installation and collection service.' },
  { service: 'Consultation', desc: '1-hour free meeting to plan your floral story.' },
]

const reviews: Review[] = [
  { id: '1', author: 'Olivia S.', rating: 5, text: "I've been on the bi-weekly subscription for three months and every delivery has been better than the last. The grower notes are a beautiful touch — I feel like I'm connected to where the flowers came from.", date: '2026-07-20', source: 'google', verified: true },
  { id: '2', author: 'James D.', rating: 5, text: "Ordered a birthday bouquet via WhatsApp at 8am, delivered by noon. My wife was speechless. The Garden Party arrangement was gorgeous — not a single wilting stem after 10 days.", date: '2026-08-01', source: 'google', verified: true },
  { id: '3', author: 'Sophie R.', rating: 5, text: "Petal & Stem did all our wedding flowers. The ceremony arch alone was worth the entire budget. Sarah understood my vision from our first meeting and delivered something beyond anything I had imagined.", date: '2026-07-12', source: 'trustpilot', verified: true },
  { id: '4', author: 'Emma T.', rating: 5, text: "Sent condolence flowers when my colleague lost her father. She told me they were the most beautiful she received. Handling sensitive orders like this with such care says everything about these people.", date: '2026-07-25', source: 'google', verified: true },
  { id: '5', author: 'Priya M.', rating: 5, text: "The seasonal surprises in the weekly sub are genuinely exciting. I never know what's coming and that's half the joy. World-class floristry at a price that doesn't hurt.", date: '2026-08-04', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do you offer same-day delivery?', answer: 'Yes, for orders placed before 11am we offer same-day delivery across London. Next-day delivery is available for orders placed any time.' },
  { question: 'What areas do you deliver to?', answer: 'We deliver across all London boroughs. For orders outside Zone 4, there may be an additional delivery charge. We can also arrange national courier for special occasions.' },
  { question: 'How long do your bouquets last?', answer: 'With proper care — fresh water daily, away from direct heat — our bouquets typically last 7–14 days. We include care cards with every delivery.' },
  { question: 'Can I pause or cancel my subscription?', answer: 'Yes, pause or cancel anytime with no penalty. Just let us know 48 hours before your next delivery date via WhatsApp or email.' },
  { question: 'How far in advance should I book wedding flowers?', answer: 'We recommend booking at least 6 months in advance for weddings, especially for summer and autumn dates. Consultations are free and there is no obligation to book.' },
  { question: 'Do you cater to vegan preferences?', answer: 'Yes, all our arrangements are plant-based by nature. We also use twine and ribbon trimmings instead of foam in many arrangements on request.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '15:00', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '17:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: 'Petal & Stem',
  description: 'Seasonal bouquets, wedding flowers and same-day delivery in Chelsea, London.',
  url: 'https://petalandstem.example.com',
  telephone: '+44 20 7946 0567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8 Royal Hospital Road, Chelsea',
    addressLocality: 'London',
    postalCode: 'SW3 4HT',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4875, longitude: -0.1611 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '342' },
  priceRange: '££',
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
  page: { backgroundColor: C.cream, color: C.forest } as React.CSSProperties,
  cream: { backgroundColor: C.cream } as React.CSSProperties,
  blush: { backgroundColor: C.blushLight } as React.CSSProperties,
  sage: { backgroundColor: '#e8f0e8' } as React.CSSProperties,
  forest: { color: C.forest } as React.CSSProperties,
  sage_text: { color: C.sageDark } as React.CSSProperties,
  blush_text: { color: C.blushDeep } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  dimmed: { color: C.dimmed } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  FLOATING PETALS ANIMATION
// ═══════════════════════════════════════════════
function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    left: `${5 + i * 8}%`,
    size: 6 + (i % 4) * 3,
    duration: 6 + (i % 5) * 2,
    delay: i * 0.8,
    color: i % 3 === 0 ? C.blush : i % 3 === 1 ? C.blushDeep : C.blushLight,
  }))
  return (
    <>
      <style>{`
        @keyframes petalFall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.7; }
          90%  { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      {petals.map((p, i) => (
        <div key={i} className="absolute pointer-events-none rounded-full" style={{
          left: p.left,
          top: `-${p.size * 2}px`,
          width: `${p.size}px`,
          height: `${p.size * 1.4}px`,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: p.color,
          opacity: 0.6,
          animation: `petalFall ${p.duration}s ease-in infinite`,
          animationDelay: `${p.delay}s`,
        }} />
      ))}
    </>
  )
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.cream}f5`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.sage}88` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <span className="text-xl">&#x273F;</span>
          <span className="font-light tracking-[0.3em] text-sm" style={S.forest}>Petal &amp; Stem</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Shop', 'Subscribe', 'Weddings', 'Order'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.forest)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#order"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.sageDark, color: C.sageDark }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.sageDark; e.currentTarget.style.color = C.white }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.sageDark }}
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function FloristOSDemoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.sageDark }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Botanical Romantic
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Blush to sage gradient */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, ${C.blushLight} 0%, ${C.cream} 45%, #e8f0e8 100%)`,
        }} />

        {/* Floating petals */}
        <FloatingPetals />

        {/* Soft texture overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%235a8a5a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
            <div className="stagger-children">
              <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-6" style={S.sage_text}>
                Chelsea, London &middot; Est. 2007
              </p>

              <h1 className="mb-8">
                {['Flowers for', 'Every Moment.'].map((line, i) => (
                  <span key={line}
                    className="reveal-clip-up block font-extralight leading-[0.9]"
                    style={{
                      fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
                      color: i === 0 ? C.forest : C.sageDark,
                      fontFamily: 'Georgia, serif',
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p className="reveal-up text-base font-light leading-relaxed max-w-lg mb-12" style={{ ...S.muted, animationDelay: '0.4s' }}>
                Seasonal blooms, grown close to home. Arranged by hand in Chelsea every morning. Same-day delivery across London. From a single stem to a whole wedding.
              </p>

              {/* 4 seasonal showcase images */}
              <div className="reveal-up grid grid-cols-4 gap-3 mb-10" style={{ animationDelay: '0.5s' }}>
                {[
                  'https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1487530811015-780c53a9f71b?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&h=200&fit=crop',
                ].map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square group cursor-pointer">
                    <img src={src} alt={`Seasonal arrangement ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.1]" />
                  </div>
                ))}
              </div>

              <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.65s' }}>
                <a href="#order"
                  className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
                  style={{ backgroundColor: C.sageDark, color: C.white, borderRadius: '4px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.forest)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.sageDark)}
                >
                  Order Now
                </a>
                <a href="#subscribe"
                  className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
                  style={{ borderColor: C.sageDark, color: C.sageDark, borderRadius: '4px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.sageDark}15` }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  Subscribe &amp; Save
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="reveal-right image-reveal rounded-2xl overflow-hidden hidden md:block" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1487530811015-780c53a9f71b?w=900&h=1100&fit=crop"
                alt="Fresh seasonal bouquet from Petal & Stem"
                className="w-full h-[680px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.sage }}>
        <div className="marquee">
          {[0, 1].map((d) => (
            <div key={d} className="flex items-center gap-8 px-4">
              {['Same-Day Delivery', 'Wedding Flowers', 'Weekly Subscription', 'Seasonal Blooms', 'Sympathy Bouquets', 'Birthday Flowers', 'Bespoke Arrangements', 'Chelsea, London'].map((item, i) => (
                <span key={`${d}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: C.forest }}>{item}</span>
                  <span style={{ color: `${C.forest}55` }}>&#x2726;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SHOP BY OCCASION — 6 Cards
          ═══════════════════════════════════════ */}
      <section id="shop" className="py-24 md:py-32 px-6 md:px-16" style={S.cream}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>Shop</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.forest}>Shop by Occasion</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {occasions.map((occ, i) => (
              <div key={occ.name}
                className="reveal-up p-8 rounded-2xl border transition-all duration-300 group cursor-pointer magnetic-card"
                style={{ backgroundColor: C.white, borderColor: `${C.sage}66`, animationDelay: `${i * 0.07}s` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.sageDark; e.currentTarget.style.backgroundColor = C.blushLight }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.sage}66`; e.currentTarget.style.backgroundColor = C.white }}
              >
                <span className="text-3xl mb-4 block">{occ.emoji}</span>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-light" style={S.forest}>{occ.name}</h3>
                  <span className="text-base font-light" style={S.sage_text}>{occ.from}</span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{occ.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOUQUET GALLERY — 8 Items
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.blush}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>Arrangements</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.forest}>Current Collection</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {bouquets.map((b, i) => (
              <div key={b.name} className="reveal-up group cursor-pointer" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="image-reveal rounded-xl overflow-hidden mb-3">
                  <img src={b.img} alt={b.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-light" style={S.forest}>{b.name}</h3>
                  <p className="text-sm font-light" style={S.sage_text}>{b.price}</p>
                </div>
                <p className="text-xs font-light" style={S.muted}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUBSCRIPTION — 3 Plans
          ═══════════════════════════════════════ */}
      <section id="subscribe" className="py-24 md:py-32 px-6 md:px-16" style={S.sage}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>Never Be Without Flowers</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.forest}>Subscription Service</h2>
            <p className="text-base font-light mt-4" style={S.muted}>Fresh seasonal flowers, delivered regularly. Pause or cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {subscriptions.map((sub, i) => (
              <div key={sub.plan}
                className="reveal-up rounded-2xl p-8 border relative transition-all duration-300"
                style={{
                  backgroundColor: sub.highlight ? C.white : `${C.white}88`,
                  borderColor: sub.highlight ? C.sageDark : `${C.sage}88`,
                  boxShadow: sub.highlight ? `0 8px 40px ${C.sage}44` : 'none',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {sub.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: C.sageDark, color: C.white }}>
                    Most Popular
                  </div>
                )}
                <p className="text-xs tracking-[0.3em] uppercase mb-3" style={S.muted}>{sub.plan}</p>
                <p className="text-3xl font-extralight mb-1" style={S.forest}>{sub.price}</p>
                <p className="text-sm mb-6" style={S.sage_text}>{sub.saving}</p>
                <ul className="space-y-3">
                  {sub.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light" style={S.muted}>
                      <span style={{ color: C.sageDark, flexShrink: 0 }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#order"
                  className="mt-8 block text-center py-3 text-sm tracking-[0.2em] uppercase font-medium rounded transition-all duration-300"
                  style={sub.highlight ? { backgroundColor: C.sageDark, color: C.white } : { border: `1px solid ${C.sageDark}`, color: C.sageDark }}
                  onMouseEnter={(e) => { if (!sub.highlight) e.currentTarget.style.backgroundColor = `${C.sageDark}15` }}
                  onMouseLeave={(e) => { if (!sub.highlight) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  Start Subscription
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WEDDING FLOWERS
          ═══════════════════════════════════════ */}
      <section id="weddings" className="py-24 md:py-32 px-6 md:px-16" style={S.cream}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal-left image-reveal rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
              alt="Wedding flowers by Petal & Stem"
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="reveal-right">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={S.sage_text}>Wedding Flowers</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ ...S.forest, fontFamily: 'Georgia, serif' }}>
              Your Day in Bloom
            </h2>
            <p className="text-base font-light leading-relaxed mb-8" style={S.muted}>
              We have been trusted with over 400 weddings since 2007. From intimate elopements to 300-guest celebrations. Your consultation is free and carries no obligation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {weddingServices.map((svc) => (
                <div key={svc.service} className="flex gap-3 items-start p-4 rounded-xl" style={{ backgroundColor: `${C.sage}22` }}>
                  <span style={{ color: C.sageDark, marginTop: '2px', flexShrink: 0 }}>&#x2731;</span>
                  <div>
                    <p className="text-sm font-light mb-1" style={S.forest}>{svc.service}</p>
                    <p className="text-xs font-light" style={S.muted}>{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#order"
              className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-300"
              style={{ backgroundColor: C.sageDark, color: C.white, borderRadius: '4px' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.forest)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.sageDark)}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DELIVERY INFO
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={S.blush}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>Delivery</p>
            <h2 className="text-3xl md:text-4xl font-extralight" style={S.forest}>Fast, Fresh &amp; Reliable</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              { icon: '⚡', title: 'Same-Day', desc: 'Order before 11am. Delivered today across all London boroughs.' },
              { icon: '📅', title: 'Next-Day', desc: 'Order any time. Choose your delivery slot. Guaranteed freshness.' },
              { icon: '🤝', title: 'Scheduled', desc: 'Pick your date and time window. Perfect for gifts and surprises.' },
            ].map((d, i) => (
              <div key={d.title} className="reveal-up p-7 rounded-xl text-center" style={{ backgroundColor: C.white, animationDelay: `${i * 0.1}s` }}>
                <span className="text-3xl mb-4 block">{d.icon}</span>
                <h3 className="text-lg font-light mb-2" style={S.forest}>{d.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ORDER / BOOKING
          ═══════════════════════════════════════ */}
      <section id="order" className="py-24 md:py-32 px-6 md:px-16" style={S.cream}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>Order</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.forest}>Send Some Flowers</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Book a collection slot, arrange a delivery, or WhatsApp us your brief. We love a spontaneous order as much as a carefully planned one.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Shop Hours', detail: 'Mon–Sat 07:00–18:00 | Sun 09:00–14:00' },
                { label: 'Same-Day Cut-off', detail: '11:00am for London-wide delivery' },
                { label: 'Location', detail: '8 Royal Hospital Road, Chelsea SW3 4HT' },
                { label: 'Wedding Enquiries', detail: 'Free consultation — book 6 months ahead' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.sageDark}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.sage_text}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 134, label: 'orders this week' }} vertical="floristos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.blush}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>What Customers Say</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.forest}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.cream}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.sage_text}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.forest}>Good to Know</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460567" message="Hi! I'd like to order some flowers from Petal & Stem." vertical="floristos" />
    </div>
  )
}
