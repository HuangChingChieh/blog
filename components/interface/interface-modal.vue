<template>
  <BModal
    v-model="valueInner"
    :title="title"
    hide-footer
    centered
    :size="size"
    :modal-class="modalClass"
    scrollable
    @shown="$emit('shown')"
    @hidden="$emit('hidden')"
  >
    <slot></slot>
  </BModal>
</template>

<script>
import { BModal } from 'bootstrap-vue'

export default {
  components: { BModal },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    modalClass: {
      type: [String, Array],
      default: '',
    },
  },
  computed: {
    valueInner: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
