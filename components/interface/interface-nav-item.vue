<template>
  <BNavItem
    :to="to"
    :active-class="activeClass"
    :link-classes="linkClasses"
    @click="$emit('click')"
  >
    <slot></slot>
  </BNavItem>
</template>

<script>
import { BNavItem } from 'bootstrap-vue'
export default {
  components: { BNavItem },
  props: {
    to: {
      type: [String, Object],
      default: '',
    },
    activeClass: {
      type: [String, Array],
      default: '',
    },
    linkClasses: {
      type: [String, Array],
      default: '',
    },
  },
}
</script>
