<template>
  <div class="article-banner">
    <common-img
      :img="img"
      :img-class="imgClass"
      :sizes="sizes"
      :preload="preload"
      class="article-banner-img"
    />
  </div>
</template>

<script>
import CommonImg from '../common/common-img.vue'
import getImgSizes from '~/utils/getImgSizes'
export default {
  components: { CommonImg },
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
}
</script>

<style lang="scss">
.article-banner {
  position: relative;
}

.article-card .article-banner-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
}
</style>
