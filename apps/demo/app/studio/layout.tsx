import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prism Creative Studio',
  description: 'Brand strategy and creative studio in Shoreditch, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
