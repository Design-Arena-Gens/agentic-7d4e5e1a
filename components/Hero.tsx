"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero(props: { title: string; subtitle?: string; image?: string }) {
  const { title, subtitle, image } = props
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
      <div className="container-max grid gap-8 lg:grid-cols-2 items-center py-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-[var(--muted)] max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-64 md:h-80 lg:h-96"
          >
            <Image src={image} alt="" fill className="object-contain" sizes="(min-width: 1024px) 50vw, 100vw" />
          </motion.div>
        )}
      </div>
    </div>
  )
}
