<template>
  <NuxtLink
    :to="to"
    class="text-decoration-none d-flex flex-column"
    @click="$emit('click')"
  >
    <TextHighlight
      :keyword="keywordByText"
      :text="breakDown ? textBreakDown : text"
      :class="textClass"
    />
  </NuxtLink>
</template>
  
<script setup>
import escapeRegExp from 'lodash/escapeRegExp'
import { computed } from 'vue'
import TextHighlight from '~/components/text/text-highlight.vue'

const props = defineProps({
  to: {
    type: [String, Object],
    default: ''
  },
  keyword: {
    type: String,
    default: '',
  },
  textClass: {
    type: [String, Object, Array],
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  textMaxLength: {
    type: [Number, String],
    default: 150,
    validator: (value) => !isNaN(Number(value))
  },
  /**
   * 是否根據`textMaxLength`擷取`text`，擷取過程會保證擷取出來的文字至少包含一次的關鍵字。
   */
  breakDown: {
    type: Boolean,
    default: false
  }
})

const keywordArr = computed(() => props.keyword.split(' '))
const keywordByText = computed(() =>
  getBreakdownKeyword(props.text, keywordArr.value)
)

const getBreakdownKeyword = (targetStr = '', keywordArr = []) => {
  const keywordHandled = []

  if (targetStr && Array.isArray(keywordArr) && keywordArr.length > 0) {
    keywordArr.forEach((str) => {
      let matched = null
      while (!matched && str) {
        const regex = new RegExp(escapeRegExp(str), 'i')
        matched = regex.test(targetStr)

        if (matched) keywordHandled.push(str)
        else str = str.substring(0, str.length - 1)
      }
    })
  }

  return keywordHandled
}

const textBreakDown = computed(() => {
  let { text } = props
  const { textMaxLength } = props
  if (text.length > textMaxLength) {
    const regex = new RegExp(
      keywordByText.value.map((str) => escapeRegExp(str)).join('|'),
      'gi'
    )

    const matched = [...text.matchAll(regex)]

    let { startIndex } = matched.reduce(
      (calc, { index }) => {
        const { maxContainCount } = calc

        const containCount = matched.filter(
          (contain) =>
            index + textMaxLength >= contain.index && contain.index >= index
        ).length

        if (containCount > maxContainCount) {
          calc.maxContainCount = containCount
          calc.startIndex = index
        }

        return calc
      },
      { maxContainCount: 0, startIndex: 0 }
    )

    startIndex = Math.min(startIndex, text.length - textMaxLength - 1)
    text = text.substring(startIndex, startIndex + textMaxLength - 1)
  }

  return text
})
</script>
  