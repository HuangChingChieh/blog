<template>
  <BImgLazy
    v-if="img"
    :srcset="srcset"
    :src="src"
    :class="imgClass"
    class="interface-img"
    :sizes="sizes"
  />
</template>

<script>
import { BImgLazy } from 'bootstrap-vue'
import getImgSizes from '~/utils/getImgSizes'

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
    sizes: {
      type: [Array, String],
      default: () => getImgSizes(),
    },
    preload: {
      type: Boolean,
      default: false,
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
  head() {
    if (this.preload) {
      const { img, srcset, src, sizes } = this
      return {
        link: [
          {
            hid: img,
            rel: 'preload',
            as: 'image',
            href: src,
            imagesrcset: srcset,
            imagesizes: sizes,
          },
        ],
      }
    }
  },
  computed: {
    src() {
      return this.$config.imageServer + this.img
    },
    srcset() {
      const { sources, id, extension } = this
      const { imageServer } = this.$config

      return sources
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
