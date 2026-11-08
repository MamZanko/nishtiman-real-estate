'use client'

import { Globe2 } from 'lucide-react'
import { useTranslation } from './i18n-provider'
import type { Language } from '@/lib/types'

const languages: Language[] = ['ku', 'ar', 'en']

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()
  const activeLanguage = language || 'ku'
  const nextLanguage = languages[(languages.indexOf(activeLanguage) + 1) % languages.length]

  return (
    <button
      type="button"
      aria-label={`Change language, currently ${activeLanguage.toUpperCase()}`}
      onClick={() => setLanguage(nextLanguage)}
      className="group inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3 py-2 shadow-sm transition hover:border-[#b27b45] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b27b45] focus-visible:ring-offset-2"
    >
      <Globe2 className="size-4 text-[#b27b45]" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#1d4035]">{activeLanguage}</span>
    </button>
  )
}
