<template>
  <AsideContainer title="精選文章">
    <ArticlesSelect :category="category" :not-in-articles="notInArticles" />
  </AsideContainer>
</template>

<script setup>
defineProps({
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
