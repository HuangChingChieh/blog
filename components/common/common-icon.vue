<template>
  <img
    :src="src"
    :height="height"
    :width="height"
    class="common-icon rounded-circle shadow-sm"
    :class="{ bordered, [$style.bordered]: bordered }"
  >
</template>

<script>
const sizes = [64, 192, 512]
export default {}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: {
    type: [String, Number],
    default: sizes[0],
  },
  bordered: {
    type: Boolean,
    default: false,
  },
})

const { base } = useRuntimeConfig().public

const src = computed(() => {
  const { height } = props
  const theSize = sizes.find((size) => size >= Number(height))
  return `${base}pwa-${theSize}x${theSize}.png`
})
</script>

<style lang="scss" module>
.bordered {
  border: 3px solid $white;
}
</style>
