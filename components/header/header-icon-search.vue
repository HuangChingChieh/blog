<template>
  <div>
    <common-header-icon
      icon="search"
      title="搜尋文章"
      :class="iconClass"
      @click="open = true"
    />
    <modal-search v-model="open" />
  </div>
</template>

<script>
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import ModalSearch from '~/components/modal/modal-search.vue'

export default {
  components: { CommonHeaderIcon, ModalSearch },
  props: {
    iconClass: {
      type: [String, Array],
      default: '',
    },
  },
  data() {
    return { open: false }
  },
}
</script>
