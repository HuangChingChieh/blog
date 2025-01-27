<template>
  <component
    :is="tag"
    class="bg-foreground md:bg-background dark:bg-foreground-dark dark:md:bg-background-dark"
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
