<template>
  <FormController
    :ltr="ltr"
    :id="id"
    :name="name"
    :label="label"
    :labelClass="labelClass"
    :disabled="disabled"
    :rules="rules"
  >
    <template #form-item="{ disabled, error, id, ltr, onFormItemChange }">
      <PersianDatePicker
        :id="id"
        :class="{
          '!border-red-400 border-1 border-solid rounded-md': error,
          ltr
        }"
        :max="max"
        :min="min"
        :placeholder="placeholder"
        :modal="modal"
        :readonly="disabled"
        @on-select-date="onFormItemChange"
      />
    </template>
  </FormController>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { PersianDatePicker } from '.'
import { FormController } from '../../FormController'

defineProps({
  ltr: { type: Boolean, default: true },
  id: { type: String, default: '' },
  name: { type: String, default: '', required: true },
  label: { type: String, default: '' },
  labelClass: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  rules: { type: Array as PropType<Array<{ rule: string; message: string }>>, default: () => [] },
  min: {
    type: Date
  },
  max: {
    type: Date
  },
  placeholder: {
    type: String
  },
  modal: {
    type: Boolean,
    default: () => false
  }
})
</script>
