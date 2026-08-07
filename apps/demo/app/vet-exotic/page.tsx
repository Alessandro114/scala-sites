'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
import { Hero } from '@scala-sites/core/components/hero'
import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import { VetBooking } from '@scala-sites/petos/components/vet-booking'
import { ServicePackages } from '@scala-sites/petos/components/service-packages'
import { PetProfile } from '@scala-sites/petos/components/pet-profile'

// --- MOCK DATA ---

const vets = [
  {
    id: '1',
    name: 'Dr. Kenji Watanabe',
    photo: '',
    title: 'Principal Veterinarian — Reptiles & Amphibians',
    specialties: ['Exotics', 'Surgery'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['BVSc (Hons)', 'MRCVS', 'DipECZM (Herpetology)', 'RCVS Recognised Specialist'],
    nextAvailable: 'Today, 15:00',
    emergency24_7: true,
    bookingUrl: '#',
  },
  {
    id: '2',
    name: 'Dr. Amara Osei',
    photo: '',
    title: 'Exotic Avian Specialist',
    specialties: ['Exotics', 'Small Animals'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['BVetMed', 'MRCVS', 'DipECZM (Avian)', 'RCVS Recognised Specialist'],
    nextAvailable: 'Tomorrow, 09:30',
    bookingUrl: '#',
  },
  {
    id: '3',
    name: 'Dr. Sienna Clarke',
    photo: '',
    title: 'Small Mammal & Rabbit Specialist',
    specialties: ['Small Animals', 'Surgery'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['MVB', 'MRCVS', 'CertZooMed', 'CertAVP (Rabbit & Small Mammal)'],
    nextAvailable: 'Wednesday, 11:00',
    bookingUrl: '#',
  },
  {
    id: '4',
    name: 'Dr. Matteo Rossi',
    photo: '',
    title: 'Emergency & Critical Care',
    specialties: ['Small Animals', 'Surgery'] as ('Small Animals' | 'Exotics' | 'Surgery' | 'Dental')[],
    qualifications: ['BVSc', 'MRCVS', 'CertVECC', 'IVECC Diplomate'],
    nextAvailable: 'On call 24/7',
    emergency24_7: true,
    bookingUrl: '#',
  },
]

const packages = [
  {
    id: '1',
    name: 'Reptile Wellness Plan',
    price: 22,
    currency: 'GBP',
    period: 'month' as const,
    services: [
      'Annual full health examination',
      'Bi-annual husbandry review',
      'UV-B monitoring check',
      'Parasite screen',
      'Nutrition & diet consultation',
      '10% off diagnostics & treatment',
    ],
    savingsVsIndividual: 95,
    ctaLabel: 'Enrol',
    ctaUrl: '#',
  },
  {
    id: '2',
    name: 'Avian Wellness Plan',
    price: 25,
    currency: 'GBP',
    period: 'month' as const,
    highlighted: true,
    services: [
      'Annual health check & weight monitoring',
      'Bi-annual wing, beak & claw trim',
      'Annual chlamydia & PBFD screen',
      'Nutritional review',
      'Emergency priority triage',
      '15% off all diagnostics & treatment',
    ],
    savingsVsIndividual: 110,
    ctaLabel: 'Enrol',
    ctaUrl: '#',
  },
  {
    id: '3',
    name: 'Small Mammal Plan',
    price: 18,
    currency: 'GBP',
    period: 'month' as const,
    services: [
      'Annual health check',
      'Dental check included',
      'Vaccination (ferrets)',
      'Parasite prevention',
      'Nutrition consultation',
      '10% off all treatments',
    ],
    savingsVsIndividual: 75,
    ctaLabel: 'Enrol',
    ctaUrl: '#',
  },
  {
    id: '4',
    name: 'Emergency Cover Add-On',
    price: 12,
    currency: 'GBP',
    period: 'month' as const,
    services: [
      '24/7 phone triage with a specialist',
      'Priority emergency appointment slots',
      '20% off out-of-hours consultation fees',
      'Direct line to Dr. Rossi (on call)',
    ],
    savingsVsIndividual: 60,
    ctaLabel: 'Add to plan',
    ctaUrl: '#',
  },
]

const reviews = [
  {
    id: '1',
    author: 'Sophie L.',
    rating: 5,
    text: 'Dr. Watanabe diagnosed a respiratory infection in our bearded dragon that two other vets had missed entirely. His knowledge of reptile physiology is extraordinary. Archie is fully recovered and thriving. Creature Comforts is the only practice we trust.',
    date: '2026-07-28',
    source: 'Google',
    verified: true,
  },
  {
    id: '2',
    author: 'Kwame A.',
    rating: 5,
    text: 'Our African grey parrot Rio had a suspected PBFD scare. Dr. Osei ran the full screen, explained every result with patience and kindness, and followed up unprompted three days later. This is what specialist care should look like.',
    date: '2026-07-14',
    source: 'Google',
    verified: true,
  },
  {
    id: '3',
    author: 'Priya N.',
    rating: 5,
    text: 'Dr. Clarke performed a dental on our elderly rabbit and he is eating properly again for the first time in two years. She explained every step of the procedure and the post-op care was exceptional. Could not be happier.',
    date: '2026-06-30',
    source: 'Google',
    verified: true,
  },
  {
    id: '4',
    author: 'Tom R.',
    rating: 5,
    text: 'Dr. Rossi saw our gecko at 11pm on a Saturday — calm, professional, and clearly an expert. He stabilised her overnight and she was home the next day. The 24/7 emergency service at Creature Comforts is genuinely lifesaving.',
    date: '2026-08-03',
    source: 'Google',
    verified: true,
  },
]

const faqs = [
  {
    question: 'What exotic species do you treat?',
    answer:
      'We treat the full range of exotic and small animal species: all reptile species (snakes, lizards, chelonians, geckos), parrots and exotic birds (including raptors by appointment), rabbits, guinea pigs, chinchillas, hedgehogs, ferrets, sugar gliders, and most small exotic mammals. If you are unsure whether we treat your pet, call us before travelling and we will advise.',
  },
  {
    question: 'Do you offer 24/7 emergency care for exotic animals?',
    answer:
      'Yes. Dr. Kenji Watanabe and Dr. Matteo Rossi both provide 24/7 emergency cover. Unlike general veterinary practices that refer exotic emergencies to generalists, our out-of-hours service is staffed by exotic specialists. Call our emergency line and you will speak directly to a vet, not a triage operator.',
  },
  {
    question: 'My regular vet doesn\'t seem confident with my reptile — can I transfer?',
    answer:
      'Absolutely. Transferring to Creature Comforts is straightforward — simply register your pet using the form on this page and request your records from your current practice. We see new exotic patients within 48 hours for non-emergencies and same-day for urgent referrals from other practices.',
  },
  {
    question: 'Are your wellness plans suitable for multiple animals?',
    answer:
      'Yes — each plan covers one animal, but we offer a household multi-pet discount of 15% when you enrol three or more animals simultaneously. Contact us to set up a multi-pet plan tailored to your collection.',
  },
  {
    question: 'How do I get to Creature Comforts in Hampstead?',
    answer:
      'We are located at 18 Pond Street, Hampstead, NW3 2PN — a 4-minute walk from Belsize Park Underground (Northern line). We have limited on-street parking on Pond Street and Rosslyn Hill. Please bring your pet in a secure, appropriately heated container. We can advise on safe transport for your specific species when you call.',
  },
]

const siteConfig = {
  name: 'Creature Comforts Veterinary',
  tagline: 'Specialist care for exotic & small animals — Hampstead, London',
  phone: '+44 20 7435 8822',
  email: 'hello@creaturecomforts.example.com',
  address: '18 Pond Street, Hampstead, London NW3 2PN',
  social: { instagram: '#creaturecomfortsvet', facebook: '#' },
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
        background: 'rgba(240,247,244,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #b7dbc8',
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
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#2d6a4f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#f0f7f4', fontSize: '1.1rem' }}>+</span>
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: '0.95rem',
                color: '#1b4332',
                letterSpacing: '-0.01em',
              }}
            >
              Creature Comforts
            </div>
            <div
              style={{
                fontSize: '0.6rem',
                color: '#52796f',
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}
            >
              Exotic &amp; Small Animal Specialists
            </div>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {[
            { label: 'Our Specialists', href: '#booking' },
            { label: 'Wellness Plans', href: '#plans' },
            { label: 'Reviews', href: '#reviews' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#52796f', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            style={{
              padding: '9px 20px',
              background: '#2d6a4f',
              color: '#f0f7f4',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- EXPERTISE GRID ---

function ExpertiseGrid() {
  const species = [
    {
      icon: '🦎',
      name: 'Reptiles',
      examples: 'Bearded dragons, leopard geckos, blue-tongued skinks, corn snakes, royal pythons, chameleons, tortoises',
      specialist: 'Dr. Watanabe',
    },
    {
      icon: '🦜',
      name: 'Exotic Birds',
      examples: 'Parrots, cockatoos, macaws, African greys, cockatiels, conures, raptors (by appointment)',
      specialist: 'Dr. Osei',
    },
    {
      icon: '🐇',
      name: 'Rabbits',
      examples: 'All breeds, including dwarf, lop, and Angora rabbits. Dental, GI, and dermatology specialists on site',
      specialist: 'Dr. Clarke',
    },
    {
      icon: '🐹',
      name: 'Small Mammals',
      examples: 'Guinea pigs, chinchillas, ferrets, hedgehogs, degus, sugar gliders, rats, gerbils, hamsters',
      specialist: 'Dr. Clarke',
    },
    {
      icon: '🐸',
      name: 'Amphibians',
      examples: 'Tree frogs, dart frogs, fire-bellied toads, axolotls, and other aquatic/semi-aquatic species',
      specialist: 'Dr. Watanabe',
    },
    {
      icon: '🆘',
      name: '24/7 Emergency',
      examples: 'Out-of-hours exotic emergency triage and critical care — staffed by exotic specialists, not generalists',
      specialist: 'Dr. Rossi',
    },
  ]
  return (
    <section
      style={{ background: '#f0f7f4', padding: '88px 24px', borderTop: '1px solid #b7dbc8' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#52796f',
            marginBottom: '12px',
          }}
        >
          Our Expertise
        </p>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#1b4332',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}
        >
          Specialists, not generalists.
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#52796f',
            fontSize: '1.05rem',
            marginBottom: '56px',
            maxWidth: '620px',
            margin: '0 auto 56px',
          }}
        >
          Every member of our clinical team holds a specialist diploma in exotic and small animal medicine. Your pet will never be seen by someone who learned on the job.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {species.map(({ icon, name, examples, specialist }) => (
            <div
              key={name}
              style={{
                padding: '28px 24px',
                border: '1px solid #b7dbc8',
                borderRadius: '12px',
                background: '#ffffff',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1b4332', marginBottom: '8px' }}>
                {name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#52796f', lineHeight: 1.6, marginBottom: '14px' }}>
                {examples}
              </p>
              <div
                style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: '#d8f0e4',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  color: '#2d6a4f',
                  fontWeight: 600,
                }}
              >
                {specialist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- EMERGENCY BANNER ---

function EmergencyBanner() {
  return (
    <div
      style={{
        background: '#1b4332',
        padding: '20px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{ color: '#f0f7f4', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
        <span
          style={{
            display: 'inline-block',
            background: '#ef233c',
            color: '#fff',
            fontSize: '0.65rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '3px 10px',
            borderRadius: '20px',
            marginRight: '12px',
            verticalAlign: 'middle',
          }}
        >
          24/7 Emergency
        </span>
        Exotic animal emergency? Call{' '}
        <a
          href="tel:+442074358822"
          style={{ color: '#74c69d', textDecoration: 'none', fontWeight: 800 }}
        >
          +44 20 7435 8822
        </a>{' '}
        — you will speak directly to a specialist vet, day or night.
      </p>
    </div>
  )
}

// --- PAGE ---

export default function VetExoticDemo() {
  const theme = createCustomTheme('minimal', {
    primary: '#2d6a4f',
    primaryHover: '#1b4332',
    accent: '#52b788',
    background: '#f0f7f4',
    surface: '#ffffff',
    secondary: '#d8f0e4',
    text: '#1b4332',
    textMuted: '#52796f',
    border: '#b7dbc8',
  })

  return (
    <div style={themeToStyleObject(theme) as React.CSSProperties}>
      <Navbar />

      <Hero
        title="Specialist Care for Every Scale, Feather & Paw."
        subtitle="Creature Comforts — London's leading exotic and small animal veterinary clinic in Hampstead. Reptile, avian, rabbit, and small mammal specialists. 24/7 emergency service."
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&h=900&fit=crop"
        ctaPrimary={{ label: 'Book an Appointment', href: '#booking' }}
        ctaSecondary={{ label: 'View Wellness Plans', href: '#plans' }}
        overlayOpacity={0.72}
        height="full"
      />

      <EmergencyBanner />

      <ExpertiseGrid />

      <div id="booking">
        <VetBooking vets={vets} />
      </div>

      <div id="plans">
        <ServicePackages packages={packages} locale="en" title="Exotic Wellness Plans" />
      </div>

      <div id="register">
        <PetProfile />
      </div>

      <div id="reviews">
        <ReviewCarousel reviews={reviews} locale="en" />
      </div>

      <FAQAccordion items={faqs} locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442074358822"
        message="Hi Creature Comforts — I'd like to book an appointment for my exotic pet."
      />
    </div>
  )
}
