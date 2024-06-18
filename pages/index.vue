<template>
  <InterfaceRow>
    <InterfaceCol cols="12" :lg="gridColumns / 2" class="mt-4">
      <ArticleCardOverlay :article="articlesNewest[0]" />
    </InterfaceCol>

    <InterfaceCol cols="12" :lg="gridColumns / 2" class="mt-4">
      <ArticleCardOverlay :article="articlesNewest[1]" />
    </InterfaceCol>

    <InterfaceCol cols="12">
      <InterfaceRow>
        <InterfaceCol
          :lg="gridColumns / 3"
          :md="gridColumns / 2"
          class="order-1"
          :class="`order-${mobileBreakpoint}-1`"
        >
          <ArticlesListPickContainer :title="categoriesMap.life" class="mt-5">
            <ArticleCard :article="articleLife" />
          </ArticlesListPickContainer>
        </InterfaceCol>
        <InterfaceCol
          :lg="gridColumns / 3"
          :md="gridColumns / 2"
          class="d-flex order-3"
          :class="[$style.col, `order-${mobileBreakpoint}-2`]"
        >
          <ArticlesListPickContainer
            :title="categoriesMap.frontend"
            class="mt-5 flex-grow-1"
          >
            <div :class="$style.middle">
              <ArticleCardCompact
                v-for="article in articlesFrontend"
                :key="article.slug"
                :article="article"
                class="bg-foreground rounded shadow-sm p-3"
              />
            </div>
          </ArticlesListPickContainer>
        </InterfaceCol>
        <InterfaceCol
          :lg="gridColumns / 3"
          :md="gridColumns"
          class="order-2"
          :class="`order-${mobileBreakpoint}-3`"
        >
          <ArticlesListPickContainer :title="categoriesMap.linux" class="mt-5">
            <ArticleCard :article="articleLinux" />
          </ArticlesListPickContainer>
        </InterfaceCol>
      </InterfaceRow>
    </InterfaceCol>

    <InterfaceCol cols="12">
      <hr class="my-5" />
    </InterfaceCol>

    <InterfaceCol cols="12">
      <InterfaceRow>
        <InterfaceCol cols="12" lg="7" xl="8" class="mt-5 order-2 order-lg-1">
          <ArticlesListPickContainer title="最新文章">
            <ArticlesList
              :articles="articles"
              :number-of-pages="pageCount"
              :card-component="ArticleCardOverlay"
            >
              <div class="text-center">
                <ButtonEnter
                  :to="{ path: '/category/all/1' }"
                  size="lg"
                  class="mb-4"
                >
                  更多文章
                </ButtonEnter>
              </div>
            </ArticlesList>
          </ArticlesListPickContainer>
        </InterfaceCol>

        <InterfaceCol cols="12" lg="5" xl="4" class="order-1 order-lg-2">
          <InterfaceRow>
            <InterfaceCol cols="12" class="mb-4">
              <ArticlesListPickContainer title="關於隨機手札與我">
                <AsideAboutMe />
              </ArticlesListPickContainer>
            </InterfaceCol>

            <InterfaceCol cols="12" class="mb-4">
              <AsideCategories />
            </InterfaceCol>

            <InterfaceCol cols="12" class="mb-4">
              <AsideTags />
            </InterfaceCol>

            <InterfaceCol cols="12">
              <AsideSelect :articles="articlesSelect" />
            </InterfaceCol>
          </InterfaceRow>
        </InterfaceCol>
      </InterfaceRow>
    </InterfaceCol>
  </InterfaceRow>
</template>

<script setup>
import ArticleCard from '~/components/article/article-card.vue'
import ArticleCardOverlay from '~/components/article/article-card-overlay.vue'

import { useMainStore } from '~/store'
import { mobileBreakpoint, gridColumns } from '~/assets/css/export.module.scss'

const mainStore = useMainStore()

const { appHost, description, categoriesMap } = useRuntimeConfig().public
const { pageCount, count } = mainStore.articlesMetadata

const { data: articlesFrontend } = await useAsyncData(
  `IndexArticlesFrontend`,
  () =>
    queryContent('articles')
      .where({ category: 'frontend' })
      .only(articleQueryAttrs.card)
      .sort({ createdAt: -1 })
      .limit(3)
      .find()
)

const { data: articleLife } = await useAsyncData(`IndexArticleLife`, () =>
  queryContent('articles')
    .where({ category: 'life' })
    .only(articleQueryAttrs.card)
    .sort({ createdAt: -1 })
    .findOne()
)

const { data: articleLinux } = await useAsyncData(`IndexArticleLinux`, () =>
  queryContent('articles')
    .where({ category: 'linux' })
    .only(articleQueryAttrs.card)
    .sort({ createdAt: -1 })
    .findOne()
)

const notIn = (sources = [], needFilter = []) => {
  const articles = []

  sources.forEach((source) => {
    if (!needFilter.find((article) => article.slug === source.slug)) {
      articles.push(source)
    }
  })

  return articles
}

const { data: articlesNewest } = await useAsyncData(
  'IndexArticlesNewest',
  async () => {
    const { data } = await useArticlesByPageAndCategory({
      page: 1,
      category: 'all',
    })

    return notIn(data.value, [
      articleLife.value,
      articleLinux.value,
      ...articlesFrontend.value,
    ])
  }
)

const { data: articlesSelect } = await useAsyncData(
  'IndexArticlesSelect',
  async () => {
    const articles = await queryContent('articles')
      .only(articleQueryAttrs.card)
      .sort({ updatedAt: -1 })
      .skip(Math.floor(count / 2))
      .limit(5 + articlesNewest.value.length + 3)
      .find()

    return notIn(articles, [
      articleLife.value,
      articleLinux.value,
      ...articlesFrontend.value,
      ...articlesNewest.value,
    ]).slice(0, 3)
  }
)

const articles = (() => {
  let articles = articlesNewest.value
  if (Array.isArray(articles) && articles.length > 0) {
    articles = articles.slice(2)
  }

  return articles
})()

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
</script>

<style lang="scss" module>
.middle {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, calc((100% - var(--bs-gutter-x) * 2) / 3));
  gap: var(--bs-gutter-x);
  height: 388.34px;

  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    height: 363.59px;
  }

  @media (min-width: map-get($grid-breakpoints, 'xl')) {
    height: 397.34px;
  }

  @media (min-width: map-get($grid-breakpoints, 'xxl')) {
    height: 431.09px;
  }
}
</style>
