import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Meridian Gallery — Contemporary Art in the Heart of London',
  description: 'A leading contemporary art gallery showcasing emerging and established artists. Current exhibitions, permanent collection, events, workshops, and art shop. Visit us in Mayfair.',
  keywords: ['art gallery', 'contemporary art', 'exhibitions', 'London gallery', 'art collection', 'gallery events', 'art shop', 'Mayfair gallery'],
  openGraph: {
    title: 'The Meridian Gallery — Contemporary Art in London',
    description: 'Discover exceptional contemporary art at The Meridian Gallery, Mayfair. Exhibitions, permanent collection, artist talks and workshops.',
    type: 'website',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
