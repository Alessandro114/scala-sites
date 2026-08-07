'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { TeamGrid } from '@scala-sites/core/components/team-grid'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pristine — Luxury Home & Office Cleaning',
  description: 'Professional luxury cleaning for Knightsbridge, Chelsea, and Kensington. Fully vetted, insured, and trusted by 2,400+ London households.',
  url: 'https://pristine-cleaning.example.com',
  telephone: '+44 20 7589 4400',
  email: 'hello@pristine-cleaning.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Brompton Road',
    addressLocality: 'Knightsbridge',
    addressRegion: 'London',
    postalCode: 'SW3 1HX',
    addressCountry: 'GB',
  },
  priceRange: '££££',
  openingHours: 'Mo-Sa 07:00-20:00',
  areaServed: ['Knightsbridge', 'Chelsea', 'Kensington', 'Mayfair', 'Belgravia', 'Westminster'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to provide cleaning products or equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — our team arrives fully equipped with professional-grade, eco-conscious cleaning products and all necessary equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home during the clean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. Many of our regular clients provide a key or entry code. All Pristine cleaners are DBS-checked, fully insured, and bonded.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is your end of tenancy clean guaranteed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If your landlord or letting agent identifies any issues attributable to our clean within 72 hours, we will return free of charge.',
      },
    },
  ],
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: '🏠',
    name: 'Deep Home Clean',
    description: 'Floor-to-ceiling intensive cleaning for every room. Skirting boards, inside appliances, behind furniture — nothing missed.',
    duration: '4–6 hrs',
    from: 195,
  },
  {
    icon: '✨',
    name: 'Regular Maintenance Clean',
    description: 'Consistent weekly or fortnightly visits to keep your home in perfect order. Same cleaner every time.',
    duration: '2–3 hrs',
    from: 89,
  },
  {
    icon: '🪟',
    name: 'Window & Glass Clean',
    description: 'Interior and exterior window cleaning using purified water and streak-free technique. All heights covered.',
    duration: '1–2 hrs',
    from: 65,
  },
  {
    icon: '🛋️',
    name: 'Upholstery & Carpet Clean',
    description: 'Hot-water extraction cleaning for sofas, rugs, carpets, and mattresses. Allergen reduction guaranteed.',
    duration: '2–4 hrs',
    from: 120,
  },
  {
    icon: '🏡',
    name: 'End of Tenancy Clean',
    description: 'Comprehensive clean to secure your full deposit back. Guaranteed to meet landlord and letting agent standards.',
    duration: '5–8 hrs',
    from: 285,
  },
  {
    icon: '🎉',
    name: 'Post-Event Clean',
    description: 'Fast turnaround deep clean after parties, gatherings, or events. Same-day and next-morning slots available.',
    duration: '3–5 hrs',
    from: 175,
  },
]

const team = [
  {
    id: '1',
    name: 'Maria Santos',
    photo: '',
    role: 'Lead Cleaning Specialist',
    specialties: ['Deep Cleans', 'End of Tenancy', 'Luxury Homes'],
    bookable: true,
  },
  {
    id: '2',
    name: 'Elena Popescu',
    photo: '',
    role: 'Senior Cleaning Professional',
    specialties: ['Regular Maintenance', 'Carpet & Upholstery'],
    bookable: true,
  },
  {
    id: '3',
    name: 'Fatima Al-Rashid',
    photo: '',
    role: 'Specialist Cleaner',
    specialties: ['Post-Event', 'Window Cleaning', 'Kitchens'],
    bookable: true,
  },
  {
    id: '4',
    name: 'Joanna Wiśniewska',
    photo: '',
    role: 'Cleaning Professional',
    specialties: ['Maintenance Cleans', 'Eco Products', 'Offices'],
    bookable: true,
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', alt: 'Immaculate kitchen after deep clean', category: 'Kitchens', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600', alt: 'Sparkling bathroom tiles', category: 'Bathrooms', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', alt: 'Pristine living room', category: 'Living Rooms', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600', alt: 'Spotless oven and hob', category: 'Kitchens', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600', alt: 'Clean bedroom with fresh linen', category: 'Bedrooms', width: 600, height: 400 },
  { src: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600', alt: 'Steam cleaned carpet', category: 'Carpets', width: 600, height: 400 },
]

const reviews = [
  {
    id: '1',
    author: 'Georgina H.',
    rating: 5,
    text: 'Maria has been cleaning our Knightsbridge flat for six months now. The standard is extraordinary — she notices things I would never notice myself.',
    date: '2026-07-29',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'James T.',
    rating: 5,
    text: 'Used Pristine for an end of tenancy clean. Got my full deposit back with zero deductions — the team worked absolute miracles.',
    date: '2026-07-15',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Arabella C.',
    rating: 5,
    text: 'The carpet cleaning has transformed our living room. We had a 10-year-old rug that we were about to throw away — it now looks brand new.',
    date: '2026-07-03',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Sebastian N.',
    rating: 5,
    text: 'Booked a post-party clean for the morning after our housewarming. Arrived at 8am, finished by 11am — the flat was immaculate.',
    date: '2026-06-22',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Priya M.',
    rating: 5,
    text: 'Finally found a cleaning service that meets my standards. Elena is meticulous, reliable, and uses eco-friendly products at my request.',
    date: '2026-06-08',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'Do I need to provide cleaning products or equipment?',
    answer: 'No — our team arrives fully equipped with professional-grade, eco-conscious cleaning products and all necessary equipment. If you have specific product preferences (e.g., fragrance-free or hypoallergenic), simply let us know when booking.',
  },
  {
    question: 'Do I need to be home during the clean?',
    answer: 'Not at all. Many of our regular clients provide a key or entry code. All Pristine cleaners are DBS-checked, fully insured, and bonded. You will receive a completion photo report after every visit.',
  },
  {
    question: 'How do I book a recurring clean?',
    answer: 'Simply choose your preferred frequency (weekly, fortnightly, or monthly) when booking, and we will assign you the same cleaner each time. Recurring clients receive priority scheduling and a 10% loyalty discount.',
  },
  {
    question: 'What is included in a deep clean?',
    answer: 'Our deep clean covers every surface in every room: kitchen (inside oven, fridge, cupboards), bathrooms (limescale removal, grout scrubbing, mirror polishing), all floors, skirting boards, light switches, door handles, window sills, and behind/under all accessible furniture.',
  },
  {
    question: 'Is your end of tenancy clean guaranteed?',
    answer: 'Yes. If your landlord or letting agent identifies any issues attributable to our clean within 72 hours, we will return free of charge to address them. Our standard consistently meets major UK letting agency requirements.',
  },
  {
    question: 'What areas of London do you cover?',
    answer: 'We cover all Central London boroughs including Knightsbridge, Chelsea, Kensington, Mayfair, Belgravia, Westminster, South Kensington, and Notting Hill. For enquiries outside these areas, please message us via WhatsApp.',
  },
]

const siteConfig = {
  name: 'Pristine — Luxury Home & Office Cleaning',
  tagline: 'Impeccable cleaning for London\'s finest homes',
  phone: '+44 20 7589 4400',
  email: 'hello@pristine-cleaning.example.com',
  address: '18 Brompton Road, Knightsbridge, London SW3 1HX',
  social: { instagram: '#', facebook: '#' },
}

const stats = [
  { value: '12,000+', label: 'Homes Cleaned' },
  { value: '4.97', label: 'Average Rating' },
  { value: '98%', label: 'Client Retention' },
  { value: '8 yrs', label: 'Serving London' },
]

// ─── Custom Hero — Sparkle Clean ─────────────────────────────────────────────

function SparkleHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* CSS animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-12px) rotate(180deg); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #0d2137 0%, #10b981 40%, #0d2137 60%, #10b981 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .sparkle-dot {
          animation: sparkleFloat 3s ease-in-out infinite;
        }
        .hero-fadein { animation: fadeSlideUp 0.7s ease both; }
        .hero-fadein-d1 { animation: fadeSlideUp 0.7s 0.15s ease both; }
        .hero-fadein-d2 { animation: fadeSlideUp 0.7s 0.3s ease both; }
        .hero-fadein-d3 { animation: fadeSlideUp 0.7s 0.45s ease both; }
        .hero-fadein-d4 { animation: fadeSlideUp 0.7s 0.6s ease both; }
      `}</style>

      {/* Diagonal split — left slightly warm grey, right pure white */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(108deg, #f0f4f2 0%, #f0f4f2 44%, #ffffff 44%)',
          zIndex: 0,
        }}
      />

      {/* Subtle elevation layers — layered white cards behind content */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '3%',
          width: '36%',
          height: '80%',
          background: '#ffffff',
          borderRadius: '32px',
          boxShadow: '0 4px 40px rgba(16,185,129,0.07), 0 1px 3px rgba(0,0,0,0.04)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '14%',
          left: '6%',
          width: '30%',
          height: '68%',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 8px 60px rgba(16,185,129,0.09), 0 2px 8px rgba(0,0,0,0.05)',
          zIndex: 2,
        }}
      />

      {/* Floating sparkle dots */}
      {[
        { top: '15%', left: '42%', size: 10, delay: '0s', color: '#10b981' },
        { top: '28%', left: '38%', size: 6, delay: '0.8s', color: '#34d399' },
        { top: '62%', left: '44%', size: 8, delay: '1.5s', color: '#10b981' },
        { top: '72%', left: '39%', size: 5, delay: '0.4s', color: '#6ee7b7' },
        { top: '20%', right: '12%', size: 7, delay: '1.1s', color: '#10b981' },
        { top: '78%', right: '18%', size: 9, delay: '0.6s', color: '#34d399' },
      ].map((dot, i) => (
        <div
          key={i}
          className="sparkle-dot"
          style={{
            position: 'absolute',
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            backgroundColor: dot.color,
            zIndex: 3,
            animationDelay: dot.delay,
          }}
        />
      ))}

      {/* Sparkle icon (✦) floating at diagonal intersection */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '43%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2.5rem',
          color: '#10b981',
          zIndex: 4,
          filter: 'drop-shadow(0 0 12px rgba(16,185,129,0.5))',
        }}
        className="sparkle-dot"
      >
        ✦
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '120px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: Image stack with before/after depth */}
        <div style={{ position: 'relative', height: '520px' }}>
          {/* Back card — "before" implied slightly greyed */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '20px',
              right: '-20px',
              bottom: '-20px',
              borderRadius: '24px',
              overflow: 'hidden',
              filter: 'saturate(0.4) brightness(0.9)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
              alt="Before — kitchen before deep clean"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Front card — "after" bright and vivid */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: '30px',
              bottom: '30px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 64px rgba(16,185,129,0.15), 0 4px 20px rgba(0,0,0,0.1)',
              border: '3px solid rgba(255,255,255,0.9)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt="After — immaculate kitchen after deep clean"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.05) saturate(1.1)' }}
            />
            {/* "After" badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: '#10b981',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: '20px',
              }}
            >
              After ✦
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <p
            className="hero-fadein"
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#10b981',
              marginBottom: '16px',
            }}
          >
            Luxury Cleaning · Knightsbridge, London
          </p>

          <h1
            className="hero-fadein-d1"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#0d2137',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            London&rsquo;s Standard
            <br />
            for{' '}
            <span className="shimmer-text">Immaculate</span>
            <br />
            Living
          </h1>

          <p
            className="hero-fadein-d2"
            style={{
              fontSize: '1.0625rem',
              color: '#5d7a8a',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '440px',
            }}
          >
            Professional luxury cleaning for Knightsbridge, Chelsea, and Kensington.
            Fully vetted, DBS-checked, and trusted by 2,400+ London households.
          </p>

          {/* Trust chips */}
          <div
            className="hero-fadein-d3"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}
          >
            {['DBS-Checked', 'Eco Products', 'Same Cleaner', 'Insured'].map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#10b981',
                  background: '#f0fdf8',
                  border: '1px solid #a7f3d0',
                  padding: '5px 14px',
                  borderRadius: '20px',
                }}
              >
                ✓ {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="hero-fadein-d4"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <a
              href="#booking"
              style={{
                display: 'inline-block',
                padding: '15px 32px',
                background: '#10b981',
                color: '#ffffff',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(16,185,129,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(16,185,129,0.3)'
              }}
            >
              Book a Clean
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-block',
                padding: '15px 32px',
                background: 'transparent',
                color: '#0d2137',
                border: '1.5px solid #c8dce8',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Our Services
            </a>
          </div>

          {/* Social proof pill */}
          <div
            className="hero-fadein-d4"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '28px',
              padding: '10px 18px',
              background: '#ffffff',
              borderRadius: '40px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              border: '1px solid #e8f5f0',
            }}
          >
            <div style={{ display: 'flex', gap: '-4px' }}>
              {['G', 'A', 'P', 'S'].map((l, i) => (
                <div
                  key={i}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `hsl(${i * 40 + 140}, 55%, 60%)`,
                    border: '2px solid #fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginLeft: i > 0 ? '-8px' : 0,
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span style={{ fontSize: '0.82rem', color: '#5d7a8a', fontWeight: 500 }}>
              <strong style={{ color: '#0d2137' }}>2,400+</strong> homes cleaned
            </span>
            <span style={{ color: '#f59e0b', fontSize: '0.8rem' }}>★ 4.97</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CleanShowcase() {
  const theme = createCustomTheme('minimal', {
    primary: '#1a5276',
    primaryHover: '#154360',
    secondary: '#eaf4fb',
    accent: '#10b981',
    background: '#f8fffe',
    surface: '#ffffff',
    text: '#0d2137',
    textMuted: '#5d7a8a',
    border: '#c8dce8',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* Hero */}
      <SparkleHero />

      {/* Trust bar */}
      <div style={{ background: '#0d2137', padding: '18px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '0.875rem', fontWeight: 500, color: '#fff' }}>
          <span>DBS-Checked Cleaners</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Fully Insured &amp; Bonded</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Eco-Friendly Products</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Same Cleaner Every Visit</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" style={{ padding: '80px 24px', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#10b981', marginBottom: '10px' }}>
              What We Offer
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '14px' }}>
              Every Clean, Done Properly
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto', fontSize: '1.0625rem', lineHeight: 1.65 }}>
              Six specialist services designed around London homes. Transparent pricing, no hidden costs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {services.map(s => (
              <div key={s.name} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 8px 32px rgba(16,185,129,0.12)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = 'none'
                  el.style.transform = 'none'
                }}
              >
                <div style={{ fontSize: '2.25rem', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{s.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>{s.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '14px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{s.duration}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981' }}>From £{s.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <div style={{ background: 'var(--color-secondary)' }}>
        <Gallery images={galleryImages} locale="en" columns={3} />
      </div>

      {/* Team */}
      <div style={{ background: 'var(--color-surface)' }}>
        <TeamGrid members={team} locale="en" />
      </div>

      {/* Trust Stats */}
      <section style={{ padding: '72px 24px', background: '#0d2137' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
            London Trusts Pristine
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '52px', fontSize: '1rem' }}>
            Eight years of cleaning London&apos;s finest homes — the numbers speak for themselves.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {stats.map(st => (
              <div key={st.label}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#10b981', lineHeight: 1 }}>{st.value}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section id="booking" style={{ padding: '80px 24px', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '10px' }}>
            Book Your Clean
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Secure your slot online in under two minutes. We confirm within the hour.
          </p>
        </div>
        <BookingWidget
          locale="en"
          showGuestCount={false}
          vertical="cleanOS"
          accentColor="#10b981"
          socialProof={{ count: 12000, label: 'homes cleaned across London' }}
        />
      </section>

      {/* Reviews */}
      <div style={{ background: 'var(--color-secondary)' }}>
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--color-background)' }}>
        <FAQAccordion items={faqs} locale="en" />
      </div>

      {/* Footer */}
      <Footer config={siteConfig} locale="en" />

      {/* WhatsApp */}
      <WhatsAppCTA
        phoneNumber="442075894400"
        message="Hi, I'd like to book a cleaning service with Pristine"
      />
    </div>
  )
}
