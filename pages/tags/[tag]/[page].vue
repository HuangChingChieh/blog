<template>
  <CommonLayout>
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
const { tag, page } = useRoute().params
const { tagsObj } = await useArticlesMetadata()

const tagDecoded = decodeURIComponent(tag).toLowerCase()

const count = tagsObj[tagDecoded]

const { data: articles } = await useAsyncData(
  `articles_${tagDecoded}_${page}`,
  () => useArticlesTag({ page, tag: tagDecoded }),
)

const title = computed(() => `標籤「${tag}」：第${page}頁`)

const linkGenFn = (page) => getTagLink({ tag: tagDecoded, page })

useHead({
  title,
})
</script>
