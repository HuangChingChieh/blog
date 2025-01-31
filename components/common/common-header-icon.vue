<template>
  <TextClickable class="ms-4 lg:ms-normal flex flex-row items-center">
    <InterfaceIcon :icon="icon" class="text-xl mb-0 flex" />
    <span v-if="slot" class="ps-1">
      <slot />
    </span>
  </TextClickable>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})

const { default: slot } = useSlots()
</script>
