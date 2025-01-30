<template>
  <InterfaceBadge class="font-mono">
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
