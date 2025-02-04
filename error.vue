<template>
  <NuxtLayout name="default">
    <CommonError :error="error" />
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: null,
  },
})
</script>
