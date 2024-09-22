<template>
  <InterfaceCol
    cols="12"
    lg="10"
    xl="8"
    class="mx-auto"
  >
    <CommonContainer>
      <CommonArticle :document="article" />
    </CommonContainer>

    <hr
      class="d-block"
      :class="`d-${mobileBreakpoint}-none`"
    >
    <LikerButton class="mt-5 d-flex justify-content-center" />
    <ArticleComment class="mt-5" />

    <ArticlesRelated
      :article="article"
      class="mt-5"
    />

    <ArticlesListPickContainer
      title="精選文章"
      class="mt-5"
    >
      <ArticlesSelect
        :category="article?.category"
        :card-component="ArticleCardNormal"
      />
    </ArticlesListPickContainer>
  </InterfaceCol>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'

import CommonContainer from '~/components/common/common-container.vue'
import CommonArticle from '~/components/common/common-article.vue'
import ArticlesRelated from '~/components/articles/articles-related.vue'
import LikerButton from '~/components/liker-button.vue'
import ArticleComment from '~/components/article/article-comment.vue'
import ArticleCardNormal from '~/components/article/article-card-normal.vue'

import { mobileBreakpoint } from '~/assets/css/export.module.scss'

import { getHeadForArticle } from '~/utils/seo'

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
