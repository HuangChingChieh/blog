<template>
  <InterfaceImg
    :img="img"
    :img-class="[imgClass, 'w-full']"
    :sizes="sizes"
    :preload="preload"
    class="w-full aspect-video"
  />
</template>

<script setup>
defineProps({
  img: {
    type: String,
    default: '',
  },
  imgClass: {
    type: [Array, String],
    default: () => [],
  },
  sizes: {
    type: Array,
    default: () => getImgSizes(),
  },
  preload: {
    type: Boolean,
    default: false,
  },
})
</script>
