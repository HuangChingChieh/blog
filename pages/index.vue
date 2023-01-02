<template>
  <div class="article-container mx-auto">
    <b-card-group columns>
      <b-card
        v-for="(article, index) in articles"
        :key="index"
        :img-src="article.img"
        img-top
        class="common-container m-4 mx-md-0 mt-md-0 shadow cursor-pointer"
        @click="$router.push(`/${article.slug}`)"
      >
        <b-card-title title-tag="h4" class="mb-3">{{
          article.title
        }}</b-card-title>
        <b-card-text class="text-secondary">{{
          article.description
        }}</b-card-text>
        <b-card-text class="small text-muted">{{
          updateTime(article.updatedAt)
        }}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', { deep: true })
      .only(['title', 'description', 'img', 'updatedAt', 'slug'])
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
