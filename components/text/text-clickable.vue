<template>
  <component :is="tag" class="hover:text-primary cursor-pointer"
    ><slot
  /></component>
</template>

<script setup>
defineProps({
  tag: {
    type: [String, Object],
    default: 'span',
  },
})
</script>
