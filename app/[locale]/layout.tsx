import type { Metadata } from 'next'
import '../globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'FinBridge',
  description: 'Financial technology solutions'
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Navbar locale={params.locale} />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
