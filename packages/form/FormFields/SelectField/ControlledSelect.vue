<template>
  <FormController
    :ltr="ltr"
    :id="id"
    :name="name"
    :labelClass="labelClass"
    :disabled="disabled"
    :rules="rules"
    :label="label"
  >
    <template #form-item="{ disabled, error, id, ltr, onFormItemChange }">
      <SelectField
        :id="id"
        :class="{
          '!border-red-400 border-1 border-solid rounded-md': error,
          ltr
        }"
        :readonly="disabled"
        :options="options"
        @update:modelValue="onFormItemChange"
      />
    </template>
  </FormController>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { SelectField } from '.'
import { FormController } from '../../FormController'

interface Option {
  value: string
  label: string
}

defineProps({
  options: {
    type: Array as PropType<Array<Option>>,
    required: true
  },
  ltr: { type: Boolean, default: true },
  id: { type: String, default: '' },
  name: { type: String, default: '', required: true },
  label: { type: String, default: '' },
  labelClass: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  rules: { type: Array as PropType<Array<{ rule: string; message: string }>>, default: () => [] }
})
</script>
