<template>
  <div>
    <common-header-icon
      v-if="hasToc"
      icon="card-list"
      title="文章摘要"
      @click="open = true"
    />

    <modal-toc v-model="open" :toc="toc" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import ModalToc from '~/components/modal/modal-toc.vue'

export default {
  components: { CommonHeaderIcon, ModalToc },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapState(['toc']),
    hasToc() {
      const { toc } = this
      return Array.isArray(toc) && toc.length > 0
    },
  },
}
</script>
