<template>
  <NuxtLink
    v-if="article"
    :to="getArticleLink(article)"
    :class="styles"
    class="text-decoration-none rounded"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    default: null,
  },
  /**
   * 是否有容器樣式，如果false那就不會有前景色以及陰影。預設為true。
   */
  container: {
    type: Boolean,
    default: true,
  },
})

const $style = useCssModule()

const styles = computed(() => {
  const styles = [$style.card]
  if (props.container) {
    styles.push($style.container)
    styles.push('bg-foreground')
  }

  return styles
})
</script>

<style lang="scss" module>
.card {
  &.container {
    transition: $btn-transition, transform 0.15s ease-in-out;
    box-shadow: $box-shadow-sm;

    &:hover,
    &:active {
      box-shadow: $box-shadow;
      transform: scale(1.025);
    }
  }
}
</style>
