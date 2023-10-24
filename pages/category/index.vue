<template>
  <common-container>
    <div
      v-for="(categoryObj, category) in categories"
      :key="category"
      class="mb-5"
    >
      <h5>{{ $config.categoriesMap[category] }}</h5>

      <div class="rounded-lg overflow-hidden shadow-sm">
        <div
          class="px-3 py-2 bg-secondary text-white d-flex align-items-center"
        >
          最新文章
        </div>
        <nav class="p-3 bg-white">
          <nuxt-link
            v-for="article in categoryObj.articles"
            :key="article.slug"
            :to="`/${article.slug}`"
            class="d-block pl-3 py-2 border-left category-article-link"
            >{{ article.title }}</nuxt-link
          >

          <div
            class="mt-2 d-flex align-items-center flex-row justify-content-end"
          >
            <small class="mr-2 text-secondary"
              >共{{ categoryObj.count }}篇文章</small
            >
            <button-enter :to="`/category/${category}/1`"
              >文章列表</button-enter
            >
          </div>
        </nav>
      </div>
    </div>
  </common-container>
</template>

<script>
import CommonContainer from '~/components/common/common-container.vue'
import ButtonEnter from '~/components/button/button-enter.vue'

import getCategories from '~/utils/getCategories'

export default {
  components: { CommonContainer, ButtonEnter },
  async asyncData({ $content }) {
    const categories = await getCategories($content)

    return { categories }
  },
}
</script>

<style lang="scss">
.category-article-link {
  border-width: 3px !important;

  &:hover {
    border-color: $primary !important;
  }
}
</style>
