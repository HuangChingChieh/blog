import { getCategories, setPageCount } from '~/utils/getCategories'
import getTags from '~/utils/getTags'

const tagsObj = {}
const categories = {}
const articlesMetadata = {
  count: 0,
  pageCount: 0,
}

let query = null

// 理論上是應該要寫到nuxt.config.ts作為runtime config公開，但nuxt.config.ts中不能用queryContent直接查文章們，有點麻煩，不過因為是generate所以用結果論來看，寫在這裡其實是沒差。
/**
 * 計算一些靜態數據用的，目前會計算各標籤文章數量、各分類文章數量與頁數、總數量與總頁數。
 */
export default async () => {
  const { perPage } = useRuntimeConfig().public

  if (!query)
    query = useAsyncData('articlesMetada', async () => {
      const articles = await queryContent('articles')
        .only(['tags', 'category'])
        .find()

      articlesMetadata.count = articles.length
      setPageCount({ category: articlesMetadata, perPage })

      Object.assign(categories, getCategories({ articles, perPage }))
      Object.assign(tagsObj, getTags({ articles }))

      return { tagsObj, categories, articlesMetadata }
    })

  const { data } = await query
  return data.value
}
