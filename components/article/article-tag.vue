<template>
  <b-badge
    variant="secondary"
    class="d-inline-block font-weight-normal text-monospace"
  >
    #<slot>{{ tagName }}</slot>
    <!-- <nuxt-link
      :to="`/tags/${tagName}`"
      class="text-decoration-none text-white"
    >{{ tagName }}</nuxt-link> -->
  </b-badge>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: '',
    },
  },
}
</script>
