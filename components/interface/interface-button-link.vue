<template>
  <NuxtLink
    :class="btnClass"
    class="btn"
    :to="to"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import type { PropType } from 'vue'

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
    type: Object as PropType<RouteLocationRaw>,
    default: () => ({})
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
