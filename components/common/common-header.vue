<template>
  <common-container
    class="article-container mx-auto common-header position-sticky"
    tag="header"
  >
    <b-container fluid class="py-3 mx-auto d-flex align-items-center">
      <img
        v-once
        :src="`${$router.options.base}icon.png`"
        height="45"
        class="rounded-circle"
      />
      <div class="ml-3">
        <nuxt-link class="font-weight-bold text-dark d-block" to="/">
          藍帽手札
        </nuxt-link>
        <small class="text-secondary d-block">前端程式 + Linux的心得筆記</small>
      </div>
    </b-container>
  </common-container>
</template>

<script>
export default {}
</script>

<style lang="scss">
.common-header {
  top: 0;
  background: white;
  z-index: $zindex-sticky;
}

@media (max-width: map-get($grid-breakpoints, 'md')) {
  .common-header {
    border-bottom: 1px solid $secondary;
  }
}
</style>
