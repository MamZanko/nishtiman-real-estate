'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from '@/locales/en.json'; import ku from '@/locales/ku.json'; import ar from '@/locales/ar.json'
import type { Language, TranslationDictionary } from '@/lib/types'
const dictionaries: Record<Language, TranslationDictionary> = { en, ku, ar }
type ContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: string) => string }
const I18nContext = createContext<ContextValue | null>(null)
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ku')
  useEffect(() => { const saved = window.localStorage.getItem('nishtiman-language') as Language | null; if (saved) setLanguageState(saved) }, [])
  useEffect(() => { if (!language) return; document.documentElement.lang = language; document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl' }, [language])
  const setLanguage = (next: Language) => { window.localStorage.setItem('nishtiman-language', next); setLanguageState(next) }
  const value = useMemo(() => ({ language, setLanguage, t: (key: string) => dictionaries[language][key] || dictionaries.en[key] || key }), [language])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
export function useTranslation() { const value = useContext(I18nContext); if (!value) throw new Error('useTranslation must be used inside I18nProvider'); return value }
