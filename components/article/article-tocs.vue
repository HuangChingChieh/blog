<template>
  <PTree v-model:expanded-keys="expandedKeys" :value="treeNodes">
    <template #default="{ node }">
      <TextClickable
        class="[word-break:break-word]"
        :class="itemStyle(node)"
        @click="scrollTo(node)"
        >{{ node.label }}</TextClickable
      >
    </template>
  </PTree>
</template>

<script setup>
import { useTocStore } from '~/store/toc'

const props = defineProps({
  toc: {
    type: Array,
    default: () => [],
  },
})

const mapTocItemToTreeNode = (tocItem) => {
  const treeNode = {
    label: tocItem.text,
    key: tocItem.id,
  }

  const { children } = tocItem
  if (Array.isArray(children)) {
    treeNode.children = children.map(mapTocItemToTreeNode)
  }

  return treeNode
}

const mapTocItemToExpandedKeys = (tocItem) => {
  expandedKeys.value[tocItem.id] = true

  const { children } = tocItem
  if (Array.isArray(children)) {
    children.forEach(mapTocItemToExpandedKeys)
  }
}

// 為了合乎PTree的結構
const tocStore = useTocStore()
const expandedKeys = ref({})
const treeNodes = ref([])
if (props.toc.length > 0) {
  const { toc } = props
  treeNodes.value = toc.map(mapTocItemToTreeNode)
  toc.forEach(mapTocItemToExpandedKeys)
}

const isTocItemActive = (node) => {
  const { selectionKeys } = tocStore
  let active = node.key === selectionKeys
  const { children } = node
  if (Array.isArray(children) && !active) {
    active = children.some(isTocItemActive)
  }

  return active
}

const itemStyle = (node) => {
  const active = isTocItemActive(node)
  return {
    italic: active,
    'text-primary': active,
  }
}

const emit = defineEmits(['clickNode'])

const scrollTo = (node) => {
  emit('clickNode')
  nextTick(() => {
    const { key } = node
    const title = document.querySelector(`#${key}`)
    if (!title || !(title instanceof HTMLElement)) return

    title.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  })
}
</script>
