<template>
  <ArticlesListPickContainer title="相關文章">
    <ArticleCardOverlay
      v-for="(article, index) in relatedArticles"
      :key="index"
      :article="article"
      class="mb-3"
    />
  </ArticlesListPickContainer>
</template>

<script>
import ArticleCardOverlay from '~/components/article/article-card-overlay.vue'
import useArticles from '~/composables/useArticles'
import getReltedArticles from '~/utils/getRelatedArticles'

export default defineNuxtComponent({
  components: { ArticleCardOverlay },
  props: {
    article: { type: Object, default: () => ({ tags: [], slug: '' }) },
  },
  async setup({ article }) {
    const { data: articles } = await useArticles()

    const relatedArticles = getReltedArticles({
      articles: unref(articles),
      article,
    })

    const hasArticles =
      Array.isArray(relatedArticles) && relatedArticles.length > 0

    return { relatedArticles, hasArticles }
  },
})
</script>
