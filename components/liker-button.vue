<template>
  <iframe
    v-b-visible="init"
    :src="likerButton"
    frameborder="0"
    loading="lazy"
    class="d-block mx-auto"
  ></iframe>
</template>

<script>
import { VBVisible } from 'bootstrap-vue'

export default {
  directives: { 'b-visible': VBVisible },
  data() {
    return { likerButton: '' }
  },
  methods: {
    init(isVisible) {
      if (isVisible && !this.likerButton) {
        this.likerButton = `https://button.like.co/in/embed/chaoshuang/button?referrer=${encodeURIComponent(
          window.location.origin + window.location.pathname
        )}`
      }
    },
  },
}
</script>
