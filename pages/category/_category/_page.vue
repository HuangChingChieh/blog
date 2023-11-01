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
  async asyncData({ $content, store, params, redirect, $config }) {
    const { perPage } = $config
    const { categories } = store.state
    const { category, page } = params
    const basePath = `/category/${category}/1`

    // 檢驗
    if (
      isNaN(page) ||
      page <= 0 ||
      !categories[category] ||
      page > categories[category].pageCount
    )
      redirect(basePath)

    // 取得文章
    const articles = await $content('articles', { deep: true })
      .only(articleQueryAttrs.card)
      .where({ category })
      .sortBy('updatedAt', 'desc')
      .skip((page - 1) * perPage)
      .limit(perPage)
      .fetch()

    return {
      articles,
      numberOfPages: categories[category].pageCount,
      basePath,
      page,
      category,
    }
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
