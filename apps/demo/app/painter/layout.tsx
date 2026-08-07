import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brushstroke Decorators | Interior & Exterior Painting & Decorating',
  description: 'Professional painting and decorating for homes and businesses. Interior and exterior painting, wallpapering, decorative finishes, and free colour consultation. Free quotes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
