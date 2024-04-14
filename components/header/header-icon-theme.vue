<template>
  <CommonHeaderIcon
    :icon="icon"
    :class="iconClass"
    @click="themeStore.toggle"
  />
</template>

<script lang="ts" setup>
import { useThemeStore } from '~/store/theme'

import CommonHeaderIcon from '~/components/common/common-header-icon.vue'

const props = defineProps({
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const themeStore = useThemeStore()
const icon = computed(() => themeStore.icon)
</script>
