import { getCategories, setPageCount } from '~/utils/getCategories'
import getTags from '~/utils/getTags'

export const state = () => ({
  tagsObj: {},
  categories: {},
  articlesMetadata: {
    count: 0,
    pageCount: 0,
  },
})

export const actions = {
  async nuxtServerInit({ state }, { app, $config }) {
    if (process.server) {
      const { $content } = app
      const { perPage } = $config

      const articles = await $content('articles', { deep: true })
        .only(['tags', 'category'])
        .fetch()

      const { articlesMetadata } = state
      articlesMetadata.count = articles.length
      setPageCount({ category: articlesMetadata, perPage })

      state.categories = getCategories({ articles, perPage })
      state.tagsObj = getTags({ articles })
    }
  },
}
