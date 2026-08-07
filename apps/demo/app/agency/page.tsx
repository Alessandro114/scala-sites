'use client'

import { useState, useEffect } from 'react'
import { WhatsAppCTA } from '@scala-sites/core/components/whatsapp-cta'
import { Footer } from '@scala-sites/core/components/footer'
import type { SiteConfig } from '@scala-sites/core/lib/types'

// --- CONFIG ---

const siteConfig: SiteConfig = {
  name: 'Orbit Digital',
  description: 'Performance Marketing & Brand Strategy — Soho, London',
  url: 'https://orbitdigital.example.com',
  locale: 'en',
  vertical: 'studioos',
  theme: 'bold',
  branding: {
    primaryColor: '#0a0a0a',
    accentColor: '#ffffff',
  },
  contact: {
    phone: '+44 20 7946 0382',
    email: 'hello@orbitdigital.example.com',
    whatsapp: '+442079460382',
    address: '14 Ingestre Place, Soho, London W1F 0JL',
    coordinates: { lat: 51.5133, lng: -0.1367 },
  },
  social: {
    instagram: 'orbitdigital.agency',
    facebook: 'https://facebook.com/orbitdigital',
  },
  seo: {
    title: 'Orbit Digital | Performance Marketing & Brand Strategy, London',
    description:
      'Award-winning digital marketing agency in Soho. Paid media, SEO, brand strategy, and creative production for ambitious brands.',
  },
}

// --- DATA ---

const caseStudies = [
  {
    id: '1',
    title: 'Voltera Fashion',
    metric: '+340% ROAS',
    category: 'Paid Media',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    year: '2026',
  },
  {
    id: '2',
    title: 'Nuvem Fintech',
    metric: '£0 to £2.4M ARR',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    year: '2025',
  },
  {
    id: '3',
    title: 'Vitalis Health',
    metric: '+890% Organic',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
    year: '2025',
  },
  {
    id: '4',
    title: 'Maison Luxe',
    metric: '68% Open Rate',
    category: 'Email & CRM',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    year: '2026',
  },
  {
    id: '5',
    title: 'Kinetic App',
    metric: '280K Views M1',
    category: 'Creative & Social',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    year: '2026',
  },
  {
    id: '6',
    title: 'Meridian Edu',
    metric: 'CPL -62%',
    category: 'Paid Media',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
    year: '2025',
  },
]

const services = [
  {
    num: '01',
    title: 'Paid Media',
    brief: 'Full-funnel campaign management',
    detail: 'Meta, Google, TikTok, LinkedIn. We build, manage, and scale performance campaigns. Creative-led strategy with rigorous attribution. Average client ROAS: 4.1x.',
  },
  {
    num: '02',
    title: 'Brand Strategy',
    brief: 'Positioning that creates gravity',
    detail: 'Market research, positioning, messaging frameworks, visual identity systems. We build brands that attract rather than interrupt. Sprint format: 2 weeks.',
  },
  {
    num: '03',
    title: 'SEO & Content',
    brief: 'Organic traffic that compounds',
    detail: 'Technical SEO, programmatic content, and strategic link acquisition. We build organic engines that generate pipeline for years, not months.',
  },
  {
    num: '04',
    title: 'Email & CRM',
    brief: 'Revenue you own, not rent',
    detail: 'Lifecycle automation, audience segmentation, deliverability. Klaviyo, HubSpot, Salesforce. Average client: 4.2x revenue per subscriber increase.',
  },
  {
    num: '05',
    title: 'Creative Production',
    brief: 'In-house. No outsourcing.',
    detail: 'Ad creatives, landing pages, video, motion graphics. Senior creative team producing 40+ assets per month per client. UGC, static, animated, long-form.',
  },
  {
    num: '06',
    title: 'Analytics & CRO',
    brief: 'Measure what matters, fix what leaks',
    detail: 'GA4 implementation, server-side tracking, attribution modelling, and continuous conversion rate optimisation. We make data legible and actionable.',
  },
]

const team = [
  {
    name: 'Oliver Chase',
    role: 'Founder & Strategy',
    bio: '14 years. Ex-WPP, Ogilvy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    name: 'Zara Nkosi',
    role: 'Head of Paid Media',
    bio: '9 years. Ex-GroupM.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
  },
  {
    name: 'Marcus Ihejirika',
    role: 'Creative Director',
    bio: '11 years. Ex-R/GA, BBDO.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=500&fit=crop',
  },
  {
    name: 'Lena Bauer',
    role: 'SEO & Content Lead',
    bio: '8 years. Ex-Moz, Conductor.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
  },
]

const clients = [
  'Voltera', 'Nuvem', 'Vitalis', 'Maison', 'Kinetic',
  'Meridian', 'Apex', 'Stratos', 'Lumen', 'Forge',
]

// --- ROTATING WORD HOOK ---

function useRotatingWord(words: string[], interval = 2800) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length)
        setVisible(true)
      }, 400)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return { word: words[index], visible }
}

// --- NAVBAR ---

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <a href="#" className="text-white font-bold tracking-[0.15em] text-sm uppercase">
          Orbit
        </a>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Work', href: '#work' },
            { label: 'Services', href: '#services' },
            { label: 'Team', href: '#team' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs tracking-[0.15em] uppercase px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  )
}

// --- HERO ---

const rotatingWords = ['Brands', 'Revenue', 'Empires', 'Futures']
const wordColors = ['#ff4d4d', '#4dff91', '#4d9fff', '#ffd84d']

function HeroSection() {
  const { word, visible } = useRotatingWord(rotatingWords)
  const colorIndex = rotatingWords.indexOf(word)

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden grain">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <p
          className="text-white/30 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-10 reveal-up"
          style={{ fontVariant: 'all-small-caps', letterSpacing: '0.5em' }}
        >
          Performance Marketing & Brand Strategy
        </p>

        {/* Massive Title */}
        <h1 className="mb-8">
          <span
            className="block text-white font-black leading-[0.85] tracking-[-0.04em] reveal-up"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 11rem)' }}
          >
            We Build
          </span>
          <span
            className="block font-black leading-[0.85] tracking-[-0.04em] transition-all duration-400"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 11rem)',
              color: wordColors[colorIndex] || '#ff4d4d',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease, color 0.4s ease',
            }}
          >
            {word}
          </span>
        </h1>

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 reveal-up">
          {[
            '47 Brands Launched',
            '\u00A392M Revenue Generated',
            '6 Awards',
          ].map((stat) => (
            <span
              key={stat}
              className="text-white/25 text-[10px] md:text-xs tracking-[0.25em] uppercase"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group relative inline-block text-white text-xs md:text-sm tracking-[0.2em] uppercase px-10 py-4 border border-white/20 overflow-hidden transition-colors duration-500 hover:text-[#0a0a0a] reveal-up"
        >
          <span className="relative z-10">Start a Project &rarr;</span>
          <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0 animate-pulse" />
      </div>
    </section>
  )
}

// --- MARQUEE ---

function MarqueeSection() {
  const items = [...clients, ...clients, ...clients]

  return (
    <section className="relative bg-[#0a0a0a] py-6 border-y border-white/[0.04] overflow-hidden diagonal-bottom">
      <div className="marquee">
        <div className="flex items-center gap-0">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-white/15 text-xs md:text-sm tracking-[0.3em] uppercase whitespace-nowrap px-6"
            >
              {name} <span className="text-white/10 mx-2">{'\u2726'}</span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-0">
          {items.map((name, i) => (
            <span
              key={`dup-${name}-${i}`}
              className="text-white/15 text-xs md:text-sm tracking-[0.3em] uppercase whitespace-nowrap px-6"
            >
              {name} <span className="text-white/10 mx-2">{'\u2726'}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- SELECTED WORK ---

function WorkSection() {
  return (
    <section id="work" className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-10 grain">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.5em] uppercase mb-4 reveal-up">Selected Work</p>
            <h2
              className="text-white font-black tracking-[-0.03em] leading-[0.9] reveal-up"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Case Studies
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-sm mt-4 md:mt-0 reveal-up">
            Numbers, not adjectives. Real results for ambitious brands.
          </p>
        </div>

        {/* Bento grid */}
        <div className="bento-grid stagger-children">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative overflow-hidden reveal-scale cursor-pointer"
              style={{ borderRadius: '2px' }}
            >
              {/* Image */}
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  clipPath: 'inset(0)',
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-[#0a0a0a]/70 transition-colors duration-500" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase">
                  {study.category}
                </span>
              </div>

              {/* Content - slides up on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
              >
                <p className="text-white font-bold text-sm md:text-base mb-1">{study.title}</p>
                <p className="text-white/80 font-black text-lg md:text-2xl tracking-tight">{study.metric}</p>
                <div className="h-[1px] bg-white/20 mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  View Case Study &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- SERVICES ACCORDION ---

function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="services" className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-10 grain">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <p className="text-white/25 text-[10px] tracking-[0.5em] uppercase mb-4 reveal-up">What We Do</p>
        <h2
          className="text-white font-black tracking-[-0.03em] leading-[0.9] mb-16 md:mb-20 reveal-up"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Services
        </h2>

        {/* Accordion rows */}
        <div className="border-t border-white/[0.08]">
          {services.map((svc) => {
            const isOpen = expanded === svc.num
            return (
              <div
                key={svc.num}
                className="border-b border-white/[0.08] group cursor-pointer"
                onClick={() => setExpanded(isOpen ? null : svc.num)}
              >
                <div className="py-6 md:py-8 flex items-start md:items-center gap-6 md:gap-10 transition-all duration-300 hover:pl-2">
                  {/* Number */}
                  <span className="text-white/15 text-xs tracking-[0.2em] font-mono mt-1 md:mt-0 shrink-0">
                    {svc.num}
                  </span>

                  {/* Title + brief */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
                    <h3
                      className="text-white font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:text-white/80"
                      style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-white/25 text-sm md:text-right max-w-xs shrink-0">
                      {svc.brief}
                    </p>
                  </div>

                  {/* Toggle indicator */}
                  <span
                    className="text-white/20 text-lg shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                  >
                    +
                  </span>
                </div>

                {/* Expandable detail */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="text-white/35 text-sm leading-relaxed pl-10 md:pl-20 pr-10 pb-6 md:pb-8 max-w-2xl">
                    {svc.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// --- TEAM HORIZONTAL SCROLL ---

function TeamSection() {
  return (
    <section id="team" className="relative bg-[#0a0a0a] py-24 md:py-32 grain">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.5em] uppercase mb-4 reveal-up">The Team</p>
            <h2
              className="text-white font-black tracking-[-0.03em] leading-[0.9] reveal-up"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Senior People
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs mt-4 md:mt-0 reveal-up">
            No juniors on your account. Minimum 8 years experience per team member.
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="horizontal-scroll pl-6 md:pl-10 pb-4 gap-5 md:gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="glass-card w-[280px] md:w-[320px] overflow-hidden group reveal-up shrink-0"
            style={{ borderRadius: '16px' }}
          >
            {/* Photo */}
            <div className="relative h-[340px] md:h-[380px] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Info */}
            <div className="p-5 -mt-16 relative z-10">
              <p className="text-white font-bold text-base">{member.name}</p>
              <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1">{member.role}</p>
              <p className="text-white/20 text-[11px] mt-2">{member.bio}</p>
            </div>
          </div>
        ))}

        {/* Spacer for scroll */}
        <div className="w-10 shrink-0" />
      </div>
    </section>
  )
}

// --- CONTACT SPLIT SCREEN ---

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    budget: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Brief submitted', formData)
    setFormData({ name: '', company: '', budget: '', message: '' })
  }

  const budgetOptions = [
    'Under \u00A35k/mo',
    '\u00A35k\u2013\u00A310k/mo',
    '\u00A310k\u2013\u00A320k/mo',
    '\u00A320k+/mo',
    'Project-based',
  ]

  return (
    <section id="contact" className="relative min-h-screen grain">
      <div className="split-screen">
        {/* Left: Massive type */}
        <div className="relative bg-[#0a0a0a] flex items-center justify-center p-10 md:p-16 overflow-hidden">
          {/* Amber blob */}
          <div
            className="blob absolute -bottom-32 -right-32 w-[400px] h-[400px] opacity-20"
            style={{ background: 'radial-gradient(circle, #d97706, transparent 70%)' }}
          />

          <div className="relative z-10">
            <h2
              className="text-white font-black tracking-[-0.04em] leading-[0.85] reveal-up"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Let&rsquo;s<br />
              Build<br />
              <span className="text-outline text-white/30">Something</span>
            </h2>
            <p className="text-white/25 text-sm mt-8 max-w-sm reveal-up">
              Tell us about your brand, your goals, and the gap between.
              We respond within one working day.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="relative bg-[#0d0d0d] flex items-center justify-center p-10 md:p-16">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 reveal-up">
            {/* Name */}
            <div>
              <label className="text-white/25 text-[10px] tracking-[0.3em] uppercase block mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 focus:border-white/40 text-white text-sm py-3 outline-none transition-colors duration-300 placeholder:text-white/10"
                placeholder="Your name"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-white/25 text-[10px] tracking-[0.3em] uppercase block mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 focus:border-white/40 text-white text-sm py-3 outline-none transition-colors duration-300 placeholder:text-white/10"
                placeholder="Company name"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="text-white/25 text-[10px] tracking-[0.3em] uppercase block mb-2">Budget Range</label>
              <select
                value={formData.budget}
                onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 focus:border-white/40 text-white text-sm py-3 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                style={{ backgroundImage: 'none' }}
              >
                <option value="" className="bg-[#0a0a0a] text-white/40">Select budget</option>
                {budgetOptions.map(opt => (
                  <option key={opt} value={opt} className="bg-[#0a0a0a] text-white">{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-white/25 text-[10px] tracking-[0.3em] uppercase block mb-2">Brief</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 focus:border-white/40 text-white text-sm py-3 outline-none transition-colors duration-300 resize-none placeholder:text-white/10"
                placeholder="Tell us about your brand and growth goals"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full text-white text-xs tracking-[0.2em] uppercase py-4 border border-white/20 overflow-hidden transition-colors duration-500 hover:text-[#0a0a0a] mt-4"
            >
              <span className="relative z-10">Send Brief &rarr;</span>
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// --- PAGE ---

const agencyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Orbit Digital',
  description: 'Award-winning digital marketing agency in Soho. Paid media, SEO, brand strategy, and creative production for ambitious brands.',
  url: 'https://orbitdigital.example.com',
  telephone: '+44 20 7946 0382',
  email: 'hello@orbitdigital.example.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Ingestre Place, Soho',
    addressLocality: 'London',
    postalCode: 'W1F 0JL',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5133,
    longitude: -0.1367,
  },
  sameAs: [
    'https://instagram.com/orbitdigital.agency',
    'https://facebook.com/orbitdigital',
  ],
}

const agencyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What services does Orbit Digital offer?', acceptedAnswer: { '@type': 'Answer', text: 'We offer Paid Media (Meta, Google, TikTok, LinkedIn), Brand Strategy, SEO & Content, Email & CRM, Creative Production, and Analytics & CRO.' } },
    { '@type': 'Question', name: 'What is your average client ROAS?', acceptedAnswer: { '@type': 'Answer', text: 'Our average client ROAS on paid media is 4.1x. We build, manage, and scale performance campaigns with rigorous attribution.' } },
    { '@type': 'Question', name: 'How do I start a project with Orbit Digital?', acceptedAnswer: { '@type': 'Answer', text: 'Use the Start a Project form on this page — tell us about your brand, your goals, and your budget. We respond within one working day.' } },
    { '@type': 'Question', name: 'Do you outsource any creative work?', acceptedAnswer: { '@type': 'Answer', text: 'No. Our creative production is entirely in-house. Our senior creative team produces 40+ assets per month per client.' } },
  ],
}

export default function AgencyDemo() {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyFaqJsonLd) }} />
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ '--color-accent': '#ffffff' } as React.CSSProperties} />

      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />

      <Footer config={siteConfig} locale="en" />
      <WhatsAppCTA
        phoneNumber="442079460382"
        message="Hi Orbit Digital — I would like to discuss a growth project for our brand."
      />
    </div>
  )
}
