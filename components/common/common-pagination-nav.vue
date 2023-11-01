<template>
  <b-pagination-nav
    :link-gen="linkGen"
    :number-of-pages="numberOfPages"
    use-router
    pills
    align="center"
    :value="$route.params.page || 1"
  >
    <template #first-text>
      <b-icon-chevron-double-left />
    </template>

    <template #prev-text>
      <b-icon-chevron-left />
    </template>

    <template #ellipsis-text>
      <b-icon-three-dots />
    </template>

    <template #next-text>
      <b-icon-chevron-right />
    </template>

    <template #last-text>
      <b-icon-chevron-double-right />
    </template>
  </b-pagination-nav>
</template>

<script>
import {
  BPaginationNav,
  BIconChevronDoubleLeft,
  BIconChevronLeft,
  BIconThreeDots,
  BIconChevronRight,
  BIconChevronDoubleRight,
} from 'bootstrap-vue'
export default {
  components: {
    BPaginationNav,
    BIconChevronDoubleLeft,
    BIconChevronLeft,
    BIconThreeDots,
    BIconChevronRight,
    BIconChevronDoubleRight,
  },
  props: {
    linkGen: {
      type: Function,
      default: () => {},
    },
    numberOfPages: {
      type: [String, Number],
      default: 1,
    },
  },
}
</script>
