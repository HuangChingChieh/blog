<template>
  <BRow>
    <slot></slot>
  </BRow>
</template>

<script>
import { BRow } from 'bootstrap-vue'
export default {
  components: {
    BRow,
  },
}
</script>
