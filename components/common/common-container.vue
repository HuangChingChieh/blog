<template>
  <component
    :is="tag"
    class="common-container"
    :class="`p-${mobileBreakpoint}-5`"
  >
    <slot></slot>
  </component>
</template>

<script>
import { mobileBreakpoint } from '~/assets/css/custom.scss'
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  data() {
    return {
      mobileBreakpoint,
    }
  },
}
</script>

<style lang="scss">
@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .common-container {
    // border: 1px solid $secondary;
    box-shadow: $box-shadow-sm;
    background-color: var(--foreground);
    border-radius: $border-radius-lg;
  }
}
</style>
