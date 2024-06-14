<template>
  <div class="d-flex flex-column">
    <h4 class="mb-0">
      <div class="d-inline-block">
        {{ title }}
        <div class="w-50 border-bottom border-primary border-2 mt-2" />
      </div>
    </h4>
    <div class="mt-4 flex-grow-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String, default: ''
  }
})

</script>