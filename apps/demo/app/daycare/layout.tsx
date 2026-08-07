import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Little Stars Nursery | Ofsted Outstanding Childcare, London',
  description: 'Award-winning nursery offering Montessori-inspired childcare for ages 0–5 in London. Baby, Toddler & Pre-School rooms. Book a visit today.',
  openGraph: {
    title: 'Little Stars Nursery | Ofsted Outstanding Childcare, London',
    description: 'Award-winning nursery offering Montessori-inspired childcare for ages 0–5 in London. Baby, Toddler & Pre-School rooms. Book a visit today.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Little Stars Nursery',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
