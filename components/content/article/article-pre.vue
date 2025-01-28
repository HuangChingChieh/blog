<template>
  <div class="relative my-paragraph">
    <div
      class="flex flex-row items-center text-white py-2 px-4 rounded-t bg-primary-800"
    >
      <div class="grow truncate pe-4 text-sm font-bold font-mono">
        {{ filename }}
      </div>

      <InterfaceButton
        :disabled="copied"
        class="p-0 flex items-center justify-center text-white"
        variant="link"
        @click="copyCode"
      >
        <InterfaceIcon v-if="copied" icon="clipboard-check" />
        <InterfaceIcon v-else icon="clipboard" />
      </InterfaceButton>
    </div>

    <div ref="code" class="rounded-b bg-black">
      <pre class="text-sm p-4 overflow-x-auto"><slot /></pre>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
const copiedTimeout = ref(null)
const code = ref(null)

const setCopied = () => {
  clearTimeout(copiedTimeout.value)
  copied.value = true
  copiedTimeout.value = setTimeout(() => {
    copied.value = false
  }, 2000)
}

const copyCode = async () => {
  if (copied.value) return

  if (navigator.clipboard?.writeText) {
    const toCopyCode = code.value.innerText.trim()
    await navigator.clipboard.writeText(toCopyCode)
  } else {
    const range = document.createRange()
    range.selectNode(code)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)

    document.execCommand('copy')
    selection.removeAllRanges()
  }

  setCopied()
}
</script>
