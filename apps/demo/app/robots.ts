import type { MetadataRoute } from 'next'

// Client-demo routes are unlinked-by-design (shared only via direct URL to
// the prospect) — keep them out of crawl/index even if a link ever leaks.
const PRIVATE_CLIENT_ROUTES = ['/labrace', '/immobilcapital', '/rse-tenderos', '/costruzioni']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: PRIVATE_CLIENT_ROUTES.flatMap((route) => [route, `${route}/`, `${route}/preventivo`]),
    },
    sitemap: 'https://sites.get-scala.com/sitemap.xml',
  }
}
