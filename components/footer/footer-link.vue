<template>
  <CommonOuterLink :href="href">
    <slot />
  </CommonOuterLink>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: '',
  },
})
</script>
