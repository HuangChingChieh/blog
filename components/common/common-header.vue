<template>
  <header
    :class="$style.header"
    class="border-bottom border-primary border-2 position-sticky shadow-sm"
  >
    <InterfaceContainer
      :class="`py-${mobileBreakpoint}-3`"
      class="d-flex flex-row align-items-center"
    >
      <CommonIcon
        bordered
        :class="$style.logo"
      />
      <div class="ms-3 flex-grow-1">
        <NuxtLink
          class="fw-bold text-body d-block text-decoration-none"
          to="/"
        >
          隨機手札
        </NuxtLink>
        <small
          class="text-muted d-none"
          :class="`d-${mobileBreakpoint}-block`"
        >雜七雜八之地</small>
      </div>

      <div class="d-flex align-items-center justify-content-end">
        <HeaderIconCategories
          icon-class="d-flex p-0"
          show-text
        />
        <HeaderIconToc icon-class="d-flex p-0" />
        <HeaderIconTheme icon-class="d-flex p-0" />
        <HeaderIconSearch icon-class="d-flex p-0" />
      </div>
    </InterfaceContainer>
  </header>
</template>

<script setup>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import CommonIcon from '~/components/common/common-icon.vue'
import HeaderIconToc from '~/components/header/header-icon-toc.vue'
import HeaderIconSearch from '~/components/header/header-icon-search.vue'
import HeaderIconCategories from '~/components/header/header-icon-categories.vue'
import HeaderIconTheme from '~/components/header/header-icon-theme.vue'

import { mobileBreakpoint } from '~/assets/css/export.module.scss'
</script>

<style
  lang="scss"
  module
>
.header {
  background-color: var(--bs-secondary-bg);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  top: 0;
  z-index: $zindex-sticky;

  @media (max-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
    [data-bs-theme='light'] & {
      background-color: var(--bs-body-bg);
    }
  }

  @media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
    background-color: var(--bs-body-bg);
  }

  .logo {
    height: 2rem;
    width: 2rem;
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .header {
    padding-top: 0;
    padding-bottom: 0;

    .logo {
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>
