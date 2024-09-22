<template>
  <div>
    <component
      :is="cardComponent"
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      class="mb-4"
      :preload-img="index <= 4"
    />
  </div>
</template>

<script setup>
import ArticleCardNormal from '~/components/article/article-card-normal.vue'
const props = defineProps({
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
