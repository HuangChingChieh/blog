<template>
  <CommonOuterLink
    :href="href"
    class="text-white"
  >
    <slot />
  </CommonOuterLink>
</template>

<script setup>
import CommonOuterLink from "~/components/common/common-outer-link.vue";
const props = defineProps({
  href: {
    type: String,
    default: "",
  },
});
</script>
