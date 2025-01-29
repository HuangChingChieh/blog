<template>
  <CommonLayout :category="category">
    <ArticlesListPickContainer :title="title">
      <ArticlesList :articles="articles" />

      <PPaginator
        :first="first"
        :rows="perPage"
        :total-records="totalRecords"
        @page="onPage"
      />
    </ArticlesListPickContainer>
  </CommonLayout>
</template>

<script setup>
const { category, page } = useRoute().params

const { categories } = await useArticlesMetadata()
const { categoriesMap, perPage } = useRuntimeConfig().public
const totalRecords = categories[category]?.count || 0

const { data: articles } = await useArticlesByPageAndCategoryAsync({
  page,
  category,
})

const title = computed(() => `${categoriesMap[category]}：第${page}頁`)
const first = computed(() => (page - 1) * perPage)

useHead({
  title,
})

const { push } = useRouter()
const onPage = ({ page }) => {
  push({ path: getCategoryLink({ category, page: page + 1 }) })
}
</script>
