<template>
  <common-header-icon
    icon="search"
    title="搜尋文章"
    :class="iconClass"
    @click="toggleModal({ key: 'search', isOpen: true })"
  />
</template>

<script>
import { mapMutations } from 'vuex'

import CommonHeaderIcon from '~/components/common/common-header-icon.vue'

export default {
  components: { CommonHeaderIcon },
  props: {
    iconClass: {
      type: [String, Array],
      default: '',
    },
  },
  methods: {
    ...mapMutations('modal', ['toggleModal']),
  },
}
</script>
