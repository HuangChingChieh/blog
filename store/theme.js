export const state = () => ({
  dark: null,
  preferDark: true,
})

export const mutations = {
  setDark(state, dark) {
    state.dark = dark
  },
  setPreferDark(state, preferDark) {
    state.preferDark = preferDark
  },
}

export const getters = {
  darkComputed({ dark, preferDark }) {
    let darkComputed = true

    if (typeof dark === 'boolean') {
      darkComputed = dark
    } else {
      darkComputed = preferDark
    }

    return darkComputed
  },
}
