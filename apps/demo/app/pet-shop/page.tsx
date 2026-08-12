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
  white: '#ffffff',
  offWhite: '#fafafa',
  sky: '#f0f9ff',
  orange: '#f97316',
  orangeLight: '#fb923c',
  orangeDim: '#f9731622',
  blue: '#38bdf8',
  blueDim: '#38bdf822',
  green: '#22c55e',
  greenDim: '#22c55e22',
  charcoal: '#1f2937',
  charcoalMid: '#374151',
  gray: '#6b7280',
  lightBorder: '#e5e7eb',
} as const

const S = {
  pageBg: { backgroundColor: C.white, color: C.charcoal } as React.CSSProperties,
  sectionWhite: { backgroundColor: C.white } as React.CSSProperties,
  sectionOff: { backgroundColor: C.offWhite } as React.CSSProperties,
  sectionSky: { backgroundColor: C.sky } as React.CSSProperties,
  sectionDark: { backgroundColor: C.charcoal } as React.CSSProperties,
  orange: { color: C.orange } as React.CSSProperties,
  blue: { color: C.blue } as React.CSSProperties,
  green: { color: C.green } as React.CSSProperties,
  charcoal: { color: C.charcoal } as React.CSSProperties,
  gray: { color: C.gray } as React.CSSProperties,
  white: { color: C.white } as React.CSSProperties,
}

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Paws & Claws Pet Shop',
  description: 'Everything your pet needs, under one roof',
  url: 'https://pawsandclaws.example.com',
  locale: 'en',
  vertical: 'petshopos',
  theme: 'playful',
  branding: { primaryColor: C.charcoal, accentColor: C.orange },
  contact: {
    phone: '+44 20 8765 4321',
    email: 'hello@pawsandclaws.com',
    whatsapp: '+442087654321',
    address: '45 High Street, Wimbledon, London SW19 5AU',
    coordinates: { lat: 51.4214, lng: -0.2069 },
  },
  social: {
    instagram: 'pawsandclawsuk',
    facebook: 'https://facebook.com/pawsandclawsuk',
  },
  seo: {
    title: 'Paws & Claws Pet Shop — Everything Your Pet Needs',
    description: 'Your one-stop pet shop for food, accessories, grooming, and expert advice.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const reviews: Review[] = [
  { id: '1', author: 'Emma J.', rating: 5, text: 'Best pet shop in London! They stock my cat\'s specialist kidney diet that no other shop carries, and the staff actually know what they\'re talking about. Rocky has never been healthier.', date: '2026-07-12', source: 'google', verified: true },
  { id: '2', author: 'Tom B.', rating: 5, text: 'Brought my golden retriever for his first groom — the groomers were patient, gentle, and did an incredible job. He was calm the whole time. We\'re now regulars.', date: '2026-07-20', source: 'google', verified: true },
  { id: '3', author: 'Yuki P.', rating: 5, text: 'The puppy training classes here are fantastic. My Shiba Inu was a nightmare on the lead — after 8 weeks she\'s transformed. The trainer is amazing with reactive dogs.', date: '2026-07-28', source: 'trustpilot', verified: true },
  { id: '4', author: 'Sarah H.', rating: 5, text: 'I came in knowing nothing about keeping fish. The aquatics team spent an hour with me setting up my first tank properly. Three months later it\'s thriving. Incredible customer service.', date: '2026-08-02', source: 'google', verified: true },
  { id: '5', author: 'Dave F.', rating: 4, text: 'Great loyalty scheme — the points add up fast and we usually get a free bag of food every couple of months. Nice selection of independent brands you don\'t find in supermarkets.', date: '2026-08-04', source: 'google', verified: true },
]

const faqs: FAQItem[] = [
  { question: 'Do you offer a home delivery service?', answer: 'Yes! We offer same-day delivery within 5 miles of our Wimbledon store for orders over £30, and next-day nationwide delivery via DPD. Subscription delivery is available for food orders with 10% discount.' },
  { question: 'Do I need to book a grooming appointment?', answer: 'Yes, grooming appointments should be booked in advance as our groomers are busy. Book online or call us. We groom all dog breeds and cats. Puppy\'s first groom (under 6 months) receives a 20% introductory discount.' },
  { question: 'What does the Paws Loyalty Programme offer?', answer: 'Earn 1 point per £1 spent in-store or online. 100 points = £5 reward voucher. Gold members (500+ points) get exclusive discounts, early access to sales, and a free birthday treat for their pet every year.' },
  { question: 'Do you stock prescription or veterinary diet food?', answer: 'Yes. We stock a wide range of veterinary diet foods from Hills, Royal Canin, Purina Pro Plan Veterinary, and Eukanuba. A valid veterinary prescription is required for prescription-only diets.' },
  { question: 'Do you offer nutrition advice?', answer: 'Absolutely. Our qualified pet nutrition adviser is in-store Tuesdays and Saturdays, or available for phone consultations. We can help with raw feeding, allergies, weight management, and life-stage nutrition.' },
  { question: 'Can I bring my pet into the shop?', answer: 'Yes — friendly, vaccinated pets on leads are welcome in-store. Dogs must be kept on a lead at all times. Birds and reptiles in secure carriers are welcome. For safety, cats should remain in their carrier.' },
]

const today = new Date().toISOString().split('T')[0]
const mockSlots: BookingSlot[] = [
  { id: '1', date: today, time: '09:00', available: true, spotsLeft: 4 },
  { id: '2', date: today, time: '10:30', available: true, spotsLeft: 3 },
  { id: '3', date: today, time: '13:00', available: true, spotsLeft: 5 },
  { id: '4', date: today, time: '14:30', available: true, spotsLeft: 2 },
  { id: '5', date: today, time: '16:00', available: true, spotsLeft: 4 },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: 'Paws & Claws Pet Shop',
  description: 'Your one-stop pet shop for food, accessories, grooming, and expert advice.',
  url: 'https://pawsandclaws.example.com',
  telephone: '+44 20 8765 4321',
  email: 'hello@pawsandclaws.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '45 High Street',
    addressLocality: 'Wimbledon, London',
    postalCode: 'SW19 5AU',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4214, longitude: -0.2069 },
  openingHours: 'Mo-Sa 09:00-18:00 Su 10:00-16:00',
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
// PAW PRINT PATTERN
// ─────────────────────────────────────────────
function PawPattern() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg opacity='0.04' fill='%23f97316'%3E%3Cellipse cx='28' cy='20' rx='6' ry='8'/%3E%3Cellipse cx='52' cy='20' rx='6' ry='8'/%3E%3Cellipse cx='16' cy='34' rx='5' ry='7'/%3E%3Cellipse cx='64' cy='34' rx='5' ry='7'/%3E%3Cellipse cx='40' cy='50' rx='14' ry='18'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }}
    />
  )
}

// ─────────────────────────────────────────────
// BOUNCING BONE
// ─────────────────────────────────────────────
function BouncingBone() {
  return (
    <>
      <style>{`
        @keyframes bone-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-12px) rotate(5deg); }
          75% { transform: translateY(-6px) rotate(-3deg); }
        }
        .bone-anim { animation: bone-bounce 2s ease-in-out infinite; display: inline-block; }
      `}</style>
      <span className="bone-anim text-4xl" role="img" aria-label="bone">🦴</span>
    </>
  )
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.white}f8`,
        backdropFilter: 'blur(12px)',
        borderBottom: `2px solid ${C.orange}22`,
        boxShadow: '0 2px 16px rgba(249,115,22,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl">🐾</span>
          <div>
            <div className="text-sm font-black" style={{ color: C.charcoal }}>Paws & Claws</div>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: C.orange }}>Pet Shop</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {['Shop', 'Services', 'Brands', 'Loyalty'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold tracking-wide uppercase transition-colors duration-300"
              style={{ color: C.gray }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.orange)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.gray)}
            >
              {item}
            </a>
          ))}
          <a
            href="#visit"
            className="px-6 py-2.5 text-xs font-black tracking-wide uppercase rounded-full transition-all duration-300"
            style={{ backgroundColor: C.orange, color: C.white }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.orangeLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.orange)}
          >
            Visit Us 🐾
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PetShopOSDemoPage() {
  return (
    <div style={S.pageBg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <style>{`
        @keyframes pill-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .pet-pill:hover { animation: pill-pop 0.3s ease; }
        .product-card { transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease; }
        .product-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(249,115,22,0.12); }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Fun & Energetic
          ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: C.white, paddingTop: '5rem' }}
      >
        <PawPattern />

        {/* Colour blob accents */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 300, height: 300, borderRadius: '50%', backgroundColor: C.orange, opacity: 0.06, filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 250, height: 250, borderRadius: '50%', backgroundColor: C.blue, opacity: 0.08, filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: 200, height: 200, borderRadius: '50%', backgroundColor: C.green, opacity: 0.06, filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 stagger-children">
          {/* Bone + badge */}
          <div className="reveal-up flex items-center gap-4 mb-8">
            <BouncingBone />
            <span
              className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full"
              style={{ backgroundColor: C.orangeDim, color: C.orange, border: `1px solid ${C.orange}44` }}
            >
              Wimbledon&apos;s Favourite Pet Shop
            </span>
          </div>

          <h1 className="mb-8">
            <span
              className="reveal-clip-up block font-black leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: C.charcoal }}
            >
              Everything
            </span>
            <span
              className="reveal-clip-up block font-black leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: C.orange, animationDelay: '0.1s' }}
            >
              Your Pet
            </span>
            <span
              className="reveal-clip-up block font-black leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: C.charcoal, animationDelay: '0.2s' }}
            >
              Needs 🐾
            </span>
          </h1>

          <p
            className="reveal-up text-lg font-normal leading-relaxed max-w-lg mb-10"
            style={{ color: C.gray, animationDelay: '0.35s' }}
          >
            Food, accessories, grooming, and expert advice for dogs, cats, fish, birds, small pets, and reptiles. All under one roof in Wimbledon.
          </p>

          {/* Pet category pills */}
          <div className="reveal-up flex flex-wrap gap-3 mb-12" style={{ animationDelay: '0.45s' }}>
            {[
              { emoji: '🐶', label: 'Dogs' },
              { emoji: '🐱', label: 'Cats' },
              { emoji: '🐠', label: 'Fish' },
              { emoji: '🐹', label: 'Small Pets' },
              { emoji: '🦜', label: 'Birds' },
              { emoji: '🦎', label: 'Reptiles' },
            ].map((pet) => (
              <a
                key={pet.label}
                href="#shop"
                className="pet-pill flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm cursor-pointer transition-colors duration-300"
                style={{
                  backgroundColor: C.offWhite,
                  border: `2px solid ${C.lightBorder}`,
                  color: C.charcoal,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.orange
                  e.currentTarget.style.borderColor = C.orange
                  e.currentTarget.style.color = C.white
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.offWhite
                  e.currentTarget.style.borderColor = C.lightBorder
                  e.currentTarget.style.color = C.charcoal
                }}
              >
                <span>{pet.emoji}</span>
                <span>{pet.label}</span>
              </a>
            ))}
          </div>

          <div className="reveal-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <a
              href="#shop"
              className="px-8 py-4 text-sm font-black tracking-wide uppercase rounded-full transition-all duration-300"
              style={{ backgroundColor: C.orange, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.orangeLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.orange)}
            >
              Shop Now &rarr;
            </a>
            <a
              href="#visit"
              className="px-8 py-4 text-sm font-bold tracking-wide uppercase rounded-full border-2 transition-all duration-300"
              style={{ borderColor: C.charcoal, color: C.charcoal }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.charcoal
                e.currentTarget.style.color = C.white
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = C.charcoal
              }}
            >
              Book Grooming
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <section
        className="py-4 overflow-hidden"
        style={{ backgroundColor: C.charcoal }}
      >
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 px-4">
              {['🐶 Dogs', '🐱 Cats', '🐠 Fish', '🦜 Birds', '🐹 Small Pets', '🦎 Reptiles', '✂️ Grooming', '🎒 Accessories', '💊 Healthcare', '🥩 Raw Food'].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="text-sm font-semibold tracking-wide" style={{ color: C.white }}>{item}</span>
                  <span style={{ color: `${C.orange}66` }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SHOP BY PET
          ═══════════════════════════════════════ */}
      <section id="shop" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionOff}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3 font-bold" style={S.orange}>Browse by Pet</p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>Shop for Your Pet</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
            {[
              { emoji: '🐶', name: 'Dogs', count: '1,200+ products', bg: '#fff7ed' },
              { emoji: '🐱', name: 'Cats', count: '850+ products', bg: '#f0f9ff' },
              { emoji: '🐠', name: 'Fish & Aquatics', count: '600+ products', bg: '#f0fdf4' },
              { emoji: '🐹', name: 'Small Pets', count: '400+ products', bg: '#fff7ed' },
              { emoji: '🦜', name: 'Birds', count: '250+ products', bg: '#f0f9ff' },
              { emoji: '🦎', name: 'Reptiles', count: '180+ products', bg: '#f0fdf4' },
            ].map((cat, i) => (
              <div
                key={cat.name}
                className="reveal-up rounded-2xl p-6 text-center cursor-pointer group transition-all duration-300"
                style={{
                  backgroundColor: cat.bg,
                  border: `2px solid transparent`,
                  animationDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.orange
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 12px 32px ${C.orangeDim}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="text-5xl mb-3">{cat.emoji}</div>
                <h3 className="text-sm font-black mb-1" style={S.charcoal}>{cat.name}</h3>
                <p className="text-xs" style={S.gray}>{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PRODUCTS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16 reveal-up">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2 font-bold" style={S.orange}>Staff Picks</p>
              <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>Featured Products</h2>
            </div>
            <a href="#shop" className="text-sm font-bold hidden md:block" style={S.orange}>View all &rarr;</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 stagger-children">
            {[
              { name: 'Orijen Original Dog Food', weight: '2kg', price: '£24.99', img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop', badge: 'Best Seller', emoji: '🐶' },
              { name: 'Royal Canin Kitten Mousse', weight: '12 × 85g', price: '£14.99', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop', badge: 'New In', emoji: '🐱' },
              { name: 'KONG Classic Dog Toy', weight: 'Medium', price: '£12.99', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop', badge: null, emoji: '🐶' },
              { name: 'Aqua One Fish Tank 64L', weight: 'Complete Kit', price: '£89.99', img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop', badge: 'Sale', emoji: '🐠' },
              { name: 'Burgess Excel Rabbit Food', weight: '1.5kg', price: '£8.99', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop', badge: null, emoji: '🐹' },
              { name: 'Kaytee Bird Seed Mix', weight: '1kg', price: '£6.99', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=400&fit=crop', badge: null, emoji: '🦜' },
              { name: 'Reptile UV-B Bulb 100W', weight: 'T8 Tube', price: '£19.99', img: 'https://images.unsplash.com/photo-1591840476730-8a54ba43f5cf?w=400&h=400&fit=crop', badge: null, emoji: '🦎' },
              { name: 'Wainwright\'s Grain-Free', weight: '400g', price: '£3.49', img: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=400&h=400&fit=crop', badge: 'Staff Pick', emoji: '🐶' },
            ].map((product, i) => (
              <div
                key={product.name}
                className="product-card reveal-up rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: C.offWhite,
                  border: `1px solid ${C.lightBorder}`,
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                <div className="relative h-44 overflow-hidden bg-white">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: product.badge === 'Sale' ? C.orange : product.badge === 'New In' ? C.blue : C.green,
                        color: C.white,
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 text-lg">{product.emoji}</span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold mb-0.5" style={S.gray}>{product.weight}</p>
                  <h4 className="text-sm font-bold mb-2 leading-snug" style={S.charcoal}>{product.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-black" style={S.orange}>{product.price}</span>
                    <button
                      className="text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{ backgroundColor: C.orangeDim, color: C.orange }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = C.orange
                        e.currentTarget.style.color = C.white
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = C.orangeDim
                        e.currentTarget.style.color = C.orange
                      }}
                    >
                      + Add
                    </button>
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
      <section id="services" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionSky}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3 font-bold" style={S.blue}>In-Store Services</p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>More Than a Shop</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {[
              { emoji: '✂️', title: 'Dog Grooming', price: 'from £35', desc: 'Bath, brush, blow-dry, trim, and nail clip. All breeds welcome. Puppy\'s first groom at 20% off.', col: C.orange },
              { emoji: '🎓', title: 'Puppy Training', price: '£85 / course', desc: '8-week group classes covering basic commands, lead manners, and socialisation. Limited spaces.', col: C.blue },
              { emoji: '🥗', title: 'Nutrition Advice', price: 'Free', desc: 'One-to-one with our qualified nutrition adviser. Raw feeding, allergies, weight management.', col: C.green },
              { emoji: '🛡', title: 'Pet Insurance', price: 'from £8/mo', desc: 'We partner with Petplan and Animal Friends. Get quotes and cover in-store, same day.', col: C.orange },
            ].map((service, i) => (
              <div
                key={service.title}
                className="reveal-up rounded-2xl p-8 text-center group cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: C.white,
                  border: `2px solid transparent`,
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.col
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.06)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="text-4xl mb-5">{service.emoji}</div>
                <h3 className="text-lg font-black mb-2" style={S.charcoal}>{service.title}</h3>
                <p className="text-sm font-bold mb-3" style={{ color: service.col }}>{service.price}</p>
                <p className="text-sm leading-relaxed" style={S.gray}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOYALTY PROGRAMME
          ═══════════════════════════════════════ */}
      <section id="loyalty" className="py-24 md:py-32 px-6 md:px-16 grain" style={S.sectionDark}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-up mb-12">
            <div className="text-5xl mb-6">⭐</div>
            <p className="text-xs tracking-widest uppercase mb-4 font-bold" style={S.orange}>Paws Loyalty Programme</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={S.white}>Rewards for Every Purchase</h2>
            <p className="text-base font-light leading-relaxed max-w-xl mx-auto" style={{ color: `${C.white}77` }}>
              Earn points every time you shop. Redeem for discounts, free treats, and exclusive perks. Because your loyalty deserves a reward — and so does your pet.
            </p>
          </div>

          <div className="reveal-up grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tier: '🐾 Standard', rule: '1 point per £1 spent', perk: '100pts = £5 voucher', desc: 'Automatic from first purchase' },
              { tier: '⭐ Gold', rule: '500+ lifetime points', perk: 'Exclusive discounts + early sale access', desc: 'Birthday treat for your pet every year' },
              { tier: '💎 Platinum', rule: '2,000+ lifetime points', perk: 'Priority grooming booking', desc: 'Free annual nutrition consultation' },
            ].map((tier) => (
              <div
                key={tier.tier}
                className="rounded-2xl p-7"
                style={{ backgroundColor: C.charcoalMid, border: `1px solid ${C.orange}33` }}
              >
                <div className="text-2xl mb-3">{tier.tier}</div>
                <div className="text-sm font-bold mb-2" style={S.orange}>{tier.rule}</div>
                <div className="text-sm font-semibold mb-3" style={S.white}>{tier.perk}</div>
                <div className="text-xs" style={{ color: `${C.white}66` }}>{tier.desc}</div>
              </div>
            ))}
          </div>

          <div className="reveal-up mt-10">
            <a
              href="#"
              className="inline-block px-10 py-4 text-sm font-black tracking-wide uppercase rounded-full transition-all duration-300"
              style={{ backgroundColor: C.orange, color: C.white }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.orangeLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.orange)}
            >
              Join Free Today
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 reveal-up">
          <p className="text-xs tracking-widest uppercase mb-3 font-bold" style={S.orange}>Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>Happy Pets,<br />Happy Owners 🐾</h2>
        </div>
        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <ReviewCarousel reviews={reviews} locale="en" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={S.sectionOff}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs tracking-widest uppercase mb-3 font-bold" style={S.orange}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black" style={S.charcoal}>Questions? We&#39;ve Got Answers!</h2>
          </div>
          <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion items={faqs} verticalName="PetShopOS" locale="en" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VISIT / BOOKING
          ═══════════════════════════════════════ */}
      <section id="visit" className="py-24 md:py-32 px-6 md:px-16" style={S.sectionWhite}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal-left">
            <p className="text-xs tracking-widest uppercase mb-3 font-bold" style={S.orange}>Visit Us</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={S.charcoal}>
              Come In &<br />Meet the Team 🐾
            </h2>
            <p className="text-base leading-relaxed mb-10" style={S.gray}>
              We love meeting pets! Bring your dog, pop in with questions, or book a grooming session. Our friendly team is always happy to help.
            </p>
            <div className="space-y-5">
              {[
                { label: 'Address', value: '45 High Street, Wimbledon, London SW19 5AU' },
                { label: 'Phone', value: '+44 20 8765 4321' },
                { label: 'Email', value: 'hello@pawsandclaws.com' },
                { label: 'Opening Hours', value: 'Mon–Sat 09:00–18:00 · Sun 10:00–16:00' },
              ].map((info) => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-1 min-h-[32px] rounded-full flex-shrink-0" style={{ backgroundColor: `${C.orange}55` }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-0.5 font-bold" style={S.orange}>{info.label}</p>
                    <p className="text-sm" style={S.charcoal}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 34, label: 'grooming appointments booked this week' }}
              vertical="petshopos"
              onSubmit={async () => { await new Promise((r) => setTimeout(r, 800)) }}
            />
          </div>
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442087654321" message="Hi! I'd like to find out more from Paws & Claws." vertical="petshopos" />
    </div>
  )
}
