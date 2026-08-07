import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Maison du Pain — Artisan Bakery Since 1962',
  description: 'Handcrafted sourdoughs, croissants, and celebration cakes baked fresh daily. Wedding cakes, custom orders, and loyalty rewards. Visit us in the heart of the city.',
  keywords: ['artisan bakery', 'sourdough bread', 'croissants', 'wedding cakes', 'custom cakes', 'fresh bread daily'],
  openGraph: {
    title: 'La Maison du Pain — Artisan Bakery Since 1962',
    description: 'Baked fresh daily. Sourdoughs, croissants, patisserie, and bespoke celebration cakes.',
    type: 'website',
  },
}

export default function BakeryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
