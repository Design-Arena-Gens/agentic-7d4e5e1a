import { ScrapedBlock } from "@/src/lib/scrape"
import { Hero } from "./Hero"
import { motion } from "framer-motion"

export function ContentRenderer({ blocks }: { blocks: ScrapedBlock[] }) {
  return (
    <div className="container-max space-y-10">
      {blocks.map((block, idx) => {
        if (block.type === 'hero') {
          return <Hero key={idx} title={block.title} subtitle={block.subtitle} image={block.image} />
        }
        if (block.type === 'heading') {
          const Heading = block.level === 2 ? 'h2' : 'h3'
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Heading className="text-2xl md:text-3xl font-semibold tracking-tight">{block.text}</Heading>
            </motion.div>
          )
        }
        if (block.type === 'paragraph') {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          )
        }
        if (block.type === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul'
          return (
            <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <ListTag className="list-disc pl-6 space-y-1 text-[var(--muted)]">
                {block.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ListTag>
            </motion.div>
          )
        }
        if (block.type === 'image') {
          return (
            <motion.img
              key={idx}
              src={block.src}
              alt={block.alt || ''}
              className="rounded-xl border border-white/10 shadow-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          )
        }
        return null
      })}
    </div>
  )
}
