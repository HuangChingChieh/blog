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
import bVisible from '~/utils/bVisible'

export default {
  directives: { 'b-visible': bVisible },
  data() {
    return { likerButton: '' }
  },
  methods: {
    init(isVisible) {
      // SEE https://docs.like.co/developer/likecoin-button/iframe
      if (isVisible && !this.likerButton) {
        const likerButton = new URL(
          `https://button.like.co/in/embed/chaoshuang/button`
        )
        const { searchParams } = likerButton
        searchParams.append(
          'referrer',
          encodeURIComponent(
            this.$config.appHost + this.$route.path.substring(1)
          )
        )

        if (this.$config.isDev) searchParams.append('preview', 1)

        this.likerButton = likerButton.toString()
      }
    },
  },
}
</script>
