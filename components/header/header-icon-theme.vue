<template>
  <CommonHeaderIcon
    :icon="icon"
    :class="iconClass"
    @click="themeStore.toggle"
  />
</template>

<script setup>
import { useThemeStore } from '~/store/theme'

defineProps({
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const themeStore = useThemeStore()
const icon = computed(() => themeStore.icon)
</script>
