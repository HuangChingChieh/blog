<template>
  <ArticlesListPickContainer v-if="hasArticles" title="相關文章">
    <div :class="$style.grid">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="p-3 bg-foreground rounded shadow-sm"
      >
        <ArticleCardCompact :article="article" :class="$style.card" />
      </div>
    </div>
  </ArticlesListPickContainer>
</template>

<script setup>
const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
})

const hasArticles = computed(() => {
  const { articles } = props
  return Array.isArray(articles) && articles.length > 0
})
</script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 1rem;

  @media #{$break-md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media #{$break-lg} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media #{$break-xl} {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  height: 100px;
}
</style>
