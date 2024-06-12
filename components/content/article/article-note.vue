<template>
  <p class="article-note small px-3 py-2 rounded align-middle shadow-sm">
    <InterfaceIcon
      icon="lightbulb"
      class="me-1"
    />
    <slot />
  </p>
</template>

<script setup>
import InterfaceIcon from '~/components/interface/interface-icon.vue'
</script>

<style lang="scss">
.article-note {
  background-color: $primary-bg-subtle;

  &,
  * {
    color: $dark-text-emphasis;
  }
}
</style>
