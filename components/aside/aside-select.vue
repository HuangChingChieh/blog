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
})

const mainStore = useMainStore()
const { count } = mainStore.articlesMetadata

const { data: articles } = await useAsyncData(
  `ArticlesSelect_${props.category}`,
  () =>
    queryContent('articles')
      .only(articleQueryAttrs.card)
      .sort({ updatedAt: -1 })
      .skip(Math.floor(count / 2))
      .limit(3)
      .find()
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
