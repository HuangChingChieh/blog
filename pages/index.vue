<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-normal">
      <ArticlesListPickContainer :title="categoriesMap.life">
        <ArticleCard
          v-for="article in articleLife"
          :key="article.slug"
          :article="article"
        />
      </ArticlesListPickContainer>

      <ArticlesListPickContainer :title="categoriesMap.frontend">
        <ArticleCard
          v-for="article in articlesFrontend"
          :key="article.slug"
          :article="article"
        />
      </ArticlesListPickContainer>

      <ArticlesListPickContainer :title="categoriesMap.linux">
        <ArticleCard
          v-for="article in articleLinux"
          :key="article.slug"
          :article="article"
        />
      </ArticlesListPickContainer>
    </div>

    <hr class="my-12" />
    <CommonLayout
      reverse-order-when-mobile
      :select-not-in-articles="[
        ...articleLife,
        ...articlesFrontend,
        ...articleLinux,
      ]"
    >
      <ArticlesListPickContainer title="最新文章">
        <ArticlesList :articles="articlesNewest" />

        <div class="text-center">
          <ButtonEnter
            :to="{ path: '/category/all/1' }"
            size="large"
            class="mt-normal mb-6"
          >
            更多文章
          </ButtonEnter>
        </div>
      </ArticlesListPickContainer>
    </CommonLayout>
  </div>
</template>

<script setup>
import ArticleCard from '~/components/article/article-card.vue'

const { appHost, description, categoriesMap } = useRuntimeConfig().public

const { data: articlesFrontend } = await useArticlesByPageAndCategoryAsync({
  category: 'frontend',
  limit: 1,
})

const { data: articleLife } = await useArticlesByPageAndCategoryAsync({
  category: 'life',
  limit: 1,
})

const { data: articleLinux } = await useArticlesByPageAndCategoryAsync({
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
    const { data } = await useArticlesByPageAndCategoryAsync({
      page: 1,
      category: 'all',
    })

    return notIn(data.value, [
      ...articleLife.value,
      ...articleLinux.value,
      ...articlesFrontend.value,
    ])
  },
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
