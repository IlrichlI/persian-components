import { inject } from 'vue'

export const useForm = (customFormName?: string) => {
  const formName = customFormName || inject('formName', 'formReactive')

  // todo: watch out for this can be improved and might make bugs
  const changeForm = inject<
    ({
      key,
      value
    }: {
      key: string
      value: string | number | boolean | Array<string | number | boolean>
    }) => void
  >(formName ? formName + '-changeForm' : 'changeForm')

  const form = inject<Record<string, any>>(formName || 'formReactive')

  if (!form) {
    throw new Error('useForm needs to be used with FormProvider Component')
  }

  if (!changeForm) {
    throw new Error('useForm needs to be used with FormProvider Component')
  }

  return {
    form,
    formName,
    changeForm
  }
}

export default useForm
