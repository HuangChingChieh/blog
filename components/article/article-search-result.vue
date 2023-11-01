<template>
  <a
    :href="`/${article.slug}`"
    class="text-decoration-none d-flex flex-column"
    @click="goToArticle(article.slug)"
  >
    <text-highlight
      :keyword="keywordByTitle"
      :text="article.title"
      class="text-body font-weight-bold"
    />
    <text-highlight
      :keyword="keywordByPlainText"
      :text="getBreakDownText(article.plainText, keywordByPlainText)"
      class="text-muted text-two-line"
    />
  </a>
</template>
<script>
import escapeRegExp from 'lodash/escapeRegExp'
import TextHighlight from '~/components/text/text-highlight.vue'

export default {
  components: { TextHighlight },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
    keyword: {
      type: String,
      default: '',
    },
  },
  computed: {
    keywordArr() {
      const { keyword } = this
      return typeof keyword === 'string' ? keyword.split(' ') : []
    },
    keywordByTitle() {
      return this.getBreakdownKeyword(this.article.title, this.keywordArr)
    },
    keywordByPlainText() {
      return this.getBreakdownKeyword(this.article.plainText, this.keywordArr)
    },
  },
  methods: {
    goToArticle(slug) {
      this.valueInner = false
      this.$router.push(`/${slug}`)
    },
    getBreakDownText(targetStr = '', keyword = []) {
      const maxLength = 200
      if (targetStr.length > maxLength) {
        const regex = new RegExp(
          keyword.map((str) => escapeRegExp(str)).join('|'),
          'gi'
        )

        const matched = [...targetStr.matchAll(regex)]

        let { startIndex } = matched.reduce(
          (calc, { index }) => {
            const { maxContainCount } = calc

            const containCount = matched.filter(
              (contain) =>
                index + maxLength >= contain.index && contain.index >= index
            ).length

            if (containCount > maxContainCount) {
              calc.maxContainCount = containCount
              calc.startIndex = index
            }

            return calc
          },
          { maxContainCount: 0, startIndex: 0 }
        )

        startIndex = Math.min(startIndex, targetStr.length - maxLength - 1)
        targetStr = targetStr.substring(startIndex, startIndex + maxLength - 1)
      }

      return targetStr
    },
    getBreakdownKeyword(targetStr = '', keywordArr = []) {
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
    },
  },
}
</script>
