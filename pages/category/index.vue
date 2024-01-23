<template>
  <common-container>
    <h1>文章分類</h1>
    <hr class="my-4" />
    <div
      v-for="(categoryObj, category) in categories"
      :key="category"
      class="mt-4"
    >
      <div class="rounded overflow-hidden">
        <h3 class="py-2 d-flex align-items-center mb-0">
          {{ $config.categoriesMap[category] }}
        </h3>
        <nav class="py-3">
          <nuxt-link
            v-for="article in categoryObj.articles"
            :key="article.slug"
            :to="getArticleLink(article)"
            class="d-block ps-3 py-2 border-start"
            :class="$style.link"
            >{{ article.title }}</nuxt-link
          >

          <div class="mt-2 d-flex align-items-center flex-row">
            <small class="me-2">共{{ categoryObj.count }}篇文章</small>
            <button-enter :to="getCategoryLink({ category })"
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

import articleQueryAttrs from '~/utils/articleQueryAttrs'

import { getArticleLink, getCategoryLink } from '~/utils/getLink'

export default {
  components: { CommonContainer, ButtonEnter },
  async asyncData({ $content, store }) {
    const categories = JSON.parse(JSON.stringify(store.state.categories))
    delete categories.all
    await Promise.all(
      Object.keys(categories).map((category) =>
        $content('articles', { deep: true })
          .only(articleQueryAttrs.card)
          .sortBy('updatedAt', 'desc')
          .where({ category })
          .limit(3)
          .fetch()
          .then((articles) => {
            const categoryObj = categories[category]
            categoryObj.articles = articles
          })
      )
    )

    return { categories }
  },
  head() {
    return {
      title: `文章分類`,
    }
  },
  methods: { getArticleLink, getCategoryLink },
}
</script>

<style lang="scss" module>
.link {
  border-width: 3px !important;

  &:hover {
    border-color: $primary !important;
  }
}
</style>
