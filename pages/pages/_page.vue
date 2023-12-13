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

export default {
  components: { ArticlesList },
  async asyncData({ $content, store, params, error, $config }) {
    let articles = []

    const { pageCount } = store.state.articlesMetadata
    const { perPage } = $config
    const page = Number(params.page)

    if (isNaN(page) || page <= 0 || page > pageCount)
      error({ statusCode: '404' })
    else {
      articles = await $content('articles', { deep: true })
        .only(articleQueryAttrs.card)
        .sortBy('updatedAt', 'desc')
        .where()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .fetch()
    }

    if (articles.length === 0) error({ statusCode: '404' })

    return { articles, numberOfPages: pageCount, page }
  },
  head() {
    const { page } = this
    return {
      title: `最新文章：第${page}頁`,
    }
  },
  methods: {
    linkGen(page) {
      return `/pages/${page}`
    },
  },
}
</script>
