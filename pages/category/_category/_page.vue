<template>
  <articles-list
    :link-gen="linkGen"
    :articles="articles"
    :number-of-pages="numberOfPages"
  ></articles-list>
</template>

<script>
import ArticlesList from '~/components/articles/articles-list.vue'

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
      .only(['title', 'img', 'updatedAt', 'slug', 'description'])
      .where({ category })
      .sortBy('updatedAt', 'desc')
      // .skip((page - 1) * perPage)
      // .limit(perPage)
      .fetch()

    const numberOfPages = Math.ceil(articles.length / perPage)
    articles = articles.slice((page - 1) * perPage, page * perPage)
    if (articles.length === 0) redirect(basePath)

    return { articles, numberOfPages, basePath }
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
  methods: {
    linkGen(page) {
      const { category } = this.$route.params
      return { path: `/category/${category}/${page}` }
    },
  },
}
</script>
