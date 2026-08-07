import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NexGen IT Services — Managed IT, Cybersecurity & Cloud',
  description:
    'Managed IT support, cybersecurity, cloud migration and VoIP for SMEs. 99.99% uptime guaranteed. 24/7 helpdesk with 1-hour gold response SLA.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
