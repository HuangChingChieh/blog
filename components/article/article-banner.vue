<template>
  <common-img :img="img" :img-class="imgClass" />
</template>

<script>
import CommonImg from '../common/common-img.vue'
export default {
  components: { CommonImg },
  props: {
    img: {
      type: String,
      default: '',
    },
    imgClass: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
