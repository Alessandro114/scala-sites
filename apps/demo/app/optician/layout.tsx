import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClearVision Opticians | Eye Tests, Designer Frames & Contact Lenses',
  description: 'Expert eye care in the heart of the city. Comprehensive eye examinations, designer frames, contact lenses, and children\'s vision care. Book your eye test today.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
