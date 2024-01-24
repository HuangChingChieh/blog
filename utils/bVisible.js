let intersectionObserver = null

export default {
  mounted(el, { value }) {
    if (typeof value === 'function') {
      intersectionObserver = new IntersectionObserver((entries) => {
        value(entries[0].intersectionRatio > 0)
      })

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
