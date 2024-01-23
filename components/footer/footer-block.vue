<template>
  <InterfaceCol :[mobileBreakpoint]="gridColumns / 3" class="mt-5">
    <slot></slot>
  </InterfaceCol>
</template>

<script>
import { mobileBreakpoint, gridColumns } from '~/assets/css/custom.scss'

import InterfaceCol from '../interface/interface-col.vue'

export default {
  components: {
    InterfaceCol,
  },
  data() {
    return { mobileBreakpoint, gridColumns }
  },
}
</script>
