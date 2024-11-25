<template>
  <InterfaceRow>
    <InterfaceCol cols="12">
      <InterfaceRow>
        <InterfaceCol
          :lg="gridColumns / 3"
          :md="gridColumns / 2"
          class="order-1"
          :class="`order-${mobileBreakpoint}-1`"
        >
          <ArticlesListPickContainer :title="categoriesMap.life">
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
            class="mt-5 mt-lg-0 flex-grow-1"
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
            class="mt-5 mt-lg-0"
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
      :select-not-in-articles="[
        ...articleLife,
        ...articlesFrontend,
        ...articleLinux,
      ]"
      class="mt-5"
    >
      <ArticlesListPickContainer title="最新文章">
        <ArticlesList :articles="articlesNewest" />

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
import { mobileBreakpoint, gridColumns } from '~/assets/css/export.module.scss'


const { appHost, description, categoriesMap } = useRuntimeConfig().public

const { data: articlesFrontend } = await useArticlesByPageAndCategory({
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

  @media #{$break-lg} {
    height: 363.59px;
  }

  @media #{$break-xl} {
    height: 397.34px;
  }

  @media #{$break-xxl} {
    height: 431.09px;
  }
}
</style>
