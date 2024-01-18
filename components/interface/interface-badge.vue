<template>
  <BBadge :variant="variant">
    <slot></slot>
  </BBadge>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
  components: { BBadge },
  props: {
    variant: {
      type: String,
      default: 'secondary',
    },
  },
}
</script>
