<template>
  <div class="grid grid-cols-3 p-4 gap-8">
    <PersianDatePicker :max="new Date()" />
    <PersianDatePicker :min="new Date()" />
    <PersianDatePicker @on-select="onSelectDate" modal />
  </div>
  <div class="grid grid-cols-3 p-4 gap-8">
    <InputField />
    <InputField />
    <InputField />
    <FormProvider name="example" @on-change="onFormChange" @on-submit="onFormSubmit">
      <ControlledInput
        name="text"
        label="نمونه"
        :rules="[{ rule: 'required', message: 'اجباری' }]"
      />
      <ControlledDatePicker
        name="date"
        label="نمونه تقویم"
        :rules="[{ rule: 'required', message: 'اجباری' }]"
      />
      <PersianButton :button-props="{ type: 'submit' }" active>ذخیره</PersianButton>
    </FormProvider>
  </div>
</template>

<script setup lang="ts">
import { FormProvider } from '@/packages/form/FormProvider'
import {
  ControlledInput,
  InputField,
  PersianDatePicker,
  ControlledDatePicker,
  PersianButton
} from '../../packages'
const onSelectDate = (d: number) => console.log(d)
const onFormChange = (d: any) => console.log(d)
const onFormSubmit = (d: any) => console.log(d)
</script>
