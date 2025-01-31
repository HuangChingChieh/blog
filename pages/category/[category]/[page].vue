<template>
  <CommonLayout :category="category">
    <ArticlesListPickContainer :title="title">
      <ArticlesList :articles="articles" />

      <InterfacePaginator
        :page="Number(page)"
        :total-records="count"
        :link-gen-fn="linkGenFn"
        class="mt-normal"
      />
    </ArticlesListPickContainer>
  </CommonLayout>
</template>

<script setup>
const { category, page } = useRoute().params

const { categories } = await useArticlesMetadata()
const { categoriesMap } = useRuntimeConfig().public
const { count } = categories[category]

const { data: articles } = await useArticlesByPageAndCategoryAsync({
  page,
  category,
})

const title = computed(() => `${categoriesMap[category]}：第${page}頁`)

const linkGenFn = (page) => getCategoryLink({ category, page })

useHead({
  title,
})
</script>
