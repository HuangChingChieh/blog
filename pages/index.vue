<template>
  <ArticlesList
    :link-gen="linkGen"
    :articles="articles"
    :number-of-pages="pageCount"
  />
</template>

<script setup>
import ArticlesList from '~/components/articles/articles-list.vue'
import { useMainStore } from '~/store'

const mainStore = useMainStore()

const { appHost, description } = useRuntimeConfig().public
const { pageCount } = mainStore.articlesMetadata

const { data: articles } = await useArticlesByPageAndCategory({
  page: 1,
  category: 'all',
})

useHead({
  title: '',
  titleTemplate: '隨機手札',
  meta: [
    {
      key: 'og:url',
      property: 'og:url',
      content: appHost,
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: description,
    },
  ],
})

const linkGen = (page) => `/category/all/${page}`
</script>
