<template>
  <BContainer :fluid="mobileBreakpoint">
    <slot></slot>
  </BContainer>
</template>

<script>
import { BContainer } from 'bootstrap-vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  components: { BContainer },
  data() {
    return { mobileBreakpoint }
  },
}
</script>
