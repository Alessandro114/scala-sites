'use client'

import { useState, useMemo } from 'react'

interface Listing {
  id: string
  title: string
  address: string
  price: number
  currency: string
  type: 'sale' | 'rent'
  propertyType: string
  bedrooms: number
  bathrooms: number
  area: number
  areaUnit: string
  image: string
  featured?: boolean
  daysOnMarket?: number
  viewsLast24h?: number
}

interface ListingSearchProps {
  listings: Listing[]
  locale?: string
  onListingClick?: (id: string) => void
  whatsappNumber?: string
}

export function ListingSearch({ listings, locale = 'en', onListingClick, whatsappNumber }: ListingSearchProps) {
  const [search, setSearch] = useState('')
  const [type, setType] = useState<'all' | 'sale' | 'rent'>('all')
  const [propertyType, setPropertyType] = useState('all')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minBeds, setMinBeds] = useState('')
  const [sort, setSort] = useState<'newest' | 'price-asc' | 'price-desc'>('newest')

  const propertyTypes = useMemo(() => {
    const types = new Set(listings.map(l => l.propertyType))
    return Array.from(types)
  }, [listings])

  const filtered = useMemo(() => {
    let result = listings.filter(l => {
      if (search && !l.title.toLowerCase().includes(search.toLowerCase()) && !l.address.toLowerCase().includes(search.toLowerCase())) return false
      if (type !== 'all' && l.type !== type) return false
      if (propertyType !== 'all' && l.propertyType !== propertyType) return false
      if (minPrice && l.price < Number(minPrice)) return false
      if (maxPrice && l.price > Number(maxPrice)) return false
      if (minBeds && l.bedrooms < Number(minBeds)) return false
      return true
    })
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    return result
  }, [listings, search, type, propertyType, minPrice, maxPrice, minBeds, sort])

  const fmt = (n: number, cur: string) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
        {type === 'rent' ? 'Properties for Rent' : type === 'sale' ? 'Properties for Sale' : 'All Properties'}
        <span className="text-sm font-normal ml-3" style={{ color: 'var(--color-text-muted)' }}>
          {filtered.length} results
        </span>
      </h2>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="col-span-2 px-4 py-2.5 rounded-lg border text-sm"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
        />
        <select value={type} onChange={e => setType(e.target.value as typeof type)}
          className="px-3 py-2.5 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }}>
          <option value="all">Buy & Rent</option>
          <option value="sale">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <select value={propertyType} onChange={e => setPropertyType(e.target.value)}
          className="px-3 py-2.5 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }}>
          <option value="all">All Types</option>
          {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <input type="number" placeholder="Min price" value={minPrice} onChange={e => setMinPrice(e.target.value)}
          className="px-3 py-2.5 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }} />
        <input type="number" placeholder="Max price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)}
          className="px-3 py-2.5 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }} />
        <select value={sort} onChange={e => setSort(e.target.value as typeof sort)}
          className="px-3 py-2.5 rounded-lg border text-sm" style={{ borderColor: 'var(--color-border)' }}>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low→High</option>
          <option value="price-desc">Price: High→Low</option>
        </select>
      </div>

      {/* Listing grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(listing => (
          <article
            key={listing.id}
            className="rounded-xl overflow-hidden border transition-shadow hover:shadow-lg cursor-pointer"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
            onClick={() => onListingClick?.(listing.id)}
          >
            <div className="relative h-56 bg-gray-200">
              <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              {listing.featured && (
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase rounded-full text-white"
                  style={{ background: 'var(--color-primary)' }}>Featured</span>
              )}
              <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold uppercase rounded-full bg-white/90 text-gray-800">
                {listing.type === 'rent' ? 'Rent' : 'Sale'}
              </span>
              {listing.viewsLast24h && listing.viewsLast24h > 5 && (
                <span className="absolute bottom-3 left-3 px-2 py-1 text-xs bg-black/70 text-white rounded">
                  {listing.viewsLast24h} views today
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                {fmt(listing.price, listing.currency)}
                {listing.type === 'rent' && <span className="text-sm font-normal" style={{ color: 'var(--color-text-muted)' }}>/mo</span>}
              </p>
              <h3 className="font-semibold mt-1 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{listing.title}</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{listing.address}</p>
              <div className="flex gap-4 mt-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <span>{listing.bedrooms} bed</span>
                <span>{listing.bathrooms} bath</span>
                <span>{listing.area} {listing.areaUnit}</span>
              </div>
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in ${listing.title} (${listing.address})`}
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.03L.789 23.265l4.394-1.449A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.168 0-4.178-.588-5.912-1.613l-.424-.251-2.604.858.875-2.539-.276-.44A9.77 9.77 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818z"/></svg>
                  Ask on WhatsApp
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center py-12 text-lg" style={{ color: 'var(--color-text-muted)' }}>
          No properties match your criteria. Try adjusting filters.
        </p>
      )}
    </section>
  )
}
