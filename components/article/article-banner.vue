<template>
  <common-img :img="img" :img-class="imgClass" class="article-banner d-block" />
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
