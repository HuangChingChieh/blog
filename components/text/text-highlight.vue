<template>
  <span v-html="textHighlight"></span>
</template>

<script>
import escapeRegExp from 'lodash/escapeRegExp'
import escape from 'lodash/escape'

export default {
  props: {
    keyword: {
      type: [String, Array],
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    keywordArr() {
      const { keyword } = this
      return typeof keyword === 'string'
        ? keyword.split(' ').map((str) => escapeRegExp(escape(str)))
        : Array.isArray(keyword)
        ? keyword.map((str) => escapeRegExp(escape(str)))
        : []
    },
    textHighlight() {
      const { keywordArr, text } = this
      const regex = new RegExp(keywordArr.join('|'), 'gi')

      return typeof text === 'string'
        ? escape(text).replace(
            regex,
            (match) => `<b class="text-primary">${match}</b>`
          )
        : text
    },
  },
}
</script>
