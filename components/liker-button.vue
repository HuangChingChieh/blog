<template>
  <iframe
    v-if="likerButton"
    :src="likerButton"
    frameborder="0"
    class="d-block mx-auto"
  ></iframe>
</template>

<script>
export default {
  data() {
    return { likerButton: '' }
  },
  mounted() {
    const host = 'button.like.co'
    this.$nextTick(() => {
      this.likerButton = `https://${host}/in/embed/chaoshuang/button?referrer=${encodeURIComponent(
        window.location.origin + window.location.pathname
      )}`
    })
  },
}
</script>
