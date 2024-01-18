<template>
  <span
    v-if="minutes"
    class="text-muted small d-inline-flex align-items-center"
  >
    <InterfaceIcon class="mr-1" icon="clock" />
    <span class="mr-3">{{ minutes }} min</span>
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
