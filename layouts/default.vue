<template>
  <main>
    <CommonHeader />
    <InterfaceContainer class="py-4">
      <Nuxt />
    </InterfaceContainer>

    <CommonFooter class="mt-4" />

    <ModalToc v-model="toc" />
    <ModalCategories v-model="categories" />
    <ModalSearch v-model="search" />
  </main>
</template>

<script>
import InterfaceContainer from '~/components/interface/interface-container.vue'

import CommonHeader from '~/components/common/common-header.vue'
import CommonFooter from '~/components/common/common-footer.vue'

import ModalToc from '~/components/modal/modal-toc.vue'
import ModalCategories from '~/components/modal/modal-categories.vue'
import ModalSearch from '~/components/modal/modal-search.vue'

export default {
  components: {
    InterfaceContainer,
    CommonHeader,
    CommonFooter,
    ModalToc,
    ModalCategories,
    ModalSearch,
  },
  computed: {
    toc: {
      get() {
        return this.$store.state.modal.toc
      },
      set(isOpen) {
        this.$store.commit('modal/toggleModal', {
          key: 'toc',
          isOpen,
        })
      },
    },
    categories: {
      get() {
        return this.$store.state.modal.categories
      },
      set(isOpen) {
        this.$store.commit('modal/toggleModal', {
          key: 'categories',
          isOpen,
        })
      },
    },
    search: {
      get() {
        return this.$store.state.modal.search
      },
      set(isOpen) {
        this.$store.commit('modal/toggleModal', {
          key: 'search',
          isOpen,
        })
      },
    },
  },
}
</script>
