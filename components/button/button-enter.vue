<template>
  <b-button
    :size="size"
    variant="primary"
    :to="to"
    class="d-inline-flex flex-row align-items-center button-enter"
  >
    <slot></slot>
    <b-icon-arrow-right />
  </b-button>
</template>

<script>
import { BIconArrowRight, BButton } from 'bootstrap-vue'
export default {
  components: { BIconArrowRight, BButton },
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
