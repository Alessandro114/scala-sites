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
import { generateLocalBusinessJsonLd, generateFAQJsonLd, generateScalaProductJsonLd } from '@scala-sites/core/lib/seo'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  charcoal:  '#2c2c2c',
  black:     '#1a1a1a',
  deepRed:   '#8b1a0f',
  red:       '#c0392b',
  redGlow:   '#e85d4a',
  orange:    '#e67e22',
  cream:     '#fdf6e3',
  creamDark: '#f0e8d0',
  olive:     '#4a7c59',
  muted:     '#9a8a7a',
  warmWhite: '#fffaf2',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Napoletana',
  description: 'Autentica pizza napoletana, forno a legna, Londra',
  url: 'https://napoletana.london',
  locale: 'en',
  vertical: 'dineos',
  theme: 'classic',
  branding: { primaryColor: C.charcoal, accentColor: C.red },
  contact: {
    phone: '+44 20 7946 0330',
    email: 'ciao@napoletana.london',
    whatsapp: '+442079460330',
    address: '7 Exmouth Market, Clerkenwell, London EC1R 4QE',
    coordinates: { lat: 51.5254, lng: -0.1094 },
  },
  social: {
    instagram: 'napoletanalondra',
    facebook: 'https://facebook.com/napoletanalondra',
  },
  seo: {
    title: 'Napoletana — Autentica Pizza Napoletana | London',
    description: 'Authentic Neapolitan pizza in the heart of London. Wood-fired oven, 72-hour dough, imported Italian ingredients.',
  },
}

// ─────────────────────────────────────────────
// MENU DATA
// ─────────────────────────────────────────────
interface PizzaItem {
  name:      string
  desc:      string
  price:     number
  tags:      string[]
  image?:    string
  featured?: boolean
}

const menu: PizzaItem[] = [
  {
    name:     'Margherita DOP',
    desc:     'San Marzano DOP, fior di latte, fresh basil, EVOO',
    price:    8,
    tags:     ['vegetarian', 'best seller'],
    image:    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=800&fit=crop',
    featured: true,
  },
  {
    name:     'Diavola',
    desc:     'San Marzano, mozzarella, Calabrian nduja, chilli oil',
    price:    10,
    tags:     ['spicy'],
    image:    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  },
  {
    name:     'Tartufo e Funghi',
    desc:     'Black truffle cream, porcini, smoked scamorza, thyme',
    price:    14,
    tags:     ['vegetarian', 'premium'],
    image:    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  },
  {
    name:     'Calzone al Forno',
    desc:     'Ricotta, salame piccante, mozzarella, San Marzano',
    price:    11,
    tags:     [],
  },
  {
    name:     'Bufalina',
    desc:     'San Marzano, buffalo mozzarella DOP, cherry tomatoes, basil',
    price:    13,
    tags:     ['vegetarian'],
    image:    'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=600&fit=crop',
  },
  {
    name:     'Prosciutto e Rucola',
    desc:     'Mozzarella, 24-month Prosciutto di Parma DOP, wild rocket, shaved parmesan',
    price:    12,
    tags:     [],
  },
  {
    name:     'Quattro Formaggi',
    desc:     'Mozzarella, gorgonzola, provolone, ricotta, honey drizzle',
    price:    11,
    tags:     ['vegetarian'],
  },
  {
    name:     "Marinara dell'800",
    desc:     'San Marzano, garlic, oregano, EVOO — the original Neapolitan',
    price:    7,
    tags:     ['vegan', 'classic'],
  },
  {
    name:     'Salsiccia e Friarielli',
    desc:     'Neapolitan sausage, sautéed broccoli rabe, fior di latte, chilli',
    price:    12,
    tags:     [],
    image:    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=600&fit=crop',
  },
  {
    name:     'Vegan Napoli',
    desc:     'San Marzano, grilled aubergine, courgette, Castelvetrano olives, capers',
    price:    10,
    tags:     ['vegan'],
  },
  {
    name:     'Cosacca',
    desc:     'San Marzano, pecorino romano, fresh basil — the aristocrat of pizzas',
    price:    9,
    tags:     ['vegetarian'],
  },
  {
    name:     'Montanara Fritta',
    desc:     'Fried then oven-finished: provola affumicata, piennolo tomatoes, basil',
    price:    11,
    tags:     ['chef special'],
  },
]

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
const gallery = [
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=900&fit=crop', label: 'The Oven Room', tall: true },
  { src: 'https://images.unsplash.com/photo-1571407970349-bc81e71e6774?w=600&h=400&fit=crop', label: 'Dough Stretching' },
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', label: 'Out of the Oven' },
  { src: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700&h=900&fit=crop', label: 'San Marzano Crush', tall: true },
  { src: 'https://images.unsplash.com/photo-1605043795524-b1f4d8e89a29?w=600&h=400&fit=crop', label: 'The Slice' },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop', label: 'Truffle Special' },
  { src: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=600&h=400&fit=crop', label: 'Chef at Work' },
  { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&h=400&fit=crop', label: 'Margherita Close-Up' },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Marco V.', rating: 5, text: "Sono napoletano e questa è l'unica pizza a Londra che mi fa sentire a casa. La cornice è perfetta, alveolata, profumata. Complimenti.", date: '2026-07-18', source: 'google', verified: true },
  { id: '2', author: 'Hannah R.', rating: 5, text: "Best pizza I've had outside of Naples, full stop. The Bufalina with genuine buffalo mozzarella is something else. The crust has that leopard char that tells you the oven was screaming hot.", date: '2026-07-30', source: 'google', verified: true },
  { id: '3', author: 'Luca P.', rating: 5, text: 'Ordered delivery on a Friday night. Pizza arrived in 28 minutes, still hot, crust still had structure. That never happens. Immediately became my weekly order.', date: '2026-08-04', source: 'google', verified: true },
  { id: '4', author: 'Sophie T.', rating: 4, text: 'The atmosphere is electric — you can see the wood oven from every table. The Tartufo e Funghi is extraordinary. Slightly long wait on weekends but worth it.', date: '2026-07-22', source: 'tripadvisor', verified: true },
  { id: '5', author: 'Federica M.', rating: 5, text: "Fior di latte genuino, pomodori San Marzano DOP, impasto a 72 ore. Questi ragazzi non tagliano angoli. La Montanara fritta è il piatto più onesto che abbia mangiato quest'anno.", date: '2026-08-01', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'Is the dough really 72-hour proved?', answer: 'Yes. Every batch of dough is hand-mixed using 00 Caputo flour, left at room temperature for the first 12 hours, then cold-proved in our fridge for 60 hours. This slow fermentation is what gives the crust its flavour, lightness, and digestibility.' },
  { question: 'Do you deliver, and how far?', answer: 'We deliver within a 5km radius of Exmouth Market via our own riders (not Deliveroo — no commission markup). Delivery charge is £2.50, free on orders over £25. Order by WhatsApp or through our website.' },
  { question: 'Can I book for a large group?', answer: 'Yes! We can accommodate groups of up to 20 in our main room, and up to 40 for private hire of the whole restaurant (Monday–Wednesday evenings). Contact us for group menus.' },
  { question: 'Are your ingredients really imported from Italy?', answer: 'San Marzano DOP tomatoes, Caputo flour, buffalo mozzarella DOP, 00 olive oil, and all our salumi are imported directly from Campania and Emilia-Romagna. Our mozzarella arrives twice a week.' },
  { question: 'Do you cater for dietary requirements?', answer: 'We have vegan options (Marinara, Vegan Napoli), vegetarian pizzas clearly marked, and all crusts are egg-free. We cannot guarantee a fully gluten-free environment due to airborne flour, but we can discuss individual needs — just call ahead.' },
  { question: 'How do I get the best seat?', answer: 'Reserve via WhatsApp or book on this page. Ask for the counter seats facing the oven — it\'s the most spectacular spot in the house, especially when the pizzaiolos are in full flow.' },
]

// ─────────────────────────────────────────────
// BOOKING SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '12:00', available: true,  spotsLeft: 6 },
  { id: '2', date: today, time: '12:30', available: true,  spotsLeft: 3 },
  { id: '3', date: today, time: '13:00', available: false, spotsLeft: 0 },
  { id: '4', date: today, time: '18:30', available: true,  spotsLeft: 8 },
  { id: '5', date: today, time: '19:00', available: true,  spotsLeft: 4 },
  { id: '6', date: today, time: '19:30', available: true,  spotsLeft: 2 },
  { id: '7', date: today, time: '20:00', available: true,  spotsLeft: 5 },
  { id: '8', date: today, time: '20:30', available: true,  spotsLeft: 7 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusiness  = generateLocalBusinessJsonLd(siteConfig)
const faqSchema      = generateFAQJsonLd(faqs)
const productSchema  = generateScalaProductJsonLd(
  'PizzaOS',
  'AI-powered platform for pizzerias and restaurant delivery: online ordering, WhatsApp AI, table booking, kitchen display, loyalty, and real-time analytics — all in one.',
)

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  page:      { backgroundColor: C.charcoal, color: C.cream }   as React.CSSProperties,
  dark:      { backgroundColor: C.black }                       as React.CSSProperties,
  cream:     { backgroundColor: C.cream,    color: C.charcoal } as React.CSSProperties,
  red:       { color: C.red }                                    as React.CSSProperties,
  redText:   { color: C.redGlow }                               as React.CSSProperties,
  creamText: { color: C.cream }                                  as React.CSSProperties,
  muted:     { color: C.muted }                                  as React.CSSProperties,
  olive:     { color: C.olive }                                  as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.black}ee`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.red}33` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-black tracking-[0.15em] uppercase" style={{ color: C.cream, fontFamily: '"Impact", "Arial Black", sans-serif', letterSpacing: '0.08em' }}>
          NAPOLETANA
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Menu', 'Story', 'Gallery', 'Book'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
            style={{ backgroundColor: C.red, color: C.cream }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.redGlow)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.red)}
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
export default function PizzeriaPage() {
  return (
    <div style={S.page}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Global keyframes */}
      <style>{`
        @keyframes steam-rise {
          0%   { transform: translateY(0) scaleX(1) translateX(0); opacity: 0.6; }
          40%  { transform: translateY(-60px) scaleX(1.3) translateX(8px); opacity: 0.4; }
          100% { transform: translateY(-120px) scaleX(0.6) translateX(-4px); opacity: 0; }
        }
        @keyframes flame-flicker {
          0%, 100% { opacity: 1;   transform: scaleY(1) scaleX(1); }
          33%       { opacity: 0.8; transform: scaleY(1.08) scaleX(0.95); }
          66%       { opacity: 0.9; transform: scaleY(0.96) scaleX(1.04); }
        }
        @keyframes ember-drift {
          0%   { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--dx, 20px), -80px) scale(0.3); opacity: 0; }
        }
        .steam-puff {
          animation: steam-rise 3s ease-out infinite;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          filter: blur(8px);
          position: absolute;
        }
        .flame { animation: flame-flicker 0.6s ease-in-out infinite; }
        .ember { animation: ember-drift 2s ease-out infinite; }
        .image-reveal:hover > div[style*="clip-path"] {
          clip-path: inset(0 0 0 0) !important;
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Split Screen: Oven Glow + Ingredients
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT: Wood-fired oven glow gradient + animated steam/flames */}
        <div
          className="relative flex flex-col justify-center items-center min-h-[50vh] md:min-h-screen overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at 60% 80%, #ff6b35 0%, #e84118 20%, #c0392b 40%, #8b1a0f 65%, #2c0a06 100%)
            `,
          }}
        >
          {/* Oven arch shape */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width:           340,
              height:          240,
              borderRadius:    '170px 170px 0 0',
              background:      `radial-gradient(ellipse at center 70%, #ff9f43 0%, #e67e22 30%, #8b1a0f 70%, transparent 100%)`,
              opacity:         0.85,
              filter:          'blur(2px)',
            }}
          />
          {/* Inner oven glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width:    200,
              height:   160,
              borderRadius: '100px 100px 0 0',
              background: 'radial-gradient(ellipse at center 80%, #ffe500 0%, #ff9f43 50%, transparent 100%)',
              opacity:  0.6,
            }}
          />

          {/* Steam puffs */}
          {[
            { left: '42%', bottom: '28%', width: 24, height: 32, delay: '0s' },
            { left: '48%', bottom: '32%', width: 18, height: 28, delay: '1s' },
            { left: '55%', bottom: '26%', width: 20, height: 30, delay: '2s' },
            { left: '36%', bottom: '24%', width: 16, height: 24, delay: '0.5s' },
          ].map((p, i) => (
            <div
              key={i}
              className="steam-puff"
              style={{
                left:              p.left,
                bottom:            p.bottom,
                width:             p.width,
                height:            p.height,
                animationDelay:    p.delay,
                animationDuration: `${2.5 + i * 0.4}s`,
              }}
            />
          ))}

          {/* Embers */}
          {[
            { left: '45%', bottom: '30%', dx: '15px',  delay: '0.3s' },
            { left: '50%', bottom: '28%', dx: '-20px', delay: '0.9s' },
            { left: '53%', bottom: '32%', dx: '10px',  delay: '1.6s' },
          ].map((em, i) => (
            <div
              key={i}
              className="ember"
              style={{
                position:          'absolute',
                left:              em.left,
                bottom:            em.bottom,
                width:             4,
                height:            4,
                borderRadius:      '50%',
                backgroundColor:   '#ff9f43',
                ['--dx' as string]: em.dx,
                animationDelay:    em.delay,
                animationDuration: `${1.8 + i * 0.3}s`,
              }}
            />
          ))}

          {/* Left hero text */}
          <div className="relative z-10 text-center px-8 pb-16 md:pb-0 pt-24 md:pt-0">
            <p
              className="text-xs tracking-[0.5em] uppercase mb-4"
              style={{ color: '#ff9f43' }}
            >
              Est. 2019 &middot; Clerkenwell, London
            </p>
            <h1
              className="leading-none mb-4"
              style={{
                fontSize:    'clamp(3.5rem, 10vw, 8rem)',
                fontFamily:  '"Impact", "Arial Narrow", "Arial Black", sans-serif',
                fontWeight:  900,
                color:       C.cream,
                textShadow:  `0 0 60px ${C.red}88, 0 4px 24px rgba(0,0,0,0.8)`,
                letterSpacing: '-0.02em',
                lineHeight:  0.9,
              }}
            >
              NAPOLE-<br />TANA
            </h1>
            <div
              className="w-16 h-1 mx-auto my-5 rounded-full"
              style={{ backgroundColor: C.red }}
            />
            <p
              className="text-sm md:text-base font-light italic"
              style={{ color: '#ffe4c4', letterSpacing: '0.05em' }}
            >
              Vera Pizza Napoletana
            </p>
          </div>
        </div>

        {/* RIGHT: Ingredient photography */}
        <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&h=1200&fit=crop&q=90"
            alt="Margherita pizza fresh from the wood-fired oven"
            className="w-full h-full object-cover"
          />
          {/* Left-edge blend to oven glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${C.deepRed} 0%, transparent 35%)`,
            }}
          />
          {/* Bottom content overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
            style={{
              background: `linear-gradient(to top, ${C.black}ee 0%, ${C.black}88 40%, transparent 100%)`,
            }}
          >
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6">
              {[
                { n: '72h', label: 'Proved dough' },
                { n: '485°', label: 'Oven temperature' },
                { n: '90s', label: 'Bake time' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black" style={{ color: C.orange }}>{s.n}</p>
                  <p className="text-xs tracking-widest uppercase" style={{ color: C.muted }}>{s.label}</p>
                </div>
              ))}
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="px-8 py-3 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300"
                style={{ backgroundColor: C.red, color: C.cream }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.redGlow)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.red)}
              >
                See the Menu
              </a>
              <a
                href="#book"
                className="px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300"
                style={{ border: `1px solid ${C.cream}66`, color: C.cream }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.cream
                  e.currentTarget.style.color           = C.charcoal
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color           = C.cream
                }}
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. MARQUEE TICKER
          ═══════════════════════════════════════ */}
      <section
        className="overflow-hidden py-4 cursor-default select-none"
        style={{ backgroundColor: C.red }}
      >
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {[
                'Vera Pizza Napoletana',
                'Forno a Legna 485°',
                'Impasto 72 Ore',
                'San Marzano DOP',
                'Buffalo Mozzarella DOP',
                'Caputo 00 Flour',
                'Consegna a Domicilio',
                'Aperto 7 Giorni',
              ].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-black tracking-[0.2em] uppercase" style={{ color: C.cream }}>
                    {item}
                  </span>
                  <span className="text-base" style={{ color: `${C.cream}55` }}>&#x25CF;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. MENU — Bento Grid
          ═══════════════════════════════════════ */}
      <section
        id="menu"
        className="relative py-24 md:py-32 px-6 md:px-16 grain"
        style={S.dark}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>
              La Pizza
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-none mb-2" style={S.creamText}>
              Il Menù
            </h2>
            <p className="text-sm" style={S.muted}>All pizzas baked in our wood-fired oven at 485°C</p>
          </div>

          <div className="bento-grid stagger-children">
            {menu.map((item, i) => {
              const isFeatured = item.featured
              return (
                <div
                  key={item.name}
                  className="glass-card magnetic-card relative overflow-hidden group cursor-pointer reveal-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, ${C.black}f0 0%, ${C.black}88 45%, transparent 100%)`,
                        }}
                      />
                    </>
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at bottom right, ${C.red}18, transparent)`,
                      }}
                    />
                  )}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: tag === 'vegan' ? `${C.olive}33` : tag === 'spicy' ? `${C.red}33` : `${C.orange}22`,
                              color:           tag === 'vegan' ? C.olive       : tag === 'spicy' ? C.redGlow : C.orange,
                              border:          `1px solid currentColor`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3
                      className={`font-black leading-tight mb-1 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'}`}
                      style={{ ...S.creamText, fontFamily: 'inherit' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`font-light mb-3 leading-snug ${isFeatured ? 'text-sm' : 'text-xs'}`}
                      style={S.muted}
                    >
                      {item.desc}
                    </p>
                    <p
                      className={`font-black ${isFeatured ? 'text-2xl' : 'text-lg'}`}
                      style={S.red}
                    >
                      &euro;{item.price}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Order CTA */}
          <div className="text-center mt-12 reveal-up">
            <a
              href="#book"
              className="inline-block px-12 py-4 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300"
              style={{ backgroundColor: C.red, color: C.cream }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.redGlow)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.red)}
            >
              Order Online or Book a Table
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. OUR STORY
          ═══════════════════════════════════════ */}
      <section
        id="story"
        className="relative py-24 md:py-40 px-6 md:px-16 overflow-hidden"
        style={{ backgroundColor: C.cream, color: C.charcoal }}
      >
        <div
          className="blob absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
          style={{ backgroundColor: C.red, filter: 'blur(100px)' }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[6fr_5fr] gap-16 items-center relative z-10">
          {/* Story text */}
          <div className="reveal-left">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-6"
              style={S.red}
            >
              La Nostra Storia
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8" style={{ color: C.charcoal }}>
              From the streets<br />of Naples to<br />Clerkenwell
            </h2>
            <blockquote
              className="text-xl md:text-2xl font-light italic leading-snug mb-10 pl-6"
              style={{
                color:      C.red,
                borderLeft: `3px solid ${C.red}`,
              }}
            >
              &ldquo;Real Neapolitan pizza has only two enemies: shortcuts and silence. We do neither.&rdquo;
            </blockquote>
            <p className="text-base font-light leading-relaxed mb-6" style={{ color: '#4a3a2a' }}>
              Chef Ciro De Luca learned the art of pizza at his grandfather&rsquo;s
              pizzeria in Spaccanapoli, Naples — a place that has been baking
              pizza for over 80 years. When Ciro moved to London in 2015, he
              was horrified by what passed for Neapolitan pizza. Four years
              later, he opened Napoletana.
            </p>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: '#4a3a2a' }}>
              Every element is authentic: the 72-hour proved dough, the San
              Marzano DOP tomatoes shipped weekly from Campania, the buffalo
              mozzarella arriving fresh twice a week, and the wood-fired oven
              that reaches 485°C — hotter than any domestic or gas oven could
              manage. A real Neapolitan pizza bakes in 90 seconds. Anything
              slower is not the real thing.
            </p>
            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'AVPN Certified', sub: 'Associazione Verace Pizza Napoletana' },
                { label: 'Gambero Rosso', sub: 'Tre Spicchi 2025' },
              ].map((cert) => (
                <div
                  key={cert.label}
                  className="px-5 py-4 rounded-sm"
                  style={{ border: `2px solid ${C.red}33`, backgroundColor: `${C.red}08` }}
                >
                  <p className="text-sm font-black" style={{ color: C.red }}>{cert.label}</p>
                  <p className="text-xs" style={{ color: C.muted }}>{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chef portrait */}
          <div className="reveal-right">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ boxShadow: `0 32px 80px ${C.charcoal}44` }}
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&h=900&fit=crop&q=90"
                alt="Chef Ciro De Luca — pizzaiolo"
                className="w-full object-cover"
                style={{ maxHeight: 580 }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: `linear-gradient(to top, ${C.charcoal}cc, transparent)`,
                }}
              >
                <p className="text-sm font-black" style={S.creamText}>Ciro De Luca</p>
                <p className="text-xs tracking-widest uppercase" style={S.muted}>Head Pizzaiolo &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. GALLERY
          ═══════════════════════════════════════ */}
      <section
        id="gallery"
        className="relative py-24 md:py-32 px-6 md:px-16"
        style={S.dark}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>
              La Pizzeria
            </p>
            <h2 className="text-4xl md:text-6xl font-black" style={S.creamText}>
              Behind the Oven
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger-children">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`image-reveal reveal-up relative group overflow-hidden rounded-sm cursor-pointer ${img.tall ? 'row-span-2' : ''}`}
                style={{
                  animationDelay: `${i * 0.07}s`,
                  height:         img.tall ? undefined : 220,
                  minHeight:      img.tall ? 460 : 220,
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background: `linear-gradient(to top, ${C.black}cc, transparent)`,
                    clipPath:   'inset(100% 0 0 0)',
                  }}
                >
                  <span className="text-xs tracking-[0.15em] uppercase font-light" style={S.creamText}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. REVIEWS
          ═══════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 overflow-hidden grain"
        style={{ backgroundColor: C.charcoal }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>
            La Clientela
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={S.creamText}>
            What People Say
          </h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. DELIVERY ZONE
          ═══════════════════════════════════════ */}
      <section
        className="py-16 md:py-20 px-6 md:px-16 grain"
        style={S.dark}
      >
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>
            Delivery
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-6" style={S.creamText}>
            We Deliver Within 5km
          </h2>
          <p className="text-base font-light mb-8" style={S.muted}>
            No Deliveroo surcharge. Our own riders, our own quality control.
            £2.50 delivery fee — free on orders over £25.
          </p>
          {/* Map placeholder */}
          <div
            className="rounded-sm overflow-hidden relative"
            style={{
              height:          300,
              border:          `1px solid ${C.red}33`,
              backgroundColor: `${C.black}`,
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${C.red}22`, border: `2px solid ${C.red}44` }}
              >
                📍
              </div>
              <p className="text-sm font-light" style={S.muted}>7 Exmouth Market, Clerkenwell EC1R 4QE</p>
              <p className="text-xs" style={{ color: C.red }}>5km radius delivery zone</p>
            </div>
            {/* Concentric circles */}
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width:       n * 120,
                  height:      n * 120,
                  border:      `1px dashed ${C.red}${n === 1 ? '66' : n === 2 ? '44' : '22'}`,
                  pointerEvents: 'none',
                }}
              />
            ))}
          </div>
          <p className="text-xs mt-4" style={S.muted}>
            Areas: Clerkenwell &middot; Islington &middot; Farringdon &middot; Barbican &middot; Angel &middot; Kings Cross
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. BOOKING
          ═══════════════════════════════════════ */}
      <section
        id="book"
        className="relative py-24 md:py-32 px-6 md:px-16 grain overflow-hidden"
        style={{ backgroundColor: C.charcoal }}
      >
        <div
          className="blob absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
          style={{ backgroundColor: C.red, filter: 'blur(100px)' }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>
              Prenota
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={S.creamText}>
              Reserve<br />Your Table
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Book directly — no commission app, no extra fee. Confirmed
              in seconds via WhatsApp.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Hours',       value: 'Mon–Thu 12:00–22:30 | Fri–Sat 12:00–23:30 | Sun 13:00–22:00' },
                { label: 'Telephone',   value: '+44 20 7946 0330' },
                { label: 'Walk-ins',    value: 'We keep 30% of tables for walk-ins. Come early at weekends.' },
                { label: 'Large groups', value: 'Groups of 8+ please call ahead.' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[36px] rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: `${C.red}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.red}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 412, label: 'pizzas served this week' }}
              vertical="dineos"
              onSubmit={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.red}>
              Domande
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.creamText}>
              FAQ
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion
              items={faqs}
              locale="en"
              verticalName="PizzaOS"
              accentColor={C.red}
              answerBlockText="SCALA PizzaOS is an AI platform for Neapolitan pizzerias and delivery restaurants. It combines online ordering, WhatsApp AI booking via SARA, kitchen display integration, real-time table availability, loyalty rewards, and live revenue analytics — replacing five separate tools with one dashboard, from €97/month."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="+442079460330"
        message="Ciao! Vorrei prenotare un tavolo da Napoletana."
        vertical="dineos"
      />
    </div>
  )
}
