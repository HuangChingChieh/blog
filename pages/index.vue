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
  name: 'IndexPage',
  components: { ArticlesList },
  async asyncData({ $content, query, redirect, $config }) {
    const { perPage } = $config
    const page = Number(query.page || 1)

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
  head() {
    return {
      title: '',
      titleTemplate: '隨機手札',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.appHost,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$config.description,
        },
      ],
    }
  },
  methods: {
    linkGen(page) {
      return `/pages/${page}`
    },
  },
}
</script>
