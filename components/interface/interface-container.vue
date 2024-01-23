<template>
  <div class="container" :class="`container-${mobileBreakpoint}`">
    <slot></slot>
  </div>
</template>

<script>
import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  data() {
    return { mobileBreakpoint }
  },
}
</script>
