import type { CategoriesMap } from '~/types/dictionary-categories'
export interface ArticleCategory {
  page?: number
  category: keyof typeof CategoriesMap
}
