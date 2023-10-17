<template>
  <iframe
    v-if="src"
    :src="src"
    frameborder="0"
    allowfullscreen
    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    class="embed-spotify-list rounded-lg w-100"
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
      return id ? `https://open.spotify.com/embed/playlist/${id}?theme=0` : ''
    },
  },
}
</script>

<style lang="scss">
.embed-spotify-list {
  aspect-ratio: 4 / 3;
}
</style>
