<template>
  <nuxt-link v-if="title" :to="to">
    <slot>《{{ title }}》</slot>
  </nuxt-link>
</template>

<script>
import { getArticleLink } from '~/utils/getLink'
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
  fetchKey() {
    return this.slug
  },
  computed: {
    title() {
      const { article } = this
      if (article) return article.title
    },
    to() {
      const { slug, hash } = this
      const path = getArticleLink({ slug })

      return {
        path,
        hash,
      }
    },
  },
}
</script>
