export default async ($content) => {
  const articles = await $content('articles', { deep: true })
    .only(['category', 'title', 'tags', 'updatedAt', 'slug'])
    .sortBy('updatedAt', 'desc')
    .fetch()

  const categories = {}
  articles.forEach((article) => {
    const { category } = article
    if (category) {
      if (!categories[category])
        categories[category] = { count: 1, articles: [] }
      else categories[category].count++

      if (categories[category].articles.length < 3)
        categories[category].articles.push(article)
    }
  })

  return categories
}
