<template>
  <picture v-if="img" v-once>
    <source
      v-for="(source, index) in sourcesHandled"
      :key="index"
      :srcset="`${$config.imageServer}${id}${source.size}.${extension}`"
      :media="`(min-width: ${source.media}px)`"
    />

    <img :src="$config.imageServer + img" :class="imgClass" />
  </picture>
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
          media: 1024,
        },
        {
          size: 'h',
          media: 640,
        },
        {
          size: 'l',
          media: 320,
        },
        {
          size: 'm',
          media: 160,
        },
        {
          size: 't',
          media: 1,
        },
      ],
    }
  },
  computed: {
    sourcesHandled() {
      const { sources, maxWidth } = this

      const minSatisfiedIndex =
        maxWidth > 0
          ? sources.findIndex(({ media }) => media <= maxWidth) - 1
          : 0

      return sources.slice(minSatisfiedIndex < 0 ? 0 : minSatisfiedIndex)
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
