<template>
  <div ref="scrollDetect" class="hidden lg:block" />
  <CommonHeader :shrink="!scrollDetectVisible" />

  <div class="mt-0 lg:mt-6" :class="$style.container">
    <InterfaceContainer tag="main" class="py-normal">
      <slot />
    </InterfaceContainer>
  </div>

  <CommonFooter class="mt-6" />
</template>

<script setup>
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
