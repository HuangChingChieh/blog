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
            <!-- 撐開用，強制決定圖片大小。也作為讀取中看到的區塊。 -->
            <img
              v-if="article.img"
              src="~/assets/img/fake-bg.png"
              alt="讀取中"
              aria-hidden="true"
              class="w-100 img-fluid rounded-top"
            />

            <common-img
              :img="article.img"
              img-class="img-fluid rounded-top articles-img"
              max-width="400"
              class="w-100 h-100"
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
import articleDate from '~/components/article/article-date.vue'

export default {
  name: 'IndexPage',
  components: { articleDate },
  async asyncData({ $content, params }) {
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
