<template>
  <common-img
    img-class="w-100 img-fluid rounded-lg shadow-sm article-img d-block"
    :img="img"
    :style="{ aspectRatio }"
  />
</template>

<script>
import commonImg from '~/components/common/common-img.vue'

export default {
  components: { commonImg },
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
