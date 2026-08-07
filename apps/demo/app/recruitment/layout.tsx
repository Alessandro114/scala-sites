import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalentBridge Recruitment — Connecting Talent with Opportunity',
  description: 'Expert recruitment agency specialising in permanent, contract, and executive search across 15 industries. 5,000+ successful placements. Find your next hire or dream role today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
