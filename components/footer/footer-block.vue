<template>
  <b-col :[mobileBreakpoint]="gridColumns / 3" class="mt-5">
    <slot></slot>
  </b-col>
</template>

<script>
import { BCol } from 'bootstrap-vue'
import { mobileBreakpoint, gridColumns } from '~/assets/css/custom.scss'

export default {
  components: {
    BCol,
  },
  data() {
    return { mobileBreakpoint, gridColumns }
  },
}
</script>
