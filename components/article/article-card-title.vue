<template>
  <component
    :is="tag"
    class="text-body text-line-2"
    :class="$style.title"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String, default: 'h4'
  }
})
</script>

<style
  lang="scss"
  module
>
@import "../../assets/css/article-card.module.scss";

.title {
  font-size: 1.1rem;
  font-weight: 900;
}

@media (min-width: map-get($grid-breakpoints, $mobile-breakpoint)) {
  .title {
    font-size: $card-title-font-size;
    max-height: $card-title-height;
  }
}
</style>