<template>
  <header class="common-header">
    <b-container
      :fluid="mobileBreakpoint"
      class="py-2 align-items-center"
      :class="`py-${mobileBreakpoint}-3`"
    >
      <div class="d-flex flex-row">
        <img v-once :src="$icon(64)" height="45" class="rounded-circle icon" />
        <div class="ml-3 flex-grow-1">
          <nuxt-link
            class="font-weight-bold text-dark d-block text-decoration-none"
            to="/"
          >
            藍帽手札
          </nuxt-link>
          <small
            class="text-secondary d-none"
            :class="`d-${mobileBreakpoint}-block`"
            >前端程式 + Linux的心得筆記</small
          >
        </div>

        <a
          href="#"
          class="h-100 pl-3 d-flex align-items-center profile-btn text-secondary"
          @click.prevent="profileModal.open = true"
        >
          <b-icon-list></b-icon-list>
        </a>
      </div>
    </b-container>

    <modal-profile v-model="profileModal.open"></modal-profile>
  </header>
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import ModalProfile from '../modal/modal-profile.vue'
import style from '~/assets/css/custom.scss'

export default {
  components: { BIconList, ModalProfile },
  data() {
    return {
      profileModal: {
        open: false,
      },
      mobileBreakpoint: style.mobileBreakpoint,
    }
  },
}
</script>

<style lang="scss">
.common-header {
  top: 0;
  z-index: $zindex-sticky;

  .profile-btn {
    font-size: $h1-font-size;
  }
}

@media (max-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .common-header {
    background-color: white;
    border-bottom: 1px solid $secondary;
    box-shadow: $box-shadow-sm;
    .icon {
      height: 1.5rem;
    }

    .profile-btn {
      font-size: $h4-font-size;
    }

    @supports (position: sticky) {
      position: sticky;
      top: 0;
      z-index: $zindex-sticky;
    }
  }
}
</style>
