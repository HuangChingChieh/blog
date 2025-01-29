<template>
  <InterfaceModal v-model="model" title="摘要">
    <PTree v-model:expanded-keys="expandedKeys" :value="treeNodes" class="!p-0">
      <template #default="{ node }">
        <span :class="itemStyle(node)" @click="scrollTo(node)">{{
          node.label
        }}</span>
      </template>
    </PTree>
  </InterfaceModal>
</template>

<script setup>
import { useTocStore } from '~/store/toc'

const props = defineProps({
  toc: {
    type: Array,
    default: () => [],
  },
})

const model = defineModel({
  type: Boolean,
  default: false,
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
    'text-primary-600': active,
    'hover:font-black': !active,
    'cursor-pointer': !active,
  }
}

const scrollTo = (node) => {
  model.value = false
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
