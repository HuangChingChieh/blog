export default (slug: string) => {
  if (!slug) throw new Error('Nedd slug to get title!')
  return useAsyncData(`title|${slug}`, async () => {
    const article = await queryContent('articles')
      .only(['title'])
      .where({ slug })
      .findOne()

    const title: string = article?.title || ''

    return title
  })
}
