import type {
  TPersianCalendarProps,
  TPersianCalendarEmits,
  TPersianTransitionListProps,
  TPersianTransitionListEmits,
  TPersianPaginationEmits,
  TPersianPaginationProps,
  TPersianEmptyEmits,
  TPersianEmptyProps
} from './types'

declare module 'persian-components/style.css'

declare module 'persian-components' {
  declare const _default: {
    PersianCalendar: DefineComponent<
      TPersianCalendarProps,
      unknown,
      unknown,
      {},
      {},
      {},
      unknown,
      TPersianCalendarEmits
    > & {
      new (): {
        $slots: {
          'calendar-footer': (arg: any) => VNode[]
        }
      }
    }

    PersianTransitionList: DefineComponent<
      TPersianTransitionListProps,
      unknown,
      unknown,
      {},
      {},
      {},
      unknown,
      TPersianTransitionListEmits
    > & {
      new (): {
        $slots: {
          'filters-container': (arg: any) => VNode[]
          'search-container': (arg: any) => VNode[]
          'list-header-button': (arg: { defaultPosition: () => void }) => VNode[]
          footer: (arg: any) => VNode[]
          [key in string + '-container']: (arg: { activeMode: string }) => VNode[]
        }
      }
    }

    PersianPagination: DefineComponent<
      TPersianPaginationProps,
      unknown,
      unknown,
      {},
      {},
      {},
      unknown,
      TPersianPaginationEmits
    > & {
      new (): {
        $slots: {
          'increment-button': (arg: { increment: () => void }) => VNode[]
          'pagination-details': (arg: { pageInputValue: number }) => VNode[]
          'decrement-button': (arg: { decrement: () => void }) => VNode[]
        }
      }
    }

    PersianEmpty: DefineComponent<
      TPersianEmptyProps,
      unknown,
      unknown,
      {},
      {},
      {},
      unknown,
      TPersianEmptyEmits
    >
  }
  export default _default

  import type { DefineComponent } from 'vue'

  //todo: complete or auto

  export const PersianCalendar = {} as unknown as DefineComponent<
    TPersianCalendarProps,
    unknown,
    unknown,
    {},
    {},
    {},
    unknown,
    TPersianCalendarEmits
  > & {
    new (): {
      $slots: {
        'calendar-footer': (arg: any) => VNode[]
      }
    }
  }

  export const PersianTransitionList = {} as unknown as DefineComponent<
    TPersianTransitionListProps,
    unknown,
    unknown,
    {},
    {},
    {},
    unknown,
    TPersianTransitionListEmits
  > & {
    new (): {
      $slots: {
        'filters-container': (arg: any) => VNode[]
        'search-container': (arg: any) => VNode[]
        'list-header-button': (arg: { defaultPosition: () => void }) => VNode[]
        footer: (arg: any) => VNode[]
        [key in string + '-container']: (arg: { activeMode: string }) => VNode[]
      }
    }
  }

  export const PersianPagination = {} as unknown as DefineComponent<
    TPersianPaginationProps,
    unknown,
    unknown,
    {},
    {},
    {},
    unknown,
    TPersianPaginationEmits
  > & {
    new (): {
      $slots: {
        'increment-button': (arg: { increment: () => void }) => VNode[]
        'pagination-details': (arg: { pageInputValue: number }) => VNode[]
        'decrement-button': (arg: { decrement: () => void }) => VNode[]
      }
    }
  }

  export const PersianEmpty = {} as unknown as DefineComponent<
    TPersianEmptyProps,
    unknown,
    unknown,
    {},
    {},
    {},
    unknown,
    TPersianEmptyEmits
  >
}
