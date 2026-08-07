import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WaveRider Surf School — Learn to Surf in Cornwall',
  description: 'ISA-certified surf school in Newquay, Cornwall. Beginner to advanced lessons, equipment rental, and surf camps. Book your lesson today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
