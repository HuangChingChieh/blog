<template>
  <CommonOuterLink
    :href="href"
    :rel="rel"
    :target="target"
  >
    <slot />
  </CommonOuterLink>
</template>

<script lang="ts" setup>
import CommonOuterLink from '~/components/common/common-outer-link.vue';

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  rel: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_blank'
  }
})
</script>