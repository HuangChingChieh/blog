import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { CategoriesMap } from '~/types/dictionary-categories'
export interface Article extends ParsedContent {
  slug: string
  category: keyof typeof CategoriesMap
  tags: string[]
  img: string
}
