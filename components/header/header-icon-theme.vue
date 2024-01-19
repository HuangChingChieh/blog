<template>
  <common-header-icon :icon="icon" :class="iconClass" @click="toggle" />
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'

export default {
  components: { CommonHeaderIcon },
  props: {
    iconClass: {
      type: [String, Array],
      default: '',
    },
  },
  computed: {
    ...mapState('theme', ['dark', 'preferDark']),
    ...mapGetters('theme', ['darkComputed']),
    icon() {
      return this.darkComputed ? 'moon-stars' : 'sun'
    },
  },
  watch: {
    darkComputed() {
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
        this.setPreferDark(matches)
      })

      this.setPreferDark(mediaQuery.matches)
      this.themeToRoot()
    }

    if (localStorage.getItem('dark')) {
      this.setDark(!!Number(localStorage.getItem('dark')))
    }
  },
  methods: {
    ...mapMutations('theme', ['setDark', 'setPreferDark']),
    toggle() {
      this.setDark(!this.darkComputed)

      const { dark } = this
      localStorage.setItem('dark', Number(dark))
    },
    themeToRoot() {
      document.querySelector(':root').dataset.bsTheme = this.darkComputed
        ? 'dark'
        : 'light'
    },
  },
}
</script>
