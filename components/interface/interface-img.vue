<template>
  <picture v-if="img">
    <source
      v-for="(source, i) in srcset"
      :key="i"
      :media="source.media"
      :srcset="source.src"
    />
    <img :class="imgClassComputed" :src="src" loading="lazy" />
  </picture>
</template>

<script setup>
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
    type: Array,
    default: () => getImgSizes(),
  },
  preload: {
    type: Boolean,
    default: false,
  },
})

const imgClassComputed = computed(() => {
  const imgClassComputed = []

  const { imgClass } = props
  if (typeof imgClass === 'string') imgClassComputed.push(imgClass)
  else if (Array.isArray(imgClass)) imgClassComputed.push(...imgClass)

  return imgClassComputed
})

const { imageServer } = useRuntimeConfig().public
const src = computed(
  () => `${imageServer}640x480q70/${id.value}.${extension.value}`,
)

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

const srcset = computed(() => {
  const srcset = []

  const { sizes } = props
  if (Array.isArray(sizes)) {
    sizes.forEach(({ mediaMinWidth, imgWidth }) => {
      const theSource = sources.find(({ width }) => imgWidth <= width)
      if (theSource) {
        const { width, height } = theSource
        srcset.push({
          media: `(min-width: ${mediaMinWidth})`,
          src: `${imageServer}${width}x${height}q70/${id.value}.${extension.value}`,
        })
      }
    })
  }

  return srcset
})
</script>
