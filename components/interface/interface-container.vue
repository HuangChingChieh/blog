<template>
  <component
    :is="tag"
    class="container"
    :class="`container-${mobileBreakpoint}`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { mobileBreakpoint } from '~/utils/export-scss'

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>
