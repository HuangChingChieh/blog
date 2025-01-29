<template>
  <footer
    class="py-4 lg:py-12 bg-foreground-dark md:bg-background-dark text-white"
  >
    <InterfaceContainer
      class="grid grid-cols-1 md:grid-cols-3 gap-y-normal gap-x-12"
    >
      <FooterBlock
        title="關於我"
        :title-to="{ path: '/buy_me_a_tea', hash: '#關於我' }"
      >
        <template #title>
          <CommonIcon height="16" class="ms-2" />
        </template>

        工作時若不喝上一杯飲料就無法做事的前端小碼農。三大前端框架陣營中屬於 Vue
        陣營。
      </FooterBlock>

      <FooterBlock
        title="關於隨機手札"
        :title-to="{ path: '/buy_me_a_tea', hash: '#關於隨機手札' }"
      >
        使用
        <FooterLink href="https://nuxt.com/"> Nuxt 3 </FooterLink>
        建置於
        <FooterLink href="https://pages.github.com/"> Github Pages </FooterLink>
        上，全站文字皆在
        <FooterLink
          href="https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hant"
        >
          創用CC BY-ND 4.0 條款
        </FooterLink>
        下提供。
      </FooterBlock>

      <FooterBlock
        title="請我喝杯手搖飲吧！"
        :title-to="{ path: '/buy_me_a_tea', hash: '#請我喝杯手搖飲吧！' }"
      >
        若這裡的經驗分享有幫助到你，可以透過<FooterLink
          href="https://ko-fi.com/chaoschaoshuang"
        >
          Ko-fi </FooterLink
        >請我喝杯手搖飲哦！
      </FooterBlock>
    </InterfaceContainer>
  </footer>
</template>
