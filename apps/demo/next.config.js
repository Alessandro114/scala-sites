/** @type {import('next').NextConfig} */
// Editor self-service: pagina STATICA in public/editor (generata da packages/sitekit/scripts/sync-editor.mjs). Header = file condiviso coi test E2E.
const EDITOR_HEADERS = Object.entries(require('../../packages/sitekit/editor-headers.json')).map(([key, value]) => ({ key, value }))

const nextConfig = {
  async rewrites() { return [{ source: '/editor', destination: '/editor/index.html' }] },
  async headers() { return [{ source: '/editor', headers: EDITOR_HEADERS }, { source: '/editor/:path*', headers: EDITOR_HEADERS }] },
  transpilePackages: [
    '@scala-sites/core',
    '@scala-sites/dineos',
    '@scala-sites/propertyos',
    '@scala-sites/beautyos',
    '@scala-sites/gymos',
    '@scala-sites/travelos',
    '@scala-sites/studioos',
    '@scala-sites/clinicoos',
    '@scala-sites/legalos',
    '@scala-sites/autoos',
    '@scala-sites/weddingos',
    '@scala-sites/petos',
    '@scala-sites/eduos',
    '@scala-sites/themes',
  ],
  staticPageGenerationTimeout: 120,
  images: {
    // Every template image is served from Unsplash. next/image refuses remote
    // hosts that are not declared here.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
}

module.exports = nextConfig
