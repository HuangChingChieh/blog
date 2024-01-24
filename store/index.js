import { defineStore } from 'pinia'

import { getCategories, setPageCount } from '~/utils/getCategories'
import getTags from '~/utils/getTags'

export const useMainStore = defineStore('main', {
  state: () => ({
    tagsObj: {},
    categories: {},
    articlesMetadata: {
      count: 0,
      pageCount: 0,
    },
    toc: [],
  }),
  actions: {
    nuxtServerInit({ articles = [], perPage }) {
      const { articlesMetadata } = this
      articlesMetadata.count = articles.length
      setPageCount({ category: articlesMetadata, perPage })

      this.categories = getCategories({ articles, perPage })
      this.tagsObj = getTags({ articles })
    },
  },
})
