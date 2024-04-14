<template>
  <footer
    class="pb-5"
    :class="$style.footer"
  >
    <InterfaceContainer class="text-white">
      <InterfaceRow>
        <FooterBlock
          title="關於我"
          :title-to="{ path: '/buy_me_a_tea', hash: '#關於我' }"
        >
          <template #title>
            <CommonIcon
              height="16"
              class="ms-2"
            />
          </template>

          工作時若不喝上一杯飲料就無法做事的前端小碼農。三大前端框架陣營中屬於
          Vue 陣營。
        </FooterBlock>

        <FooterBlock
          title="關於隨機手札"
          :title-to="{ path: '/buy_me_a_tea', hash: '#關於隨機手札' }"
        >
          使用
          <FooterLink href="https://v2.nuxt.com/">
            Nuxt 2
          </FooterLink>
          建置於
          <FooterLink href="https://pages.github.com/">
            Github Pages
          </FooterLink>
          上，全站文字皆在
          <FooterLink href="https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hant">
            創用CC BY-ND 4.0 條款
          </FooterLink>
          下提供。
        </FooterBlock>

        <FooterBlock
          title="請我喝杯手搖飲吧！"
          :title-to="{ path: '/buy_me_a_tea', hash: '#請我喝杯手搖飲吧！' }"
        >
          若這裡的經驗分享有幫助到你，可以透過<FooterLink href="https://ko-fi.com/chaoschaoshuang">
            Ko-fi
          </FooterLink>請我喝杯手搖飲哦！
        </FooterBlock>
      </InterfaceRow>
    </InterfaceContainer>
  </footer>
</template>

<script lang="ts" setup>
import InterfaceContainer from '~/components/interface/interface-container.vue'
import InterfaceRow from '~/components/interface/interface-row.vue'
import FooterBlock from '~/components/footer/footer-block.vue'
import FooterLink from '~/components/footer/footer-link.vue'
import CommonIcon from '~/components/common/common-icon.vue'
</script>

<style lang="scss" module>
.footer {
  background-color: var(--bs-gray-800);

  @media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
    background-color: var(--bs-gray-900);
  }
}
</style>
