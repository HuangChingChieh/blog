<template>
  <div class="article-code position-relative">
    <div
      class="d-flex flex-row align-items-center text-white py-2 px-3 rounded-top bg-secondary"
    >
      <div
        class="flex-grow-1 text-truncate pr-3 small font-weight-bold text-monospace"
      >
        {{ fileName }}
      </div>

      <b-button
        @click="copyCode"
        :disabled="copied"
        class="p-0 d-flex align-items-center justify-content-center text-white"
        variant="link"
      >
        <b-icon-clipboard-check v-if="copied" />
        <b-icon-clipboard v-else />
      </b-button>
    </div>

    <div ref="code" class="rounded-bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { BButton, BIconClipboard, BIconClipboardCheck } from 'bootstrap-vue'
export default {
  components: { BButton, BIconClipboard, BIconClipboardCheck },
  props: {
    fileName: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: '',
    },
  },
  data() {
    return { copied: false, copiedTimeout: null }
  },
  methods: {
    setCopied() {
      clearTimeout(this.copiedTimeout)
      this.copied = true
      this.copiedTimeout = setTimeout(() => {
        this.copied = false
      }, 2000)
    },
    copyCode() {
      if (this.copied) return

      const { code } = this.$refs

      if (navigator.clipboard?.writeText) {
        const toCopyCode = code.innerText
        navigator.clipboard.writeText(toCopyCode).then(() => {
          this.setCopied()
        })
      } else {
        const range = document.createRange()
        range.selectNode(code)

        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)

        document.execCommand('copy')
        selection.removeAllRanges()

        this.setCopied()
      }
    },
  },
}
</script>
