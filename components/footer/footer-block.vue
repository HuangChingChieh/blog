<template>
  <InterfaceCol
    :[mobileBreakpoint]="mobileColumns"
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

<script lang="ts" setup>
import { mobileBreakpoint, gridColumns } from '~/utils/export-scss'
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

const mobileColumns = Number(gridColumns) / 3
</script>
