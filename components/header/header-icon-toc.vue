<template>
  <div>
    <ClientOnly>
      <CommonHeaderIcon
        v-if="hasToc"
        icon="card-list"
        title="文章摘要"
        :class="iconClass"
        @click="modalOpen = true"
      />

      <ModalToc v-model="modalOpen" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
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
const hasToc = computed(() => mainStore.toc.length > 0)
</script>
