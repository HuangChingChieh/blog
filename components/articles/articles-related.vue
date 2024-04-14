<template>
  <div v-if="hasArticles">
    <div class="h5 mb-4 text-center">
      相關文章
    </div>

    <ArticleCard
      v-for="(article, index) in relatedArticles"
      :key="index"
      :article="article"
      class="mt-3"
    />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Article } from '~/types/article'

import ArticleCard from '~/components/article/article-card.vue'
import useArticles from '~/composables/useArticles'
import getReltedArticles from '~/utils/getRelatedArticles'

export default defineNuxtComponent({
  components: { ArticleCard },
  props: {
    article: {
      type: Object as PropType<Article>,
      default: () => ({ tags: [], slug: '' })
    },
  },
  async setup({ article }) {
    const { data: articles } = await useArticles()

    const relatedArticles = getReltedArticles({
      articles: (unref(articles)) as Article[],
      article,
    })

    const hasArticles =
      Array.isArray(relatedArticles) && relatedArticles.length > 0

    return { relatedArticles, hasArticles }
  },
})
</script>
