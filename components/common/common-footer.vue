<template>
  <footer class="pb-5" :class="$style.footer">
    <InterfaceContainer class="text-white">
      <InterfaceRow>
        <footer-block>
          <footer-title>
            <nuxt-link
              :to="{ path: '/buy_me_a_tea', hash: '關於我' }"
              class="text-primary"
              >關於我</nuxt-link
            >

            <common-icon height="16" class="ms-2"
          /></footer-title>

          <footer-content>
            工作時若不喝上一杯飲料就無法做事的前端小碼農。三大前端框架陣營中屬於
            Vue 陣營。
          </footer-content>
        </footer-block>

        <footer-block>
          <footer-title>
            <nuxt-link
              :to="{ path: '/buy_me_a_tea', hash: '關於隨機手札' }"
              class="text-primary"
              >關於隨機手札</nuxt-link
            ></footer-title
          >
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
          <footer-title>
            <nuxt-link
              :to="{ path: '/buy_me_a_tea', hash: '請我喝杯手搖飲吧！' }"
              class="text-primary"
              >請我喝杯手搖飲吧！</nuxt-link
            ></footer-title
          >

          <footer-content
            >若這裡的經驗分享有幫助到你，可以透過<footer-link
              href="https://ko-fi.com/chaoschaoshuang"
              >Ko-fi</footer-link
            >請我喝杯手搖飲哦！</footer-content
          >
        </footer-block>
      </InterfaceRow>
    </InterfaceContainer>
  </footer>
</template>

<script>
import { gridColumns } from '~/assets/css/custom.scss'
import { getCategoryLink } from '~/utils/getLink'

import InterfaceContainer from '~/components/interface/interface-container.vue'
import InterfaceRow from '~/components/interface/interface-row.vue'

import FooterTitle from '~/components/footer/footer-title.vue'
import FooterBlock from '~/components/footer/footer-block.vue'
import FooterContent from '~/components/footer/footer-content.vue'
import FooterLink from '~/components/footer/footer-link.vue'
import CommonIcon from '~/components/common/common-icon.vue'

export default {
  components: {
    InterfaceContainer,
    InterfaceRow,
    FooterTitle,
    FooterBlock,
    FooterContent,
    FooterLink,
    CommonIcon,
  },
  data() {
    return { gridColumns }
  },
  methods: { getCategoryLink },
}
</script>

<style lang="scss" module>
.footer {
  background-color: var(--bs-gray-800);

  @media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
    background-color: var(--bs-gray-900);
  }
}
</style>
