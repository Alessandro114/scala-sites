import type { SiteConfig, MenuItem, Service, PropertyListing, Review } from './types'

// Canonical last-modified date for all demo pages (AEO/SEO dateModified)
export const SITE_DATE_MODIFIED = '2026-08-11'

export function generateLocalBusinessJsonLd(config: SiteConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    description: config.seo.description,
    url: config.url,
    telephone: config.contact.phone,
    email: config.contact.email,
    dateModified: SITE_DATE_MODIFIED,
    address: config.contact.address ? {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address,
    } : undefined,
    geo: config.contact.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: config.contact.coordinates.lat,
      longitude: config.contact.coordinates.lng,
    } : undefined,
    sameAs: [
      config.social?.instagram,
      config.social?.facebook,
      config.social?.google,
    ].filter(Boolean),
  }
}

/**
 * Generates a SoftwareApplication / Product JSON-LD block for SCALA AI OS
 * vertical products. Used on all demo landing pages for AEO discoverability.
 * Pricing floor: lowPrice 9.90 (SOLO SARA), highPrice 197 (Scale plan).
 * NEVER set lowPrice to "0" — Starter/Free plan does not exist.
 */
export function generateScalaProductJsonLd(verticalName: string, verticalDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `SCALA ${verticalName}`,
    description: verticalDescription,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    dateModified: SITE_DATE_MODIFIED,
    url: 'https://get-scala.com',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '9.90',
      highPrice: '197',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'SOLO SARA',
          price: '9.90',
          priceCurrency: 'EUR',
          description: 'AI assistant for freelancers and solo operators',
        },
        {
          '@type': 'Offer',
          name: 'SMB Growth',
          price: '97',
          priceCurrency: 'EUR',
          description: 'Full AI operating system for growing businesses',
        },
        {
          '@type': 'Offer',
          name: 'SMB Scale',
          price: '197',
          priceCurrency: 'EUR',
          description: 'Advanced AI platform with WhatsApp, CRM, multi-location',
        },
      ],
    },
    provider: {
      '@type': 'Organization',
      name: 'SCALA AI OS',
      url: 'https://get-scala.com',
    },
  }
}

export function generateRestaurantJsonLd(config: SiteConfig, menu: MenuItem[]) {
  return {
    ...generateLocalBusinessJsonLd(config),
    '@type': 'Restaurant',
    servesCuisine: config.description,
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: groupBy(menu, 'category').map(([cat, items]) => ({
        '@type': 'MenuSection',
        name: cat,
        hasMenuItem: items.map(item => ({
          '@type': 'MenuItem',
          name: item.name,
          description: item.description,
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: item.currency,
          },
        })),
      })),
    },
  }
}

export function generateReviewJsonLd(reviews: Review[]) {
  if (!reviews.length) return null
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  return {
    '@type': 'AggregateRating',
    ratingValue: avg.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  }
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: SITE_DATE_MODIFIED,
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

function groupBy<T>(arr: T[], key: keyof T): [string, T[]][] {
  const map = new Map<string, T[]>()
  for (const item of arr) {
    const k = String(item[key])
    const existing = map.get(k) || []
    existing.push(item)
    map.set(k, existing)
  }
  return Array.from(map.entries())
}
