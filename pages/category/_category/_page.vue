<template>
  <articles-list
    :link-gen="linkGen"
    :articles="articles"
    :number-of-pages="numberOfPages"
  ></articles-list>
</template>

<script>
import ArticlesList from '~/components/articles/articles-list.vue'

import articleQueryAttrs from '~/utils/articleQueryAttrs'

import { getCategoryLink } from '~/utils/getLink'

export default {
  components: { ArticlesList },
  async asyncData({ $content, store, params, error, $config }) {
    let articles = []
    let numberOfPages = 1
    let basePath = '/'

    const { perPage } = $config
    const { categories } = store.state
    const { category, page } = params

    // 檢驗
    if (
      isNaN(page) ||
      page <= 0 ||
      !categories[category] ||
      page > categories[category].pageCount
    )
      error({ statusCode: '404' })
    else {
      // 取得文章
      articles = await $content('articles', { deep: true })
        .only(articleQueryAttrs.card)
        .where({ category })
        .sortBy('updatedAt', 'desc')
        .skip((page - 1) * perPage)
        .limit(perPage)
        .fetch()

      numberOfPages = categories[category]?.pageCount || 1
      basePath = getCategoryLink({ category })
    }

    return {
      articles,
      numberOfPages,
      basePath,
      page,
      category,
    }
  },
  head() {
    const { page, category, $config } = this
    return {
      title: `${$config.categoriesMap[category]}：第${page}頁`,
    }
  },
  methods: {
    linkGen(page) {
      const { category } = this.$route.params
      return { path: getCategoryLink({ category, page }) }
    },
  },
}
</script>
