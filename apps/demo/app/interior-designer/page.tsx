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
  cream: '#f5f0e8',
  creamDark: '#ede6d8',
  creamDeep: '#e8d9c0',
  sage: '#8fbc8f',
  sageDark: '#6a9a6a',
  sageDim: '#8fbc8f22',
  blush: '#f5c6c6',
  blushDark: '#e8a5a5',
  charcoal: '#2c2c2c',
  charcoalMid: '#3a3a3a',
  charcoalLight: '#505050',
  gold: '#c9a84c',
  goldDim: '#c9a84c33',
  white: '#ffffff',
  warmGray: '#8a8070',
} as const

const S = {
  pageBg: { backgroundColor: C.cream, color: C.charcoal } as React.CSSProperties,
  sectionCream: { backgroundColor: C.cream } as React.CSSProperties,
  sectionCreamDark: { backgroundColor: C.creamDark } as React.CSSProperties,
  sectionCharcoal: { backgroundColor: C.charcoal } as React.CSSProperties,
  sage: { color: C.sage } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  charcoal: { color: C.charcoal } as React.CSSProperties,
  warmGray: { color: C.warmGray } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Atelier Lumière',
  description: 'Interior design studio creating spaces that tell your story',
  url: 'https://atelierlumiere.example.com',
  locale: 'en',
  vertical: 'interioros',
  theme: 'elegant',
  branding: { primaryColor: C.charcoal, accentColor: C.gold },
  contact: {
    phone: '+44 20 3344 5566',
    email: 'studio@atelierlumiere.com',
    whatsapp: '+442033445566',
    address: '7 Chiltern Street, Marylebone, London W1U 7PX',
    coordinates: { lat: 51.5205, lng: -0.1567 },
  },
  social: {
    instagram: 'atelierlumiere',
    facebook: 'https://facebook.com/atelierlumiere',
  },
  seo: {
    title: 'Atelier Lumière — Interior Design Studio, London',
    description: 'Award-winning interior design studio. Bespoke residential and commercial interiors.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Isabella C.', rating: 5, text: 'Atelier Lumière completely transformed our Victorian townhouse. Every room now feels intentional, beautiful, and uniquely us. The team listened to every detail and delivered beyond our expectations.', date: '2026-07-08', source: 'google', verified: true },
  { id: '2', author: 'David M.', rating: 5, text: 'We hired them for our restaurant redesign. The result was a 40% increase in average spend per cover — the atmosphere they created just makes people want to linger. Worth every penny.', date: '2026-07-15', source: 'google', verified: true },
  { id: '3', author: 'Sophie T.', rating: 5, text: 'The virtual design consultation was fantastic — professional, detailed, and delivered a complete mood board within a week. I implemented their plan room by room and the results are stunning.', date: '2026-07-22', source: 'houzz', verified: true },
  { id: '4', author: 'Francesca B.', rating: 5, text: 'They sourced materials I couldn\'t find anywhere else — a beautiful handwoven linen from a Portuguese mill, marble from a small quarry in Puglia. Truly curated, truly special.', date: '2026-07-30', source: 'google', verified: true },
  { id: '5', author: 'Marcus L.', rating: 4, text: 'Our apartment went from bland to a genuine talking point. Friends think we moved — we didn\'t, we just got a brilliant designer. The room refresh service is exceptional value.', date: '2026-08-03', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What does a full redesign project involve?', answer: 'A full redesign starts with an in-home consultation to understand your lifestyle, aesthetic preferences, and functional needs. We then develop concept boards, spatial plans, material specifications, and source all furnishings. We project-manage the installation and style the finished space. Typical projects take 3-6 months.' },
  { question: 'How does the initial consultation work?', answer: 'Our 90-minute initial consultation (£250, credited against full projects) covers your space, your brief, your lifestyle, and your budget. We bring examples of our work, ask detailed questions, and outline our proposed approach. No obligation to proceed.' },
  { question: 'Do you work on commercial projects?', answer: 'Yes. We have a dedicated commercial team with experience in hospitality (hotels, restaurants, bars), office design, retail environments, and show homes. Commercial projects are quoted on scope.' },
  { question: 'What is Virtual Design?', answer: 'Our Virtual Design service (from £850 per room) delivers a complete design plan remotely: mood board, material palette, furniture plan, shopping list with links. Perfect for those outside London or with a clear brief who want professional direction.' },
  { question: 'How do you charge for your services?', answer: 'Design fees are charged as a fixed project fee quoted at the outset — never hourly, so there are no surprises. Procurement (furniture, materials) is invoiced at trade price plus our purchasing margin. We are transparent about all costs from day one.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 3 },
  { id: '2', date: today, time: '11:30', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '14:00', available: true, spotsLeft: 4 },
  { id: '4', date: today, time: '15:30', available: true, spotsLeft: 1 },
  { id: '5', date: today, time: '17:00', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Atelier Lumière Interior Design',
  description: 'Award-winning interior design studio creating bespoke residential and commercial spaces in London.',
  url: 'https://atelierlumiere.example.com',
  telephone: '+44 20 3344 5566',
  email: 'studio@atelierlumiere.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Chiltern Street, Marylebone',
    addressLocality: 'London',
    postalCode: 'W1U 7PX',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5205, longitude: -0.1567 },
  openingHours: 'Mo-Fr 09:00-18:00',
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
// COMPONENTS
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.cream}f5`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.gold}33`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span
            className="text-base tracking-[0.25em] uppercase"
            style={{ color: C.charcoal, fontWeight: 300 }}
          >
            Atelier Lumière
          </span>
          <div className="h-px w-full mt-0.5" style={{ backgroundColor: C.gold }} />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Portfolio', 'Studio', 'Process'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.warmGray }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.charcoal)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGray)}
            >
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.charcoal, color: C.charcoal }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.charcoal
              e.currentTarget.style.color = C.cream
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.charcoal
            }}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// Material swatch dots
function MaterialSwatches() {
  const swatches = [
    { color: '#d4b896', label: 'Oak' },
    { color: '#e8e0d0', label: 'Marble' },
    { color: '#c5b8a0', label: 'Linen' },
    { color: '#8fbc8f', label: 'Sage' },
    { color: '#c9a84c', label: 'Brass' },
    { color: '#2c2c2c', label: 'Slate' },
  ]
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {swatches.map((s) => (
        <div key={s.label} className="flex items-center gap-2">
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: s.color,
              border: `2px solid ${C.charcoal}22`,
            }}
          />
          <span className="text-xs tracking-widest uppercase" style={{ color: C.warmGray }}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function InteriorOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .mood-card { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
        .mood-card:hover { transform: translateY(-12px) !important; box-shadow: 0 32px 64px rgba(44,44,44,0.2) !important; }
        .gold-line { width: 48px; height: 1px; background: ${C.gold}; display: inline-block; }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Mood Board
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: C.creamDark, paddingTop: '5rem' }}
      >
        {/* Gold accent line — top */}
        <div style={{ position: 'absolute', top: '5rem', left: 0, right: 0, height: 1, backgroundColor: C.gold, opacity: 0.3 }} />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center min-h-screen">

          {/* Left: Editorial text */}
          <div className="stagger-children relative z-10">
            {/* Gold horizontal line + label */}
            <div className="reveal-up flex items-center gap-4 mb-8">
              <div className="gold-line" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>London · Est. 2010</span>
            </div>

            <h1 className="mb-10">
              {['Spaces', 'That Tell', 'Your Story'].map((line, i) => (
                <span
                  key={line}
                  className="reveal-clip-up block leading-[0.9]"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                    fontWeight: 200,
                    letterSpacing: '-0.02em',
                    color: i === 2 ? C.gold : C.charcoal,
                    fontStyle: i === 1 ? 'italic' : 'normal',
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="reveal-up text-base font-light leading-relaxed max-w-md mb-10"
              style={{ color: C.warmGray, animationDelay: '0.5s' }}
            >
              We design interiors that go beyond aesthetics — spaces that feel instinctively right, that reflect who you are, and that grow more beautiful with time.
            </p>

            {/* Material swatches */}
            <div className="reveal-up mb-10" style={{ animationDelay: '0.6s' }}>
              <MaterialSwatches />
            </div>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.7s' }}>
              <a
                href="#booking"
                className="border-2 px-10 py-4 text-xs tracking-[0.3em] uppercase transition-all duration-500"
                style={{ borderColor: C.charcoal, color: C.charcoal }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.charcoal
                  e.currentTarget.style.color = C.cream
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = C.charcoal
                }}
              >
                Book Consultation
              </a>
              <a
                href="#portfolio"
                className="px-10 py-4 text-xs tracking-[0.3em] uppercase transition-colors duration-300"
                style={{ color: C.warmGray }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.charcoal)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGray)}
              >
                View Portfolio &rarr;
              </a>
            </div>
          </div>

          {/* Right: Asymmetric mood board collage */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main large image */}
            <div
              className="mood-card absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{ top: 0, left: '10%', width: '65%', height: '55%', zIndex: 3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&h=600&fit=crop"
                alt="Elegant living room design"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary image — lower right */}
            <div
              className="mood-card absolute rounded-2xl overflow-hidden shadow-xl"
              style={{ bottom: '5%', right: 0, width: '55%', height: '48%', zIndex: 2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&h=500&fit=crop"
                alt="Modern bedroom interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent small image — left bottom */}
            <div
              className="mood-card absolute rounded-xl overflow-hidden shadow-lg"
              style={{ bottom: '18%', left: 0, width: '38%', height: '32%', zIndex: 4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop"
                alt="Detail of curated decor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent card */}
            <div
              className="absolute rounded-xl flex items-center justify-center"
              style={{
                top: '48%',
                right: '2%',
                width: '28%',
                height: '20%',
                zIndex: 5,
                backgroundColor: C.gold,
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-light" style={{ color: C.cream }}>14</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: `${C.cream}bb` }}>Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gold line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, backgroundColor: C.gold, opacity: 0.2 }} />
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionCream}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight" style={S.charcoal}>
              How We Can<br />Help You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              { name: 'Full Redesign', from: 'from £5,000', desc: 'Complete transformation of your home or commercial space. Concept to installation, every detail handled.', tag: 'Most Comprehensive' },
              { name: 'Room Refresh', from: 'from £2,000', desc: 'A focused intervention on one or two key rooms. New furniture, materials, and styling — dramatic results.', tag: null },
              { name: 'Design Consultation', from: '£250 / session', desc: '90-minute in-depth session covering your space, brief, and vision. Credited back on full projects.', tag: null },
              { name: 'Commercial Interiors', from: 'On Application', desc: 'Hotels, restaurants, offices, retail. Hospitality specialist with 50+ commercial projects delivered.', tag: 'Specialist Service' },
              { name: 'Property Staging', from: 'from £1,500', desc: 'Stage your property to sell faster and for more. Proven to add 5–15% to sale price.', tag: null },
              { name: 'Virtual Design', from: 'from £850', desc: 'Complete remote design package: mood board, material palette, furniture plan, and shopping list.', tag: 'Digital Service' },
            ].map((service, i) => (
              <div
                key={service.name}
                className="reveal-up rounded-2xl p-8 group cursor-pointer transition-all duration-500 relative"
                style={{
                  backgroundColor: C.creamDark,
                  border: `1px solid ${C.gold}22`,
                  animationDelay: `${i * 0.09}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.charcoal
                  e.currentTarget.style.borderColor = C.gold
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.creamDark
                  e.currentTarget.style.borderColor = `${C.gold}22`
                }}
              >
                {service.tag && (
                  <span
                    className="text-[10px] tracking-widest uppercase px-2 py-1 rounded-full absolute top-5 right-5 transition-all duration-500"
                    style={{ backgroundColor: `${C.gold}33`, color: C.gold }}
                  >
                    {service.tag}
                  </span>
                )}
                <div
                  className="h-px w-10 mb-6 transition-all duration-500"
                  style={{ backgroundColor: C.gold }}
                />
                <h3
                  className="text-lg font-light mb-2 transition-colors duration-500"
                  style={{ color: C.charcoal }}
                  ref={(el) => {
                    if (el) {
                      el.closest('.group')?.addEventListener('mouseenter', () => { el.style.color = C.cream })
                      el.closest('.group')?.addEventListener('mouseleave', () => { el.style.color = C.charcoal })
                    }
                  }}
                >
                  {service.name}
                </h3>
                <p className="text-sm font-light mb-4" style={{ color: C.gold }}>{service.from}</p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: C.warmGray }}
                  ref={(el) => {
                    if (el) {
                      el.closest('.group')?.addEventListener('mouseenter', () => { el.style.color = `${C.cream}99` })
                      el.closest('.group')?.addEventListener('mouseleave', () => { el.style.color = C.warmGray })
                    }
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO MASONRY
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionCreamDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>Portfolio</span>
              <div className="gold-line" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light" style={S.charcoal}>Selected Projects</h2>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {[
              { src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&h=1000&fit=crop', label: 'Marylebone Townhouse', tag: 'Residential', large: true },
              { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', label: 'Notting Hill Kitchen', tag: 'Residential', large: false },
              { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop', label: 'Chelsea Bedroom Suite', tag: 'Residential', large: false },
              { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop', label: 'Soho Creative Office', tag: 'Commercial', large: true },
              { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop', label: 'Mayfair Apartment', tag: 'Residential', large: false },
              { src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=400&fit=crop', label: 'Shoreditch Restaurant', tag: 'Hospitality', large: false },
              { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop', label: 'Knightsbridge Penthouse', tag: 'Residential', large: false },
              { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', label: 'Belgravia Villa', tag: 'Residential', large: false },
            ].map((img, i) => (
              <div
                key={i}
                className="reveal-up relative group overflow-hidden rounded-xl cursor-pointer"
                style={{
                  gridColumn: img.large ? 'span 2' : 'span 1',
                  gridRow: img.large ? 'span 2' : 'span 1',
                  height: img.large ? '480px' : '220px',
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to top, ${C.charcoal}cc, transparent)` }}
                >
                  <span className="text-[10px] tracking-widest uppercase mb-1" style={{ color: C.gold }}>{img.tag}</span>
                  <span className="text-sm font-light" style={{ color: C.cream }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
          ═══════════════════════════════════════ */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionCharcoal}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>Our Process</span>
              <div className="gold-line" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.cream }}>From Vision to Reality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {[
              { step: '01', title: 'Brief', desc: 'We listen deeply. Your lifestyle, aesthetic preferences, functional needs, and investment level — all explored in detail.' },
              { step: '02', title: 'Concept', desc: 'Mood boards, spatial concepts, material palettes, and reference images presented for your review and refinement.' },
              { step: '03', title: 'Design', desc: 'Final specifications: furniture, materials, lighting, artwork. Every element specified and sourced from our global network.' },
              { step: '04', title: 'Install', desc: 'We manage trades, deliveries, and installation. Final styling and photography on completion. You return to a transformed home.' },
            ].map((s, i) => (
              <div key={s.step} className="reveal-up" style={{ animationDelay: `${i * 0.12}s` }}>
                <div
                  className="text-5xl font-light mb-6"
                  style={{ color: `${C.gold}55` }}
                >
                  {s.step}
                </div>
                <div className="h-px w-10 mb-5" style={{ backgroundColor: C.gold }} />
                <h3 className="text-xl font-light mb-4" style={{ color: C.cream }}>{s.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: `${C.cream}77` }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionCream}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light" style={S.charcoal}>What Our Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionCreamDark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>Questions</span>
              <div className="gold-line" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light" style={S.charcoal}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionCharcoal}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: C.gold }}>Consultation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: C.cream }}>
              Begin Your<br />Design Journey
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: `${C.cream}77` }}>
              Every project begins with a conversation. Book your initial consultation and let&rsquo;s explore what&rsquo;s possible for your space.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Studio', value: '7 Chiltern Street, Marylebone, London W1U 7PX' },
                { label: 'Phone', value: '+44 20 3344 5566' },
                { label: 'Email', value: 'studio@atelierlumiere.com' },
                { label: 'Hours', value: 'Mon–Fri 09:00–18:00 · By appointment' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-px min-h-[32px] flex-shrink-0" style={{ backgroundColor: `${C.gold}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-0.5" style={{ color: C.gold }}>{info.label}</p>
                    <p className="text-sm font-light" style={{ color: `${C.cream}99` }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 43, label: 'consultations booked this month' }}
              vertical="interioros"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442033445566" message="Hi! I'd like to book an interior design consultation with Atelier Lumière." vertical="interioros" />
    </div>
  )
}
