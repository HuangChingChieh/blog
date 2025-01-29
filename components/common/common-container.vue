<template>
  <component
    :is="tag"
    class="md:p-normal md:shadow-sm dark:md:bg-background-dark md:bg-background md:rounded"
  >
    <div class="md:p-normal">
      <slot />
    </div>
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
