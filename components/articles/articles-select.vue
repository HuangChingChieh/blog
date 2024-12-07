<template>
  <div :class="$style.grid">
    <component
      :is="cardComponent"
      v-for="article in articles"
      :key="article.slug"
      :article="article"
      :container="false"
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
  cardComponent: {
    type: Object,
    default: ArticleCardCompact,
  },
  notInArticles: {
    type: Array,
    default: () => [],
  },
})

const mainStore = useMainStore()
const { data: articles } = await useAsyncData(
  `ArticlesSelect_${props.category}`,
  () => {
    const { categories, articlesMetadata } = mainStore
    const { count } =
      props.category === 'all' ? articlesMetadata : categories[props.category]
    let query = queryContent('articles')
      .only(articleQueryAttrs.card)
      .where({
        category: props.category === 'all' ? undefined : props.category,
      })

    const { notInArticles } = props
    if (Array.isArray(notInArticles) && notInArticles.length > 0) {
      notInArticles.forEach(({ slug }) => {
        query = query.where({
          slug: {
            $not: slug,
          },
        })
      })
    }

    return query
      .sort({ updatedAt: -1 })
      .skip(Math.floor(count / 2))
      .limit(3)
      .find()
  }
)
</script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
</style>
