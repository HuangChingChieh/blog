<template>
  <AsideContainer title="文章標籤">
    <div class="flex flex-wrap gap-2 justify-center mb-normal">
      <InterfaceButtonLink
        v-for="tag in tags"
        :key="tag.name"
        :to="tag.to"
        variant="outlined"
        severity="primary"
        size="small"
        rounded
      >
        {{ tag.name }}
      </InterfaceButtonLink>
    </div>

    <div class="text-center">
      <ButtonEnter to="/tags/">所有標籤</ButtonEnter>
    </div>
  </AsideContainer>
</template>

<script setup>
const { tagsObj } = await useArticlesMetadata()
let tags = []

Object.keys(tagsObj).forEach((name) => {
  const count = tagsObj[name]
  if (count > 1) {
    tags.push({
      name,
      count,
      to: getTagLink({ tag: name }),
    })
  }
})

tags.sort((a, b) => {
  let sort = b.count - a.count
  if (sort === 0) {
    sort = a.name > b.name ? 1 : -1
  }
  return sort
})

tags = tags.slice(0, 15)
</script>
