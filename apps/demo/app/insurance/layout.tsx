import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meridian Insurance — Protection You Can Trust',
  description:
    'Independent insurance brokers offering Home, Motor, Business, Life, Travel and Pet cover. 50 years of expertise, 98% claims paid, local office service.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
