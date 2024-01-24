<template>
  <CommonHeader />

  <InterfaceContainer
    tag="main"
    class="py-4"
  >
    <slot />
  </InterfaceContainer>

  <CommonFooter class="mt-4" />
</template>

<script setup>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import CommonHeader from '~/components/common/common-header.vue'
import CommonFooter from '~/components/common/common-footer.vue'
</script>
