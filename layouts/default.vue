<template>
  <main>
    <common-header @openProfileModal="sidebar.open = true" />
    <b-container :fluid="mobileBreakpoint" class="py-4">
      <Nuxt />
    </b-container>

    <common-sidebar v-model="sidebar.open" />
  </main>
</template>

<script>
import commonHeader from '~/components/common/common-header.vue'
import commonSidebar from '~/components/common/common-sidebar.vue'
import { mobileBreakpoint } from '~/assets/css/custom.scss'

export default {
  components: { commonHeader, commonSidebar },
  data() {
    return {
      mobileBreakpoint,
      sidebar: {
        open: false,
      },
    }
  },
}
</script>
