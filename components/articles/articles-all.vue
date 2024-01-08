<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>標題</th>
        <th>ID</th>
        <th>建立日期</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.slug">
        <td>{{ article.title }}</td>
        <td>{{ article.slug }}</td>
        <td>{{ getDate(article.createdAt) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return { articles: [] }
  },
  async fetch() {
    this.articles = await this.$content('articles', { deep: true })
      .only(['slug', 'title', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
  },
  methods: {
    getDate(date) {
      return Intl.DateTimeFormat('zh-tw', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(date))
    },
  },
}
</script>
