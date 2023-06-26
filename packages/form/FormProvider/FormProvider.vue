<template>
  <form v-bind="formProps" :autocomplete="autoComplete" @submit.prevent="$emit('on-submit', form)">
    <slot />
  </form>
</template>

<script setup lang="ts" generic="T = any">
import { watch, reactive, provide, type FormHTMLAttributes } from 'vue'

interface FormPackageProps {
  formProps?: FormHTMLAttributes & { class?: string }
  name?: string
  autoComplete?: 'off' | 'on'
  model?: T
}

const props = defineProps<FormPackageProps>()
const emit = defineEmits(['on-submit', 'on-change'])

const form = reactive(props.model || {})

watch(
  () => props.model as object,
  (val) => {
    Object.keys(val).forEach((key) => (form[key] = val[key]))
  }
)

const changeForm = ({ key, value }: { key: string; value: string | number | boolean }) => {
  form[key] = value
  emit('on-change', form)
}

// TODO: error when using form in a form
provide(props.name ? props.name + '-changeForm' : 'changeForm', changeForm)
provide(props.name || 'formReactive', form)
provide('formName', props.name || 'formReactive')
</script>
