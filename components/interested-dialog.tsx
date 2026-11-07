'use client'

import { Phone, MessageCircle, X } from 'lucide-react'
import type { PublicProperty } from '@/lib/types'
import { localized } from '@/lib/types'
import { companySettings } from '@/lib/mock-data'
import { useTranslation } from './i18n-provider'

export function InterestedDialog({ property, onClose }: { property: PublicProperty | null; onClose: () => void }) {
  const { language, t } = useTranslation(); if (!property) return null
  const lang = language || 'ku'; const message = `${t('whatsappMessage')} ${property.id}`; const whatsapp = companySettings.socialLinks.whatsapp && companySettings.socialLinks.whatsapp !== '#' ? companySettings.socialLinks.whatsapp : `https://wa.me/${companySettings.phones[0].replace(/\D/g, '')}`
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="interest-title"><div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-[#b27b45]">{property.id}</p><h2 id="interest-title" className="mt-1 text-2xl font-bold text-[#1d4035]">{t('interested')}</h2><p className="mt-1 text-stone-600">{localized(property.title, lang)}</p></div><button type="button" onClick={onClose} aria-label={t('close')} className="rounded-full p-2 text-stone-500 hover:bg-stone-100"><X /></button></div><div className="mt-6 grid gap-3"><p className="text-sm font-semibold text-[#1d4035]">{t('callUs')}</p>{companySettings.phones.map(phone => <a key={phone} href={`tel:${phone}`} className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3 text-sm"><span>{phone}</span><Phone data-icon="inline-end" className="text-[#b27b45]" /></a>)}<a href={`${whatsapp}${whatsapp.includes('?') ? '&' : '?'}text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[#1d4035] px-4 py-3 font-semibold text-white"><MessageCircle data-icon="inline-start" /> WhatsApp</a></div><div className="mt-6 border-t border-stone-200 pt-5 text-sm text-stone-600"><p><strong>{t('answerDays')}:</strong> {localized(companySettings.availableDays, lang)}</p><p className="mt-1"><strong>{t('officeHours')}:</strong> {companySettings.hours}</p></div></div></div>
}
