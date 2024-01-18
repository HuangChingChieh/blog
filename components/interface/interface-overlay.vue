<template>
  <BOverlay
    :show="show"
    :class="$style.overlay"
    fixed
    no-wrap
    blur="0"
    bg-color="black"
    :z-index="zIndexOverlay"
  />
</template>

<script>
import { BOverlay } from 'bootstrap-vue'
import { zIndexOverlay } from '~/assets/css/custom.scss'

export default {
  components: { BOverlay },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    zIndexOverlay,
  }),
}
</script>

<style lang="scss" module>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
