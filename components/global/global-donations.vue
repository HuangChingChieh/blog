<template>
  <div>
    <h3>加密貨幣</h3>
    <p>
      加密貨幣是無國界的資產轉移方式，若你是有在使用加密貨幣的朋友，歡迎拿幣砸我（？）喔。目前接受<a
        href="https://www.maicoin.com/docs/fees-limits/transfers"
        target="_blank"
        class="text-muted"
        >MaiCoin網站</a
      >中主網類型為ERC20/BSC/Polygon的幣種。
    </p>
    <p>
      <a
        href="#"
        @click.prevent="
          openModal({
            title: '加密貨幣',
            image: '923/5F8nt1.png',
          })
        "
        >點這裡顯示加密貨幣地址QRCode</a
      >，或是直接複製： 0x9440eb4BDe15e64985f3fC5875914A6Fd20863b5 。
    </p>

    <h3>Ko-fi</h3>
    <p>
      若想透過信用卡或簽帳卡贊助我喝飲料，可以透過Ko-fi平台哦！
      <a
        href="https://ko-fi.com/chaoschaoshuang"
        target="_blank"
        rel="noopener noreferrer"
        >點這裡去Ko-fi贊助頁面</a
      >。
    </p>

    <b-modal
      v-model="modal.open"
      :title="modal.title"
      hide-footer
      centered
      size="sm"
    >
      <common-img :img="modal.image" img-class="w-100" />

      <div v-if="modal.image === 'evm_compatible'">
        目前接受<a
          href="https://www.maicoin.com/docs/fees-limits/transfers"
          target="_blank"
          class="text-muted"
          >MaiCoin網站</a
        >中主網類型為ERC20/BSC/Polygon的幣種。
      </div>
    </b-modal>
  </div>
</template>

<script>
import CommonImg from '../common/common-img.vue'
export default {
  components: { CommonImg },
  data() {
    return {
      modal: {
        open: false,
        title: '',
        image: '',
      },
    }
  },
  methods: {
    openModal({ title, image }) {
      const { modal } = this
      modal.title = title
      modal.image = image
      modal.open = true
    },
  },
}
</script>
