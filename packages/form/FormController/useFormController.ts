import { ref } from 'vue'

export const useFormController = ({
  rules
}: {
  rules: Array<{ rule: string; message: string }>
}) => {
  const error = ref<{ rule: string; message: string }>()

  const checkRules = (value: string | number | boolean | Array<string | number | boolean>) => {
    error.value = rules.find((rule) => {
      switch (rule.rule) {
        case 'required':
          return !value
        case 'nationalCode':
          return true
        case 'password':
          return true

        default:
          return false
      }
    })
    return error.value
  }

  return { error, checkRules }
}

export default useFormController
