import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VeloHub Bike Shop | Road, MTB, E-Bikes & Workshop Services — London',
  description: 'Ride. Repair. Repeat. Premium bikes, expert workshop services, test rides and cycling club. Road, mountain, e-bike and urban specialists. London.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
