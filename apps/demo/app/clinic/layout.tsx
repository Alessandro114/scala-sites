import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harley Health Clinic — Private Medical Practice',
  description: 'Private GP and specialist clinic on Harley Street, London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
