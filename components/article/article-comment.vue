<template>
  <div ref="comments" class="giscus" />
</template>

<script setup>
import { kebabCase } from 'es-toolkit'
import { useThemeStore } from '~/store/theme'

import { useElementVisibility } from '@vueuse/core'

const comments = ref(null)
const commentsIsVisible = useElementVisibility(comments)

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

const init = () => {
  if (commentsIsVisible.value && !inited.value) inited.value = true
}

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

watchEffect(() => {
  if (!inited.value) return

  // See https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events
  const { value } = comments
  if (!value || !(value instanceof HTMLDivElement)) return

  const iframe = value.querySelector('iframe.giscus-frame')
  if (!iframe || !(iframe instanceof HTMLIFrameElement)) return

  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme: theme.value } } },
    'https://giscus.app',
  )
})

watchEffect(init)
</script>
