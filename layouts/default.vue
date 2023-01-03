<template>
  <main class="bg-light py-md-4">
    <common-header class="mb-4" />
    <Nuxt />
  </main>
</template>

<script>
import commonHeader from '~/components/common/common-header.vue'
export default {
  components: { commonHeader },
}
</script>
