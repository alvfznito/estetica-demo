import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Centro Belleza Lumière | Estética Premium',
  description:
    'Centro de estética premium en tu ciudad. Depilación láser, tratamientos faciales, masajes terapéuticos y maquillaje profesional. Primera consulta gratuita.',
  keywords: 'estética, belleza, depilación láser, facial, masaje, manicura, lumière',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-white text-negro antialiased">{children}</body>
    </html>
  )
}
