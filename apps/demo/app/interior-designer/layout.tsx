import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atelier Lumière — Interior Design Studio',
  description: 'Award-winning interior design studio creating bespoke residential and commercial spaces. From full redesigns to consultations. Spaces that tell your story.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
