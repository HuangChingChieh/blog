<template>
  <b-img-lazy
    v-if="img"
    :srcset="srcset"
    :src="$config.imageServer + img"
    :class="imgClass"
    class="common-img"
  />
</template>

<script>
import { BImgLazy } from 'bootstrap-vue'
export default {
  components: { BImgLazy },
  props: {
    img: {
      type: String,
      default: '',
    },
    imgClass: {
      type: [Array, String],
      default: '',
    },
    maxWidth: {
      type: [Number, String],
      default: 0,
      validator: (value) => !isNaN(Number(value)),
    },
  },
  data() {
    return {
      sources: [
        {
          height: 75,
          width: 100,
        },
        {
          height: 100,
          width: 150,
        },
        {
          height: 200,
          width: 280,
        },
        {
          height: 240,
          width: 320,
        },
        {
          height: 480,
          width: 640,
        },
        {
          height: 600,
          width: 800,
        },
        {
          height: 768,
          width: 1024,
        },
        {
          height: 1024,
          width: 1280,
        },
        {
          height: 1200,
          width: 1600,
        },
      ],
    }
  },
  computed: {
    srcset() {
      const { sources, id, extension, maxWidth } = this
      const { imageServer } = this.$config

      // 找到最接近maxWidth的index
      const maxWidthIndex =
        maxWidth > 0
          ? sources.findIndex(({ width }) => width >= maxWidth)
          : sources.length - 1

      return sources
        .slice(0, maxWidthIndex + 1)
        .map(
          ({ height, width }) =>
            `${imageServer}${width}x${height}q70/${id}.${extension}` +
            (width ? ` ${width}w` : '')
        )
        .join(', ')
    },
    imgInfo() {
      const { img } = this
      const info = {}

      if (typeof img === 'string' && img) {
        info.id = img.split('.')[0]
        info.extension = img.split('.')[1]
      }
      return info
    },
    id() {
      return this.imgInfo.id
    },
    extension() {
      return this.imgInfo.extension
    },
  },
}
</script>

<style lang="scss">
.common-img {
  height: 100%;
  width: 100%;
  background-color: $gray-200;
}
</style>
