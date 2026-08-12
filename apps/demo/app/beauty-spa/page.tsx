'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { StylistBooking } from '@scala-sites/beautyos/components/stylist-booking'
import { ServiceMenu } from '@scala-sites/beautyos/components/service-menu'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DaySpa',
  name: 'Serenity Spa & Wellness',
  description: 'World-class massage, facials, and body rituals expertly crafted for complete renewal in Chelsea, London.',
  url: 'https://serenityspa.example.com',
  telephone: '+44 20 7351 4820',
  email: 'hello@serenityspa.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Cale Street',
    addressLocality: 'Chelsea, London',
    postalCode: 'SW3 3QU',
    addressCountry: 'GB',
  },
  openingHours: 'Mo-Su 09:00-20:00',
  priceRange: '£££',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: 5,
    bestRating: 5,
    worstRating: 1,
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do before my first visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend arriving 15 minutes early to complete a short wellness consultation and settle into our relaxation lounge with herbal tea. Avoid heavy meals 2 hours before body treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I wear during treatments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide plush robes, slippers, and disposable undergarments for all body treatments. You will only be uncovered in the area being treated, with full draping throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book the couples suite for two people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our couples suite accommodates two guests simultaneously with two therapists. We offer the Couples Retreat massage and can build bespoke duo packages on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking 48-72 hours ahead, especially for weekends and the couples suite. Same-day slots do appear — check availability via WhatsApp for last-minute openings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer gift vouchers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Gift vouchers are available for any treatment or monetary value. They make a beautiful gift and are valid for 12 months. Ask via WhatsApp or book online.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your cancellation policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cancellations made 24+ hours in advance are fully refunded. Within 24 hours, a 50% cancellation fee applies. No-shows are charged in full.',
      },
    },
  ],
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const therapists = [
  { id: '1', name: 'Isabelle Moreau', photo: '', role: 'Senior Massage Therapist', specialties: ['Hot Stone', 'Deep Tissue', 'Lymphatic Drainage'], rating: 5.0, reviewCount: 211, nextAvailable: 'Today 2:00 PM', slotsToday: 2 },
  { id: '2', name: 'Priya Nair', photo: '', role: 'Facial & Skin Specialist', specialties: ['HydraFacial', 'Microdermabrasion', 'LED Therapy'], rating: 4.9, reviewCount: 178, nextAvailable: 'Today 4:30 PM', slotsToday: 1 },
  { id: '3', name: 'Sophie Chen', photo: '', role: 'Body Treatment Expert', specialties: ['Aromatherapy', 'Body Wrap', 'Reflexology'], rating: 4.8, reviewCount: 134, nextAvailable: 'Tomorrow 10:00 AM' },
  { id: '4', name: 'Amara Osei', photo: '', role: 'Nail & Beauty Technician', specialties: ['Gel Manicure', 'Pedicure', 'Nail Art', 'Lash Lift'], rating: 4.9, reviewCount: 96, nextAvailable: 'Today 5:00 PM', slotsToday: 3 },
]

const services = [
  { id: '1', name: 'Signature Serenity Massage', category: 'Massages', duration: '60 min', price: 95, currency: 'GBP', popular: true, description: 'Our signature blend of Swedish and aromatherapy for full-body relaxation' },
  { id: '2', name: 'Hot Stone Ritual', category: 'Massages', duration: '90 min', price: 130, currency: 'GBP', popular: true, description: 'Warm volcanic stones melt tension and restore deep calm' },
  { id: '3', name: 'Deep Tissue Therapy', category: 'Massages', duration: '60 min', price: 105, currency: 'GBP', description: 'Targeted pressure for chronic tension and muscle recovery' },
  { id: '4', name: 'Couples Retreat', category: 'Massages', duration: '90 min', price: 220, currency: 'GBP', description: 'Side-by-side massage for two in our private suite' },
  { id: '5', name: 'HydraFacial MD', category: 'Facials', duration: '60 min', price: 145, currency: 'GBP', popular: true, description: 'Deep cleanse, extract, and hydrate in one transformative treatment' },
  { id: '6', name: 'Brightening Vitamin C Facial', category: 'Facials', duration: '50 min', price: 95, currency: 'GBP', description: 'Targets dullness, uneven tone, and fine lines' },
  { id: '7', name: 'LED Light Therapy Facial', category: 'Facials', duration: '45 min', price: 85, currency: 'GBP', description: 'Red + blue light for collagen boost and acne reduction' },
  { id: '8', name: 'Detox Seaweed Wrap', category: 'Body Treatments', duration: '75 min', price: 110, currency: 'GBP', description: 'Mineral-rich seaweed cocoon to purify and firm the skin' },
  { id: '9', name: 'Himalayan Salt Scrub', category: 'Body Treatments', duration: '45 min', price: 75, currency: 'GBP', description: 'Full-body exfoliation leaving skin silky smooth' },
  { id: '10', name: 'Reflexology Session', category: 'Body Treatments', duration: '45 min', price: 70, currency: 'GBP', description: 'Pressure-point foot therapy to restore whole-body balance' },
  { id: '11', name: 'Luxury Gel Manicure', category: 'Nails & Beauty', duration: '60 min', price: 55, currency: 'GBP', popular: true },
  { id: '12', name: 'Spa Pedicure', category: 'Nails & Beauty', duration: '75 min', price: 65, currency: 'GBP' },
  { id: '13', name: 'Lash Lift & Tint', category: 'Nails & Beauty', duration: '50 min', price: 75, currency: 'GBP' },
  { id: '14', name: 'Half-Day Sanctuary', category: 'Packages', duration: '240 min', price: 295, currency: 'GBP', description: 'Signature massage + HydraFacial + manicure + light lunch' },
  { id: '15', name: 'Bridal Radiance Package', category: 'Packages', duration: '300 min', price: 385, currency: 'GBP', popular: true, description: 'Pre-wedding body wrap, facial, manicure, pedicure, and lash lift' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600', alt: 'Tranquil treatment room with candles', category: 'Spaces', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600', alt: 'Facial treatment in progress', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600', alt: 'Relaxation lounge with robes', category: 'Spaces', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600', alt: 'Hot stone massage setup', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600', alt: 'Aromatherapy oils and botanicals', category: 'Products', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600', alt: 'Manicure station with soft lighting', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600', alt: 'Couples suite with rose petals', category: 'Spaces', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600', alt: 'Herbal compress massage', category: 'Treatments', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600', alt: 'Body scrub ritual', category: 'Products', width: 600, height: 400 },
]

const reviews = [
  { id: '1', author: 'Charlotte H.', rating: 5, text: 'The Hot Stone Ritual was the most relaxing 90 minutes of my life. Isabelle has magic hands and the room was pure heaven — soft music, rose scent, warm lighting. I left feeling completely renewed.', date: '2026-07-30', source: 'Google', verified: true },
  { id: '2', author: 'Natasha V.', rating: 5, text: 'Had the HydraFacial with Priya and my skin looked 5 years younger the next morning. She tailored the serums to my skin type perfectly. Already booked my second appointment.', date: '2026-07-18', source: 'Google', verified: true },
  { id: '3', author: 'Diana M.', rating: 5, text: 'Came in for the Bridal Package the week before my wedding. Sophie and Amara were exceptional — professional, calming, and genuinely invested in making me feel beautiful. Worth every penny.', date: '2026-07-02', source: 'Google', verified: true },
  { id: '4', author: 'Jess L.', rating: 5, text: 'The spa itself is stunning — feels like stepping into Bali in the middle of Chelsea. The Detox Seaweed Wrap was incredible. My skin was glowing for days afterward.', date: '2026-06-14', source: 'Google', verified: true },
  { id: '5', author: 'Olivia T.', rating: 4, text: 'Genuinely luxurious experience. Reflexology with Sophie completely sorted my tension headaches that I\'d had for weeks. Booking via WhatsApp was so easy — quick reply and confirmed within minutes.', date: '2026-06-05', source: 'Google', verified: true },
]

const faqs = [
  { question: 'What should I do before my first visit?', answer: 'We recommend arriving 15 minutes early to complete a short wellness consultation and settle into our relaxation lounge with herbal tea. Avoid heavy meals 2 hours before body treatments.' },
  { question: 'What do I wear during treatments?', answer: 'We provide plush robes, slippers, and disposable undergarments for all body treatments. You will only be uncovered in the area being treated, with full draping throughout.' },
  { question: 'Can I book the couples suite for two people?', answer: 'Absolutely. Our couples suite accommodates two guests simultaneously with two therapists. We offer the Couples Retreat massage and can build bespoke duo packages on request.' },
  { question: 'How far in advance should I book?', answer: 'We recommend booking 48-72 hours ahead, especially for weekends and the couples suite. Same-day slots do appear — check availability via WhatsApp for last-minute openings.' },
  { question: 'Do you offer gift vouchers?', answer: 'Yes! Gift vouchers are available for any treatment or monetary value. They make a beautiful gift and are valid for 12 months. Ask via WhatsApp or book online.' },
  { question: 'What is your cancellation policy?', answer: 'Cancellations made 24+ hours in advance are fully refunded. Within 24 hours, a 50% cancellation fee applies. No-shows are charged in full.' },
]

const siteConfig = {
  name: 'Serenity Spa & Wellness',
  tagline: 'A sanctuary of calm in the heart of Chelsea, London',
  phone: '+44 20 7351 4820',
  email: 'hello@yourdomain.com',
  address: '14 Cale Street, Chelsea, London SW3 3QU',
  social: { instagram: '#', facebook: '#' },
}

// ─────────────────────────────────────────────
// HERO — Zen Breathing
// ─────────────────────────────────────────────
const EARTH = {
  bg: '#fefcfa',
  sand: '#f5ede2',
  clay: '#c9956c',
  bark: '#8b6f5e',
  moss: '#9aaa8e',
  deep: '#2d2420',
  muted: '#9d8478',
  border: '#e8d9cf',
}

function SpaHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: EARTH.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 32px 60px',
      }}
    >
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1.00); opacity: 0.95; }
          50% { transform: scale(1.02); opacity: 1; }
        }
        @keyframes rippleExpand {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        @keyframes spaFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      {/* Water ripple gradient at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          background: `linear-gradient(to top, ${EARTH.sand} 0%, rgba(201,149,108,0.15) 40%, transparent 100%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Animated ripple rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: `1px solid rgba(201,149,108,${0.18 - i * 0.04})`,
            animation: `rippleExpand ${3 + i * 1.5}s ease-out infinite`,
            animationDelay: `${i * 1.2}s`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Subtle grain texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          pointerEvents: 'none',
          opacity: 0.4,
        }}
      />

      {/* Content: centered, breathing */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '640px',
          position: 'relative',
          zIndex: 2,
          animation: 'breathe 5s ease-in-out infinite',
        }}
      >
        {/* Top horizontal rule accent */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: EARTH.clay,
            margin: '0 auto 28px',
            transformOrigin: 'center',
            animation: 'lineGrow 1.2s ease 0.2s both',
            transform: 'scaleX(0)',
          }}
        />

        <p
          style={{
            color: EARTH.clay,
            fontSize: '11px',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            animation: 'spaFadeIn 0.9s ease 0.3s both',
            opacity: 0,
          }}
        >
          Chelsea, London &middot; Day Spa & Wellness
        </p>

        <h1
          style={{
            fontFamily: 'Georgia, "Palatino Linotype", serif',
            fontSize: 'clamp(38px, 5.5vw, 70px)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: EARTH.deep,
            letterSpacing: '-0.01em',
            marginBottom: '10px',
            animation: 'spaFadeIn 0.9s ease 0.45s both',
            opacity: 0,
          }}
        >
          Your Moment of
        </h1>
        <h1
          style={{
            fontFamily: 'Georgia, "Palatino Linotype", serif',
            fontSize: 'clamp(38px, 5.5vw, 70px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.2,
            color: EARTH.bark,
            letterSpacing: '-0.01em',
            marginBottom: '32px',
            animation: 'spaFadeIn 0.9s ease 0.55s both',
            opacity: 0,
          }}
        >
          Pure Calm.
        </h1>

        {/* Middle horizontal rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '32px',
            animation: 'spaFadeIn 0.9s ease 0.65s both',
            opacity: 0,
          }}
        >
          <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: EARTH.border }} />
          <span style={{ color: EARTH.clay, fontSize: '16px' }}>&#9675;</span>
          <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: EARTH.border }} />
        </div>

        <p
          style={{
            color: EARTH.muted,
            fontSize: '17px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '44px',
            animation: 'spaFadeIn 0.9s ease 0.72s both',
            opacity: 0,
          }}
        >
          World-class massage, facials, and body rituals &mdash; expertly crafted
          for complete renewal. A sanctuary of calm nestled in the heart of Chelsea.
        </p>

        {/* Pill stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '44px',
            animation: 'spaFadeIn 0.9s ease 0.8s both',
            opacity: 0,
          }}
        >
          {['4 Expert Therapists', '15 Signature Treatments', 'Private Couples Suite', 'Organic Products Only'].map((tag) => (
            <span
              key={tag}
              style={{
                background: EARTH.sand,
                border: `1px solid ${EARTH.border}`,
                color: EARTH.bark,
                padding: '8px 18px',
                borderRadius: '100px',
                fontSize: '12px',
                letterSpacing: '0.08em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'spaFadeIn 0.9s ease 0.88s both',
            opacity: 0,
          }}
        >
          <a
            href="#booking"
            style={{
              display: 'inline-block',
              background: EARTH.bark,
              color: EARTH.bg,
              padding: '14px 32px',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 400,
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = EARTH.clay)}
            onMouseLeave={e => (e.currentTarget.style.background = EARTH.bark)}
          >
            Book Your Treatment
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-block',
              border: `1px solid ${EARTH.border}`,
              color: EARTH.bark,
              padding: '14px 32px',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 300,
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = EARTH.bark)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = EARTH.border)}
          >
            Explore Treatments
          </a>
        </div>
      </div>

      {/* Bottom horizontal rule accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '1px',
          background: EARTH.clay,
          opacity: 0.5,
        }}
      />
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BeautySpaDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#8b6f5e',
    primaryHover: '#7a5f4e',
    secondary: '#fdf6f0',
    accent: '#c9956c',
    background: '#fefcfa',
    surface: '#fdf6f0',
    text: '#2d2420',
    textMuted: '#9d8478',
    border: '#e8d9cf',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Custom Hero */}
      <SpaHero />

      {/* Welcome banner */}
      <div className="py-10 px-6 text-center" style={{ background: 'var(--color-secondary)' }}>
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>
          Chelsea&apos;s Premier Day Spa
        </p>
        <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
          Welcome to Serenity
        </h2>
        <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          Nestled on a quiet Chelsea street, Serenity Spa offers an escape from the pace of London.
          From restorative massages to radiance-boosting facials, every treatment is personalised
          to nurture your mind, body, and spirit.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
          <span>4 Expert Therapists</span>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <span>15 Signature Treatments</span>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <span>Private Couples Suite</span>
          <span style={{ color: 'var(--color-border)' }}>|</span>
          <span>Organic Products Only</span>
        </div>
      </div>

      {/* Booking */}
      <div id="booking" style={{ background: 'var(--color-background)' }}>
        <StylistBooking stylists={therapists} />
      </div>

      {/* Services */}
      <div id="services" style={{ background: 'var(--color-surface)' }}>
        <ServiceMenu services={services} locale="en" />
      </div>

      {/* Gallery */}
      <div style={{ background: 'var(--color-background)' }}>
        <Gallery images={galleryImages} locale="en" columns={3} />
      </div>

      {/* Reviews */}
      <div style={{ background: 'var(--color-secondary)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-background)' }}>
        <FAQAccordion items={faqs} verticalName="BeautyOS — Spa" locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp CTA */}
      <WhatsAppCTA
        phoneNumber="442073514820"
        message="Hi, I'd like to book a treatment at Serenity Spa"
      />
    </div>
  )
}
