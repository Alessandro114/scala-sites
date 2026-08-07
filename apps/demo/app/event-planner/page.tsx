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
  black: '#0a0a0a',
  darkAlt: '#111111',
  gold: '#d4af37',
  goldLight: '#e8c96a',
  goldDim: '#c49b1f',
  champagne: '#f5e6cc',
  champagneLight: '#fdf6e8',
  rose: '#e11d48',
  roseLight: '#f43f5e',
  white: '#ffffff',
  muted: '#6b7280',
  mutedLight: '#9ca3af',
  border: '#2a2a2a',
} as const

const S = {
  page: { backgroundColor: C.black, color: C.white } as React.CSSProperties,
  sectionBlack: { backgroundColor: C.black } as React.CSSProperties,
  sectionDark: { backgroundColor: C.darkAlt } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  champagne: { color: C.champagne } as React.CSSProperties,
  rose: { color: C.rose } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  mutedLight: { color: C.mutedLight } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Lumière Events',
  description: 'Luxury event planning for corporate events, weddings, private parties and festivals',
  url: 'https://lumiere-events.example.com',
  locale: 'en',
  vertical: 'eventos',
  theme: 'luxury',
  branding: { primaryColor: C.gold, accentColor: C.rose },
  contact: {
    phone: '+44 20 7946 4455',
    email: 'hello@lumiere-events.com',
    whatsapp: '+442079464455',
    address: '28 Mayfair Place, London W1J 8AJ',
    coordinates: { lat: 51.5071, lng: -0.1505 },
  },
  social: {
    instagram: 'lumiereevents',
    facebook: 'https://facebook.com/lumiereevents',
  },
  seo: {
    title: 'Lumière Events | Luxury Event Planning London',
    description: 'Award-winning event planners for corporate events, weddings, private parties and galas in London.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  { name: 'Corporate Events', desc: 'Product launches, conferences, away days and incentive travel. Flawlessly executed at scale.', icon: '🏢', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', color: C.gold },
  { name: 'Weddings', desc: 'Intimate ceremonies or grand celebrations. Every detail designed around your love story.', icon: '💍', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', color: C.rose },
  { name: 'Private Parties', desc: 'Milestone birthdays, anniversaries and celebrations of every scale and style.', icon: '🎉', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop', color: C.gold },
  { name: 'Product Launches', desc: 'Brand activations and product reveals that create lasting impact and press coverage.', icon: '🚀', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop', color: C.rose },
  { name: 'Galas & Charity', desc: 'Black-tie fundraising dinners and charity galas that inspire generosity and awe.', icon: '✨', image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop', color: C.gold },
  { name: 'Virtual Events', desc: 'Hybrid and fully virtual experiences that connect global audiences with real-world magic.', icon: '💻', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop', color: C.rose },
]

const portfolioEvents = [
  { name: 'The Tate Gala', type: 'Corporate', guests: 400, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop' },
  { name: 'Harper & Reid Wedding', type: 'Wedding', guests: 120, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=500&fit=crop' },
  { name: 'Atlas Brand Launch', type: 'Product Launch', guests: 250, image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=500&fit=crop' },
  { name: "Lady V's 40th", type: 'Private Party', guests: 80, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop' },
  { name: 'Hope & Light Charity Gala', type: 'Gala', guests: 320, image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=500&fit=crop' },
  { name: 'Tech Summit 2026', type: 'Conference', guests: 700, image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=500&fit=crop' },
  { name: 'The Riviera Ball', type: 'Gala', guests: 180, image: 'https://images.unsplash.com/photo-1520452112805-c6692c840af0?w=600&h=800&fit=crop' },
  { name: 'Chen & Park Wedding', type: 'Wedding', guests: 90, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=500&fit=crop' },
]

const processSteps = [
  { n: '01', title: 'Vision', icon: '💡', desc: 'We listen deeply. Your story, your style, your non-negotiables. We translate it into a creative brief.' },
  { n: '02', title: 'Plan', icon: '📐', desc: 'Budget management, venue scouting, vendor selection and a detailed project timeline.' },
  { n: '03', title: 'Execute', icon: '⚡', desc: 'On-the-day coordination. Every detail managed so you can be fully present in the moment.' },
  { n: '04', title: 'Celebrate', icon: '🥂', desc: 'We handle teardown, vendor payments and post-event reporting. You remember the magic.' },
]

const packages = [
  {
    name: 'Essential',
    price: '£2,000',
    sub: 'For intimate events up to 50 guests',
    items: ['Day-of coordination', 'Vendor sourcing', 'Timeline management', 'Up to 8h on-site'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '£5,000',
    sub: 'For events up to 150 guests',
    items: ['Full planning from concept', 'Venue negotiation', 'Custom décor design', 'Dedicated event manager', 'Post-event report'],
    highlight: true,
  },
  {
    name: 'Luxury',
    price: '£10,000+',
    sub: 'Bespoke for large-scale or destination events',
    items: ['Concept to completion', 'International vendors', 'Guest experience design', 'Full production team', 'PR & press support'],
    highlight: false,
  },
]

const reviews: Review[] = [
  { id: '1', author: 'Natasha V.', rating: 5, text: 'Lumière planned our 200-person product launch at The Shard. Every detail was immaculate. The press coverage exceeded our expectations by 300%. Worth every penny.', date: '2026-07-21', source: 'google', verified: true },
  { id: '2', author: 'James & Olivia T.', rating: 5, text: 'From first meeting to last dance, Lumière made our wedding day absolutely perfect. We were never stressed for a single moment. They are simply extraordinary.', date: '2026-07-30', source: 'google', verified: true },
  { id: '3', author: 'Charlotte F.', rating: 5, text: 'The charity gala raised £280,000 — our best ever. The room was breathtaking and the evening ran with military precision. Multiple guests asked for the team\'s contact.', date: '2026-08-04', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Marcus H.', rating: 5, text: "My mother's 70th birthday event was exactly what she deserved — elegant, personal and completely magical. Lumière thought of details we never would have imagined.", date: '2026-08-06', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How far in advance should I book?', answer: 'We recommend booking at least 3–6 months in advance for medium-scale events, and 9–12 months for large events and weddings. That said, we have successfully planned events in under 4 weeks — contact us and we will tell you what is possible.' },
  { question: 'Do you work within a fixed budget?', answer: 'Absolutely. We work with budgets from £2,000 upwards. We will always be transparent about what is achievable at your budget and where we can add the most value. There are no hidden fees.' },
  { question: 'Can you source venues?', answer: 'Yes. Venue sourcing and negotiation is included in all packages above Essential. We have established relationships with over 200 venues in London and can source internationally for destination events.' },
  { question: 'Do you manage catering and entertainment?', answer: 'Yes. Our vendor network includes award-winning caterers, florists, bands, DJs, AV companies, photographers and videographers. We manage all contracts, deposits and briefings on your behalf.' },
  { question: 'What does \'on-the-day coordination\' include?', answer: 'Our coordinator arrives at least 2 hours before guests and stays until the event is fully wrapped. They brief all vendors, manage the run of show, handle any issues and ensure the timeline is followed.' },
  { question: 'Do you plan destination events?', answer: 'Yes. We plan events across Europe, the Middle East and the US. Travel is costed separately and we work with trusted local partners in each destination to maintain our quality standards.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 3 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '12:00', available: true, spotsLeft: 2 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 4 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '16:00', available: true, spotsLeft: 1 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lumière Events',
  description: 'Award-winning luxury event planning company in London specialising in corporate events, weddings, private parties and galas.',
  url: 'https://lumiere-events.example.com',
  telephone: '+44 20 7946 4455',
  email: 'hello@lumiere-events.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '28 Mayfair Place',
    addressLocality: 'London',
    postalCode: 'W1J 8AJ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5071, longitude: -0.1505 },
  priceRange: '££££',
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
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.black}ee`, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${C.gold}33` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-sm font-light tracking-[0.4em] uppercase" style={{ color: C.champagne }}>
          Lumière<span style={{ color: C.gold, margin: '0 4px' }}>✦</span>Events
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Portfolio', 'Packages', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-light"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.champagne)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-light transition-all duration-400"
            style={{ borderColor: C.gold, color: C.gold }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
          >
            Enquire
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function EventOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes gold-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes hero-reveal {
          from { opacity: 0; transform: translateY(28px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mosaic-in {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-r1 { animation: hero-reveal 0.9s 0s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-r2 { animation: hero-reveal 0.9s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-r3 { animation: hero-reveal 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-r4 { animation: hero-reveal 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .service-card:hover { transform: translateY(-4px); }
        .service-card { transition: transform 0.3s ease; }
        .portfolio-item:hover img { transform: scale(1.07); }
        .portfolio-item img { transition: transform 0.6s ease; }
        .portfolio-item:hover .overlay { opacity: 1; }
        .overlay { transition: opacity 0.4s ease; opacity: 0; }
      `}</style>

      <div className="scroll-progress" style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.rose})` }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Dark + Gold confetti + Mosaic
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ backgroundColor: C.black }}
      >
        {/* Gold confetti particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          const shapes = ['●', '▲', '◆', '|', '—']
          const colors = [C.gold, C.goldLight, C.champagne, C.rose]
          return (
            <div
              key={i}
              className="absolute pointer-events-none font-bold select-none"
              style={{
                left: `${(i * 5.3) % 100}%`,
                top: `-${10 + (i * 3) % 20}px`,
                color: colors[i % colors.length],
                fontSize: `${8 + (i % 6) * 3}px`,
                animation: `confetti-fall ${4 + (i % 4)}s ${i * 0.35}s linear infinite`,
                animationDelay: `${i * 0.35}s`,
              }}
            >
              {shapes[i % shapes.length]}
            </div>
          )
        })}

        {/* Gold glow blobs */}
        {[
          { top: '20%', left: '70%', size: 400 },
          { top: '60%', left: '10%', size: 300 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute pointer-events-none rounded-full"
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle, ${C.gold}15, transparent 70%)`,
              animation: `gold-pulse ${5 + i * 2}s ${i}s ease-in-out infinite`,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Event type pills */}
            <div className="hero-r1 flex flex-wrap gap-2 mb-8">
              {['Corporate', 'Wedding', 'Birthday', 'Gala', 'Festival'].map((type, i) => (
                <span
                  key={type}
                  className="px-4 py-1.5 rounded-full text-xs font-light uppercase tracking-[0.2em]"
                  style={{
                    backgroundColor: `${i % 2 === 0 ? C.gold : C.rose}15`,
                    color: i % 2 === 0 ? C.gold : C.rose,
                    border: `1px solid ${i % 2 === 0 ? C.gold : C.rose}33`,
                  }}
                >
                  {type}
                </span>
              ))}
            </div>

            <h1 className="mb-8">
              <span
                className="hero-r2 block text-xs tracking-[0.5em] uppercase mb-4 font-light"
                style={{ color: C.gold }}
              >
                Est. 2010 &middot; London
              </span>
              <span className="hero-r3 block text-5xl md:text-7xl font-extralight leading-tight tracking-tight" style={{ color: C.champagne }}>
                Creating
              </span>
              <span
                className="hero-r3 block text-5xl md:text-7xl font-extralight leading-tight tracking-tight"
                style={{ color: C.gold, textShadow: `0 0 80px ${C.gold}44` }}
              >
                Unforgettable
              </span>
              <span className="hero-r3 block text-5xl md:text-7xl font-extralight leading-tight tracking-tight" style={{ color: C.champagne }}>
                Moments.
              </span>
            </h1>

            <p className="hero-r4 text-base font-light leading-relaxed max-w-lg mb-10" style={{ color: C.muted }}>
              150+ events produced. £42M in events under management. From intimate celebrations to 700-person galas — we make every event a story worth telling.
            </p>

            <div className="hero-r4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="border px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
                style={{ borderColor: C.gold, color: C.gold }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.gold; e.currentTarget.style.color = C.black }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.gold }}
              >
                Start Your Event
              </a>
              <a
                href="#portfolio"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
                style={{ color: C.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.champagne)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right: Portfolio mosaic (4 thumbnails) */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            {portfolioEvents.slice(0, 4).map((evt, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden group cursor-pointer relative"
                style={{
                  height: i % 2 === 0 ? 220 : 180,
                  animation: `mosaic-in 0.6s ${0.2 + i * 0.1}s both`,
                }}
              >
                <img src={evt.image} alt={evt.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                <div
                  className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to top, ${C.black}cc, transparent)` }}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: C.gold }}>{evt.type}</p>
                    <p className="text-sm font-light" style={{ color: C.champagne }}>{evt.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.gold }}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.champagne }}>Our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="service-card reveal-up rounded-2xl overflow-hidden cursor-pointer border"
                style={{ animationDelay: `${i * 0.08}s`, borderColor: `${svc.color}22` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover" style={{ filter: 'brightness(0.6) saturate(0.8)' }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.black}ee, transparent)` }} />
                  <div className="absolute bottom-4 left-4 text-3xl">{svc.icon}</div>
                </div>
                <div className="p-6" style={{ backgroundColor: `${svc.color}06` }}>
                  <h3 className="text-lg font-light mb-2" style={{ color: C.champagne }}>{svc.name}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: C.muted }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO MASONRY
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionBlack}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.rose }}>Our Work</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.champagne }}>Portfolio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-children" style={{ gridAutoRows: '180px' }}>
            {portfolioEvents.map((evt, i) => {
              const isLarge = i === 0 || i === 3 || i === 6
              return (
                <div
                  key={i}
                  className={`portfolio-item reveal-up rounded-xl overflow-hidden relative cursor-pointer ${isLarge ? 'col-span-2 row-span-2' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <img src={evt.image} alt={evt.name} className="w-full h-full object-cover" />
                  <div
                    className="overlay absolute inset-0 flex flex-col justify-end p-4"
                    style={{ background: `linear-gradient(to top, ${C.black}dd, transparent)` }}
                  >
                    <span className="text-[10px] uppercase tracking-widest font-light" style={{ color: C.gold }}>{evt.type}</span>
                    <span className="text-sm font-light mt-0.5" style={{ color: C.champagne }}>{evt.name}</span>
                    <span className="text-xs mt-0.5" style={{ color: C.muted }}>{evt.guests} guests</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.gold }}>How We Work</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.champagne }}>Planning Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {processSteps.map((step, i) => (
              <div key={step.n} className="reveal-up text-center relative" style={{ animationDelay: `${i * 0.12}s` }}>
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-[55%] w-[90%] h-px"
                    style={{ background: `linear-gradient(to right, ${C.gold}55, transparent)` }}
                  />
                )}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl relative z-10"
                  style={{ backgroundColor: `${C.gold}18`, border: `1px solid ${C.gold}44` }}
                >
                  {step.icon}
                </div>
                <p className="text-xs tracking-[0.3em] uppercase font-light mb-2" style={{ color: C.gold }}>Step {step.n}</p>
                <h3 className="text-lg font-light mb-3" style={{ color: C.champagne }}>{step.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PACKAGES
          ═══════════════════════════════════════ */}
      <section id="packages" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionBlack}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.rose }}>Investment</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.champagne }}>Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className="reveal-up rounded-2xl p-8 border relative overflow-hidden"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  borderColor: pkg.highlight ? C.gold : `${C.white}18`,
                  backgroundColor: pkg.highlight ? `${C.gold}08` : `${C.white}04`,
                  boxShadow: pkg.highlight ? `0 0 60px ${C.gold}18` : 'none',
                }}
              >
                {pkg.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }}
                  />
                )}
                {pkg.highlight && (
                  <div className="mb-4">
                    <span className="text-xs tracking-[0.3em] uppercase font-light px-3 py-1 rounded-full" style={{ backgroundColor: `${C.gold}22`, color: C.gold, border: `1px solid ${C.gold}44` }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-extralight mb-1" style={{ color: C.champagne }}>{pkg.name}</h3>
                <p className="text-3xl font-light mb-1" style={{ color: C.gold }}>{pkg.price}</p>
                <p className="text-xs font-light mb-6" style={{ color: C.muted }}>{pkg.sub}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-light" style={{ color: C.mutedLight }}>
                      <span style={{ color: C.gold }}>✦</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full py-3 text-center text-xs tracking-[0.2em] uppercase font-light transition-all duration-400 border"
                  style={{
                    borderColor: pkg.highlight ? C.gold : `${C.white}33`,
                    color: pkg.highlight ? C.gold : C.mutedLight,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = pkg.highlight ? C.gold : `${C.white}11`
                    e.currentTarget.style.color = pkg.highlight ? C.black : C.white
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = pkg.highlight ? C.gold : C.mutedLight
                  }}
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionDark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.gold }}>Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.champagne }}>What Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionBlack}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.rose }}>Begin</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ color: C.champagne }}>
              Let&apos;s Plan Your<br />Perfect Event
            </h2>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: C.muted }}>
              Every event begins with a conversation. Share your vision and we will tell you exactly what is possible.
            </p>
            <div className="space-y-5">
              {[
                { title: 'Studio', detail: '28 Mayfair Place, London W1J 8AJ' },
                { title: 'Enquiries', detail: 'hello@lumiere-events.com · +44 20 7946 4455' },
                { title: 'Response Time', detail: 'We reply to all enquiries within 4 hours.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 items-start">
                  <div className="w-px min-h-[36px] flex-shrink-0" style={{ backgroundColor: `${C.gold}44` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-light mb-0.5" style={{ color: C.gold }}>{info.title}</p>
                    <p className="text-sm font-light" style={{ color: C.muted }}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 150, label: 'events produced since 2010' }}
              vertical="eventos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.gold }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.champagne }}>Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079464455" message="Hi! I'd like to discuss an upcoming event with Lumière" vertical="eventos" />
    </div>
  )
}
