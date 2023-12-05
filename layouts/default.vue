<template>
  <main>
    <common-header @openProfileModal="sidebar.open = true" />
    <b-container :fluid="mobileBreakpoint" class="py-4">
      <Nuxt />
    </b-container>
  </main>
</template>

<script>
import { BContainer } from 'bootstrap-vue'
import commonHeader from '~/components/common/common-header.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  components: { BContainer, commonHeader },
  data() {
    return {
      mobileBreakpoint,
    }
  },
}
</script>
