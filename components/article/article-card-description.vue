<template>
  <p
    class="text-muted text-line-2"
    :class="$style.description"
    :title="description"
  >
    {{ description }}
  </p>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" module>
@import '../../assets/css/article-card.module.scss';

.description {
  font-size: $font-size-base;
  max-height: $card-text-height;
}
</style>
