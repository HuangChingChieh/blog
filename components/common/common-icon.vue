<template>
  <img
    :src="src"
    :height="height"
    class="common-icon rounded-circle shadow-sm"
    :class="{ bordered }"
  />
</template>

<script>
const sizes = [64, 120, 144, 152, 192, 384, 512]
export default {
  props: {
    height: {
      type: [String, Number],
      default: sizes[0],
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sizes,
    }
  },
  computed: {
    src() {
      const { height, sizes, $icon } = this
      const theSize = sizes.find((size) => size >= Number(height))
      return $icon(theSize || sizes[0])
    },
  },
}
</script>

<style lang="scss">
.common-icon.bordered {
  border: 3px solid white;
}
</style>
