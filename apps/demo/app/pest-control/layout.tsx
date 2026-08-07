import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ShieldPest Control | BPCA Certified | 24/7 Emergency Pest Removal',
  description: 'BPCA-certified pest control for homes and businesses. Rodents, insects, wasps, bed bugs, birds, and wildlife. Emergency same-day service. Discreet, guaranteed.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
