<template>
  <CommonOuterLink :href="href" class="text-white">
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
