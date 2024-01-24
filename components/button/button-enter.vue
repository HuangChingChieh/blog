<template>
  <InterfaceButtonLink
    :size="size"
    variant="primary"
    :to="to"
    class="d-inline-flex flex-row align-items-center"
    :class="$style.btn"
  >
    <slot />
    <InterfaceIcon
      icon="arrow-right"
      :class="$style.icon"
    />
  </InterfaceButtonLink>
</template>

<script setup>
import InterfaceButtonLink from '~/components/interface/interface-button-link.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  to: {
    type: [String, Object],
    default: '',
  },
  size: {
    type: String,
    default: 'sm',
  },
})
</script>

<style lang="scss" module>
.btn {
  .icon {
    width: 0;
    font-size: inherit;
    overflow: hidden;
    transition: $transition-collapse-width;
  }

  &:hover .icon {
    width: 1.25rem;
  }
}
</style>
