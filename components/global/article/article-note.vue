<template>
  <p class="article-note small px-3 py-2 rounded align-middle">
    <InterfaceIcon icon="lightbulb" class="mr-1" />
    <slot></slot>
  </p>
</template>

<script>
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default { components: { InterfaceIcon } }
</script>

<style lang="scss">
.article-note {
  background-color: var(--gray-400);
  &,
  * {
    color: var(--gray-900);
  }
}
</style>
