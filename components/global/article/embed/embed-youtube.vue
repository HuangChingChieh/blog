<template>
  <iframe
    v-if="src"
    :src="src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
    class="embed-youtube rounded-lg w-100"
  ></iframe>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      const { id } = this
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : ''
    },
  },
}
</script>

<style lang="scss">
.embed-youtube {
  aspect-ratio: 16 / 9;
}
</style>
