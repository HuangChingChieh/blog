<template>
  <AsideContainer title="嗨，我是阿傑！">
    <div class="mx-auto" :class="$style.imgWrapper">
      <InterfaceImg
        img-class="p-1 rounded-circle border border-primary border-2 mb-4"
        img="922/bqqju1.jpg"
      />
    </div>

    <div class="text-muted text-center">
      <p :class="$style.p" class="mx-auto">
        一名浮沈於前端汪洋的小碼農，主要使用的框架為Vue及其生態系。平常的興趣是喝飲料、玩手遊（鎖鏈戰記、歧路旅人：大陸的霸者）。
      </p>

      <InterfaceButtonLink
        :to="{ path: '/buy_me_a_tea', hash: '#關於我' }"
        variant="outline-primary"
        class="rounded-pill"
      >
        關於我
      </InterfaceButtonLink>
    </div>
  </AsideContainer>
</template>

<style lang="scss" module>
.imgWrapper {
  width: 33.3333%;
  max-width: 150px;
}

.p {
  max-width: 450px;
}
</style>
