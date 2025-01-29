<template>
  <CommonHeaderIcon :icon="icon" @click="themeStore.toggle" />
</template>

<script setup>
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()
const icon = computed(() => themeStore.icon)
</script>
