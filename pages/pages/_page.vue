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
  async asyncData({ $content, params, redirect, $config }) {
    const { perPage } = $config
    const page = Number(params.page || 1)

    if (isNaN(page) || page <= 0) redirect('/')

    let articles = await $content('articles', { deep: true })
      .only(articleQueryAttrs.card)
      .sortBy('updatedAt', 'desc')
      .fetch()

    const numberOfPages = Math.ceil(articles.length / perPage)
    articles = articles.slice((page - 1) * perPage, page * perPage)
    if (articles.length === 0) redirect('/')

    return { articles, numberOfPages }
  },
  methods: {
    linkGen(page) {
      return `/pages/${page}`
    },
  },
}
</script>
