import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Napoletana — Autentica Pizza Napoletana | London',
  description: 'Authentic Neapolitan pizza in the heart of London. Wood-fired oven, 72-hour dough, imported Italian ingredients. Dine in or order online.',
  openGraph: {
    title: 'Napoletana — Autentica Pizza Napoletana | London',
    description: 'Authentic Neapolitan pizza in the heart of London. Wood-fired oven, 72-hour dough, imported Italian ingredients. Dine in or order online.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Napoletana Pizza',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
