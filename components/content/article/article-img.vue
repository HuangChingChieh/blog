<template>
  <InterfaceImg
    img-class="w-100 img-fluid rounded shadow-sm d-block"
    :img="img"
    :style="{ aspectRatio }"
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
