<template>
  <div class="article-banner" :class="{ loading }">
    <!-- 撐開用，強制決定圖片大小。也作為讀取中看到的區塊。 -->
    <img
      v-if="img"
      src="~/assets/img/fake-bg.png"
      alt="讀取中"
      aria-hidden="true"
      class="w-100 img-fluid"
      :class="imgClass"
    />

    <common-img
      :img="img"
      :img-class="imgClass"
      :max-width="maxWidth"
      class="article-banner-img"
      @load="loading = false"
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
  &.loading {
    animation: article-banner-loading 1s infinite;
  }
}

.article-banner-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes article-banner-loading {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}
</style>
