<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { gridColumns } from '~/assets/css/export.module.scss'

const props = defineProps({
  sm: {
    type: [String, Number],
    default: '',
  },
  md: {
    type: [String, Number],
    default: '',
  },
  lg: {
    type: [String, Number],
    default: '',
  },
  xl: {
    type: [String, Number],
    default: '',
  },
  cols: {
    type: [String, Number],
    default: gridColumns,
  },
})

const classes = computed(() => {
  const classes = []

  const { sm, md, lg, xl } = props
  if (sm) classes.push(`col-sm-${sm}`)
  if (md) classes.push(`col-md-${md}`)
  if (lg) classes.push(`col-lg-${lg}`)
  if (xl) classes.push(`col-xl-${xl}`)
  classes.push(`col-${props.cols}`)

  return classes
})
</script>
