import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Nishtiman Real Estate', description: 'Trusted property guidance across Iraqi Kurdistan.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1d4035' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ku" dir="rtl"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics/>}</body></html> }
