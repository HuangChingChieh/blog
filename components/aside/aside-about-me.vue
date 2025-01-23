<template>
  <AsideContainer title="嗨，我是阿傑！">
    <div class="mx-auto" :class="$style.imgWrapper">
      <InterfaceImg
        img-class="p-1 rounded-full border-2 border-primary-500 mb-6"
        img="922/bqqju1.jpg"
      />
    </div>

    <div class="text-muted text-center">
      <p :class="$style.p" class="mx-auto mb-normal">
        一名浮沈於前端汪洋的小碼農，主要使用的框架為Vue及其生態系。平常的興趣是喝飲料、玩手遊（鎖鏈戰記、歧路旅人：大陸的霸者）。
      </p>

      <ButtonEnter :to="{ path: '/buy_me_a_tea', hash: '#關於我' }">
        關於我
      </ButtonEnter>
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
