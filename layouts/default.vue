<template>
  <main :class="$store.state.theme">
    <common-header @openProfileModal="sidebar.open = true" />
    <InterfaceContainer class="py-4">
      <Nuxt />
    </InterfaceContainer>

    <common-footer class="mt-4" />
  </main>
</template>

<script>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import commonHeader from '~/components/common/common-header.vue'
import CommonFooter from '~/components/common/common-footer.vue'

export default {
  components: { InterfaceContainer, commonHeader, CommonFooter },
}
</script>
