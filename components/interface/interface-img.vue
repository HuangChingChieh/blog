<template>
  <img
    :sizes="sizes"
    :srcset="srcset"
    :src="src"
    loading="lazy"
    decoding="async"
  />
</template>

<script setup>
import defaultTheme from 'tailwindcss/defaultTheme'

const { screens } = defaultTheme

const props = defineProps({
  img: {
    type: String,
    default: '',
  },
  breakPoints: {
    type: Object,
    default: () => ({}),
  },
})

const { imageServer } = useRuntimeConfig().public
const src = computed(() => `${imageServer}320x240q70/${props.img}`)

const srcset = computed(() =>
  sizes.value?.length > 0 ? getImgSrcset(props.img, imageServer) : null,
)

const sizes = computed(() => {
  const breakPoints = JSON.parse(JSON.stringify(props.breakPoints))
  const { sm } = breakPoints
  breakPoints.sm = !sm || sm > 320 ? 320 : sm
  const sizesValid = Object.keys(screens)
    .filter((breakpoint) => !!breakPoints[breakpoint])
    .sort((breakpointA, breakpointB) =>
      Number(screens[breakpointA]) > Number(screens[breakpointB]) ? 1 : -1,
    )

  const sizes = sizesValid
    .map((breakpoint, i) =>
      i === sizesValid.length - 1
        ? `${breakPoints[breakpoint]}px`
        : `(min-width: ${screens[breakpoint]}) ${breakPoints[breakpoint]}px`,
    )
    .join(',')

  return typeof sizes === 'string' && sizes.length > 0 ? sizes : null
})
</script>
