<template>
  <div>
    <label v-if="label" class="block" :class="[labelClass, { 'opacity-40': disabled }]" :for="id">
      {{ label }}
    </label>
    <div>
      <slot name="prepend" />
      <span
        v-if="error"
        class="!text-red-600 absolute top-0"
        :class="{ 'left-1': !ltr, 'right-1': ltr }"
      >
        *
      </span>
      <slot
        name="form-item"
        :id="id"
        :error="error"
        :ltr="ltr"
        :disabled="disabled"
        :onFormItemChange="onFormItemChange"
      />
      <slot name="append" />
    </div>
    <slot name="validation">
      <div v-show="error" class="text-sm mt-2 h-6">
        <div v-if="error" class="!text-red-500 px-1">
          {{ error.message }}
        </div>
      </div>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useForm } from '../FormProvider/useForm'
import { useFormController } from '.'

const props = defineProps({
  ltr: { type: Boolean, default: true },
  id: { type: String, default: '' },
  name: { type: String, default: '', required: true },
  label: { type: String, default: '' },
  labelClass: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  rules: { type: Array as PropType<Array<{ rule: string; message: string }>>, default: () => [] }
})

const emit = defineEmits(['update:form-item'])

const { error, checkRules } = useFormController({
  rules: props.rules
})
const { form, changeForm } = useForm()

const onFormItemChange = (value: string | number | boolean | Array<string | number | boolean>) => {
  emit('update:form-item', value)
  changeForm({ key: props.name, value })
  checkRules(value)
  return form
}
</script>
