<template>
  <div v-show="hasToc">
    <CommonHeaderIcon
      icon="card-list"
      title="文章摘要"
      :class="iconClass"
      @click="modalOpen = true"
    />

    <ModalToc v-model="modalOpen" />
  </div>
</template>

<script setup>
import { useMainStore } from '~/store/index'

import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import ModalToc from '~/components/modal/modal-toc.vue'

import { computed } from 'vue'

const props = defineProps({
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const modalOpen = ref(false)

const mainStore = useMainStore()
const hasToc = computed(() => {
  const { toc } = mainStore
  return Array.isArray(toc) && toc.length > 0
})
</script>
