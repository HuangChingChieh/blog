<template>
  <InterfaceButton
    :size="size"
    variant="primary"
    :to="to"
    class="d-inline-flex flex-row align-items-center button-enter"
  >
    <slot></slot>
    <InterfaceIcon icon="arrow-right" />
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

<style lang="scss">
.button-enter.btn {
  .b-icon {
    width: 0;
    font-size: inherit;
    overflow: hidden;
    transition: $transition-collapse-width;
  }

  &:hover .b-icon {
    width: 1.25rem;
  }
}
</style>
