<template>
  <InterfaceButtonLink :size="size" variant="primary" :to="to" class="group">
    <span class="inline-flex flex-row items-center">
      <slot />
      <InterfaceIcon
        icon="arrow-right"
        class="overflow-hidden w-0 group-hover:w-5 transition-[width]"
      />
    </span>
  </InterfaceButtonLink>
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: '',
  },
  size: {
    type: String,
    default: 'sm',
  },
})
</script>
