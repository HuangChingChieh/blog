<template>
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly>
    <Teleport to="body">
      <!-- 解決底部sticky問題 -->
      <div style="position: fixed" />
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { useThemeStore } from './store/theme'

// Theme相關
const themeStore = useThemeStore()
const dataBsTheme = computed(() => (themeStore.darkComputed ? 'dark' : 'light'))
onMounted(() => {
  themeStore.init()
})

useHead({
  htmlAttrs: {
    'data-bs-theme': dataBsTheme,
  },
  bodyAttrs: {
    class:
      'bg-background lg:bg-foreground dark:bg-background-dark dark:lg:bg-foreground-dark',
  },
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: $transition-fade;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
