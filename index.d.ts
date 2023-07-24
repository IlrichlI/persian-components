export type TPersianCalendarProps = {
  min?: Date
  max?: Date
}

export type TPersianCalendarEmits = {
  'on-select': Date
}

type TListsContainer = {
  key: string
  label: string
}

export type TPersianTransitionListProps = {
  listsContainer: Array<TListsContainer>
  listsData: Record<
    string,
    Array<{
      key: string
      title: string
      button: string
      span: string
      date: string
      details: string
    }>
  >
}

export type TPersianTransitionListEmits = {}

export type TPersianPaginationProps = {}

export type TPersianPaginationEmits = {}

export type TPersianEmptyProps = {
  titleI18n?: string
}

export type TPersianEmptyEmits = {}

export type TPersianTooltipProps = {
  tooltipActionClass: string
  defaultHide: boolean
  auto: boolean
}


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

    PersianTooltip: DefineComponent<
      TPersianTooltipProps,
      unknown,
      unknown,
      {},
      {},
      {},
      unknown,
      {}
    > & {
      new (): {
        $slots: {
          'content': (arg: any) => VNode[]
          'tooltip-action': (arg: any) => VNode[]
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

  export const PersianTooltip = {} as unknown as DefineComponent<
    TPersianTooltipProps,
    unknown,
    unknown,
    {},
    {},
    {},
    unknown,
    {}
  > & {
    new (): {
      $slots: {
        'content': (arg: any) => VNode[]
        'tooltip-action': (arg: any) => VNode[]
      }
    }
  }
}
