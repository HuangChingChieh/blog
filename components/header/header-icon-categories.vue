<template>
  <CommonHeaderIcon
    icon="folder"
    title="文章分類"
    :class="iconClass"
    @click="openModalCategories"
  >
    <span v-if="showText && text">{{ text }}</span>
  </CommonHeaderIcon>
</template>

<script setup>
import { useUiStore } from '~/store/ui'

defineProps({
  showText: {
    type: Boolean,
    default: false,
  },
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const { openModalCategories } = useUiStore()

const { categoriesMap } = useRuntimeConfig().public
const route = useRoute()

const text = computed(() => categoriesMap[route.params.category])
</script>
