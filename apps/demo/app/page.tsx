import type { Metadata } from 'next'
import HomeClient from './home-client'

// Canonical + hreflang live on the home page only: child routes must not inherit them.
// English is the default (x-default); other languages are reached with ?lang=xx.
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      it: '/?lang=it',
      es: '/?lang=es',
      pt: '/?lang=pt',
      de: '/?lang=de',
      fr: '/?lang=fr',
      'x-default': '/',
    },
  },
}

export default function Home() {
  return <HomeClient />
}
