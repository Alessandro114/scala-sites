import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chambers & Sterling LLP — Law Firm',
  description: 'Full-service law firm in the City of London. Corporate, litigation, private client.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
