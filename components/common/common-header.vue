<template>
  <header class="common-header" :class="`pt-${mobileBreakpoint}-4`">
    <b-container
      :fluid="mobileBreakpoint"
      :class="`py-${mobileBreakpoint}-3`"
      class="d-flex flex-row align-items-center"
    >
      <common-icon bordered />
      <div class="ml-3 flex-grow-1">
        <nuxt-link
          class="font-weight-bold text-body d-block text-decoration-none"
          to="/"
        >
          隨機手札
        </nuxt-link>
        <small class="text-muted d-none" :class="`d-${mobileBreakpoint}-block`"
          >雜七雜八之地</small
        >
      </div>

      <div
        class="d-flex align-items-center justify-content-end"
        :class="{ 'header-icons-fixed': !headerVisible }"
      >
        <header-icon-categories :show-text="headerVisible" />
        <header-icon-toc />
        <header-icon-theme />
        <header-icon-search />
      </div>
    </b-container>

    <div v-b-visible="onHeaderHide"></div>
  </header>
</template>

<script>
import { BContainer, VBVisible } from 'bootstrap-vue'

import CommonIcon from '~/components/common/common-icon.vue'
import HeaderIconToc from '~/components/header/header-icon-toc.vue'
import HeaderIconSearch from '~/components/header/header-icon-search.vue'
import HeaderIconCategories from '~/components/header/header-icon-categories.vue'
import HeaderIconTheme from '~/components/header/header-icon-theme.vue'

import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  components: {
    BContainer,
    CommonIcon,
    HeaderIconToc,
    HeaderIconSearch,
    HeaderIconCategories,
    HeaderIconTheme,
  },
  directives: { 'b-visible': VBVisible },
  data() {
    return {
      mobileBreakpoint,
      headerVisible: true,
    }
  },
  methods: {
    onHeaderHide(isVisible) {
      this.headerVisible = isVisible
    },
  },
}
</script>

<style lang="scss">
.common-header {
  position: sticky;
  background-color: var(--foreground);
  box-shadow: $box-shadow-sm;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  top: 0;
  z-index: $zindex-sticky;

  .common-icon {
    height: 2rem;
    width: 2rem;
  }

  .common-header-icon {
    padding: 0;
    transition: none;
  }

  .header-icons-fixed {
    position: fixed;
    top: 1rem;
    flex-direction: column;

    .common-header-icon {
      margin-bottom: 1rem;
      padding: 0.5rem;
      background-color: var(--foreground);
      box-shadow: $box-shadow-sm;
      border-radius: 90px;
    }
  }
}

@each $breakpoint, $max-widths in $container-max-widths {
  @media (min-width: map-get($grid-breakpoints, $breakpoint)) {
    .header-icons-fixed {
      left: calc(50% + $max-widths / 2 - 0.5rem);
    }
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .common-header {
    position: static;
    background-color: transparent;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;

    .common-icon {
      height: 3rem;
      width: 3rem;
    }
  }

  .common-header-icon {
    padding: 0;
  }
}
</style>
