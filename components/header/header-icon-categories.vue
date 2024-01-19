<template>
  <common-header-icon
    icon="folder"
    title="文章分類"
    :class="iconClass"
    @click="toggleModal({ key: 'categories', isOpen: true })"
  >
    <span v-if="showText && text" class="ps-1">{{ text }}</span>
  </common-header-icon>
</template>

<script>
import { mapMutations } from 'vuex'

import CommonHeaderIcon from '~/components/common/common-header-icon.vue'

export default {
  components: {
    CommonHeaderIcon,
  },
  props: {
    showText: {
      type: Boolean,
      default: false,
    },
    iconClass: {
      type: [String, Array],
      default: '',
    },
  },
  computed: {
    text() {
      return this.$config.categoriesMap[this.$route.params.category]
    },
  },
  methods: {
    ...mapMutations('modal', ['toggleModal']),
  },
}
</script>
