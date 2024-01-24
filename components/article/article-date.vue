<template>
  <time
    v-if="createTime || updateTime"
    class="d-flex align-items-center flex-row text-muted small mb-0"
  >
    <template v-if="createTime !== updateTime">
      <InterfaceIcon
        v-if="!hideIcon"
        class="me-1"
        icon="pencil-square"
      />

      <span class="me-3">{{ updateTime }}</span>
    </template>

    <template v-else>
      <InterfaceIcon
        v-if="!hideIcon"
        class="me-1"
        icon="calendar-event"
      />
      <span class="me-3">{{ createTime }}</span>
    </template>
  </time>
</template>

<script setup>
import { computed } from 'vue'
import InterfaceIcon from '../interface/interface-icon.vue'

const props = defineProps({
  document: {
    type: Object,
    default: () => ({}),
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
})

const locale = 'zh-TW'
const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}

const formatter = Intl.DateTimeFormat(locale, options)

const createTime = computed(() => {
  const { createdAt } = props.document
  return createdAt ? formatter.format(new Date(createdAt)) : ''
})

const updateTime = computed(() => {
  const { updatedAt } = props.document
  return updatedAt ? formatter.format(new Date(updatedAt)) : ''
})
</script>
