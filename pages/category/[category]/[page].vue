<template>
  <ArticlesList
    :link-gen="linkGen"
    :articles="articles"
    :number-of-pages="numberOfPages"
  />
</template>

<script setup>
import ArticlesList from '~/components/articles/articles-list.vue'

import { getCategoryLink } from '~/utils/getLink'
import { useMainStore } from '~/store/index'

const config = useRuntimeConfig()

const route = useRoute()
const { category, page } = route.params

const { categories } = useMainStore()

const numberOfPages = categories[category]?.pageCount || 1

const { data: articles } = await useArticlesByPageAndCategory({
  page,
  category,
})

useHead({
  title: `${config.public.categoriesMap[category]}：第${page}頁`,
})

const linkGen = (page) => {
  return { path: getCategoryLink({ category, page }) }
}
</script>
