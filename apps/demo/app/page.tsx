import type { Metadata } from 'next'
import HomeClient from './home-client'

// Canonical lives on the home page only: child routes must not inherit it.
// No hreflang on purpose: the ?lang=xx variants are rendered client-side (the server
// HTML is always English) and canonicalise to "/", so hreflang would have no effect.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return <HomeClient />
}
