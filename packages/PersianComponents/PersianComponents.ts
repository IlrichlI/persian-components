import { ref, type Plugin } from 'vue'

export const PersianComponents: Plugin = {
  install: (app) => {
    // modal provider
    const modals = ref<
      Record<string, { open: boolean; payload: object; resolver?: (_value: any) => any }>
    >({})

    const openModal = (modalId: string, payload?: object) => {
      let resolver = (_value: any) => _value
      const promise = new Promise((resolve) => {
        resolver = resolve
      })
      modals.value[modalId] = { open: true, payload: payload || {}, resolver }
      return promise
    }

    const closeModal = <TData>(modalId: string, data?: TData) => {
      const resolver = modals.value[modalId]?.resolver
      if (resolver) {
        resolver(data)
      }
      modals.value[modalId] = { open: false, payload: {} }
    }

    const registerModal = (modalId: string) => {
      modals.value[modalId] = { open: false, payload: {} }
    }

    app.provide('persian-components-modal', { openModal, closeModal, registerModal, modals })
  }
}

export default PersianComponents
