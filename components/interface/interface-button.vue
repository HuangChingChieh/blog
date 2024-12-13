<template>
  <button :class="btnClass" class="btn" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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
  type: {
    type: String,
    default: 'button',
  },
})

const btnClass = computed(() => {
  const btnClass = []

  const { variant, size } = props
  if (variant) {
    btnClass.push(`btn-${variant}`)
  }

  if (size) {
    btnClass.push(`btn-${size}`)
  }

  return btnClass
})
</script>
