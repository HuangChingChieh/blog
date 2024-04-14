<template>
  <div class="position-relative">
    <div class="d-flex flex-row align-items-center text-white py-2 px-3 rounded-top bg-secondary">
      <div class="flex-grow-1 text-truncate pe-3 small fw-bold font-monospace">
        {{ filename }}
      </div>

      <InterfaceButton
        :disabled="copied"
        class="p-0 d-flex align-items-center justify-content-center text-white"
        variant="link"
        @click="copyCode"
      >
        <InterfaceIcon
          v-if="copied"
          icon="clipboard-check"
        />
        <InterfaceIcon
          v-else
          icon="clipboard"
        />
      </InterfaceButton>
    </div>

    <div
      ref="code"
      class="rounded-bottom bg-black"
    >
      <pre :class="$style.code"><slot /></pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InterfaceButton from '~/components/interface/interface-button.vue'
import InterfaceIcon from '~/components/interface/interface-icon.vue'

const props = defineProps({
  filename: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
})

const copied = ref(false)
const copiedTimeout = ref(0)
const code = ref(null)

const setCopied = () => {
  clearTimeout(copiedTimeout.value)
  copied.value = true
  copiedTimeout.value = window.setTimeout(() => {
    copied.value = false
  }, 2000)
}

const copyCode = () => {
  if (copied.value) return

  const codeElement: any = code.value;
  if (!codeElement || !(codeElement instanceof HTMLElement)) return

  if (navigator.clipboard?.writeText) {
    const toCopyCode = codeElement.innerText.trim()
    navigator.clipboard.writeText(toCopyCode).then(() => {
      setCopied()
    })
  } else {
    const range = document.createRange()
    range.selectNode(codeElement)

    const selection = window.getSelection()
    if (!selection) return

    selection.removeAllRanges()
    selection.addRange(range)

    document.execCommand('copy')
    selection.removeAllRanges()

    setCopied()
  }
}
</script>

<style lang="scss" module>
.code {
  border-radius: $border-radius;
  font-size: $small-font-size !important;
  margin: 0 0 $paragraph-margin-bottom 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 1rem;
}
</style>
