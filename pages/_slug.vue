<template>
  <div>
    <common-container>
      <common-article :document="article" />
    </common-container>

    <hr class="d-block mb-0" :class="`d-${mobileBreakpoint}-none`" />
    <liker-button />
  </div>
</template>

<script>
import CommonContainer from '~/components/common/common-container.vue'
import CommonArticle from '~/components/common/common-article.vue'
import LikerButton from '~/components/liker-button.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

import { getHeadForArticle } from '~/utils/seo'

export default {
  components: { LikerButton, CommonArticle, CommonContainer },
  async asyncData({ $content, params }) {
    const articles = await $content('', { deep: true })
      .where({ slug: params.slug })
      .fetch()

    const article = articles[0]
    // const [prev, next] = await $content('articles')
    //   .only(['title', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .surround(params.slug)
    //   .fetch()
    return {
      article,
      //  prev, next
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
