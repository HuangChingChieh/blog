<template>
  <InterfaceCol cols="12">
    <InterfaceRow>
      <InterfaceCol
        cols="12"
        lg="7"
        xl="8"
        :class="reverseOrderWhenMobile ? `order-2 order-lg-1 mt-5 mt-lg-0` : `order-1`
          "
      >
        <slot />
      </InterfaceCol>

      <InterfaceCol
        cols="12"
        lg="5"
        xl="4"
        :class="reverseOrderWhenMobile ? `order-1 order-lg-2` : `order-2 mt-5 mt-lg-0`
          "
      >
        <InterfaceRow class="position-relative">
          <InterfaceCol
            cols="12"
            class="mb-4"
          >
            <ArticlesListPickContainer title="關於隨機手札與我">
              <AsideAboutMe />
            </ArticlesListPickContainer>
          </InterfaceCol>

          <InterfaceCol
            cols="12"
            class="mb-4"
          >
            <AsideCategories />
          </InterfaceCol>

          <InterfaceCol
            cols="12"
            class="mb-4"
          >
            <AsideTags />
          </InterfaceCol>

          <InterfaceCol cols="12">
            <AsideSelect :category="props.category" />
          </InterfaceCol>
        </InterfaceRow>
      </InterfaceCol>
    </InterfaceRow>
  </InterfaceCol>
</template>

<script setup>
const props = defineProps({
  reverseOrderWhenMobile: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    default: 'all'
  }
})
</script>
