<template>
  <p class="article-note small px-3 py-2 rounded align-middle">
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
  background-color: var(--background);
  &,
  * {
    color: var(--gray-600);
  }
}
</style>
