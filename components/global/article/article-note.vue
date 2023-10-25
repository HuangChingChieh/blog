<template>
  <p class="article-note text-secondary small px-3 py-2 rounded align-middle">
    <b-icon-lightbulb class="mr-1" />
    <slot></slot>
  </p>
</template>

<script>
import { BIconLightbulb } from 'bootstrap-vue'
export default { components: { BIconLightbulb } }
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
