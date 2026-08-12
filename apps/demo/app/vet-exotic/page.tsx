'use client'

import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'
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

// ─── JSON-LD DATA ───────────────────────────────────────────────────────────
const exoticVetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'VeterinaryCare',
  name: 'Creature Comforts Veterinary',
  description: "London's leading exotic and small animal veterinary clinic — reptiles, birds, rabbits, and small mammals. 24/7 emergency specialist care.",
  url: 'https://creaturecomforts.example.com',
  telephone: '+44 20 7435 8822',
  email: 'hello@creaturecomforts.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Pond Street',
    addressLocality: 'Hampstead, London',
    postalCode: 'NW3 2PN',
    addressCountry: 'GB',
  },
  openingHours: 'Mo-Fr 08:00-21:00, Sa 09:00-18:00, Su 10:00-17:00',
}

const exoticFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-08-11',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─── CUSTOM EXOTIC VET HERO ──────────────────────────────────────────────────
function ExoticVetHero() {
  // Animal silhouette icon paths (inline SVG text chars for decorative use)
  const animalIcons = [
    { symbol: '&#x1F98E;', label: 'lizard',  top: '14%', left: '7%',   size: '2.2rem', rotate: '-15deg', delay: '0.6s' },
    { symbol: '&#x1F99C;', label: 'parrot',  top: '22%', right: '8%',  size: '2.4rem', rotate: '12deg',  delay: '0.75s' },
    { symbol: '&#x1F422;', label: 'turtle',  bottom: '28%', left: '5%', size: '2rem',  rotate: '8deg',   delay: '0.9s' },
    { symbol: '&#x1F40D;', label: 'snake',   bottom: '20%', right: '6%', size: '2.2rem', rotate: '-20deg', delay: '1.05s' },
    { symbol: '&#x1F407;', label: 'rabbit',  top: '60%', left: '10%',  size: '1.9rem', rotate: '0deg',   delay: '1.2s' },
    { symbol: '&#x1F438;', label: 'frog',    top: '40%', right: '5%',  size: '1.8rem', rotate: '10deg',  delay: '1.35s' },
  ]

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #0d2b1f 0%, #0a3d2b 30%, #07524a 65%, #0a6e60 100%)',
      }}
    >
      <style>{`
        /* Large botanical leaf overlay shapes */
        .leaf-overlay {
          position: absolute;
          border-radius: 50% 10% 50% 10%;
          pointer-events: none;
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          50%       { transform: rotate(3deg) scale(1.02); }
        }
        @keyframes exoticFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .exotic-fade-up {
          opacity: 0;
          animation: exoticFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes animalFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50%       { transform: translateY(-8px) rotate(var(--rot, 0deg)); }
        }
        .animal-icon {
          animation: animalFloat 3s ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
        }
        @keyframes tropicalShimmer {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.2; }
        }
      `}</style>

      {/* Botanical leaf shapes — large SVG-like CSS shapes */}
      {/* Leaf 1 — top left, giant */}
      <div
        className="leaf-overlay"
        style={{
          top: '-120px',
          left: '-80px',
          width: '420px',
          height: '580px',
          background: 'linear-gradient(140deg, rgba(52,211,153,0.12) 0%, rgba(16,185,129,0.06) 100%)',
          transform: 'rotate(-30deg)',
          animation: 'leafSway 8s ease-in-out infinite',
          animationDelay: '0s',
        }}
      />
      {/* Leaf 2 — bottom right */}
      <div
        className="leaf-overlay"
        style={{
          bottom: '-100px',
          right: '-60px',
          width: '380px',
          height: '500px',
          background: 'linear-gradient(320deg, rgba(20,184,166,0.14) 0%, rgba(5,150,105,0.07) 100%)',
          transform: 'rotate(25deg)',
          animation: 'leafSway 10s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      {/* Leaf 3 — mid left */}
      <div
        className="leaf-overlay"
        style={{
          top: '30%',
          left: '-120px',
          width: '280px',
          height: '400px',
          background: 'linear-gradient(110deg, rgba(34,197,94,0.09) 0%, transparent 100%)',
          transform: 'rotate(-45deg)',
          animation: 'leafSway 12s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />

      {/* Tropical mesh/grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(52,211,153,0.05) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(52,211,153,0.05) 40px)',
          pointerEvents: 'none',
          animation: 'tropicalShimmer 5s ease-in-out infinite',
        }}
      />

      {/* Animal silhouette icons (decorative, positioned around hero) */}
      {animalIcons.map((icon, i) => (
        <div
          key={i}
          className="animal-icon exotic-fade-up"
          style={{
            position: 'absolute',
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
            fontSize: icon.size,
            opacity: 0,
            animationDelay: icon.delay,
            ['--rot' as string]: icon.rotate,
            ['--float-delay' as string]: `${i * 0.4}s`,
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
            userSelect: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: icon.symbol }}
        />
      ))}

      {/* Central content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          padding: '120px 24px 80px',
        }}
      >
        {/* Eyebrow */}
        <div
          className="exotic-fade-up"
          style={{
            animationDelay: '0.1s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '32px', height: '1px', background: 'rgba(52,211,153,0.6)' }} />
          <span style={{ color: '#34d399', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>
            Hampstead, London &middot; Est. 2008
          </span>
          <div style={{ width: '32px', height: '1px', background: 'rgba(52,211,153,0.6)' }} />
        </div>

        {/* Main title — bold condensed */}
        <h1
          className="exotic-fade-up"
          style={{
            animationDelay: '0.22s',
            fontFamily: '"Arial Black", "Impact", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
            fontWeight: 900,
            color: '#f0fdf4',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            marginBottom: '6px',
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
          }}
        >
          Exotic Animal
        </h1>
        <h1
          className="exotic-fade-up"
          style={{
            animationDelay: '0.32s',
            fontFamily: '"Arial Black", "Impact", "Helvetica Neue", sans-serif',
            fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            background: 'linear-gradient(90deg, #34d399 0%, #fb923c 55%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Specialists
        </h1>

        {/* Subtitle */}
        <p
          className="exotic-fade-up"
          style={{
            animationDelay: '0.44s',
            fontSize: '1.1rem',
            color: 'rgba(209,250,229,0.8)',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 auto 40px',
            fontWeight: 300,
          }}
        >
          Creature Comforts — London&rsquo;s leading exotic veterinary clinic.
          Reptile, avian, rabbit, and small mammal specialists.
          24/7 emergency service staffed by exotic vets.
        </p>

        {/* Species tags — coral/amber accent chips */}
        <div
          className="exotic-fade-up"
          style={{
            animationDelay: '0.55s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '44px',
          }}
        >
          {['Reptiles', 'Exotic Birds', 'Rabbits', 'Small Mammals', 'Amphibians', '24/7 Emergency'].map((sp, i) => (
            <span
              key={sp}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                border: '1px solid',
                borderColor: i < 2 ? 'rgba(251,146,60,0.5)' : i < 4 ? 'rgba(251,191,36,0.5)' : 'rgba(52,211,153,0.5)',
                color: i < 2 ? '#fb923c' : i < 4 ? '#fbbf24' : '#34d399',
                background: i < 2 ? 'rgba(251,146,60,0.1)' : i < 4 ? 'rgba(251,191,36,0.1)' : 'rgba(52,211,153,0.1)',
              }}
            >
              {sp}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="exotic-fade-up"
          style={{ animationDelay: '0.65s', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#booking"
            style={{
              padding: '15px 36px',
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.03em',
              boxShadow: '0 4px 24px rgba(5,150,105,0.4)',
            }}
          >
            Book an Appointment
          </a>
          <a
            href="#plans"
            style={{
              padding: '15px 32px',
              background: 'rgba(52,211,153,0.1)',
              color: '#34d399',
              border: '1.5px solid rgba(52,211,153,0.4)',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View Wellness Plans
          </a>
        </div>
      </div>
    </section>
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exoticVetJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exoticFaqJsonLd) }}
      />

      <Navbar />

      <ExoticVetHero />

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

      <FAQAccordion items={faqs} verticalName="PetOS — Exotic" locale="en" />

      <Footer config={siteConfig} locale="en" />

      <WhatsAppCTA
        phoneNumber="442074358822"
        message="Hi Creature Comforts — I'd like to book an appointment for my exotic pet."
      />
    </div>
  )
}
