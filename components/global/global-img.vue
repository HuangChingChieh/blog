<template>
  <img class="w-100 img-fluid" :src="srcInner" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    srcInner() {
      const { src } = this
      return src ? this.$config.imageServer + src : ''
    },
  },
}
</script>
