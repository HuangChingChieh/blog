<template>
  <InterfaceImg
    :img="img"
    :img-class="[$style.img, 'w-100 img-fluid rounded shadow-sm d-block']"
  />
</template>

<script setup>
import InterfaceImg from '~/components/interface/interface-img.vue'

const props = defineProps({
  img: {
    type: String,
    default: '',
  },
  aspectRatio: {
    type: String,
    default: '16/9',
  },
})
</script>

<style
  module
  lang="scss"
>
.img {
  aspect-ratio: v-bind(aspectRatio);
}
</style>
