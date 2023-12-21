<template>
  <main>
    <common-header @openProfileModal="sidebar.open = true" />
    <b-container :fluid="mobileBreakpoint" class="py-4">
      <Nuxt />
    </b-container>
    <common-footer class="mt-4" />
  </main>
</template>

<script>
import { BContainer } from 'bootstrap-vue'
import commonHeader from '~/components/common/common-header.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'
import CommonFooter from '~/components/common/common-footer.vue'

export default {
  components: { BContainer, commonHeader, CommonFooter },
  data() {
    return {
      mobileBreakpoint,
    }
  },
}
</script>
