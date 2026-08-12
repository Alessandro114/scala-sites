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
  cream: '#f5ede1',
  creamDark: '#ede0cd',
  creamDeep: '#e0ceB9',
  wood: '#8b6914',
  woodLight: '#a07c1e',
  woodDim: '#6b5010',
  forest: '#2d5016',
  forestLight: '#3a6b1e',
  berry: '#722f37',
  berryLight: '#8b3a44',
  warmWhite: '#fdf8f0',
  muted: '#9a8570',
  textDark: '#3a2e20',
  textMid: '#6b5a45',
  peat: '#4a3c2a',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Willowbrook B&B',
  description: 'A charming countryside bed & breakfast with farm breakfast and garden rooms',
  url: 'https://willowbrookbnb.example.com',
  locale: 'en',
  vertical: 'bnbos',
  theme: 'rustic',
  branding: { primaryColor: C.peat, accentColor: C.wood },
  contact: {
    phone: '+44 1789 740 312',
    email: 'stay@willowbrookbnb.com',
    whatsapp: '+441789740312',
    address: 'Church Lane, Long Compton, Warwickshire CV36 5JR',
    coordinates: { lat: 52.0341, lng: -1.6432 },
  },
  social: { instagram: 'willowbrookbnb', facebook: 'https://facebook.com/willowbrookbnb' },
  seo: { title: 'Willowbrook B&B | A Home Away From Home', description: 'A charming countryside B&B in Warwickshire. Book direct for best rates.' },
}

// ─────────────────────────────────────────────
// ROOMS
// ─────────────────────────────────────────────
const rooms = [
  {
    name: 'The Garden Suite',
    price: 120,
    beds: 'King bed',
    size: '28 m²',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    desc: 'Our largest room with direct garden access through French doors. A roll-top bath, king bed, and views over the lavender beds.',
    amenities: ['En-suite bath + shower', 'Direct garden access', 'King-size bed', 'Seating area', 'Organic toiletries', 'Smart TV'],
    available: true,
  },
  {
    name: 'The Orchard Room',
    price: 95,
    beds: 'Double bed',
    size: '22 m²',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=600&fit=crop',
    desc: 'Named for the apple orchard it overlooks. Warm oak floors, a handmade patchwork quilt, and a perfectly equipped en-suite.',
    amenities: ['En-suite shower', 'Orchard view', 'Double bed', 'Writing desk', 'Artisan toiletries', 'Smart TV'],
    available: true,
  },
  {
    name: 'The Attic Hideaway',
    price: 85,
    beds: 'Double or twin',
    size: '18 m²',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
    desc: 'A cosy retreat under the eaves. Original beams, skylights for stargazing, and a beautiful restored Victorian washstand.',
    amenities: ['Shared bathroom option', 'Skylight / beams', 'Flexible bedding', 'Reading nook', 'Electric blanket', 'Smart TV'],
    available: false,
  },
]

// ─────────────────────────────────────────────
// EXPERIENCES
// ─────────────────────────────────────────────
const experiences = [
  {
    name: 'Farm Breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=500&fit=crop',
    desc: 'Freshly laid eggs from our hens, sausages from the village butcher, homemade bread, local honey, and seasonal preserves. Served 7:30–10:00.',
  },
  {
    name: 'Garden Tours',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=500&fit=crop',
    desc: 'A guided walk through our two-acre kitchen garden, orchard, and wildflower meadow. Pick your own seasonal produce to take home.',
  },
  {
    name: 'Local Walks',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=500&fit=crop',
    desc: 'We provide hand-drawn walking maps for 5 circular routes from the door — from 2km meadow strolls to 10km Cotswold ridge walks.',
  },
]

// ─────────────────────────────────────────────
// LOCAL ATTRACTIONS
// ─────────────────────────────────────────────
const attractions = [
  { name: 'The Rollright Stones', distance: '1.2 km', type: 'Historic site', desc: 'Ancient stone circle dating to 3500 BC. Walking distance across the fields.' },
  { name: 'The Red Lion Pub', distance: '400 m', type: 'Food & Drink', desc: 'Award-winning village pub with real ales, log fires, and exceptional Sunday roasts.' },
  { name: 'Chipping Norton Market', distance: '8 km', type: 'Market', desc: 'Saturday farmers market with artisan produce, crafts, and street food since 1205.' },
  { name: 'Hidcote Garden', distance: '12 km', type: 'Garden', desc: 'National Trust Arts & Crafts garden — one of the most influential in England.' },
  { name: 'Bourton-on-the-Water', distance: '18 km', type: 'Village', desc: 'The Venice of the Cotswolds — honey-stone bridges, boutique shops, and restaurants.' },
]

// ─────────────────────────────────────────────
// BREAKFAST MENU
// ─────────────────────────────────────────────
const breakfastItems = [
  { name: 'Full English', desc: 'Eggs, back bacon, sausage, mushrooms, tomato, toast' },
  { name: 'Eggs Benedict', desc: 'Poached eggs, local ham, hollandaise on sourdough' },
  { name: 'Smoked Salmon', desc: 'Scrambled eggs, capers, cream cheese, rye bread' },
  { name: 'American Pancakes', desc: 'Buttermilk stack, maple syrup, seasonal berries' },
  { name: 'Bircher Muesli', desc: 'Overnight oats, apple, yoghurt, toasted almonds' },
  { name: 'Seasonal Fruit Bowl', desc: 'Fresh orchard and garden fruit, honey drizzle' },
]

// ─────────────────────────────────────────────
// HOUSE RULES
// ─────────────────────────────────────────────
const rules = [
  { rule: 'Check-in', detail: '15:00–20:00. Late arrival by arrangement — please let us know.' },
  { rule: 'Check-out', detail: 'By 11:00. Late check-out until 13:00 — £15 supplement.' },
  { rule: 'Pets', detail: 'Well-behaved dogs welcome in The Orchard Room (£10/night). Please bring their bed.' },
  { rule: 'Children', detail: 'Children 10+ are warmly welcomed. The Attic Hideaway is ideal for families.' },
  { rule: 'Smoking', detail: 'No smoking inside. A designated outdoor area is provided.' },
  { rule: 'Quiet hours', detail: 'We ask guests to be quiet after 22:00. This is a working farm — the cockerel wakes early!' },
]

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Charlotte H.', rating: 5, text: 'The Garden Suite was pure magic. French doors opening onto lavender, a roll-top bath, and the most extraordinary breakfast I\'ve ever eaten. We will return every year.', date: '2026-07-22', source: 'google', verified: true },
  { id: '2', author: 'Robert & Ann M.', rating: 5, text: 'Our third stay at Willowbrook. The owners go above and beyond — they left a bottle of local wine and a handwritten note in our room. Utterly charming.', date: '2026-07-29', source: 'tripadvisor', verified: true },
  { id: '3', author: 'Sarah L.', rating: 5, text: 'I had been nervous about staying somewhere so quiet after years in London. Willowbrook converted me completely. The silence, the stars, the breakfast — perfect.', date: '2026-08-02', source: 'google', verified: true },
  { id: '4', author: 'David F.', rating: 5, text: 'Brought my elderly mother for her birthday. The team were wonderful with her mobility needs and the Attic room has the most magical light in the mornings.', date: '2026-07-18', source: 'google', verified: true },
  { id: '5', author: 'Emma & James T.', rating: 5, text: 'Anniversary stay — the hosts had decorated our room and had local cider chilling. The Rollright Stones walk the next morning was the perfect end to a perfect weekend.', date: '2026-08-04', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'Is breakfast included in the rate?', answer: 'Yes — a full farmhouse breakfast is included every morning for all guests. Dietary requirements are happily accommodated; just let us know when booking.' },
  { question: 'Is there parking available?', answer: 'Yes, free private parking for all guests. The lane is narrow — we recommend turning off your satnav half a mile from the village and following our arrival guide.' },
  { question: 'Can you cater for dietary needs?', answer: 'Absolutely. We offer vegetarian, vegan, gluten-free, and dairy-free breakfast options. Please mention your needs at the time of booking.' },
  { question: 'How far are you from a train station?', answer: 'Moreton-in-Marsh station (GWR line from London Paddington, approx 90 min) is 12 km away. We are happy to collect guests from the station by arrangement.' },
  { question: 'Is WiFi available?', answer: 'Yes, fast WiFi throughout the house. We do gently encourage guests to switch off and enjoy the countryside, but we understand you may need to stay connected.' },
  { question: 'What is your cancellation policy?', answer: 'Full refund if cancelled 7+ days before arrival. 50% refund 3–7 days. No refund within 72 hours unless we can re-let the room, in which case we refund in full.' },
]

// ─────────────────────────────────────────────
// SLOTS
// ─────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '15:00', available: true, spotsLeft: 2 },
  { id: '2', date: today, time: '16:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '17:00', available: true, spotsLeft: 1 },
  { id: '4', date: today, time: '18:00', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '19:00', available: true, spotsLeft: 3 },
  { id: '6', date: today, time: '20:00', available: true, spotsLeft: 2 },
]

const S = {
  page: { backgroundColor: C.cream, color: C.textDark } as React.CSSProperties,
  cream: { backgroundColor: C.cream } as React.CSSProperties,
  creamDark: { backgroundColor: C.creamDark } as React.CSSProperties,
  warmWhite: { backgroundColor: C.warmWhite } as React.CSSProperties,
  wood: { color: C.wood } as React.CSSProperties,
  woodLight: { color: C.woodLight } as React.CSSProperties,
  forest: { color: C.forest } as React.CSSProperties,
  berry: { color: C.berry } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  textDark: { color: C.textDark } as React.CSSProperties,
  textMid: { color: C.textMid } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://willowbrookbnb.example.com',
  name: 'Willowbrook B&B',
  description: 'A charming countryside bed & breakfast in Warwickshire with farm breakfast and garden rooms.',
  url: 'https://willowbrookbnb.example.com',
  telephone: '+44 1789 740 312',
  email: 'stay@willowbrookbnb.com',
  priceRange: '££',
  image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&fit=crop',
  address: { '@type': 'PostalAddress', streetAddress: 'Church Lane, Long Compton', addressLocality: 'Warwickshire', postalCode: 'CV36 5JR', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 52.0341, longitude: -1.6432 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '07:30', closes: '20:00' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '187' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: `${C.warmWhite}f5`, backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.wood}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-light tracking-[0.3em] text-sm uppercase" style={S.wood}>
          Willowbrook B&amp;B
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Rooms', 'Experiences', 'Local', 'Breakfast'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-300" style={S.muted}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.wood)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >{item}</a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300"
            style={{ borderColor: C.wood, color: C.wood }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.wood; e.currentTarget.style.color = C.cream }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.wood }}
          >Check Availability</a>
        </div>
      </div>
    </nav>
  )
}

export default function BnBPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes fireglow {
          0%, 100% { opacity: 0.4; transform: scale(1) translateY(0); }
          33% { opacity: 0.55; transform: scale(1.04) translateY(-4px); }
          66% { opacity: 0.45; transform: scale(0.98) translateY(2px); }
        }
        @keyframes vignetteBreath {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        .fireglow { animation: fireglow 3s ease-in-out infinite; }
        .vignette-breath { animation: vignetteBreath 8s ease-in-out infinite; }
        .leaf-sway { animation: leafSway 5s ease-in-out infinite; }
        .room-card:hover { box-shadow: 0 20px 60px rgba(139,105,20,0.15); transform: translateY(-3px); }
        .room-card { transition: box-shadow 0.4s ease, transform 0.4s ease; }
        .dashed-border {
          border: 2px dashed ${C.wood}44;
          border-radius: 2px;
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Rustic Warmth
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Background hero image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&h=1200&fit=crop&q=90"
            alt="Willowbrook countryside setting"
            className="w-full h-full object-cover"
          />
          {/* Heavy warm vignette */}
          <div className="vignette-breath absolute inset-0" style={{
            background: `radial-gradient(ellipse 70% 80% at 50% 50%, transparent 20%, ${C.textDark}99 100%)`,
          }} />
          {/* Bottom fade to cream */}
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: `linear-gradient(to top, ${C.cream}, transparent)` }} />
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to bottom, ${C.peat}66, transparent)` }} />
        </div>

        {/* Fireplace warm glow from bottom */}
        <div className="fireglow absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 pointer-events-none" style={{
          background: `radial-gradient(ellipse 100% 60% at 50% 100%, #f59e0b44, #ef4444 22, transparent 70%)`,
          filter: 'blur(30px)',
        }} />

        {/* Hand-drawn style border box */}
        <div className="relative z-10 dashed-border px-10 md:px-16 py-12 max-w-2xl mx-4 text-center"
          style={{ backgroundColor: `${C.warmWhite}e0`, transform: 'rotate(-0.4deg)' }}>
          <div style={{ transform: 'rotate(0.4deg)' }}>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>
              Long Compton, Warwickshire &mdash; Est. 1847
            </p>

            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-4" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>
              A Home Away<br />From Home
            </h1>

            {/* Availability badge */}
            <div className="inline-block mb-6 px-4 py-2 text-xs tracking-[0.2em] uppercase font-light" style={{ backgroundColor: `${C.forest}18`, color: C.forest, border: `1px solid ${C.forest}44` }}>
              2 rooms available this weekend
            </div>

            <p className="text-base font-light leading-relaxed mb-8" style={S.textMid}>
              Three rooms. A working kitchen garden. Farm-fresh breakfast every morning.
              And a thousand acres of Cotswold countryside right outside your door.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#rooms"
                className="border-2 px-8 py-3.5 text-sm tracking-[0.18em] uppercase transition-all duration-400"
                style={{ borderColor: C.wood, color: C.wood }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.wood; e.currentTarget.style.color = C.cream }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.wood }}
              >View Rooms</a>
              <a href="#booking"
                className="px-8 py-3.5 text-sm tracking-[0.18em] uppercase transition-all duration-300"
                style={{ backgroundColor: C.wood, color: C.cream }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.woodDim }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.wood }}
              >Check Availability</a>
            </div>
          </div>
        </div>

        {/* Room rates strip */}
        <div className="relative z-10 mt-10 flex flex-wrap gap-6 justify-center text-center px-6">
          {rooms.map((r) => (
            <div key={r.name} className="text-center">
              <div className="text-xl font-extralight mb-1" style={{ color: C.warmWhite }}>£{r.price}/night</div>
              <div className="text-xs tracking-[0.15em] uppercase" style={{ color: `${C.creamDeep}aa` }}>{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ROOMS
          ═══════════════════════════════════════ */}
      <section id="rooms" className="py-24 md:py-32 px-6 md:px-16" style={S.creamDark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>Where You Sleep</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>Our Rooms</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
            {rooms.map((room, i) => (
              <div key={room.name} className="room-card reveal-up relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s`, backgroundColor: C.warmWhite, border: `1px solid ${C.wood}22` }}>
                <div className="relative h-60 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.peat}88, transparent 50%)` }} />
                  <div className="absolute top-4 right-4 text-xs px-3 py-1 font-light" style={{ backgroundColor: room.available ? `${C.forest}cc` : `${C.berry}cc`, color: C.cream }}>
                    {room.available ? 'Available' : 'Booked out'}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-2xl font-extralight" style={{ color: C.cream }}>£{room.price}</span>
                    <span className="text-xs font-light" style={{ color: `${C.cream}aa` }}>/night</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs tracking-[0.15em] uppercase" style={S.wood}>{room.beds} · {room.size}</p>
                  </div>
                  <h3 className="text-xl font-extralight mb-3" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>{room.name}</h3>
                  <p className="text-sm font-light leading-relaxed mb-5" style={S.textMid}>{room.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((a) => (
                      <span key={a} className="text-[10px] tracking-wide uppercase px-2.5 py-1" style={{ backgroundColor: `${C.wood}12`, color: C.wood }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCES
          ═══════════════════════════════════════ */}
      <section id="experiences" className="py-24 md:py-32 px-6 md:px-16" style={S.warmWhite}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.forest}>While You're Here</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>The Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {experiences.map((exp, i) => (
              <div key={exp.name} className="reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-72 mb-6 overflow-hidden" style={{ border: `1px solid ${C.wood}22` }}>
                  <img src={exp.image} alt={exp.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                </div>
                <h3 className="text-xl font-extralight mb-3" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>{exp.name}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.textMid}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOCAL ATTRACTIONS
          ═══════════════════════════════════════ */}
      <section id="local" className="py-24 md:py-32 px-6 md:px-16" style={S.creamDark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>Beyond the Gate</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>Local Attractions</h2>
          </div>
          <div className="space-y-0 stagger-children">
            {attractions.map((att, i) => (
              <div key={att.name} className="reveal-up flex gap-6 items-start py-6"
                style={{ animationDelay: `${i * 0.08}s`, borderBottom: `1px solid ${C.wood}22` }}>
                <div className="w-20 text-right flex-shrink-0">
                  <p className="text-sm font-light" style={S.wood}>{att.distance}</p>
                  <p className="text-[10px] tracking-wider uppercase" style={S.muted}>{att.type}</p>
                </div>
                <div className="w-px self-stretch" style={{ backgroundColor: `${C.wood}33` }} />
                <div className="flex-1">
                  <h4 className="text-base font-light mb-1" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>{att.name}</h4>
                  <p className="text-sm font-light" style={S.textMid}>{att.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BREAKFAST
          ═══════════════════════════════════════ */}
      <section id="breakfast" className="py-24 md:py-32 px-6 md:px-16" style={S.warmWhite}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>Served 7:30–10:00</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>The Breakfast Menu</h2>
            <p className="text-base font-light leading-relaxed mb-8" style={S.textMid}>
              Everything sourced within 10 miles. Eggs from our own hens. Sausages from the village butcher.
              Bread baked in our kitchen. Honey from our garden hive. This is what breakfast should taste like.
            </p>
            <div className="space-y-4">
              {breakfastItems.map((item) => (
                <div key={item.name} className="flex gap-4 items-start py-3" style={{ borderBottom: `1px solid ${C.wood}18` }}>
                  <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: `${C.wood}44`, minHeight: '36px' }} />
                  <div>
                    <h4 className="text-sm font-light" style={S.textDark}>{item.name}</h4>
                    <p className="text-xs font-light" style={S.muted}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <img
              src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=1000&fit=crop&q=90"
              alt="Farm breakfast at Willowbrook"
              className="w-full h-[600px] object-cover"
              style={{ border: `1px solid ${C.wood}22` }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOUSE RULES
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16" style={S.creamDark}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.muted}>Practical Information</p>
            <h2 className="text-3xl font-extralight" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>House Rules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
            {rules.map((r, i) => (
              <div key={r.rule} className="reveal-up flex gap-4 p-5"
                style={{ animationDelay: `${i * 0.06}s`, backgroundColor: C.warmWhite, border: `1px solid ${C.wood}18` }}>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-1 font-light" style={S.wood}>{r.rule}</p>
                  <p className="text-sm font-light leading-relaxed" style={S.textMid}>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden" style={S.warmWhite}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 50% 60% at 100% 100%, ${C.wood}0a, transparent)` }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>Book Direct</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>Check Availability</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.textMid}>
              Book direct for the best rate — we never charge booking fees. Confirmation within the hour.
              All breakfasts included.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', val: 'Church Lane, Long Compton, Warwickshire CV36 5JR' },
                { label: 'Check-in / Check-out', val: '15:00–20:00 arrival · 11:00 departure' },
                { label: 'Breakfast', val: 'Included — served 7:30 to 10:00 daily' },
                { label: 'Getting Here', val: '14 min from Moreton-in-Marsh station. Station pick-up available.' },
              ].map(({ label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: `${C.wood}44`, minHeight: '40px' }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.wood}>{label}</p>
                    <p className="text-sm font-light" style={S.textMid}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 94, label: 'stays booked this season' }}
              vertical="bnbos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.creamDark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>Guest Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.warmWhite}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.wood}>Questions</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ ...S.textDark, fontFamily: 'Georgia, serif' }}>Frequently Asked</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="BnBOS" locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441789740312" message="Hi! I'd like to check availability at Willowbrook B&B" vertical="bnbos" />
    </div>
  )
}
