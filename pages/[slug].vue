<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3"
    >
      <CommonContainer>
        <CommonArticle :document="article" />
      </CommonContainer>

      <hr class="md:hidden my-12" />
      <LikerButton class="mt-12 flex justify-center" />
      <ArticleComment class="mt-12" />

      <ArticlesRelated
        :article="article"
        class="mt-12"
        :articles="relatedArticles"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'

import { useMainStore } from '~/store'

const mainStore = useMainStore()

onBeforeRouteLeave((to, from, next) => {
  mainStore.toc = []
  next()
})

const route = useRoute()
const { slug } = route.params

const { data: article } = await useArticle(slug)

if (!article?.value) {
  const error = useError()
  error({ statusCode: '404' })
} else {
  mainStore.toc = article.value.body.toc.links
}

const { data: relatedArticles } = await useRelatedArticles(unref(article))
const head = computed(() => {
  let head = []

  if (article?.value) {
    const { appHost, imageServer } = useRuntimeConfig().public
    const { title, description, img, tags, updatedAt, createdAt } =
      article.value
    const url = appHost + route.fullPath.substring(1)
    head = getHeadForArticle({
      description,
      url,
      title,
      img: img
        ? `${imageServer}1600x1200q100/${img}`
        : `${appHost}images/default-og.png`,
      tags,
      updatedAt,
      createdAt,
    })
  }

  return head
})

useHead(head.value)
</script>
