<template>
  <div ref="scrollDetect" class="d-none d-lg-block" />
  <CommonHeader :shrink="!scrollDetectVisible" />

  <div class="mt-0 mt-lg-4" :class="$style.container">
    <InterfaceContainer tag="main" class="py-4">
      <slot />
    </InterfaceContainer>
  </div>

  <CommonFooter class="mt-4" />
</template>

<script setup>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import CommonHeader from '~/components/common/common-header.vue'
import CommonFooter from '~/components/common/common-footer.vue'

import { useElementVisibility } from '@vueuse/core'

const scrollDetect = ref(null)
const scrollDetectVisible = useElementVisibility(scrollDetect)
</script>

<style lang="scss" module>
.container {
  padding-top: 60px;

  @media #{$break-mobile} {
    padding-top: 80px;
  }
}
</style>
