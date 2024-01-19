let intersectionObserver = null

export default {
  inserted(el, { value }) {
    if (typeof value === 'function') {
      intersectionObserver = new IntersectionObserver((entries) => {
        value(entries[0].intersectionRatio > 0)
      })

      intersectionObserver.observe(el)
    }
  },
  unbind() {
    if (
      intersectionObserver &&
      intersectionObserver instanceof IntersectionObserver
    ) {
      intersectionObserver.disconnect()
    }
  },
}
