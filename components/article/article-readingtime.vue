<template>
  <span v-if="minutes" class="text-muted inline-flex items-center text-sm">
    <InterfaceIcon class="me-1" icon="clock" />
    <span>{{ minText }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  minutes: {
    type: Number,
    default: 0,
  },
})

const minText = computed(() => Math.ceil(props.minutes) + ' min')
</script>
