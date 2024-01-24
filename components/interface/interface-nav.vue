<template>
  <ul
    class="nav"
    :class="vertical ? `flex-column` : ''"
  >
    <li
      v-for="(item, i) in items"
      :key="i"
      class="nav-item"
      :class="itemClass"
    >
      <NuxtLink
        :to="linkGenerateFunc(item)"
        class="nav-link"
        :class="linkClasses"
        :active-class="activeClass"
        @click="$emit('click-item', item)"
      >
        <slot
          name="item"
          :item="item"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
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
})
</script>
