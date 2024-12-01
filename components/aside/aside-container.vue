<template>
  <div
    class="shadow-sm rounded bg-foreground p-3 lg:p-4 border-top border-primary border-5"
  >
    <AsideTitle v-if="title">
      {{ title }}
    </AsideTitle>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
