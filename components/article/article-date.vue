<template>
  <time
    v-if="createTime || updateTime"
    class="d-flex align-items-center flex-row text-muted small mb-0"
  >
    <template v-if="createTime !== updateTime">
      <InterfaceIcon v-if="!hideIcon" class="mr-1" icon="pencil-square" />

      <span class="mr-3">{{ updateTime }}</span>
    </template>

    <template v-else>
      <InterfaceIcon v-if="!hideIcon" class="mr-1" icon="calendar-event" />
      <span class="mr-3">{{ createTime }}</span>
    </template>
  </time>
</template>
<script>
import InterfaceIcon from '../interface/interface-icon.vue'

export default {
  components: {
    InterfaceIcon,
  },
  props: {
    document: {
      type: Object,
      default: () => ({}),
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      locale: 'zh-TW',
      options: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    }
  },
  computed: {
    createTime() {
      const { createdAt } = this.document
      return createdAt
        ? Intl.DateTimeFormat(this.locale, this.options).format(
            new Date(createdAt)
          )
        : ''
    },
    updateTime() {
      const { updatedAt } = this.document
      return updatedAt
        ? Intl.DateTimeFormat(this.locale, this.options).format(
            new Date(updatedAt)
          )
        : ''
    },
  },
}
</script>
