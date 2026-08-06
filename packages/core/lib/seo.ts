import type { SiteConfig, MenuItem, Service, PropertyListing, Review } from './types'

export function generateLocalBusinessJsonLd(config: SiteConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    description: config.seo.description,
    url: config.url,
    telephone: config.contact.phone,
    email: config.contact.email,
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
