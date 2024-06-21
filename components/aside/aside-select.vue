<template>
  <AsideContainer title="精選文章">
    <div :class="$style.grid" class="mt-4 pt-3">
      <ArticleCardCompact
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </AsideContainer>
</template>

<script setup>
import { useMainStore } from '~/store'

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

const mainStore = useMainStore()
const { categories, articlesMetadata } = mainStore

const { count } =
  props.category === 'all' ? articlesMetadata : categories[props.category]

const { data: articles } = await useAsyncData(
  `ArticlesSelect_${props.category}`,
  () => {
    let query = queryContent('articles').where({
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
      .only(articleQueryAttrs.card)
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
  grid-template-rows: repeat(3, calc((100% - var(--bs-gutter-x) * 2) / 3));
  grid-template-columns: 1fr;
  gap: var(--bs-gutter-x);
  height: 300px;
}
</style>
