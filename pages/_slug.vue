<template>
  <b-container fluid="md">
    <common-container>
      <b-container fluid>
        <common-article :document="article" class="p-0 p-md-5" />
      </b-container>
    </common-container>

    <common-container class="mt-md-4">
      <hr class="d-block d-md-none mb-0" />
      <liker-button />
    </common-container>
  </b-container>
</template>

<script>
import LikerButton from '~/components/liker-button.vue'
export default {
  components: { LikerButton },
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
