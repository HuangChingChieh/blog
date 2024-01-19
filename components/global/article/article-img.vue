<template>
  <InterfaceImg
    img-class="w-100 img-fluid rounded-lg shadow-sm d-block"
    :img="img"
    :style="{ aspectRatio }"
  />
</template>

<script>
import InterfaceImg from '~/components/interface/interface-img.vue'

export default {
  components: { InterfaceImg },
  props: {
    img: {
      type: String,
      default: '',
    },
    aspectRatio: {
      type: String,
      default: '16/9',
    },
  },
}
</script>
