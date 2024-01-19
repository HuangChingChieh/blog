<template>
  <component :is="tag" :class="[`p-${mobileBreakpoint}-5`, $style.container]">
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

<style lang="scss" module>
@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .container {
    // border: 1px solid $secondary;
    box-shadow: $box-shadow-sm;
    background-color: var(--bs-body-bg);
    border-radius: $border-radius;
  }
}
</style>
