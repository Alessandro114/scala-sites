/** @type {import('next').NextConfig} */
const nextConfig = {
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
