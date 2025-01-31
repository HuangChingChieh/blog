<template>
  <TextClickable
    tag="a"
    :href="href"
    :target="target"
    :rel="relComputed"
    class="underline"
  >
    <slot />
  </TextClickable>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  rel: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_blank',
  },
})

const relDefaults = { noopener: true, noreferrer: true }

const relComputed = computed(() => {
  const relDefaultsCopied = JSON.parse(JSON.stringify(relDefaults))
  props.rel.split(' ').forEach((rel) => {
    relDefaultsCopied[rel] = true
  })
  return Object.keys(relDefaultsCopied).join(' ')
})
</script>
