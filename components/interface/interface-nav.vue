<template>
  <BNav :vertical="vertical">
    <BNavItem
      v-for="(item, i) in items"
      :key="i"
      :to="linkGenerateFunc(item)"
      :active-class="activeClass"
      :link-classes="linkClasses"
      :class="itemClass"
      @click="$emit('click-item', item)"
    >
      <slot name="item" :item="item"></slot>
    </BNavItem>
  </BNav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: { BNav, BNavItem },
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    activeClass: {
      type: [String, Array],
      default: '',
    },
    linkClasses: {
      type: [String, Array],
      default: '',
    },
    itemClass: {
      type: [String, Array],
      default: '',
    },
    linkGenerateFunc: {
      type: Function,
      default: () => '',
    },
  },
}
</script>
