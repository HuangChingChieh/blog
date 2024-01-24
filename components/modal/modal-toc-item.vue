<template>
  <span
    class="d-block px-3 py-2"
    :class="tocItemOuterClass"
    @click.prevent.stop="$emit('click')"
  >
    <span
      :style="tocItemInnerStyle"
      class="d-block"
    > {{ item.text }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  minDepth: {
    type: Number,
    default: 2,
  },
  item: {
    type: Object,
    default: () => ({
      text: '',
      depth: 2,
    }),
  },
})

const tocItemInnerStyle = computed(() => {
  const diff = props.item.depth - props.minDepth
  return {
    'padding-left': `${diff}rem`,
    opacity: 1 - diff * 0.1,
  }
})

const tocItemOuterClass = computed(() => {
  const { minDepth } = props
  const { depth } = props.item
  return {
    'text-muted': depth > minDepth,
  }
})
</script>
