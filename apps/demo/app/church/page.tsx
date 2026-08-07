'use client'

import { ReviewCarousel } from '@scala-sites/core/components/review-carousel'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import { FAQAccordion } from '@scala-sites/core/components/faq-accordion'
import type { SiteConfig, Review, FAQItem } from '@scala-sites/core/lib/types'

// ─────────────────────────────────────────────
// PALETTE — Warm & Welcoming
// ─────────────────────────────────────────────
const C = {
  gold: '#b5942a',
  goldLight: '#d4b040',
  goldDim: '#8a7020',
  cream: '#faf5ef',
  creamDark: '#f0e8d8',
  deepRed: '#991b1b',
  deepRedLight: '#b91c1c',
  navy: '#1e293b',
  navyLight: '#334155',
  warmWhite: '#fffbf5',
  stone: '#78716c',
  stoneLight: '#a8a29e',
  parchment: '#f5e8d0',
} as const

// ─────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────
const siteConfig: SiteConfig = {
  name: "St. Andrew's Community Church",
  description: 'All Are Welcome — A community of faith in the heart of the city',
  url: 'https://standrewschurch.example.org',
  locale: 'en',
  vertical: 'churchos',
  theme: 'warm',
  branding: { primaryColor: C.gold, accentColor: C.deepRed },
  contact: {
    phone: '+44 1865 556 200',
    email: 'hello@standrewschurch.org',
    whatsapp: '+441865556200',
    address: '12 St Andrew\'s Road, Oxford OX1 3HN',
    coordinates: { lat: 51.7520, lng: -1.2577 },
  },
  social: {
    instagram: 'standrewsoxford',
    facebook: 'https://facebook.com/standrewsoxford',
  },
  seo: {
    title: "St. Andrew's Community Church — All Are Welcome",
    description: 'Welcoming church with services Sunday 10am & 6pm. Ministries for all ages.',
  },
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const serviceTimes = [
  { day: 'Sunday', services: ['Morning Worship — 10:00am', 'Evening Service — 6:00pm'], note: 'Children\'s programme runs during morning service' },
  { day: 'Wednesday', services: ['Midweek Prayer — 7:30pm'], note: 'In the Chapel Room' },
  { day: 'Friday', services: ['Youth Night — 7:00pm'], note: 'Ages 11–18' },
]

const upcomingEvents = [
  { date: 'Sun 10 Aug', name: 'Baptism Sunday', note: 'Morning service — join us to celebrate with our newest members' },
  { date: 'Thu 14 Aug', name: 'Summer Picnic', note: 'Christ Church Meadow, 1pm — bring food to share' },
  { date: 'Sun 17 Aug', name: 'Sermon Series Begins', note: '"Walking in Grace" — 8-week series starting this Sunday' },
]

const ministries = [
  {
    name: 'Youth',
    icon: '⚡',
    color: C.deepRed,
    description: 'Weekly sessions, residentials, and mentoring for young people aged 11-18. A safe space to explore faith and community.',
    leader: 'Luke & Emma Thompson',
    frequency: 'Friday 7pm',
  },
  {
    name: 'Music',
    icon: '🎵',
    color: C.gold,
    description: 'Our worship team leads Sunday services with contemporary and traditional music. We welcome musicians and vocalists of all ability levels.',
    leader: 'James Whitfield',
    frequency: 'Rehearsal Thursdays 7:30pm',
  },
  {
    name: 'Outreach',
    icon: '🌍',
    color: C.navy,
    description: 'Serving our local community through food bank partnerships, street pastors, and links with Oxford\'s refugee community.',
    leader: 'Sarah & Phil Morris',
    frequency: 'Monthly projects',
  },
  {
    name: 'Small Groups',
    icon: '📖',
    color: '#0f766e',
    description: '12 small groups meeting weekly across Oxford for Bible study, prayer, and real friendship. Never too late to join.',
    leader: 'Various leaders',
    frequency: '12 groups · various nights',
  },
  {
    name: 'Children',
    icon: '🌈',
    color: '#9333ea',
    description: 'Engaging, creative programmes during Sunday morning services for ages 0-10. Safety-checked volunteers, nurturing environment.',
    leader: 'Rebecca & Dan Shaw',
    frequency: 'Sunday 10am',
  },
  {
    name: 'Seniors',
    icon: '☕',
    color: C.goldDim,
    description: 'Monthly lunches, home visiting programme, and a mid-week coffee fellowship for our older members and the wider community.',
    leader: 'Margaret Holt',
    frequency: 'Wednesday 2pm + monthly lunch',
  },
]

const teamMembers = [
  { name: 'Rev. Daniel Wright', role: 'Senior Pastor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&facepad=3' },
  { name: 'Rachel Scott', role: 'Associate Pastor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&facepad=3' },
  { name: 'Tom Ashby', role: 'Youth & Families', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&facepad=3' },
  { name: 'Grace Okonkwo', role: 'Community Outreach', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&facepad=3' },
]

const reviews: Review[] = [
  {
    id: '1',
    author: 'Philippa C.',
    rating: 5,
    text: "We moved to Oxford not knowing a soul. St. Andrew's welcomed us within minutes of walking through the door. Six years later, this community is our family.",
    date: '2026-07-20',
    source: 'google',
    verified: true,
  },
  {
    id: '2',
    author: 'Kwame A.',
    rating: 5,
    text: "I came skeptical and left moved. The sermon was thoughtful and real, the music was extraordinary, and not once did I feel judged. I've been back every week since.",
    date: '2026-07-28',
    source: 'google',
    verified: true,
  },
  {
    id: '3',
    author: 'Hannah G.',
    rating: 5,
    text: "The children's programme is absolutely brilliant. My two love coming on Sunday mornings and I can relax knowing they're safe and having fun while I worship.",
    date: '2026-08-03',
    source: 'google',
    verified: true,
  },
  {
    id: '4',
    author: 'David & Linda S.',
    rating: 5,
    text: "We've been attending for 22 years. This church has held us through grief and joy. The community here is like nothing else — real, honest, and always present.",
    date: '2026-07-14',
    source: 'tripadvisor',
    verified: true,
  },
]

const faqs: FAQItem[] = [
  { question: 'Do I need to be a Christian to attend?', answer: 'Not at all. Everyone is genuinely welcome regardless of background, belief, or where you are on your journey. Many people come exploring for the first time — we love that.' },
  { question: 'What should I wear?', answer: 'Come as you are, literally. Some people dress up, some are in jeans and trainers. There is no dress code and no expectation — just come.' },
  { question: 'Is there parking?', answer: 'There are two public car parks within 5 minutes\' walk on Pemberton Road and at the Westgate. Alternatively, Oxford city centre is well served by park-and-ride.' },
  { question: 'How can I join a small group?', answer: 'The easiest way is to fill in the connection card at the back of church or drop us a WhatsApp. We\'ll match you to a group near your home and suited to your stage of life.' },
  { question: 'How can I give financially?', answer: 'We collect an offering during the Sunday morning service, or you can give by bank transfer or standing order. Details are in our weekly bulletin. Gift Aid makes a big difference if you are a UK taxpayer.' },
]

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
const churchJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  '@id': 'https://standrewschurch.example.org',
  name: "St. Andrew's Community Church",
  description: 'Welcoming, inclusive community church in Oxford with Sunday services and ministries for all ages.',
  url: 'https://standrewschurch.example.org',
  telephone: '+44 1865 556 200',
  email: 'hello@standrewschurch.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "12 St Andrew's Road",
    addressLocality: 'Oxford',
    postalCode: 'OX1 3HN',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.7520, longitude: -1.2577 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:30', closes: '19:30' },
  ],
  sameAs: ['https://instagram.com/standrewsoxford', 'https://facebook.com/standrewsoxford'],
}

const churchFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

// Stained glass geometric pattern
function StainedGlassPattern({ opacity = 0.15 }: { opacity?: number }) {
  const shapes = [
    { points: '0,0 120,0 60,100', color: C.deepRed },
    { points: '120,0 240,0 180,100', color: C.gold },
    { points: '240,0 360,0 300,100', color: C.navy },
    { points: '60,100 120,0 180,100', color: C.gold },
    { points: '180,100 240,0 300,100', color: C.deepRed },
    { points: '0,100 60,100 0,200', color: C.navy },
    { points: '60,100 180,100 120,200', color: '#9333ea' },
    { points: '180,100 300,100 240,200', color: C.gold },
    { points: '300,100 360,100 360,200', color: C.deepRed },
    { points: '0,200 120,200 60,300', color: C.gold },
    { points: '120,200 240,200 180,300', color: C.navy },
    { points: '240,200 360,200 300,300', color: '#9333ea' },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 360 300"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity }}
      >
        {shapes.map((s, i) => (
          <polygon key={i} points={s.points} fill={s.color} stroke={C.warmWhite} strokeWidth="2" />
        ))}
      </svg>
    </div>
  )
}

// Church arch CSS
function ChurchArch({ color = C.gold }: { color?: string }) {
  return (
    <div
      className="w-16 h-24 mx-auto"
      style={{
        border: `3px solid ${color}`,
        borderRadius: '40px 40px 0 0',
        borderBottom: 'none',
        opacity: 0.7,
      }}
    />
  )
}

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `${C.warmWhite}f5`,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.gold}30`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ChurchArch color={C.gold} />
          <div>
            <span className="font-bold text-sm" style={{ color: C.navy, fontFamily: 'Georgia, serif' }}>
              St. Andrew&apos;s
            </span>
            <span className="block text-[10px] tracking-[2px] uppercase" style={{ color: C.stoneLight }}>
              Community Church
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Ministries', 'Connect', 'Giving'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: C.navyLight }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.navyLight)}
            >
              {item}
            </a>
          ))}
          <a
            href="#services"
            className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300"
            style={{ backgroundColor: C.deepRed, color: C.cream }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.deepRedLight)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.deepRed)}
          >
            Plan a Visit
          </a>
        </div>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function ChurchPage() {
  return (
    <div style={{ backgroundColor: C.warmWhite, color: C.navy }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(churchFaqJsonLd) }} />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — Welcoming Community
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Warm gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${C.parchment} 0%, ${C.cream} 50%, ${C.creamDark} 100%)`,
          }}
        />

        {/* Stained glass geometric pattern */}
        <StainedGlassPattern opacity={0.12} />

        {/* Church photo */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=900&h=1100&fit=crop&q=85"
            alt="St. Andrew's Community Church interior"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${C.cream} 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-20">
          <div className="max-w-xl">
            {/* Church arch decorative */}
            <div className="mb-8">
              <div
                className="w-20 h-28 inline-block relative"
                style={{
                  border: `3px solid ${C.gold}`,
                  borderRadius: '50px 50px 0 0',
                  borderBottom: 'none',
                }}
              >
                <div
                  className="absolute inset-2 rounded-full opacity-20"
                  style={{ background: `radial-gradient(${C.gold}, transparent)` }}
                />
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: C.gold }}>
              Oxford, Since 1892
            </p>

            <h1
              className="text-5xl md:text-7xl font-light leading-tight mb-6"
              style={{ color: C.navy, fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.1 }}
            >
              All Are<br />
              <span style={{ color: C.gold }}>Welcome.</span>
            </h1>

            <p className="text-lg font-light leading-relaxed mb-10" style={{ color: C.stone }}>
              A warm, inclusive community of faith in the heart of Oxford.
              Wherever you are in your journey — doubting, seeking, or settled
              in your belief — there is a place for you here.
            </p>

            {/* Service times — prominent */}
            <div
              className="p-6 rounded-2xl mb-10"
              style={{ backgroundColor: C.warmWhite, boxShadow: '0 2px 20px rgba(0,0,0,0.08)', border: `1px solid ${C.gold}25` }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>
                Sunday Services
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-10 rounded-full" style={{ backgroundColor: C.gold }} />
                  <div>
                    <div className="font-bold text-lg" style={{ color: C.navy }}>10:00am</div>
                    <div className="text-xs" style={{ color: C.stoneLight }}>Morning Worship</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-10 rounded-full" style={{ backgroundColor: C.deepRed }} />
                  <div>
                    <div className="font-bold text-lg" style={{ color: C.navy }}>6:00pm</div>
                    <div className="text-xs" style={{ color: C.stoneLight }}>Evening Service</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: C.deepRed, color: C.cream }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.deepRedLight; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.deepRed; e.currentTarget.style.transform = 'scale(1)' }}
              >
                Plan Your Visit
              </a>
              <a
                href="#ministries"
                className="px-8 py-3.5 rounded-full text-sm font-semibold border-2 uppercase tracking-wider transition-all duration-300"
                style={{ borderColor: C.navy, color: C.navy }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.navy; e.currentTarget.style.color = C.cream }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.navy }}
              >
                Get Connected
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THIS WEEK
          ═══════════════════════════════════════ */}
      <section
        id="services"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.navy }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Service times */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: C.gold }}>Service Times</p>
            <h2 className="text-4xl md:text-5xl font-light mb-10" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              Join Us This Week
            </h2>
            <div className="space-y-6">
              {serviceTimes.map((service) => (
                <div
                  key={service.day}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: `${C.cream}10`, border: `1px solid ${C.gold}20` }}
                >
                  <h3 className="font-bold text-lg mb-3" style={{ color: C.gold }}>{service.day}</h3>
                  {service.services.map((s, i) => (
                    <p key={i} className="text-base font-light mb-1" style={{ color: C.cream }}>{s}</p>
                  ))}
                  <p className="text-xs mt-2" style={{ color: C.stoneLight }}>{service.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming events + this week's sermon */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: C.gold }}>Coming Up</p>
            <h2 className="text-4xl md:text-5xl font-light mb-10" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              This Week&apos;s<br />Highlights
            </h2>

            {/* Sermon series card */}
            <div
              className="p-6 rounded-2xl mb-6"
              style={{ background: `linear-gradient(135deg, ${C.gold}20, ${C.deepRed}15)`, border: `1px solid ${C.gold}30` }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.goldLight }}>Current Series</p>
              <h3 className="text-xl font-light mb-2" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
                &ldquo;Walking in Grace&rdquo;
              </h3>
              <p className="text-sm font-light" style={{ color: C.stoneLight }}>
                8-week series · Rev. Daniel Wright · Begins Sunday 17 August
              </p>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((ev) => (
                <div
                  key={ev.name}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: `${C.cream}08`, border: `1px solid ${C.cream}15` }}
                >
                  <div
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-center flex-shrink-0"
                    style={{ backgroundColor: `${C.gold}25`, color: C.gold, minWidth: '72px' }}
                  >
                    {ev.date}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm" style={{ color: C.cream }}>{ev.name}</h4>
                    <p className="text-xs mt-0.5" style={{ color: C.stoneLight }}>{ev.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MINISTRIES
          ═══════════════════════════════════════ */}
      <section
        id="ministries"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.warmWhite }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: C.gold }}>Community</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.navy, fontFamily: 'Georgia, serif' }}>
              Ministries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ministries.map((min) => (
              <div
                key={min.name}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${min.color}20`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${min.color}50` }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${min.color}20` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{min.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: C.navy, fontFamily: 'Georgia, serif' }}>{min.name}</h3>
                    <p className="text-xs" style={{ color: min.color }}>{min.frequency}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: C.stone }}>{min.description}</p>
                <p className="text-xs" style={{ color: C.stoneLight }}>Led by {min.leader}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM
          ═══════════════════════════════════════ */}
      <section
        id="connect"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: C.creamDark }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: C.gold }}>Our Team</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.navy, fontFamily: 'Georgia, serif' }}>
              Meet the Pastoral Team
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4" style={{ border: `3px solid ${C.gold}40` }}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-sm" style={{ color: C.navy }}>{member.name}</h3>
                <p className="text-xs mt-1" style={{ color: C.gold }}>{member.role}</p>
              </div>
            ))}
          </div>

          {/* Giving */}
          <div
            id="giving"
            className="mt-20 p-10 rounded-3xl text-center"
            style={{ backgroundColor: C.navy }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: C.gold }}>Giving</p>
            <h2 className="text-3xl font-light mb-4" style={{ color: C.cream, fontFamily: 'Georgia, serif' }}>
              Supporting the Work
            </h2>
            <p className="text-base font-light max-w-xl mx-auto mb-8" style={{ color: C.stoneLight }}>
              Every gift enables us to serve our community, maintain our building, and continue our outreach programs.
              All giving is treated with complete confidentiality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
                style={{ backgroundColor: C.gold, color: C.navy }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.gold)}
              >
                Set Up Giving
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-sm font-semibold border-2 uppercase tracking-wider transition-all duration-300"
                style={{ borderColor: C.cream, color: C.cream }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${C.cream}15` }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: C.gold }}>
            Our Community
          </p>
          <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.navy, fontFamily: 'Georgia, serif' }}>
            What People Say
          </h2>
        </div>
        <ReviewCarousel reviews={reviews} locale="en" />
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" id="contact" style={{ backgroundColor: C.creamDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: C.gold }}>
              First Visit?
            </p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: C.navy, fontFamily: 'Georgia, serif' }}>
              Frequently Asked
            </h2>
          </div>
          <FAQAccordion items={faqs} locale="en" />
        </div>
      </section>

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA phoneNumber="+441865556200" message="Hi! I'd like to find out more about St. Andrew's Church" vertical="churchos" />
    </div>
  )
}
