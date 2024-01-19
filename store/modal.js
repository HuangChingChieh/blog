export const state = () => ({
  toc: false,
  categories: false,
  search: false,
})

export const mutations = {
  toggleModal(state, { key, isOpen }) {
    state[key] = isOpen
  },
}
