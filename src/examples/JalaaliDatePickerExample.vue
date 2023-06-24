<template>
  <div class="grid grid-cols-3 p-4 gap-8">
    <JalaaliDatePicker :max="new Date()" />
    <JalaaliDatePicker :min="new Date()" />
    <JalaaliDatePicker @on-select="onSelectDate" modal />
  </div>
</template>

<script setup lang="ts">
import { JalaaliDatePicker } from '@/packages'
const onSelectDate = (d: number) => console.log(d)
</script>
