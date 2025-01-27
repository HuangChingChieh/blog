<template>
  <InterfaceBadge class="inline-block font-mono">
    #<slot>{{ tagName }}</slot>
  </InterfaceBadge>
</template>

<script setup>
defineProps({
  tagName: {
    type: String,
    default: '',
  },
})
</script>
