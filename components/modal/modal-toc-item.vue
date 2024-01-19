<template>
  <span
    class="d-block px-3 py-2"
    :class="tocItemOuterClass"
    @click.prevent.stop="$emit('click')"
  >
    <span :style="tocItemInnerStyle" class="d-block"> {{ item.text }}</span>
  </span>
</template>

<script>
export default {
  props: {
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
  },
  computed: {
    tocItemInnerStyle() {
      const diff = this.item.depth - this.minDepth
      return {
        'padding-left': `${diff}rem`,
        opacity: 1 - diff * 0.1,
      }
    },
    tocItemOuterClass() {
      const { minDepth } = this
      const { depth } = this.item
      return {
        'text-muted': depth > minDepth,
      }
    },
  },
}
</script>
