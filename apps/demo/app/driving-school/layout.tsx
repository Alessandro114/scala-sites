import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premier Drive Academy — Driving School London',
  description: '94% first-time pass rate. Manual, automatic, intensive & motorway lessons. DVSA-approved instructors. Book your lesson today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
