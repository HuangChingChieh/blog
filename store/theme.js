import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: null,
    preferDark: true,
  }),
  getters: {
    darkComputed({ dark, preferDark }) {
      let darkComputed = preferDark

      if (typeof dark === 'boolean') {
        darkComputed = dark
      }

      return darkComputed
    },
    icon() {
      return this.darkComputed ? 'moon-stars' : 'sun'
    },
  },
  actions: {
    /**
     * 初始化在client端與變更主題有關的行為，包含：
     * 1. 監聽prefers-color-scheme變化
     * 2. 監聽存入localStorage的主題偏好
     * 3. 讀取localStorage的偏好
     */
    init() {
      const { matchMedia } = window
      if (matchMedia && typeof matchMedia === 'function') {
        const mediaQuery = matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', ({ matches }) => {
          this.preferDark = matches
        })

        this.preferDark = mediaQuery.matches
      }

      this.setDarkFromLocalStorage()

      window.addEventListener('storage', () => {
        this.setDarkFromLocalStorage()
      })
    },
    setDarkFromLocalStorage() {
      if (localStorage.getItem('dark')) {
        this.setDark(localStorage.getItem('dark'))
      }
    },
    setDark(dark) {
      const darkNumber = Number(dark)
      this.dark = !!darkNumber
      localStorage.setItem('dark', darkNumber)
    },
    toggle() {
      this.setDark(!this.darkComputed)
    },
  },
})
