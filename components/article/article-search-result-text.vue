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

<script
  lang="ts"
  setup
>
import { escapeRegExp } from 'lodash'
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import TextHighlight from '~/components/text/text-highlight.vue'

const props = defineProps({
  to: {
    type: Object as PropType<RouteLocationRaw>,
    default: () => ({})
  },
  keyword: {
    type: String,
    default: '',
  },
  textClass: {
    type: [String, Object, Array] as PropType<string | Record<string, boolean> | string[]>,
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

const getBreakdownKeyword = (targetStr: string, keywordArr: string[]) => {
  const keywordHandled: string[] = []

  if (targetStr && Array.isArray(keywordArr) && keywordArr.length > 0) {
    keywordArr.forEach((str) => {
      let matched: boolean = false
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
  const textMaxLength = Number(props.textMaxLength)
  if (text.length > Number(textMaxLength)) {
    const regex = new RegExp(
      keywordByText.value.map((str) => escapeRegExp(str)).join('|'),
      'gi'
    )

    const matched = [...text.matchAll(regex)]

    let { startIndex } = matched.reduce(
      (calc, { index }) => {
        if (typeof index !== 'undefined') {

          const { maxContainCount } = calc

          const containCount = matched.filter(
            (contain) => {
              const containIndex = contain.index
              return typeof containIndex === 'number' && index + textMaxLength >= containIndex && containIndex >= index
            }
          ).length

          if (containCount > maxContainCount) {
            calc.maxContainCount = containCount
            calc.startIndex = index
          }
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