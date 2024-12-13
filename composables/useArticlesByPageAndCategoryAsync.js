export default ({ page = 1, category, limit }) => {
  const { perPage } = useRuntimeConfig().public
  const limitNumber = limit || perPage
  return useAsyncData(`${category}_${page}_${limitNumber}`, () =>
    useArticlesByPageAndCategory({ page, category, limit: limitNumber })
  )
}
