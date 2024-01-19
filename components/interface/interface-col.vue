<template>
  <BCol :sm="sm" :md="md" :lg="lg" :xl="xl">
    <slot></slot>
  </BCol>
</template>

<script>
import { BCol } from 'bootstrap-vue'
export default {
  components: {
    BCol,
  },
  props: {
    sm: {
      type: [String, Number],
      default: '',
    },
    md: {
      type: [String, Number],
      default: '',
    },
    lg: {
      type: [String, Number],
      default: '',
    },
    xl: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
