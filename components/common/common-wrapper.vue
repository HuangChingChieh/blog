<template>
  <component
    :is="tag"
    class="bg-foreground lg:bg-background dark:bg-foreground-dark dark:lg:bg-background-dark"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: [String, Object],
    default: 'div',
  },
})
</script>
