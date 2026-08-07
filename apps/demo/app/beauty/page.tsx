'use client'

import { useState } from 'react'
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { TeamGrid } from '@scala-sites/core/components/team-grid'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { StylistBooking } from '@scala-sites/beautyos/components/stylist-booking'
import { BeforeAfter } from '@scala-sites/beautyos/components/before-after'
import { ServiceMenu } from '@scala-sites/beautyos/components/service-menu'

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Studio Luxe Hair',
  description: 'Expert color, precision cuts, and luxury treatments in Soho, London.',
  url: 'https://studioluxehair.example.com',
  telephone: '+44 20 7432 1098',
  email: 'hello@studioluxehair.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '28 Brewer Street',
    addressLocality: 'London',
    postalCode: 'W1F 0SR',
    addressCountry: 'GB',
  },
  openingHours: 'Tu-Sa 09:00-20:00, Su 10:00-17:00',
  priceRange: '££',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: 4,
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
      name: 'How do I book an appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book directly on this website by selecting your stylist, or send us a WhatsApp message and we\'ll find the perfect slot for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need to cancel or reschedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No problem! Cancel or reschedule up to 24 hours before your appointment for free. Late cancellations may incur a 50% charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a first-visit discount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! New clients get 25% off their first service. Just mention it when booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a balayage last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-done balayage grows out naturally and can last 3-4 months between touch-ups, making it one of the most low-maintenance color options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is keratin treatment safe for colored hair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our keratin treatments are formaldehyde-free and safe for all hair types, including color-treated hair. It actually helps lock in color longer.',
      },
    },
  ],
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const stylists = [
  { id: '1', name: 'Elena Rivera', photo: '', role: 'Color Specialist', specialties: ['Balayage', 'Color Correction', 'Highlights'], rating: 4.9, reviewCount: 142, nextAvailable: 'Today 3:00 PM', slotsToday: 2 },
  { id: '2', name: 'Matt Taylor', photo: '', role: 'Cut & Style Director', specialties: ['Precision Cuts', 'Fades', 'Textured Bobs'], rating: 4.8, reviewCount: 98, nextAvailable: 'Tomorrow 10:00 AM' },
  { id: '3', name: 'Chloe White', photo: '', role: 'Keratin & Treatment Expert', specialties: ['Keratin', 'Olaplex', 'Scalp Therapy'], rating: 5.0, reviewCount: 67, nextAvailable: 'Today 5:30 PM', slotsToday: 1 },
]

const services = [
  { id: '1', name: 'Women\'s Haircut & Blowdry', category: 'Cuts', duration: '60 min', price: 65, currency: 'GBP', popular: true },
  { id: '2', name: 'Men\'s Haircut', category: 'Cuts', duration: '30 min', price: 35, currency: 'GBP' },
  { id: '3', name: 'Kids Haircut (under 12)', category: 'Cuts', duration: '25 min', price: 25, currency: 'GBP' },
  { id: '4', name: 'Full Balayage', category: 'Color', duration: '150 min', price: 180, priceFrom: true, currency: 'GBP', popular: true },
  { id: '5', name: 'Root Touch-Up', category: 'Color', duration: '60 min', price: 75, currency: 'GBP' },
  { id: '6', name: 'Full Highlights', category: 'Color', duration: '120 min', price: 150, priceFrom: true, currency: 'GBP' },
  { id: '7', name: 'Keratin Treatment', category: 'Treatments', duration: '120 min', price: 200, currency: 'GBP', popular: true, description: 'Smooth, frizz-free hair for up to 3 months' },
  { id: '8', name: 'Olaplex Repair', category: 'Treatments', duration: '45 min', price: 55, currency: 'GBP', description: 'Bond-building treatment for damaged hair' },
  { id: '9', name: 'Scalp Detox', category: 'Treatments', duration: '30 min', price: 40, currency: 'GBP' },
  { id: '10', name: 'Bridal Package', category: 'Special', duration: '180 min', price: 350, currency: 'GBP', description: 'Trial + wedding day styling + touch-up kit' },
]

const beforeAfterItems = [
  { id: '1', service: 'Balayage', beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400', afterImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400', description: 'Natural sun-kissed balayage on dark brunette', stylistName: 'Elena Rivera' },
  { id: '2', service: 'Keratin', beforeImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400', afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400', description: 'Keratin smoothing on curly hair — 3 months of frizz-free', stylistName: 'Chloe White' },
  { id: '3', service: 'Color Correction', beforeImage: 'https://images.unsplash.com/photo-1554519934-e32b1bc7b7b3?w=400', afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400', description: 'Box dye correction to natural-looking copper', stylistName: 'Elena Rivera' },
  { id: '4', service: 'Precision Cut', beforeImage: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?w=400', afterImage: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400', description: 'Modern textured bob transformation', stylistName: 'Matt Taylor' },
]

const reviews = [
  { id: '1', author: 'Francesca L.', rating: 5, text: 'Elena is a balayage goddess. I\'ve been going to her for 2 years and my hair has never looked better. The salon is beautiful and the team is incredibly welcoming.', date: '2026-07-28', source: 'Google', verified: true },
  { id: '2', author: 'Rachel G.', rating: 5, text: 'First time getting a keratin treatment here. Chloe explained everything patiently and the results are AMAZING. My morning routine went from 45 to 10 minutes.', date: '2026-07-15', source: 'Google', verified: true },
  { id: '3', author: 'Sophie W.', rating: 5, text: 'Best haircut I\'ve ever had. Matt really listened to what I wanted and delivered something even better. The WhatsApp booking is so convenient!', date: '2026-06-22', source: 'Google', verified: true },
  { id: '4', author: 'Laura P.', rating: 4, text: 'Gorgeous salon, lovely team. Only reason for 4 stars is the wait time — arrived 10 min early but still waited 20 min. Hair looked amazing though.', date: '2026-06-10', source: 'Google', verified: true },
]

const faqs = [
  { question: 'How do I book an appointment?', answer: 'You can book directly on this website by selecting your stylist, or send us a WhatsApp message and we\'ll find the perfect slot for you.' },
  { question: 'What if I need to cancel or reschedule?', answer: 'No problem! Cancel or reschedule up to 24 hours before your appointment for free. Late cancellations may incur a 50% charge.' },
  { question: 'Do you offer a first-visit discount?', answer: 'Yes! New clients get 25% off their first service. Just mention it when booking.' },
  { question: 'How long does a balayage last?', answer: 'A well-done balayage grows out naturally and can last 3-4 months between touch-ups, making it one of the most low-maintenance color options.' },
  { question: 'Is keratin treatment safe for colored hair?', answer: 'Absolutely. Our keratin treatments are formaldehyde-free and safe for all hair types, including color-treated hair. It actually helps lock in color longer.' },
]

const siteConfig = {
  name: 'Studio Luxe Hair',
  tagline: 'Expert color, cut & care — Soho, London',
  phone: '+44 20 7432 1098',
  email: 'hello@yourdomain.com',
  address: '28 Brewer Street, London W1F 0SR',
  social: { instagram: '#', facebook: '#', tiktok: '#' },
}

// ─────────────────────────────────────────────
// HERO — Glamour Split
// ─────────────────────────────────────────────
const MOSAIC_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=600&fit=crop', alt: 'Salon styling session', tall: true },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=300&fit=crop', alt: 'Color treatment', tall: false },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&h=300&fit=crop', alt: 'Balayage result', tall: false },
  { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=380&fit=crop', alt: 'Hair transformation', tall: false },
]

function Sparkle({ x, y, size, delay }: { x: string; y: string; size: number; delay: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none',
        animation: `sparkleAnim 3s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
        <path
          d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z"
          fill="rgba(244,63,94,0.5)"
        />
      </svg>
    </div>
  )
}

function BeautyHero() {
  const [hoveredImg, setHoveredImg] = useState<number | null>(null)

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes sparkleAnim {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(20deg); }
        }
        @keyframes beautyFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .beauty-hero-grid { grid-template-columns: 1fr !important; }
          .beauty-mosaic { display: none !important; }
          .beauty-left { min-height: 100vh !important; }
        }
      `}</style>

      {/* LEFT: soft pink gradient + copy */}
      <div
        className="beauty-left"
        style={{
          background: 'linear-gradient(160deg, #fff0f3 0%, #fce4ec 35%, #f8bbd9 70%, #f48fb1 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px 56px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* CSS shimmer particles */}
        <Sparkle x="8%" y="12%" size={14} delay="0s" />
        <Sparkle x="85%" y="8%" size={10} delay="0.8s" />
        <Sparkle x="15%" y="75%" size={18} delay="1.5s" />
        <Sparkle x="75%" y="85%" size={12} delay="2.2s" />
        <Sparkle x="45%" y="20%" size={8} delay="0.4s" />
        <Sparkle x="90%" y="55%" size={16} delay="1.9s" />

        {/* Soft circle accent */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(244,143,177,0.25)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-40px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(248,187,216,0.3)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <p
            style={{
              color: '#9f1239',
              fontSize: '11px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              animation: 'beautyFadeUp 0.7s ease both',
            }}
          >
            Soho, London &middot; Award-winning stylists
          </p>

          {/* Script-style elegant title */}
          <h1
            style={{
              fontFamily: 'Georgia, "Palatino Linotype", serif',
              fontSize: 'clamp(46px, 5vw, 76px)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: '#4a0019',
              marginBottom: '12px',
              animation: 'beautyFadeUp 0.8s ease 0.1s both',
              opacity: 0,
            }}
          >
            Your Hair,
          </h1>
          <h1
            style={{
              fontFamily: 'Georgia, "Palatino Linotype", serif',
              fontSize: 'clamp(46px, 5vw, 76px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.05,
              color: '#be123c',
              marginBottom: '28px',
              animation: 'beautyFadeUp 0.8s ease 0.18s both',
              opacity: 0,
            }}
          >
            Your Way.
          </h1>

          <p
            style={{
              color: '#6b2039',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: '380px',
              marginBottom: '36px',
              animation: 'beautyFadeUp 0.8s ease 0.26s both',
              opacity: 0,
            }}
          >
            Expert colorists, precision stylists, and luxury treatments.
            Book your favourite stylist in seconds &mdash; online, any time.
          </p>

          {/* New client badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#9f1239',
              color: '#fff0f3',
              padding: '10px 20px',
              borderRadius: '100px',
              fontSize: '13px',
              letterSpacing: '0.08em',
              marginBottom: '28px',
              animation: 'beautyFadeUp 0.8s ease 0.32s both',
              opacity: 0,
            }}
          >
            <span style={{ fontSize: '16px' }}>&#10024;</span>
            New clients: 25% off first service
          </div>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              animation: 'beautyFadeUp 0.8s ease 0.4s both',
              opacity: 0,
            }}
          >
            <a
              href="#booking"
              style={{
                display: 'inline-block',
                background: '#9f1239',
                color: '#fff',
                padding: '13px 28px',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '3px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#be123c')}
              onMouseLeave={e => (e.currentTarget.style.background = '#9f1239')}
            >
              Book Now
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-block',
                border: '1.5px solid rgba(159,18,57,0.4)',
                color: '#9f1239',
                padding: '13px 28px',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 400,
                textDecoration: 'none',
                borderRadius: '3px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#9f1239')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(159,18,57,0.4)')}
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT: asymmetric image mosaic */}
      <div
        className="beauty-mosaic"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '6px',
          background: '#1a0810',
          padding: '6px',
        }}
      >
        {/* Large tall image spanning 2 rows */}
        <div
          style={{
            gridRow: '1 / 3',
            overflow: 'hidden',
            cursor: 'pointer',
            position: 'relative',
          }}
          onMouseEnter={() => setHoveredImg(0)}
          onMouseLeave={() => setHoveredImg(null)}
        >
          <img
            src={MOSAIC_IMAGES[0].src}
            alt={MOSAIC_IMAGES[0].alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredImg === 0 ? 'scale(1.06)' : 'scale(1)',
            }}
          />
        </div>

        {/* Three smaller images in right column */}
        {[1, 2, 3].map((idx) => (
          <div
            key={idx}
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              gridRow: idx === 3 ? '2 / 3' : 'auto',
              gridColumn: idx === 3 ? '2 / 3' : 'auto',
            }}
            onMouseEnter={() => setHoveredImg(idx)}
            onMouseLeave={() => setHoveredImg(null)}
          >
            <img
              src={MOSAIC_IMAGES[idx].src}
              alt={MOSAIC_IMAGES[idx].alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: '160px',
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: hoveredImg === idx ? 'scale(1.07)' : 'scale(1)',
              }}
            />
            {/* Pink overlay on hover */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(159,18,57,0.2)',
                opacity: hoveredImg === idx ? 1 : 0,
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
              }}
            />
          </div>
        ))}

        {/* Floating "25% OFF" tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '32px',
            background: '#9f1239',
            color: '#fff',
            borderRadius: '50%',
            width: '88px',
            height: '88px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(159,18,57,0.5)',
            zIndex: 10,
            animation: 'sparkleAnim 4s ease-in-out infinite',
          }}
        >
          <span style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1 }}>25%</span>
          <span style={{ fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>first visit</span>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BeautyDemo() {
  return (
    <div style={themeToStyleObject(createCustomTheme('classic', { primary: '#9f1239', primaryHover: '#be123c', secondary: '#fff1f2', accent: '#f43f5e', background: '#ffffff', surface: '#fef2f2', text: '#1a1a2e', textMuted: '#71717a', border: '#fecdd3' })) as React.CSSProperties}>

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
      <BeautyHero />

      <div className="text-center py-6" style={{ background: 'var(--color-secondary)' }}>
        <p className="text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
          New clients: 25% off your first service
        </p>
      </div>
      <div id="booking">
        <StylistBooking stylists={stylists} />
      </div>
      <div id="services">
        <ServiceMenu services={services} locale="en" />
      </div>
      <BeforeAfter items={beforeAfterItems} />
      <ReviewCarousel reviews={reviews} locale="en" />
      <FAQAccordion items={faqs} locale="en" />
      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="442074321098" message="Hi, I'd like to book an appointment" />
    </div>
  )
}
