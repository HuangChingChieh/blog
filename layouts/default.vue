<template>
  <main class="pt-4" :class="`pb-${mobileBreakpoint}-4`">
    <common-header class="mb-4" @openProfileModal="profileModal.open = true" />
    <Nuxt />
    <common-footer @openProfileModal="profileModal.open = true" />

    <modal-profile v-model="profileModal.open"></modal-profile>
  </main>
</template>

<script>
import commonHeader from '~/components/common/common-header.vue'
import style from '~/assets/css/custom.scss'
import CommonFooter from '~/components/common/common-footer.vue'
import ModalProfile from '~/components/modal/modal-profile.vue'

export default {
  components: { commonHeader, CommonFooter, ModalProfile },
  data() {
    return {
      mobileBreakpoint: style.mobileBreakpoint,
      profileModal: {
        open: false,
      },
    }
  },
}
</script>
