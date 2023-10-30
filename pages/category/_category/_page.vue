<template>
  <articles-list
    :link-gen="linkGen"
    :articles="articles"
    :number-of-pages="numberOfPages"
  ></articles-list>
</template>

<script>
import ArticlesList from '~/components/articles/articles-list.vue'

import articleQueryAttrs from '~/utils/articleQueryAttrs'

export default {
  components: { ArticlesList },
  async asyncData({ $content, params, redirect, $config }) {
    const { perPage } = $config
    const { category, page } = params
    const basePath = `/category/${category}/1`

    // 檢驗頁數
    if (isNaN(page) || page <= 0) redirect(basePath)

    // 取得文章
    let articles = await $content('articles', { deep: true })
      .only(articleQueryAttrs.card)
      .where({ category })
      .sortBy('updatedAt', 'desc')
      .fetch()

    const numberOfPages = Math.ceil(articles.length / perPage)
    articles = articles.slice((page - 1) * perPage, page * perPage)
    if (articles.length === 0) redirect(basePath)

    return { articles, numberOfPages, basePath, page, category }
  },
  data() {
    const { category } = this.$route.params
    return {
      items: [
        { text: '文章分類', to: '/category/' },
        {
          text: this.$config.categoriesMap[category],
          to: `/category/${category}/1`,
          active: true,
        },
      ],
    }
  },
  head() {
    const { page, category, $config } = this
    return {
      title: `${$config.categoriesMap[category]}：第${page}頁`,
    }
  },
  methods: {
    linkGen(page) {
      const { category } = this.$route.params
      return { path: `/category/${category}/${page}` }
    },
  },
}
</script>
