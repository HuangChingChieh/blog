import { defineStore } from 'pinia'

const modal = {
  categories: false,
  search: false,
}

export const useUiStore = defineStore('ui', {
  state: () => ({
    modal,
  }),
  actions: {
    openModal(key = '') {
      if (!Object.keys(modal).includes(key)) return
      this.modal[key] = true
    },
    closeModal(key = '') {
      if (!Object.keys(modal).includes(key)) return
      this.modal[key] = false
    },
  },
})
