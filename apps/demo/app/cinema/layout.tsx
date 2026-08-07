import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Velvet Screen — Cinema | The Magic of Cinema',
  description: 'An independent cinema experience unlike any other. 4 boutique screens, unlimited memberships, and special events. Book tickets online.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
