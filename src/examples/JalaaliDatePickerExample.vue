<template>
  <div class="grid grid-cols-3 p-4">
    <JalaaliDatePicker :max="new Date()" />
    <JalaaliDatePicker :min="new Date()" />
    <JalaaliDatePicker @on-select="onSelectDate" />
  </div>
</template>

<script setup lang="ts">
import { JalaaliDatePicker } from '@/packages'
const onSelectDate = (d: number) => console.log(d)
</script>
