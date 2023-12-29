<template>
  <b-button
    variant="link"
    class="d-flex align-items-center text-decoration-none ml-4 common-header-icon"
    @click.prevent="$emit('click')"
  >
    <component :is="`b-icon-${icon}`" class="h5 mb-0"></component>
    <slot></slot>
  </b-button>
</template>

<script>
import {
  BIconSearch,
  BIconFolder,
  BIconCardList,
  BIconSun,
  BIconMoonStars,
  BButton,
} from 'bootstrap-vue'
export default {
  components: {
    BIconSearch,
    BIconFolder,
    BIconCardList,
    BIconSun,
    BIconMoonStars,
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
