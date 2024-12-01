<template>
  <AsideContainer title="精選文章">
    <ArticlesSelect
      class="mt-4 pt-3"
      :category="category"
      :not-in-articles="notInArticles"
    />
  </AsideContainer>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    default: 'all',
  },
  notInArticles: {
    type: Array,
    default: () => [],
  },
})
</script>
