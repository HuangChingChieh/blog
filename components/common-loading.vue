<template>
  <div
    v-if="loading"
    :class="$style.overlay"
    class="position-fixed h-100 w-100 d-flex align-items-center justify-content-center"
  >
    <div class="spinner-border" role="status" :class="$style.spinner">
      <span class="visually-hidden">讀取中</span>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" module>
.overlay {
  top: 0;
  left: 0;
  background-color: rgba($color: var(--bs-body-bg-rgb), $alpha: 0.9);
  z-index: 99999;

  .spinner {
    color: var(--bs-body-color);
  }
}
</style>
