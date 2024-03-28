import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (e) => {
  const { base } = useRuntimeConfig().public
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[]
  return contentList.map((file) => {
    const url = {
      loc: `${base}${file.slug}`,
      lastmod: file.createdAt,
    }
    return asSitemapUrl(url)
  })
})
