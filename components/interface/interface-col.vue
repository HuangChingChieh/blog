<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { gridColumns } from '~/assets/css/custom.scss'
export default {
  props: {
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
  },
  data() {
    return { gridColumns }
  },
  computed: {
    classes() {
      const classes = []

      const { sm, md, lg, xl, gridColumns } = this
      if (sm) classes.push(`col-sm-${sm}`)
      if (md) classes.push(`col-sm-${md}`)
      if (lg) classes.push(`col-sm-${lg}`)
      if (xl) classes.push(`col-sm-${xl}`)
      classes.push(`col${gridColumns}`)

      return classes
    },
  },
}
</script>
