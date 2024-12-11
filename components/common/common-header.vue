<template>
  <header
    :class="[$style.header, shrink ? $style.shrink : '']"
    class="border-bottom border-primary border-2 position-fixed shadow-sm bg-foreground w-100"
  >
    <InterfaceContainer
      :class="$style.container"
      class="d-flex flex-row align-items-center"
    >
      <CommonIcon bordered :class="$style.logo" />
      <div class="ms-3 flex-grow-1">
        <NuxtLink class="fw-bold text-body d-block text-decoration-none" to="/">
          隨機手札
        </NuxtLink>
        <small class="text-muted" :class="$style.hint">雜七雜八之地</small>
      </div>

      <div class="d-flex align-items-center justify-content-end">
        <HeaderIconCategories icon-class="d-flex p-0" show-text />
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

defineProps({
  /**
   * 是否縮小，目前用於滾動時控制樣式。
   */
  shrink: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" module>
$transition-funciton: ease;

@mixin header-shrink {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  top: 0;
  z-index: $zindex-sticky;

  .logo {
    height: 2rem;
    width: 2rem;
  }

  .container {
    padding-top: 0;
    padding-bottom: 0;
  }

  .hint {
    display: none;
  }
}

.logo {
  transition: height 0.15s $transition-funciton, width 0.15 $transition-funciton;
}

.header,
.container {
  transition: padding-top 0.15s $transition-funciton,
    padding-bottom 0.15s $transition-funciton;
}

.header {
  @include header-shrink;

  @media #{$break-mobile} {
    padding-top: 0;
    padding-bottom: 0;

    .logo {
      height: 3rem;
      width: 3rem;
    }

    .container {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .hint {
      display: block;
    }
  }

  &.shrink {
    @include header-shrink;
  }
}
</style>
