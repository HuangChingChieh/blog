<template>
  <h4 :class="[$style.title, `line-clamp-${line}`]">
    <slot />
  </h4>
</template>

<script setup>
defineProps({
  line: {
    type: [String, Number],
    default: '2',
  },
})
</script>

<style lang="scss" module>
@import '../../assets/css/article-card.module.scss';

.title {
  font-size: 1.25rem;
  font-weight: 900;

  @media #{$break-mobile} {
    font-size: $card-title-font-size;
  }
}
</style>
