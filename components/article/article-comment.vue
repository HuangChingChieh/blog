<template>
  <div ref="comments" v-b-visible="init" class="giscus" />
</template>

<script setup>
import { kebabCase } from 'es-toolkit'
import vBVisible from '~/utils/bVisible'
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()

const theme = computed(() => (themeStore.darkComputed ? 'dark' : 'light'))

const giscus = {
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
  theme: theme.value,
}
const inited = ref(false)
const comments = ref(null)
const script = computed(() => {
  const script = []

  if (inited.value) {
    const scriptGisgus = {
      src: 'https://giscus.app/client.js',
      crossorigin: 'anonymous',
    }

    Object.keys(giscus).forEach((key) => {
      scriptGisgus[`data-${kebabCase(key)}`] = giscus[key]
    })
    script.push(scriptGisgus)
  }

  return script
})

useHead({
  script,
})

watch(theme, () => {
  // See https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events
  const iframe = comments.value.querySelector('iframe.giscus-frame')
  if (iframe && iframe instanceof HTMLIFrameElement) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme.value } } },
      'https://giscus.app'
    )
  }
})

const init = (isVisible) => {
  if (isVisible && !inited.value) inited.value = true
}
</script>
