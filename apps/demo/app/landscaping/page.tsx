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
  forestGreen: '#166534',
  forestMid: '#15803d',
  forestLight: '#16a34a',
  sage: '#a3c585',
  sageDark: '#7aab57',
  earth: '#8b6914',
  earthLight: '#a87d1a',
  cream: '#faf8f0',
  creamDark: '#f0ead8',
  charcoal: '#1c2416',
  muted: '#5a6b4e',
  mutedLight: '#7a8c6e',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'GreenCraft Gardens',
  description: 'Landscapes that inspire',
  url: 'https://greencraft-gardens.example.com',
  locale: 'en',
  vertical: 'tradeos',
  theme: 'classic',
  branding: { primaryColor: C.forestGreen, accentColor: C.earth },
  contact: {
    phone: '+44 1865 123 456',
    email: 'hello@greencraft-gardens.example.com',
    whatsapp: '+441865123456',
    address: '4 Plantation Row, Oxford OX2 6QS',
    coordinates: { lat: 51.7549, lng: -1.2553 },
  },
  social: {
    instagram: 'greencraftgardens',
    facebook: 'https://facebook.com/greencraftgardens',
  },
  seo: {
    title: 'GreenCraft Gardens | Landscape Design & Maintenance Oxford',
    description: 'Award-winning landscape design and garden maintenance in Oxford and the Cotswolds. Free consultation.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    name: 'Garden Design',
    desc: 'From concept drawings to planting plans. We design spaces that work in every season and every light.',
    icon: '✏️',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
  },
  {
    name: 'Planting',
    desc: 'Curated planting schemes with seasonal colour, structure, and wildlife value. We source rare cultivars.',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
  },
  {
    name: 'Lawns & Turf',
    desc: 'New lawns laid from premium turf, scarification, overseeding, and weed treatments for existing lawns.',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    name: 'Irrigation',
    desc: 'Automated drip and pop-up irrigation systems. Smart controllers linked to weather forecasts.',
    icon: '💧',
    image: 'https://images.unsplash.com/photo-1597502004047-c01f96e91ea0?w=400&h=300&fit=crop',
  },
  {
    name: 'Tree Surgery',
    desc: 'NPTC-certified arborists for pruning, pollarding, crown reduction, and safe tree removal.',
    icon: '🌳',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop',
  },
  {
    name: 'Maintenance',
    desc: 'Regular garden care throughout the year. From weekly cuts to full seasonal programs.',
    icon: '✂️',
    image: 'https://images.unsplash.com/photo-1562424409-35ee25bfbd52?w=400&h=300&fit=crop',
  },
]

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=1000&fit=crop', label: 'Walled Kitchen Garden', large: true },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop', label: 'Cottage Border' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', label: 'Formal Lawn' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop', label: 'Terrace & Pergola', large: true },
  { src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=400&fit=crop', label: 'Wildflower Meadow' },
  { src: 'https://images.unsplash.com/photo-1597502004047-c01f96e91ea0?w=600&h=400&fit=crop', label: 'Water Feature' },
  { src: 'https://images.unsplash.com/photo-1562424409-35ee25bfbd52?w=600&h=400&fit=crop', label: 'Topiary Collection' },
  { src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop', label: 'Shaded Walkway' },
]

const processSteps = [
  {
    step: '01',
    name: 'Survey',
    desc: 'We visit your site, measure up, photograph existing features, and discuss your vision, lifestyle, and budget.',
  },
  {
    step: '02',
    name: 'Design',
    desc: 'Our designers produce CAD plans, 3D visuals, and detailed planting schemes. We revise until it\'s perfect.',
  },
  {
    step: '03',
    name: 'Build',
    desc: 'Our build team works to the plan. We protect your property, work to schedule, and clear up daily.',
  },
  {
    step: '04',
    name: 'Maintain',
    desc: 'We offer ongoing care plans to keep your garden looking its best through every season.',
  },
]

const maintenancePlans = [
  {
    name: 'Basic',
    price: '£120',
    per: '/month',
    includes: ['Fortnightly mow & edge', 'Seasonal tidy', 'Weeding'],
    featured: false,
  },
  {
    name: 'Premium',
    price: '£250',
    per: '/month',
    includes: ['Weekly mow & edge', 'Pruning & deadheading', 'Seasonal planting', 'Irrigation check', 'Priority booking'],
    featured: true,
  },
  {
    name: 'Estate',
    price: '£500',
    per: '/month',
    includes: ['Twice-weekly visits', 'Full seasonal programmes', 'Tree care', 'Specialist plantings', 'Dedicated team', 'Annual design review'],
    featured: false,
  },
]

const seasonal = [
  { season: 'Spring', tip: 'Prep beds, mulch borders, sow annuals, divide perennials, service lawn.', icon: '🌸', color: '#ec4899' },
  { season: 'Summer', tip: 'Regular watering and feeding. Deadhead roses weekly. Hedge trims in July.', icon: '☀️', color: C.earth },
  { season: 'Autumn', tip: 'Plant bulbs, collect leaves for leaf mould, mulch tender plants, plant trees.', icon: '🍂', color: '#d97706' },
  { season: 'Winter', tip: 'Structural planting, hard landscaping, order seeds, plan next season.', icon: '❄️', color: '#64748b' },
]

const reviews: Review[] = [
  { id: '1', author: 'Claire S.', rating: 5, text: 'GreenCraft transformed our tired back garden into something genuinely breathtaking. The planting plan they produced was clearly the work of real expertise — it looks brilliant in every season.', date: '2026-07-16', source: 'google', verified: true },
  { id: '2', author: 'Richard H.', rating: 5, text: 'We have a walled garden of about 0.4 acres. GreenCraft now manage it on the premium plan and the standard is excellent. Our gardener knows every plant by name.', date: '2026-07-24', source: 'google', verified: true },
  { id: '3', author: 'Fiona L.', rating: 5, text: 'The irrigation system they installed has reduced our water bill by 40% and the lawn looks better than ever. Smart controller linked to the weather forecast.', date: '2026-08-01', source: 'trustpilot', verified: true },
  { id: '4', author: 'David O.', rating: 5, text: 'Three mature trees needed significant pruning. The arborists were careful, informative, and left the garden spotless. Certificate of work issued same day.', date: '2026-08-04', source: 'google', verified: true },
  { id: '5', author: 'Anna B.', rating: 4, text: 'Lovely people to work with. The design consultation took two hours and covered everything. We went with the full build and couldn\'t be happier. Worth every penny.', date: '2026-07-30', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do you offer a free initial consultation?', answer: 'Yes. We offer a free 30-minute phone consultation and a paid site visit (£150, credited against any work we do) for full design projects. Simply maintenance quotes are always free.' },
  { question: 'What areas do you cover?', answer: 'We cover Oxford, the Cotswolds, and surrounding areas within 25 miles of the city centre. For large design and build projects we may travel further — contact us to discuss.' },
  { question: 'How long does a full garden design project take?', answer: 'A typical full garden transformation takes 4–8 weeks from survey to completion, depending on size and scope. We\'ll give you a detailed programme before we start, and we commit to start and end dates.' },
  { question: 'Are your arborists qualified?', answer: 'Yes. All tree work is carried out by our NPTC-certified arborists. We hold full public liability insurance (£5m) for all tree works, and we carry out risk assessments before any climbing work.' },
  { question: 'Can I pause or cancel my maintenance plan?', answer: 'Monthly maintenance plans can be paused or cancelled with 30 days written notice. We don\'t lock you into annual contracts — although customers on longer commitments receive a 10% discount.' },
  { question: 'Do you plant wildlife gardens?', answer: 'Absolutely. We\'re strong advocates for wildlife-friendly design — native planting, wildflower meadows, bug hotels, and water features. We\'re also RHS affiliated and can advise on biodiversity net gain requirements for planning applications.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '09:00', available: true, spotsLeft: 2 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 1 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 3 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://greencraft-gardens.example.com',
  name: 'GreenCraft Gardens',
  description: 'Award-winning landscape design and garden maintenance in Oxford and the Cotswolds.',
  url: 'https://greencraft-gardens.example.com',
  telephone: '+44 1865 123 456',
  email: 'hello@greencraft-gardens.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 Plantation Row',
    addressLocality: 'Oxford',
    postalCode: 'OX2 6QS',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.7549, longitude: -1.2553 },
  priceRange: '£££',
  sameAs: ['https://instagram.com/greencraftgardens'],
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
      style={{ backgroundColor: `${C.charcoal}ee`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.sage}22` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C11 2 5 7 5 13a6 6 0 0012 0c0-6-6-11-6-11Z" fill={C.sage} />
            <path d="M11 9v11" stroke={C.cream} strokeWidth="1" />
            <path d="M11 12c-2-2-4-2-6-1" stroke={C.sage} strokeWidth="0.8" />
          </svg>
          <span style={{ color: C.cream, fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300 }}>
            GreenCraft
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Portfolio', 'Plans', 'Consult'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.mutedLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.sage)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="#consult"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.sage, color: C.sage }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.sage
              e.currentTarget.style.color = C.charcoal
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = C.sage
            }}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function GardenOSDemoPage() {
  return (
    <div style={{ backgroundColor: C.cream, color: C.charcoal }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.sage }} />

      <style>{`
        @keyframes leafSway {
          0%, 100% { transform: rotate(-3deg) translateY(0); }
          50% { transform: rotate(3deg) translateY(-8px); }
        }
        @keyframes leafSway2 {
          0%, 100% { transform: rotate(5deg) translateY(-4px); }
          50% { transform: rotate(-2deg) translateY(4px); }
        }
        .organic-blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Lush Natural
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed garden photo */}
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1800&h=1200&fit=crop&q=90"
          alt="GreenCraft Gardens — lush garden design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Deep green overlay gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(110deg, ${C.charcoal}d0 0%, ${C.forestGreen}88 50%, transparent 100%)`,
          }}
        />

        {/* Organic blob shapes — decorative */}
        <div
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] opacity-20 pointer-events-none organic-blob"
          style={{ backgroundColor: C.sage, filter: 'blur(60px)' }}
        />

        {/* Floating leaf accents */}
        <div
          className="absolute top-28 right-24 text-6xl opacity-30 pointer-events-none hidden lg:block"
          style={{ animation: 'leafSway 7s ease-in-out infinite' }}
        >
          🍃
        </div>
        <div
          className="absolute bottom-48 right-48 text-4xl opacity-20 pointer-events-none hidden lg:block"
          style={{ animation: 'leafSway2 5s ease-in-out infinite' }}
        >
          🌿
        </div>

        <div className="relative z-10 px-6 md:px-16 max-w-5xl pt-28 pb-20 stagger-children">
          <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={{ color: C.sage }}>
            Oxford &amp; Cotswolds &middot; Est. 2009
          </p>

          <h1 className="mb-8">
            {['Landscapes', 'That', 'Inspire.'].map((word, i) => (
              <span
                key={word}
                className="reveal-clip-up block font-extralight leading-[0.92]"
                style={{
                  color: i === 2 ? C.sage : C.cream,
                  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                  letterSpacing: '-0.02em',
                  fontStyle: i === 2 ? 'italic' : 'normal',
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed mb-10 max-w-xl"
            style={{ color: `${C.cream}cc`, animationDelay: '0.55s' }}
          >
            Award-winning garden design and maintenance across Oxford and the Cotswolds.
            From blank canvas to established garden — we build landscapes that last generations.
          </p>

          {/* Seasonal indicator */}
          <div
            className="reveal-up flex items-center gap-4 mb-12"
            style={{ animationDelay: '0.65s' }}
          >
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: `${C.cream}77` }}>Now in Season:</span>
            <div
              className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase rounded-full"
              style={{ backgroundColor: `${C.sage}33`, color: C.sage, border: `1px solid ${C.sage}44` }}
            >
              🌿 Summer — ideal for planting &amp; build
            </div>
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.75s' }}>
            <a
              href="#consult"
              className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
              style={{ borderColor: C.sage, color: C.sage }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.sage
                e.currentTarget.style.color = C.charcoal
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.sage
              }}
            >
              Free Consultation
            </a>
            <a
              href="#portfolio"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: `${C.cream}88` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${C.cream}88`)}
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0,30 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill={C.cream} />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.forestGreen }}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.charcoal }}>Garden Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="reveal-up rounded-2xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${C.charcoal}99, transparent)` }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                  </div>
                </div>
                <div
                  className="p-7"
                  style={{ backgroundColor: C.creamDark, borderTop: `3px solid ${C.sage}55` }}
                >
                  <h3 className="text-lg font-light mb-2" style={{ color: C.charcoal }}>{s.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. PORTFOLIO MASONRY
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.sage }}>Transformations</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ color: C.cream }}>Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-children">
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className={`reveal-up relative overflow-hidden rounded-xl group cursor-pointer ${img.large ? 'col-span-2 row-span-2' : ''}`}
                style={{ height: img.large ? undefined : '220px', animationDelay: `${i * 0.07}s` }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{ minHeight: img.large ? '460px' : '220px' }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100 flex items-end p-5"
                  style={{ background: `linear-gradient(to top, ${C.charcoal}cc, transparent)` }}
                >
                  <span className="text-sm font-light tracking-[0.1em]" style={{ color: C.cream }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. DESIGN PROCESS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.forestGreen }}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Design Process</h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-[10%] right-[10%] h-[2px] hidden md:block pointer-events-none"
              style={{ backgroundColor: `${C.sage}44` }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 stagger-children">
              {processSteps.map((step, i) => (
                <div key={step.step} className="reveal-up text-center relative" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-light"
                    style={{ backgroundColor: C.creamDark, border: `2px solid ${C.sage}`, color: C.forestGreen, position: 'relative', zIndex: 1 }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-light mb-3" style={{ color: C.charcoal }}>{step.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. SEASONAL CARE
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.forestGreen }}>Year-Round Care</p>
            <h2 className="text-3xl md:text-4xl font-extralight" style={{ color: C.charcoal }}>Seasonal Tips</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 stagger-children">
            {seasonal.map((s, i) => (
              <div
                key={s.season}
                className="reveal-up rounded-xl p-6 text-center"
                style={{ backgroundColor: C.cream, border: `1px solid ${C.sage}33`, animationDelay: `${i * 0.08}s` }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 className="text-sm font-medium tracking-[0.15em] uppercase mb-3" style={{ color: s.color }}>{s.season}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: C.muted }}>{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. MAINTENANCE PLANS
          ═══════════════════════════════════════ */}
      <section id="plans" className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.forestGreen }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.sage }}>Ongoing Care</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.cream }}>Maintenance Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {maintenancePlans.map((p, i) => (
              <div
                key={p.name}
                className="reveal-up rounded-2xl p-10"
                style={{
                  backgroundColor: p.featured ? C.cream : `${C.forestMid}55`,
                  border: p.featured ? `2px solid ${C.cream}` : `1px solid ${C.sage}22`,
                  transform: p.featured ? 'scale(1.04)' : 'scale(1)',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {p.featured && (
                  <div
                    className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1 rounded-full mb-6"
                    style={{ backgroundColor: C.forestGreen, color: C.sage }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  className="text-xl font-light mb-4"
                  style={{ color: p.featured ? C.forestGreen : C.cream }}
                >
                  {p.name}
                </h3>
                <div
                  className="flex items-end gap-1 mb-6"
                  style={{ color: p.featured ? C.forestGreen : C.sage }}
                >
                  <span className="text-4xl font-extralight">{p.price}</span>
                  <span className="text-sm mb-1 font-light">{p.per}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-light"
                      style={{ color: p.featured ? C.muted : `${C.cream}cc` }}
                    >
                      <span style={{ color: p.featured ? C.forestGreen : C.sage }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#consult"
                  className="block text-center border px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    borderColor: p.featured ? C.forestGreen : C.sage,
                    color: p.featured ? C.forestGreen : C.sage,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = p.featured ? C.forestGreen : C.sage
                    e.currentTarget.style.color = p.featured ? C.cream : C.charcoal
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = p.featured ? C.forestGreen : C.sage
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.forestGreen }}>Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.cream }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.forestGreen }}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.charcoal }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="LandscapeOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FREE CONSULTATION CTA
          ═══════════════════════════════════════ */}
      <section id="consult" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=800&fit=crop")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: C.sage }}>No Obligation</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={{ color: C.cream }}>
              Free Garden<br />Consultation
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: C.mutedLight }}>
              Tell us about your garden and your vision. We&rsquo;ll come to you, take a look, and give you honest advice &mdash; completely free.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Coverage', detail: 'Oxford and within 25 miles. Cotswolds villages welcome.' },
                { title: 'Response', detail: 'We reply within 24 hours and arrange a visit within the week.' },
                { title: 'No Pressure', detail: 'Free quotes are genuinely free. No hidden fees, no chasing.' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.sage}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: C.sage }}>{info.title}</p>
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
              socialProof={{ count: 63, label: 'consultations booked this month' }}
              vertical="tradeos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="+441865123456"
        message="Hi! I'd like a free garden consultation with GreenCraft"
        vertical="tradeos"
      />
    </div>
  )
}
