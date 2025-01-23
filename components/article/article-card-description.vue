<template>
  <p class="text-muted" :title="description">
    {{ description }}
  </p>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    default: '',
  },
  textLine: {
    type: [String, Number],
    default: 2,
  },
})
</script>
