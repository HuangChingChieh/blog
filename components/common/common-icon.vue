<template>
  <img
    :src="src"
    :height="height"
    :width="height"
    class="rounded-full shadow-sm"
    :class="bordered ? ` border-[3px] border-white` : ``"
  />
</template>

<script setup>
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
