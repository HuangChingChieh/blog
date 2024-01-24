<template>
  <InterfaceCol
    :[mobileBreakpoint]="gridColumns / 3"
    class="mt-5"
  >
    <FooterTitle>
      <NuxtLink
        :to="titleTo"
        class="text-primary"
      >
        {{ title }}
      </NuxtLink>

      <slot name="title" />
    </FooterTitle>

    <FooterContent>
      <slot />
    </FooterContent>
  </InterfaceCol>
</template>

<script setup>
import { mobileBreakpoint, gridColumns } from '~/assets/css/export.module.scss'
import FooterTitle from '~/components/footer/footer-title.vue'
import FooterContent from '~/components/footer/footer-content.vue'

import InterfaceCol from '../interface/interface-col.vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  titleTo: {
    type: [String, Object],
    default: '',
  },
})
</script>
