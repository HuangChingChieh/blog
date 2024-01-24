<template>
  <NuxtLayout name="default">
    <CommonError :error="error" />
  </NuxtLayout>
</template>

<script setup>
import CommonError from '~/components/common/common-error.vue'

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})
</script>
