<template>
  <common-header-icon
    v-if="hasToc"
    icon="card-list"
    title="文章摘要"
    :class="iconClass"
    @click="toggleModal({ key: 'toc', isOpen: true })"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import CommonHeaderIcon from '~/components/common/common-header-icon.vue'

export default {
  components: { CommonHeaderIcon },
  props: {
    iconClass: {
      type: [String, Array],
      default: '',
    },
  },
  computed: {
    ...mapState(['toc']),
    hasToc() {
      const { toc } = this
      return Array.isArray(toc) && toc.length > 0
    },
  },
  methods: {
    ...mapMutations('modal', ['toggleModal']),
  },
}
</script>
