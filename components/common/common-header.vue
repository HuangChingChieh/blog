<template>
  <header class="common-header d-none" :class="`d-${mobileBreakpoint}-block`">
    <b-container class="py-3">
      <div class="d-flex flex-row align-items-center">
        <common-icon height="45" bordered />
        <div class="ml-3 flex-grow-1">
          <nuxt-link
            class="font-weight-bold text-dark d-block text-decoration-none"
            to="/"
          >
            藍帽手札
          </nuxt-link>
          <small class="text-secondary">前端程式 + Linux的心得筆記</small>
        </div>

        <a
          href="#"
          class="h-100 pl-3 d-flex align-items-center profile-btn text-secondary"
          @click.prevent="$emit('openProfileModal')"
        >
          <b-icon-list></b-icon-list>
        </a>
      </div>
    </b-container>
  </header>
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import CommonIcon from '~/components/common/common-icon.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  components: { BIconList, CommonIcon },
  data() {
    return {
      mobileBreakpoint,
    }
  },
}
</script>

<style lang="scss">
.common-header {
  top: 0;
  z-index: $zindex-sticky;

  .profile-btn {
    font-size: $h2-font-size;
  }
}
</style>
