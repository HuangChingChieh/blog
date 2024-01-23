<template>
  <ul class="nav" :class="vertical ? `flex-column` : ''">
    <li v-for="(item, i) in items" :key="i" class="nav-item" :class="itemClass">
      <nuxt-link
        :to="linkGenerateFunc(item)"
        class="nav-link"
        :class="linkClasses"
        :active-class="activeClass"
        @click.native="$emit('click-item', item)"
      >
        <slot name="item" :item="item"></slot>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    activeClass: {
      type: [String, Array],
      default: '',
    },
    linkClasses: {
      type: [String, Array],
      default: '',
    },
    itemClass: {
      type: [String, Array],
      default: '',
    },
    linkGenerateFunc: {
      type: Function,
      default: () => '',
    },
  },
}
</script>
