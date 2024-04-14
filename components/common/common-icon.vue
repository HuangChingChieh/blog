<template>
  <img
    :src="src"
    :height="height"
    :width="height"
    class="common-icon rounded-circle shadow-sm"
    :class="{ bordered, [$style.bordered]: bordered }"
  >
</template>

<script
  lang="ts"
  setup
>
import { computed } from 'vue'

const sizes = [64, 192, 512]

const props = defineProps({
  height: {
    type: [String, Number],
    default: 64,
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

<style
  lang="scss"
  module
>
.bordered {
  border: 3px solid $white;
}
</style>
