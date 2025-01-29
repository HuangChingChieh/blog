<template>
  <InterfaceImg
    :img="img"
    class="w-full rounded shadow-sm block"
    :class="style"
    :break-points="breakPoints"
  />
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default: '',
  },
  aspectRatio: {
    type: String,
    default: 'video',
  },
})

const style = computed(() => {
  const { aspectRatio } = props
  return aspectRatio === '1/1' ? `aspect-square` : `aspect-${aspectRatio}`
})

const breakPoints = {
  sm: 640,
  md: 624,
  lg: 717,
  xl: 726,
  '2xl': 896,
}
</script>
