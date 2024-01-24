<template>
  <InterfaceModal
    v-model="model"
    title="文章分類"
  >
    <InterfaceNav
      active-class="fw-bold"
      vertical
      :items="items"
      :link-generate-func="getLink"
      @click-item="model = false"
    >
      <template #item="{ item }">
        {{ item.name }}
      </template>
    </InterfaceNav>
  </InterfaceModal>
</template>

<script setup>
import { getCategoryLink } from '~/utils/getLink'

import InterfaceModal from '~/components/interface/interface-modal.vue'
import InterfaceNav from '~/components/interface/interface-nav.vue'
import { computed } from 'vue'

const model = defineModel({
  type: Boolean,
  default: false,
})

const { categoriesMap } = useRuntimeConfig().public
const items = computed(() =>
  Object.keys(categoriesMap).map((key) => ({
    name: categoriesMap[key],
    value: key,
  }))
)

const getLink = ({ value }) => getCategoryLink({ category: value })
</script>
