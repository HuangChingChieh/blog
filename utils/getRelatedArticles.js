// 取得相關文章，相關度以重疊的標籤數計算，重疊標籤越多代表越相關。
export default ({ article = { tags: [], slug: '' }, articles = [] }) => {
  const relatedArticles = []

  // 先根據重疊標籤數分類文章
  const relatedTagsMap = {}
  const theTags = article.tags
  const theSlug = article.slug

  if (!Array.isArray(theTags) || theTags.length === 0) return relatedArticles

  articles.forEach((article) => {
    const { tags, slug } = article

    if (!Array.isArray(tags) || theSlug === slug) return

    const overlapCount = tags.reduce(
      (count, tag) =>
        count +
        theTags.some(
          (theTag) =>
            typeof tag === 'string' &&
            typeof theTag === 'string' &&
            tag.toLowerCase() === theTag.toLowerCase()
        ),
      0
    )

    if (overlapCount === 0) return

    if (!relatedTagsMap[overlapCount]) relatedTagsMap[overlapCount] = []
    relatedTagsMap[overlapCount].push(article)
  })

  // 照著重疊數從大到小挑出文章
  const overlapCounts = Object.keys(relatedTagsMap)
  if (overlapCounts.length > 0) {
    overlapCounts.sort((a, b) => b - a)

    const maxCount = 3

    let i = 0
    while (i < overlapCounts.length && relatedArticles.length < maxCount) {
      const theArticles = relatedTagsMap[overlapCounts[i]]
      if (theArticles.length > 0) relatedArticles.push(theArticles.pop())
      else i++
    }
  }

  return relatedArticles
}
