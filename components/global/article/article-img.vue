<template>
  <common-img
    img-class="w-100 img-fluid rounded-lg shadow-sm article-img d-block"
    :img="img"
  />
</template>

<script>
import commonImg from '~/components/common/common-img.vue'
import getImgSizes from '~/utils/getImgSizes'

export default {
  components: { commonImg },
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.article-img {
  aspect-ratio: 16 / 9;
}
</style>
