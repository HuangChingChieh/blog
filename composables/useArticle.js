export default (slug) => {
  if (!slug) throw new Error('Need slug to find article!')
  return useAsyncData(slug, () =>
    queryContent('articles').where({ slug }).findOne()
  )
}
