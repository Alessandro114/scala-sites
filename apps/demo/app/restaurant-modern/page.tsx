'use client'

import { useState } from 'react'
import { themes, themeToStyleObject } from '@scala-sites/themes'
import { VideoHero } from '@scala-sites/core/components/video-hero'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { LoyaltyPrompt } from '@scala-sites/core/components/loyalty-prompt'
import { MenuSection } from '@scala-sites/dineos/components/menu-section'
import { UpsellBanner } from '@scala-sites/dineos/components/upsell-banner'
import type {
  SiteConfig,
  MenuCategory,
  Review,
  GalleryImage,
  FAQItem,
  BookingSlot,
} from '@scala-sites/core/lib/types'

// --- MOCK DATA ---

const siteConfig: SiteConfig = {
  name: 'NORI',
  description: 'Contemporary Japanese — Omakase & Seasonal Kaiseki',
  url: 'https://nori-london.example.com',
  locale: 'en',
  vertical: 'dineos',
  theme: 'bold',
  branding: {
    primaryColor: '#0a0a0a',
    accentColor: '#e8c547',
  },
  contact: {
    phone: '+44 20 7946 0311',
    email: 'reservations@nori-london.com',
    whatsapp: '+442079460311',
    address: '18 Heddon Street, London W1B 4BG',
    coordinates: { lat: 51.5113, lng: -0.1406 },
  },
  social: {
    instagram: 'nori.london',
    facebook: 'https://facebook.com/norilondon',
  },
  seo: {
    title: 'NORI London | Contemporary Japanese Restaurant, Mayfair',
    description:
      'Omakase and seasonal kaiseki in the heart of Mayfair. NORI redefines Japanese fine dining with an emphasis on precision, provenance, and restraint.',
  },
}

const menuCategories: MenuCategory[] = [
  {
    id: 'omakase',
    name: 'Omakase',
    sortOrder: 1,
    items: [
      {
        id: '1',
        name: 'Omakase — 8 Course',
        description:
          'Chef-curated eight-course journey. Seasonal selections change weekly based on market availability and chef inspiration.',
        price: 145,
        currency: 'GBP',
        category: 'omakase',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '2',
        name: 'Omakase — 12 Course',
        description:
          'The full expression. Twelve courses with optional sake pairing. Minimum two guests. Advanced booking required.',
        price: 225,
        currency: 'GBP',
        category: 'omakase',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '3',
        name: 'Vegetable Kaiseki',
        description:
          'A plant-forward kaiseki menu celebrating British and Japanese seasonal vegetables. Eight courses.',
        price: 115,
        currency: 'GBP',
        category: 'omakase',
        tags: ['vegetarian', 'gluten-free'],
        available: true,
      },
    ],
  },
  {
    id: 'small-plates',
    name: 'Small Plates',
    sortOrder: 2,
    items: [
      {
        id: '4',
        name: 'Otoro Nigiri',
        description: 'Bluefin tuna belly from Tsukiji market. Two pieces. Served at body temperature.',
        price: 32,
        currency: 'GBP',
        category: 'small-plates',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '5',
        name: 'Wagyu Tataki',
        description: 'A5 Kagoshima wagyu, lightly seared, ponzu gel, micro shiso, black garlic.',
        price: 38,
        currency: 'GBP',
        category: 'small-plates',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '6',
        name: 'Sea Urchin Toast',
        description: 'Bafun uni from Hokkaido on toasted brioche, cultured butter, nori salt.',
        price: 28,
        currency: 'GBP',
        category: 'small-plates',
        tags: [],
        available: true,
      },
      {
        id: '7',
        name: 'Dashi Chawanmushi',
        description: 'Silken egg custard with snow crab, truffle, and dashi consommé.',
        price: 18,
        currency: 'GBP',
        category: 'small-plates',
        tags: ['gluten-free'],
        available: true,
      },
      {
        id: '8',
        name: 'Edamame with Black Truffle Salt',
        description: 'House-steamed edamame finished with Périgord truffle salt.',
        price: 9,
        currency: 'GBP',
        category: 'small-plates',
        tags: ['vegan', 'gluten-free'],
        available: true,
      },
    ],
  },
  {
    id: 'mains',
    name: 'Main Plates',
    sortOrder: 3,
    items: [
      {
        id: '9',
        name: 'Dry-Aged Duck Breast',
        description:
          'Gressingham duck aged 14 days, miso caramel, pickled daikon, sansho pepper jus.',
        price: 46,
        currency: 'GBP',
        category: 'mains',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '10',
        name: 'Miso Black Cod',
        description:
          'Classic Nobu-inspired black cod, three-day saikyo miso marinade, yuzu kosho.',
        price: 52,
        currency: 'GBP',
        category: 'mains',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '11',
        name: 'Tofu Dengaku',
        description:
          'House-pressed silken tofu, white miso glaze, sesame, pickled ginger, bonito flakes.',
        price: 28,
        currency: 'GBP',
        category: 'mains',
        tags: ['vegetarian'],
        available: true,
      },
      {
        id: '12',
        name: 'Wagyu Sirloin A5',
        description:
          'Kagoshima A5 wagyu, 200g. Served with tare sauce, wasabi, and pickled vegetables.',
        price: 120,
        currency: 'GBP',
        category: 'mains',
        tags: ['gluten-free'],
        available: true,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    sortOrder: 4,
    items: [
      {
        id: '13',
        name: 'Matcha Pavlova',
        description: 'Ceremonial grade matcha meringue, yuzu curd, raspberry, gold leaf.',
        price: 16,
        currency: 'GBP',
        category: 'desserts',
        tags: ['vegetarian', 'gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '14',
        name: 'Black Sesame Panna Cotta',
        description: 'Toasted black sesame cream, sake-poached pear, honeycomb.',
        price: 14,
        currency: 'GBP',
        category: 'desserts',
        tags: ['vegetarian', 'gluten-free'],
        available: true,
      },
      {
        id: '15',
        name: 'Mochi Selection',
        description:
          'Three house-made mochi: strawberry, salted caramel, and hojicha. Served with green tea.',
        price: 12,
        currency: 'GBP',
        category: 'desserts',
        tags: ['vegetarian', 'gluten-free'],
        available: true,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    sortOrder: 5,
    items: [
      {
        id: '16',
        name: 'Sake Pairing — 5 Pours',
        description:
          'Curated by our sake sommelier. Five premium pours matched to your menu progression.',
        price: 75,
        currency: 'GBP',
        category: 'drinks',
        tags: ['gluten-free'],
        available: true,
        featured: true,
      },
      {
        id: '17',
        name: 'Yuzu Highball',
        description: 'Japanese whisky, yuzu juice, sparkling water, dehydrated yuzu wheel.',
        price: 18,
        currency: 'GBP',
        category: 'drinks',
        tags: ['gluten-free'],
        available: true,
      },
      {
        id: '18',
        name: 'Ceremonial Matcha',
        description:
          'Authentic Japanese matcha ceremony. Served hot or over ice. Koicha or usucha.',
        price: 12,
        currency: 'GBP',
        category: 'drinks',
        tags: ['vegan', 'gluten-free'],
        available: true,
      },
    ],
  },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Charlotte W.',
    rating: 5,
    text: 'The 12-course omakase is the finest dining experience I have had in London — and I have eaten at a lot of London restaurants. Every course was precise, intentional, and absolutely beautiful to look at.',
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Kenji T.',
    rating: 5,
    text: 'As a Japanese person living in London, I am extremely critical of "contemporary Japanese" restaurants. NORI is the real thing. The otoro nigiri alone was worth the journey.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Priya S.',
    rating: 5,
    text: 'Booked via WhatsApp for our anniversary — the team surprised us with a custom amuse-bouche acknowledging the occasion. That level of thoughtfulness is rare anywhere.',
    date: '2026-08-02',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Marcus L.',
    rating: 4,
    text: 'The miso black cod and wagyu were transcendent. Service is impeccably calm. Only small note: the room could use a touch more warmth. Food: absolute 5 stars.',
    date: '2026-08-05',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    author: 'Sophie D.',
    rating: 5,
    text: 'Vegetable kaiseki menu was extraordinary — it challenged every assumption I had about plant-based fine dining. Chef Yuki is doing something genuinely special here.',
    date: '2026-07-31',
    source: 'google',
    verified: true,
  },
]

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&h=600&fit=crop',
    alt: 'Precision plated sashimi course',
    width: 800,
    height: 600,
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=600&fit=crop',
    alt: 'Omakase nigiri service',
    width: 800,
    height: 600,
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&h=600&fit=crop',
    alt: 'Japanese whisky cocktail',
    width: 800,
    height: 600,
    category: 'Drinks',
  },
  {
    src: 'https://images.unsplash.com/photo-1545397934-c2d4b1eca5f0?w=800&h=600&fit=crop',
    alt: 'Minimalist dining room',
    width: 800,
    height: 600,
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&h=600&fit=crop',
    alt: 'Chef at the counter',
    width: 800,
    height: 600,
    category: 'Kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
    alt: 'Matcha dessert plating',
    width: 800,
    height: 600,
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    alt: 'Black ceramic tableware',
    width: 800,
    height: 600,
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
    alt: 'Sake selection',
    width: 800,
    height: 600,
    category: 'Drinks',
  },
]

const faqs: FAQItem[] = [
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking the omakase menus at least 2–3 weeks in advance. Weekend slots often fill 4 weeks ahead. Cancellation is free up to 48 hours before your reservation.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer:
      'Yes. Please inform us of all allergies and dietary requirements at the time of booking. Our kitchen is not fully allergen-free, but Chef Yuki will create bespoke alternatives where possible. The vegetable kaiseki is our dedicated plant-based menu.',
  },
  {
    question: 'Is there a dress code?',
    answer:
      'Smart casual. We ask that guests avoid sportswear, shorts, and trainers. The experience is intimate and refined — we like the atmosphere to match.',
  },
  {
    question: 'Do you offer private dining?',
    answer:
      'Yes. Our private dining room seats up to 12 guests and is available for exclusive hire. Bespoke menus, sake pairings, and sake masterclasses can be arranged. Contact us to discuss.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made more than 48 hours before the reservation are fully refunded. Within 48 hours, a 50% charge applies. No-shows are charged in full. For groups of 6 or more, 72 hours notice is required.',
  },
  {
    question: 'Is the restaurant accessible?',
    answer:
      'Yes. Our main dining room is fully step-free. Please let us know at booking if you require any accessibility accommodations and we will ensure everything is prepared.',
  },
  {
    question: 'Do you offer gift vouchers?',
    answer:
      'Yes. Gift vouchers are available in any denomination from £50. Message us on WhatsApp or email reservations@nori-london.com. Vouchers are valid for 12 months from purchase.',
  },
]

const mockSlots: BookingSlot[] = [
  {
    id: '1',
    date: new Date().toISOString().split('T')[0],
    time: '17:30',
    available: true,
    spotsLeft: 2,
  },
  {
    id: '2',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    available: true,
    spotsLeft: 4,
  },
  {
    id: '3',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    available: true,
    spotsLeft: 1,
  },
  {
    id: '4',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    available: true,
    spotsLeft: 6,
  },
  {
    id: '5',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    available: true,
    spotsLeft: 3,
  },
  {
    id: '6',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    available: true,
    spotsLeft: 2,
  },
  {
    id: '7',
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    available: true,
    spotsLeft: 5,
  },
  {
    id: '8',
    date: new Date().toISOString().split('T')[0],
    time: '21:00',
    available: true,
    spotsLeft: 3,
  },
]

// --- NAVBAR ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-white font-light tracking-[0.35em] uppercase text-base">NORI</span>
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-0.5">
            Contemporary Japanese · London
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Menu', href: '#menu' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'Reserve', href: '#booking' },
            { label: 'FAQ', href: '#faq' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={
                label === 'Reserve'
                  ? 'px-6 py-2.5 bg-[#e8c547] text-[#0a0a0a] font-semibold tracking-wide text-xs uppercase rounded-none hover:bg-[#f0d060] transition-colors'
                  : 'text-white/60 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors'
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// --- STATS BAR ---

function StatsBar() {
  const stats = [
    { value: '12', label: 'Courses' },
    { value: '400+', label: 'Sake labels' },
    { value: '2', label: 'Michelin stars' },
    { value: '5', label: 'Years in Mayfair' },
  ]
  return (
    <section className="bg-[#0a0a0a] border-t border-white/5 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-[#e8c547] text-3xl font-light tracking-wide">{value}</p>
            <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// --- PHILOSOPHY SECTION ---

function PhilosophySection() {
  return (
    <section className="bg-[#0f0f0f] py-32 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase mb-6">Our Philosophy</p>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
            Restraint is the
            <br />
            highest discipline.
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-6">
            NORI was born from a single conviction: that the finest Japanese cuisine requires
            nothing to be added and nothing to be removed. Chef Yuki Tanaka spent fifteen years
            in Kyoto kaiseki kitchens before arriving in London with a philosophy built on
            provenance, precision, and silence on the plate.
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Every ingredient is sourced direct — bluefin from Tsukiji, A5 wagyu from Kagoshima,
            vegetables from a single farm in Wiltshire. The menu changes with the market, not the
            calendar. No dish is on the menu for longer than three weeks.
          </p>
          <a
            href="#booking"
            className="inline-block border border-[#e8c547]/40 text-[#e8c547] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e8c547]/10 transition-colors"
          >
            Reserve Your Experience
          </a>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&h=1067&fit=crop"
              alt="Chef Yuki Tanaka at work"
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#e8c547] p-6 hidden md:block">
            <p className="text-[#0a0a0a] text-xs tracking-[0.15em] uppercase font-semibold">
              Chef Yuki Tanaka
            </p>
            <p className="text-[#0a0a0a]/60 text-[10px] tracking-wider mt-0.5">
              15 years · Kyoto & London
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- BOOKING SECTION ---

function BookingSection() {
  return (
    <section id="booking" className="bg-[#0a0a0a] py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase mb-6">
              Reservations
            </p>
            <h2 className="text-white text-4xl font-light leading-tight mb-8">
              Secure your
              <br />
              table directly.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              No third-party platforms. No commission. Book directly and receive confirmation
              via WhatsApp within minutes. We hold your table for 15 minutes past the
              reservation time.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { label: 'Lunch', value: 'Thursday – Sunday, 12:00–14:30' },
                { label: 'Dinner', value: 'Tuesday – Sunday, 17:30–21:30' },
                { label: 'Closed', value: 'Monday' },
                { label: 'Address', value: '18 Heddon Street, Mayfair W1B 4BG' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-6 text-sm">
                  <span className="text-white/30 tracking-[0.1em] uppercase text-xs w-20 pt-0.5 shrink-0">
                    {label}
                  </span>
                  <span className="text-white/70">{value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/30 text-xs tracking-[0.15em] uppercase mb-3">
                Group bookings &amp; private dining
              </p>
              <p className="text-white/50 text-sm">
                For parties of 7 or more, or private dining room enquiries, please message us
                directly on WhatsApp.
              </p>
            </div>
          </div>
          <div>
            <BookingWidget
              locale="en"
              slots={mockSlots}
              socialProof={{ count: 128, label: 'covers reserved this week' }}
              vertical="dineos"
              onSubmit={async (data) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---

const noriJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'NORI',
  description: 'Omakase and seasonal kaiseki in the heart of Mayfair. NORI redefines Japanese fine dining with an emphasis on precision, provenance, and restraint.',
  url: 'https://nori-london.example.com',
  telephone: '+44 20 7946 0311',
  email: 'reservations@nori-london.com',
  servesCuisine: 'Japanese',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Heddon Street',
    addressLocality: 'London',
    postalCode: 'W1B 4BG',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5113,
    longitude: -0.1406,
  },
  sameAs: [
    'https://instagram.com/nori.london',
    'https://facebook.com/norilondon',
  ],
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Omakase',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Omakase — 8 Course', description: 'Chef-curated eight-course journey.', offers: { '@type': 'Offer', price: '145', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Omakase — 12 Course', description: 'The full expression. Twelve courses with optional sake pairing.', offers: { '@type': 'Offer', price: '225', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Vegetable Kaiseki', description: 'A plant-forward kaiseki menu. Eight courses.', offers: { '@type': 'Offer', price: '115', priceCurrency: 'GBP' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Small Plates',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Otoro Nigiri', description: 'Bluefin tuna belly from Tsukiji market. Two pieces.', offers: { '@type': 'Offer', price: '32', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Wagyu Tataki', description: 'A5 Kagoshima wagyu, lightly seared, ponzu gel, micro shiso.', offers: { '@type': 'Offer', price: '38', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Sea Urchin Toast', description: 'Bafun uni from Hokkaido on toasted brioche.', offers: { '@type': 'Offer', price: '28', priceCurrency: 'GBP' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Main Plates',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Dry-Aged Duck Breast', description: 'Gressingham duck aged 14 days, miso caramel.', offers: { '@type': 'Offer', price: '46', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Miso Black Cod', description: 'Classic black cod, three-day saikyo miso marinade.', offers: { '@type': 'Offer', price: '52', priceCurrency: 'GBP' } },
          { '@type': 'MenuItem', name: 'Wagyu Sirloin A5', description: 'Kagoshima A5 wagyu, 200g.', offers: { '@type': 'Offer', price: '120', priceCurrency: 'GBP' } },
        ],
      },
    ],
  },
}

const noriFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How far in advance should I book?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend booking the omakase menus at least 2–3 weeks in advance. Weekend slots often fill 4 weeks ahead. Cancellation is free up to 48 hours before your reservation.' } },
    { '@type': 'Question', name: 'Can you accommodate dietary restrictions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Please inform us of all allergies and dietary requirements at the time of booking. The vegetable kaiseki is our dedicated plant-based menu.' } },
    { '@type': 'Question', name: 'Is there a dress code?', acceptedAnswer: { '@type': 'Answer', text: 'Smart casual. We ask that guests avoid sportswear, shorts, and trainers.' } },
    { '@type': 'Question', name: 'Do you offer private dining?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our private dining room seats up to 12 guests and is available for exclusive hire.' } },
    { '@type': 'Question', name: 'What is your cancellation policy?', acceptedAnswer: { '@type': 'Answer', text: 'Cancellations made more than 48 hours before the reservation are fully refunded. Within 48 hours, a 50% charge applies. No-shows are charged in full.' } },
    { '@type': 'Question', name: 'Do you offer gift vouchers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Gift vouchers are available in any denomination from £50. Valid for 12 months from purchase.' } },
  ],
}

export default function RestaurantModernPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(noriJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(noriFaqJsonLd) }} />
      <Navbar />

      {/* Hero */}
      <VideoHero
        title="Contemporary Japanese"
        subtitle="Omakase · Kaiseki · Mayfair, London"
        posterImage="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1800&h=1000&fit=crop"
        ctaPrimary={{ label: 'Reserve a Table', href: '#booking' }}
        ctaSecondary={{ label: 'Explore Menu', href: '#menu' }}
      />

      {/* Stats bar */}
      <StatsBar />

      {/* Philosophy / story — dark */}
      <PhilosophySection />

      {/* Menu */}
      <div id="menu" className="bg-[#0a0a0a]">
        <MenuSection categories={menuCategories} locale="en" currency="GBP" />
      </div>

      {/* Gallery */}
      <div id="gallery" className="bg-[#0f0f0f] py-4">
        <Gallery images={galleryImages} locale="en" columns={4} />
      </div>

      {/* Booking */}
      <BookingSection />

      {/* Reviews */}
      <div className="bg-[#0f0f0f]">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* Upsell */}
      <UpsellBanner
        items={[
          {
            title: 'Private Dining Room',
            description:
              'Exclusive hire for up to 12 guests. Bespoke kaiseki menus available.',
            href: '#booking',
            icon: '🏮',
          },
          {
            title: 'Sake Masterclass',
            description:
              'Two-hour guided tasting with our sake sommelier. Sundays, limited to 8.',
            href: '#booking',
            icon: '🍶',
          },
          {
            title: 'Gift Vouchers',
            description: 'Give the gift of omakase. Valid 12 months. From £50.',
            href: '#booking',
            icon: '🎋',
          },
        ]}
      />

      {/* Loyalty */}
      <div className="bg-[#0a0a0a]">
        <LoyaltyPrompt locale="en" />
      </div>

      {/* FAQ */}
      <div id="faq" className="bg-[#0f0f0f]">
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp floating CTA */}
      <WhatsAppCTA
        phoneNumber="+442079460311"
        message="Hi NORI — I'd like to enquire about a reservation"
        vertical="dineos"
      />
    </div>
  )
}
