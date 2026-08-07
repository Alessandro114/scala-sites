import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Clara Marsh | Psychologist — Anxiety, Trauma & CBT London',
  description: 'Chartered psychologist offering therapy for anxiety, depression, trauma and couples. CBT, EMDR and person-centred approaches. Strictly confidential. Individual from £120.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
