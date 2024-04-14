<template>
  <i :class="`bi-${icon}`" />
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
