import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iron Republic CrossFit',
  description: 'CrossFit box in Shoreditch, London. 26 classes per week, 3 certified coaches.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
