let intersectionObserver = null

export default {
  mounted(el, { value, arg }) {
    if (typeof value === 'function') {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          value(entries[0].intersectionRatio > 0)
        },
        { rootMargin: arg || '0px' }
      )

      intersectionObserver.observe(el)
    }
  },
  beforeUnmount() {
    if (
      intersectionObserver &&
      intersectionObserver instanceof IntersectionObserver
    ) {
      intersectionObserver.disconnect()
    }
  },
}
