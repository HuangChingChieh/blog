<template>
  <InterfaceContainer>
    <InterfaceRow>
      <InterfaceCol :[mobileBreakpoint]="gridColumns / 3">
        <ArticlesListPickContainer
          :title="categoriesMap.life"
          class="mt-2"
        >
          <ArticleCard :article="articleLife" />
        </ArticlesListPickContainer>
      </InterfaceCol>
      <InterfaceCol :[mobileBreakpoint]="gridColumns / 3">
        <ArticlesListPickContainer
          :title="categoriesMap.frontend"
          class="mt-2 h-100"
        >
          <div
            v-for="article in articlesFrontend"
            :key="article.slug"
            :class="$style.middle"
            class="h-100"
          >
            <article class="d-flex flex-row">
              <InterfaceImg
                :img="article.img"
                :img-class="$style.img"
              />
            </article>
          </div>
        </ArticlesListPickContainer>
      </InterfaceCol>
      <InterfaceCol :[mobileBreakpoint]="gridColumns / 3">
        <ArticlesListPickContainer
          :title="categoriesMap.linux"
          class="mt-2"
        >
          <ArticleCard :article="articleLinux" />
        </ArticlesListPickContainer>
      </InterfaceCol>
    </InterfaceRow>
  </InterfaceContainer>
</template>

<script setup>
import ArticleCard from '~/components/article/article-card.vue'

import { useMainStore } from '~/store'
import { mobileBreakpoint, gridColumns } from '~/assets/css/export.module.scss'

const mainStore = useMainStore()

const { appHost, description, categoriesMap } = useRuntimeConfig().public
const { pageCount } = mainStore.articlesMetadata

const { data: articlesFrontend } = await useAsyncData(`IndexArticlesFrontend`, () =>
  queryContent('articles').where({ category: 'frontend' })
    .only([...articleQueryAttrs.card])
    .sort({ createdAt: -1 }).limit(3)
    .find())

const { data: articleLife } = await useAsyncData(`IndexArticleLife`, () =>
  queryContent('articles').where({ category: 'life' })
    .only([...articleQueryAttrs.card])
    .sort({ createdAt: -1 })
    .findOne())

const { data: articleLinux } = await useAsyncData(`IndexArticleLinux`, () =>
  queryContent('articles').where({ category: 'linux' })
    .only([...articleQueryAttrs.card])
    .sort({ createdAt: -1 })
    .findOne())

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

<style
  lang="scss"
  module
>
.middle {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;

  .img {
    aspect-ratio: 1/1;
    width: 33.3333%;
    height: auto;
  }
}
</style>