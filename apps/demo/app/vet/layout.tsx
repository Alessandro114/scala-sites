import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pawsitive Care Veterinary Clinic',
  description: 'Modern veterinary clinic. Wellness plans, surgery, 24/7 emergency care.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
