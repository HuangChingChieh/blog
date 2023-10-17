<template>
  <b-button
    size="sm"
    variant="primary"
    :to="to"
    class="d-inline-flex align-items-center button-enter"
  >
    <slot></slot>
    <b-icon-arrow-right class="ml-1" />
  </b-button>
</template>

<script>
import { BIconArrowRight } from 'bootstrap-vue'
export default {
  components: { BIconArrowRight },
  props: {
    to: {
      type: [String, Object],
      default: '',
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
    width: 1rem;
  }
}
</style>
