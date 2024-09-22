<template>
  <component
    :is="tag"
    :class="[`p-${mobileBreakpoint}-5`, $style.container]"
  >
    <slot />
  </component>
</template>

<script setup>
import { mobileBreakpoint } from '~/assets/css/export.module.scss'

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
@media #{$break-mobile} {
  .container {
    // border: 1px solid $secondary;
    box-shadow: $box-shadow-sm;
    background-color: var(--bs-body-bg);
    border-radius: $border-radius;
  }
}
</style>
