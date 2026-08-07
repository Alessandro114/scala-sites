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
  charcoal: '#1a1a1a',
  charcoalAlt: '#111111',
  charcoalLight: '#222222',
  gold: '#c9a84c',
  goldLight: '#dfc070',
  goldDim: '#a8883a',
  cream: '#faf8f5',
  creamDark: '#f0ece5',
  warmWhite: '#e8e0d0',
  muted: '#9a8e7e',
  mutedDark: '#6a6050',
} as const

const S = {
  page: { backgroundColor: C.charcoal, color: C.cream } as React.CSSProperties,
  dark: { backgroundColor: C.charcoalAlt } as React.CSSProperties,
  mid: { backgroundColor: C.charcoalLight } as React.CSSProperties,
  cream: { color: C.cream } as React.CSSProperties,
  gold: { color: C.gold } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Élite Catering Co.',
  description: 'Premium event catering for weddings, corporate, and private dining',
  url: 'https://elitecatering.example.com',
  locale: 'en',
  vertical: 'cateringos',
  theme: 'classic',
  branding: { primaryColor: C.charcoal, accentColor: C.gold },
  contact: {
    phone: '+44 20 7946 1200',
    email: 'enquiries@elitecatering.com',
    whatsapp: '+442079461200',
    address: '18 Bruton Street, Mayfair, London W1J 6LY',
    coordinates: { lat: 51.512, lng: -0.143 },
  },
  social: {
    instagram: 'elitecateringco',
    facebook: 'https://facebook.com/elitecateringco',
  },
  seo: {
    title: 'Élite Catering Co. | Award-Winning Event Catering London',
    description: 'Premium catering for corporate events, weddings, private dining and festivals.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const services = [
  {
    title: 'Corporate Events',
    desc: 'From board lunches to company-wide celebrations — impeccable service, precise logistics, bespoke menus tailored to your brand.',
    icon: '◈',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
  },
  {
    title: 'Weddings',
    desc: 'Your most important day deserves perfection. We handle every detail from welcome canapés to the midnight dessert station.',
    icon: '◇',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
  },
  {
    title: 'Private Dining',
    desc: 'Intimate suppers for 8 to 80 guests. A personal chef, sommelier service, and a menu crafted around your preferences.',
    icon: '◉',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
  },
  {
    title: 'Festival & Outdoor',
    desc: 'Street food stalls to luxury pop-up dining — we bring fine food to any terrain, any weather, any scale.',
    icon: '◎',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
  },
]

const menuTiers = [
  {
    name: 'Silver',
    price: '£45',
    unit: 'per person',
    courses: [
      'Canapés on arrival (3 varieties)',
      'Starter: Roasted heirloom tomato soup or Smoked salmon rillette',
      'Main: Herb-crusted chicken supreme or Ricotta & spinach Wellington',
      'Dessert: Classic crème brûlée',
      'Tea & filter coffee service',
    ],
    highlight: false,
  },
  {
    name: 'Gold',
    price: '£75',
    unit: 'per person',
    courses: [
      'Canapés on arrival (6 varieties)',
      'Starter: Burrata & heritage tomato or Pan-seared scallop',
      'Intermezzo: Champagne sorbet',
      'Main: Beef tenderloin with truffle jus or Seabass en papillote',
      'Dessert: Dark chocolate fondant with sea salt caramel ice cream',
      'Petit fours & barista coffee',
    ],
    highlight: true,
  },
  {
    name: 'Platinum',
    price: '£120',
    unit: 'per person',
    courses: [
      'Arrival champagne & luxury canapés (10 varieties)',
      'Amuse-bouche from our head chef',
      'Starter: Lobster bisque or Wagyu beef tataki',
      'Fish course: Turbot with caviar beurre blanc',
      'Intermezzo: Elderflower & cucumber granita',
      'Main: Côte de boeuf (carved tableside) or Truffle-infused risotto',
      'Cheese board: 5 artisan selections with accompaniments',
      'Dessert: Mille-feuille or Soufflé au citron',
      'Mignardises, sommelier-paired wines, barista station',
    ],
    highlight: false,
  },
]

const portfolioEvents = [
  { label: 'Mayfair Corporate Gala · 400 guests', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop', large: true },
  { label: 'Chelsea Wedding · 120 guests', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=450&fit=crop' },
  { label: 'Private Supper Club · 24 guests', src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=450&fit=crop' },
  { label: 'Henley Regatta Marquee · 600 guests', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=450&fit=crop', large: true },
  { label: 'Product Launch · 80 guests', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=450&fit=crop' },
  { label: 'Board Dinner · 12 guests', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=450&fit=crop' },
  { label: 'Garden Party · 200 guests', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=450&fit=crop' },
  { label: 'Awards Ceremony · 350 guests', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=450&fit=crop' },
]

const processSteps = [
  { step: '01', title: 'Enquiry', desc: 'Tell us about your event — date, venue, guest count, and vision. We respond within 4 hours.' },
  { step: '02', title: 'Tasting', desc: 'Visit our Mayfair kitchen for a private tasting session. Refine the menu together with our head chef.' },
  { step: '03', title: 'Planning', desc: 'Our event coordinators handle logistics, dietary requirements, staffing, equipment, and timelines.' },
  { step: '04', title: 'Execution', desc: 'On the day, our team arrives 3 hours early. You relax — we take care of everything, immaculately.' },
]

const reviews: Review[] = [
  { id: '1', author: 'Victoria H.', rating: 5, text: 'Élite Catering transformed our company gala into something truly unforgettable. The Gold menu was exquisite — guests are still talking about the scallops three months later.', date: '2026-06-10', source: 'google', verified: true },
  { id: '2', author: 'James & Sophie T.', rating: 5, text: 'They catered our wedding for 180 guests and every single plate arrived hot, beautifully presented, and perfectly timed. The Platinum menu was worth every penny.', date: '2026-07-02', source: 'google', verified: true },
  { id: '3', author: 'Marcus F.', rating: 5, text: 'As a corporate event planner, I\'ve worked with dozens of caterers. Élite is simply in another league — the logistics, the presentation, the staff professionalism. No comparison.', date: '2026-07-18', source: 'tripadvisor', verified: true },
  { id: '4', author: 'Amanda R.', rating: 5, text: 'We hosted a private dinner for 14 at home. A personal chef, two servers, and a sommelier arrived and made it feel like a Michelin-starred restaurant. Absolutely magical.', date: '2026-08-01', source: 'google', verified: true },
  { id: '5', author: 'David L.', rating: 5, text: 'From the first tasting session to the final petit four, every detail was perfect. The team anticipated every need. This is what hospitality at its finest looks like.', date: '2026-07-25', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'What is your minimum guest count?', answer: 'We cater for events from 10 to 2,000+ guests. For intimate private dining, our minimum is 8 guests. Corporate and wedding packages have no upper limit — we scale our team accordingly.' },
  { question: 'How far in advance should I book?', answer: 'For weddings and large events (200+ guests), we recommend booking 6–12 months in advance. Corporate events and private dinners can often be arranged with 2–4 weeks notice, subject to availability.' },
  { question: 'Can you accommodate dietary requirements?', answer: 'Absolutely. We cater for all dietary requirements including vegan, vegetarian, gluten-free, halal, kosher, and all allergies. All requirements are collected in our event planning questionnaire and briefed to the kitchen team.' },
  { question: 'Do you provide staffing and equipment?', answer: 'Yes — all packages include professional waiting staff, chefs, kitchen equipment, serving platters, linens, and crockery. We bring everything needed to transform any venue into a world-class dining experience.' },
  { question: 'Do you work with external venues?', answer: 'We work with any venue across London and the Home Counties. We have established relationships with many leading venues and can liaise directly with venue managers on your behalf.' },
  { question: 'What happens if I need to change my guest numbers?', answer: 'We ask for a final guest count 5 working days before your event. Minor changes (up to ±10%) can be accommodated. Significant reductions may be subject to our cancellation policy, which we\'ll walk you through at booking.' },
]

const mockSlots: BookingSlot[] = [
  { id: '1', date: new Date().toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 3 },
  { id: '2', date: new Date().toISOString().split('T')[0], time: '11:00', available: true, spotsLeft: 5 },
  { id: '3', date: new Date().toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date().toISOString().split('T')[0], time: '15:30', available: true, spotsLeft: 4 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://elitecatering.example.com',
  name: 'Élite Catering Co.',
  description: 'Premium event catering for corporate events, weddings, and private dining in London.',
  url: 'https://elitecatering.example.com',
  telephone: '+44 20 7946 1200',
  email: 'enquiries@elitecatering.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Bruton Street, Mayfair',
    addressLocality: 'London',
    postalCode: 'W1J 6LY',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.512, longitude: -0.143 },
  priceRange: '£££',
  servesCuisine: ['British', 'French', 'International'],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }],
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
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.charcoal}ee`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.gold}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <span style={{ color: C.gold, fontSize: '1.4rem', lineHeight: 1 }}>◈</span>
          <span className="font-light tracking-[0.25em] text-xs uppercase" style={S.cream}>Élite Catering</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Menus', 'Portfolio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs tracking-[0.18em] uppercase transition-colors duration-300" style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>
              {item}
            </a>
          ))}
          <a href="#enquiry" className="px-7 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-400"
            style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldDim})`, color: C.charcoal, fontWeight: 500 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `linear-gradient(135deg, ${C.goldLight}, ${C.gold})` }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `linear-gradient(135deg, ${C.gold}, ${C.goldDim})` }}>
            Request Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function CateringOSPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Full-bleed editorial dark
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-end">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1800&h=1200&fit=crop&q=90"
          alt="Élite Catering — elegant event setup"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />

        {/* Gold diagonal accent lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(160deg, transparent 60%, ${C.gold}08 60.5%, ${C.gold}12 61%, transparent 61.5%), linear-gradient(160deg, transparent 70%, ${C.gold}06 70.5%, ${C.gold}10 71%, transparent 71.5%)`
        }} />

        {/* Left vertical gold line */}
        <div className="absolute left-16 top-0 bottom-0 pointer-events-none hidden md:block" style={{ width: '1px', background: `linear-gradient(to bottom, transparent, ${C.gold}44 20%, ${C.gold}44 80%, transparent)` }} />

        {/* Floating menu card previews */}
        <div className="absolute top-1/4 right-8 md:right-16 hidden lg:flex flex-col gap-4 pointer-events-none" style={{ zIndex: 5 }}>
          {[
            { tier: 'Silver', price: '£45pp', detail: '3-course dinner' },
            { tier: 'Gold', price: '£75pp', detail: '5-course gala' },
            { tier: 'Platinum', price: '£120pp', detail: '8-course prestige' },
          ].map((card, i) => (
            <div key={card.tier} className="px-5 py-4 rounded-sm"
              style={{
                background: `${C.charcoal}cc`,
                border: `1px solid ${C.gold}${i === 1 ? '66' : '22'}`,
                backdropFilter: 'blur(12px)',
                transform: `rotate(${[-1.5, 0, 1.5][i]}deg)`,
                boxShadow: i === 1 ? `0 0 30px ${C.gold}22` : 'none',
                animationDelay: `${i * 0.3}s`,
              }}>
              <div className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: C.gold }}>{card.tier}</div>
              <div className="text-xl font-extralight" style={S.cream}>{card.price}</div>
              <div className="text-xs mt-1" style={S.muted}>{card.detail}</div>
            </div>
          ))}
        </div>

        {/* Sparkle particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '15%', left: '20%', size: 3 },
            { top: '30%', left: '45%', size: 2 },
            { top: '60%', left: '25%', size: 4 },
            { top: '20%', left: '70%', size: 2 },
            { top: '45%', left: '60%', size: 3 },
          ].map((p, i) => (
            <div key={i} className="absolute rounded-full catering-sparkle" style={{
              top: p.top, left: p.left, width: p.size, height: p.size,
              backgroundColor: C.gold,
              boxShadow: `0 0 ${p.size * 4}px ${C.gold}`,
            }} />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pb-20 md:pb-32 w-full">
          <div className="max-w-3xl stagger-children">
            <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={{ color: C.gold }}>
              Est. 2006 &middot; Mayfair, London &middot; 1,200+ Events
            </p>

            {/* Gold accent line above headline */}
            <div className="mb-8 flex items-center gap-4">
              <div style={{ width: 60, height: 1, background: `linear-gradient(to right, transparent, ${C.gold})` }} />
              <div style={{ width: 8, height: 8, background: C.gold, transform: 'rotate(45deg)' }} />
              <div style={{ width: 120, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)` }} />
            </div>

            <h1 className="font-extralight leading-[0.92] mb-10">
              <span className="reveal-clip-up block" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', color: C.cream }}>From Intimate</span>
              <span className="reveal-clip-up block" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', color: C.gold, animationDelay: '0.12s' }}>Dinners</span>
              <span className="reveal-clip-up block" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', color: C.cream, animationDelay: '0.24s' }}>to Grand Galas</span>
            </h1>

            <p className="reveal-up text-base md:text-lg font-light leading-relaxed max-w-xl mb-12" style={{ color: C.muted, animationDelay: '0.4s' }}>
              Award-winning catering for the events that matter most. Bespoke menus,
              impeccable service, and flawless execution — whether you&rsquo;re hosting
              twelve or twelve hundred.
            </p>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
              <a href="#enquiry"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-400"
                style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldDim})`, color: C.charcoal }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 12px 32px ${C.gold}44` }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                Request a Quote
              </a>
              <a href="#menus"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light border transition-all duration-400"
                style={{ borderColor: `${C.gold}44`, color: C.cream }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.gold}44`; e.currentTarget.style.color = C.cream }}>
                View Menus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE TICKER
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldDim})` }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10 px-4">
              {['Corporate Events', 'Weddings', 'Private Dining', 'Festival Catering', 'Product Launches', 'Gala Dinners', 'Garden Parties', 'Award Ceremonies'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
                  <span className="text-sm tracking-[0.25em] uppercase font-light" style={{ color: C.charcoal }}>{item}</span>
                  <span style={{ color: `${C.charcoal}55`, fontSize: '0.6rem' }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-16" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>What We Do</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Every Event,<br />Perfected</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {services.map((svc, i) => (
              <div key={svc.title} className="reveal-up group relative overflow-hidden rounded-sm cursor-pointer" style={{ animationDelay: `${i * 0.1}s`, minHeight: 320 }}>
                <img src={svc.image} alt={svc.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" style={{ filter: 'brightness(0.4)' }} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}f0 0%, ${C.charcoal}40 60%, transparent 100%)` }} />
                {/* Gold corner accent */}
                <div className="absolute top-6 left-6 pointer-events-none">
                  <div style={{ width: 24, height: 1, background: C.gold, marginBottom: 1 }} />
                  <div style={{ width: 1, height: 24, background: C.gold }} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 relative z-10">
                  <div className="text-2xl mb-4" style={{ color: C.gold }}>{svc.icon}</div>
                  <h3 className="text-2xl font-extralight mb-3" style={S.cream}>{svc.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.muted }}>{svc.desc}</p>
                  <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div style={{ width: 24, height: 1, background: C.gold }} />
                    <span className="text-xs tracking-[0.2em] uppercase" style={S.gold}>Enquire</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SAMPLE MENUS — 3 TIERS
          ═══════════════════════════════════════ */}
      <section id="menus" className="py-24 md:py-36 px-6 md:px-16" style={S.mid}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Sample Menus</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>Choose Your<br />Experience</h2>
            <p className="mt-6 text-base font-light max-w-xl mx-auto" style={S.muted}>All menus are fully customisable. Dietary requirements always accommodated. Minimum 20 guests.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {menuTiers.map((tier, i) => (
              <div key={tier.name} className="reveal-up relative rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  border: `1px solid ${tier.highlight ? C.gold : C.gold + '22'}`,
                  background: tier.highlight ? `linear-gradient(160deg, ${C.charcoalLight}, ${C.charcoal})` : C.charcoal,
                  boxShadow: tier.highlight ? `0 0 60px ${C.gold}20` : 'none',
                }}>
                {tier.highlight && (
                  <div className="absolute top-0 left-0 right-0 py-2 text-center" style={{ background: `linear-gradient(135deg, ${C.gold}, ${C.goldDim})` }}>
                    <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: C.charcoal }}>Most Popular</span>
                  </div>
                )}
                <div className={`px-8 pb-8 ${tier.highlight ? 'pt-12' : 'pt-8'}`}>
                  <p className="text-xs tracking-[0.35em] uppercase mb-2" style={S.muted}>{tier.name} Package</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-extralight" style={S.gold}>{tier.price}</span>
                    <span className="text-xs" style={S.muted}>{tier.unit}</span>
                  </div>
                  <div className="mt-8" style={{ borderTop: `1px solid ${C.gold}22`, paddingTop: '1.5rem' }}>
                    <ul className="space-y-3">
                      {tier.courses.map((course) => (
                        <li key={course} className="flex items-start gap-3 text-sm font-light" style={{ color: C.warmWhite }}>
                          <span style={{ color: C.gold, flexShrink: 0, marginTop: 2 }}>◆</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#enquiry" className="mt-8 w-full block text-center py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ border: `1px solid ${tier.highlight ? C.gold : C.gold + '44'}`, color: tier.highlight ? C.gold : C.muted }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = C.gold; e.currentTarget.style.color = C.charcoal }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = tier.highlight ? C.gold : C.muted }}>
                    Book a Tasting
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO GALLERY
          ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-24 md:py-36 px-6 md:px-16" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>1,200+ Events,<br />Zero Compromises</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-children">
            {portfolioEvents.map((ev, i) => (
              <div key={i} className={`reveal-up relative overflow-hidden rounded-sm group cursor-pointer ${ev.large ? 'col-span-2 row-span-2' : ''}`}
                style={{ height: ev.large ? undefined : 220, minHeight: ev.large ? 460 : 220, animationDelay: `${i * 0.07}s` }}>
                <img src={ev.src} alt={ev.label} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100 flex items-end p-5"
                  style={{ background: `linear-gradient(to top, ${C.charcoal}dd, transparent)` }}>
                  <span className="text-xs tracking-[0.15em] uppercase" style={S.gold}>{ev.label}</span>
                </div>
                {/* Gold corner on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: C.gold, fontSize: '1rem' }}>◈</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS TIMELINE
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-16" style={S.mid}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>How It Works</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.cream}>From Vision<br />to Reality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 stagger-children">
            {processSteps.map((step, i) => (
              <div key={step.step} className="reveal-up relative" style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 right-0 h-px" style={{ background: `linear-gradient(to right, ${C.gold}44, ${C.gold}11)` }} />
                )}
                <div className="flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                    style={{ border: `1px solid ${C.gold}44`, background: C.charcoal }}>
                    <span className="text-sm font-light tracking-[0.1em]" style={S.gold}>{step.step}</span>
                  </div>
                  <h3 className="text-lg font-light mb-3" style={S.cream}>{step.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={S.muted}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>What Our Clients Say</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENQUIRY / BOOKING
          ═══════════════════════════════════════ */}
      <section id="enquiry" className="py-24 md:py-36 px-6 md:px-16 relative overflow-hidden" style={S.mid}>
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: `radial-gradient(ellipse at top right, ${C.gold}10, transparent 70%)` }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.cream}>Let&rsquo;s Create<br />Something Extraordinary</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Begin with a conversation. Tell us about your event and we&rsquo;ll come
              back to you within 4 hours with a tailored proposal.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Phone', detail: '+44 20 7946 1200' },
                { label: 'Email', detail: 'enquiries@elitecatering.com' },
                { label: 'Office Hours', detail: 'Monday – Friday, 9am – 6pm' },
                { label: 'Address', detail: '18 Bruton Street, Mayfair, London W1J 6LY' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div style={{ width: 1, background: `${C.gold}44`, flexShrink: 0 }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.gold}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 48, label: 'events enquired this month' }} vertical="cateringos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.dark}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.gold}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.cream}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079461200" message="Hi! I'd like to enquire about catering for my event" vertical="cateringos" />

      <style>{`
        @keyframes catering-sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        .catering-sparkle { animation: catering-sparkle 3s ease-in-out infinite; }
        .catering-sparkle:nth-child(2) { animation-delay: 0.8s; }
        .catering-sparkle:nth-child(3) { animation-delay: 1.6s; }
        .catering-sparkle:nth-child(4) { animation-delay: 2.2s; }
        .catering-sparkle:nth-child(5) { animation-delay: 0.4s; }
      `}</style>
    </div>
  )
}
