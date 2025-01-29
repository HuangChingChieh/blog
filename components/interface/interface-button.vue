<template>
  <PButton
    :variant="variant"
    :disabled="disabled"
    :severity="severity"
    :size="size"
    :rounded="rounded"
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
  rounded: {
    type: Boolean,
    default: false,
  },
})
</script>
