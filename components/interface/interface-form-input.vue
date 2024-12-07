<template>
  <input
    v-model.trim="model"
    :placeholder="placeholder"
    type="text"
    class="form-control"
    :disabled="disabled"
  />
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const model = defineModel({
  type: String,
  default: '',
})
</script>
