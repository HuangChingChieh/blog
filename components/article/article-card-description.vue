<template>
  <p class="text-muted line-clamp-3 h-[4.5rem]" :title="description">
    {{ description }}
  </p>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default: '',
  },
})
</script>
