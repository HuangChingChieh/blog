<template>
  <component :is="tag" :class="[$style.title, `text-line-${line}`]">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h4',
  },
  line: {
    type: [String, Number],
    default: '2',
  },
})
</script>

<style lang="scss" module>
@import '../../assets/css/article-card.module.scss';

.title {
  font-size: 1.1rem;
  font-weight: 900;
}

@media #{$break-mobile} {
  .title {
    font-size: $card-title-font-size;
    max-height: $card-title-height;
  }
}
</style>
