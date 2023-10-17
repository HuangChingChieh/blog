<template>
  <b-breadcrumb class="align-items-center px-0 bg-transparent">
    <b-breadcrumb-item to="/">
      <div class="d-flex align-items-center"><b-icon-house /></div>
    </b-breadcrumb-item>
    <b-breadcrumb-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      :active="item.active"
      >{{ item.text }}</b-breadcrumb-item
    >
  </b-breadcrumb>
</template>

<script>
import { BIconHouse } from 'bootstrap-vue'
export default {
  components: { BIconHouse },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
