<template>
  <div class="position-relative">
    <InterfaceImg
      :img="img"
      :img-class="imgClass"
      :sizes="sizes"
      :preload="preload"
    />
  </div>
</template>

<script
  lang="ts"
  setup
>
import type { PropType } from 'vue'
import InterfaceImg from '~/components/interface/interface-img.vue'
import getImgSizes from '~/utils/getImgSizes'

const props = defineProps({
  img: {
    type: String,
    default: '',
  },
  imgClass: {
    type: [Array, String] as PropType<string[] | string>,
    default: () => [],
  },
  sizes: {
    type: Array as PropType<string[]>,
    default: () => getImgSizes(),
  },
  preload: {
    type: Boolean,
    default: false,
  },
})
</script>
