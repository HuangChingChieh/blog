import type { Article } from '~/types/article'
import type { ArticleCategory } from '~/types/article-category'

export const getArticleLink = ({ slug, hash }: Article) => {
  let to = `/${slug}/`
  if (hash) to += `#${hash}`
  return to
}

export const getCategoryLink = ({ category, page = 1 }: ArticleCategory) =>
  `/category/${category}/${page ? page : 1}/`
