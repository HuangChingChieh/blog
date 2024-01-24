<template>
  <div>
    <CommonHeaderIcon
      icon="search"
      title="搜尋文章"
      :class="iconClass"
      @click="modalOpen = true"
    />

    <ModalSearch v-model="modalOpen" />
  </div>
</template>

<script setup>
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import ModalSearch from '~/components/modal/modal-search.vue'

const props = defineProps({
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const modalOpen = ref(false)
</script>
