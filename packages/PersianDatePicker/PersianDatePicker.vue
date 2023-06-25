<template>
  <div class="relative">
    <div>
      <PersianInput :model-value="datePickerDate" @click="isDatePickerOpen = true" />
    </div>
    <div
      v-if="!modal"
      class="absolute top-10 right-0 left-0 bg-white w-full max-w-md rounded shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden"
      :class="{ 'h-[350px]': isDatePickerOpen, 'h-0': !isDatePickerOpen }"
    >
      <PersianCalendar :min="min" :max="max" @on-select="onSelectDate">
        <template #calendar-footer>
          <button
            class="mx-3 day-btn bg-blue-500 border-none p-1 text-white transition-all hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
            @click="isDatePickerOpen = false"
          >
            بستن
          </button>
        </template>
      </PersianCalendar>
    </div>
    <div v-else>
      <PersianModal :visible="isDatePickerOpen">
        <template #body>
          <PersianCalendar :min="min" :max="max" @on-select="onSelectDate">
            <template #calendar-footer>
              <button
                class="mx-3 day-btn bg-blue-500 border-none p-1 text-white transition-all hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
                @click="isDatePickerOpen = false"
              >
                بستن
              </button>
            </template>
          </PersianCalendar>
        </template>
      </PersianModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns-jalali'
import { ref } from 'vue'
import { PersianCalendar, type TSelectedDate } from '../PersianCalendar'
import { PersianInput } from '../PersianInput'
import { PersianModal } from '../PersianModal'

const isDatePickerOpen = ref(false)
const datePickerDate = ref('')

datePickerDate.value = format(new Date(), 'yyyy/mm/dd')

const emit = defineEmits(['on-select-date'])

const onSelectDate = ({ gregorian, jalali }: TSelectedDate) => {
  emit('on-select-date', gregorian)
  datePickerDate.value = jalali.jYear + '/' + jalali.jMonth + '/' + jalali.jDay
}

defineProps({
  min: {
    type: Date
  },
  max: {
    type: Date
  },
  placeholder: {
    type: String
  },
  label: {
    type: String
  },
  modal: {
    type: Boolean,
    default: () => false
  }
})
</script>
