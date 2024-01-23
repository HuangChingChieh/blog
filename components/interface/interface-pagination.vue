<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: thePage === 1 }">
        <nuxt-link class="page-link" :class="$style.link" :to="linkGen(1)">
          <InterfaceIcon icon="chevron-double-left" />
        </nuxt-link>
      </li>
      <li class="page-item" :class="{ disabled: thePage === 1 }">
        <nuxt-link
          class="page-link"
          :class="$style.link"
          :to="linkGen(thePage > 1 ? thePage - 1 : 1)"
        >
          <InterfaceIcon icon="chevron-left" />
        </nuxt-link>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: page === thePage }"
      >
        <nuxt-link class="page-link" :class="$style.link" :to="linkGen(page)">
          {{ page }}
        </nuxt-link>
      </li>
      <li class="page-item" :class="{ disabled: thePage === numberOfPages }">
        <nuxt-link
          class="page-link"
          :class="$style.link"
          :to="linkGen(thePage < numberOfPages ? thePage + 1 : numberOfPages)"
        >
          <InterfaceIcon icon="chevron-right" />
        </nuxt-link>
      </li>
      <li class="page-item" :class="{ disabled: thePage === numberOfPages }">
        <nuxt-link
          class="page-link"
          :class="$style.link"
          :to="linkGen(numberOfPages)"
        >
          <InterfaceIcon icon="chevron-double-right" />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import InterfaceIcon from '~/components/interface/interface-icon.vue'

export default {
  components: {
    InterfaceIcon,
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
  data() {
    return {
      pageInterval: 3,
    }
  },
  computed: {
    thePage() {
      return Number(this.$route.params.page) || 1
    },
    pages() {
      const pages = []

      const { thePage, numberOfPages, pageInterval } = this

      if (numberOfPages >= pageInterval) {
        let middlePage = thePage
        const minMiddlePage = Math.ceil(pageInterval / 2)
        const maxMiddlePage = numberOfPages - minMiddlePage + 1
        if (middlePage < minMiddlePage) middlePage = minMiddlePage
        else if (middlePage > maxMiddlePage) middlePage = maxMiddlePage

        while (pages.length < pageInterval) {
          pages.push(middlePage - minMiddlePage + 1 + pages.length)
        }
      } else {
        while (pages.length < numberOfPages) {
          pages.unshift(numberOfPages - pages.length)
        }
      }

      return pages
    },
  },
}
</script>

<style lang="scss" module>
.link {
  padding: 0;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $box-shadow-sm;
}
</style>
