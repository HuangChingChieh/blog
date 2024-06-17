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

    <InterfacePagination
      :link-gen="linkGen"
      :number-of-pages="numberOfPages"
    />
  </div>
</template>

<script setup>
import ArticleCard from '~/components/article/article-card.vue'
import InterfacePagination from '~/components/interface/interface-pagination.vue'

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  linkGen: {
    type: Function,
    default: () => { },
  },
  numberOfPages: {
    type: [String, Number],
    default: 1,
  },
  cardComponent: {
    type: Object,
    default: ArticleCard
  }
})
</script>
