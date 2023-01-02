<template>
  <common-container class="article-container mx-auto">
    <b-container fluid="md">
      <common-article :document="article" class="p-0 p-md-5" />
    </b-container>
  </common-container>
</template>

<script>
// import prevNext from '~/components/prev-next.vue'
export default {
  // components: { prevNext },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', { deep: true })
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
  computed: {
    encodeURIComponent() {
      return window.encodeURIComponent
    },
  },
  methods: {
    scrollTo(id) {
      document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
