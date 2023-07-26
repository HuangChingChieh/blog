<template>
  <b-container :fluid="mobileBreakpoint">
    <b-card-group columns>
      <b-card
        v-for="(article, index) in articles"
        :key="index"
        no-body
        class="common-container cursor-pointer shadow-sm"
      >
        <b-card-body body-class="p-0">
          <nuxt-link
            :to="`/${article.slug}`"
            class="text-decoration-none d-flex flex-column position-relative"
          >
            <article-banner
              v-if="article.img"
              :img="article.img"
              img-class="rounded-top"
              max-width="400"
            />
          </nuxt-link>

          <nuxt-link
            :to="`/${article.slug}`"
            class="text-decoration-none d-block p-3"
          >
            <b-card-title
              title-tag="h4"
              class="mb-2 text-body h5 font-weight-bolder"
              >{{ article.title }}</b-card-title
            >
            <b-card-text class="small text-muted">
              <article-date :document="article" hide-icon />
            </b-card-text>
          </nuxt-link>
        </b-card-body>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import { mobileBreakpoint } from '~/assets/css/custom.scss'
import ArticleBanner from '~/components/article/article-banner.vue'
import articleDate from '~/components/article/article-date.vue'

export default {
  name: 'IndexPage',
  components: { articleDate, ArticleBanner },
  async asyncData({ $content }) {
    const articles = await $content('articles', { deep: true })
      .only(['title', 'img', 'updatedAt', 'slug'])
      .sortBy('updatedAt', 'desc')
      .fetch()
    return { articles }
  },
  data() {
    return {
      mobileBreakpoint,
    }
  },
  head() {
    return {
      title: '',
      titleTemplate: '藍帽手札',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.appHost,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '一個非本科系的前端小碼農，紀錄一些身為前端小碼農的技術筆記，以及使用Linux（主要是Fedora）的心得。',
        },
      ],
    }
  },
}
</script>
