<template>
  <BButton
    :variant="variant"
    :size="size"
    :disabled="disabled"
    :to="to"
    @click="$emit('click')"
  >
    <slot></slot>
  </BButton>
</template>

<script>
import { BButton } from 'bootstrap-vue'
export default {
  components: { BButton },
  props: {
    variant: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>
