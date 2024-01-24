<template>
  <img
    v-if="img"
    :srcset="srcset"
    :src="src"
    :class="[$style.img, ...imgClassComputed]"
    :sizes="sizes"
    loading="lazy"
  >
</template>

<script>
const sources = [
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
]
</script>

<script setup>
import { computed } from 'vue'
import getImgSizes from '~/utils/getImgSizes'

const props = defineProps({
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
})

const link = computed(() => {
  const link = []
  if (props.preload) {
    const { img, srcset, src, sizes } = props
    link.push({
      key: img,
      rel: 'preload',
      as: 'image',
      href: src,
      imagesrcset: srcset,
      imagesizes: sizes,
    })
  }

  return link
})
useHead({
  link,
})

const imgClassComputed = computed(() => {
  const imgClassComputed = []

  const { imgClass } = props
  if (typeof imgClass === 'string') imgClassComputed.push(imgClass)
  else if (Array.isArray(imgClass)) imgClassComputed.push(...imgClass)

  return imgClassComputed
})

const { imageServer } = useRuntimeConfig().public
const src = computed(() => imageServer + props.img)

const imgInfo = computed(() => {
  const { img } = props
  const info = {}

  if (typeof img === 'string' && img) {
    info.id = img.split('.')[0]
    info.extension = img.split('.')[1]
  }
  return info
})
const id = computed(() => imgInfo.value.id)
const extension = computed(() => imgInfo.value.extension)

const srcset = computed(() =>
  sources
    .map(
      ({ height, width }) =>
        `${imageServer}${width}x${height}q70/${id.value}.${extension.value}` +
        (width ? ` ${width}w` : '')
    )
    .join(', ')
)
</script>

<style lang="scss" module>
.img {
  height: 100%;
  width: 100%;
  background-color: var(--bs-gray-200);
}
</style>
