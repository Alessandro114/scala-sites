import type { Metadata } from 'next'
import HomeClient from './home-client'

// Canonical lives on the home page only: child routes must not inherit it.
// hreflang can't be emitted through `alternates.languages`: Next 14 strips the
// "?lang=xx" query from those URLs, so every language would point at the same
// address. The language alternates are declared in sitemap.ts instead.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return <HomeClient />
}
