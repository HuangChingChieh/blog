<template>
  <div>
    <PPaginator
      :first="first"
      :rows="rows"
      :total-records="totalRecords"
      :page-link-size="pageLinkSize"
    >
      <template #container>
        <CommonWrapper
          class="flex flex-row items-center gap-[1px] shadow-sm rounded"
        >
          <InterfacePaginatorItem
            :to="linkGenFn(1)"
            class="rounded-l"
            :disabled="page === 1"
          >
            <InterfaceIcon icon="chevron-double-left" />
          </InterfacePaginatorItem>
          <InterfacePaginatorItem
            :to="linkGenFn(page - 1)"
            :disabled="page === 1"
          >
            <InterfaceIcon icon="chevron-left" />
          </InterfacePaginatorItem>
          <InterfacePaginatorItem
            v-for="item in pages"
            :key="item.page"
            :to="item.to"
            :active="page === item.page"
          >
            {{ item.page }}
          </InterfacePaginatorItem>
          <InterfacePaginatorItem
            :to="linkGenFn(page + 1)"
            :disabled="page === maxPage"
          >
            <InterfaceIcon icon="chevron-right" />
          </InterfacePaginatorItem>
          <InterfacePaginatorItem
            :to="linkGenFn(maxPage)"
            :disabled="page === maxPage"
            class="rounded-r"
          >
            <InterfaceIcon icon="chevron-double-right" />
          </InterfacePaginatorItem>
        </CommonWrapper>
      </template>
    </PPaginator>
    <div class="mt-2 text-center text-sm">共 {{ maxPage }} 頁</div>
  </div>
</template>

<script setup>
const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  pageLinkSize: {
    type: Number,
    default: 3,
    validator: (pageLinkSize) => pageLinkSize % 2 === 1,
  },
  totalRecords: {
    type: Number,
    default: 0,
  },
  rows: {
    type: Number,
    default: 10,
  },
  linkGenFn: {
    type: Function,
    default: () => {},
  },
})

const first = computed(() => (props.page - 1) * props.rows)

const maxPage = computed(() => Math.ceil(props.totalRecords / props.rows))

const pages = computed(() => {
  const pages = []

  const maxPageValue = unref(maxPage)
  const { page, pageLinkSize, linkGenFn } = props

  let start = 1
  let end = Math.min(pageLinkSize, maxPageValue)
  const diffFromPage = (pageLinkSize - 1) / 2
  if (maxPageValue > pageLinkSize && page > diffFromPage) {
    start = page - diffFromPage
    end = page + diffFromPage
    if (end > maxPageValue) {
      start = maxPageValue - pageLinkSize + 1
      end = maxPageValue
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push({
      page: i,
      to: linkGenFn(i),
    })
  }

  return pages
})
</script>
