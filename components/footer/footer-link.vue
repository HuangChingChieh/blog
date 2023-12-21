<template>
  <common-outer-link :href="href" class="text-white">
    <slot></slot>
  </common-outer-link>
</template>

<script>
import CommonOuterLink from '~/components/common/common-outer-link.vue'
export default {
  components: {
    CommonOuterLink,
  },
  props: {
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
