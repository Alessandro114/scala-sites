import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resonance Music Academy — Learn Any Instrument, London',
  description: 'Professional music tuition for all ages and abilities in Islington, London. Guitar, piano, violin, drums, singing, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
