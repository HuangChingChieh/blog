<template>
  <span>{{ text }}</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  price: {
    type: [String, Number],
    default: 0,
    validator: (price) => !isNaN(Number(price)),
  },
  currency: {
    type: String,
    default: 'TWD',
  },
})

const text = computed(() => {
  const { currency, price } = props
  return Intl.NumberFormat('zh-tw', {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  }).format(Number(price))
})
</script>
