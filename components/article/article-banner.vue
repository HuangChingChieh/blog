<template>
  <div class="position-relative">
    <InterfaceImg
      :img="img"
      :img-class="imgClass"
      :sizes="sizes"
      :preload="preload"
    />
  </div>
</template>

<script>
import InterfaceImg from '~/components/interface/interface-img.vue'
import getImgSizes from '~/utils/getImgSizes'

export default defineNuxtComponent({
  components: { InterfaceImg },
  props: {
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
  },
})
</script>
