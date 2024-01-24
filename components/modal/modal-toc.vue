<template>
  <InterfaceModal
    v-model="model"
    title="摘要"
    :modal-class="[$style.modal, 'modal-toc']"
    @hidden="hidden"
  >
    <InterfaceNav
      v-b-scrollspy
      :items="mainStore.toc"
      :link-generate-func="getLink"
      :link-classes="[`p-0`, `border-start`, $style.navLink]"
      vertical
    >
      <template #item="{ item }">
        <ModalTocItem
          :item="item"
          :min-depth="minDepth"
          @click="scrollTo(item)"
        />
      </template>
    </InterfaceNav>
  </InterfaceModal>
</template>

<script setup>
import { useMainStore } from '~/store/index'

import InterfaceNav from '~/components/interface/interface-nav.vue'
import InterfaceModal from '~/components/interface/interface-modal.vue'

import ModalTocItem from '~/components/modal/modal-toc-item.vue'
import vBScrollspy from '~/utils/bScrollspy'
import { computed } from 'vue'

const model = defineModel({
  type: Boolean,
  default: false,
})

const hidden = () => {}

const mainStore = useMainStore()

const minDepth = computed(() => {
  const { toc } = mainStore
  return Array.isArray(toc) && toc.length > 0
    ? toc.reduce((depth, item) => Math.min(depth, item.depth), toc[0].depth)
    : 2
})

const getLink = ({ id }) => ({ hash: `#${id}` })

const scrollTo = ({ id }) => {
  nextTick(() => {
    const element = document.querySelector(`#${id}`)
    if (element instanceof HTMLElement) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      })
    }
  })

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

<style lang="scss" module>
.modal {
  .navLink {
    border-width: 3px !important;
  }
}
</style>
