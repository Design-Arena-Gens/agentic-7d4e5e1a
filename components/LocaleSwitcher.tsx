"use client"
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { clsx } from 'clsx'

const locales = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export function LocaleSwitcher() {
  const params = useParams<{ locale: string }>()
  const pathname = usePathname()
  const currentLocale = params?.locale || 'en'

  // Remove current locale prefix from pathname
  const withoutLocale = pathname?.replace(new RegExp(`^/${currentLocale}`), '') || '/'

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => {
        const href = `/${l.code}${withoutLocale}`
        const active = l.code === currentLocale
        return (
          <Link
            key={l.code}
            href={href}
            className={clsx(
              'px-2.5 py-1.5 rounded-md text-sm border transition-colors',
              active
                ? 'bg-brand/20 text-white border-brand/40'
                : 'bg-transparent text-[var(--muted)] border-white/10 hover:text-white hover:border-white/20'
            )}
            prefetch
          >
            {l.label}
          </Link>
        )
      })}
    </div>
  )
}
