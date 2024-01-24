<template>
  <NuxtLink
    :class="btnClass"
    class="btn"
    :to="to"
  >
    <slot />
  </NuxtLink>
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
  to: {
    type: [String, Object],
    default: '',
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
