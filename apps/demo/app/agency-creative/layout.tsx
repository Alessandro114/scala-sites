import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flux Creative — Brand & Content Agency, London',
  description: 'Brand strategy, content production, and creative direction for ambitious companies. Fitzrovia, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
