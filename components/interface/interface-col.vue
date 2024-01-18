<template>
  <BCol>
    <slot></slot>
  </BCol>
</template>

<script>
import { BCol } from 'bootstrap-vue'
export default {
  components: {
    BCol,
  },
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
}
</script>
