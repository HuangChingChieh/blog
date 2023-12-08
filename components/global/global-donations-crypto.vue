<template>
  <div>
    <p>
      <a href="#" @click.prevent="modal.open = true"
        >點這裡顯示加密貨幣地址QRCode</a
      >，或是直接複製：0x9440eb4BDe15e64985f3fC5875914A6Fd20863b5 。
    </p>

    <b-modal
      v-model="modal.open"
      title="加密貨幣"
      hide-footer
      centered
      size="sm"
    >
      <common-img img="923/5F8nt1.png" img-class="w-100" />

      <div>
        目前接受<a
          href="https://www.maicoin.com/docs/fees-limits/transfers"
          target="_blank"
          >MaiCoin網站</a
        >中主網類型為ERC20 / BSC / Polygon的幣種。
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BModal } from 'bootstrap-vue'
import CommonImg from '../common/common-img.vue'
export default {
  components: { BModal, CommonImg },
  data() {
    return {
      modal: {
        open: false,
      },
    }
  },
}
</script>
