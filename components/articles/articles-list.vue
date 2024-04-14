<template>
  <div>
    <ArticleCard
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

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Article } from '~/types/article'
import ArticleCard from '~/components/article/article-card.vue'
import InterfacePagination from '~/components/interface/interface-pagination.vue'

const props = defineProps({
  articles: {
    type: Array as PropType<Article[]>,
    default: () => [],
  },
  linkGen: {
    type: Function,
    default: () => { },
  },
  numberOfPages: {
    type: Number,
    default: 1,
  },
})
</script>
