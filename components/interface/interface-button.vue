<template>
  <PButton
    :variant="variant"
    :disabled="disabled"
    :severity="severity"
    :size="size"
  >
    <slot />
  </PButton>
</template>

<script setup>
defineProps({
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
  severity: {
    type: String,
    default: '',
  },
})
</script>
