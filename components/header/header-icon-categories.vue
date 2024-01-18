<template>
  <div>
    <common-header-icon
      icon="folder"
      title="文章分類"
      :class="iconClass"
      @click="open = true"
    >
      <span v-if="showText && text" class="pl-1">{{ text }}</span>
    </common-header-icon>

    <modal-categories v-model="open" />
  </div>
</template>

<script>
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import ModalCategories from '~/components/modal/modal-categories.vue'

export default {
  components: {
    CommonHeaderIcon,
    ModalCategories,
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
  data() {
    return { open: false }
  },
  computed: {
    text() {
      return this.$config.categoriesMap[this.$route.params.category]
    },
  },
}
</script>
