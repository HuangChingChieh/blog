<template>
  <b-container :fluid="mobileBreakpoint">
    <common-container>
      <common-article
        :document="article"
        class="p-0"
        :class="`p-${mobileBreakpoint}-5`"
      />
    </common-container>

    <common-container :class="`mt-${mobileBreakpoint}-4`">
      <hr class="d-block mb-0" :class="`d-${mobileBreakpoint}-none`" />
      <liker-button />
    </common-container>
  </b-container>
</template>

<script>
import CommonArticle from '~/components/common/common-article.vue'
import LikerButton from '~/components/liker-button.vue'
import style from '~/assets/css/custom.scss'

export default {
  components: { LikerButton, CommonArticle },
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
      mobileBreakpoint: style.mobileBreakpoint,
    }
  },
  head() {
    const { article } = this
    return {
      title: article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: article.description,
        },
      ],
    }
  },
  methods: {
    scrollTo(id) {
      document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
