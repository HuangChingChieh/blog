<template>
  <b-modal v-model="valueInner" centered hide-footer hide-header>
    <div class="text-center my-3">
      <img
        v-once
        :src="`${$router.options.base}icon.png`"
        height="60"
        class="rounded-circle"
      />
    </div>

    <p>
      一個非本科系的前端小碼農，紀錄一些身為前端小碼農的技術筆記，以及使用Linux（主要是Fedora）的心得。雜七雜八的心情分享會放在<a
        href="https://matters.news/@chaoshuang"
        target="_blank"
        class="text-body text-decoration-underline"
        >Matters</a
      >上，歡迎前往聊天。
    </p>

    <p>若這些文章對你有幫助的話，也歡迎不吝贊助我喝一杯飲料🧋。</p>

    <b-container class="p-0 text-center">
      <b-form-row>
        <b-col cols="6">
          <small class="text-muted">Paypal</small>
          <a href="https://paypal.me/tarotchaos" target="_blank">
            <img
              v-once
              :src="`${$router.options.base}images/donation/paypal.png`"
              alt="paypal"
              class="w-100"
            />
          </a>
        </b-col>
        <b-col cols="6">
          <small class="text-muted">加密貨幣</small>
          <img
            v-once
            :src="`${$router.options.base}images/donation/evm_compatible.png`"
            alt="evm-compatible"
            class="w-100"
          />
          <small class="text-muted"
            >接受<a
              href="https://www.maicoin.com/docs/fees-limits"
              target="_blank"
              class="text-muted"
              >MaiCoin</a
            >中主網類型為ERC20/BSC/Polygon的幣種</small
          >
        </b-col>
      </b-form-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueInner: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
