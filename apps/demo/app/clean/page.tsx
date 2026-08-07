'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { Gallery } from '@scala-sites/core/components/gallery'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { BookingWidget } from '@scala-sites/core/components/booking-widget'
import { TeamGrid } from '@scala-sites/core/components/team-grid'

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
    text: 'Maria has been cleaning our Knightsbridge flat for six months now. The standard is extraordinary — she notices things I would never notice myself. The home always smells incredible and looks like a show flat after every visit.',
    date: '2026-07-29',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'James T.',
    rating: 5,
    text: 'Used Pristine for an end of tenancy clean. Got my full deposit back with zero deductions — something my landlord said was "unlikely given the state of the place." The team worked absolute miracles.',
    date: '2026-07-15',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Arabella C.',
    rating: 5,
    text: 'The carpet cleaning has transformed our living room. We had a 10-year-old rug that we were about to throw away — it now looks brand new. Genuinely impressive results and the team were incredibly professional.',
    date: '2026-07-03',
    source: 'Trustpilot',
    verified: true,
  },
  {
    id: '4',
    author: 'Sebastian N.',
    rating: 5,
    text: 'Booked a post-party clean for the morning after our housewarming. Arrived at 8am, finished by 11am — the flat was immaculate. Booking via WhatsApp was effortless and they confirmed within minutes.',
    date: '2026-06-22',
    source: 'Google',
    verified: true,
  },
  {
    id: '5',
    author: 'Priya M.',
    rating: 5,
    text: 'Finally found a cleaning service that meets my standards. Elena is meticulous, reliable, and uses eco-friendly products at my request. I would not trust anyone else in my home.',
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CleanShowcase() {
  const theme = createCustomTheme('minimal', {
    primary: '#1a5276',
    primaryHover: '#154360',
    secondary: '#eaf4fb',
    accent: '#2e86c1',
    background: '#f8fffe',
    surface: '#ffffff',
    text: '#0d2137',
    textMuted: '#5d7a8a',
    border: '#c8dce8',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>

      {/* Hero */}
      <Hero
        title="London's Standard for Immaculate Living"
        subtitle="Professional luxury cleaning for Knightsbridge, Chelsea, and Kensington. Fully vetted, insured, and trusted by 2,400+ London households."
        backgroundImage="https://images.unsplash.com/photo-1527515637462-cff94aca55f9?w=1600"
        ctaPrimary={{ label: 'Book a Clean', href: '#booking' }}
        ctaSecondary={{ label: 'Our Services', href: '#services' }}
      />

      {/* Trust bar */}
      <div style={{ background: 'var(--color-primary)', color: '#fff', padding: '18px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '0.875rem', fontWeight: 500 }}>
          <span>DBS-Checked Cleaners</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Fully Insured & Bonded</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Eco-Friendly Products</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Same Cleaner Every Visit</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" style={{ padding: '80px 24px', background: 'var(--color-background)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '10px' }}>
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
                  el.style.boxShadow = '0 8px 32px rgba(26,82,118,0.12)'
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
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>From £{s.from}</span>
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
      <section style={{ padding: '72px 24px', background: 'var(--color-primary)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
            London Trusts Pristine
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '52px', fontSize: '1rem' }}>
            Eight years of cleaning London&apos;s finest homes — the numbers speak for themselves.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {stats.map(st => (
              <div key={st.label}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{st.value}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{st.label}</div>
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
          accentColor="#1a5276"
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
