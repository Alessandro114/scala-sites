'use client'

import { useEffect, useRef, useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { ListingSearch } from '@scala-sites/propertyos/components/listing-search'
import { AgentCard } from '@scala-sites/propertyos/components/agent-card'
import { ValuationWidget } from '@scala-sites/propertyos/components/valuation-widget'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Kensington & Partners',
  description: 'Premium residential and commercial properties across London\'s most desirable neighbourhoods.',
  url: 'https://kensingtonpartners.example.com',
  telephone: '+44 20 7123 4567',
  email: 'hello@kensingtonpartners.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15 Mayfair Lane',
    addressLocality: 'London',
    postalCode: 'W1K 3QT',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5074,
    longitude: -0.1278,
  },
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
  priceRange: '£££',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: 3,
    bestRating: 5,
    worstRating: 1,
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to list a property with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our standard commission is 3% of the sale price for sellers. For buyers, our service is completely free. Rental listings are subject to one month\'s rent as commission.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to sell a property in London?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On average, our properties sell within 45 days — 30% faster than the market average. Luxury properties may take 60-90 days due to the smaller buyer pool.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help with property valuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Use our free valuation tool on this page for an instant estimate, or book a call for a detailed comparative market analysis prepared by our agents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help international buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. 40% of our clients are international. We guide you through the entire process including legal requirements, tax implications, and residency permits.',
      },
    },
  ],
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const listings = [
  { id: '1', title: 'Modern Penthouse with Terrace', address: '12 Kensington High Street, London', price: 1250000, currency: 'GBP', type: 'sale' as const, propertyType: 'Apartment', bedrooms: 3, bathrooms: 2, area: 180, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600', featured: true, viewsLast24h: 12 },
  { id: '2', title: 'Renovated Loft in Shoreditch', address: '23 Shoreditch High Street, London', price: 2200, currency: 'GBP', type: 'rent' as const, propertyType: 'Loft', bedrooms: 1, bathrooms: 1, area: 95, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600', viewsLast24h: 8 },
  { id: '3', title: 'Family Villa with Garden', address: '8 Richmond Park Road, Surrey', price: 680000, currency: 'GBP', type: 'sale' as const, propertyType: 'Villa', bedrooms: 4, bathrooms: 3, area: 320, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
  { id: '4', title: 'Studio near Camden', address: '33 Camden Passage, London', price: 1100, currency: 'GBP', type: 'rent' as const, propertyType: 'Apartment', bedrooms: 0, bathrooms: 1, area: 35, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600', viewsLast24h: 22 },
  { id: '5', title: 'Commercial Space — High Street', address: '55 Canary Wharf, London', price: 450000, currency: 'GBP', type: 'sale' as const, propertyType: 'Commercial', bedrooms: 0, bathrooms: 1, area: 120, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { id: '6', title: 'Elegant 2BR in Notting Hill', address: '22 Notting Hill Gate, London', price: 1800, currency: 'GBP', type: 'rent' as const, propertyType: 'Apartment', bedrooms: 2, bathrooms: 1, area: 85, areaUnit: 'm²', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600', featured: true },
]

const agents = [
  { id: '1', name: 'Julia Merchant', role: 'Senior Agent — Residential', photo: '', specialties: ['Luxury', 'Notting Hill', 'Shoreditch'], propertiesSold: 127, yearsExperience: 12, bio: 'Specializing in luxury residential properties across central London. Over 127 successful transactions with a focus on discerning international clients.', bookingUrl: '#' },
  { id: '2', name: 'Mark Ferretti', role: 'Commercial & Investment', photo: '', specialties: ['Commercial', 'Investment', 'Offices'], propertiesSold: 89, yearsExperience: 8, bio: 'Expert in commercial real estate and investment properties. Helping businesses find their perfect space and investors maximize returns.', bookingUrl: '#' },
  { id: '3', name: 'Sophie Coleman', role: 'Rentals Manager', photo: '', specialties: ['Rentals', 'Expats', 'Short-term'], propertiesSold: 215, yearsExperience: 6, bio: 'Dedicated to helping expats and professionals find the perfect rental in London. Fluent in English, Italian, and Spanish.', bookingUrl: '#' },
]

const reviews = [
  { id: '1', author: 'James & Sarah T.', rating: 5, text: 'Julia found us our dream apartment in Notting Hill within two weeks. Her knowledge of the market is exceptional. The whole process was seamless.', date: '2026-07-15', source: 'Google', verified: true },
  { id: '2', author: 'Daniel M.', rating: 5, text: 'Mark helped us find the perfect office space. Professional, responsive, and always available. Highly recommended for commercial properties.', date: '2026-06-20', source: 'Google', verified: true },
  { id: '3', author: 'Anna K.', rating: 5, text: 'As an expat, finding a rental in London seemed daunting. Sophie made it effortless. She understood exactly what I needed and found options I never would have discovered on my own.', date: '2026-05-10', source: 'Google', verified: true },
]

const faqs = [
  { question: 'How much does it cost to list a property with you?', answer: 'Our standard commission is 3% of the sale price for sellers. For buyers, our service is completely free. Rental listings are subject to one month\'s rent as commission.' },
  { question: 'How long does it take to sell a property in London?', answer: 'On average, our properties sell within 45 days — 30% faster than the market average. Luxury properties may take 60-90 days due to the smaller buyer pool.' },
  { question: 'Do you help with property valuation?', answer: 'Yes! Use our free valuation tool on this page for an instant estimate, or book a call for a detailed comparative market analysis prepared by our agents.' },
  { question: 'Can you help international buyers?', answer: 'Absolutely. 40% of our clients are international. We guide you through the entire process including legal requirements, tax implications, and residency permits.' },
]

const siteConfig = {
  name: 'Kensington & Partners',
  tagline: 'Your trusted partner in London real estate since 2010',
  phone: '+44 20 7123 4567',
  email: 'hello@yourdomain.com',
  address: '15 Mayfair Lane, London W1K 3QT',
  social: { instagram: '#', facebook: '#' },
}

// ─────────────────────────────────────────────
// FLOATING PROPERTY CARD
// ─────────────────────────────────────────────
interface FloatCardProps {
  title: string
  address: string
  price: string
  beds: number
  style: React.CSSProperties
  imageUrl: string
  delay?: string
}

function FloatCard({ title, address, price, beds, style, imageUrl, delay = '0s' }: FloatCardProps) {
  return (
    <div
      style={{
        position: 'absolute',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '12px',
        overflow: 'hidden',
        width: '220px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
        animation: `propFloat 6s ease-in-out infinite`,
        animationDelay: delay,
        ...style,
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: '100%', height: '110px', objectFit: 'cover', display: 'block' }}
      />
      <div style={{ padding: '12px 14px' }}>
        <p style={{ color: '#c9a84c', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
          {price}
        </p>
        <p style={{ color: '#f0f4f8', fontSize: '13px', fontWeight: 300, lineHeight: 1.3, marginBottom: '4px' }}>{title}</p>
        <p style={{ color: '#94a3b8', fontSize: '11px' }}>{address}</p>
        <div style={{ marginTop: '8px', display: 'flex', gap: '10px' }}>
          <span style={{ color: '#64748b', fontSize: '10px', letterSpacing: '0.1em' }}>{beds} BED</span>
          <span style={{ color: '#c9a84c', fontSize: '10px' }}>&#9679;</span>
          <span style={{ color: '#64748b', fontSize: '10px', letterSpacing: '0.1em' }}>FOR SALE</span>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function PropertyHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxOffset = scrollY * 0.35

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0d1421 0%, #0f1e35 40%, #0d1421 100%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        @keyframes propFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes statsPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      {/* Parallax background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1800&q=85"
          alt="London skyline"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            objectPosition: 'center top',
            opacity: 0.18,
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(30,58,95,0.6) 0%, transparent 65%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '120px 48px 80px',
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <div>
          <p
            style={{
              color: '#c9a84c',
              fontSize: '11px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              animation: 'fadeSlideUp 0.7s ease forwards',
            }}
          >
            Est. 2010 &middot; Mayfair, London
          </p>

          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(48px, 6vw, 88px)',
              fontWeight: 300,
              lineHeight: 0.92,
              color: '#f0f4f8',
              letterSpacing: '-0.02em',
              marginBottom: '28px',
              animation: 'fadeSlideUp 0.8s ease 0.1s both forwards',
              opacity: 0,
            }}
          >
            LONDON
            <br />
            <span style={{ color: '#c9a84c' }}>PROPERTY</span>
          </h1>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '440px',
              marginBottom: '40px',
              animation: 'fadeSlideUp 0.8s ease 0.2s both forwards',
              opacity: 0,
            }}
          >
            Premium residential and commercial properties across London's most desirable
            neighbourhoods. Expert guidance from search to completion.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '56px',
              animation: 'fadeSlideUp 0.8s ease 0.3s both forwards',
              opacity: 0,
            }}
          >
            <a
              href="#listings"
              style={{
                display: 'inline-block',
                background: '#c9a84c',
                color: '#0d1421',
                padding: '14px 32px',
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#b8943e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c9a84c')}
            >
              Browse Properties
            </a>
            <a
              href="#valuation"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#c9a84c',
                padding: '14px 32px',
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 300,
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'border-color 0.3s, color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#f0f4f8' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.color = '#c9a84c' }}
            >
              Free Valuation
            </a>
          </div>

          {/* Stats ribbon */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              borderTop: '1px solid rgba(201,168,76,0.2)',
              paddingTop: '24px',
              animation: 'fadeSlideUp 0.8s ease 0.4s both forwards',
              opacity: 0,
            }}
          >
            {[
              { value: '£2.4B', label: 'Portfolio' },
              { value: '340', label: 'Properties' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  padding: '0 24px 0 0',
                  borderRight: i < 2 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                  marginRight: i < 2 ? '24px' : '0',
                }}
              >
                <p style={{ color: '#c9a84c', fontSize: '26px', fontWeight: 300, fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p style={{ color: '#64748b', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Floating property cards at different z-depths */}
        <div style={{ position: 'relative', height: '520px', display: 'none' }} className="md:block">
          <FloatCard
            title="Modern Penthouse with Terrace"
            address="Kensington High Street"
            price="£1,250,000"
            beds={3}
            imageUrl="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
            delay="0s"
            style={{ top: '20px', left: '10px', zIndex: 3, transform: 'rotate(-2deg)' }}
          />
          <FloatCard
            title="Elegant 2BR in Notting Hill"
            address="Notting Hill Gate"
            price="£1,800 / mo"
            beds={2}
            imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
            delay="2s"
            style={{ top: '160px', left: '160px', zIndex: 4, transform: 'rotate(1.5deg)', width: '240px' }}
          />
          <FloatCard
            title="Family Villa with Garden"
            address="Richmond Park Road"
            price="£680,000"
            beds={4}
            imageUrl="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
            delay="4s"
            style={{ top: '340px', left: '40px', zIndex: 2, transform: 'rotate(-1deg)', opacity: 0.85 }}
          />
          {/* Decorative gold ring */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.12)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.06)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* Responsive: show floating cards stacked on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .property-hero-grid { grid-template-columns: 1fr !important; }
          .property-hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PropertyDemo() {
  return (
    <div style={themeToStyleObject(createCustomTheme('classic', { primary: '#1e3a5f', primaryHover: '#2a4f7f', secondary: '#f0f4f8', accent: '#c9a84c', background: '#ffffff', surface: '#f8fafc', text: '#1a1a2e', textMuted: '#64748b', border: '#e2e8f0' })) as React.CSSProperties}>

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
      <PropertyHero />

      <div id="listings">
        <ListingSearch listings={listings} locale="en" whatsappNumber="442071234567" />
      </div>
      <div id="valuation">
        <ValuationWidget />
      </div>
      <AgentCard agents={agents} whatsappNumber="442071234567" />
      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion items={faqs} locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442071234567" message="Hi, I'm interested in a property in London" />
    </div>
  )
}
