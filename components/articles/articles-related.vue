<template>
  <ArticlesListPickContainer v-if="hasArticles" title="相關文章">
    <ArticleCardNormal
      v-for="(doc, index) in articles"
      :key="index"
      :article="doc"
      class="mb-3"
    />
  </ArticlesListPickContainer>
</template>

<script setup>
const props = defineProps({
  article: { type: Object, default: null },
})

const { data: articles } = await useRelatedArticles(unref(props.article))

const hasArticles = computed(() => {
  const { value } = articles
  return Array.isArray(value) && value.length > 0
})
</script>
