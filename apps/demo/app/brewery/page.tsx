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
  copper: '#b87333',
  copperLight: '#d4945a',
  copperPale: '#e8b98a',
  charcoal: '#1c1c1c',
  charcoalMid: '#252525',
  charcoalLight: '#313131',
  steel: '#3a3a3a',
  steelLight: '#4d4d4d',
  amber: '#f59e0b',
  amberLight: '#fbbf24',
  cream: '#fdf6e3',
  creamDark: '#f0e6c8',
  textMuted: '#9a8a70',
  warmWhite: '#fefaf0',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: 'Iron Gate Brewery',
  description: 'Independent craft brewery — 12 taps, taproom, tours',
  url: 'https://irongatebrew.example.com',
  locale: 'en',
  vertical: 'breweryos',
  theme: 'industrial',
  branding: { primaryColor: C.charcoal, accentColor: C.copper },
  contact: {
    phone: '+44 20 7946 0998',
    email: 'tap@irongatebrew.com',
    whatsapp: '+442079460998',
    address: '12 Maltby Street, London SE1 3PA',
    coordinates: { lat: 51.4988, lng: -0.0779 },
  },
  social: {
    instagram: 'irongatebrew',
    facebook: 'https://facebook.com/irongatebrew',
  },
  seo: {
    title: 'Iron Gate Brewery | 12 Beers on Tap',
    description: 'Craft brewery and taproom in London SE1. 12 rotating taps, tours, beer club.',
  },
}

// ─────────────────────────────────────────────
// BEERS ON TAP
// ─────────────────────────────────────────────
interface Beer {
  name: string
  style: string
  abv: number
  ibu: number
  desc: string
  color: string
  tags?: string[]
  seasonal?: boolean
}

const beersOnTap: Beer[] = [
  {
    name: 'Iron Fist IPA',
    style: 'West Coast IPA',
    abv: 6.8,
    ibu: 65,
    desc: 'Centennial, Citra, Mosaic hops. Resinous pine, grapefruit, dry bitter finish.',
    color: '#e8a020',
    tags: ['Bestseller'],
  },
  {
    name: 'Midnight Stout',
    style: 'Imperial Stout',
    abv: 9.2,
    ibu: 50,
    desc: 'Cold-brew coffee, dark chocolate, vanilla. Full body, velvety finish.',
    color: '#1a0d04',
  },
  {
    name: 'Copper Lager',
    style: 'Munich-Style Lager',
    abv: 4.8,
    ibu: 18,
    desc: 'Crystal clear, toasted malt, soft bitterness. Brewed with imported Hallertau.',
    color: C.copper,
    tags: ['Year-Round'],
  },
  {
    name: 'Gate Street Pale',
    style: 'American Pale Ale',
    abv: 5.2,
    ibu: 38,
    desc: 'Galaxy and Amarillo. Tropical fruit, light caramel, easy-drinking.',
    color: '#f0c050',
    tags: ['Session'],
  },
  {
    name: 'Pêche Sauvage',
    style: 'Fruited Sour',
    abv: 5.4,
    ibu: 8,
    desc: 'Kettle sour with peach purée. Bright acidity, stone fruit, refreshing tartness.',
    color: '#f4a07a',
    seasonal: true,
    tags: ['Seasonal'],
  },
  {
    name: 'Smokehouse Porter',
    style: 'Baltic Porter',
    abv: 7.5,
    ibu: 35,
    desc: 'Beechwood smoked malt, toffee, licorice root. Cold fermented at lager temps.',
    color: '#2d1a08',
  },
  {
    name: 'Haze Maze',
    style: 'New England IPA',
    abv: 7.0,
    ibu: 25,
    desc: 'Unfiltered, pillowy soft. Juicy tropical: mango, pineapple, passionfruit.',
    color: '#e0aa30',
    tags: ['Hazy'],
  },
  {
    name: 'Wheat Street Weisse',
    style: 'Hefeweizen',
    abv: 5.0,
    ibu: 14,
    desc: 'Bavarian yeast, banana and clove aromatics. Cloudy gold, light body.',
    color: '#f0d080',
  },
  {
    name: 'Wild Ferment #7',
    style: 'Mixed Ferm. Saison',
    abv: 6.2,
    ibu: 22,
    desc: 'Barrel-aged 14 months, Brett character, lemon, hay, funk. Complex.',
    color: '#c8aa60',
    tags: ['Limited'],
    seasonal: true,
  },
  {
    name: 'Black Sheep Stout',
    style: 'Oatmeal Stout',
    abv: 5.8,
    ibu: 30,
    desc: 'Silky from oats, roasted barley, espresso notes. Lower ABV than it tastes.',
    color: '#180e06',
  },
  {
    name: 'Summer Session',
    style: 'Session Lager',
    abv: 3.8,
    ibu: 12,
    desc: 'Light, crisp, lime zest, barely-there bitterness. Built for sunshine.',
    color: '#f8e080',
    tags: ['Low ABV'],
    seasonal: true,
  },
  {
    name: 'Red Gate Red Ale',
    style: 'Irish Red Ale',
    abv: 5.5,
    ibu: 28,
    desc: 'Caramel malt backbone, toffee, subtle earthiness. Copper-coloured and comforting.',
    color: '#b84020',
  },
]

const breweryTours = [
  {
    name: 'Brew Day Tour',
    desc: 'Join the team on an active brew day. See the mash tun, the fermenters, the cold room. Includes a flight of 4 beers. 90 minutes.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1559818438-7b4f2f4e4d3c?w=600&h=400&fit=crop',
    freq: 'Every Saturday 11am',
    spots: 12,
  },
  {
    name: 'Tasting Masterclass',
    desc: 'A guided flight of 8 beers with our head brewer. Off-flavour training, style education, food pairing. 2 hours.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=600&h=400&fit=crop',
    freq: 'First Sunday of month',
    spots: 8,
  },
  {
    name: 'Private Group Experience',
    desc: 'Exclusive brewery access for 10–30 guests. Custom beer selection, private pouring, food platters, and a tour of the brew house.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?w=600&h=400&fit=crop',
    freq: 'Any day by arrangement',
    spots: 30,
  },
]

const events = [
  { date: 'Aug 16', title: 'IPA Showcase', desc: '8 IPAs on tap for one night only — West Coast, East Coast, Hazy, British. Side by side.', price: 45 },
  { date: 'Aug 23', title: 'Homebrewers Meetup', desc: 'Bring your homebrew for community tasting. Meet professional brewers, share techniques.', price: 0 },
  { date: 'Sep 06', title: 'Oktoberfest Kick-Off', desc: 'Lederhosen optional. Maibocks, Märzens, Weizens. Live German folk set at 7pm.', price: 15 },
  { date: 'Sep 20', title: 'Barrel Night', desc: 'Annual release of our barrel-aged series. 6 bottles, prestige flight, cheese pairings.', price: 75 },
]

const foodMenu = [
  { name: 'Beer Pretzel Board', desc: 'Soft pretzels, mustard butter, smoked cheese dip', price: 12 },
  { name: 'Beer-Battered Fish Tacos', desc: '3 soft tacos, IPA batter, slaw, chipotle mayo', price: 16 },
  { name: 'Taproom Burger', desc: '6oz beef, aged cheddar, pickles, stout onions, brioche', price: 15 },
  { name: 'Charcuterie Board', desc: 'Cured meats, pickled veg, mustard, sourdough', price: 18 },
  { name: 'Nachos', desc: 'Tortilla chips, beer cheese, jalapeños, pico de gallo', price: 13 },
  { name: 'Stout Brownie', desc: 'Dense, fudgy, with a scoop of vanilla, Midnight Stout reduction', price: 8 },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Rob K.',
    rating: 5,
    text: "The Haze Maze is genuinely one of the best NEIPAs I've had outside of Vermont. And I've been to Vermont specifically for beer. Iron Gate is the real deal.",
    date: '2026-08-01',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Fiona D.',
    rating: 5,
    text: "Did the Brew Day Tour — three hours later I'm considering quitting my job to become a brewer. The team is passionate, the beer is exceptional, the space is incredible.",
    date: '2026-07-26',
    source: 'tripadvisor',
    verified: true,
  },
  {
    id: '3',
    author: 'Max T.',
    rating: 5,
    text: 'The Wild Ferment series is the most interesting thing happening in London craft beer right now. I waited 14 months for this release and it delivered.',
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'Kezia O.',
    rating: 5,
    text: 'Birthday party in the taproom for 25 people. They did a custom tap takeover, personalised pints, and the food was brilliant. Organised everything via WhatsApp in 48 hours.',
    date: '2026-08-04',
    source: 'google',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  {
    question: 'Can I buy canned/bottled beer to take home?',
    answer: 'Yes — we sell our core range in cans and limited-edition bottles at the taproom. We also run a mixed-case delivery service. Order via WhatsApp.',
  },
  {
    question: 'Do you serve food?',
    answer: 'Yes — a focused taproom menu of snacks and mains designed to pair with our beers. Food is served until 9pm on weekdays and 10pm on weekends.',
  },
  {
    question: 'What are the taproom opening hours?',
    answer: 'Wednesday–Thursday 4pm–10pm | Friday 3pm–11pm | Saturday 12pm–11pm | Sunday 12pm–8pm | Closed Monday–Tuesday.',
  },
  {
    question: 'Can I book the taproom for a private event?',
    answer: 'Yes — we close the taproom for exclusive events from Monday to Tuesday and for daytime slots. Minimum spend £1,200. Contact us on WhatsApp for a bespoke package.',
  },
  {
    question: 'Do you have non-alcoholic options?',
    answer: 'Always — we brew a non-alcoholic version of our Copper Lager (<0.5% ABV) year-round. We also have soft drinks, sparkling water, and specialty coffee.',
  },
  {
    question: 'Is the taproom dog-friendly?',
    answer: 'Outside seating is fully dog-friendly. We ask that dogs stay outside the main taproom floor, but we have a covered outdoor terrace that works in most weather.',
  },
]

const breweryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Brewery',
  name: 'Iron Gate Brewery',
  description: 'Independent craft brewery and taproom with 12 rotating beers on tap.',
  url: 'https://irongatebrew.example.com',
  telephone: '+44 20 7946 0998',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Maltby Street',
    addressLocality: 'London',
    postalCode: 'SE1 3PA',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.4988, longitude: -0.0779 },
  openingHours: ['We-Th 16:00-22:00', 'Fr 15:00-23:00', 'Sa-Su 12:00-22:00'],
}

const breweryFaqJsonLd = {
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
        backgroundColor: `${C.charcoal}f2`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.copper}33`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          style={{
            color: C.cream,
            fontSize: '0.85rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          Iron Gate <span style={{ color: C.copper }}>Brewery</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['On Tap', 'Tours', 'Events', 'Taproom'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              style={{ color: C.textMuted, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.copper)}
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

export default function BreweryPage() {
  return (
    <div style={{ backgroundColor: C.charcoal, color: C.cream }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breweryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breweryFaqJsonLd) }} />

      <style>{`
        @keyframes hopBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          30% { transform: translateY(-16px) rotate(10deg); }
          60% { transform: translateY(-8px) rotate(-5deg); }
        }
        @keyframes tapPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,115,51,0.6); }
          50% { box-shadow: 0 0 0 12px rgba(184,115,51,0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grainFlow {
          0%, 100% { background-position: 0 0; }
          50% { background-position: 40px 40px; }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .hop-bounce { animation: hopBounce 2s ease-in-out infinite; }
        .hop-bounce:nth-child(2) { animation-delay: 0.3s; }
        .hop-bounce:nth-child(3) { animation-delay: 0.6s; }
        .tap-pulse { animation: tapPulse 2.5s ease-in-out infinite; }
        .beer-card:hover { border-color: rgba(184,115,51,0.5) !important; transform: translateY(-3px); }
        .tour-card:hover img { transform: scale(1.05); }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Industrial Craft
          ═══════════════════════════════════════ */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden pt-16"
        style={{ backgroundColor: C.charcoal }}
      >
        {/* Steel texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 60px,
                rgba(184,115,51,0.03) 60px,
                rgba(184,115,51,0.03) 61px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 60px,
                rgba(184,115,51,0.02) 60px,
                rgba(184,115,51,0.02) 61px
              )
            `,
          }}
        />
        {/* Copper glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%',
            right: '-5%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${C.copper}22 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full relative z-10">
          {/* Left */}
          <div>
            {/* Tap counter — animated pulse */}
            <div
              className="fade-up inline-flex items-center gap-3 mb-8 px-4 py-2.5 rounded"
              style={{
                border: `1px solid ${C.copper}55`,
                backgroundColor: `${C.copper}11`,
              }}
            >
              <span
                className="tap-pulse"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: C.copper,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span style={{ color: C.copper, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                12 beers on tap today
              </span>
            </div>

            <h1
              className="fade-up d1"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 900,
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                color: C.cream,
              }}
            >
              Iron<br />
              <span style={{ color: C.copper, WebkitTextStroke: '2px', WebkitTextFillColor: C.copper }}>Gate</span><br />
              <span style={{ fontSize: '55%', letterSpacing: '-0.02em', color: `${C.cream}88` }}>Brewery</span>
            </h1>

            <p
              className="fade-up d2"
              style={{ color: C.textMuted, fontSize: '0.95rem', lineHeight: 1.9, maxWidth: 440, marginBottom: '2.5rem' }}
            >
              Independent. Unfiltered. Brewed with obsession in Bermondsey
              since 2015. Twelve beers on tap every day, brewed in the same
              building you&rsquo;re standing in.
            </p>

            {/* Hop bounce icons */}
            <div className="fade-up d3 flex items-end gap-3 mb-10 h-14">
              {['🌿', '🌿', '🌿'].map((icon, i) => (
                <span
                  key={i}
                  className="hop-bounce"
                  style={{
                    fontSize: '1.6rem',
                    display: 'inline-block',
                    animationDelay: `${i * 0.3}s`,
                    filter: 'drop-shadow(0 4px 8px rgba(184,115,51,0.3))',
                  }}
                >
                  {icon}
                </span>
              ))}
              <span style={{ color: C.textMuted, fontSize: '0.8rem', marginLeft: '0.5rem', lineHeight: 1 }}>
                &larr; 100% whole hops
              </span>
            </div>

            <div className="fade-up d4 flex flex-wrap gap-4">
              <a
                href="#on-tap"
                style={{
                  backgroundColor: C.copper,
                  color: C.cream,
                  padding: '1rem 2.25rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  borderRadius: '2px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.copperLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.copper)}
              >
                What&rsquo;s on Tap
              </a>
              <a
                href="#tours"
                style={{
                  border: `1px solid ${C.steelLight}`,
                  color: C.cream,
                  padding: '1rem 2.25rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent',
                  borderRadius: '2px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.copper; e.currentTarget.style.color = C.copper }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.steelLight; e.currentTarget.style.color = C.cream }}
              >
                Book a Tour
              </a>
            </div>
          </div>

          {/* Right: Brewery photo */}
          <div className="relative h-[500px] overflow-hidden rounded-xl hidden md:block">
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=1100&fit=crop&q=90"
              alt="Iron Gate Brewery taproom with copper fermenters"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} width={1200} height={800} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to right, ${C.charcoal}88, transparent 50%)`,
              }}
            />
            {/* Stats */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}
            >
              {[
                { val: '12', label: 'Taps' },
                { val: '2015', label: 'Founded' },
                { val: '200k', label: 'Pints/yr' },
                { val: '28', label: 'Recipes' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    backgroundColor: `${C.charcoal}e0`,
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${C.copper}33`,
                    borderRadius: '8px',
                    padding: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ color: C.copper, fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ color: C.textMuted, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BEERS ON TAP
          ═══════════════════════════════════════ */}
      <section
        id="on-tap"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.charcoalMid }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p style={{ color: C.copper, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Live Tap List
              </p>
              <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                On Tap Today
              </h2>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: `${C.copper}15`,
                border: `1px solid ${C.copper}44`,
                padding: '0.5rem 1rem',
                borderRadius: '4px',
              }}
            >
              <span
                className="tap-pulse"
                style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.copper, display: 'inline-block', flexShrink: 0 }}
              />
              <span style={{ color: C.copper, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>12/12 taps active</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {beersOnTap.map((beer, i) => (
              <div
                key={beer.name}
                className="beer-card"
                style={{
                  border: `1px solid ${C.steelLight}44`,
                  borderRadius: '8px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Tap number */}
                <span
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    color: `${C.textMuted}66`,
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                  }}
                >
                  TAP {String(i + 1).padStart(2, '0')}
                </span>
                {/* Beer colour swatch */}
                <div
                  style={{
                    width: 32,
                    height: 48,
                    borderRadius: '4px 4px 16px 16px',
                    backgroundColor: beer.color,
                    marginBottom: '1rem',
                    boxShadow: `0 4px 16px ${beer.color}44`,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <h3 style={{ color: C.cream, fontSize: '1rem', fontWeight: 700 }}>{beer.name}</h3>
                </div>
                <p style={{ color: C.copper, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {beer.style}
                </p>
                <p style={{ color: C.textMuted, fontSize: '0.78rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>{beer.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ color: C.amberLight, fontSize: '0.75rem', fontWeight: 700 }}>{beer.abv}% ABV</span>
                  <span style={{ color: C.textMuted, fontSize: '0.75rem' }}>{beer.ibu} IBU</span>
                  {beer.tags?.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: `${C.copper}22`,
                        color: C.copperPale,
                        fontSize: '0.58rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '3px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BREWERY TOURS
          ═══════════════════════════════════════ */}
      <section
        id="tours"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.charcoal }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p style={{ color: C.copper, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Behind the Scenes
            </p>
            <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Brewery Tours
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {breweryTours.map((tour) => (
              <div
                key={tour.name}
                className="tour-card"
                style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: C.charcoalMid, border: `1px solid ${C.steel}44` }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <Image src={tour.image}
                    alt={tour.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} width={1200} height={800} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: C.cream, fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{tour.name}</h3>
                  <p style={{ color: C.textMuted, fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{tour.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <p style={{ color: C.copper, fontSize: '1.1rem', fontWeight: 700 }}>£{tour.price}<span style={{ fontSize: '0.7rem', color: C.textMuted }}>/person</span></p>
                      <p style={{ color: C.textMuted, fontSize: '0.68rem', marginTop: '0.1rem' }}>{tour.freq} &middot; Max {tour.spots}</p>
                    </div>
                    <a
                      href="#"
                      style={{
                        backgroundColor: C.copper,
                        color: C.cream,
                        padding: '0.5rem 1.1rem',
                        fontSize: '0.72rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.copperLight)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.copper)}
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TAPROOM + FOOD + EVENTS SPLIT
          ═══════════════════════════════════════ */}
      <section
        id="taproom"
        className="py-24 md:py-32 px-6 md:px-16"
        style={{ backgroundColor: C.charcoalMid }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Food */}
          <div>
            <p style={{ color: C.copper, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Taproom Kitchen
            </p>
            <h2 style={{ color: C.cream, fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Food Menu
            </h2>
            {foodMenu.map((item) => (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1rem 0',
                  borderBottom: `1px solid ${C.steel}44`,
                  gap: '1rem',
                }}
              >
                <div>
                  <h4 style={{ color: C.cream, fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.2rem' }}>{item.name}</h4>
                  <p style={{ color: C.textMuted, fontSize: '0.78rem' }}>{item.desc}</p>
                </div>
                <span style={{ color: C.copper, fontWeight: 700, fontSize: '0.92rem', flexShrink: 0 }}>£{item.price}</span>
              </div>
            ))}
          </div>

          {/* Events */}
          <div>
            <p style={{ color: C.copper, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Upcoming
            </p>
            <h2 style={{ color: C.cream, fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Events
            </h2>
            {events.map((event) => (
              <div
                key={event.title}
                style={{
                  padding: '1.25rem 0',
                  borderBottom: `1px solid ${C.steel}44`,
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1rem',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    backgroundColor: C.copper,
                    color: C.cream,
                    padding: '0.35rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {event.date}
                </div>
                <div>
                  <h4 style={{ color: C.cream, fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.2rem' }}>{event.title}</h4>
                  <p style={{ color: C.textMuted, fontSize: '0.75rem', lineHeight: 1.5 }}>{event.desc}</p>
                </div>
                <span style={{ color: event.price === 0 ? '#7c9070' : C.amber, fontWeight: 700, fontSize: '0.88rem', flexShrink: 0 }}>
                  {event.price === 0 ? 'Free' : `£${event.price}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BEER CLUB
          ═══════════════════════════════════════ */}
      <section
        className="py-20 px-6 md:px-16 relative overflow-hidden"
        style={{ backgroundColor: C.copper }}
      >
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p style={{ color: C.charcoal, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>
              Members Only
            </p>
            <h2 style={{ color: C.charcoal, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              The Iron Gate<br />Beer Club
            </h2>
            <p style={{ color: `${C.charcoal}cc`, fontSize: '0.9rem', lineHeight: 1.8 }}>
              Monthly mixed case (12 cans) delivered to your door. First access to
              limited and seasonal releases. 15% off at the taproom. Invite to members-only events.
            </p>
          </div>
          <div>
            {[
              { tier: 'Core', price: '£35/mo', perks: '12 cans, free delivery, 10% taproom discount' },
              { tier: 'Barrel', price: '£65/mo', perks: '18 cans incl. limited releases, 20% discount, exclusive events' },
              { tier: 'Founder', price: '£120/mo', perks: 'Full case, personalised selection, quarterly private tour' },
            ].map((tier) => (
              <div
                key={tier.tier}
                style={{
                  backgroundColor: `${C.charcoal}22`,
                  borderRadius: '8px',
                  padding: '1rem 1.25rem',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  border: `1px solid ${C.charcoal}33`,
                }}
              >
                <div>
                  <p style={{ color: C.charcoal, fontWeight: 900, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{tier.tier}</p>
                  <p style={{ color: `${C.charcoal}bb`, fontSize: '0.75rem', lineHeight: 1.4 }}>{tier.perks}</p>
                </div>
                <span style={{ color: C.charcoal, fontWeight: 900, fontSize: '1rem', flexShrink: 0 }}>{tier.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p style={{ color: C.copper, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            The Regulars
          </p>
          <h2 style={{ color: C.cream, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Reviews
          </h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: C.charcoalMid }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: C.copper, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Questions
            </p>
            <h2 style={{ color: C.cream, fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>FAQ</h2>
          </div>
          <FAQAccordion items={faqs} verticalName="BreweryOS" locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="+442079460998"
        message="Hey! I'd like to know more about Iron Gate Brewery"
        vertical="breweryos"
      />
    </div>
  )
}
