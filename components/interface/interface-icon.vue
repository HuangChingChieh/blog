<template>
  <i :class="`bi-${icon}`" />
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
