<template>
  <span
    class="d-block px-3 py-2"
    @click.prevent.stop="scrollTo"
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

const emit = defineEmits(['scroll-to'])

const scrollTo = () => {
  nextTick(() => {
    const { id } = props.item
    const element = document.querySelector(`#${id}`)
    if (element instanceof HTMLElement) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      })
    }
  })

  emit('scroll-to')
}

const tocItemInnerStyle = computed(() => {
  const diff = props.item.depth - props.minDepth
  return {
    'padding-left': `${diff}rem`,
    opacity: 1 - diff * 0.1,
    'font-size': `${(1 - diff * 0.1) * 100}%`
  }
})
</script>
