'use client'
import Image from 'next/image';

import { useState } from 'react'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE — Gallery Minimal
// ─────────────────────────────────────────────
const C = {
  galleryWhite: '#fafafa',
  frameBlack: '#1a1a1a',
  accentRed: '#e11d48',
  accentRedLight: '#f43f5e',
  warmGrey: '#9ca3af',
  warmGreyLight: '#d1d5db',
  mat: '#f3f4f6',
  dark: '#111111',
  charcoal: '#374151',
  offWhite: '#f8f8f8',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'The Meridian Gallery',
  description: 'Contemporary Art — Mayfair, London',
  url: 'https://meridiangallery.example.com',
  locale: 'en',
  vertical: 'galleryos',
  theme: 'minimal',
  branding: { primaryColor: C.frameBlack, accentColor: C.accentRed },
  contact: {
    phone: '+44 20 7946 0811',
    email: 'visit@meridiangallery.com',
    whatsapp: '+442079460811',
    address: '24 Davies Street, Mayfair, London W1K 3DB',
    coordinates: { lat: 51.5119, lng: -0.1481 },
  },
  social: {
    instagram: 'meridiangallery',
    facebook: 'https://facebook.com/meridiangallery',
  },
  seo: {
    title: 'The Meridian Gallery — Contemporary Art in the Heart of London',
    description: 'Contemporary art gallery in Mayfair showcasing emerging and established artists.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const currentExhibition = {
  title: 'Thresholds of Light',
  artist: 'Yuki Tanaka',
  dates: '12 July – 14 September 2026',
  medium: 'Oil on linen · 18 works',
  description: "Yuki Tanaka's luminous new body of work explores the threshold between interior and exterior worlds — the moment a room becomes aware of its own light. Working on large-scale linen canvases, Tanaka builds layers of translucent colour that seem to breathe and shift as you move around them.",
  quote: '"I am less interested in depicting light than in creating the sensation that light is present in the paint itself."',
  image: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=1200&h=700&fit=crop&q=90',
  artistImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop',
}

const upcomingExhibitions = [
  {
    title: 'After the Archive',
    artist: 'Marcus Osei & Priya Nair',
    opens: 'Opens 20 September 2026',
    type: 'Group Exhibition',
    image: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=300&fit=crop',
  },
  {
    title: 'Fault Lines',
    artist: 'Elspeth Cairns',
    opens: 'Opens 4 November 2026',
    type: 'Solo Exhibition',
    image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=400&h=300&fit=crop',
  },
  {
    title: 'Winter Collection',
    artist: 'Various Artists',
    opens: 'Opens 6 December 2026',
    type: 'Annual Group Show',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&h=300&fit=crop',
  },
]

const permanentCollection = [
  {
    title: 'Study for a Blue Room, No. 4',
    artist: 'Helena Marks',
    year: '2019',
    medium: 'Oil on canvas',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=500&fit=crop',
    featured: true,
  },
  {
    title: 'Untitled (Meridian Series)',
    artist: 'J. Beaumont',
    year: '2021',
    medium: 'Steel and light',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop',
  },
  {
    title: 'Garden Fragments',
    artist: 'Amara Diallo',
    year: '2020',
    medium: 'Gouache on paper',
    image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=400&h=300&fit=crop',
  },
  {
    title: 'The Weight of Air',
    artist: 'Celia North',
    year: '2022',
    medium: 'Bronze',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
    featured: true,
  },
  {
    title: 'Harbour Mouth',
    artist: 'Tom Reardon',
    year: '2018',
    medium: 'Oil on board',
    image: 'https://images.unsplash.com/photo-1566041510394-cf7c1b1edc43?w=400&h=300&fit=crop',
  },
  {
    title: 'Mapping Home',
    artist: 'Nadia Osei',
    year: '2023',
    medium: 'Mixed media on linen',
    image: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=300&fit=crop',
  },
]

const artists = [
  {
    name: 'Yuki Tanaka',
    bio: 'Tokyo-born, London-based. Works in oil on large-scale linen. Represented in 14 major public collections.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop',
    current: true,
  },
  {
    name: 'Helena Marks',
    bio: 'Graduate of the Slade School of Fine Art. Her work explores domestic space and hidden emotional architectures.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop',
  },
  {
    name: 'Marcus Osei',
    bio: 'Ghanaian-British sculptor and installation artist. His practice interrogates memory, belonging, and material history.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    name: 'Amara Diallo',
    bio: 'Senegalese artist working across painting and textile. Combines traditional craft techniques with contemporary form.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
  },
]

const galleryEvents = [
  { type: 'Private View', name: 'Thresholds of Light — Exhibition Preview', date: 'Thu 11 Jul, 6–9pm', note: 'Invitation only — contact gallery' },
  { type: 'Artist Talk', name: 'Yuki Tanaka in Conversation', date: 'Sat 2 Aug, 2pm', note: 'Free, booking required, limited places' },
  { type: 'Workshop', name: 'Working with Light — Oil Painting', date: 'Sat 6 Sep, 10am–4pm', note: '£120 per person, all materials included' },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Caroline B.',
    rating: 5,
    text: "Thresholds of Light is the finest exhibition I've seen in London this year. Tanaka's paintings are genuinely transformative — you stand in front of them and feel something shift.",
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Michael H.',
    rating: 5,
    text: "The gallery itself is beautifully curated — the lighting, the spacing, the silence. One of the few places in London where you feel genuinely held by the work.",
    date: '2026-07-15',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Yemi T.',
    rating: 5,
    text: "I took the oil painting workshop in May and it was extraordinary. Expert tuition, beautiful space, small group. I came home with a painting I'm genuinely proud of.",
    date: '2026-07-20',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '4',
    author: 'Peter W.',
    rating: 4,
    text: "The permanent collection is remarkable for a gallery of this size. The Marks piece alone is worth the visit. Shop has excellent catalogues and editions.",
    date: '2026-07-08',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  { question: 'What are your opening hours and admission prices?', answer: 'The gallery is open Tuesday–Saturday 10am–6pm and Sunday 11am–5pm. General admission is £12 adults, £8 concessions (students, over 65s, disabled). Under 12s are always free. Current exhibition entry is included.' },
  { question: 'Is the gallery accessible?', answer: 'Yes. The ground floor is fully wheelchair accessible. We have an accessible lift to the upper gallery. Audio guides are available and large-print materials can be provided on request. Please contact us in advance for any specific requirements.' },
  { question: 'Can I take photographs in the gallery?', answer: 'Non-flash photography for personal use is permitted in all areas except where individually indicated. Commercial photography or filming requires advance written permission.' },
  { question: 'How can I purchase work from the exhibitions?', answer: 'All works in current exhibitions are available for sale unless marked otherwise. Speak to a member of staff or email us. We offer collector services, provenance documentation, and assistance with shipping and insurance.' },
  { question: 'Do you take unsolicited artist submissions?', answer: 'We accept submissions twice a year (January and June) via our online portal. We are particularly interested in mid-career artists working in painting, sculpture, and installation. Full submission guidelines are on our website.' },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ArtGallery',
  '@id': 'https://meridiangallery.example.com',
  name: 'The Meridian Gallery',
  description: 'Contemporary art gallery in Mayfair, London. Exhibitions, permanent collection, workshops, and events.',
  url: 'https://meridiangallery.example.com',
  telephone: '+44 20 7946 0811',
  email: 'visit@meridiangallery.com',
  image: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=1200&h=630&fit=crop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24 Davies Street, Mayfair',
    addressLocality: 'London',
    postalCode: 'W1K 3DB',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5119, longitude: -0.1481 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '17:00' },
  ],
  priceRange: '££',
  sameAs: ['https://instagram.com/meridiangallery', 'https://facebook.com/meridiangallery'],
}

const galleryFaqJsonLd = {
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
// COMPONENTS
// ─────────────────────────────────────────────
function ArtFrame({ src, alt, width = '100%', height = '100%', matPadding = 16 }: { src: string; alt: string; width?: string; height?: string; matPadding?: number }) {
  return (
    <div
      style={{
        width,
        height,
        padding: `${matPadding}px`,
        backgroundColor: C.mat,
        boxShadow: `0 ${matPadding}px ${matPadding * 4}px rgba(0,0,0,0.18), inset 0 0 0 1px ${C.warmGreyLight}`,
      }}
    >
      <Image src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} width={1200} height={800} />
    </div>
  )
}

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `${C.galleryWhite}f8`,
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.warmGreyLight}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="#" className="tracking-[0.3em] text-xs uppercase font-light" style={{ color: C.frameBlack }}>
          The Meridian
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Exhibitions', 'Collection', 'Artists', 'Visit'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300"
              style={{ color: C.warmGrey }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.frameBlack)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.warmGrey)}
            >
              {item}
            </a>
          ))}
          <a
            href="#visit"
            className="text-xs tracking-[0.2em] uppercase font-light border-b transition-all duration-300 pb-0.5"
            style={{ borderColor: C.accentRed, color: C.accentRed }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.accentRedLight)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.accentRed)}
          >
            Plan a Visit
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function GalleryPage() {
  const [activeExhibition, setActiveExhibition] = useState(0)

  return (
    <div style={{ backgroundColor: C.galleryWhite, color: C.frameBlack }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryFaqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Gallery Wall Effect
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Pure gallery white */}
        <div className="absolute inset-0" style={{ backgroundColor: C.galleryWhite }} />

        {/* Subtle baseboard shadow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(to top, ${C.warmGreyLight}30, transparent)`,
          }}
        />

        {/* Main featured artwork frame — gallery wall presentation */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 items-center">

            {/* Artwork frame */}
            <div className="relative">
              {/* Exhibition rotating label */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-4 h-px" style={{ backgroundColor: C.accentRed }} />
                <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ color: C.accentRed }}>
                  Current Exhibition
                </span>
              </div>

              {/* The frame */}
              <div
                className="relative"
                style={{
                  padding: '20px',
                  backgroundColor: C.mat,
                  boxShadow: '0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)',
                }}
              >
                {/* Outer frame border */}
                <div
                  className="absolute inset-0"
                  style={{
                    border: '8px solid #1a1a1a',
                    boxSizing: 'border-box',
                  }}
                />

                <Image src={currentExhibition.image}
                  alt={`${currentExhibition.title} by ${currentExhibition.artist}`}
                  className="w-full block"
                  style={{ height: '440px', objectFit: 'cover', display: 'block' }} width={1200} height={800} />
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center gap-3 mt-6">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveExhibition(i)}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: activeExhibition === i ? C.frameBlack : C.warmGreyLight,
                      transform: activeExhibition === i ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Exhibition text */}
            <div>
              <p className="text-xs tracking-[0.4em] uppercase font-light mb-4" style={{ color: C.warmGrey }}>
                {currentExhibition.dates}
              </p>

              <h1
                className="text-4xl md:text-5xl font-extralight leading-tight mb-3"
                style={{ color: C.frameBlack, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                {currentExhibition.title}
              </h1>

              <p className="text-sm tracking-[0.2em] uppercase mb-6 font-light" style={{ color: C.accentRed }}>
                {currentExhibition.artist}
              </p>

              <p className="text-xs tracking-wider mb-4 font-light" style={{ color: C.warmGrey }}>
                {currentExhibition.medium}
              </p>

              <div className="w-8 h-px mb-6" style={{ backgroundColor: C.warmGreyLight }} />

              <p className="text-sm leading-relaxed font-light mb-8" style={{ color: C.charcoal }}>
                {currentExhibition.description}
              </p>

              <blockquote
                className="text-base italic leading-relaxed mb-10 pl-4"
                style={{ borderLeft: `2px solid ${C.accentRed}`, color: C.charcoal }}
              >
                {currentExhibition.quote}
              </blockquote>

              <div className="flex gap-4">
                <a
                  href="#exhibitions"
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-light transition-all duration-400"
                  style={{ backgroundColor: C.frameBlack, color: C.galleryWhite }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.charcoal)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.frameBlack)}
                >
                  View Full Exhibition
                </a>
                <a
                  href="#visit"
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-light border transition-all duration-400"
                  style={{ borderColor: C.frameBlack, color: C.frameBlack }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.frameBlack; e.currentTarget.style.color = C.galleryWhite }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.frameBlack }}
                >
                  Plan Your Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          UPCOMING EXHIBITIONS
          ═══════════════════════════════════════ */}
      <section
        id="exhibitions"
        className="py-24 px-8"
        style={{ backgroundColor: C.frameBlack }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase font-light mb-3" style={{ color: C.accentRed }}>
                Coming Soon
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.galleryWhite }}>
                Upcoming Exhibitions
              </h2>
            </div>
            <div className="w-16 h-px" style={{ backgroundColor: `${C.warmGrey}50` }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingExhibitions.map((ex) => (
              <div key={ex.title} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-5" style={{ height: '260px' }}>
                  <Image src={ex.image}
                    alt={ex.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1200} height={800} />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-widest uppercase font-light"
                    style={{ backgroundColor: C.accentRed, color: C.galleryWhite }}
                  >
                    {ex.type}
                  </div>
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-2 font-light" style={{ color: C.warmGrey }}>
                  {ex.opens}
                </p>
                <h3 className="text-xl font-extralight mb-1" style={{ color: C.galleryWhite }}>
                  {ex.title}
                </h3>
                <p className="text-xs font-light" style={{ color: C.warmGrey }}>{ex.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PERMANENT COLLECTION
          ═══════════════════════════════════════ */}
      <section
        id="collection"
        className="py-24 px-8"
        style={{ backgroundColor: C.galleryWhite }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase font-light mb-4" style={{ color: C.warmGrey }}>
              The Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.frameBlack }}>
              Permanent Collection
            </h2>
          </div>

          {/* Asymmetric masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {permanentCollection.map((work, i) => (
              <div
                key={work.title}
                className={`group cursor-pointer ${work.featured ? 'row-span-2' : ''}`}
              >
                <div
                  className="relative overflow-hidden mb-3"
                  style={{ height: work.featured ? '500px' : '240px' }}
                >
                  <div
                    style={{
                      padding: '12px',
                      backgroundColor: C.mat,
                      height: '100%',
                      boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <Image src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={1200} height={800} />
                  </div>
                </div>
                <p className="text-xs font-light mb-0.5" style={{ color: C.frameBlack }}>{work.title}</p>
                <p className="text-[11px] font-light" style={{ color: C.warmGrey }}>
                  {work.artist} · {work.medium} · {work.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ARTISTS
          ═══════════════════════════════════════ */}
      <section
        id="artists"
        className="py-24 px-8"
        style={{ backgroundColor: C.offWhite }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.4em] uppercase font-light mb-4" style={{ color: C.warmGrey }}>
              Represented
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.frameBlack }}>Artists</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="flex gap-6 items-start p-6 transition-all duration-300"
                style={{
                  backgroundColor: C.galleryWhite,
                  border: `1px solid ${C.warmGreyLight}`,
                  borderLeft: artist.current ? `3px solid ${C.accentRed}` : `1px solid ${C.warmGreyLight}`,
                }}
              >
                <Image src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 object-cover flex-shrink-0"
                  style={{ filter: 'grayscale(30%)' }} width={1200} height={800} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-light text-lg" style={{ color: C.frameBlack }}>{artist.name}</h3>
                    {artist.current && (
                      <span className="text-[10px] tracking-widest uppercase px-2 py-0.5" style={{ backgroundColor: C.accentRed, color: C.galleryWhite }}>
                        Exhibiting
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: C.charcoal }}>{artist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS
          ═══════════════════════════════════════ */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: C.frameBlack }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.4em] uppercase font-light mb-4" style={{ color: C.accentRed }}>
              Programme
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.galleryWhite }}>
              Events
            </h2>
          </div>

          <div className="space-y-4">
            {galleryEvents.map((ev) => (
              <div
                key={ev.name}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 transition-all duration-300"
                style={{ borderBottom: `1px solid ${C.warmGrey}20` }}
              >
                <div className="flex gap-6 items-start">
                  <div
                    className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-light flex-shrink-0"
                    style={{ backgroundColor: `${C.accentRed}20`, color: C.accentRed }}
                  >
                    {ev.type}
                  </div>
                  <div>
                    <h3 className="text-base font-extralight mb-1" style={{ color: C.galleryWhite }}>{ev.name}</h3>
                    <p className="text-xs font-light" style={{ color: C.warmGrey }}>{ev.note}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xs font-light" style={{ color: C.warmGrey }}>{ev.date}</span>
                  <a
                    href="#visit"
                    className="text-xs tracking-[0.2em] uppercase font-light border-b transition-all duration-300"
                    style={{ borderColor: C.galleryWhite, color: C.galleryWhite }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.accentRed)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.galleryWhite)}
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: C.galleryWhite }}>
        <div className="max-w-6xl mx-auto px-8 mb-12">
          <p className="text-xs tracking-[0.4em] uppercase font-light mb-4" style={{ color: C.warmGrey }}>Visitors</p>
          <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.frameBlack }}>Reviews</h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          VISIT
          ═══════════════════════════════════════ */}
      <section
        id="visit"
        className="py-24 px-8"
        style={{ backgroundColor: C.offWhite }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-light mb-6" style={{ color: C.warmGrey }}>
              Plan Your Visit
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight mb-10" style={{ color: C.frameBlack }}>
              The Gallery
            </h2>

            <div className="space-y-8">
              {[
                { label: 'Opening Hours', value: 'Tue–Sat · 10am–6pm\nSun · 11am–5pm\nMon · Closed' },
                { label: 'Admission', value: 'Adults £12 · Concessions £8\nUnder 12 Free · Members Free' },
                { label: 'Location', value: '24 Davies Street, Mayfair\nLondon W1K 3DB' },
                { label: 'Nearest Tube', value: 'Bond Street (2 min) · Green Park (5 min)' },
              ].map((info) => (
                <div key={info.label}>
                  <p className="text-xs tracking-[0.2em] uppercase font-light mb-2" style={{ color: C.accentRed }}>
                    {info.label}
                  </p>
                  <p className="text-sm font-light leading-relaxed whitespace-pre-line" style={{ color: C.charcoal }}>
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Large artwork frame as decorative element */}
          <div className="flex flex-col gap-4">
            <ArtFrame
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=400&fit=crop"
              alt="Gallery interior view"
              height="380px"
              matPadding={20}
            />
            <div className="grid grid-cols-2 gap-4">
              <ArtFrame
                src="https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=300&h=200&fit=crop"
                alt="Gallery visitor"
                height="160px"
                matPadding={12}
              />
              <ArtFrame
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=300&h=200&fit=crop"
                alt="Sculpture installation"
                height="160px"
                matPadding={12}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 px-8" style={{ backgroundColor: C.galleryWhite }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase font-light mb-4" style={{ color: C.warmGrey }}>
              Information
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight" style={{ color: C.frameBlack }}>
              Frequently Asked
            </h2>
          </div>
          <FAQAccordion items={faqs} verticalName="GalleryOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+442079460811" message="Hi! I'd like to visit The Meridian Gallery" vertical="galleryos" />
    </div>
  )
}
