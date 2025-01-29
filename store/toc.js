import { defineStore } from 'pinia'

export const useTocStore = defineStore('toc', {
  state: () => ({
    selectionKeys: '',
  }),
  actions: {
    reset() {
      this.selectionKeys = ''
    },
  },
})
