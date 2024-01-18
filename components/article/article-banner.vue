<template>
  <div class="article-banner position-relative">
    <InterfaceImg
      :img="img"
      :img-class="imgClass"
      :sizes="sizes"
      :preload="preload"
      class="article-banner-img"
    />
  </div>
</template>

<script>
import InterfaceImg from '~/components//interface/interface-img.vue'
import getImgSizes from '~/utils/getImgSizes'

export default {
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
}
</script>

<style lang="scss">
.article-card .article-banner-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
}
</style>
