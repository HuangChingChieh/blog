<template>
  <div v-if="hasArticles">
    <div class="h5 mb-4 text-center">相關文章</div>

    <article-card
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      class="mt-3"
    ></article-card>
  </div>
</template>

<script>
import ArticleCard from '~/components/article/article-card.vue'
export default {
  components: { ArticleCard },
  props: {
    articles: { type: Array, default: () => [] },
  },
  computed: {
    hasArticles() {
      const { articles } = this
      return Array.isArray(articles) && articles.length > 0
    },
  },
}
</script>
