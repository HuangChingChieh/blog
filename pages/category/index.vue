<template>
  <CommonContainer>
    <h1 class="text-3xl font-bold">文章分類</h1>
    <hr class="my-6" />
    <div
      v-for="(categoryObj, category) in categories"
      :key="category"
      class="mt-6"
    >
      <div class="rounded overflow-hidden">
        <h3 class="py-2 flex items-center mb-0">
          {{ $config.public.categoriesMap[category] }}
        </h3>
        <nav class="py-4">
          <NuxtLink
            v-for="article in categoryObj.articles"
            :key="article.slug"
            :to="getArticleLink(article)"
            class="block ps-4 py-2 border-l-4 hover:border-primary"
          >
            {{ article.title }}
          </NuxtLink>

          <div class="mt-2 flex items-center flex-row">
            <small class="me-2">共{{ categoryObj.count }}篇文章</small>
            <ButtonEnter :to="getCategoryLink({ category })">
              文章列表
            </ButtonEnter>
          </div>
        </nav>
      </div>
    </div>
  </CommonContainer>
</template>

<script setup>
const { categories: categoriesMetadata } = await useArticlesMetadata()

const { data: categories } = await useAsyncData('categories', async () => {
  const categories = JSON.parse(JSON.stringify(categoriesMetadata))
  delete categories.all

  await Promise.all(
    Object.keys(categories).map((category) =>
      queryContent()
        .only(articleQueryAttrs.card)
        .sort({ createdAt: -1 })
        .where({ category })
        .limit(3)
        .find()
        .then((articles) => {
          const categoryObj = categories[category]
          categoryObj.articles = articles

          return articles
        }),
    ),
  )

  return categories
})

useHead({
  title: `文章分類`,
})
</script>
