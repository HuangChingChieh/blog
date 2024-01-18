<template>
  <p class="small px-3 py-2 rounded align-middle" :class="$style.note">
    <InterfaceIcon icon="lightbulb" class="mr-1" />
    <slot></slot>
  </p>
</template>

<script>
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default { components: { InterfaceIcon } }
</script>

<style lang="scss" module>
.note {
  background-color: var(--gray-400);
  &,
  * {
    color: var(--gray-900);
  }
}
</style>
