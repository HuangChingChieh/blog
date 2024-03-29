<template>
  <header :class="[`pt-${mobileBreakpoint}-4`, $style.header]">
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

      <div
        class="d-flex align-items-center justify-content-end"
        :class="{ [$style.iconsFixed]: !headerVisible }"
      >
        <HeaderIconCategories
          :icon-class="[$style.icon, 'd-flex']"
          :show-text="headerVisible"
        />
        <HeaderIconToc :icon-class="[$style.icon, 'd-flex']" />
        <HeaderIconTheme :icon-class="[$style.icon, 'd-flex']" />
        <HeaderIconSearch :icon-class="[$style.icon, 'd-flex']" />
      </div>
    </InterfaceContainer>

    <div v-b-visible="onHeaderHide" />
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

import vBVisible from '~/utils/bVisible'
import { ref } from 'vue'

const headerVisible = ref(true)

const onHeaderHide = (isVisible) => {
  headerVisible.value = isVisible
}
</script>

<style lang="scss" module>
.header {
  position: sticky;
  background-color: var(--bs-secondary-bg);
  box-shadow: $box-shadow-sm;
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

  .icon {
    padding: 0;
    transition: none;
    display: flex;
  }

  .iconsFixed {
    position: fixed;
    top: 1rem;
    flex-direction: column;

    .icon {
      margin-bottom: 1rem;
      padding: 0.5rem;
      background-color: var(--bs-body-bg);
      box-shadow: $box-shadow-sm;
      border-radius: 90px;
    }
  }
}

@each $breakpoint, $max-widths in $container-max-widths {
  @media (min-width: map-get($grid-breakpoints, $breakpoint)) {
    .iconsFixed {
      left: calc(50% + $max-widths / 2 - 0.5rem);
    }
  }
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .header {
    position: static;
    background-color: transparent;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;

    .logo {
      height: 3rem;
      width: 3rem;
    }
  }

  .icon {
    padding: 0;
  }
}
</style>
