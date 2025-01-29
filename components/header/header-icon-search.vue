<template>
  <CommonHeaderIcon
    icon="search"
    title="搜尋文章"
    @click="openModal('search')"
  />
</template>

<script setup>
import { useUiStore } from '~/store/ui'

const { openModal } = useUiStore()
</script>
