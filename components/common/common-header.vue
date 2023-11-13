<template>
  <header class="common-header" :class="`pt-${mobileBreakpoint}-4`">
    <b-container class="py-3" :fluid="mobileBreakpoint">
      <div class="d-flex flex-row align-items-center">
        <common-icon bordered />
        <div class="ml-3 flex-grow-1">
          <nuxt-link
            class="font-weight-bold text-dark d-block text-decoration-none"
            to="/"
          >
            隨機手札
          </nuxt-link>
          <small
            class="text-secondary d-none"
            :class="`d-${mobileBreakpoint}-block`"
            >雜七雜八之地</small
          >
        </div>

        <div
          class="d-none align-items-center justify-content-end"
          :class="`d-${mobileBreakpoint}-flex`"
        >
          <b-nav>
            <b-nav-item
              v-for="(name, category) in $config.categoriesMap"
              :key="category"
              :to="getCategoryLink({ category })"
              :disabled="$route.params.category === category"
              :class="
                $route.params.category === category
                  ? 'shadow-sm bg-white rounded'
                  : ''
              "
              >{{ name }}</b-nav-item
            >
          </b-nav>
        </div>

        <a
          href="#"
          class="h-100 pl-4 d-flex align-items-center profile-btn text-secondary"
          @click.prevent="searchModalOpen = true"
        >
          <b-icon-search />
        </a>

        <a
          href="#"
          class="h-100 pl-4 d-flex align-items-center profile-btn text-secondary"
          :class="`d-${mobileBreakpoint}-none`"
          @click.prevent="$emit('openProfileModal')"
        >
          <b-icon-list />
        </a>
      </div>
    </b-container>

    <modal-search v-model="searchModalOpen" />
  </header>
</template>

<script>
import {
  BIconList,
  BIconSearch,
  BContainer,
  BNav,
  BNavItem,
} from 'bootstrap-vue'
import CommonIcon from '~/components/common/common-icon.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'
import ModalSearch from '~/components/modal/modal-search.vue'

import { getCategoryLink } from '~/utils/getLink'

export default {
  components: {
    BIconList,
    BIconSearch,
    BContainer,
    BNav,
    BNavItem,
    CommonIcon,
    ModalSearch,
  },
  data() {
    return {
      mobileBreakpoint,
      searchModalOpen: false,
    }
  },
  methods: { getCategoryLink },
}
</script>

<style lang="scss">
.common-header {
  top: 0;
  z-index: $zindex-sticky;

  .common-icon {
    height: 3rem;
  }
}

@media (max-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .common-header {
    position: sticky;
    background-color: white;
    box-shadow: $box-shadow-sm;

    .profile-btn {
      font-size: $h5-font-size;
    }

    .common-icon {
      height: 2rem;
    }
  }
}
</style>
