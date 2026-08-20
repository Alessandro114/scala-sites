'use client'
import Image from 'next/image';

import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE
// ─────────────────────────────────────────────
const C = {
  pistachio: '#93c572',
  pistachioLight: '#b5d99a',
  pistachioDeep: '#6a9e50',
  strawberry: '#e84393',
  strawberryLight: '#f072b5',
  strawberryPale: '#fde8f3',
  lemon: '#f9e460',
  lemonLight: '#fbef8a',
  vanilla: '#f9e4b7',
  vanillaDeep: '#e8c980',
  chocolate: '#5d3a1a',
  chocolateDeep: '#3a2010',
  white: '#ffffff',
  softWhite: '#fef9f0',
  textDark: '#2a1a0e',
  textMuted: '#7a6050',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Gelateria Paradiso',
  description: 'Artigianale Italian gelato since 1978',
  url: 'https://gelateriaparadiso.example.com',
  locale: 'it',
  vertical: 'gelateriaos',
  theme: 'summer',
  branding: { primaryColor: C.strawberry, accentColor: C.pistachio },
  contact: {
    phone: '+39 02 1234 5678',
    email: 'ciao@gelateriaparadiso.com',
    whatsapp: '+390212345678',
    address: 'Via Montenapoleone 8, 20121 Milano MI',
    coordinates: { lat: 45.4668, lng: 9.1905 },
  },
  social: {
    instagram: 'gelateriaparadiso',
    facebook: 'https://facebook.com/gelateriaparadiso',
  },
  seo: {
    title: 'Gelateria Paradiso | Artigianale dal 1978',
    description: 'Gelato artigianale in Milano dal 1978. 16 gusti, sorbetti vegani, catering eventi.',
  },
}

// ─────────────────────────────────────────────
// FLAVOURS
// ─────────────────────────────────────────────
interface Flavour {
  name: string
  desc: string
  color: string
  tags: string[]
  seasonal?: boolean
}

const flavours: Flavour[] = [
  { name: 'Pistacchio di Bronte', desc: 'DOP pistachios, pure and intense', color: C.pistachio, tags: ['V', 'GF'] },
  { name: 'Fragola', desc: 'Fresh strawberries from Campania', color: C.strawberry, tags: ['V', 'GF', 'DF'] },
  { name: 'Limone', desc: 'Amalfi coast lemons, sharp and bright', color: C.lemon, tags: ['V', 'GF', 'DF'] },
  { name: 'Cioccolato Fondente', desc: 'Valrhona 70% cocoa, intense dark', color: '#3c2010', tags: ['V', 'GF'] },
  { name: 'Stracciatella', desc: 'Fior di latte, fine dark chocolate shards', color: '#f5f0e8', tags: ['GF'] },
  { name: 'Nocciola Piemonte', desc: 'Tonda Gentile hazelnuts, IGP', color: '#b87333', tags: ['V', 'GF'] },
  { name: 'Mango & Peperoncino', desc: 'Alphonso mango, hint of chilli', color: '#f4a124', tags: ['V', 'GF', 'DF'], seasonal: true },
  { name: 'Tiramisù', desc: 'Espresso, mascarpone, cocoa — a classic', color: '#6b4226', tags: [] },
  { name: 'Caramello Salato', desc: 'Burnt caramel, fleur de sel', color: '#c9941a', tags: ['GF'] },
  { name: 'Fico & Miele', desc: 'Black fig, Calabrian honey', color: '#7a3080', tags: ['GF'], seasonal: true },
  { name: 'Vaniglia Bourbon', desc: 'Madagascar vanilla pod, egg-yolk base', color: C.vanilla, tags: ['GF'] },
  { name: 'Cocco', desc: 'Coconut milk sorbet, toasted flakes', color: '#f5f0e8', tags: ['V', 'GF', 'DF'] },
  { name: 'Lampone', desc: 'Raspberry sorbet, whole fruit', color: '#d42b5e', tags: ['V', 'GF', 'DF'] },
  { name: 'Crema di Latte', desc: 'Pure cream gelato, delicate and clean', color: C.vanillaDeep, tags: ['GF'] },
  { name: 'Caffè Espresso', desc: 'Double-shot intensity in a scoop', color: '#2c1a08', tags: ['V', 'GF'] },
  { name: 'Mora & Basilico', desc: 'Blackberry, fresh basil sorbet', color: '#4a1560', tags: ['V', 'GF', 'DF'], seasonal: true },
]

const seasonalSpecials = [
  {
    name: 'Pesche e Prosecco',
    desc: 'White peach sorbet with a splash of Prosecco — summer in a cup',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop',
  },
  {
    name: 'Anguria e Menta',
    desc: 'Watermelon sorbet, fresh mint, black sesame seed',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&h=400&fit=crop',
  },
  {
    name: 'Lavanda & Miele',
    desc: 'Provençal lavender infusion, raw wildflower honey',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop',
  },
  {
    name: 'Zucca e Cannella',
    desc: 'Roasted pumpkin, Ceylon cinnamon — autumn harvest',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
  },
]

const processSteps = [
  { num: '01', title: 'Ingredienti', desc: 'Only real ingredients. No powders, no premixes. Fruit comes from trusted Italian farms. Milk daily from a local dairy co-op.' },
  { num: '02', title: 'Pastorizzazione', desc: 'Our base is pasteurised at 85°C for 15 seconds then aged at 4°C for 6 hours to develop flavour complexity.' },
  { num: '03', title: 'Mantecatura', desc: 'Churned slowly at low speed to incorporate minimal air. Gelato is dense, not fluffy — 25% overrun vs 100%+ for industrial ice cream.' },
  { num: '04', title: 'In Vetrina', desc: 'Served at -11°C from our stainless steel pozzetti. Each batch identified with date and ingredient card.' },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Isabella C.',
    rating: 5,
    text: "Il pistacchio è una cosa seria qui. Si sente che viene da Bronte — il profumo, il colore, il sapore. Il migliore a Milano senza dubbio.",
    date: '2026-07-22',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Tom W.',
    rating: 5,
    text: "Visiting from London and stopped here after reading reviews. The stracciatella alone is worth the flight. Genuinely the best gelato I've ever eaten.",
    date: '2026-08-02',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Giulia F.',
    rating: 5,
    text: 'Catering per il mio matrimonio — 8 gusti, carrello vintage, staff gentilissimo. Tutti gli ospiti hanno chiesto il numero. Meraviglioso.',
    date: '2026-07-30',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Pierre D.',
    rating: 5,
    text: "La mora e basilico est une révélation. On ne s'y attend pas et c'est une explosion. Ils changent la carte selon les saisons, c'est fantastique.",
    date: '2026-07-18',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Il gelato è artigianale al 100%?',
    answer: 'Sì. Utilizziamo solo ingredienti freschi — nessuna polvere, nessun semilavorato. Ogni gusto è prodotto quotidianamente nella nostra laboratorio a vista.',
  },
  {
    question: 'Quali gusti sono vegani?',
    answer: 'I gusti contrassegnati "DF" (dairy-free) e "V" (vegan) sono privi di latticini e uova. Attualmente 7 gusti sono completamente vegani. Cambia stagionalmente.',
  },
  {
    question: 'Fate catering per eventi?',
    answer: 'Sì — offriamo il nostro carrello gelato vintage per matrimoni, compleanni, eventi aziendali. Minimo 50 persone. Pacchetti da €8 a testa. Contattaci su WhatsApp per un preventivo.',
  },
  {
    question: 'Avete opzioni senza glutine?',
    answer: 'La maggior parte dei nostri gusti è senza glutine (contrassegnati "GF"). La nostra cucina maneggia il glutine — se hai una celiachia severa, contattaci in anticipo.',
  },
  {
    question: 'Posso ordinare una torta gelato?',
    answer: 'Certamente. Torte gelato personalizzate su ordinazione — fino a 4 gusti, decorazioni personalizzate. Ordinazione minima 72 ore prima. Prezzi da €45.',
  },
  {
    question: 'A che ora aprite?',
    answer: 'Apriamo ogni giorno dalle 10:00 alle 22:00 (23:00 nei weekend). In alta stagione (giugno–agosto) apriamo alle 09:30.',
  },
]

const gelateriaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'IceCreamShop',
  name: 'Gelateria Paradiso',
  description: 'Artigianale Italian gelato made daily in Milan since 1978.',
  url: 'https://gelateriaparadiso.example.com',
  telephone: '+39 02 1234 5678',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Montenapoleone 8',
    addressLocality: 'Milano',
    postalCode: '20121',
    addressCountry: 'IT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.4668, longitude: 9.1905 },
  openingHours: ['Mo-Su 10:00-22:00'],
  foundingDate: '1978',
  priceRange: '£',
}

const gelateriaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(254,249,240,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.vanilla}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <a
          href="#"
          style={{
            color: C.chocolate,
            fontSize: '1.05rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Gelateria Paradiso
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Gusti', 'Stagione', 'Laboratorio', 'Catering'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: C.textMuted, fontSize: '0.78rem', letterSpacing: '0.1em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.strawberry)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function GelateriaPage() {
  return (
    <div style={{ backgroundColor: C.softWhite, color: C.textDark }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gelateriaJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gelateriaFaqJsonLd) }} />

      <style>{`
        @keyframes dripDrop {
          0% { transform: translateY(-100%) scaleY(0); opacity: 0; }
          40% { transform: translateY(0) scaleY(1.1); opacity: 1; }
          60% { transform: translateY(8px) scaleY(0.9); }
          80% { transform: translateY(4px) scaleY(1); }
          100% { transform: translateY(6px) scaleY(0.95); opacity: 1; }
        }
        @keyframes drip {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(3px) scaleY(1.05); }
        }
        @keyframes floatScoop {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes rainbowShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .float-scoop { animation: floatScoop 4s ease-in-out infinite; }
        .drip-blob { animation: drip 3s ease-in-out infinite; }
        .flavour-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .seasonal-card:hover img { transform: scale(1.06); }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Rainbow Summer
          ═══════════════════════════════════════ */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
        style={{
          background: `linear-gradient(135deg, ${C.pistachio}33 0%, ${C.lemon}44 25%, ${C.strawberryPale} 50%, ${C.vanilla}66 75%, ${C.pistachioLight}33 100%)`,
          backgroundSize: '300% 300%',
          animation: 'rainbowShift 12s ease infinite',
        }}
      >
        {/* Drip effect at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ zIndex: 2 }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="drip-blob absolute bottom-0"
              style={{
                left: `${i * 8.5}%`,
                width: `${40 + (i % 3) * 10}px`,
                height: `${30 + (i % 4) * 15}px`,
                borderRadius: '0 0 50% 50%',
                backgroundColor: [C.pistachio, C.strawberry, C.lemon, C.vanilla, C.chocolate][i % 5],
                opacity: 0.7,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          {/* Left: Text */}
          <div>
            {/* 1978 badge */}
            <div
              className="fade-up inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                backgroundColor: C.strawberry,
                color: C.white,
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              ✦ Artigianale dal 1978
            </div>

            <h1
              className="fade-up d1"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: C.chocolate,
                marginBottom: '1.5rem',
              }}
            >
              Gelato
              <br />
              <span style={{ color: C.strawberry }}>artigianale.</span>
              <br />
              <span style={{ color: C.pistachio, fontSize: '80%' }}>Dal cuore.</span>
            </h1>

            <p
              className="fade-up d2"
              style={{ color: C.textMuted, fontSize: '1rem', lineHeight: 1.8, maxWidth: 420, marginBottom: '2.5rem' }}
            >
              16 flavours made fresh daily. Zero additives. Zero shortcuts.
              Only seasonal ingredients from farms we trust personally.
              A summer ritual since 1978.
            </p>

            {/* Scoop colour dots preview */}
            <div className="fade-up d3 flex items-center gap-3 mb-10">
              {[C.pistachio, C.strawberry, C.lemon, C.vanilla, C.chocolate, '#6b4226', '#f4a124', '#d42b5e'].map((col, i) => (
                <div
                  key={i}
                  style={{
                    width: i === 0 ? 36 : 28,
                    height: i === 0 ? 36 : 28,
                    borderRadius: '50%',
                    backgroundColor: col,
                    boxShadow: `0 4px 12px ${col}55`,
                    border: `2px solid rgba(255,255,255,0.5)`,
                    flexShrink: 0,
                  }}
                  title={flavours[i]?.name}
                />
              ))}
              <span style={{ color: C.textMuted, fontSize: '0.8rem', marginLeft: '0.25rem' }}>+8 more</span>
            </div>

            <div className="fade-up d4 flex flex-wrap gap-3">
              <a
                href="#gusti"
                style={{
                  backgroundColor: C.strawberry,
                  color: C.white,
                  padding: '1rem 2.25rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.strawberryLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.strawberry)}
              >
                Scopri i Gusti
              </a>
              <a
                href="#catering"
                style={{
                  border: `2px solid ${C.pistachio}`,
                  color: C.pistachioDeep,
                  padding: '1rem 2.25rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.pistachio
                  e.currentTarget.style.color = C.white
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = C.pistachioDeep
                }}
              >
                Catering Eventi
              </a>
            </div>
          </div>

          {/* Right: Floating gelato scoops illustration */}
          <div className="relative hidden md:flex items-center justify-center h-[500px]">
            {/* Big scoop 1 — pistachio */}
            <div
              className="float-scoop absolute"
              style={{
                width: 160,
                height: 160,
                borderRadius: '50% 50% 40% 40%',
                backgroundColor: C.pistachio,
                top: 80,
                left: 60,
                boxShadow: `0 20px 60px ${C.pistachio}44`,
                zIndex: 3,
              }}
            />
            {/* Scoop 2 — strawberry */}
            <div
              className="float-scoop absolute"
              style={{
                width: 130,
                height: 130,
                borderRadius: '50% 50% 40% 40%',
                backgroundColor: C.strawberry,
                top: 40,
                left: 160,
                boxShadow: `0 20px 60px ${C.strawberry}44`,
                animationDelay: '0.8s',
                zIndex: 4,
              }}
            />
            {/* Scoop 3 — lemon */}
            <div
              className="float-scoop absolute"
              style={{
                width: 110,
                height: 110,
                borderRadius: '50% 50% 40% 40%',
                backgroundColor: C.lemon,
                top: 20,
                left: 110,
                boxShadow: `0 20px 60px ${C.lemon}66`,
                animationDelay: '1.4s',
                zIndex: 5,
              }}
            />
            {/* Cone body */}
            <div
              style={{
                position: 'absolute',
                bottom: 80,
                left: 95,
                width: 0,
                height: 0,
                borderLeft: '80px solid transparent',
                borderRight: '80px solid transparent',
                borderTop: `160px solid ${C.vanillaDeep}`,
                zIndex: 2,
                filter: 'drop-shadow(0 8px 20px rgba(93,58,26,0.2))',
              }}
            />
            {/* Drip details */}
            <div
              style={{
                position: 'absolute',
                top: 210,
                left: 145,
                width: 14,
                height: 32,
                borderRadius: '0 0 8px 8px',
                backgroundColor: C.pistachio,
                zIndex: 3,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 195,
                left: 200,
                width: 10,
                height: 24,
                borderRadius: '0 0 6px 6px',
                backgroundColor: C.strawberry,
                zIndex: 3,
              }}
            />

            {/* Stats badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                right: 20,
                backgroundColor: C.white,
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              }}
            >
              <p style={{ color: C.strawberry, fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>16</p>
              <p style={{ color: C.textMuted, fontSize: '0.72rem', marginTop: '0.2rem' }}>gusti disponibili</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FLAVOURS GRID
          ═══════════════════════════════════════ */}
      <section
        id="gusti"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.softWhite }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: C.strawberry, fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Oggi in Vetrina
            </p>
            <h2 style={{ color: C.chocolate, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
              I Nostri Gusti
            </h2>
          </div>

          {/* Tag legend */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { tag: 'V', label: 'Vegetarian', color: C.pistachio },
              { tag: 'GF', label: 'Gluten Free', color: C.vanilla },
              { tag: 'DF', label: 'Dairy Free', color: C.strawberry },
            ].map((t) => (
              <span
                key={t.tag}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: C.textMuted,
                }}
              >
                <span
                  style={{
                    backgroundColor: `${t.color}33`,
                    color: t.color,
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.4rem',
                    borderRadius: '3px',
                  }}
                >
                  {t.tag}
                </span>
                {t.label}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {flavours.map((f) => (
              <div
                key={f.name}
                className="flavour-card"
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  backgroundColor: C.white,
                  border: `1px solid ${f.color}22`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Colour blob background */}
                <div
                  style={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: `${f.color}22`,
                    pointerEvents: 'none',
                  }}
                />
                {/* Colour dot */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50% 50% 40% 40%',
                    backgroundColor: f.color,
                    marginBottom: '1rem',
                    boxShadow: `0 4px 12px ${f.color}44`,
                    border: '2px solid rgba(255,255,255,0.6)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h3 style={{ color: C.textDark, fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.3 }}>{f.name}</h3>
                    {f.seasonal && (
                      <span
                        style={{
                          backgroundColor: `${C.lemon}44`,
                          color: '#806a00',
                          fontSize: '0.55rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '0.15rem 0.4rem',
                          borderRadius: '3px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        Stagionale
                      </span>
                    )}
                  </div>
                  <p style={{ color: C.textMuted, fontSize: '0.78rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>{f.desc}</p>
                  <div style={{ display: 'flex', gap: '0.3rem' }}>
                    {f.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.4rem',
                          borderRadius: '3px',
                          backgroundColor: `${f.color}22`,
                          color: f.color,
                        }}
                      >
                        {tag}
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
          SEASONAL SPECIALS
          ═══════════════════════════════════════ */}
      <section
        id="stagione"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: `${C.pistachio}15` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ color: C.pistachio, fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Limited Edition
            </p>
            <h2 style={{ color: C.chocolate, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
              Stagionali
            </h2>
            <p style={{ color: C.textMuted, maxWidth: 440, margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Four rotating specials that follow the seasons. When they&rsquo;re gone, they&rsquo;re gone until next year.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {seasonalSpecials.map((s) => (
              <div
                key={s.name}
                className="seasonal-card"
                style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: C.white, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <Image src={s.image}
                    alt={s.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} width={1200} height={800} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'inline-block', backgroundColor: `${C.strawberry}20`, color: C.strawberry, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.2rem 0.5rem', borderRadius: '3px', marginBottom: '0.6rem' }}>
                    Limited
                  </div>
                  <h3 style={{ color: C.textDark, fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{s.name}</h3>
                  <p style={{ color: C.textMuted, fontSize: '0.82rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR LAB — 4 Steps
          ═══════════════════════════════════════ */}
      <section
        id="laboratorio"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.chocolate }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p style={{ color: C.pistachio, fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Il Metodo
            </p>
            <h2 style={{ color: C.vanilla, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
              Dal Latte al Gelato
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  position: 'relative',
                  paddingTop: '3rem',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: [C.pistachio, C.strawberry, C.lemon, C.vanilla][i % 4],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: C.chocolate,
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ color: C.vanilla, fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ color: `${C.vanilla}99`, fontSize: '0.85rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATERING & EVENTS
          ═══════════════════════════════════════ */}
      <section
        id="catering"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.softWhite }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Image src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700&h=500&fit=crop"
              alt="Gelato catering cart at an outdoor event"
              style={{ width: '100%', borderRadius: '20px', display: 'block' }} width={1200} height={800} />
          </div>
          <div>
            <p style={{ color: C.strawberry, fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Catering &amp; Eventi
            </p>
            <h2 style={{ color: C.chocolate, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Il nostro carrello<br />al tuo evento
            </h2>
            <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Portiamo il nostro carrello vintage del 1962 con 8 gusti a scelta
              direttamente al tuo evento. Matrimoni, compleanni, aziendali, feste in villa.
              Il personale in divisa serve, racconta e crea l&rsquo;esperienza.
            </p>
            {[
              { label: 'Minimo', val: '50 persone' },
              { label: 'Gusti disponibili', val: '8 a tua scelta' },
              { label: 'Prezzo', val: 'da €8 a persona' },
              { label: 'Raggio', val: 'Milano + 80km' },
            ].map((d) => (
              <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: `1px solid ${C.vanilla}` }}>
                <span style={{ color: C.textMuted, fontSize: '0.85rem' }}>{d.label}</span>
                <span style={{ color: C.chocolate, fontWeight: 600, fontSize: '0.9rem' }}>{d.val}</span>
              </div>
            ))}
            <a
              href="#"
              style={{
                display: 'inline-block',
                marginTop: '2rem',
                backgroundColor: C.strawberry,
                color: C.white,
                padding: '1rem 2.25rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.strawberryLight)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.strawberry)}
            >
              Richiedi Preventivo via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: `${C.pistachio}15` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p style={{ color: C.pistachio, fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Cosa Dicono
          </p>
          <h2 style={{ color: C.chocolate, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
            Recensioni
          </h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="it" />
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.softWhite }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: C.strawberry, fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Domande Frequenti
            </p>
            <h2 style={{ color: C.chocolate, fontSize: '2.5rem', fontWeight: 800 }}>FAQ</h2>
          </div>
          <FAQAccordion items={faqs} verticalName="GelateriaOS" locale="it" />
        </div>
      </section>

      <Footer config={siteConfig} locale="it" />

      <WhatsAppCTA
        phoneNumber="+390212345678"
        message="Ciao! Vorrei sapere di più sulla Gelateria Paradiso"
        vertical="gelateriaos"
      />
    </div>
  )
}
