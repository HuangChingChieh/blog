<template>
  <component
    :is="container ? CommonWrapper : NuxtLink"
    v-if="article"
    :tag="container ? NuxtLink : null"
    :to="getArticleLink(article)"
    :class="containerStyles"
    class="no-decoration rounded transition-article-card ease-in-out"
  >
    <slot />
  </component>
</template>

<script setup>
const CommonWrapper = resolveComponent('CommonWrapper')
const NuxtLink = resolveComponent('NuxtLink')

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

const containerStyles = computed(() =>
  props.container
    ? [
        'bg-foreground',
        'shadow-sm hover:shadow active:shadow ',
        'hover:scale-article-card active:scale-article-card',
      ]
    : '',
)
</script>
