<template>
  <div class="flex flex-col">
    <h5 v-if="title" class="mb-0 text-xl">
      <div class="inline-block">
        {{ title }}
        <div class="w-1/2 border-b-2 border-primary-500 mt-2" />
      </div>
    </h5>
    <div :class="title ? `mt-4` : ``" class="grow">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
