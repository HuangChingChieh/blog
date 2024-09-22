<template>
  <div :class="$style.grid">
    <component
      :is="cardComponent"
      v-for="article in articles"
      :key="article.slug"
      :article="article"
      :no-container="noContainer"
    />
  </div>
</template>

<script setup>
import { useMainStore } from '~/store'
import ArticleCardCompact from '~/components/article/article-card-compact.vue'

const props = defineProps({
  category: {
    type: String,
    default: 'all',
  },
  noContainer: {
    type: Boolean,
    default: false
  },
  cardComponent: {
    type: Object,
    default: ArticleCardCompact,
  },
})

const mainStore = useMainStore()
const { data: articles } = await useAsyncData(
  `ArticlesSelect_${props.category}`,
  () => {
    const { category } = props
    const { count } = mainStore.categories[category].count

    let contentQuery = queryContent('articles').only(articleQueryAttrs.card)

    if (category !== 'all') contentQuery = contentQuery.where({ category })

    return contentQuery
      .sort({ updatedAt: -1 })
      .skip(Math.floor(count / 2))
      .limit(3)
      .find()
  }

)
</script>

<style
  lang="scss"
  module
>
.grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
</style>
