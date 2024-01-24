<template>
  <div>
    <CommonHeaderIcon
      icon="folder"
      title="文章分類"
      :class="iconClass"
      @click="modalOpen = true"
    >
      <span
        v-if="showText && text"
        class="ps-1"
      >{{ text }}</span>
    </CommonHeaderIcon>

    <ModalCategories v-model="modalOpen" />
  </div>
</template>

<script setup>
import CommonHeaderIcon from '~/components/common/common-header-icon.vue'
import ModalCategories from '~/components/modal/modal-categories.vue'

import { computed } from 'vue'

const props = defineProps({
  showText: {
    type: Boolean,
    default: false,
  },
  iconClass: {
    type: [String, Array],
    default: '',
  },
})

const modalOpen = ref(false)

const { categoriesMap } = useRuntimeConfig().public
const route = useRoute()

const text = computed(() => categoriesMap[route.params.category])
</script>
