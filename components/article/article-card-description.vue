<template>
  <p class="text-muted line-clamp-3 md:h-[4.5rem]" :title="description">
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
