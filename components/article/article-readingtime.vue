<template>
  <span
    v-if="minutes"
    class="text-muted small d-inline-flex align-items-center"
  >
    <b-icon-clock class="mr-1" />
    <span class="mr-3">{{ minutes }} min</span>
  </span>
</template>

<script>
import { BIconClock } from 'bootstrap-vue'

export default {
  components: { BIconClock },
  props: {
    minutes: {
      type: Number,
      default: 0,
    },
  },
}
</script>
