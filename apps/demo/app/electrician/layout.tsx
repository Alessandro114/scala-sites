import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VoltPro Electrical | NICEIC Approved Electricians | 24/7 Emergency',
  description: 'Licensed NICEIC electricians for home and commercial properties. Rewiring, fuse box upgrades, EV charger installation, fire alarms, and 24/7 emergency call-out. Free estimates.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
