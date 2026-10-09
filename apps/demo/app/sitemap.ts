import type { MetadataRoute } from 'next'
import { verticals } from './lib/catalog'

const BASE_URL = 'https://sites.get-scala.com'

// Derived from the template catalog (lib/catalog.ts) so the sitemap can never
// drift from the gallery. Named client-demo routes (labrace, immobilcapital,
// rse-tenderos, costruzioni) are not in the catalog on purpose: unlinked-by-design.
const PUBLIC_SLUGS = verticals.map((v) => v.slug)

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...PUBLIC_SLUGS.map((slug) => ({
      url: `${BASE_URL}${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
