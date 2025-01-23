<template>
  <div class="grid grid-cols-1 gap-normal">
    <component
      :is="cardComponent"
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      :preload-img="index <= 4"
    />
  </div>
</template>

<script setup>
import ArticleCardNormal from '~/components/article/article-card-normal.vue'
defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  cardComponent: {
    type: Object,
    default: ArticleCardNormal,
  },
})
</script>
