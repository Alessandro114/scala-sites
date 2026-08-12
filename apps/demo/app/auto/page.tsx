'use client'

import { useEffect, useRef, useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VehicleInventory } from '@scala-sites/autoos/components/vehicle-inventory'
import { FinanceCalculator } from '@scala-sites/autoos/components/finance-calculator'
import { TestDriveBooking } from '@scala-sites/autoos/components/test-drive-booking'
import type { InventoryVehicle } from '@scala-sites/autoos/components/vehicle-inventory'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Kensington Motors',
  description: 'Premium cars, transparent pricing, expert service on Brompton Road, London.',
  url: 'https://kensingtonmotors.example.com',
  telephone: '+44 20 7946 0320',
  email: 'enquiries@kensingtonmotors.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '120 Brompton Road',
    addressLocality: 'London',
    postalCode: 'SW3 1JJ',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4985,
    longitude: -0.1640,
  },
  openingHours: 'Mo-Sa 09:00-18:00, Su 10:00-16:00',
  priceRange: '£££',
  foundingDate: '1985',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: 4,
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
      name: 'What does "Certified Pre-Owned" mean at Kensington Motors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Certified Pre-Owned vehicle passes our 170-point inspection, comes with a minimum 12-month comprehensive warranty, full HPI check, and a fresh MOT or service where due. Only vehicles under 5 years old with fewer than 60,000 miles qualify.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I part-exchange my current vehicle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We accept all makes and models as part-exchange. Simply bring your vehicle to the showroom or request an online valuation via WhatsApp. We aim to provide a formal offer within 30 minutes of inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What finance options are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer Hire Purchase (HP), Personal Contract Purchase (PCP), and Lease Purchase through our panel of FCA-authorised lenders. Representative APR 9.9%. Subject to status — 18+ only. Use our online calculator for an instant estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a test drive last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard test drives are 45 minutes. For vehicles over £40,000 or for customers travelling from outside London, we offer extended 90-minute slots — just mention this when booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer home delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We deliver anywhere in mainland UK. Delivery within the M25 is complimentary. For national delivery, a flat fee of £199 applies, including full handover documentation and a video walkthrough of your vehicle.',
      },
    },
  ],
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const vehicles: InventoryVehicle[] = [
  { id: '1', make: 'BMW', model: '5 Series 520d M Sport', year: 2024, mileage: 0, fuelType: 'Diesel', transmission: 'Automatic', bodyStyle: 'Sedan', condition: 'New', price: 54995, currency: 'GBP', monthlyFrom: 529, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80' },
  { id: '2', make: 'Mercedes-Benz', model: 'GLE 300d AMG Line', year: 2023, mileage: 12400, fuelType: 'Diesel', transmission: 'Automatic', bodyStyle: 'SUV', condition: 'Certified', price: 67500, currency: 'GBP', monthlyFrom: 649, image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80' },
  { id: '3', make: 'Volkswagen', model: 'Golf 8 R-Line', year: 2022, mileage: 28700, fuelType: 'Petrol', transmission: 'Manual', bodyStyle: 'Hatchback', condition: 'Used', price: 22990, currency: 'GBP', monthlyFrom: 219, image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80' },
  { id: '4', make: 'Tesla', model: 'Model Y Long Range', year: 2024, mileage: 0, fuelType: 'Electric', transmission: 'Automatic', bodyStyle: 'SUV', condition: 'New', price: 52490, currency: 'GBP', monthlyFrom: 499, image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80' },
  { id: '5', make: 'Volvo', model: 'V90 T6 Recharge', year: 2023, mileage: 8200, fuelType: 'Plug-in Hybrid', transmission: 'Automatic', bodyStyle: 'Estate', condition: 'Certified', price: 48750, currency: 'GBP', monthlyFrom: 469, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80' },
  { id: '6', make: 'Audi', model: 'A3 Sportback S Line', year: 2021, mileage: 41300, fuelType: 'Petrol', transmission: 'Automatic', bodyStyle: 'Hatchback', condition: 'Used', price: 19495, currency: 'GBP', monthlyFrom: 189, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80' },
  { id: '7', make: 'Land Rover', model: 'Discovery Sport D200', year: 2023, mileage: 6900, fuelType: 'Diesel', transmission: 'Automatic', bodyStyle: 'SUV', condition: 'Certified', price: 43900, currency: 'GBP', monthlyFrom: 419, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80' },
  { id: '8', make: 'Toyota', model: 'Corolla Touring Sports Hybrid', year: 2022, mileage: 19800, fuelType: 'Hybrid', transmission: 'Automatic', bodyStyle: 'Estate', condition: 'Used', price: 24795, currency: 'GBP', monthlyFrom: 239, image: 'https://images.unsplash.com/photo-1638618164682-12b986ec2a75?w=800&q=80' },
]

const testDriveVehicles = vehicles.map(v => ({
  id: v.id,
  label: `${v.year} ${v.make} ${v.model} — ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(v.price)}`,
}))

const reviews = [
  { id: '1', author: 'Jonathan Ashworth', rating: 5, text: 'Purchased my BMW 5 Series from Kensington Motors last month. The team was professional, zero pressure, and the car was presented in immaculate condition. A genuinely premium experience.', date: '2026-07-18', source: 'Google', verified: true },
  { id: '2', author: 'Priya Nair', rating: 5, text: 'Switched from a diesel SUV to the Tesla Model Y on the team\'s recommendation. They walked me through every option, arranged the finance in under an hour, and the handover was seamless.', date: '2026-07-02', source: 'Google', verified: true },
  { id: '3', author: 'Marcus Steinfeld', rating: 5, text: 'Traded in my old Audi and drove away in a certified Volvo V90 the same afternoon. The part-exchange valuation was fair and transparent. Highly recommend Kensington Motors.', date: '2026-06-14', source: 'Google', verified: true },
  { id: '4', author: 'Sophie Beaumont', rating: 5, text: 'The finance calculator on the website made it easy to plan my budget before visiting the showroom. No surprises at the desk — everything was exactly as discussed. Five stars.', date: '2026-05-29', source: 'Trustpilot', verified: true },
]

const faqs = [
  { question: 'What does "Certified Pre-Owned" mean at Kensington Motors?', answer: 'Every Certified Pre-Owned vehicle passes our 170-point inspection, comes with a minimum 12-month comprehensive warranty, full HPI check, and a fresh MOT or service where due. Only vehicles under 5 years old with fewer than 60,000 miles qualify.' },
  { question: 'Can I part-exchange my current vehicle?', answer: 'Absolutely. We accept all makes and models as part-exchange. Simply bring your vehicle to the showroom or request an online valuation via WhatsApp. We aim to provide a formal offer within 30 minutes of inspection.' },
  { question: 'What finance options are available?', answer: 'We offer Hire Purchase (HP), Personal Contract Purchase (PCP), and Lease Purchase through our panel of FCA-authorised lenders. Representative APR 9.9%. Subject to status — 18+ only. Use our online calculator for an instant estimate.' },
  { question: 'How long does a test drive last?', answer: 'Standard test drives are 45 minutes. For vehicles over £40,000 or for customers travelling from outside London, we offer extended 90-minute slots — just mention this when booking.' },
  { question: 'Do you offer home delivery?', answer: 'Yes. We deliver anywhere in mainland UK. Delivery within the M25 is complimentary. For national delivery, a flat fee of £199 applies, including full handover documentation and a video walkthrough of your vehicle.' },
]

const siteConfig = {
  name: 'Kensington Motors',
  tagline: 'Premium cars. Transparent pricing. Expert service.',
  phone: '+44 20 7946 0320',
  email: 'enquiries@kensingtonmotors.example.com',
  address: '120 Brompton Road, London SW3 1JJ',
  social: { instagram: '#', facebook: '#' },
}

// ─────────────────────────────────────────────
// ROTATING BADGE
// ─────────────────────────────────────────────
function RotatingBadge() {
  const [angle, setAngle] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    let last = 0
    const animate = (ts: number) => {
      if (last) setAngle(a => (a + (ts - last) * 0.025) % 360)
      last = ts
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [])

  const text = 'EST. 1985  ·  KENSINGTON MOTORS  ·  LONDON  ·  '
  const chars = text.split('')
  const radius = 46

  return (
    <div
      style={{
        position: 'relative',
        width: '108px',
        height: '108px',
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 108 108"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transform: `rotate(${angle}deg)`,
        }}
      >
        {chars.map((char, i) => {
          const charAngle = (i / chars.length) * 360
          const rad = (charAngle * Math.PI) / 180
          const x = 54 + radius * Math.sin(rad)
          const y = 54 - radius * Math.cos(rad)
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${charAngle}, ${x}, ${y})`}
              style={{
                fontSize: '7.5px',
                fill: '#c9a84c',
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}
            >
              {char}
            </text>
          )
        })}
      </svg>
      {/* Center dot */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#c9a84c',
          }}
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// HERO — Showroom Spotlight
// ─────────────────────────────────────────────
function AutoHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#0c0c0c',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        @keyframes autoFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spotlightPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Radial spotlight gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 60% 55%, rgba(40,35,20,0.9) 0%, rgba(20,18,10,0.95) 40%, #0c0c0c 70%)',
          animation: 'spotlightPulse 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Secondary warm spotlight from top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Car silhouette implied by the gradient — perspective floor lines */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(201,168,76,0.04) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Background car image */}
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=80"
        alt="Luxury showroom car"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 60%',
          opacity: 0.12,
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Fine grid perspective lines overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
          gridTemplateColumns: '1fr auto',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <div>
          <p
            style={{
              color: 'rgba(201,168,76,0.7)',
              fontSize: '11px',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontFamily: 'monospace',
              animation: 'autoFadeUp 0.7s ease both',
            }}
          >
            Brompton Road, London &middot; Premium Showroom
          </p>

          {/* Metallic gradient title */}
          <h1
            style={{
              fontSize: 'clamp(52px, 7.5vw, 110px)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              fontFamily: '"Arial Black", "Impact", sans-serif',
              marginBottom: '8px',
              animation: 'autoFadeUp 0.8s ease 0.1s both',
              opacity: 0,
            }}
          >
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #e8d5a3 0%, #c9a84c 30%, #f5e6c0 55%, #a07d30 75%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kensington
            </span>
            <span
              style={{
                display: 'block',
                color: '#ffffff',
              }}
            >
              Motors
            </span>
          </h1>

          <div
            style={{
              width: '64px',
              height: '2px',
              background: 'linear-gradient(to right, #c9a84c, transparent)',
              marginBottom: '32px',
              marginTop: '20px',
              animation: 'autoFadeUp 0.8s ease 0.2s both',
              opacity: 0,
            }}
          />

          <p
            style={{
              color: '#9ca3af',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: '460px',
              marginBottom: '40px',
              animation: 'autoFadeUp 0.8s ease 0.28s both',
              opacity: 0,
            }}
          >
            New, certified, and quality used cars &mdash; transparent pricing,
            flexible finance, and expert guidance on Brompton Road since 1985.
          </p>

          {/* CTA */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '56px',
              animation: 'autoFadeUp 0.8s ease 0.36s both',
              opacity: 0,
            }}
          >
            <a
              href="#inventory"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #c9a84c, #a07d30)',
                color: '#0c0c0c',
                padding: '14px 32px',
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Browse Inventory
            </a>
            <a
              href="#test-drive"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(201,168,76,0.35)',
                color: '#c9a84c',
                padding: '14px 32px',
                fontSize: '13px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 400,
                textDecoration: 'none',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#c9a84c')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)')}
            >
              Book a Test Drive
            </a>
          </div>

          {/* Stats ribbon */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              borderTop: '1px solid rgba(201,168,76,0.12)',
              paddingTop: '24px',
              animation: 'autoFadeUp 0.8s ease 0.44s both',
              opacity: 0,
            }}
          >
            {[
              { value: '500+', label: 'Vehicles' },
              { value: 'Finance', label: 'Available' },
              { value: '12mo', label: 'Warranty' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  paddingRight: i < 2 ? '28px' : '0',
                  borderRight: i < 2 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                  marginRight: i < 2 ? '28px' : '0',
                }}
              >
                <p
                  style={{
                    background: 'linear-gradient(135deg, #e8d5a3, #c9a84c)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: 'clamp(22px, 2.5vw, 34px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    fontFamily: '"Arial Black", sans-serif',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                    fontFamily: 'monospace',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: rotating badge */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            animation: 'autoFadeUp 0.9s ease 0.5s both',
            opacity: 0,
          }}
        >
          <RotatingBadge />
          <div
            style={{
              textAlign: 'center',
              padding: '16px 20px',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <p style={{ color: '#c9a84c', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '4px' }}>
              170-Point
            </p>
            <p style={{ color: '#e5e7eb', fontSize: '12px', letterSpacing: '0.1em' }}>
              Inspection
            </p>
          </div>
          <div
            style={{
              textAlign: 'center',
              padding: '16px 20px',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <p style={{ color: '#c9a84c', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '4px' }}>
              FCA
            </p>
            <p style={{ color: '#e5e7eb', fontSize: '12px', letterSpacing: '0.1em' }}>
              Authorised
            </p>
          </div>
        </div>
      </div>

      {/* Bottom edge light leak */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
        }}
      />
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function AutoDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#1c1c1c',
    primaryHover: '#2d2d2d',
    accent: '#2563eb',
    background: '#ffffff',
    surface: '#f8f9fa',
    secondary: '#f1f3f5',
    text: '#1c1c1c',
    textMuted: '#6b7280',
    border: '#e5e7eb',
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
      <AutoHero />

      <div id="inventory">
        <VehicleInventory
          vehicles={vehicles}
          locale="en"
          onViewDetails={id => console.log('View details', id)}
          onBookTestDrive={id => {
            const el = document.getElementById('test-drive')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      <FinanceCalculator
        vehiclePrice={32000}
        currency="GBP"
        locale="en"
        defaultApr={9.9}
      />

      <div id="test-drive">
        <TestDriveBooking
          vehicles={testDriveVehicles}
          title="Book Your Test Drive"
          subtitle="Experience any vehicle from our inventory. Slots available 7 days a week at our Brompton Road showroom."
        />
      </div>

      <ReviewCarousel reviews={reviews} locale="en" />

      <FAQAccordion items={faqs} verticalName="AutoOS" locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442079460320"
        message="Hi, I'm interested in a vehicle at Kensington Motors. Could you help me?"
      />
    </div>
  )
}
