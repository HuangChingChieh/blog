<template>
  <b-overlay
    :show="loading"
    class="overlay-loading"
    fixed
    no-wrap
    :z-index="zIndex"
  ></b-overlay>
</template>

<script>
import { zIndexOverlay } from '~/assets/css/custom.scss'
export default {
  data: () => ({
    loading: false,
    timeoutFn: null,
    zIndex: zIndexOverlay,
    throttle: 200,
  }),
  methods: {
    start() {
      this.timeoutFn = setTimeout(() => {
        this.loading = true
      }, this.throttle)
    },
    finish() {
      clearTimeout(this.timeoutFn)
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.overlay-loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
