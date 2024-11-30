<template>
  <ClientOnly>
    <Teleport to="body">
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
              <div class="modal-title h5">
                {{ title }}
              </div>
              <button
                type="button"
                class="btn-close"
                aria-label="關閉"
                @click="model = false"
              />
            </div>
            <div class="modal-body">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { onBeforeUnmount, onMounted, watch } from 'vue'

const props = defineProps({
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
})

const model = defineModel({
  type: Boolean,
  default: false,
})

const modal = ref(null)

let modalInstance = null
let Modal = null

watch(model, (value) => {
  if (modalInstance && Modal && modalInstance instanceof Modal) {
    value ? modalInstance.show() : modalInstance.hide()
  }
})

onBeforeUnmount(() => {
  if (modalInstance && Modal && modalInstance instanceof Modal) {
    modalInstance.dispose()
  }
})

const emit = defineEmits(['hide', 'hidden', 'show', 'shown'])

onMounted(() => {
  nextTick(async () => {
    const modalModuule = await import(`bootstrap/js/dist/modal`)
    Modal = modalModuule.default

    modalInstance = new Modal(modal.value)

    modal.value.addEventListener('hide.bs.modal', () => {
      model.value = false
      emit('hide')
    })

    modal.value.addEventListener('hidden.bs.modal', () => {
      emit('hidden')
    })

    modal.value.addEventListener('show.bs.modal', () => {
      model.value = true
      emit('show')
    })

    modal.value.addEventListener('shown.bs.modal', () => {
      emit('shown')
    })
  })
})
</script>
