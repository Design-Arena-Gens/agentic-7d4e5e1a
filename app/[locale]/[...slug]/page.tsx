import { scrapeRemotePath } from '@/src/lib/scrape'
import { ContentRenderer } from '@/components/ContentRenderer'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
  const path = '/' + (params.slug?.join('/') ?? '') + '/'
  const page = await scrapeRemotePath(path)
  return { title: page.title || 'FinBridge' }
}

export default async function DynamicPage({ params }: { params: { slug?: string[] } }) {
  const path = '/' + (params.slug?.join('/') ?? '') + '/'
  const page = await scrapeRemotePath(path)
  return <ContentRenderer blocks={page.blocks} />
}
