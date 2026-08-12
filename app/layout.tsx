import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const SITE_URL = 'https://centrolumiere.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Centro Lumière — Estética y bienestar en Valdepeñas',
  description:
    'Centro de estética y bienestar en Valdepeñas. Tratamientos faciales, corporales y productos naturales. Citas confirmadas por WhatsApp.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Centro Lumière — Estética y bienestar en Valdepeñas',
    description:
      'Tratamientos faciales, corporales y productos naturales. Citas por WhatsApp.',
    url: SITE_URL,
    siteName: 'Centro Lumière',
    images: [{ url: '/hero-poster.jpg' }],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro Lumière — Estética y bienestar en Valdepeñas',
    description: 'Tratamientos faciales, corporales y productos naturales.',
    images: ['/hero-poster.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-manrope bg-crudo text-base antialiased">{children}</body>
    </html>
  )
}
