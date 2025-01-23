<template>
  <component :is="tag" class="md:container mx-auto px-normal">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>
