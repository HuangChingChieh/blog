<template>
  <TextClickable class="ms-4 lg:ms-normal flex flex-row items-center">
    <InterfaceIcon :icon="icon" class="text-xl mb-0 flex" />
    <span v-if="text" class="ps-1">{{ text }}</span>
  </TextClickable>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>
