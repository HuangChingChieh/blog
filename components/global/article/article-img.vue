<template>
  <common-img max-width="1024" img-class="w-100 img-fluid" :img="img" />
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
