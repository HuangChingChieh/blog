<template>
  <div>
    <h3>台灣朋友：銀行帳號</h3>
    <p>
      研究了一下台灣國內的收款後，真的發現好麻煩啊，又要被抽一堆手續費，覺得果然還是直接帳戶匯款最快了。最近很熱門的網銀或數位帳戶也都幾乎有送免費轉帳呢，也不用被抽手續費，還可以留言備註。
    </p>
    <p>
      <a
        href="#"
        @click.prevent="
          openModal({ title: 'LINE Bank銀行帳號', image: 'line-bank' })
        "
        >點這裡顯示銀行帳號QRCode</a
      >，或是直接複製：銀行代碼824／帳號111006688613。
    </p>

    <h3>非台灣朋友：Paypal</h3>
    <p>
      非台灣朋友可以使用Paypal請我喝咖啡喔！<a
        href="https://paypal.me/tarotchaos"
        target="_blank"
        >點這裡去Paypal贊助頁面</a
      >。
    </p>

    <h3>無國界轉帳：加密貨幣</h3>
    <p>
      加密貨幣是無國界的資產轉移方式，若你是有在使用加密貨幣的朋友，也歡迎拿幣砸我（？）喔。目前接受<a
        href="https://www.maicoin.com/docs/fees-limits"
        target="_blank"
        class="text-muted"
        >MaiCoin網站「轉帳」頁籤</a
      >中主網類型為ERC20/BSC/Polygon的幣種。
    </p>
    <p>
      <a
        href="#"
        @click.prevent="
          openModal({
            title: '加密貨幣',
            image: 'evm_compatible',
          })
        "
        >點這裡顯示加密貨幣地址QRCode</a
      >，或是直接複製： 0x9440eb4BDe15e64985f3fC5875914A6Fd20863b5 。
    </p>

    <b-modal
      v-model="modal.open"
      :title="modal.title"
      hide-footer
      centered
      size="sm"
    >
      <img
        :src="`${$config.imageServer}/images/donation/${modal.image}.png`"
        alt="image"
        class="w-100"
      />

      <div v-if="modal.image === 'evm_compatible'">
        目前接受<a
          href="https://www.maicoin.com/docs/fees-limits"
          target="_blank"
          class="text-muted"
          >MaiCoin網站「轉帳」頁籤</a
        >中主網類型為ERC20/BSC/Polygon的幣種。
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
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
