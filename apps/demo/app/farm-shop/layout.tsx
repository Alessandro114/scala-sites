import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Green Acre Farm Shop — 100% Organic, Straight From Our Fields',
  description: 'Fresh seasonal produce, weekly veg boxes, dairy, meat, and preserves grown on our family farm. Subscribe to a weekly box and taste the difference.',
  keywords: ['farm shop', 'organic produce', 'veg box', 'seasonal vegetables', 'farm to table', 'local food', 'weekly box delivery'],
  openGraph: {
    title: 'Green Acre Farm Shop — 100% Organic, Straight From Our Fields',
    description: 'Weekly veg boxes, fresh dairy, heritage breed meat, and homemade preserves from our certified organic farm.',
    type: 'website',
  },
}

export default function FarmShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
