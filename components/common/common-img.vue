<template>
  <b-img-lazy
    v-if="img"
    :srcset="srcset"
    :src="$config.imageServer + img"
    :class="imgClass"
  />
</template>

<script>
export default {
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
          size: '',
          width: '',
        },
        {
          size: 'h',
          width: 1024,
        },
        {
          size: 'l',
          width: 640,
        },
        {
          size: 'm',
          width: 320,
        },
        {
          size: 't',
          width: 160,
        },
      ],
    }
  },
  computed: {
    srcset() {
      const { sources, id, extension } = this
      const { imageServer } = this.$config
      return sources
        .slice()
        .reverse()
        .map(
          ({ size, width }) =>
            `${imageServer}${id}${size}.${extension}` +
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
