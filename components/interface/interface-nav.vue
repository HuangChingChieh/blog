<template>
  <BNav :vertical="vertical">
    <slot></slot>
  </BNav>
</template>

<script>
import { BNav } from 'bootstrap-vue'

export default {
  components: { BNav },
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
