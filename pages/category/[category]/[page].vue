<template>
  <CommonLayout :category="category">
    <ArticlesListPickContainer :title="title">
      <ArticlesList
        :articles="articles"
        :class="$style.list"
      />

      <InterfacePagination
        :link-gen="linkGen"
        :number-of-pages="numberOfPages"
      />
    </ArticlesListPickContainer>
  </CommonLayout>
</template>

<script setup>
import ArticlesList from '~/components/articles/articles-list.vue'
import { getCategoryLink } from '~/utils/getLink'
import { useMainStore } from '~/store/index'

const route = useRoute()
const { category, page } = route.params

const { categories } = useMainStore()
const { categoriesMap } = useRuntimeConfig().public
const numberOfPages = categories[category]?.pageCount || 1

const { data: articles } = await useArticlesByPageAndCategoryAsync({
  page,
  category,
})

const title = computed(() =>
  `${categoriesMap[category]}：第${page}頁`
)

useHead({
  title
})

const linkGen = (page) => {
  return { path: getCategoryLink({ category, page }) }
}
</script>


<style
  lang="scss"
  module
>
.list {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem; */
}
</style>