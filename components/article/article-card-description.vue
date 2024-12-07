<template>
  <p
    class="text-muted"
    :class="[$style.description, style]"
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
  textLine: {
    type: [String, Number],
    default: 2,
  },
})

const style = computed(() => `text-line-${props.textLine}`)
</script>

<style lang="scss" module>
@import '../../assets/css/article-card.module.scss';

$description-line: v-bind(textLine);

.description {
  font-size: $font-size-base;
  max-height: calc(
    $card-text-height * ($description-line / $card-content-line)
  );
}
</style>
