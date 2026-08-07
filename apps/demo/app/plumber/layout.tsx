import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swift Plumbing & Heating | Emergency Plumber — London',
  description:
    '24/7 emergency plumber in London. Boiler installation, bathroom fitting, drain unblocking, gas safety. Licensed, insured, 60-minute response. Call now.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
