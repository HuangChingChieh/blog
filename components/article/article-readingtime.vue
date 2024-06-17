<template>
  <span
    v-if="minutes"
    class="text-muted small d-inline-flex align-items-center"
  >
    <InterfaceIcon class="me-1" icon="clock" />
    <span>{{ minText }}</span>
  </span>
</template>

<script setup>
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  minutes: {
    type: Number,
    default: 0,
  },
})

const minText = computed(() => Math.ceil(props.minutes) + ' min')
</script>
