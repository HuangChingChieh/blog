<template>
  <div ref="comments" v-b-visible="init" class="giscus"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import { VBVisible } from 'bootstrap-vue'

import kebabCase from 'lodash/kebabCase'

export default {
  directives: { 'b-visible': VBVisible },
  data() {
    return {
      inited: false,
    }
  },
  head() {
    const { inited, giscus } = this

    const script = []

    if (inited) {
      const scriptGisgus = {
        src: 'https://giscus.app/client.js',
        crossorigin: 'anonymous',
      }

      Object.keys(giscus).forEach((key) => {
        scriptGisgus[`data-${kebabCase(key)}`] = giscus[key]
      })
      script.push(scriptGisgus)
    }

    return {
      script,
    }
  },
  computed: {
    ...mapGetters('theme', ['darkComputed']),
    giscus() {
      return {
        theme: this.darkComputed ? 'dark' : 'light',
        repo: 'HuangChingChieh/blog',
        repoId: 'R_kgDOHHJsJQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOHHJsJc4CcL42',
        // term: string,
        // description: string,
        // backLink: string,
        // number: number,
        // strict: boolean,
        reactionsEnabled: 0,
        emitMetadata: 0,
        inputPosition: 'top',
        lang: 'zh-TW',
        loading: 'lazy',
      }
    },
  },
  watch: {
    darkComputed() {
      if (this.inited) {
        // See https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events
        const iframe = this.$refs.comments.querySelector('iframe.giscus-frame')
        if (iframe && iframe instanceof HTMLIFrameElement) {
          const { giscus } = this
          iframe.contentWindow.postMessage({ giscus }, 'https://giscus.app')
        }
      }
    },
  },
  methods: {
    init(isVisible) {
      if (isVisible && !this.inited) this.inited = true
    },
  },
}
</script>
