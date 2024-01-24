<template>
  <i :class="`bi-${icon}`" />
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
