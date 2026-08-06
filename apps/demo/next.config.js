/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@scala-sites/core',
    '@scala-sites/dineos',
    '@scala-sites/propertyos',
    '@scala-sites/beautyos',
    '@scala-sites/gymos',
    '@scala-sites/themes',
  ],
}

module.exports = nextConfig
