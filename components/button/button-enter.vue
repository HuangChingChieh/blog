<template>
  <InterfaceButton
    :size="size"
    variant="primary"
    :to="to"
    class="d-inline-flex flex-row align-items-center"
    :class="$style.btn"
  >
    <slot></slot>
    <InterfaceIcon icon="arrow-right" :class="$style.icon" />
  </InterfaceButton>
</template>

<script>
import InterfaceButton from '~/components/interface/interface-button.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default {
  components: { InterfaceButton, InterfaceIcon },
  props: {
    to: {
      type: [String, Object],
      default: '',
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
}
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
