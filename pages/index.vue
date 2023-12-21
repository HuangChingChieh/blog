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
  async asyncData({ $content, store, $config }) {
    const { perPage } = $config
    const { pageCount } = store.state.articlesMetadata

    const articles = await $content('articles', { deep: true })
      .only(articleQueryAttrs.card)
      .sortBy('updatedAt', 'desc')
      .limit(perPage)
      .fetch()

    return { articles, numberOfPages: pageCount }
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
      return `/category/all/${page}`
    },
  },
}
</script>
