export default async (slug) => {
  if (!slug) throw new Error('Need slug to find article!')

  const needColumns = [
    'body',
    'category',
    'createdAt',
    'img',
    'readingTime',
    'slug',
    'title',
    'updatedAt',
    'tags',
    'description',
  ]

  const cardColumns = articleQueryAttrs.card

  // 這裡是刻意的，因為搜尋與錯誤頁面需要單獨查ArticleCard的query，所以在這裡製造一個點讓Nuxt generate的時候可以產生單獨查文章的query json。
  const getArticleCard = useArticleCard(slug)
  const getArticle = queryContent('articles')
    .only(
      needColumns.filter(
        (column) => !cardColumns.some((cardColumn) => cardColumn === column)
      )
    )
    .where({ slug })
    .findOne()

  return useAsyncData(slug, async () => {
    const [articleCard, article] = await Promise.all([
      getArticleCard,
      getArticle,
    ])
    Object.assign(articleCard, article)
    return articleCard
  })
}
