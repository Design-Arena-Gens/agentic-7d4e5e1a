import Link from 'next/link'
import { LocaleSwitcher } from './LocaleSwitcher'

export function Navbar({ locale }: { locale: string }) {
  const nav = [
    { href: `/${locale}`, label: 'Home' },
    { href: `/${locale}/about`, label: 'About' },
    { href: `/${locale}/solutions`, label: 'Solutions' },
    { href: `/${locale}/clients`, label: 'Clients' },
    { href: `/${locale}/contact`, label: 'Contact' }
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold tracking-tight text-white text-lg">
          FinBridge
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  )
}
