<template>
  <div class="grid grid-cols-1 gap-normal">
    <component
      :is="cardComponent"
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      :preload-img="index <= 4"
      :break-points="imgBreakPoints"
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
  imgBreakPoints: {
    type: Object,
    default: () => ({
      sm: 640,
      md: 335,
      lg: 251,
      xl: 335,
      // '2xl': 335,
    }),
  },
})
</script>
