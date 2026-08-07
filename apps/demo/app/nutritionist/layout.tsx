import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nourish by Lena | Nutritionist — Weight Loss, Sports & Gut Health London',
  description: 'Registered nutritionist specialising in weight management, sports nutrition, gut health and plant-based diets. 12-Week Transform from £750. Initial consult £95.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
