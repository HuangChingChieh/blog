<template>
  <AsideContainer title="嗨，我是阿傑！">
    <div class="mx-auto w-1/3 max-w-[150px]">
      <InterfaceImg
        class="p-1 rounded-full border-2 border-primary mb-6 bg-white"
        img="922/bqqju1.jpg"
      />
    </div>

    <div class="text-muted text-center">
      <p class="mx-auto mb-normal max-w-[450px]">
        一名浮沈於前端汪洋的小碼農，主要使用的框架為Vue及其生態系。平常的興趣是喝飲料、玩手遊（鎖鏈戰記、歧路旅人：大陸的霸者）。
      </p>

      <ButtonEnter :to="to"> 關於我 </ButtonEnter>
    </div>
  </AsideContainer>
</template>

<script setup>
const to = { path: '/buy_me_a_tea', hash: '#關於我' }
</script>
