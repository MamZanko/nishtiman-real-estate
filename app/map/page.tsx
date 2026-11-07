'use client'

import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { I18nProvider, useTranslation } from '@/components/i18n-provider'
import { PublicFooter } from '@/components/public-footer'
import { PublicHeader } from '@/components/public-header'
import { publicProperties } from '@/lib/mock-data'
import { formatMoney, localized } from '@/lib/types'

function MapContent() {
  const { language, t } = useTranslation(); const lang = language || 'ku'
  const properties = publicProperties.filter((property) => property.status === 'available' || property.status === 'reserved')
  return <><PublicHeader /><main className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b45]">{t('map')}</p><h1 className="mt-2 text-4xl font-bold text-[#1d4035]">{t('mapProperties')}</h1><p className="mt-3 max-w-2xl text-stone-600">{t('mapIntro')}</p></div><div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_.7fr]"><div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-stone-200 bg-[#d9d1c3]" style={{ backgroundImage: 'linear-gradient(135deg, transparent 48%, rgba(255,255,255,.45) 49%, transparent 50%), linear-gradient(45deg, transparent 48%, rgba(255,255,255,.4) 49%, transparent 50%)', backgroundSize: '120px 120px' }}><div className="absolute inset-0 bg-[#7d9a83]/25" />{properties.map((property, index) => <Link key={property.id} href={`/properties/${property.id}`} className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center" style={{ left: `${22 + (index * 23) % 65}%`, top: `${28 + (index * 19) % 55}%` }}><span className="rounded-full bg-[#1d4035] px-3 py-1 text-xs font-bold text-white shadow-lg">{property.id}</span><MapPin className="fill-[#b27b45] text-[#1d4035]" /></Link>)}</div><aside className="flex flex-col gap-3">{properties.map(property => <Link key={property.id} href={`/properties/${property.id}`} className="rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-[#b27b45]"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold tracking-wider text-[#b27b45]">{property.id}</p><h2 className="mt-1 font-semibold text-[#1d4035]">{localized(property.title, lang)}</h2><p className="mt-1 text-sm text-stone-500">{localized(property.city, lang)}</p></div><ArrowUpRight className="text-[#b27b45]" /></div><p className="mt-3 font-bold text-[#b27b45]">{formatMoney(property.price, property.currency, lang)}</p></Link>)}</aside></div></main><PublicFooter /></>
}
export default function MapPage() { return <I18nProvider><MapContent /></I18nProvider> }
