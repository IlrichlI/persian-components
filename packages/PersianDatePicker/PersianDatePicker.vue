<template>
  <div class="relative">
    <div>
      <PersianInput :model-value="datePickerDate" @click="openDatePicker" />
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
            @click="closeDatePicker"
          >
            بستن
          </button>
        </template>
      </PersianCalendar>
    </div>
    <div v-else>
      <PersianModal modal-id="persian-calendar-modal">
        <template #body>
          <PersianCalendar :min="min" :max="max" @on-select="onSelectDate">
            <template #calendar-footer>
              <button
                class="mx-3 day-btn bg-blue-500 border-none p-1 text-white transition-all hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
                @click="closeDatePicker"
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
import useModal from '../PersianModal/useModal'

const isDatePickerOpen = ref(false)
const datePickerDate = ref('')

datePickerDate.value = format(new Date(), 'yyyy/mm/dd')

const emit = defineEmits(['on-select-date'])

const onSelectDate = ({ gregorian, jalali }: TSelectedDate) => {
  emit('on-select-date', gregorian)
  datePickerDate.value = jalali.jYear + '/' + jalali.jMonth + '/' + jalali.jDay
}

const { openModal, closeModal } = useModal()

const openDatePicker = () => {
  props.modal && openModal('persian-calendar-modal')
  isDatePickerOpen.value = true
}

const closeDatePicker = () => {
  props.modal && closeModal('persian-calendar-modal')
  isDatePickerOpen.value = false
}

const props = defineProps({
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
