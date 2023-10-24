<template>
  <div class="px-2" :class="`px-${mobileBreakpoint}-0`">
    <article-card
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      class="mb-4"
    />

    <common-pagination-nav
      :link-gen="linkGen"
      :number-of-pages="numberOfPages"
    />
  </div>
</template>

<script>
import ArticleCard from '~/components/article/article-card.vue'
import CommonPaginationNav from '~/components/common/common-pagination-nav.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  components: { ArticleCard, CommonPaginationNav },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
    linkGen: {
      type: Function,
      default: () => {},
    },
    numberOfPages: {
      type: [String, Number],
      default: 1,
    },
  },
  data() {
    return { mobileBreakpoint }
  },
}
</script>
