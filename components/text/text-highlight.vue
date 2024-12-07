<template>
  <span v-html="textHighlight" />
</template>

<script setup>
import { escape, escapeRegExp } from 'es-toolkit'
import { computed } from 'vue'

const props = defineProps({
  keyword: {
    type: [String, Array],
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})

const keywordArr = computed(() => {
  const { keyword } = props
  return typeof keyword === 'string'
    ? keyword.split(' ').map((str) => escapeRegExp(escape(str)))
    : Array.isArray(keyword)
    ? keyword.map((str) => escapeRegExp(escape(str)))
    : []
})

const textHighlight = computed(() => {
  const { text } = props
  const regex = new RegExp(keywordArr.value.join('|'), 'gi')

  return typeof text === 'string'
    ? escape(text).replace(
        regex,
        (match) => `<b class="text-primary">${match}</b>`
      )
    : text
})
</script>
