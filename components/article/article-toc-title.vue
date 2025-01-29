<template>
  <component :is="tag" ref="target" class="font-black"><slot /></component>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import { useTocStore } from '~/store/toc'

defineProps({
  tag: {
    type: String,
    default: '',
    required: true,
  },
})

const tocStore = useTocStore()

const target = ref(null)
const attrs = useAttrs()

const { stop } = useIntersectionObserver(target, ([entry]) => {
  if (entry?.isIntersecting) {
    tocStore.selectionKeys = attrs.id
  }
})

onBeforeRouteLeave(() => {
  stop()
})
</script>
