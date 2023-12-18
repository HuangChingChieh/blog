<template>
  <div>
    {{ containerMaxWidths }}

    <hr />
    {{ gridBreakpoints }}
  </div>
</template>

<script>
import { containerMaxWidths, gridBreakpoints } from '~/assets/css/custom.scss'
export default {
  data() {
    return {
      containerMaxWidths,
      gridBreakpoints,
    }
  },
}
</script>
