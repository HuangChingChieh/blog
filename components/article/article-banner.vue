<template>
  <div class="article-banner">
    <common-img
      :img="img"
      :img-class="imgClass"
      :max-width="maxWidth"
      class="article-banner-img"
      @load="loading = false"
    />

    <b-skeleton-img v-if="loading" :class="imgClass" no-aspect></b-skeleton-img>
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
  data() {
    return {
      loading: true,
    }
  },
}
</script>

<style lang="scss">
.article-banner {
  position: relative;
}

.article-card .article-banner-img,
.b-skeleton-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

@media (max-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .article-card .article-banner-img {
    position: static;
    aspect-ratio: 2 / 1;
  }
}
</style>
