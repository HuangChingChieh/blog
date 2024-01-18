<template>
  <component :is="`b-icon-${icon}`" />
</template>

<script>
import {
  BIconFolder,
  BIconPencilSquare,
  BIconCalendarEvent,
  BIconClock,
  BIconArrowRight,
  BIconHouse,
  BIconChevronDoubleLeft,
  BIconChevronLeft,
  BIconThreeDots,
  BIconChevronRight,
  BIconChevronDoubleRight,
  BIconClipboard,
  BIconClipboardCheck,
  BIconLightbulb,
  BIconSearch,
  BIconCardList,
  BIconSun,
  BIconMoonStars,
} from 'bootstrap-vue'

export default {
  components: {
    BIconFolder,
    BIconPencilSquare,
    BIconCalendarEvent,
    BIconClock,
    BIconArrowRight,
    BIconHouse,
    BIconChevronDoubleLeft,
    BIconChevronLeft,
    BIconThreeDots,
    BIconChevronRight,
    BIconChevronDoubleRight,
    BIconClipboard,
    BIconClipboardCheck,
    BIconLightbulb,
    BIconSearch,
    BIconCardList,
    BIconSun,
    BIconMoonStars,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
