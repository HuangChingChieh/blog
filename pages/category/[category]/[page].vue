<template>
  <CommonLayout :category="category">
    <ArticlesListPickContainer :title="title">
      <ArticlesList :articles="articles" />

      <PPaginator
        :first="first"
        :rows="perPage"
        :total-records="count"
        :page-link-size="3"
        class="mt-normal"
        @page="onPage"
      />
      <div class="mt-2 text-center">共 {{ pageCount }} 頁</div>
    </ArticlesListPickContainer>
  </CommonLayout>
</template>

<script setup>
const { category, page } = useRoute().params

const { categories } = await useArticlesMetadata()
const { categoriesMap, perPage } = useRuntimeConfig().public
const { count, pageCount } = categories[category]

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
