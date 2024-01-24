<template>
  <div>
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
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'

import CommonContainer from '~/components/common/common-container.vue'
import CommonArticle from '~/components/common/common-article.vue'
import ArticlesRelated from '~/components/articles/articles-related.vue'
import LikerButton from '~/components/liker-button.vue'
import ArticleComment from '~/components/article/article-comment.vue'

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

useHead(
  (() => {
    let head = []

    if (article) {
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
  })(),
)
</script>
