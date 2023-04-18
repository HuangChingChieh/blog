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
            class="text-decoration-none d-flex flex-column"
          >
            <common-img
              :img="article.img"
              img-class="w-100 img-fluid rounded-top"
              max-width="320"
              class="w-100"
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
            <b-card-text class="text-secondary mb-2 small">{{
              article.description
            }}</b-card-text>
            <b-card-text class="small text-muted">{{
              updateTime(article.updatedAt || article.createdAt)
            }}</b-card-text>
          </nuxt-link>
        </b-card-body>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import style from '~/assets/css/custom.scss'

export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', { deep: true })
      .only(['title', 'description', 'img', 'createdAt', 'updatedAt', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
  },
  data() {
    return {
      ...style,
      mobileBreakpoint: style.mobileBreakpoint,
    }
  },
  methods: {
    updateTime(updatedAt) {
      return updatedAt
        ? Intl.DateTimeFormat('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(updatedAt))
        : ''
    },
  },
}
</script>
