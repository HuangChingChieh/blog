<template>
  <InterfaceRow>
    <InterfaceCol
      cols="12"
      :lg="gridColumns / 2"
      class="mt-4 mt-lg-0"
    >
      <ArticleCardOverlay
        :article="articlesNewest[0]"
        :img-class="$style.topArticleImgClass"
      />
    </InterfaceCol>

    <InterfaceCol
      cols="12"
      :lg="gridColumns / 2"
      class="mt-4 mt-lg-0"
    >
      <ArticleCardOverlay
        :article="articlesNewest[1]"
        :img-class="$style.topArticleImgClass"
      />
    </InterfaceCol>

    <InterfaceCol cols="12">
      <InterfaceRow>
        <InterfaceCol
          :lg="gridColumns / 3"
          :md="gridColumns / 2"
          class="order-1"
          :class="`order-${mobileBreakpoint}-1`"
        >
          <ArticlesListPickContainer
            :title="categoriesMap.life"
            class="mt-5"
          >
            <ArticleCard
              v-for="article in articleLife"
              :key="article.slug"
              :article="article"
            />
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
          <ArticlesListPickContainer
            :title="categoriesMap.linux"
            class="mt-5"
          >
            <ArticleCard
              v-for="article in articleLinux"
              :key="article.slug"
              :article="article"
            />
          </ArticlesListPickContainer>
        </InterfaceCol>
      </InterfaceRow>
    </InterfaceCol>

    <InterfaceCol cols="12">
      <hr class="mt-5 mb-0">
    </InterfaceCol>

    <CommonLayout
      reverse-order-when-mobile
      class="mt-5"
    >
      <ArticlesListPickContainer title="最新文章">
        <ArticlesList :articles="articles" />

        <div class="text-center">
          <ButtonEnter
            :to="{ path: '/category/all/1' }"
            size="lg"
            class="mb-4"
          >
            更多文章
          </ButtonEnter>
        </div>
      </ArticlesListPickContainer>
    </CommonLayout>
  </InterfaceRow>
</template>

<script setup>
import ArticleCard from '~/components/article/article-card.vue'
import ArticleCardOverlay from '~/components/article/article-card-overlay.vue'
import { mobileBreakpoint, gridColumns } from '~/assets/css/export.module.scss'


const { appHost, description, categoriesMap } = useRuntimeConfig().public

const { data: articlesFrontend } = await await useArticlesByPageAndCategory({
  category: 'frontend',
  limit: 3,
})

const { data: articleLife } = await useArticlesByPageAndCategory({
  category: 'life',
  limit: 1,
})

const { data: articleLinux } = await useArticlesByPageAndCategory({
  category: 'linux',
  limit: 1,
})

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

<style
  lang="scss"
  module
>
@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .topArticleImgClass {
    aspect-ratio: 16/9 !important;
  }
}

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
