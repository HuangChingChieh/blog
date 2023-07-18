<template>
  <footer
    class="common-footer bg-white d-block border-top border-secondary"
    :class="`d-${mobileBreakpoint}-none`"
  >
    <b-container class="py-2" fluid>
      <div class="d-flex flex-row">
        <common-icon height="45" />
        <div class="ml-3 flex-grow-1">
          <nuxt-link
            class="font-weight-bold text-dark d-block text-decoration-none"
            to="/"
          >
            藍帽手札
          </nuxt-link>
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
  </footer>
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'
import CommonIcon from '~/components/common/common-icon.vue'

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
.common-footer {
  .common-icon {
    height: 1.5rem;
  }

  .profile-btn {
    font-size: $h4-font-size;
  }

  @supports (position: sticky) {
    position: sticky;
    bottom: 0;
    z-index: $zindex-sticky;
  }

  box-shadow: 0 -0.5rem 1rem rgba($black, 0.15);
}
</style>
