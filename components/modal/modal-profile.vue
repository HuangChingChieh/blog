<template>
  <b-modal v-model="valueInner" centered hide-footer scrollable title="關於我">
    <div class="text-center mb-3">
      <img
        v-once
        :src="`${$router.options.base}icon.png`"
        height="60"
        class="rounded-circle"
      />
    </div>

    <p>
      一個非本科系的前端小碼農，紀錄一些身為前端小碼農的技術筆記，以及使用Linux（主要是Fedora）的心得。
      <nuxt-link to="/buy_me_a_tea" class="text-body"
        >若這些文章對你有幫助的話，也歡迎不吝贊助我喝一杯飲料🧋。</nuxt-link
      >
    </p>

    <p>
      雜七雜八的心情分享會放在<a
        href="https://matters.news/@chaoshuang"
        target="_blank"
        class="text-body text-decoration-underline"
        >Matters</a
      >上，歡迎前往聊天。
    </p>
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
