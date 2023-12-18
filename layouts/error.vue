<template>
  <common-container class="error-404">
    <div class="text-center">
      <div class="h1 font-weight-boldest text-muted">404</div>
      <div class="my-4">
        哎呀～你尋找的網頁不存在哦！<br />看看我們隨機幫你選出的一篇文章吧！<br />或是<nuxt-link
          to="/"
          >點這裡</nuxt-link
        >回到首頁！
      </div>
    </div>

    <div v-if="article">
      <article-card
        :article="article"
        class="border"
        preload-img
      ></article-card>
    </div>
  </common-container>
</template>

<script>
import ArticleCard from '~/components/article/article-card.vue'
import CommonContainer from '~/components/common/common-container.vue'

import articleQueryAttrs from '~/utils/articleQueryAttrs'

export default {
  components: { ArticleCard, CommonContainer },
  data() {
    return { article: null }
  },
  async fetch() {
    const articles = await this.$content('articles', { deep: true })
      .only(articleQueryAttrs.card)
      .fetch()

    if (Array.isArray(articles)) {
      const randomIndex = Math.round(Math.random() * (articles.length - 1))
      const article = articles[randomIndex]
      if (article) this.article = article
    }
  },
  head: {
    title: '哎呀～你尋找的網頁不存在哦！',
  },
}
</script>

<style lang="scss">
.error-404 .common-icon {
  filter: grayscale(1);
}
</style>
