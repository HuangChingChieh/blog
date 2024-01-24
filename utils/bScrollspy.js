let Scrollspy = null
let scrollSpy = null

export default {
  async mounted(target) {
    if (!Scrollspy)
      Scrollspy = (await import('bootstrap/js/dist/scrollspy')).default

    scrollSpy = new Scrollspy(document.body, { target })
  },
  beforeUnmount() {
    scrollSpy.dispose()
  },
  updated() {
    scrollSpy.refresh()
  },
}
