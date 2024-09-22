<template>
  <CommonHeader />

  <div class="mt-0 mt-lg-4">
    <InterfaceContainer
      tag="main"
      class="py-4"
    >
      <slot />
    </InterfaceContainer>
  </div>


  <CommonFooter class="mt-4" />
</template>

<script setup>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import CommonHeader from '~/components/common/common-header.vue'
import CommonFooter from '~/components/common/common-footer.vue'
</script>
