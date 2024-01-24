<template>
  <component
    :is="tag"
    class="container"
    :class="`container-${mobileBreakpoint}`"
  >
    <slot />
  </component>
</template>

<script setup>
import { mobileBreakpoint } from '~/assets/css/export.module.scss'

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>
