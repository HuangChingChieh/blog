<template>
  <InterfaceButton
    variant="link"
    class="flex items-center no-decoration ms-4 lg:ms-normal"
  >
    <InterfaceIcon :icon="icon" class="text-xl mb-0 flex" />

    <span class="ps-1">
      <slot />
    </span>
  </InterfaceButton>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
