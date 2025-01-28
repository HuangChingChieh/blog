<template>
  <InterfaceButton variant="link" class="ms-4 lg:ms-normal !p-0">
    <div class="flex flex-row items-center">
      <InterfaceIcon
        :icon="icon"
        class="text-xl mb-0 flex text-white hover:text-primary-600"
      />

      <span v-if="slot" class="ps-1">
        <slot />
      </span>
    </div>
  </InterfaceButton>
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
