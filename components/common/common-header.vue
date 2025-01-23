<template>
  <CommonWrapper
    tag="header"
    :class="[$style.header, shrink ? $style.shrink : '']"
    class="border-b-2 border-primary-500 fixed shadow-sm w-full"
  >
    <InterfaceContainer
      :class="$style.container"
      class="flex flex-row items-center"
    >
      <CommonIcon bordered :class="$style.logo" />
      <div class="ms-4 grow">
        <NuxtLink class="font-bold block no-underline" to="/">
          隨機手札
        </NuxtLink>
        <small class="text-muted" :class="$style.hint">雜七雜八之地</small>
      </div>

      <div class="flex items-center justify-end">
        <HeaderIconCategories icon-class="flex p-0" show-text />
        <HeaderIconToc icon-class="flex p-0" />
        <HeaderIconTheme icon-class="flex p-0" />
        <HeaderIconSearch icon-class="flex p-0" />
      </div>
    </InterfaceContainer>
  </CommonWrapper>
</template>

<script setup>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import CommonIcon from '~/components/common/common-icon.vue'
import HeaderIconToc from '~/components/header/header-icon-toc.vue'
import HeaderIconSearch from '~/components/header/header-icon-search.vue'
import HeaderIconCategories from '~/components/header/header-icon-categories.vue'
import HeaderIconTheme from '~/components/header/header-icon-theme.vue'

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
  transition:
    height 0.15s $transition-funciton,
    width 0.15 $transition-funciton;
}

.header,
.container {
  transition:
    padding-top 0.15s $transition-funciton,
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
