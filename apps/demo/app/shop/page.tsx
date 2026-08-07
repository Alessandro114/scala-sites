'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { Gallery } from '@scala-sites/core/components/gallery'

// ─── Theme ────────────────────────────────────────────────────────────────────

const theme = createCustomTheme('bold', {
  primary: '#c8956c',
  primaryHover: '#b5815a',
  accent: '#c8956c',
  background: '#0a0a0a',
  surface: '#111111',
  secondary: '#1a1a1a',
  text: '#f5f0eb',
  textMuted: '#8a8078',
  border: '#222222',
  success: '#4a7c59',
  warning: '#c8956c',
  error: '#c0392b',
})

// ─── Mock data ─────────────────────────────────────────────────────────────────

const featuredProducts = [
  {
    id: '1',
    name: 'Le Manteau Noir',
    category: 'Outerwear',
    description: 'Oversized double-faced cashmere coat. Dry-clean only. Made in Italy.',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900',
    tag: 'New Season',
  },
  {
    id: '2',
    name: 'Silk Bias Slip',
    category: 'Ready-to-Wear',
    description: 'Pure silk charmeuse, bias-cut for a fluid silhouette. Available in ivory and midnight.',
    price: 620,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900',
    tag: 'Bestseller',
  },
  {
    id: '3',
    name: 'The Market Tote',
    category: 'Accessories',
    description: 'Hand-stitched full-grain leather tote. Unlined interior, single interior slip pocket.',
    price: 485,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900',
    tag: 'Limited',
  },
]

const products = [
  {
    id: '1',
    name: 'Pleated Wide-Leg Trouser',
    category: 'Ready-to-Wear',
    price: 395,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4df5?w=600',
  },
  {
    id: '2',
    name: 'Ribbed Merino Polo',
    category: 'Knitwear',
    price: 265,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600',
  },
  {
    id: '3',
    name: 'Sculptural Hoop Earrings',
    category: 'Jewellery',
    price: 195,
    originalPrice: 245,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
  },
  {
    id: '4',
    name: 'Linen Shirt Dress',
    category: 'Ready-to-Wear',
    price: 345,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600',
  },
  {
    id: '5',
    name: 'Suede Ankle Boot',
    category: 'Footwear',
    price: 520,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
  },
  {
    id: '6',
    name: 'Waffle-Knit Throw',
    category: 'Homeware',
    price: 185,
    originalPrice: 225,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600',
  },
  {
    id: '7',
    name: 'Structured Blazer',
    category: 'Outerwear',
    price: 695,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
  },
  {
    id: '8',
    name: 'Ceramic Bud Vase Set',
    category: 'Homeware',
    price: 98,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b0?w=600',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800', alt: 'Editorial — autumn layering', category: 'Editorial', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800', alt: 'Campaign — silk collection', category: 'Campaign', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Accessories detail', category: 'Accessories', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800', alt: 'Editorial — winter coats', category: 'Editorial', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800', alt: 'Campaign — ready-to-wear', category: 'Campaign', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800', alt: 'Store interior', category: 'Store', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800', alt: 'Knitwear detail', category: 'Editorial', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=800', alt: 'Homeware collection', category: 'Store', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800', alt: 'Campaign — accessories', category: 'Accessories', width: 600, height: 400 },
]

const reviews = [
  {
    id: '1',
    author: 'Arabella F.',
    rating: 5,
    text: 'MAISON is the only place in London I trust completely. The Silk Bias Slip arrived in two days, wrapped beautifully, and fits like a dream. Their eye is impeccable.',
    date: '2026-07-18',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Charlotte W.',
    rating: 5,
    text: 'I bought the cashmere coat and it has become my most-complimented piece. The quality is extraordinary for the price. The team on Marylebone High Street are genuinely knowledgeable — not just sales.',
    date: '2026-07-03',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '3',
    author: 'James & Harriet M.',
    rating: 5,
    text: 'We used the personal styling service for a week of events — they hit every brief perfectly. Felt like having a fashion director on call. Will not shop any other way now.',
    date: '2026-06-21',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Natasha O.',
    rating: 5,
    text: 'Found them through a friend and immediately understood the hype. Beautifully curated, never over-stocked, always something I have not seen elsewhere. The leather tote is now my everyday bag.',
    date: '2026-06-09',
    source: 'Instagram',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What are your delivery and returns policies?',
    answer:
      'We offer complimentary next-day delivery on all UK orders placed before 1:00 PM, and express international shipping to 40+ countries. Returns are accepted within 28 days for unworn items with tags intact. Simply contact us and we will arrange a pre-paid courier collection from your address. Bespoke orders and monogrammed pieces are non-returnable.',
  },
  {
    question: 'Do you offer personal styling appointments?',
    answer:
      'Yes — our personal styling service is complimentary for purchases above £500. Sessions are held in-store at our Marylebone boutique and typically run 60 to 90 minutes. We curate a selection in advance based on your lifestyle brief and size profile. You can book below or message us on WhatsApp. Evening appointments are available by arrangement.',
  },
  {
    question: 'How do I find my size?',
    answer:
      'Each product page includes a detailed size guide with actual garment measurements. Our team can also advise via WhatsApp — share your usual brand sizes and we will recommend. We hold size 6 through 18 in most ready-to-wear and can source additional sizes on request for regular clients. Alterations can be arranged through our preferred atelier, typically 5 to 7 working days.',
  },
  {
    question: 'Do you offer gift wrapping and personal messages?',
    answer:
      'All MAISON orders are wrapped in our signature tissue and sealed with a wax stamp — no extra charge. For gifts, add a handwritten personal note at checkout (up to 80 words). Gift boxes with ribbon are available for £12. We also offer a discreet "gift" shipping option where no pricing is included in the parcel.',
  },
  {
    question: 'Can I visit the boutique to view pieces before purchasing?',
    answer:
      'Absolutely — we welcome walk-ins during opening hours (Mon–Sat 10:00–18:30, Sun 11:00–17:00). For a relaxed, private experience, we recommend booking a styling appointment so we can prepare your visit and hold the changing room. Our Marylebone High Street location has parking nearby and is two minutes from Baker Street Underground.',
  },
  {
    question: 'Do you carry homeware and lifestyle items year-round?',
    answer:
      'Our homeware edit is a permanent part of the collection — ceramics, throws, candles and table pieces sourced from British and European makers. The selection rotates with the seasons but we maintain a core range throughout the year. Homeware is available online and in-store and makes up roughly a fifth of our floor space.',
  },
]

const siteConfig = {
  name: 'MAISON',
  tagline: '14 Marylebone High Street, London W1U 4QU',
  phone: '+44 20 7935 4820',
  email: 'hello@maisonlondon.co.uk',
  address: '14 Marylebone High Street, London W1U 4QU',
  social: { instagram: '#', facebook: '#' },
}

const bookingSlots = [
  { id: '1', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '10:00', available: true },
  { id: '2', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '11:30', available: true },
  { id: '3', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '14:00', available: true },
  { id: '4', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '15:30', available: true, spotsLeft: 1 },
  { id: '5', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '10:00', available: true },
  { id: '6', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '12:00', available: true },
  { id: '7', date: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0], time: '14:30', available: true },
  { id: '8', date: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0], time: '11:00', available: true },
  { id: '9', date: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0], time: '16:00', available: true },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: typeof products[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#111] aspect-[3/4] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-[#c8956c] text-white text-xs font-semibold px-2 py-1 tracking-widest uppercase">
            Sale
          </span>
        )}
        <div
          className={`absolute inset-0 flex items-end p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}
        >
          <button
            style={{ backgroundColor: '#c8956c' }}
            className="w-full py-3 text-white text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Quick View
          </button>
        </div>
      </div>
      <p className="text-xs text-[#8a8078] tracking-widest uppercase mb-1">{product.category}</p>
      <h3 className="text-sm font-semibold text-[#f5f0eb] mb-1">{product.name}</h3>
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-[#c8956c]">£{product.price.toLocaleString('en-GB')}</span>
        {product.originalPrice && (
          <span className="text-sm text-[#8a8078] line-through">£{product.originalPrice.toLocaleString('en-GB')}</span>
        )}
      </div>
    </div>
  )
}

function FeaturedProductCard({ product, reversed }: { product: typeof featuredProducts[0]; reversed?: boolean }) {
  return (
    <div className={`grid md:grid-cols-2 gap-0 min-h-[600px] ${reversed ? 'direction-rtl' : ''}`}>
      <div className={`relative overflow-hidden ${reversed ? 'order-2' : 'order-1'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full min-h-[400px] object-cover"
        />
        <span
          style={{ backgroundColor: '#c8956c' }}
          className="absolute top-6 left-6 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5"
        >
          {product.tag}
        </span>
      </div>
      <div
        className={`flex flex-col justify-center px-12 py-16 bg-[#111] ${reversed ? 'order-1' : 'order-2'}`}
      >
        <p className="text-xs text-[#c8956c] tracking-[0.3em] uppercase mb-4">{product.category}</p>
        <h3 className="text-4xl md:text-5xl font-bold text-[#f5f0eb] mb-6 leading-tight">{product.name}</h3>
        <p className="text-[#8a8078] text-base leading-relaxed mb-8">{product.description}</p>
        <p className="text-3xl font-bold text-[#c8956c] mb-8">
          £{product.price.toLocaleString('en-GB')}
        </p>
        <div className="flex gap-4">
          <button
            style={{ backgroundColor: '#c8956c' }}
            className="px-8 py-4 text-white text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Shop Now
          </button>
          <button className="px-8 py-4 border border-[#333] text-[#f5f0eb] text-sm font-bold tracking-widest uppercase hover:border-[#c8956c] hover:text-[#c8956c] transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShopPage() {
  return (
    <div style={{ ...themeToStyleObject(theme) as React.CSSProperties, backgroundColor: '#0a0a0a', color: '#f5f0eb', fontFamily: '"Inter", system-ui, sans-serif' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1a1a1a' }}>
        <div className="flex gap-8 text-xs tracking-widest uppercase text-[#8a8078]">
          <a href="#collection" className="hover:text-[#c8956c] transition-colors">Collection</a>
          <a href="#shop" className="hover:text-[#c8956c] transition-colors">Shop</a>
          <a href="#story" className="hover:text-[#c8956c] transition-colors">Story</a>
        </div>
        <a href="#" className="text-xl font-bold tracking-[0.25em] text-[#f5f0eb] uppercase">Maison</a>
        <div className="flex gap-8 text-xs tracking-widest uppercase text-[#8a8078]">
          <a href="#styling" className="hover:text-[#c8956c] transition-colors">Styling</a>
          <a href="#gallery" className="hover:text-[#c8956c] transition-colors">Journal</a>
          <a href="tel:+442079354820" className="hover:text-[#c8956c] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero — full viewport, editorial */}
      <div className="pt-0">
        <Hero
          title="Curated Fashion &amp; Lifestyle"
          subtitle="Marylebone, London — A considered edit of clothing, accessories and homeware. Nothing excess. Everything essential."
          backgroundImage="https://images.unsplash.com/photo-1558171813-bb6a4bccaae1?w=1800"
          ctaPrimary={{ label: 'Explore the Collection', href: '#collection' }}
          ctaSecondary={{ label: 'Book a Styling Session', href: '#styling' }}
          overlayOpacity={0.55}
          textAlign="left"
          height="full"
        />
      </div>

      {/* Editorial banner */}
      <div className="py-6 overflow-hidden" style={{ backgroundColor: '#111' }}>
        <div className="flex gap-16 text-xs tracking-[0.3em] uppercase text-[#8a8078] whitespace-nowrap animate-marquee px-8">
          {['New Season — Autumn/Winter 2026', 'Complimentary Next-Day Delivery', 'Personal Styling Appointments', 'Returns Within 28 Days', 'Made in Italy & Europe', 'Open Mon–Sat 10:00–18:30'].map((item, i) => (
            <span key={i} className="flex-shrink-0">{item} <span className="mx-4 text-[#c8956c]">—</span></span>
          ))}
        </div>
      </div>

      {/* Featured Collection */}
      <section id="collection" className="pt-24 pb-12">
        <div className="text-center mb-16 px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c8956c] mb-3">Featured Collection</p>
          <h2 className="text-5xl md:text-6xl font-bold text-[#f5f0eb] leading-tight">Autumn / Winter 2026</h2>
        </div>
        <div className="flex flex-col gap-0">
          {featuredProducts.map((product, i) => (
            <FeaturedProductCard key={product.id} product={product} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section id="shop" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[#c8956c] mb-2">The Edit</p>
              <h2 className="text-4xl font-bold text-[#f5f0eb]">Shop All</h2>
            </div>
            <p className="text-sm text-[#8a8078]">{products.length} pieces</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="px-12 py-4 border border-[#333] text-sm font-bold tracking-widest uppercase text-[#f5f0eb] hover:border-[#c8956c] hover:text-[#c8956c] transition-colors">
              View All Pieces
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-24 px-6" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c8956c] mb-4">Our Story</p>
            <h2 className="text-5xl font-bold text-[#f5f0eb] mb-8 leading-tight">Less, but better.</h2>
            <p className="text-[#8a8078] leading-relaxed mb-6 text-lg">
              MAISON opened on Marylebone High Street in 2019 with a single conviction: that a well-edited wardrobe of
              considered pieces outlasts any trend. We work directly with small producers in Italy, Portugal and the UK
              — people who make things slowly, with materials that age rather than expire.
            </p>
            <p className="text-[#8a8078] leading-relaxed mb-8 text-lg">
              Our homeware section arrived in 2022, a natural extension of the same philosophy. Everything we carry
              is something we would live with ourselves. Nothing reaches the floor unless it passes a year of use.
            </p>
            <a href="#styling" style={{ color: '#c8956c' }} className="text-sm font-bold tracking-widest uppercase border-b border-current pb-1 hover:opacity-70 transition-opacity">
              Book a Styling Appointment &rarr;
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" alt="MAISON store" className="w-full aspect-[3/4] object-cover" />
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600" alt="MAISON detail" className="w-full aspect-[3/4] object-cover mt-12" />
          </div>
        </div>
      </section>

      {/* Personal Styling Booking */}
      <section id="styling" className="py-24 px-6" style={{ backgroundColor: '#111' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-[#c8956c] mb-3">Complimentary</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0eb] mb-4">Personal Styling Service</h2>
            <p className="text-[#8a8078] max-w-xl mx-auto text-base leading-relaxed">
              A private 60–90 minute session in our Marylebone boutique. We prepare a curated selection in advance
              based on your brief. No obligation to purchase. Complimentary for orders above £500.
            </p>
          </div>
          <BookingWidget
            locale="en"
            slots={bookingSlots}
            showGuestCount={false}
            socialProof={{ count: 847, label: 'styling sessions booked this year' }}
            vertical="shopos"
            accentColor="#c8956c"
            onSubmit={async (data) => {
              await new Promise(r => setTimeout(r, 1000))
            }}
          />
        </div>
      </section>

      {/* Gallery — Instagram-style */}
      <section id="gallery" className="py-24 px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c8956c] mb-3">@maisonlondon</p>
          <h2 className="text-4xl font-bold text-[#f5f0eb]">The Journal</h2>
        </div>
        <Gallery
          images={galleryImages}
          locale="en"
          columns={3}
        />
      </section>

      {/* Reviews */}
      <section className="py-8" style={{ backgroundColor: '#0d0d0d' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* FAQ */}
      <section className="py-8" style={{ backgroundColor: '#111' }}>
        <FAQAccordion items={faqs} locale="en" />
      </section>

      {/* Footer */}
      <div style={{ backgroundColor: '#0a0a0a' }}>
        <Footer config={siteConfig} locale="en" />
      </div>

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442079354820"
        message="Hello, I would like to enquire about MAISON — Marylebone."
        vertical="shopos"
      />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
          display: flex;
        }
      `}</style>
    </div>
  )
}
