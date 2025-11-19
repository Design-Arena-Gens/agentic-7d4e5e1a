import { scrapeRemotePath } from '@/src/lib/scrape'
import { ContentRenderer } from '@/components/ContentRenderer'

export const revalidate = 60

export default async function HomePage() {
  const page = await scrapeRemotePath('/')
  return <ContentRenderer blocks={page.blocks} />
}
