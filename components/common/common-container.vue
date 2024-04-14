<template>
  <component
    :is="tag"
    :class="[`p-${mobileBreakpoint}-5`, $style.container]"
  >
    <slot />
  </component>
</template>

<script
  lang="ts"
  setup
>
import { mobileBreakpoint } from '~/utils/export-scss'

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>

<style
  lang="scss"
  module
>
@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .container {
    // border: 1px solid $secondary;
    box-shadow: $box-shadow-sm;
    background-color: var(--bs-body-bg);
    border-radius: $border-radius;
  }
}
</style>
