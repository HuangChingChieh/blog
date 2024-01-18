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

      <InterfaceButton
        :disabled="copied"
        class="p-0 d-flex align-items-center justify-content-center text-white"
        variant="link"
        @click="copyCode"
      >
        <InterfaceIcon v-if="copied" icon="clipboard-check" />
        <InterfaceIcon v-else icon="clipboard" />
      </InterfaceButton>
    </div>

    <div ref="code" class="rounded-bottom" :class="$style.pre">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import InterfaceButton from '~/components/interface/interface-button.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default {
  components: { InterfaceButton, InterfaceIcon },
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

<style lang="scss" module>
.pre {
  border-radius: $border-radius-lg;
  font-size: $small-font-size !important;
  margin: 0 0 $paragraph-margin-bottom 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 1rem;
}
</style>
