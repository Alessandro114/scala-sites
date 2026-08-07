import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SparkForce Commercial Cleaning',
  description: 'Commercial cleaning contracts in the City of London. Daily, weekly, and monthly service tiers.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
