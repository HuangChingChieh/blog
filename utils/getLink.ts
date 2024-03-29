import type { RouteLocationRaw } from 'vue-router'
import type { ArticleCategory } from '~/types/article-category'

export const getArticleLink = ({
  slug,
  hash,
}: {
  slug: string
  hash?: string
}) => {
  const link: RouteLocationRaw = {
    path: `/${slug}/`,
    hash: `#${hash}`,
  }

  return link
}

export const getCategoryLink = ({ category, page = 1 }: ArticleCategory) =>
  `/category/${category}/${page ? page : 1}/`
