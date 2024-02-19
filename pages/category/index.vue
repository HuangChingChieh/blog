<template>
  <CommonContainer>
    <h1>文章分類</h1>
    <hr class="my-4">
    <div
      v-for="(categoryObj, category) in categories"
      :key="category"
      class="mt-4"
    >
      <div class="rounded overflow-hidden">
        <h3 class="py-2 d-flex align-items-center mb-0">
          {{ $config.public.categoriesMap[category] }}
        </h3>
        <nav class="py-3">
          <NuxtLink
            v-for="article in categoryObj.articles"
            :key="article.slug"
            :to="getArticleLink(article)"
            class="d-block ps-3 py-2 border-start"
            :class="$style.link"
          >
            {{ article.title }}
          </NuxtLink>

          <div class="mt-2 d-flex align-items-center flex-row">
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
import CommonContainer from '~/components/common/common-container.vue'
import ButtonEnter from '~/components/button/button-enter.vue'

import articleQueryAttrs from '~/utils/articleQueryAttrs'

import { getArticleLink, getCategoryLink } from '~/utils/getLink'
import { useMainStore } from '~/store'

const mainStore = useMainStore()

const { data: categories } = await useAsyncData('categories', async () => {
  const categories = JSON.parse(JSON.stringify(mainStore.categories))
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
        })
    )
  )

  return categories
})

useHead({
  title: `文章分類`,
})
</script>

<style lang="scss" module>
.link {
  border-width: 3px !important;

  &:hover {
    border-color: $primary !important;
  }
}
</style>
