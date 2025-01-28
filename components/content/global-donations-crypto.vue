<template>
  <div>
    <p>
      <a href="#" @click.prevent="modalOpen = true"
        >點這裡顯示加密貨幣地址QRCode</a
      >，或是直接複製：0x9440eb4BDe15e64985f3fC5875914A6Fd20863b5 。
    </p>

    <InterfaceModal v-model="modalOpen" title="加密貨幣" size="sm">
      <InterfaceImg img="923/5F8nt1.png" class="rounded" />

      <div class="mt-normal">
        目前接受<CommonOuterLink
          href="https://www.maicoin.com/docs/fees-limits/transfers"
          class="mx-1"
          >MaiCoin網站</CommonOuterLink
        >中主網類型為ERC20 / BSC / Polygon的幣種。
      </div>
    </InterfaceModal>
  </div>
</template>

<script setup>
const modalOpen = ref(false)
</script>
