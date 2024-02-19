export default ({ page, category }) =>
  useAsyncData(`${category}_${page}`, () => {
    const { perPage } = useRuntimeConfig().public

    // 取得文章
    let contentQuery = queryContent('articles').only(articleQueryAttrs.card)

    if (category !== 'all') contentQuery = contentQuery.where({ category })

    return contentQuery
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .find()
  })
