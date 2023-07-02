import type { TPersianCalendar } from './types'

declare module 'persian-components' {
  declare const _default: {}
  export default _default

  import type { DefineComponent } from 'vue'

  //todo: complete or auto
  export const PersianCalendar = {} as unknown as DefineComponent<TPersianCalendar>
}
