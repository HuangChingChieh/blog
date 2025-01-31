<template>
  <ArticlesListPickContainer v-if="hasArticles" title="相關文章">
    <div class="grid grid-cols-1 gap-normal">
      <ArticleCardNormal
        v-for="(doc, index) in articles"
        :key="index"
        :article="doc"
        :img-break-points="imgBreakPoints"
      />
    </div>
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

const imgBreakPoints = {
  sm: 640,
  md: 335,
  lg: 251,
  xl: 335,
  // '2xl': 335,
}
</script>
