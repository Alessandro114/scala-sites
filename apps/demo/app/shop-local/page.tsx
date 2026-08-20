'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { Gallery } from '@scala-sites/core/components/gallery'

// ─── Theme ────────────────────────────────────────────────────────────────────

const theme = createCustomTheme('minimal', {
  primary: '#2d5016',
  primaryHover: '#1f3a0f',
  accent: '#2d5016',
  background: '#faf8f5',
  surface: '#f3f0eb',
  secondary: '#e8e3da',
  text: '#1c1a17',
  textMuted: '#6b6458',
  border: '#ddd8cf',
  success: '#2d5016',
  warning: '#b87333',
  error: '#c0392b',
})

// ─── Mock data ─────────────────────────────────────────────────────────────────

const todaysSpecials = [
  {
    id: '1',
    name: 'Sourdough Batard',
    description: 'Stone-milled wheat, 72-hour cold ferment. Baked fresh from 7 AM. Limited — 18 loaves daily.',
    price: 7.50,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600',
    badge: 'Baked Today',
    badgeColor: '#2d5016',
    stockLeft: 6,
  },
  {
    id: '2',
    name: 'Raw Honey — Notting Hill Hives',
    description: 'Unfiltered wildflower honey from rooftop hives on Portobello Road. This week\'s harvest.',
    price: 12.00,
    unit: '250g jar',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600',
    badge: 'Local Harvest',
    badgeColor: '#b87333',
    stockLeft: 14,
  },
  {
    id: '3',
    name: 'British Charcuterie Box',
    description: 'Cured meats from Dingley Dell and Trealy Farm: chorizo, lomo, bresaola, and fennel salami.',
    price: 18.50,
    unit: '200g selection',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600',
    badge: 'Friday Only',
    badgeColor: '#c0392b',
    stockLeft: 9,
  },
]

const categories = [
  {
    id: '1',
    name: 'Fresh Bread & Pastries',
    description: 'Baked in-house from 7 AM daily',
    count: 12,
    icon: '🍞',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
  },
  {
    id: '2',
    name: 'Artisan Cheese & Deli',
    description: 'British & European, direct from affineurs',
    count: 28,
    icon: '🧀',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500',
  },
  {
    id: '3',
    name: 'Fresh Fruit & Veg',
    description: 'Seasonal, direct from UK farms weekly',
    count: 45,
    icon: '🥦',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500',
  },
  {
    id: '4',
    name: 'Pantry Staples',
    description: 'Oils, vinegars, pulses, grains, preserves',
    count: 63,
    icon: '🫙',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500',
  },
  {
    id: '5',
    name: 'Coffee & Tea',
    description: 'Roasted locally — 6 single origins in stock',
    count: 17,
    icon: '☕',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=500',
  },
  {
    id: '6',
    name: 'Wine & Craft Beer',
    description: 'Natural wines, British ciders, micro-brewery ales',
    count: 34,
    icon: '🍷',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500',
  },
]

const inlineReviews = [
  {
    author: 'Sarah T.',
    rating: 5,
    date: '3 days ago',
    text: 'The Corner Store is genuinely the best thing about living in Notting Hill. I pick up bread every Saturday morning and I have not bought supermarket bread since. The cheese counter is extraordinary.',
    verified: true,
  },
  {
    author: 'Marcus & Jo P.',
    rating: 5,
    date: '1 week ago',
    text: 'Click & collect is a game-changer. I order Thursday night, pick up Friday lunchtime on the way home. Everything is perfectly packed and they always leave a note about what arrived fresh that day.',
    verified: true,
  },
  {
    author: 'Priya N.',
    rating: 5,
    date: '2 weeks ago',
    text: 'Tom and the team know our whole family by name now. They held back a sourdough for us when we were running late one Saturday. You cannot buy that kind of thoughtfulness.',
    verified: true,
  },
  {
    author: 'David A.',
    rating: 5,
    date: '3 weeks ago',
    text: 'The charcuterie boxes are worth every penny. I bring one to every dinner party and it always gets asked about. The honey from the Portobello hives is genuinely unlike anything I have tasted.',
    verified: true,
  },
]

const carouselReviews = inlineReviews.map((r, i) => ({
  id: String(i + 1),
  author: r.author,
  rating: r.rating,
  text: r.text,
  date: '2026-07-01',
  source: 'Google' as const,
  verified: r.verified,
}))

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=700', alt: 'Fresh fruit display', category: 'Produce', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=700', alt: 'Artisan bread shelf', category: 'Bakery', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=700', alt: 'Cheese counter', category: 'Deli', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700', alt: 'Coffee being ground', category: 'Coffee', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=700', alt: 'Pantry jars', category: 'Pantry', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700', alt: 'Wine bottles', category: 'Drinks', width: 600, height: 400 },
]

const faqs = [
  {
    question: 'How does Click & Collect work?',
    answer:
      'Browse our selection online or message us on WhatsApp, tell us what you would like, and choose a collection slot. We will have everything packed and ready for you — no queue, no wait. Same-day collection is available on orders placed before noon. We send a WhatsApp confirmation when your order is ready.',
  },
  {
    question: 'Do you offer home delivery?',
    answer:
      'Yes — we deliver within a 1-mile radius of the store Tuesday through Saturday, with slots at 10:00–12:00 and 14:00–16:00. Delivery is £3.50 on orders under £30 and free above. Orders must be placed by 9 AM for same-day delivery. For regular weekly deliveries, ask about our standing order service.',
  },
  {
    question: 'What time does fresh bread arrive?',
    answer:
      'Bread is baked on-site and comes out of the oven between 6:30 and 7:30 AM. By 8:00 AM the full selection is on the shelf. We bake a second smaller batch on weekends at 10:30 AM. We almost always sell out of sourdough by mid-morning on Saturdays — arrive early or reserve a loaf via WhatsApp.',
  },
  {
    question: 'Can I order bespoke cheese boards or hampers?',
    answer:
      'Absolutely. Give us 48 hours notice and we will build a custom board or hamper to your brief and budget — for dinner parties, gifts, or occasions. Standard hampers start at £35. We wrap and label everything. For corporate orders of 5 or more, please call us directly for a quote.',
  },
  {
    question: 'Do you stock items for dietary requirements?',
    answer:
      'We carry a strong gluten-free range (including our own GF loaf, baked Mondays and Thursdays), a growing vegan selection, and we label all allergens clearly. Our team can guide you to suitable options — just ask. We are a small shop and can usually source specific items with a week\'s notice.',
  },
  {
    question: 'Are you open on Bank Holidays?',
    answer:
      'We open on most Bank Holidays from 9 AM to 3 PM, with a reduced selection. Christmas, Boxing Day and New Year\'s Day are exceptions — we post our holiday hours on Instagram and WhatsApp Status a week in advance. Loyal customers can sign up for our WhatsApp broadcast list for real-time updates.',
  },
]

const bookingSlots = [
  { id: '1', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '09:00', available: true },
  { id: '2', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '11:00', available: true },
  { id: '3', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '14:00', available: true, spotsLeft: 2 },
  { id: '4', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '16:00', available: true },
  { id: '5', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '09:00', available: true },
  { id: '6', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '11:30', available: true },
  { id: '7', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '14:30', available: true },
  { id: '8', date: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0], time: '10:00', available: true, spotsLeft: 3 },
  { id: '9', date: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0], time: '15:00', available: true },
]

const siteConfig = {
  name: 'The Corner Store',
  tagline: '83 Westbourne Grove, Notting Hill, London W2 4UL',
  phone: '+44 20 7229 3841',
  email: 'hello@cornerstorenotting.co.uk',
  address: '83 Westbourne Grove, Notting Hill, London W2 4UL',
  social: { instagram: '#', facebook: '#' },
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function TrustBadge({ icon, label, sublabel }: { icon: string; label: string; sublabel: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: '#e8f0e0' }}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-[#1c1a17]">{label}</p>
        <p className="text-xs text-[#6b6458]">{sublabel}</p>
      </div>
    </div>
  )
}

function SpecialCard({ item }: { item: typeof todaysSpecials[0] }) {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ backgroundColor: '#fff', borderColor: '#ddd8cf' }}>
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        <span
          className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: item.badgeColor }}
        >
          {item.badge}
        </span>
        {item.stockLeft <= 10 && (
          <span className="absolute top-3 right-3 bg-white text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: '#c0392b' }}>
            {item.stockLeft} left
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-[#1c1a17] text-base leading-snug">{item.name}</h3>
          <p className="text-lg font-bold flex-shrink-0" style={{ color: '#2d5016' }}>
            £{item.price.toFixed(2)}
            <span className="text-xs font-normal text-[#6b6458] ml-1">/{item.unit}</span>
          </p>
        </div>
        <p className="text-sm text-[#6b6458] leading-relaxed mb-4">{item.description}</p>
        <button
          className="w-full py-3 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#2d5016' }}
        >
          Add to Order
        </button>
      </div>
    </div>
  )
}

function CategoryCard({ cat }: { cat: typeof categories[0] }) {
  return (
    <div className="group cursor-pointer rounded-xl overflow-hidden border transition-shadow hover:shadow-md" style={{ backgroundColor: '#fff', borderColor: '#ddd8cf' }}>
      <div className="relative h-40 overflow-hidden">
        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-3 text-2xl">{cat.icon}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#1c1a17] mb-1">{cat.name}</h3>
        <p className="text-xs text-[#6b6458] mb-2">{cat.description}</p>
        <p className="text-xs font-semibold" style={{ color: '#2d5016' }}>{cat.count} items available →</p>
      </div>
    </div>
  )
}

function InlineReview({ review }: { review: typeof inlineReviews[0] }) {
  return (
    <div className="rounded-xl p-6 border" style={{ backgroundColor: '#fff', borderColor: '#ddd8cf' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-4 h-4" fill="#2d5016" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-[#6b6458]">{review.date}</span>
        {review.verified && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#e8f0e0', color: '#2d5016' }}>
            Verified
          </span>
        )}
      </div>
      <p className="text-sm text-[#1c1a17] leading-relaxed mb-3">&quot;{review.text}&quot;</p>
      <p className="text-sm font-bold text-[#1c1a17]">{review.author}</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShopLocalPage() {
  const [orderStep, setOrderStep] = useState<'idle' | 'open' | 'done'>('idle')

  return (
    <div style={{ ...themeToStyleObject(theme) as React.CSSProperties, backgroundColor: '#faf8f5', color: '#1c1a17', fontFamily: '"Inter", system-ui, sans-serif' }}>

      {/* ── JSON-LD: LocalBusiness + FAQ ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'GroceryStore',
              name: 'The Corner Store',
              description: 'Artisan groceries and deli in Notting Hill. Fresh bread, real cheese, seasonal produce.',
              url: 'https://cornerstorenotting.example.com',
              telephone: '+44 20 7229 3841',
              email: 'hello@cornerstorenotting.co.uk',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '83 Westbourne Grove',
                addressLocality: 'London',
                postalCode: 'W2 4UL',
                addressCountry: 'GB',
              },
              openingHours: ['Mo-Fr 07:00-19:00', 'Sa 07:00-18:00', 'Su 09:00-16:00'],
              priceRange: '££',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
  dateModified: '2026-08-11',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            },
          ]),
        }}
      />

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b" style={{ backgroundColor: '#faf8f5', borderColor: '#ddd8cf' }}>
        <div>
          <p className="font-bold text-lg text-[#1c1a17] leading-none">The Corner Store</p>
          <p className="text-xs text-[#6b6458]">Notting Hill, London</p>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-[#6b6458]">
          <a href="#specials" className="hover:text-[#2d5016] transition-colors font-medium">Today&apos;s Specials</a>
          <a href="#categories" className="hover:text-[#2d5016] transition-colors font-medium">Shop</a>
          <a href="#collect" className="hover:text-[#2d5016] transition-colors font-medium">Click & Collect</a>
          <a href="#about" className="hover:text-[#2d5016] transition-colors font-medium">About</a>
        </div>
        <a
          href="#collect"
          className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#2d5016' }}
        >
          Order Now
        </a>
      </nav>

      {/* ══════════════════════════════════════════════
          CUSTOM HERO — Handcrafted / Kraft Paper
          Warm beige gradient, dashed rotated border,
          floating illustrated icons with CSS animation.
          ══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 md:py-36 px-6"
        style={{
          background: 'linear-gradient(145deg, #f5ead8 0%, #ede0c4 40%, #e8d5ae 100%)',
        }}
        aria-label="Hero — The Corner Store"
      >
        {/* Subtle paper texture via repeating SVG pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 28px, #c4a97022 28px, #c4a97022 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, #c4a97022 28px, #c4a97022 29px)',
          }}
        />

        {/* Floating illustrated icons */}
        {[
          { emoji: '🌿', top: '12%', left: '6%', delay: '0s', duration: '6s' },
          { emoji: '🧺', top: '20%', right: '8%', delay: '1.5s', duration: '7s' },
          { emoji: '🫙', bottom: '18%', left: '10%', delay: '0.8s', duration: '5.5s' },
          { emoji: '☕', top: '60%', right: '12%', delay: '2.2s', duration: '8s' },
          { emoji: '🍞', bottom: '25%', right: '6%', delay: '0.4s', duration: '6.5s' },
          { emoji: '🌻', top: '8%', right: '25%', delay: '3s', duration: '7.5s' },
        ].map(({ emoji, delay, duration, ...pos }, i) => (
          <span
            key={i}
            className="absolute text-3xl md:text-4xl select-none pointer-events-none"
            style={{
              ...pos as React.CSSProperties,
              animation: `floatIcon ${duration} ease-in-out ${delay} infinite`,
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.08))',
            }}
          >
            {emoji}
          </span>
        ))}

        {/* Centre card with dashed rotated border */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Outer rotated dashed frame */}
          <div
            className="absolute -inset-6 md:-inset-10 rounded-2xl pointer-events-none"
            style={{
              border: '2px dashed #8b6914',
              transform: 'rotate(-1.5deg)',
              opacity: 0.5,
            }}
          />
          {/* Inner counter-rotated card */}
          <div
            className="relative rounded-2xl px-10 py-14 md:px-16 md:py-20 text-center"
            style={{
              backgroundColor: 'rgba(255,252,245,0.85)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 8px 40px rgba(139,105,20,0.12), 0 2px 8px rgba(139,105,20,0.06)',
            }}
          >
            {/* Stamp badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
              style={{ backgroundColor: '#e8f0e0', color: '#2d5016', border: '1.5px solid #2d5016' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse" />
              Est. 2016 &ensp;&middot;&ensp; Notting Hill
            </div>

            {/* Headline — friendly rounded feel */}
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{
                color: '#2c1e10',
                fontFamily: '"Georgia", serif',
                letterSpacing: '-0.02em',
              }}
            >
              Your Proper<br />
              <span style={{ color: '#2d5016' }}>Neighbourhood</span><br />
              Shop
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto"
              style={{ color: '#6b6458' }}
            >
              Fresh bread from 7&thinsp;AM. Real cheese. Seasonal produce
              direct from British farms. And the people who know exactly
              where it all comes from.
            </p>

            {/* Hand-drawn-style divider */}
            <div className="flex items-center gap-4 justify-center mb-10">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #b87333)' }} />
              <span className="text-xl" style={{ color: '#b87333' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #b87333)' }} />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#collect"
                className="px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-100"
                style={{ backgroundColor: '#2d5016', boxShadow: '0 4px 16px rgba(45,80,22,0.3)' }}
              >
                Order Now &mdash; Click &amp; Collect
              </a>
              <a
                href="#specials"
                className="px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.03] active:scale-100 border-2"
                style={{ borderColor: '#2d5016', color: '#2d5016', backgroundColor: 'transparent' }}
              >
                Today&apos;s Specials
              </a>
            </div>

            {/* Trust micro-line */}
            <p className="text-xs mt-8" style={{ color: '#a09070' }}>
              4.9&thinsp;★ on Google &ensp;&middot;&ensp; 2,847 orders this month &ensp;&middot;&ensp; Same-day collection
            </p>
          </div>
        </div>

        <style>{`
          @keyframes floatIcon {
            0%, 100% { transform: translateY(0px) rotate(-4deg); }
            50% { transform: translateY(-16px) rotate(4deg); }
          }
        `}</style>
      </section>

      {/* Social proof bar */}
      <div className="border-b" style={{ backgroundColor: '#fff', borderColor: '#ddd8cf' }}>
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>2,847</p>
            <p className="text-xs text-[#6b6458]">orders this month</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>4.9★</p>
            <p className="text-xs text-[#6b6458]">on Google (312 reviews)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>7 AM</p>
            <p className="text-xs text-[#6b6458]">fresh bread daily</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>Same day</p>
            <p className="text-xs text-[#6b6458]">click & collect available</p>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="py-6 px-6" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          <TrustBadge icon="🚲" label="Free Delivery" sublabel="On orders over £30" />
          <TrustBadge icon="✅" label="Click & Collect" sublabel="Ready in 1 hour" />
          <TrustBadge icon="🌱" label="British Produce" sublabel="Direct from farms" />
          <TrustBadge icon="💬" label="Order by WhatsApp" sublabel="Reply in minutes" />
        </div>
      </div>

      {/* Today's Specials */}
      <section id="specials" className="py-16 px-6" style={{ backgroundColor: '#f3f0eb' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: '#e8f0e0', color: '#2d5016' }}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                Updated Today
              </div>
              <h2 className="text-3xl font-bold text-[#1c1a17]">Today&apos;s Specials</h2>
              <p className="text-[#6b6458] mt-1">Fresh arrivals and limited daily selections. Order before they&apos;re gone.</p>
            </div>
            <a href="#collect" className="hidden md:block text-sm font-bold" style={{ color: '#2d5016' }}>
              Order Now →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {todaysSpecials.map(item => (
              <SpecialCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg text-sm text-center" style={{ backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffc107' }}>
            <strong>Sourdough selling fast</strong> — 6 loaves remaining this morning. Reserve yours via WhatsApp or Click & Collect below.
          </div>
        </div>
      </section>

      {/* Click & Collect Booking — early, friction-free */}
      <section id="collect" className="py-20 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#e8f0e0', color: '#2d5016' }}>
                Zero friction
              </div>
              <h2 className="text-4xl font-bold text-[#1c1a17] mb-4">Click & Collect</h2>
              <p className="text-[#6b6458] text-base leading-relaxed mb-8">
                Order online, pick up in-store at your chosen time. No queuing. Your bag will be packed,
                labelled and waiting at the counter. Available same-day on orders placed before noon.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { step: '1', label: 'Choose your items', sub: 'From our full range or today\'s specials' },
                  { step: '2', label: 'Pick a collection time', sub: 'Same-day slots available until 12:00' },
                  { step: '3', label: 'We pack everything', sub: 'Ready in under 60 minutes' },
                  { step: '4', label: 'Collect — no waiting', sub: 'Your bag is at the counter with your name' },
                ].map(({ step, label, sub }) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: '#2d5016' }}>
                      {step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1c1a17] text-sm">{label}</p>
                      <p className="text-xs text-[#6b6458]">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="px-3 py-2 rounded-lg text-xs font-semibold" style={{ backgroundColor: '#e8f0e0', color: '#2d5016' }}>
                  Mon–Fri: 7 AM – 7 PM
                </div>
                <div className="px-3 py-2 rounded-lg text-xs font-semibold" style={{ backgroundColor: '#e8f0e0', color: '#2d5016' }}>
                  Saturday: 7 AM – 6 PM
                </div>
                <div className="px-3 py-2 rounded-lg text-xs font-semibold" style={{ backgroundColor: '#e8f0e0', color: '#2d5016' }}>
                  Sunday: 9 AM – 4 PM
                </div>
              </div>
            </div>
            <div>
              <BookingWidget
                locale="en"
                slots={bookingSlots}
                showGuestCount={false}
                socialProof={{ count: 2847, label: 'orders collected this month' }}
                vertical="shopos-local"
                accentColor="#2d5016"
                onSubmit={async (data) => {
                  await new Promise(r => setTimeout(r, 800))
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-16 px-6" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1c1a17] mb-2">Browse by Category</h2>
            <p className="text-[#6b6458]">Over 200 lines, sourced directly from British and European producers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map(cat => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#collect" className="inline-block px-8 py-3 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: '#2d5016' }}>
              Order Now — Click & Collect
            </a>
          </div>
        </div>
      </section>

      {/* Inline Reviews */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f3f0eb' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1c1a17] mb-1">What our regulars say</h2>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5" fill="#2d5016" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#1c1a17]">4.9</span>
                <span className="text-sm text-[#6b6458]">312 reviews on Google</span>
              </div>
            </div>
            <a href="https://g.co/reviews" target="_blank" rel="noopener noreferrer" className="hidden md:block text-sm font-bold" style={{ color: '#2d5016' }}>
              See all on Google →
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {inlineReviews.map((review, i) => (
              <InlineReview key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1c1a17] mb-2">From the shop floor</h2>
          <p className="text-[#6b6458] mb-8 text-sm">Follow us @cornerstorenotting for daily arrivals and seasonal specials.</p>
        </div>
        <Gallery images={galleryImages} locale="en" columns={3} />
      </section>

      {/* Second Click & Collect CTA */}
      <div className="py-8 px-6" style={{ backgroundColor: '#2d5016' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-xl font-bold text-white mb-1">Ready to order?</p>
            <p className="text-sm text-green-200">Same-day collection available — order before 12:00</p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#collect" className="px-8 py-3 rounded-lg font-bold text-sm text-[#2d5016] bg-white transition-opacity hover:opacity-90">
              Book Click & Collect
            </a>
            <a href="https://wa.me/442072293841?text=Hi, I would like to place an order at The Corner Store" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg font-bold text-sm text-white border border-white hover:bg-white hover:text-[#2d5016] transition-colors">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section id="about" className="py-20 px-6" style={{ backgroundColor: '#faf8f5' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800"
              alt="Tom and the team at The Corner Store"
              className="w-full rounded-xl object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#2d5016' }}>Est. 2016</p>
            <h2 className="text-4xl font-bold text-[#1c1a17] mb-6 leading-tight">A proper neighbourhood shop</h2>
            <p className="text-[#6b6458] leading-relaxed mb-5">
              Tom and Sarah opened The Corner Store in 2016 with one ambition: to be the shop that Notting Hill was missing.
              Somewhere you could buy exceptional bread, a serious cheese, a bottle of natural wine, and a bunch of farm
              flowers — all within 200 square feet and five minutes&apos; walk from home.
            </p>
            <p className="text-[#6b6458] leading-relaxed mb-8">
              Every supplier is visited in person before they reach our shelves. We do not stock anything that has to
              travel more than 200 miles to reach us, with a handful of European exceptions made because nothing
              British quite compares.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t pt-6" style={{ borderColor: '#ddd8cf' }}>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>8</p>
                <p className="text-xs text-[#6b6458]">years serving Notting Hill</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>47</p>
                <p className="text-xs text-[#6b6458]">direct supplier relationships</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#2d5016' }}>200+</p>
                <p className="text-xs text-[#6b6458]">products on the shelves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-6" style={{ backgroundColor: '#f3f0eb' }}>
        <FAQAccordion items={faqs} verticalName="ShopOS — Local" locale="en" />
      </section>

      {/* Footer */}
      <div style={{ backgroundColor: '#1c1a17' }}>
        <Footer config={siteConfig} locale="en" />
      </div>

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442072293841"
        message="Hi! I would like to place an order or ask about today's specials at The Corner Store."
        vertical="shopos-local"
      />
    </div>
  )
}
