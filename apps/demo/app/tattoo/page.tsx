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
  black: '#000000',
  nearBlack: '#0a0a0a',
  darkGrey: '#111111',
  grey: '#1a1a1a',
  greyMid: '#2a2a2a',
  greyLight: '#4a4a4a',
  blood: '#8b0000',
  bloodBright: '#b00000',
  bone: '#f5f0e8',
  boneDim: '#c8c0b4',
  muted: '#707070',
} as const

const siteConfig: SiteConfig = {
  name: 'Inkwell Studio',
  description: 'Custom bespoke tattoo art in London',
  url: 'https://inkwell.example.com',
  locale: 'en',
  vertical: 'tattooos',
  theme: 'classic',
  branding: { primaryColor: C.black, accentColor: C.blood },
  contact: {
    phone: '+44 20 7946 0333',
    email: 'studio@inkwell.example.com',
    whatsapp: '+442079460333',
    address: '14 Coldharbour Lane, Brixton, London SE5 9NR',
    coordinates: { lat: 51.4628, lng: -0.1063 },
  },
  social: { instagram: 'inkwell_london', facebook: 'https://facebook.com/inkwelllondon' },
  seo: {
    title: 'Inkwell Studio — Your Story. Our Ink.',
    description: 'Custom tattoo studio in London. Traditional, Japanese, Blackwork, Realism.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const artists = [
  {
    name: 'Dante Reyes',
    style: 'Traditional American',
    bio: 'Bold lines, timeless flash. Dante brings 14 years of classic American traditional with modern composition.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&facepad=2',
    gallery: [
      'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?w=300&h=300&fit=crop',
    ],
  },
  {
    name: 'Yuki Nakashima',
    style: 'Japanese Irezumi',
    bio: 'Studied under masters in Osaka. Koi, dragons, sakura — executed with reverence for the centuries-old tradition.',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop&facepad=2',
    gallery: [
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1570872626485-d8ffea69f463?w=300&h=300&fit=crop',
    ],
  },
  {
    name: 'Cass Morgan',
    style: 'Blackwork & Geometric',
    bio: 'Sacred geometry, mandala and fine-line blackwork. Cass creates pieces that are architectural and meditative.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&facepad=2',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop',
    ],
  },
  {
    name: 'Viktor Bohm',
    style: 'Realism & Portraiture',
    bio: 'Hyper-realistic portraits and nature scenes that fool the eye. Viktor\'s shading technique is unparalleled.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&facepad=2',
    gallery: [
      'https://images.unsplash.com/photo-1617727553252-65863c156eb1?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
    ],
  },
]

const styles = [
  { name: 'Traditional', desc: 'Classic American flash and bold imagery' },
  { name: 'Japanese', desc: 'Irezumi, koi, dragons, sleeve work' },
  { name: 'Blackwork', desc: 'Fine line, dotwork, geometric' },
  { name: 'Realism', desc: 'Portraits, nature, hyperrealistic' },
  { name: 'Neo-Traditional', desc: 'Bold lines with modern palettes' },
  { name: 'Illustrative', desc: 'Book-art inspired, narrative pieces' },
  { name: 'Surrealism', desc: 'Dreamlike imagery, impossible scenes' },
  { name: 'Minimalist', desc: 'Single needle, fine lines, small work' },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'Free 30-min session to discuss your concept, placement, size and style. We draw up initial sketches.' },
  { step: '02', title: 'Design', desc: 'Your artist creates a custom design. You review and refine until it\'s exactly right. No session until you\'re 100% happy.' },
  { step: '03', title: 'The Session', desc: 'Sterile single-use needles. Vegan-friendly inks. Breaks whenever you need them. Music of your choice.' },
  { step: '04', title: 'Aftercare', desc: 'Full written aftercare guide. Free touch-up within 3 months if needed. We\'re here for the lifetime of your tattoo.' },
]

const pricing = [
  { size: 'Small', desc: 'Palm-size or smaller', from: '£80', note: 'e.g. wrist, ankle, finger' },
  { size: 'Medium', desc: 'Hand to forearm coverage', from: '£200', note: 'e.g. half-arm, ribcage' },
  { size: 'Large', desc: 'Full piece, back panel', from: '£500', note: 'e.g. half sleeve, chest' },
  { size: 'Full Day', desc: 'Up to 8 hours of work', from: '£600', note: 'Sleeve, back, large pieces' },
]

const reviews: Review[] = [
  { id: '1', author: 'Jade W.', rating: 5, text: "Cass designed my mandala spine piece and it is beyond anything I imagined. The process from consultation to session was so professional and thoughtful. Zero pain management issues — they checked in constantly.", date: '2026-07-22', source: 'google', verified: true },
  { id: '2', author: 'Ryan O.', rating: 5, text: "Viktor's portrait realism is genuinely mind-bending. He did my grandmother's portrait on my forearm and people ask if it's a photograph. Studio was immaculate.", date: '2026-08-01', source: 'google', verified: true },
  { id: '3', author: 'Mei L.', rating: 5, text: "Yuki did my Japanese sleeve over 4 sessions. Each one was better than the last. The colour saturation and line work are flawless. Worth every penny and every hour.", date: '2026-07-15', source: 'trustpilot', verified: true },
  { id: '4', author: 'Sam K.', rating: 5, text: "First tattoo ever — I was terrified. Dante was so reassuring and patient. He walked me through everything before touching me. The traditional eagle on my shoulder is perfect.", date: '2026-07-29', source: 'google', verified: true },
  { id: '5', author: 'Alex P.', rating: 5, text: "Hygiene standards are exceptional. Everything is single-use. The aftercare guide they gave me was the most thorough I've ever seen — and this is my 8th tattoo.", date: '2026-08-05', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'How much does a tattoo cost?', answer: 'Small pieces start from £80, medium from £200, large from £500, and full-day sessions (up to 8 hours) are £600. Custom quotes are provided after your free consultation.' },
  { question: 'Do I need a consultation before booking a session?', answer: 'Yes — all new clients start with a free 30-minute consultation. This lets us understand your vision, plan the design, and check suitability of placement.' },
  { question: 'How do you ensure hygiene and safety?', answer: 'We use single-use, sterile, disposable needles for every client. Inks are poured into single-use caps. All surfaces are disinfected between clients. We hold a London Borough health licence.' },
  { question: 'Do you use vegan inks?', answer: 'Yes, all inks used at Inkwell are 100% vegan-friendly. If you have specific ingredient concerns, please mention this at consultation.' },
  { question: 'Can I bring a friend?', answer: 'One support person is welcome in the studio during your session. Due to space, we ask that only one guest accompanies you.' },
  { question: 'How should I prepare for my tattoo session?', answer: 'Eat a good meal beforehand, stay hydrated, wear comfortable clothing that allows easy access to the tattoo area, and avoid alcohol for 24 hours before your appointment.' },
  { question: 'Is a deposit required?', answer: 'Yes, a 20% non-refundable deposit is required to secure your booking. This is deducted from the final cost on the day.' },
  { question: 'What is your cancellation policy?', answer: 'We require 48 hours notice to reschedule. Cancellations with less than 48 hours notice forfeit the deposit. We understand emergencies happen — contact us and we\'ll do our best.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '10:00', available: true, spotsLeft: 1 },
  { id: '2', date: today, time: '11:00', available: true, spotsLeft: 2 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 1 },
  { id: '4', date: today, time: '14:00', available: true, spotsLeft: 3 },
  { id: '5', date: today, time: '16:00', available: true, spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: 'Inkwell Studio',
  description: 'Custom bespoke tattoo studio in London. Traditional, Japanese, Blackwork, Realism.',
  url: 'https://inkwell.example.com',
  telephone: '+44 20 7946 0333',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Coldharbour Lane, Brixton',
    addressLocality: 'London',
    postalCode: 'SE5 9NR',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4628, longitude: -0.1063 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '218' },
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
  page: { backgroundColor: C.black, color: C.bone } as React.CSSProperties,
  dark: { backgroundColor: C.darkGrey } as React.CSSProperties,
  darker: { backgroundColor: C.nearBlack } as React.CSSProperties,
  mid: { backgroundColor: C.grey } as React.CSSProperties,
  blood: { color: C.blood } as React.CSSProperties,
  bone: { color: C.bone } as React.CSSProperties,
  muted: { color: C.muted } as React.CSSProperties,
  boneDim: { color: C.boneDim } as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: `${C.black}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.blood}22` }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-light tracking-[0.4em] text-sm uppercase" style={S.bone}>
          Inkwell
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Artists', 'Styles', 'Process', 'Booking'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.bone)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a href="#booking"
            className="border px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-500"
            style={{ borderColor: C.blood, color: C.blood }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.blood; e.currentTarget.style.color = C.bone }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.blood }}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function TattooOSDemoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="scroll-progress" style={{ background: C.blood }} />
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Dark Artistic
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Pure black base */}
        <div className="absolute inset-0" style={{ backgroundColor: C.black }} />

        {/* Blood-red ink splatter effects — CSS radial gradients */}
        <div className="absolute pointer-events-none" style={{ top: '8%', left: '5%', width: '300px', height: '300px', background: `radial-gradient(ellipse at 30% 40%, ${C.blood}35 0%, ${C.blood}15 40%, transparent 70%)`, filter: 'blur(20px)' }} />
        <div className="absolute pointer-events-none" style={{ top: '60%', left: '75%', width: '200px', height: '200px', background: `radial-gradient(ellipse at 60% 50%, ${C.bloodBright}25 0%, transparent 65%)`, filter: 'blur(15px)' }} />
        <div className="absolute pointer-events-none" style={{ top: '30%', right: '10%', width: '400px', height: '250px', background: `radial-gradient(ellipse at 70% 30%, ${C.blood}20 0%, transparent 60%)`, filter: 'blur(30px)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '15%', left: '20%', width: '180px', height: '180px', background: `radial-gradient(circle, ${C.bloodBright}18 0%, transparent 70%)`, filter: 'blur(10px)' }} />
        <div className="absolute pointer-events-none" style={{ top: '50%', left: '40%', width: '120px', height: '120px', background: `radial-gradient(circle, ${C.blood}22 0%, transparent 70%)` }} />

        {/* Ornamental border — CSS */}
        <div className="absolute inset-8 pointer-events-none hidden md:block" style={{
          border: `1px solid ${C.blood}18`,
          outline: `1px solid ${C.blood}0a`,
          outlineOffset: '8px',
        }} />
        {/* Corner ornaments */}
        {[
          { top: '2rem', left: '2rem' },
          { top: '2rem', right: '2rem' },
          { bottom: '2rem', left: '2rem' },
          { bottom: '2rem', right: '2rem' },
        ].map((pos, i) => (
          <div key={i} className="absolute pointer-events-none hidden md:block" style={{ ...pos, width: '30px', height: '30px', border: `1px solid ${C.blood}33` }} />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32">
          <div className="max-w-3xl stagger-children">
            <p className="reveal-clip-up text-xs tracking-[0.5em] uppercase mb-8" style={S.blood}>
              Brixton, London &middot; Est. 2011
            </p>

            <h1 className="mb-10">
              {['Your Story.', 'Our Ink.'].map((line, i) => (
                <span key={line}
                  className="reveal-clip-up block font-light leading-[0.9]"
                  style={{
                    fontSize: 'clamp(3.5rem, 11vw, 9rem)',
                    color: i === 0 ? C.bone : C.blood,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="reveal-up text-base md:text-lg font-light leading-relaxed max-w-xl mb-12" style={{ ...S.muted, animationDelay: '0.4s' }}>
              Four artists. Four specialities. One obsession with craft. Every piece at Inkwell is custom-designed, never traced. Book your free consultation and let&rsquo;s build something permanent.
            </p>

            <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
              <a href="#booking"
                className="border-2 px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500"
                style={{ borderColor: C.blood, color: C.blood }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.blood; e.currentTarget.style.color = C.bone }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.blood }}
              >
                Free Consultation
              </a>
              <a href="#artists"
                className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300"
                style={S.muted}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.bone)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                Meet the Artists
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio thumbnail strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex overflow-hidden" style={{ height: '120px' }}>
          {[
            'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=300&h=120&fit=crop',
            'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=300&h=120&fit=crop',
            'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=120&fit=crop',
            'https://images.unsplash.com/photo-1617727553252-65863c156eb1?w=300&h=120&fit=crop',
            'https://images.unsplash.com/photo-1570872626485-d8ffea69f463?w=300&h=120&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=120&fit=crop',
          ].map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden relative group">
              <img src={src} alt={`Portfolio piece ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.black} 0%, ${C.black}88 40%, transparent 100%)` }} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: C.blood }}>
        <div className="marquee">
          {[0, 1].map((d) => (
            <div key={d} className="flex items-center gap-8 px-4">
              {['Traditional', 'Japanese', 'Blackwork', 'Realism', 'Custom Designs', 'Free Consultation', 'Vegan Inks', 'Sterile Studio'].map((item, i) => (
                <span key={`${d}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-light tracking-[0.2em] uppercase" style={{ color: C.bone }}>{item}</span>
                  <span style={{ color: `${C.bone}55` }}>&#x2726;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ARTISTS — 4 Profiles
          ═══════════════════════════════════════ */}
      <section id="artists" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>The Artists</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.bone}>Four Specialists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stagger-children">
            {artists.map((a, i) => (
              <div key={a.name} className="reveal-up group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="relative overflow-hidden rounded-xl image-reveal w-36 flex-shrink-0">
                    <img src={a.img} alt={a.name} className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.black}aa, transparent 60%)` }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.4em] uppercase mb-2" style={S.blood}>{a.style}</p>
                    <h3 className="text-2xl font-light mb-3" style={S.bone}>{a.name}</h3>
                    <p className="text-sm font-light leading-relaxed mb-4" style={S.muted}>{a.bio}</p>
                    <div className="flex gap-2">
                      {a.gallery.map((src, j) => (
                        <div key={j} className="w-16 h-16 rounded-lg overflow-hidden image-reveal">
                          <img src={src} alt={`${a.name} work`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.1]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STYLES GALLERY — 8 Categories
          ═══════════════════════════════════════ */}
      <section id="styles" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>Specialities</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.bone}>Styles We Master</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            {styles.map((style, i) => (
              <div key={style.name}
                className="reveal-up p-6 rounded-xl border text-center transition-all duration-300 cursor-pointer group"
                style={{ borderColor: `${C.blood}22`, backgroundColor: C.grey, animationDelay: `${i * 0.06}s` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.blood}66`; e.currentTarget.style.backgroundColor = C.greyMid }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${C.blood}22`; e.currentTarget.style.backgroundColor = C.grey }}
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-4" style={{ backgroundColor: C.blood }} />
                <h3 className="text-base font-light mb-2" style={S.bone}>{style.name}</h3>
                <p className="text-xs font-light" style={S.muted}>{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — 4 Steps
          ═══════════════════════════════════════ */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>How It Works</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.bone}>The Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {process.map((p, i) => (
              <div key={p.step} className="reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl text-2xl font-light"
                  style={{ border: `1px solid ${C.blood}44`, color: C.blood, backgroundColor: `${C.blood}0a` }}>
                  {p.step}
                </div>
                <h3 className="text-base font-light mb-3" style={S.bone}>{p.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.muted}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>Investment</p>
            <h2 className="text-4xl md:text-6xl font-extralight" style={S.bone}>Pricing Guide</h2>
            <p className="text-sm font-light mt-4" style={S.muted}>All quotes are confirmed at consultation. These are starting prices.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {pricing.map((p, i) => (
              <div key={p.size} className="reveal-up p-7 rounded-xl border text-center" style={{ borderColor: `${C.blood}22`, backgroundColor: C.grey, animationDelay: `${i * 0.08}s` }}>
                <p className="text-xs tracking-[0.3em] uppercase mb-2" style={S.muted}>{p.size}</p>
                <p className="text-3xl font-extralight mb-1" style={S.blood}>From {p.from}</p>
                <p className="text-sm font-light mb-3" style={S.bone}>{p.desc}</p>
                <p className="text-xs" style={S.muted}>{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AFTERCARE GUIDE
          ═══════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 grain" style={S.dark}>
        <div className="max-w-5xl mx-auto reveal-up">
          <div className="p-10 rounded-2xl border" style={{ borderColor: `${C.blood}33`, backgroundColor: `${C.blood}08` }}>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>Aftercare</p>
            <h3 className="text-3xl font-light mb-6" style={S.bone}>We&rsquo;re Here for the Lifetime of Your Tattoo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { phase: 'Days 1–3', instructions: 'Keep wrapped, gently clean with fragrance-free soap twice daily. Apply thin layer of healing balm.' },
                { phase: 'Days 4–14', instructions: 'Let it peel naturally. Do not pick or scratch. Avoid direct sunlight, swimming and soaking.' },
                { phase: 'Month 1+', instructions: 'Keep moisturised. Apply SPF 50+ in sun. Free touch-up within 3 months if any ink loss occurs.' },
              ].map((phase) => (
                <div key={phase.phase}>
                  <p className="text-xs tracking-[0.3em] uppercase mb-2" style={S.blood}>{phase.phase}</p>
                  <p className="text-sm font-light leading-relaxed" style={S.muted}>{phase.instructions}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING
          ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-16" style={S.darker}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>Book</p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8" style={S.bone}>Free Consultation</h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.muted}>
              Your 30-minute consultation is free, no obligation. Bring references, ideas, rough sketches — or nothing at all. We&rsquo;ll help you find it.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Hours', detail: 'Tue–Sat 10:00–19:00' },
                { label: 'Location', detail: '14 Coldharbour Lane, Brixton SE5 9NR' },
                { label: 'Deposit', detail: '20% to secure session bookings' },
                { label: 'Consultation', detail: 'Always free — 30 min, in-studio or video' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[40px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.blood}55` }} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-1" style={S.blood}>{info.label}</p>
                    <p className="text-sm font-light" style={S.muted}>{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget locale="en" slots={mockSlots} socialProof={{ count: 47, label: 'consultations this month' }} vertical="tattooos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 1000)) }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.dark}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={S.bone}>Reviews</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16 grain" style={S.darker}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={S.blood}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={S.bone}>Your Questions</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} locale="en" />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460333" message="Hi! I'd like to book a free consultation at Inkwell Studio." vertical="tattooos" />
    </div>
  )
}
