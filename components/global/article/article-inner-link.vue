<template>
  <nuxt-link v-if="title" :to="{ hash }">
    <slot>《{{ title }}》</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: '',
    },
    hash: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      article: null,
    }
  },
  async fetch() {
    const { slug } = this
    const articles = await this.$content('articles', { deep: true })
      .only(['title'])
      .where({ slug })
      .fetch()

    if (articles.length > 0) this.article = articles[0]
  },
  computed: {
    title() {
      const { article } = this
      if (article) return article.title
    },
  },
}
</script>
