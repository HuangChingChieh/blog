<template>
  <footer class="common-footer pb-5">
    <b-container :fluid="mobileBreakpoint" class="text-white">
      <b-row>
        <footer-block>
          <footer-title
            >關於我 <common-icon height="16" class="ml-2"
          /></footer-title>

          <footer-content>
            工作時若不喝上一杯飲料就無法做事的前端小碼農。三大前端框架陣營中屬於
            Vue 陣營。
          </footer-content>
        </footer-block>

        <footer-block>
          <footer-title>關於隨機手札</footer-title>
          <footer-content
            >使用
            <footer-link href="https://v2.nuxt.com/">Nuxt 2</footer-link>
            建置於
            <footer-link href="https://pages.github.com/"
              >Github Pages</footer-link
            >
            上，全站文字皆在
            <footer-link
              href="https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hant"
              >創用CC BY-ND 4.0 條款</footer-link
            >
            下提供。
          </footer-content>
        </footer-block>

        <footer-block>
          <footer-title>請我喝杯手搖飲吧！</footer-title>

          <footer-content
            >若這裡的經驗分享有幫助到你，可以透過<footer-link
              href="https://ko-fi.com/chaoschaoshuang"
              >Ko-fi</footer-link
            >請我喝杯手搖飲哦！</footer-content
          >
        </footer-block>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BContainer, BRow } from 'bootstrap-vue'
import { mobileBreakpoint, gridColumns } from '~/assets/css/custom.scss'
import { getCategoryLink } from '~/utils/getLink'

import FooterTitle from '~/components/footer/footer-title.vue'
import FooterBlock from '~/components/footer/footer-block.vue'
import FooterContent from '~/components/footer/footer-content.vue'
import FooterLink from '~/components/footer/footer-link.vue'
import CommonIcon from '~/components/common/common-icon.vue'

export default {
  components: {
    BContainer,
    BRow,
    FooterTitle,
    FooterBlock,
    FooterContent,
    FooterLink,
    CommonIcon,
  },
  data() {
    return { mobileBreakpoint, gridColumns }
  },
  methods: { getCategoryLink },
}
</script>

<style lang="scss">
.common-footer {
  background-color: $dark;
}
</style>
