<template>
  <InterfaceModal v-model="model" title="摘要">
    <ArticleTocs :toc="toc" @click-node="model = false" />
  </InterfaceModal>
</template>

<script setup>
defineProps({
  toc: {
    type: Array,
    default: () => [],
  },
})

const model = defineModel({
  type: Boolean,
  default: false,
})
</script>
