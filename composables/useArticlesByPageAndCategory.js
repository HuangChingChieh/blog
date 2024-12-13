export default ({ page = 1, category, limit }) => {
  const { perPage } = useRuntimeConfig().public
  const limitNumber = limit || perPage

  // 取得文章
  let contentQuery = queryContent('articles').only(articleQueryAttrs.card)

  if (category !== 'all') contentQuery = contentQuery.where({ category })

  return contentQuery
    .sort({ createdAt: -1 })
    .skip((page - 1) * perPage)
    .limit(limitNumber)
    .find()
}
