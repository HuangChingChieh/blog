<template>
  <header
    class="article-container mx-auto common-header position-sticky d-flex flex-row"
  >
    <common-container class="flex-grow-1">
      <b-container fluid class="py-2 py-md-3 mx-auto d-flex align-items-center">
        <img
          v-once
          :src="`${$router.options.base}icon.png`"
          height="45"
          class="rounded-circle icon"
        />
        <div class="ml-3">
          <nuxt-link
            class="font-weight-bold text-dark d-block text-decoration-none"
            to="/"
          >
            藍帽手札
          </nuxt-link>
          <small class="text-secondary d-none d-md-block"
            >前端程式 + Linux的心得筆記</small
          >
        </div>
      </b-container>

      <modal-profile v-model="profileModal.open"></modal-profile>
    </common-container>

    <common-container class="ml-4 d-flex align-items-center">
      <a
        href="#"
        @click.prevent="profileModal.open = true"
        class="h-100 px-3 d-flex align-items-center profile-btn"
      >
        <b-icon-list class="text-muted"></b-icon-list>
      </a>
    </common-container>
  </header>
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import ModalProfile from '../modal/modal-profile.vue'
import CommonContainer from './common-container.vue'
export default {
  components: { BIconList, ModalProfile, CommonContainer },
  data() {
    return {
      profileModal: {
        open: false,
      },
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

@media (max-width: map-get($grid-breakpoints, 'md')) {
  .common-header {
    border-bottom: 1px solid $secondary;

    .icon {
      height: 1.5rem;
    }

    .profile-btn {
      font-size: $h4-font-size;
    }
  }
}
</style>
