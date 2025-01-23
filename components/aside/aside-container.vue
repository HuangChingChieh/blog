<template>
  <CommonWrapper
    class="shadow-sm rounded p-4 lg:p-6 border-t-4 border-primary-500"
  >
    <AsideTitle v-if="title">
      {{ title }}
    </AsideTitle>
    <slot />
  </CommonWrapper>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
