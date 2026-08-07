import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elena Vasquez Photography | Portrait, Wedding & Commercial',
  description: 'Award-winning photographer in London specialising in wedding, portrait, and commercial photography. Packages from £500. Book your session today.',
  openGraph: {
    title: 'Elena Vasquez Photography | Portrait, Wedding & Commercial',
    description: 'Award-winning photographer in London specialising in wedding, portrait, and commercial photography. Packages from £500. Book your session today.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Elena Vasquez Photography',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
