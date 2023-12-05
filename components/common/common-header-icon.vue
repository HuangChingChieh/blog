<template>
  <b-button
    variant="link"
    class="d-inline-flex align-items-center text-decoration-none px-0 ml-4"
    @click.prevent="$emit('click')"
  >
    <component :is="`b-icon-${icon}`" class="h5 mb-0"></component>
    <slot></slot>
  </b-button>
</template>

<script>
import { BIconSearch, BIconFolder, BIconCardList, BButton } from 'bootstrap-vue'
export default {
  components: {
    BIconSearch,
    BIconFolder,
    BIconCardList,
    BButton,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
