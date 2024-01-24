<template>
  <CommonOuterLink href="https://ko-fi.com/chaoschaoshuang">
    <img
      :src="`${$config.public.base}images/donation/kofi_button_blue.png`"
      alt="Support me on Ko-fi"
      class="img-fluid d-block"
      width="200"
    >
  </CommonOuterLink>
</template>

<script setup>
import CommonOuterLink from '~/components/common/common-outer-link.vue';
</script>
