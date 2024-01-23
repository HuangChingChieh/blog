<template>
  <span
    v-if="minutes"
    class="text-muted small d-inline-flex align-items-center"
  >
    <InterfaceIcon class="me-1" icon="clock" />
    <span class="me-3">{{ minutes }} min</span>
  </span>
</template>

<script>
import InterfaceIcon from '~/components/interface/interface-icon.vue'
export default {
  components: { InterfaceIcon },
  props: {
    minutes: {
      type: Number,
      default: 0,
    },
  },
}
</script>
