<template>
  <input
    v-model.trim="model"
    :placeholder="placeholder"
    type="text"
    class="form-control"
  >
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
})

const model = defineModel({
  type: String,
  default: '',
})
</script>
