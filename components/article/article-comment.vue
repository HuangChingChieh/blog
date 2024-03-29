<template>
  <div
    ref="comments"
    v-b-visible="init"
    class="giscus"
  />
</template>

<script
  lang="ts"
  setup
>
import type { Script } from '@unhead/schema';
import type { GiscusConfig } from '~/types/giscus'

import { computed, ref, watch } from 'vue'
import { kebabCase } from 'lodash'

import vBVisible from '~/utils/bVisible'
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()

const theme = computed(() => (themeStore.darkComputed ? 'dark' : 'light'))

const giscus: GiscusConfig = {
  repo: 'HuangChingChieh/blog',
  repoId: 'R_kgDOHHJsJQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOHHJsJc4CcL42',
  reactionsEnabled: 0,
  emitMetadata: 0,
  inputPosition: 'top',
  lang: 'zh-TW',
  loading: 'lazy',
  theme: theme.value,
}
const giscusKeys: (keyof GiscusConfig)[] = Object.keys(giscus) as (keyof GiscusConfig)[];


const inited = ref(false)
const comments = ref(null)
const script = computed(() => {
  const script: Script[] = []

  if (inited.value) {
    const scriptGisgus: Script = {
      src: 'https://giscus.app/client.js',
      crossorigin: 'anonymous',
    }

    giscusKeys.forEach((key) => {
      const value = giscus[key];
      if (value) scriptGisgus[`data-${kebabCase(key)}`] = value
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
  const commentsElement: any = comments.value;

  if (!commentsElement || !(commentsElement instanceof HTMLElement)) return
  const iframe = commentsElement.querySelector('iframe.giscus-frame')
  if (!iframe || !(iframe instanceof HTMLIFrameElement)) return
  const { contentWindow } = iframe
  if (!contentWindow || !(contentWindow instanceof Window)) return
  contentWindow.postMessage(
    { giscus: { setConfig: { theme: theme.value } } },
    'https://giscus.app'
  )
})

const init = (isVisible: boolean) => {
  if (isVisible && !inited.value) inited.value = true
}
</script>
