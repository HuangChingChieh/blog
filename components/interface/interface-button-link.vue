<template>
  <PButton
    :as="NuxtLink"
    :to="to"
    :size="size"
    :variant="variant"
    :disabled="disabled"
    :rounded="rounded"
    :severity="severity"
  >
    <slot />
  </PButton>
</template>

<script setup>
const NuxtLink = resolveComponent('NuxtLink')

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
  to: {
    type: [String, Object],
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  severity: {
    type: String,
    default: '',
  },
})
</script>
