<template>
  <InterfaceOverlay :show="loading" />
</template>

<script>
import InterfaceOverlay from '~/components/interface/interface-overlay.vue'

export default {
  components: { InterfaceOverlay },
  data: () => ({
    loading: false,
    timeoutFn: null,
    throttle: 200,
  }),
  methods: {
    start() {
      this.timeoutFn = setTimeout(() => {
        this.loading = true
      }, this.throttle)
    },
    finish() {
      clearTimeout(this.timeoutFn)
      this.loading = false
    },
  },
}
</script>
