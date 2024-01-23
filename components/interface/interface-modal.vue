<template>
  <div
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    :class="modalClass"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
      :class="size ? `modal-${size}` : ``"
    >
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title h5">{{ title }}</div>
          <button
            type="button"
            class="btn-close"
            aria-label="關閉"
            @click="valueInner = false"
          ></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    modalClass: {
      type: [String, Array],
      default: '',
    },
  },
  data() {
    return { modal: null, Modal: null }
  },
  computed: {
    valueInner: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  watch: {
    value(value) {
      const { modal, Modal } = this
      if (modal && modal instanceof Modal) {
        value ? modal.show() : modal.hide()
      }
    },
  },
  beforeDestroy() {
    const { modal, Modal } = this
    if (modal && modal instanceof Modal) {
      modal.dispose()
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { modal } = this.$refs

      const Modal = require(`bootstrap/js/dist/modal`)

      this.Modal = Modal
      this.modal = new Modal(modal)

      modal.addEventListener('hide.bs.modal', (event) => {
        this.valueInner = false
        this.$emit('hide')
      })

      modal.addEventListener('hidden.bs.modal', (event) => {
        this.$emit('hidden')
      })

      modal.addEventListener('show.bs.modal', (event) => {
        this.valueInner = true
        this.$emit('show')
      })

      modal.addEventListener('shown.bs.modal', (event) => {
        this.$emit('shown')
      })
    })
  },
}
</script>
