<template>
  <span
    v-if="minutes"
    class="text-muted small d-inline-flex align-items-center"
  >
    <InterfaceIcon
      class="me-1"
      icon="clock"
    />
    <span class="me-3">{{ minText }}</span>
  </span>
</template>

<script
  lang="ts"
  setup
>
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  minutes: {
    type: Number,
    default: 0,
  },
})

const minText = computed(() => Math.ceil(props.minutes) + ' min')
</script>
