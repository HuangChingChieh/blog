export const getCategories = ({ articles = [], perPage = 10 }) => {
  const categories = {}

  if (articles.length > 0) {
    articles.forEach((article) => {
      const { category } = article
      if (category) {
        if (!categories[category])
          categories[category] = { count: 0, pageCount: 1 }

        categories[category].count++
      }
    })

    Object.keys(categories).forEach((categoryName) => {
      const category = categories[categoryName]
      setPageCount({ category, perPage })
    })
  }

  return categories
}

export const setPageCount = ({ category, perPage }) => {
  if (category)
    category.pageCount = getPageCount({ count: category.count, perPage })
}

const getPageCount = ({ count, perPage }) => Math.ceil(count / perPage)
