<template>
  <div>
    <common-container>
      <common-article :document="article" />
    </common-container>
    <hr :class="`d-${mobileBreakpoint}-none`" />
    <!-- <common-container :class="`mt-${mobileBreakpoint}-4`"> -->

    <articles-related
      :articles="relatedArticles"
      :class="`mt-${mobileBreakpoint}-5`"
    />

    <!-- </common-container> -->
    <hr class="mb-0" :class="`d-${mobileBreakpoint}-none`" />
    <liker-button />
  </div>
</template>

<script>
import CommonContainer from '~/components/common/common-container.vue'
import CommonArticle from '~/components/common/common-article.vue'
import ArticlesRelated from '~/components/articles/articles-related.vue'
import LikerButton from '~/components/liker-button.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

import { getHeadForArticle } from '~/utils/seo'
import getReltedArticles from '~/utils/getRelatedArticles'
import articleQueryAttrs from '~/utils/articleQueryAttrs'

export default {
  components: { LikerButton, CommonArticle, CommonContainer, ArticlesRelated },
  async asyncData({ $content, params, error }) {
    const { slug } = params
    const articles = await $content('', { deep: true }).where({ slug }).fetch()

    const article = articles[0]
    if (!article) {
      error({ statusCode: '404' })
      return {}
    } else {
      const articles = await $content('articles', { deep: true })
        .only([...articleQueryAttrs.card, 'tags'])
        .sortBy('updatedAt', 'desc')
        .fetch()

      const relatedArticles = getReltedArticles({ articles, article })

      return {
        article,
        relatedArticles,
      }
    }
  },
  data() {
    return {
      mobileBreakpoint,
    }
  },
  head() {
    const { article, $config, $route } = this
    const { title, description, img, tags, updatedAt, createdAt } = article
    const { appHost, imageServer } = $config
    const url = appHost + $route.fullPath.substring(1)
    const head = getHeadForArticle({
      description,
      url,
      title,
      img: img
        ? `${imageServer}1600x1200q100/${img}`
        : `${appHost}images/default-og.png`,
      tags,
      updatedAt,
      createdAt,
    })

    return head
  },
  methods: {
    scrollTo(id) {
      document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
