<template>
  <time
    v-if="createTime || updateTime"
    class="flex items-center flex-row text-muted text-sm"
  >
    <template v-if="createTime !== updateTime">
      <InterfaceIcon v-if="!hideIcon" class="me-1" icon="pencil-square" />

      <span>{{ updateTime }}</span>
    </template>

    <template v-else>
      <InterfaceIcon v-if="!hideIcon" class="me-1" icon="calendar-event" />
      <span>{{ createTime }}</span>
    </template>
  </time>
</template>

<script setup>
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
