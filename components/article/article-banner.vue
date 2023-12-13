<template>
  <div class="article-banner">
    <common-img
      :img="img"
      :img-class="imgClass"
      :max-width="maxWidth"
      class="article-banner-img"
    />
  </div>
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
      type: [Array, String],
      default: () => [],
    },
    maxWidth: {
      type: [String, Number],
      default: 0,
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
