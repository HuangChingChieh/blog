<template>
  <component :is="tag" class="common-container">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
@media (min-width: map-get($grid-breakpoints, 'md')) {
  .common-container {
    // border: 1px solid $secondary;
    box-shadow: $box-shadow-sm;
    background-color: white;
    border-radius: $border-radius-lg;
  }
}
</style>
