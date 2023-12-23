<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  props: {
    price: {
      type: [String, Number],
      default: 0,
      validator: (price) => !isNaN(Number(price)),
    },
    currency: {
      type: String,
      default: 'TWD',
    },
  },
  computed: {
    text() {
      const { currency, price } = this
      return Intl.NumberFormat('zh-tw', {
        style: 'currency',
        currency,
        currencyDisplay: 'code',
        maximumFractionDigits: 0,
      }).format(price)
    },
  },
}
</script>
