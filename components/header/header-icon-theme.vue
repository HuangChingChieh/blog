<template>
  <div @click="toggle">
    <common-header-icon :icon="icon" />
  </div>
</template>

<script>
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'

export default {
  components: { CommonHeaderIcon },
  data() {
    let dark = null
    if (process.client && localStorage.getItem('dark')) {
      dark = !!Number(localStorage.getItem('dark'))
    }

    return {
      dark,
      preferDark: true,
    }
  },
  computed: {
    darkComputed() {
      let darkComputed = true
      const { dark, preferDark } = this

      if (typeof dark === 'boolean') {
        darkComputed = dark
      } else {
        darkComputed = preferDark
      }

      return darkComputed
    },
    icon() {
      return this.darkComputed ? 'moon-stars' : 'sun'
    },
  },
  watch: {
    darkComputed(dark) {
      if (process.client) {
        this.themeToRoot()
      }
    },
  },
  beforeMount() {
    const { matchMedia } = window
    if (matchMedia && typeof matchMedia === 'function') {
      const mediaQuery = matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', ({ matches }) => {
        this.preferDark = matches
      })

      this.preferDark = mediaQuery.matches
      this.themeToRoot()
    }
  },
  methods: {
    toggle() {
      this.dark = !this.darkComputed

      const { dark } = this
      localStorage.setItem('dark', Number(dark))
    },
    themeToRoot() {
      document.querySelector(':root').dataset.theme = this.darkComputed
        ? 'dark'
        : 'light'
    },
  },
}
</script>
