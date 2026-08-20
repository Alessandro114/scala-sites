'use client'
import Image from 'next/image';

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
import { generateLocalBusinessJsonLd, generateFAQJsonLd } from '@scala-sites/core/lib/seo'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  lavender:  '#e8dff5',
  lavMid:    '#c4aee8',
  lavDark:   '#7c5cbf',
  mint:      '#d4edda',
  mintMid:   '#8fc9a0',
  mintDark:  '#3d8a57',
  peach:     '#fce4d6',
  peachMid:  '#f4a97b',
  peachDark: '#d4693b',
  charcoal:  '#333333',
  darkText:  '#4a4a4a',
  muted:     '#888888',
  white:     '#fffcf9',
  bgLight:   '#faf8ff',
  bgMint:    '#f0faf3',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Little Stars Nursery',
  description: 'Ofsted Outstanding Montessori nursery for children aged 0–5',
  url: 'https://littlestarsnursery.co.uk',
  locale: 'en',
  vertical: 'eduos',
  theme: 'classic',
  branding: { primaryColor: C.lavDark, accentColor: C.mintDark },
  contact: {
    phone: '+44 20 7946 0880',
    email: 'hello@littlestarsnursery.co.uk',
    whatsapp: '+442079460880',
    address: '14 Primrose Hill Road, Primrose Hill, London NW1 8JL',
    coordinates: { lat: 51.5430, lng: -0.1600 },
  },
  social: {
    instagram: 'littlestarsnurseryLDN',
    facebook: 'https://facebook.com/littlestarsnurseryLDN',
  },
  seo: {
    title: 'Little Stars Nursery | Ofsted Outstanding Childcare, London',
    description: 'Montessori-inspired nursery for ages 0–5 in Primrose Hill, London. Ofsted Outstanding. Book a visit today.',
  },
}

// ─────────────────────────────────────────────
// REVIEWS
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Rebecca & Tom M.', rating: 5, text: "From our first visit, Little Stars felt different. The educators genuinely know every child as an individual. Our daughter walked in anxious on day one and was dragging us back in by day three. Extraordinary care.", date: '2026-07-14', source: 'google', verified: true },
  { id: '2', author: 'Aisha K.', rating: 5, text: "The Montessori approach here is real, not just a marketing label. My son has become so much more independent and curious since starting. The daily WhatsApp updates with photos make me feel connected even while I'm at work.", date: '2026-07-28', source: 'google', verified: true },
  { id: '3', author: 'Jonathan L.', rating: 5, text: "We visited six nurseries before choosing Little Stars. The ratio of qualified staff to children, the quality of the outdoor space, and the genuine warmth of the team made the decision easy. Worth every penny.", date: '2026-08-03', source: 'google', verified: true },
  { id: '4', author: 'Priya N.', rating: 5, text: "Our twins started at 18 months and are now in the Pre-School room. The progression in language, social skills, and confidence has been remarkable. The team communicates brilliantly with parents.", date: '2026-07-22', source: 'google', verified: true },
  { id: '5', author: 'Charlotte F.', rating: 5, text: "Ofsted Outstanding is not just a rating here — it is the lived reality. My daughter's key worker knows her quirks, her favourite books, even what makes her laugh. This is childcare done properly.", date: '2026-08-01', source: 'google', verified: true },
]

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const faqs: FAQItem[] = [
  { question: 'What are your Ofsted ratings?', answer: 'Little Stars Nursery received an Outstanding rating in all four Ofsted inspection areas: Overall effectiveness, Quality of education, Behaviour and attitudes, and Personal development. Our most recent report is available on the Ofsted website and we are delighted to share it with families.' },
  { question: 'What are your staff-to-child ratios?', answer: 'Baby Room (0–1): 1:3 | Toddler Room (1–3): 1:4 | Pre-School Room (3–5): 1:8. We often run above the statutory minimum, especially in our Baby Room where we maintain a 1:2 ratio during key care moments.' },
  { question: 'Do you provide meals and snacks?', answer: 'Yes. All meals are freshly prepared on site by our qualified chef. Menus are seasonal, nutritionally balanced, and rotate weekly. We accommodate all allergies and dietary requirements including halal and vegetarian. Menus are shared with parents monthly.' },
  { question: 'What hours are you open?', answer: 'We operate Monday to Friday, 7:30am to 6:30pm, 51 weeks per year (closed one week over Christmas). Part-time sessions are available from 15 hours per week. Flexible patterns can be discussed at your visit.' },
  { question: 'Is government funding accepted?', answer: 'Yes. We accept 15 hours of universal funding for all 3–4 year olds, and the additional 15 hours for eligible working parents. We also accept Tax-Free Childcare. Our admin team will help you navigate the process at your visit.' },
  { question: 'What is your settling-in process?', answer: 'Every new child has a structured settling-in period of one to two weeks, tailored to their individual needs. This involves gradual introduction sessions, a dedicated key worker who builds a relationship with both child and family, and daily feedback throughout.' },
  { question: 'Can I drop in for a visit without booking?', answer: 'We warmly welcome visits, but ask that you book in advance so we can give you our full attention and ensure the visit does not disrupt the children\'s routines. Book via WhatsApp, phone, or the form on this page.' },
  { question: 'What is your approach to behaviour and wellbeing?', answer: 'We use a Positive Behaviour Support approach — focusing on what children can do, building self-regulation, and modelling respectful communication. We do not use time-outs or punitive approaches. Our SENCo is available to support any child with additional needs.' },
]

// ─────────────────────────────────────────────
// BOOKING SLOTS (visit booking)
// ─────────────────────────────────────────────
const today    = new Date().toISOString().split('T')[0]
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]
const day3     = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today,    time: '09:30', available: true,  spotsLeft: 2 },
  { id: '2', date: today,    time: '14:00', available: false, spotsLeft: 0 },
  { id: '3', date: tomorrow, time: '09:30', available: true,  spotsLeft: 3 },
  { id: '4', date: tomorrow, time: '11:00', available: true,  spotsLeft: 2 },
  { id: '5', date: tomorrow, time: '14:00', available: true,  spotsLeft: 1 },
  { id: '6', date: day3,     time: '09:30', available: true,  spotsLeft: 3 },
  { id: '7', date: day3,     time: '11:00', available: true,  spotsLeft: 2 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusiness = generateLocalBusinessJsonLd(siteConfig)
const faqSchema     = generateFAQJsonLd(faqs)

// ─────────────────────────────────────────────
// INLINE STYLES
// ─────────────────────────────────────────────
const S = {
  page:       { backgroundColor: C.white,    color: C.charcoal }  as React.CSSProperties,
  bgLav:      { backgroundColor: C.lavender }                      as React.CSSProperties,
  bgMint:     { backgroundColor: C.mint }                          as React.CSSProperties,
  bgPeach:    { backgroundColor: C.peach }                         as React.CSSProperties,
  bgLight:    { backgroundColor: C.bgLight }                       as React.CSSProperties,
  bgMintLight:{ backgroundColor: C.bgMint }                        as React.CSSProperties,
  lavDark:    { color: C.lavDark }                                  as React.CSSProperties,
  mintDark:   { color: C.mintDark }                                 as React.CSSProperties,
  peachDark:  { color: C.peachDark }                               as React.CSSProperties,
  charcoal:   { color: C.charcoal }                                as React.CSSProperties,
  darkText:   { color: C.darkText }                                as React.CSSProperties,
  muted:      { color: C.muted }                                   as React.CSSProperties,
}

// ═══════════════════════════════════════════════
//  FLOATING SHAPE component
// ═══════════════════════════════════════════════
function FloatingShape({
  shape,
  size,
  color,
  top,
  left,
  delay = 0,
  duration = 6,
}: {
  shape: 'circle' | 'star' | 'cloud' | 'triangle' | 'square'
  size: number
  color: string
  top:  string
  left: string
  delay?: number
  duration?: number
}) {
  const shapeEl = (() => {
    switch (shape) {
      case 'circle':
        return (
          <div
            style={{
              width:           size,
              height:          size,
              borderRadius:    '50%',
              backgroundColor: color,
              opacity:         0.55,
            }}
          />
        )
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ opacity: 0.55 }}>
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        )
      case 'cloud':
        return (
          <svg width={size} height={size * 0.6} viewBox="0 0 60 36" fill={color} style={{ opacity: 0.45 }}>
            <ellipse cx="20" cy="26" rx="16" ry="10" />
            <ellipse cx="36" cy="26" rx="16" ry="10" />
            <ellipse cx="28" cy="18" rx="14" ry="10" />
          </svg>
        )
      case 'triangle':
        return (
          <svg width={size} height={size * 0.87} viewBox="0 0 100 87" fill={color} style={{ opacity: 0.4 }}>
            <polygon points="50,5 95,82 5,82" />
          </svg>
        )
      case 'square':
        return (
          <div
            style={{
              width:           size,
              height:          size,
              backgroundColor: color,
              borderRadius:    size * 0.15,
              opacity:         0.45,
              transform:       'rotate(12deg)',
            }}
          />
        )
    }
  })()

  return (
    <div
      aria-hidden
      style={{
        position:        'absolute',
        top,
        left,
        animation:       `float-shape ${duration}s ease-in-out ${delay}s infinite alternate`,
        pointerEvents:   'none',
        zIndex:          1,
      }}
    >
      {shapeEl}
    </div>
  )
}

// ═══════════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════════
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.white}ee`,
        backdropFilter:  'blur(12px)',
        borderBottom:    `1px solid ${C.lavMid}44`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Star logo */}
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold"
            style={{ background: `linear-gradient(135deg, ${C.lavDark}, ${C.mintDark})` }}
          >
            ★
          </div>
          <span
            className="font-bold text-base"
            style={{ color: C.lavDark, letterSpacing: '-0.01em' }}
          >
            Little Stars
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Programs', 'Approach', 'Staff', 'Fees'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors duration-300"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.lavDark)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {item}
            </a>
          ))}
          <a
            href="#visit"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: C.lavDark, color: C.white }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.lavMid)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.lavDark)}
          >
            Book a Visit
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════
export default function DaycarePage() {
  return (
    <div style={S.page}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Global keyframes */}
      <style>{`
        @keyframes float-shape {
          0%   { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-18px) rotate(8deg); }
        }
        @keyframes hero-bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .schedule-line::before {
          content: '';
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, ${C.lavMid}, ${C.mintMid});
        }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          1. HERO — Soft Pastel Gradient + Floating Shapes
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: `linear-gradient(135deg, ${C.lavender} 0%, ${C.lavMid}88 30%, ${C.mint} 60%, ${C.peach} 100%)`,
        }}
      >
        {/* Floating geometric shapes */}
        <FloatingShape shape="circle"   size={80}  color={C.lavMid}    top="8%"  left="5%"  delay={0}   duration={7} />
        <FloatingShape shape="star"     size={40}  color={C.peachDark} top="15%" left="88%" delay={1}   duration={5} />
        <FloatingShape shape="cloud"    size={100} color={C.mintMid}   top="20%" left="70%" delay={0.5} duration={8} />
        <FloatingShape shape="triangle" size={50}  color={C.lavDark}   top="70%" left="92%" delay={2}   duration={6} />
        <FloatingShape shape="circle"   size={50}  color={C.peachMid}  top="75%" left="3%"  delay={1.5} duration={7} />
        <FloatingShape shape="star"     size={28}  color={C.mintDark}  top="85%" left="20%" delay={0.8} duration={5.5} />
        <FloatingShape shape="square"   size={40}  color={C.lavMid}    top="60%" left="80%" delay={2.2} duration={6.5} />
        <FloatingShape shape="cloud"    size={70}  color={C.peach}     top="50%" left="12%" delay={1.2} duration={7.5} />
        <FloatingShape shape="circle"   size={30}  color={C.mintMid}   top="35%" left="25%" delay={3}   duration={5} />
        <FloatingShape shape="star"     size={55}  color={C.lavMid}    top="40%" left="85%" delay={0.3} duration={8} />

        {/* Ofsted Outstanding badge */}
        <div
          className="absolute top-24 right-6 md:right-12 z-10 flex flex-col items-center text-center px-4 py-3 rounded-2xl"
          style={{
            backgroundColor: C.white,
            boxShadow:       '0 4px 24px rgba(0,0,0,0.1)',
            border:          `2px solid ${C.lavMid}44`,
          }}
        >
          <span className="text-2xl" aria-hidden>⭐</span>
          <p className="text-[10px] font-black tracking-wider uppercase" style={S.lavDark}>Ofsted</p>
          <p className="text-[10px] font-black tracking-wider uppercase" style={S.lavDark}>Outstanding</p>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Bobbing star above title */}
          <div
            className="mx-auto mb-8 w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              background:   `linear-gradient(135deg, ${C.lavDark}, ${C.mintDark})`,
              boxShadow:    `0 0 0 8px ${C.lavMid}44`,
              animation:    'hero-bob 4s ease-in-out infinite',
            }}
            aria-hidden
          >
            ⭐
          </div>
          {/* Pulse rings */}
          <div className="relative mx-auto mb-6" style={{ width: 80, height: 80, marginTop: -80, marginBottom: 32 }}>
            {[1, 2].map((n) => (
              <div
                key={n}
                style={{
                  position:    'absolute',
                  inset:       -n * 12,
                  borderRadius: '50%',
                  border:       `2px solid ${C.lavMid}`,
                  animation:    `pulse-ring 3s ease-out ${n * 0.8}s infinite`,
                  pointerEvents: 'none',
                }}
              />
            ))}
          </div>

          <p
            className="reveal-clip-up text-sm tracking-[0.3em] uppercase font-semibold mb-6"
            style={S.lavDark}
          >
            Primrose Hill, London &middot; Ages 0–5
          </p>

          <h1 className="mb-6">
            {['Where Little', 'Stars Shine'].map((line, i) => (
              <span
                key={line}
                className="reveal-clip-up block font-black leading-tight"
                style={{
                  color:          C.charcoal,
                  fontSize:       'clamp(3rem, 8vw, 6.5rem)',
                  animationDelay: `${i * 0.2}s`,
                  letterSpacing:  '-0.02em',
                  textShadow:     '0 2px 20px rgba(255,255,255,0.8)',
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="reveal-up text-lg font-light leading-relaxed max-w-xl mx-auto mb-10"
            style={{ ...S.darkText, animationDelay: '0.45s' }}
          >
            Montessori-inspired childcare where every child is seen, heard, and celebrated.
            Ofsted Outstanding. Open 7:30am–6:30pm, 51 weeks a year.
          </p>

          {/* Stats pills */}
          <div
            className="reveal-up flex flex-wrap justify-center gap-3 mb-10"
            style={{ animationDelay: '0.55s' }}
          >
            {[
              { n: 'Ofsted Outstanding', color: C.lavDark,   bg: C.lavender },
              { n: '1:3 Baby Ratio',     color: C.mintDark,  bg: C.mint },
              { n: 'Ages 0–5',           color: C.peachDark, bg: C.peach },
              { n: 'Open 51 Weeks',      color: C.lavDark,   bg: C.lavender },
            ].map((stat) => (
              <span
                key={stat.n}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: stat.bg, color: stat.color, border: `1px solid ${stat.color}33` }}
              >
                {stat.n}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="reveal-up flex flex-wrap gap-4 justify-center"
            style={{ animationDelay: '0.65s' }}
          >
            <a
              href="#visit"
              className="px-10 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
              style={{
                background:  `linear-gradient(135deg, ${C.lavDark}, ${C.mintDark})`,
                color:       C.white,
                boxShadow:   `0 8px 32px ${C.lavDark}44`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Book a Visit
            </a>
            <a
              href="#programs"
              className="px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: C.white,
                color:           C.lavDark,
                border:          `2px solid ${C.lavMid}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.lavender
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.white
              }}
            >
              Our Programmes
            </a>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill={C.white} />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. TRUST BAR
          ═══════════════════════════════════════ */}
      <section className="py-10 px-6 overflow-hidden" style={{ backgroundColor: C.white }}>
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-12 px-4">
              {[
                { icon: '⭐', text: 'Ofsted Outstanding' },
                { icon: '🌱', text: 'Montessori Approach' },
                { icon: '🍽', text: 'Fresh Meals Daily' },
                { icon: '🛡', text: 'DBS Checked Staff' },
                { icon: '📱', text: 'Daily Photo Updates' },
                { icon: '🌳', text: 'Outdoor Learning' },
                { icon: '♿', text: 'SEND Inclusive' },
                { icon: '💚', text: 'Tax-Free Childcare' },
              ].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="text-xl" aria-hidden>{item.icon}</span>
                  <span className="text-sm font-semibold tracking-wide" style={S.darkText}>{item.text}</span>
                  <span className="text-xl" style={{ color: C.lavMid }} aria-hidden>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. PROGRAMMES
          ═══════════════════════════════════════ */}
      <section
        id="programs"
        className="relative py-24 md:py-32 px-6 md:px-16"
        style={S.bgLight}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
              Our Programmes
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={S.charcoal}>
              Three Nurturing Rooms
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={S.muted}>
              Each room is designed for the specific developmental stage of your child —
              with dedicated educators, purpose-built environments, and tailored daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                room:    'Baby Room',
                age:     '0 – 18 months',
                icon:    '🍼',
                color:   C.peachDark,
                bg:      C.peach,
                border:  C.peachMid,
                ratio:   '1:3',
                schedule: [
                  { time: '07:30', activity: 'Welcome & free play' },
                  { time: '09:00', activity: 'Sensory exploration' },
                  { time: '10:00', activity: 'Morning snack' },
                  { time: '10:30', activity: 'Tummy time & massage' },
                  { time: '12:00', activity: 'Lunch' },
                  { time: '13:00', activity: 'Rest & sleep' },
                  { time: '15:00', activity: 'Outdoor time' },
                  { time: '17:00', activity: 'Story & wind-down' },
                ],
                features: [
                  'Individual sleep schedules respected',
                  'Sensory play every morning',
                  'Baby massage sessions',
                  'Weekly baby yoga',
                  'Daily parent updates via app',
                ],
              },
              {
                room:    'Toddler Room',
                age:     '18 months – 3 years',
                icon:    '🌱',
                color:   C.lavDark,
                bg:      C.lavender,
                border:  C.lavMid,
                ratio:   '1:4',
                featured: true,
                schedule: [
                  { time: '07:30', activity: 'Welcome & morning circle' },
                  { time: '09:00', activity: 'Montessori work cycle' },
                  { time: '10:30', activity: 'Snack & handwashing' },
                  { time: '11:00', activity: 'Outdoor exploration' },
                  { time: '12:00', activity: 'Lunch together' },
                  { time: '13:00', activity: 'Rest / quiet time' },
                  { time: '14:30', activity: 'Creative arts & music' },
                  { time: '17:00', activity: 'Story & home time prep' },
                ],
                features: [
                  'Language-rich environment',
                  'Practical life skills (pouring, sorting)',
                  'Music & movement daily',
                  'Forest school sessions',
                  'Sign language introduced',
                ],
              },
              {
                room:    'Pre-School Room',
                age:     '3 – 5 years',
                icon:    '🚀',
                color:   C.mintDark,
                bg:      C.mint,
                border:  C.mintMid,
                ratio:   '1:8',
                schedule: [
                  { time: '07:30', activity: 'Welcome & self-registration' },
                  { time: '09:00', activity: 'Morning work cycle' },
                  { time: '10:30', activity: 'Group snack & discussion' },
                  { time: '11:00', activity: 'Outdoor PE & gardening' },
                  { time: '12:00', activity: 'Lunch' },
                  { time: '13:00', activity: 'Literacy & numeracy' },
                  { time: '14:30', activity: 'Project-based learning' },
                  { time: '17:00', activity: 'Reflection circle & home time' },
                ],
                features: [
                  'School-readiness programme',
                  'Reading & phonics integrated',
                  'STEM exploration corner',
                  'Project-based inquiry learning',
                  '100% Reception-ready track record',
                ],
              },
            ].map((room, idx) => (
              <div
                key={room.room}
                className="reveal-up rounded-3xl overflow-hidden relative"
                style={{
                  animationDelay:  `${idx * 0.12}s`,
                  border:          `2px solid ${room.border}`,
                  backgroundColor: C.white,
                  boxShadow:       room.featured ? `0 16px 48px ${room.color}22` : '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                {room.featured && (
                  <div
                    className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-black tracking-widest uppercase"
                    style={{ backgroundColor: room.color, color: C.white }}
                  >
                    Most Popular
                  </div>
                )}
                {/* Room header */}
                <div
                  className={`px-8 ${room.featured ? 'pt-12' : 'pt-8'} pb-6`}
                  style={{ backgroundColor: room.bg }}
                >
                  <span className="text-4xl" aria-hidden>{room.icon}</span>
                  <h3 className="text-2xl font-black mt-3 mb-1" style={{ color: room.color }}>{room.room}</h3>
                  <p className="text-sm font-semibold" style={S.muted}>{room.age}</p>
                  <div
                    className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: room.color, color: C.white }}
                  >
                    Ratio {room.ratio}
                  </div>
                </div>

                {/* Features */}
                <div className="px-8 py-6 border-b" style={{ borderColor: `${room.border}66` }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: room.color }}>
                    What We Do
                  </p>
                  <ul className="space-y-2">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={S.darkText}>
                        <span className="mt-0.5 flex-shrink-0" style={{ color: room.color }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sample daily schedule */}
                <div className="px-8 py-6">
                  <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: room.color }}>
                    Sample Day
                  </p>
                  <div className="relative schedule-line space-y-3 pl-10">
                    {room.schedule.slice(0, 4).map((s) => (
                      <div key={s.time} className="flex gap-3 items-start">
                        <span
                          className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                          style={{
                            backgroundColor: `${room.color}22`,
                            color:           room.color,
                            border:          `1px solid ${room.color}44`,
                            position:        'relative',
                            marginLeft:      -32,
                          }}
                        >
                          {s.time.substring(0, 2)}
                        </span>
                        <p className="text-sm" style={S.darkText}>{s.activity}</p>
                      </div>
                    ))}
                    <p className="text-xs italic" style={S.muted}>+ 4 more activities…</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. OUR APPROACH
          ═══════════════════════════════════════ */}
      <section
        id="approach"
        className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.lavender}88 0%, ${C.mint}88 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
              Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={S.charcoal}>
              The Little Stars Approach
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={S.muted}>
              We blend Montessori methodology with modern developmental research —
              creating an environment where children lead their own learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              { icon: '🌿', title: 'Child-Led Learning',     color: C.mintDark,  bg: C.mint,     desc: 'Children choose their activities within a structured framework. We follow their curiosity, not a rigid timetable.' },
              { icon: '🤝', title: 'Key Person Approach',    color: C.lavDark,   bg: C.lavender, desc: 'Every child has a dedicated key worker who builds a deep relationship with both child and family.' },
              { icon: '🌳', title: 'Nature & Outdoor Time',  color: C.mintDark,  bg: C.mint,     desc: 'Daily outdoor sessions in all weathers. Forest school sessions monthly. Gardening is part of the curriculum.' },
              { icon: '🎵', title: 'Music & Movement',       color: C.peachDark, bg: C.peach,    desc: 'Music integrated throughout the day — not as a separate "lesson" but woven into routines, transitions, and play.' },
              { icon: '📖', title: 'Language & Literacy',    color: C.lavDark,   bg: C.lavender, desc: 'Rich book environments, daily story time, and a print-rich setting. Our Pre-School children leave as confident readers.' },
              { icon: '💛', title: 'Emotional Intelligence', color: C.peachDark, bg: C.peach,    desc: 'We name feelings, model regulation, and use Zones of Regulation. Social skills are as important as academic ones.' },
            ].map((value, i) => (
              <div
                key={value.title}
                className="reveal-up rounded-2xl p-6"
                style={{
                  animationDelay:  `${i * 0.08}s`,
                  backgroundColor: C.white,
                  border:          `1px solid ${value.color}22`,
                  boxShadow:       '0 2px 20px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: value.bg }}
                >
                  <span aria-hidden>{value.icon}</span>
                </div>
                <h3 className="text-base font-black mb-2" style={{ color: value.color }}>{value.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={S.darkText}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. VIRTUAL TOUR PLACEHOLDER
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-16" style={{ backgroundColor: C.white }}>
        <div className="max-w-5xl mx-auto text-center reveal-up">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
            See the Space
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-6" style={S.charcoal}>
            Take a Virtual Tour
          </h2>
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{
              height:          380,
              background:      `linear-gradient(135deg, ${C.lavender}, ${C.mint})`,
              border:          `2px solid ${C.lavMid}44`,
              boxShadow:       '0 8px 40px rgba(0,0,0,0.08)',
            }}
          >
            <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop&q=90"
              alt="Little Stars Nursery — bright, welcoming play space"
              className="w-full h-full object-cover opacity-60" width={1200} height={800} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: C.white,
                  boxShadow:       '0 8px 32px rgba(0,0,0,0.15)',
                }}
              >
                <div
                  className="w-0 h-0"
                  style={{
                    borderTop:    '16px solid transparent',
                    borderBottom: '16px solid transparent',
                    borderLeft:   `28px solid ${C.lavDark}`,
                    marginLeft:   6,
                  }}
                />
              </div>
              <p className="font-bold text-lg" style={{ color: C.white, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                Watch our 3-minute tour video
              </p>
              <span
                className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: C.lavDark, color: C.white }}
              >
                Play Video
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. STAFF PROFILES
          ═══════════════════════════════════════ */}
      <section
        id="staff"
        className="py-24 md:py-32 px-6 md:px-16"
        style={S.bgMintLight}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.mintDark}>
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={S.charcoal}>
              Meet the Educators
            </h2>
            <p className="text-lg font-light max-w-xl mx-auto" style={S.muted}>
              All staff are Level 3 qualified minimum, DBS checked, and first-aid certified.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              {
                name:       'Sarah Mitchell',
                role:       'Nursery Manager',
                room:       'All Rooms',
                qual:       'BA Early Childhood, EYPS',
                years:      '12 years',
                image:      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
                color:      C.lavDark,
                bg:         C.lavender,
              },
              {
                name:       'Emma Clarke',
                role:       'Baby Room Lead',
                room:       'Baby Room',
                qual:       'CACHE Level 3, Baby Massage Cert',
                years:      '8 years',
                image:      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
                color:      C.peachDark,
                bg:         C.peach,
              },
              {
                name:       'Priya Sharma',
                role:       'Toddler Room Lead',
                room:       'Toddler Room',
                qual:       'BA Education, Montessori Diploma',
                years:      '6 years',
                image:      'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=500&fit=crop',
                color:      C.lavDark,
                bg:         C.lavender,
              },
              {
                name:       'James Okonkwo',
                role:       'Pre-School Lead & SENCo',
                room:       'Pre-School Room',
                qual:       'MEd, SENCo Qualification',
                years:      '10 years',
                image:      'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&h=500&fit=crop',
                color:      C.mintDark,
                bg:         C.mint,
              },
            ].map((educator, i) => (
              <div
                key={educator.name}
                className="reveal-up rounded-3xl overflow-hidden bg-white"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  boxShadow:      '0 4px 24px rgba(0,0,0,0.07)',
                  border:         `1px solid ${educator.color}22`,
                }}
              >
                <div className="relative overflow-hidden" style={{ height: 240, backgroundColor: educator.bg }}>
                  <Image src={educator.image}
                    alt={educator.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]" width={1200} height={800} />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: `linear-gradient(to top, ${C.white}, transparent)` }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black mb-0.5" style={S.charcoal}>{educator.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: educator.color }}>{educator.role}</p>
                  <div className="space-y-1.5">
                    <p className="text-xs" style={S.muted}><span className="font-semibold" style={S.darkText}>Room: </span>{educator.room}</p>
                    <p className="text-xs" style={S.muted}><span className="font-semibold" style={S.darkText}>Quals: </span>{educator.qual}</p>
                    <p className="text-xs" style={S.muted}><span className="font-semibold" style={S.darkText}>Experience: </span>{educator.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. REVIEWS
          ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
            Parent Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>
            What Parents Say
          </h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.15s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. DAILY SCHEDULE TIMELINE
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-28 px-6 md:px-16"
        style={{ background: `linear-gradient(to bottom, ${C.lavender}66, ${C.mint}66)` }}
      >
        <div className="max-w-4xl mx-auto reveal-up">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
              A Typical Day
            </p>
            <h2 className="text-3xl md:text-4xl font-black" style={S.charcoal}>
              Your Child&rsquo;s Day at Little Stars
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[18px] top-0 bottom-0 w-0.5"
              style={{ background: `linear-gradient(to bottom, ${C.lavMid}, ${C.mintMid})` }}
            />
            <div className="space-y-6">
              {[
                { time: '07:30',  label: 'Welcome',            desc: 'Gentle start — free play, morning greetings, self-registration',                                 color: C.lavDark  },
                { time: '08:30',  label: 'Breakfast Club',     desc: 'Nutritious breakfast for early arrivals. Sociable table manners encouraged',                    color: C.peachDark },
                { time: '09:00',  label: 'Learning Time',      desc: 'Montessori work cycles, project-based activities, reading corners',                              color: C.lavDark  },
                { time: '10:30',  label: 'Snack & Outdoors',   desc: 'Fresh fruit snack, then outdoor exploration in our garden',                                     color: C.mintDark },
                { time: '12:00',  label: 'Lunch Together',     desc: 'Fresh-cooked meal. Children set the table, pour their own water, tidy up together',             color: C.peachDark },
                { time: '13:00',  label: 'Rest / Quiet Time',  desc: 'Sleep for babies, quiet reading or creative play for older children',                           color: C.lavDark  },
                { time: '14:30',  label: 'Afternoon Activities', desc: 'Music, arts & crafts, STEM, forest school, or cooking — rotated daily',                       color: C.mintDark },
                { time: '17:00',  label: 'Wind Down & Home',   desc: 'Reflection circle, sharing the day, books and home time preparation. Pick-up by 18:30',         color: C.peachDark },
              ].map((step, i) => (
                <div key={step.time} className="flex gap-6 items-start relative">
                  {/* Dot */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.time.substring(0, 2)}
                  </div>
                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl p-4 mb-0"
                    style={{
                      backgroundColor: C.white,
                      border:          `1px solid ${step.color}22`,
                      boxShadow:       '0 2px 12px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm font-black" style={{ color: step.color }}>{step.label}</h3>
                      <span className="text-xs font-mono" style={S.muted}>{step.time}</span>
                    </div>
                    <p className="text-sm font-light leading-relaxed" style={S.darkText}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. FEES
          ═══════════════════════════════════════ */}
      <section
        id="fees"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.white }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
              Fees & Funding
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={S.charcoal}>
              Transparent Pricing
            </h2>
            <p className="text-base font-light" style={S.muted}>
              All prices include meals, snacks, nappies for Baby Room, sun cream, and activities.
              No hidden extras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children mb-12">
            {[
              { label: 'Daily Rate',   price: '£85',    sub: 'Per child per day',      color: C.lavDark,   bg: C.lavender },
              { label: 'Weekly Rate',  price: '£380',   sub: 'Full-time, 5 days',       color: C.mintDark,  bg: C.mint,   featured: true },
              { label: 'Monthly Rate', price: '£1,400', sub: 'Full-time, incl. buffer', color: C.peachDark, bg: C.peach },
            ].map((tier, i) => (
              <div
                key={tier.label}
                className="reveal-up rounded-3xl p-8 text-center relative"
                style={{
                  animationDelay:  `${i * 0.1}s`,
                  backgroundColor: tier.bg,
                  border:          `2px solid ${tier.color}44`,
                  boxShadow:       tier.featured ? `0 12px 40px ${tier.color}33` : 'none',
                }}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase"
                    style={{ backgroundColor: tier.color, color: C.white }}
                  >
                    Best Value
                  </div>
                )}
                <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: tier.color }}>{tier.label}</p>
                <p
                  className="text-5xl font-black mb-1"
                  style={{ color: tier.color }}
                >
                  {tier.price}
                </p>
                <p className="text-sm" style={S.muted}>{tier.sub}</p>
              </div>
            ))}
          </div>

          {/* Funding notice */}
          <div
            className="reveal-up rounded-2xl p-6 flex gap-4 items-start"
            style={{ backgroundColor: C.bgLight, border: `1px solid ${C.lavMid}44` }}
          >
            <span className="text-2xl flex-shrink-0" aria-hidden>💚</span>
            <div>
              <h3 className="text-base font-black mb-1" style={S.lavDark}>Government Funding Available</h3>
              <p className="text-sm font-light" style={S.darkText}>
                We accept 15 hours of free childcare for all 3–4 year olds, and the additional
                15 hours for eligible working parents. Tax-Free Childcare also accepted.
                Our admin team will walk you through every option at your visit — many families
                reduce their fees significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. BOOKING / VISIT
          ═══════════════════════════════════════ */}
      <section
        id="visit"
        className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${C.lavender} 0%, ${C.mint} 100%)` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
          <div className="reveal-left">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
              Come and See Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={S.charcoal}>
              Book a<br />Nursery Visit
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={S.darkText}>
              The best way to get a feel for Little Stars is to come and see it yourself.
              Tours run Tuesday–Thursday at 9:30am and 11:00am. We&rsquo;ll show you the rooms,
              answer all your questions, and introduce you to the team.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', value: '14 Primrose Hill Road, Primrose Hill, London NW1 8JL' },
                { label: 'Phone',   value: '+44 20 7946 0880' },
                { label: 'Email',   value: 'hello@littlestarsnursery.co.uk' },
                { label: 'Hours',   value: 'Mon–Fri 7:30am–6:30pm, 51 weeks/year' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div
                    className="w-1 min-h-[36px] rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${C.lavDark}44` }}
                  />
                  <div>
                    <p className="text-xs font-black tracking-widest uppercase mb-0.5" style={S.lavDark}>{info.label}</p>
                    <p className="text-sm font-light" style={S.darkText}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 34, label: 'families visited this month' }}
              vertical="eduos"
              onSubmit={async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          11. FAQ
          ═══════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.white }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={S.lavDark}>
              Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>
              Frequently Asked
            </h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="DaycareOS" locale="en" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="+442079460880"
        message="Hi! I'd like to book a visit to Little Stars Nursery."
        vertical="eduos"
      />
    </div>
  )
}
