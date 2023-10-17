<template>
  <time
    v-if="createTime || updateTime"
    class="article-date d-flex align-items-center flex-row text-muted"
  >
    <template v-if="createTime">
      <b-icon-calendar-event v-if="!hideIcon" class="mr-1" />
      <span class="mr-3">{{ createTime }}</span>
    </template>

    <template v-if="createTime !== updateTime">
      <b-icon-pencil-square v-if="!hideIcon" class="mr-1" />
      <span class="mr-3">{{ updateTime }}</span>
    </template>
  </time>
</template>
<script>
import { BIconCalendarEvent, BIconPencilSquare } from 'bootstrap-vue'
export default {
  components: {
    BIconCalendarEvent,
    BIconPencilSquare,
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
