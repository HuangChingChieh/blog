<template>
  <p class="article-note text-secondary small px-3 py-2 rounded">
    <slot></slot>
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss">
.article-note {
  background-color: $gray-200;
  &,
  * {
    color: $secondary;
  }
}
</style>
