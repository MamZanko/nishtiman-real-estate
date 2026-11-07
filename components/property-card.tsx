'use client'

import Link from 'next/link'
import { BedDouble, Ruler, ArrowUpRight } from 'lucide-react'
import type { PublicProperty, Language } from '@/lib/types'
import { formatMoney, localized } from '@/lib/types'
import { useTranslation } from './i18n-provider'

export function PropertyCard({ property, onInterest }: { property: PublicProperty; onInterest: (property: PublicProperty) => void }) {
  const { language, t } = useTranslation()
  const lang = language || 'ku'
  const statusKey = `status${property.status[0].toUpperCase()}${property.status.slice(1)}`
  return <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="relative aspect-[4/3] overflow-hidden"><img src={property.coverImage} alt={localized(property.title, lang)} className="size-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2"><span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#1d4035]">{property.id}</span>{property.status !== 'available' && <span className="rounded-full bg-[#b27b45] px-3 py-1 text-xs font-semibold text-white">{t(statusKey)}</span>}</div></div>
    <div className="p-5"><div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-[#b27b45]">{property.listingType === 'sale' ? t('forSale') : t('forRent')}</span><span className="text-xs text-stone-500">{localized(property.city, lang)}</span></div><h2 className="mt-2 text-xl font-bold text-[#1d4035]">{localized(property.title, lang)}</h2><p className="mt-2 text-2xl font-bold text-[#b27b45]">{formatMoney(property.price, property.currency, lang)}{property.rentPeriod && <span className="ms-1 text-sm font-medium text-stone-500">/ {t(property.rentPeriod)}</span>}</p><div className="mt-4 flex flex-wrap gap-4 text-sm text-stone-600"><span className="inline-flex items-center gap-1"><Ruler data-icon="inline-start"/> {property.size} {t('sqm')}</span>{property.rooms && <span className="inline-flex items-center gap-1"><BedDouble data-icon="inline-start"/> {property.rooms} {t('rooms')}</span>}</div><div className="mt-5 flex gap-2"><Link href={`/properties/${property.id}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#1d4035] px-3 py-2.5 text-sm font-semibold text-[#1d4035] hover:bg-[#edf3ef]">{t('details')} <ArrowUpRight data-icon="inline-end"/></Link><button type="button" onClick={() => onInterest(property)} className="flex-1 rounded-xl bg-[#1d4035] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#285746]">{t('interested')}</button></div></div>
  </article>
}

export type { Language }
