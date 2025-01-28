<template>
  <InterfaceImg
    :break-points="breakPoints"
    :img="img"
    class="w-full aspect-video"
  />
</template>

<script setup>
defineProps({
  img: {
    type: String,
    default: '',
  },
  breakPoints: {
    type: Object,
    default: () => ({}),
  },
})
</script>
