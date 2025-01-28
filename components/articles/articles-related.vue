<template>
  <ArticlesListPickContainer v-if="hasArticles" title="相關文章">
    <ArticleCardNormal
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      class="mb-3"
    />
  </ArticlesListPickContainer>
</template>

<script setup>
const props = defineProps({
  articles: { type: Array, default: () => [] },
})

const hasArticles = computed(() => {
  const { articles } = props
  return Array.isArray(articles) && articles.length > 0
})
</script>
