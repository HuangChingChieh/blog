export default (articles) => {
  const tagsObj = {}

  if (articles.length > 0) {
    articles.forEach(({ tags }) => {
      if (Array.isArray(tags) && tags.length > 0) {
        tags.forEach((tag) => {
          if (typeof tag === 'string') {
            const tagLower = tag.toLowerCase()
            if (!tagsObj[tagLower]) tagsObj[tagLower] = 0
            tagsObj[tagLower]++
          }
        })
      }
    })
  }

  return tagsObj
}
