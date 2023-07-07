<template>
  <common-img
    max-width="700"
    img-class="w-100 img-fluid rounded-lg"
    :img="img"
  />
</template>

<script>
import commonImg from '~/components/common/common-img.vue'
export default {
  components: { commonImg },
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
