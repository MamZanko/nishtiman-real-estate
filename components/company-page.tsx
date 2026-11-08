'use client'

import Link from 'next/link'
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { useTranslation } from '@/components/i18n-provider'
import { PublicFooter } from '@/components/public-footer'
import { PublicHeader } from '@/components/public-header'
import { companySettings } from '@/lib/mock-data'
import { localized } from '@/lib/types'

export function CompanyPage({ kind }: { kind: 'about' | 'services' | 'contact' }) {
  const { language, t } = useTranslation()
  const lang = language || 'ku'
  const content = {
    about: { eyebrow: 'Nishtiman', title: t('about'), intro: t('companyIntro'), cards: [t('mission'), t('trust'), t('localExpertise')] },
    services: { eyebrow: t('services'), title: t('services'), intro: t('servicesIntro'), cards: [t('renting'), t('selling'), t('propertyManagement')] },
    contact: { eyebrow: t('contact'), title: t('contact'), intro: t('contactIntro'), cards: [] },
  }[kind]

  return <><PublicHeader /><main>
    <section className="bg-[#1d4035] px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d5a66d]">{content.eyebrow}</p><h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">{content.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{content.intro}</p></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-5 md:grid-cols-3">{content.cards.map((card, index) => <article key={card} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm"><span className="flex size-11 items-center justify-center rounded-2xl bg-[#edf3ef] font-bold text-[#1d4035]">0{index + 1}</span><p className="mt-6 text-lg font-semibold leading-8 text-[#1d4035]">{card}</p></article>)}</div>
      {kind === 'contact' && <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-3xl bg-[#f5f3ee] p-7"><h2 className="text-2xl font-bold text-[#1d4035]">{t('contactDetails')}</h2><div className="mt-7 flex flex-col gap-5 text-stone-600"><p className="flex items-center gap-3"><Phone className="text-[#b27b45]" /><span dir="ltr" className="unicode-bidi-isolate">{companySettings.phones.join(' · ')}</span></p><p className="flex items-center gap-3"><Mail className="text-[#b27b45]" />{companySettings.email}</p><p className="flex items-center gap-3"><Clock3 className="text-[#b27b45]" />{localized(companySettings.availableDays, lang)} · {companySettings.hours}</p><p className="flex items-center gap-3"><MapPin className="text-[#b27b45]" />{t('officeAddress')}</p></div></div><div className="flex min-h-72 items-center justify-center rounded-3xl bg-[#d9d1c3] p-8 text-center"><div><ShieldCheck className="mx-auto size-12 text-[#1d4035]" /><h2 className="mt-4 text-2xl font-bold text-[#1d4035]">{t('visitOffice')}</h2><p className="mt-2 max-w-md text-stone-600">{t('mapIntro')}</p><Link href="/map" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1d4035] px-5 py-3 font-semibold text-white">{t('map')} <ArrowUpRight /></Link></div></div></div>}
    </section>
  </main><PublicFooter /></>
}
