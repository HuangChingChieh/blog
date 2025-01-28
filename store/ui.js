import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    modal: {
      categories: false,
      search: false,
    },
  }),
  actions: {
    openModalCategories() {
      this.modal.categories = true
    },
    openModalSearch() {
      this.modal.search = true
    },
  },
})
