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
  listsContainer:Array<TListsContainer>;
  listsData: Record<string, Array<{
    key: string,
    title: string,
    button: string,
    span: string,
    date:string,
    details:string
  }>>
}

export type TPersianTransitionListEmits = {}
