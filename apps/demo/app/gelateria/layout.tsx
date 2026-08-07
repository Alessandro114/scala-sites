import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gelateria Paradiso — Artigianale dal 1978',
  description: 'Authentic Italian artisan gelato made fresh daily. 16 classic and seasonal flavours, vegan sorbets, and catering for events. Zero additives, all natural ingredients.',
  keywords: ['gelato', 'gelateria', 'artisan gelato', 'Italian ice cream', 'gelato artigianale', 'sorbet', 'vegan gelato'],
  openGraph: {
    title: 'Gelateria Paradiso — Artigianale dal 1978',
    description: 'Handmade Italian gelato from the finest natural ingredients. No additives, no shortcuts. Pure summer.',
    type: 'website',
  },
}

export default function GelateriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
