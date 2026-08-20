'use client'
import Image from 'next/image';

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VenueShowcase } from '@scala-sites/weddingos/components/venue-showcase'
import { WeddingPlanner } from '@scala-sites/weddingos/components/wedding-planner'
import { VendorDirectory } from '@scala-sites/weddingos/components/vendor-directory'

// --- MOCK DATA ---

const venues = [
  {
    id: '1',
    name: 'The Great Barn',
    photo: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
    capacityMin: 80,
    capacityMax: 220,
    styleTags: ['Rustic', 'Indoor', 'Classic'],
    priceFrom: 3800,
    currency: 'GBP',
    description:
      'Our centrepiece — a 17th-century timber-framed barn with original oak beams, exposed flint stone walls, and a vaulted ceiling hung with thousands of fairy lights. The Great Barn seats 220 for dinner and opens onto a private meadow at dusk. Every beam tells a story.',
    amenities: [
      'Original oak beam ceiling',
      'Fairy light canopy throughout',
      'Dedicated bridal prep room',
      'Commercial catering kitchen',
      'Hardwood dance floor',
      'Bar with local ales on tap',
      'Outdoor meadow access',
      'On-site parking (80 vehicles)',
    ],
    availabilityUrl: '#availability',
  },
  {
    id: '2',
    name: 'The Wildflower Meadow',
    photo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    capacityMin: 40,
    capacityMax: 150,
    styleTags: ['Outdoor', 'Rustic', 'Bohemian'],
    priceFrom: 1800,
    currency: 'GBP',
    description:
      'Four acres of managed wildflower meadow with a natural flint altar backdrop and an ancient oak canopy. Perfect for outdoor ceremonies from May through September. A bell tent village can be erected for guests who want to stay overnight in the meadow under the stars.',
    amenities: [
      'Wildflower ceremony altar',
      'Ancient oak canopy backdrop',
      'Bell tent overnight option',
      'Solar-powered sound system',
      'Fire pit circle',
      'Hay bale seating',
      'Sunset photography field',
      'Stargazing hour (summer)',
    ],
    availabilityUrl: '#availability',
  },
  {
    id: '3',
    name: 'The Grain Store',
    photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    capacityMin: 20,
    capacityMax: 60,
    styleTags: ['Rustic', 'Indoor', 'Intimate'],
    priceFrom: 1200,
    currency: 'GBP',
    description:
      'A lovingly converted Victorian grain store with whitewashed brick, original ironwork windows, and a mezzanine level perfect for a sweetheart table. The Grain Store is our most intimate space — for couples who want warmth and character without the scale.',
    amenities: [
      'Whitewashed exposed brick',
      'Original ironwork windows',
      'Mezzanine sweetheart level',
      'Vintage bar cart included',
      'String lights throughout',
      'Candle licence granted',
      'Adjacent cottage for bridal party',
      'Private walled garden',
    ],
    availabilityUrl: '#availability',
  },
  {
    id: '4',
    name: 'The Orchard',
    photo: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
    capacityMin: 60,
    capacityMax: 180,
    styleTags: ['Outdoor', 'Rustic', 'Romantic'],
    priceFrom: 2600,
    currency: 'GBP',
    description:
      'A Hampshire apple and pear orchard with blossom in spring, dappled shade in summer, and golden foliage in autumn. We erect a bespoke stretch-canvas canopy each season, creating a naturally sheltered dining space beneath the trees. Truly seasonal magic.',
    amenities: [
      'Seasonal stretch-canvas canopy',
      'Heritage apple & pear trees',
      'Festoon & lantern lighting',
      'Rustic trestle dining tables',
      'Local cider & prosecco bar',
      'Fire drummers option (£POA)',
      'Acoustic music stage area',
      'Adjacent barn for wet weather',
    ],
    availabilityUrl: '#availability',
  },
]

const vendors = [
  {
    id: '1',
    name: 'Hawthorn Photography',
    photo: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600',
    category: 'Photography' as const,
    rating: 5.0,
    reviewCount: 86,
    priceRange: 3 as const,
    description:
      'Documentary-style wedding photography capturing the real moments — laughter, tears, and wildly imperfect joy. Featured in Rock My Wedding and Brides Magazine three years running.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '2',
    name: 'The Hampshire Table',
    photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    category: 'Catering' as const,
    rating: 4.9,
    reviewCount: 112,
    priceRange: 3 as const,
    description:
      'Locally sourced Hampshire produce transformed into seasonal wedding feasts. From rustic sharing boards to elegant four-course dinners. Pig roasts, grazing tables, and late-night bacon butties our speciality.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '3',
    name: 'Wild & Woven Florals',
    photo: 'https://images.unsplash.com/photo-1490750967868-88df5691cc49?w=600',
    category: 'Florist' as const,
    rating: 5.0,
    reviewCount: 64,
    priceRange: 2 as const,
    description:
      'Wildflower and foraged floral design inspired by the Hampshire countryside. Loose, romantic arrangements in seasonal palettes — no forced hothouse blooms, only what nature offers at its best.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '4',
    name: 'Roots & Rhythm Band',
    photo: '',
    category: 'DJ' as const,
    rating: 4.8,
    reviewCount: 94,
    priceRange: 2 as const,
    description:
      'Six-piece acoustic band playing folk, Americana, and soul with a Hampshire heart. Ceremony strings, drinks reception, and dancefloor sets. The band that gets every generation on their feet.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '5',
    name: 'The Village Bakery',
    photo: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600',
    category: 'Cake' as const,
    rating: 4.9,
    reviewCount: 71,
    priceRange: 1 as const,
    description:
      'Handmade celebration cakes using Hampshire honey, hedgerow fruits, and locally milled flour. Naked cakes, semi-naked, and fully iced. Every cake is baked to order — no freezing, ever.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
  {
    id: '6',
    name: 'Golden Hour Films',
    photo: '',
    category: 'Videography' as const,
    rating: 4.9,
    reviewCount: 48,
    priceRange: 2 as const,
    description:
      'Cinematic wedding films with a warm, documentary sensibility. 4K with drone coverage of the estate. 5-minute highlight reel delivered within 3 weeks, feature film within 10.',
    portfolioUrl: '#portfolio',
    contactUrl: '#contact',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Harriet & Tom Ashford',
    rating: 5,
    text: 'The Great Barn in October with the leaves turning outside — there are no words for how beautiful it was. Our coordinator Emily kept every moving part on track while letting us actually enjoy our day. Oakwood Barn is something truly special.',
    date: '2026-05-20',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Rosa & Declan Murphy',
    rating: 5,
    text: 'We got married in the Wildflower Meadow in June and the photos look like a film. Our guests still talk about the fire pits and the stargazing hour. Every penny was worth it. Oakwood Barn makes magic feel easy.',
    date: '2026-06-30',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Zara & Sam Patel',
    rating: 5,
    text: 'We chose the Grain Store for our intimate wedding of 40 and it was perfect. Warm, characterful, and completely ours for the day. The Hampshire Table catering was exceptional — our guests are still talking about the sharing boards.',
    date: '2026-07-12',
    source: 'Hitched',
    verified: true,
  },
  {
    id: '4',
    author: 'Nell & Finn Callahan',
    rating: 5,
    text: 'Hawthorn Photography captured the day so honestly — the real laughs, the happy tears, the chaos of 180 people dancing in a centuries-old barn. Our wedding album is a masterpiece. Oakwood Barn delivers everything it promises and more.',
    date: '2026-08-02',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'How do I check date availability?',
    answer:
      'Use the "Check Date Availability" form on this page to submit your preferred date and venue space. Our bookings team will respond within 24 hours with a confirmed availability check and a no-obligation venue tour invitation. Dates are held for 7 days while you consider your options.',
  },
  {
    question: 'What is included in the venue hire?',
    answer:
      'Venue hire includes exclusive use of your chosen space, tables and chairs, our fairy light and festoon lighting rigs, a dedicated venue coordinator, bar setup (with your choice of licensed suppliers), parking, and access from 10:00 on the morning of your wedding to midnight. Additional hours can be arranged at a supplement.',
  },
  {
    question: 'Can we bring our own caterers?',
    answer:
      'Food and drink at Oakwood Barn must be provided by our approved partners — The Hampshire Table for catering and our licensed bar team. This ensures the quality our couples expect and compliance with our kitchen and licensing conditions. Complimentary tastings are included for all confirmed bookings.',
  },
  {
    question: 'Do you offer accommodation on site?',
    answer:
      'Yes. We have a 4-bedroom farmhouse (sleeps 8) and a converted cottage (sleeps 4) available for the wedding party. The Wildflower Meadow also has an optional bell tent village that can sleep up to 30 guests for an additional fee. We can recommend local B&Bs and hotels for other guests.',
  },
  {
    question: 'What are your seasonal packages?',
    answer:
      'We offer Spring Blossom (March–May), Summer Meadow (June–August), Autumn Harvest (September–November), and Winter Warmth (December–February) packages. Each is priced differently and tailored to what the estate looks like at its best that season — from orchard blossom to fireside winter receptions.',
  },
  {
    question: 'What is the deposit and cancellation policy?',
    answer:
      'A 20% deposit secures your date. The remaining balance is due 90 days before your wedding. Deposits are non-refundable but fully transferable to a new date within 24 months, subject to availability. We strongly recommend specialist wedding insurance, which we can suggest providers for.',
  },
]

const siteConfig = {
  name: 'Oakwood Barn',
  tagline: 'Rustic wedding venue in the heart of Hampshire',
  phone: '+44 1962 555 234',
  email: 'weddings@oakwoodbarn.example.com',
  address: 'Oakwood Farm, Itchen Valley, Hampshire SO21 1RQ',
  social: { instagram: '#oakwoodbarn', facebook: '#' },
}

// --- NAVBAR ---

function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(250,248,245,0.95)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #ddd5c8',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '1px', textDecoration: 'none' }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1rem',
              color: '#5c4a3a',
              letterSpacing: '-0.01em',
              fontFamily: '"Georgia", "Times New Roman", serif',
            }}
          >
            Oakwood Barn
          </span>
          <span
            style={{
              fontSize: '0.6rem',
              color: '#9c7e60',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Rustic Wedding Venue &middot; Hampshire
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Our Spaces', href: '#venues' },
            { label: 'Suppliers', href: '#suppliers' },
            { label: 'Reviews', href: '#reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#8a7060', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#availability"
            style={{
              padding: '9px 20px',
              background: '#5c4a3a',
              color: '#faf8f5',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Check Availability
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- SEASONAL PACKAGES ---

function SeasonalPackages() {
  const seasons = [
    {
      name: 'Spring Blossom',
      months: 'March – May',
      highlight: 'Orchard in blossom, wildflowers emerging, soft light',
      from: '£3,200',
      icon: '🌸',
    },
    {
      name: 'Summer Meadow',
      months: 'June – August',
      highlight: 'Full meadow bloom, longest days, outdoor ceremonies',
      from: '£4,800',
      icon: '☀',
      popular: true,
    },
    {
      name: 'Autumn Harvest',
      months: 'September – November',
      highlight: 'Golden foliage, harvest tables, warm barn evenings',
      from: '£3,600',
      icon: '🍂',
    },
    {
      name: 'Winter Warmth',
      months: 'December – February',
      highlight: 'Candlelight, log fires, star-filled winter skies',
      from: '£2,800',
      icon: '✦',
    },
  ]
  return (
    <section
      style={{ background: '#faf8f5', padding: '88px 24px', borderTop: '1px solid #ddd5c8' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#b09070',
            marginBottom: '12px',
          }}
        >
          Seasonal Packages
        </p>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#5c4a3a',
            fontFamily: '"Georgia", "Times New Roman", serif',
            marginBottom: '8px',
            letterSpacing: '-0.01em',
          }}
        >
          Every season, a different magic.
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#8a7060',
            fontSize: '1.05rem',
            marginBottom: '56px',
          }}
        >
          Oakwood Barn is breathtaking year-round — and priced to reflect that.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {seasons.map(({ name, months, highlight, from, icon, popular }) => (
            <div
              key={name}
              style={{
                padding: '32px 24px',
                border: popular ? '2px solid #5c4a3a' : '1px solid #ddd5c8',
                borderRadius: '12px',
                background: popular ? '#5c4a3a' : '#ffffff',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#9c7e60',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: '20px',
                  }}
                >
                  Most Popular
                </div>
              )}
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
              <h3
                style={{
                  fontFamily: '"Georgia", "Times New Roman", serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: popular ? '#faf8f5' : '#5c4a3a',
                  marginBottom: '4px',
                }}
              >
                {name}
              </h3>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: popular ? '#c8aa88' : '#b09070',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {months}
              </p>
              <p
                style={{
                  fontSize: '0.87rem',
                  color: popular ? 'rgba(250,248,245,0.7)' : '#8a7060',
                  lineHeight: 1.5,
                  marginBottom: '20px',
                }}
              >
                {highlight}
              </p>
              <p style={{ fontSize: '0.7rem', color: popular ? 'rgba(250,248,245,0.5)' : '#b09070', marginBottom: '4px' }}>
                From
              </p>
              <p
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: popular ? '#faf8f5' : '#5c4a3a',
                  fontFamily: '"Georgia", "Times New Roman", serif',
                }}
              >
                {from}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---

// ─── JSON-LD DATA ───────────────────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Oakwood Barn',
  description: 'Rustic wedding venue in the heart of Hampshire — 17th-century estate with four breathtaking spaces.',
  url: 'https://oakwoodbarn.example.com',
  telephone: '+44 1962 555 234',
  email: 'weddings@oakwoodbarn.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Oakwood Farm, Itchen Valley',
    addressLocality: 'Hampshire',
    postalCode: 'SO21 1RQ',
    addressCountry: 'GB',
  },
  priceRange: '£££',
  openingHours: 'Mo-Su 09:00-18:00',
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

// ─── CUSTOM WEDDING HERO ─────────────────────────────────────────────────────
function WeddingHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#1a0f0a',
      }}
    >
      {/* Background image */}
      <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&h=1200&fit=crop&q=85"
        alt="Oakwood Barn wedding venue"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'sepia(40%) brightness(0.55)',
        }} width={1200} height={800} />

      {/* Heavy vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 15%, rgba(15,8,4,0.55) 50%, rgba(10,5,2,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Warm sepia colour overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(120,60,20,0.18) 0%, rgba(40,15,5,0.45) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Falling petals CSS animation */}
      <style>{`
        @keyframes petalFall {
          0%   { transform: translateY(-30px) translateX(0px) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.7; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(110vh) translateX(40px) rotate(360deg); opacity: 0; }
        }
        @keyframes petalDrift {
          0%   { transform: translateY(-20px) translateX(0px) rotate(20deg); opacity: 0; }
          10%  { opacity: 0.6; }
          50%  { transform: translateY(50vh) translateX(-25px) rotate(180deg); }
          90%  { opacity: 0.3; }
          100% { transform: translateY(110vh) translateX(15px) rotate(400deg); opacity: 0; }
        }
        .petal {
          position: absolute;
          top: 0;
          border-radius: 50% 0 50% 0;
          background: rgba(212,175,55,0.55);
          pointer-events: none;
        }
        @keyframes weddingFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wedding-fade-up {
          opacity: 0;
          animation: weddingFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(212,175,55,0); }
        }
      `}</style>

      {/* Petals (12 small circles drifting at different speeds/positions) */}
      {[
        { left: '8%',  size: 6,  delay: 0,    dur: 7  },
        { left: '18%', size: 4,  delay: 1.2,  dur: 9  },
        { left: '28%', size: 8,  delay: 0.4,  dur: 6  },
        { left: '38%', size: 5,  delay: 2.1,  dur: 8  },
        { left: '48%', size: 7,  delay: 0.8,  dur: 10 },
        { left: '57%', size: 4,  delay: 3.0,  dur: 7  },
        { left: '65%', size: 6,  delay: 1.5,  dur: 9  },
        { left: '72%', size: 5,  delay: 0.2,  dur: 8  },
        { left: '80%', size: 8,  delay: 2.6,  dur: 6  },
        { left: '88%', size: 4,  delay: 1.0,  dur: 11 },
        { left: '93%', size: 6,  delay: 3.5,  dur: 8  },
        { left: '5%',  size: 5,  delay: 4.0,  dur: 9  },
      ].map((p, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationName: i % 2 === 0 ? 'petalFall' : 'petalDrift',
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        />
      ))}

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '120px 24px 80px',
          maxWidth: '860px',
          margin: '0 auto',
        }}
      >
        {/* Decorative rule */}
        <div
          className="wedding-fade-up"
          style={{ animationDelay: '0.1s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}
        >
          <div style={{ width: '48px', height: '1px', background: '#d4af37' }} />
          <span style={{ color: '#d4af37', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
            Hampshire &middot; Est. 1987
          </span>
          <div style={{ width: '48px', height: '1px', background: '#d4af37' }} />
        </div>

        {/* Venue name — elegant script feel via letter-spacing + weight */}
        <h1
          className="wedding-fade-up"
          style={{
            animationDelay: '0.25s',
            fontFamily: '"Georgia", "Palatino Linotype", "Book Antiqua", serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 400,
            color: '#faf6f0',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '12px',
            textShadow: '0 2px 40px rgba(0,0,0,0.6)',
          }}
        >
          Oakwood Barn
        </h1>

        {/* Tagline */}
        <p
          className="wedding-fade-up"
          style={{
            animationDelay: '0.4s',
            fontFamily: '"Georgia", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: '#d4af37',
            marginBottom: '28px',
            letterSpacing: '0.02em',
          }}
        >
          &ldquo;Your Day Starts Here&rdquo;
        </p>

        {/* Subtitle */}
        <p
          className="wedding-fade-up"
          style={{
            animationDelay: '0.55s',
            fontSize: '1.05rem',
            color: 'rgba(250,246,240,0.75)',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 auto 44px',
            fontWeight: 300,
          }}
        >
          A 17th-century Hampshire estate with four breathtaking spaces. Rustic charm,
          modern comfort, and a team who makes every detail feel effortless.
        </p>

        {/* Date counter / trust badge */}
        <div
          className="wedding-fade-up"
          style={{
            animationDelay: '0.65s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid rgba(212,175,55,0.45)',
            borderRadius: '40px',
            padding: '10px 24px',
            marginBottom: '44px',
            background: 'rgba(212,175,55,0.07)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ color: '#d4af37', fontSize: '1rem' }}>&#10022;</span>
          <span style={{ color: 'rgba(250,246,240,0.85)', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
            Over 400 Weddings Hosted &middot; Exclusive Hire
          </span>
          <span style={{ color: '#d4af37', fontSize: '1rem' }}>&#10022;</span>
        </div>

        {/* CTAs */}
        <div
          className="wedding-fade-up"
          style={{ animationDelay: '0.78s', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#availability"
            style={{
              padding: '15px 38px',
              background: '#d4af37',
              color: '#1a0f0a',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              animation: 'goldPulse 2.5s ease-in-out 2s infinite',
              transition: 'transform 0.2s',
            }}
          >
            Check Date Availability
          </a>
          <a
            href="#venues"
            style={{
              padding: '15px 38px',
              background: 'transparent',
              color: '#faf6f0',
              border: '1px solid rgba(250,246,240,0.4)',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Explore Our Spaces
          </a>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 10,
        }}
      >
        <span style={{ color: 'rgba(212,175,55,0.6)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)' }} />
      </div>
    </section>
  )
}

export default function WeddingBarnDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#5c4a3a',
    primaryHover: '#4a3828',
    accent: '#9c7e60',
    background: '#faf8f5',
    surface: '#ffffff',
    secondary: '#f0ece6',
    text: '#3a2e24',
    textMuted: '#8a7060',
    border: '#ddd5c8',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      <WeddingHero />

      <div id="venues">
        <VenueShowcase venues={venues} />
      </div>

      <SeasonalPackages />

      <div id="availability">
        <WeddingPlanner />
      </div>

      <div id="suppliers">
        <VendorDirectory vendors={vendors} currencySymbol="£" />
      </div>

      <div id="reviews">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      <FAQAccordion items={faqs} verticalName="WeddingOS — Barn" locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="441962555234"
        message="Hello, I'd like to check availability and arrange a tour of Oakwood Barn."
      />
    </div>
  )
}
