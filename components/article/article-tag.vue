<template>
  <InterfaceBadge class="d-inline-block fw-normal font-monospace">
    #<slot>{{ tagName }}</slot>
  </InterfaceBadge>
</template>

<script setup>
import InterfaceBadge from '~/components/interface/interface-badge.vue'

const props = defineProps({
  tagName: {
    type: String,
    default: '',
  },
})
</script>
