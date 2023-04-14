<template>
  <main class="bg-light" :class="`py-${mobileBreakpoint}-4`">
    <common-header class="mb-4" />
    <Nuxt />
  </main>
</template>

<script>
import commonHeader from '~/components/common/common-header.vue'
import style from '~/assets/css/custom.scss'

export default {
  components: { commonHeader },
  data() {
    return {
      mobileBreakpoint: style.mobileBreakpoint,
    }
  },
}
</script>
