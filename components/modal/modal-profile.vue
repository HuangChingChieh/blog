<template>
  <b-modal v-model="valueInner" centered hide-footer scrollable title="關於我">
    <p>
      一個非本科系的前端小碼農，紀錄一些身為前端小碼農的技術筆記、使用Linux（主要是Fedora）的心得，以及生活上雜七雜八的事情。
      <nuxt-link to="/buy_me_a_tea" class="text-body">
        <span @click="valueInner = false"
          >若這些文章對你有幫助的話，也歡迎不吝贊助我喝一杯飲料🧋。</span
        >
      </nuxt-link>
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
