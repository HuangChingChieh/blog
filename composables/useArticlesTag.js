export default ({ page = 1, tag = '' }) => {
  const { perPage } = useRuntimeConfig().public

  // 取得文章
  const contentQuery = queryContent('articles')
    .only(articleQueryAttrs.card)
    .where({
      tags: {
        $icontains: tag,
      },
    })

  return contentQuery
    .sort({ createdAt: -1 })
    .skip((page - 1) * perPage)
    .limit(perPage)
    .find()
}
