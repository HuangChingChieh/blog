<template>
  <CommonHeaderIcon
    icon="search"
    title="搜尋文章"
    :class="iconClass"
    @click="openModalSearch"
  />
</template>

<script setup>
import { useUiStore } from '~/store/ui'

defineProps({
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const { openModalSearch } = useUiStore()
</script>
