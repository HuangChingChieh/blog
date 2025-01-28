<template>
  <CommonOuterLink :href="href" :rel="rel" :target="target">
    <slot />
  </CommonOuterLink>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: '',
  },
  rel: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_blank',
  },
})
</script>
