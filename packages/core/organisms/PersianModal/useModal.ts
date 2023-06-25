import { inject } from 'vue'
import type { Ref } from 'vue'

export const useModal = <TPayload>() => {
  return inject('persian-components-modal') as {
    openModal: <TP, TD>(modalId: string, payload?: TP) => Promise<TD>
    closeModal: <TD>(modalId: string, data?: TD) => void
    registerModal: (modalId: string) => void
    modals: Ref<Record<string, { open: boolean; payload: TPayload }>>
  }
}

export default useModal
