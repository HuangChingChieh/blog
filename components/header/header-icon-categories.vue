<template>
  <CommonHeaderIcon
    icon="folder"
    title="文章分類"
    :text="text"
    @click="openModal('categories')"
  />
</template>

<script setup>
import { useUiStore } from '~/store/ui'

defineProps({
  showText: {
    type: Boolean,
    default: false,
  },
})

const { openModal } = useUiStore()

const { categoriesMap } = useRuntimeConfig().public
const route = useRoute()

const text = computed(() => categoriesMap[route.params.category] || '')
</script>
