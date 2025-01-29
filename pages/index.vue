<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-normal">
      <ArticlesListPickContainer
        v-for="article in topArticles"
        :key="article.article.slug"
        :title="categoriesMap[article.categories]"
      >
        <ArticleCard :article="article.article" />
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

const topArticles = [
  { categories: 'life', article: articleLife.value[0] },
  { categories: 'frontend', article: articlesFrontend.value[0] },
  { categories: 'linux', article: articleLinux.value[0] },
]

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

    return notIn(
      data.value,
      topArticles.map(({ article }) => article),
    )
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
