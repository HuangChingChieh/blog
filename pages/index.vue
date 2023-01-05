<template>
  <b-container fluid="md">
    <b-card-group columns>
      <b-card
        v-for="(article, index) in articles"
        :key="index"
        :img-src="article.img"
        img-top
        class="common-container shadow cursor-pointer"
      >
        <nuxt-link :to="`/${article.slug}`" class="text-decoration-none">
          <b-card-title title-tag="h4" class="mb-3 text-body">{{
            article.title
          }}</b-card-title>
          <b-card-text class="text-secondary">{{
            article.description
          }}</b-card-text>
          <b-card-text class="small text-muted">{{
            updateTime(article.updatedAt)
          }}</b-card-text>
        </nuxt-link>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', { deep: true })
      .only(['title', 'description', 'img', 'createdAt', 'updatedAt', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
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
