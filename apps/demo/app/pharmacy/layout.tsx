import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Greenleaf Pharmacy | NHS Prescriptions, Vaccinations & Health Checks London',
  description: 'Your trusted community pharmacy in London. NHS prescriptions, travel vaccinations, health checks, smoking cessation and free home delivery. Open Mon–Sat 8am–8pm.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
