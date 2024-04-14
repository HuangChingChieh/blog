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
        :active-class="activeClassInner"
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

<script lang="ts" generic="T" setup>
import type { PropType } from 'vue'
import type { NuxtLink } from '#build/components';

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array as PropType<T[]>,
    default: () => [],
  },
  activeClass: {
    type: [String, Array] as PropType<string | string[]>,
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

const activeClassInner = computed(() => {
  const { activeClass } = props
  return Array.isArray(activeClass) ? activeClass.join(" ") : activeClass
})

const slots = defineSlots<{
  item(props: { item: T }): any
}>()
</script>
