<template>
  <InterfaceModal v-model="uiStore.modal.categories" title="文章分類">
    <PMenu :model="items">
      <template #item="{ item }">
        <NuxtLink
          :to="item.to"
          active-class="border-l-2 border-primary"
          class="p-menu-item-link"
          @click="closeModal('categories')"
          >{{ item.label }}</NuxtLink
        >
      </template>
    </PMenu>
  </InterfaceModal>
</template>

<script setup>
import { useUiStore } from '~/store/ui'

const uiStore = useUiStore()
const { closeModal } = uiStore

const { categoriesMap } = useRuntimeConfig().public

const items = Object.keys(categoriesMap).map((key) => ({
  label: categoriesMap[key],
  key,
  to: getCategoryLink({ category: key }),
}))
</script>
