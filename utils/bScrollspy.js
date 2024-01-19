let Scrollspy = null
let scrollSpy = null

export default {
  inserted(target) {
    if (process.client) {
      if (!Scrollspy) Scrollspy = require('bootstrap/js/dist/scrollspy')
      scrollSpy = new Scrollspy(document.body, { target })
    }
  },
  unbind() {
    scrollSpy.dispose()
  },
  componentUpdated() {
    scrollSpy.refresh()
  },
}
