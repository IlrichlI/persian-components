<template>
  <div class="grid grid-cols-3 p-4 gap-8">
    <PersianDatePicker :max="new Date()" />
    <PersianDatePicker :min="new Date()" />
    <PersianDatePicker @on-select="onSelectDate" modal />
  </div>
</template>

<script setup lang="ts">
import { PersianDatePicker } from '../../packages'
const onSelectDate = (d: number) => console.log(d)
</script>
