<template>
  <InterfaceModal
    v-model="model"
    title="摘要"
    modal-class="modal-toc"
    @hidden="hidden"
  >
    <ModalTocNav
      v-b-scrollspy
      :items="mainStore.toc"
      :min-depth="minDepth"
      @scroll-to="scrollTo"
    >
      <template #default="{ item }">
        <ModalTocNav
          :items="item.children"
          :min-depth="minDepth"
          @scroll-to="scrollTo"
        />
      </template>
    </ModalTocNav>
  </InterfaceModal>
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '~/store/index'

import InterfaceModal from '~/components/interface/interface-modal.vue'
import ModalTocNav from '~/components/modal/modal-toc-nav.vue'
import vBScrollspy from '~/utils/bScrollspy'

const model = defineModel({
  type: Boolean,
  default: false,
})

const hidden = () => { }

const mainStore = useMainStore()

const minDepth = computed(() => {
  const { toc } = mainStore
  return Array.isArray(toc) && toc.length > 0
    ? toc.reduce((depth, item) => Math.min(depth, item.depth), toc[0].depth)
    : 2
})

const scrollTo = () => {
  model.value = false
}
</script>

<style lang="scss">
.modal-toc {
  .nav-link.active {
    font-weight: 900;
    color: $primary;
    border-color: $primary !important;
  }
}
</style>