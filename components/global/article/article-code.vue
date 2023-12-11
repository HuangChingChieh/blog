<template>
  <div class="article-code position-relative">
    <div class="filename d-flex flex-row align-items-center">
      <div class="flex-grow-1 text-truncate">{{ fileName }}</div>

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

    <div ref="code">
      <slot></slot>
    </div>

    <input ref="hiddenInput" v-model="toCopyCode" type="hidden" />
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
  },
  data() {
    return { toCopyCode: '', copied: false, copiedTimeout: null }
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

      const { code, hiddenInput } = this.$refs

      if (navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(code.querySelector('pre').innerText)
          .then(() => {
            this.setCopied()
          })
      } else if (hiddenInput instanceof HTMLInputElement) {
        hiddenInput.select()

        document.execCommand('copy')
        this.setCopied()
      }
    },
  },
}
</script>
