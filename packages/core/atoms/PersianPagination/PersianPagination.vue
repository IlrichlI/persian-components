<template>
  <div class="list-footer-container flex items-center min-h-[43px]">
    <div class="flex justify-between min-2-[150px] items-center">
      <slot name="increment-button" :increment-page="increment">
        <button
          class="min-w-[25px] min-h-[25px] cursor-pointer mx-1"
          @click="increment"
          :disabled="pageInputValue == '10'"
        >
          +
        </button>
      </slot>
      <slot name="pagination-details" :page="pageInputValue">
        <div>
          <span> صفحه </span>
          <input class="w-[40px] mx-[5px]" type="text" :value="pageInputValue" />
          <span> از 2 </span>
        </div>
      </slot>
      <slot name="decrement-button" :decrement-page="decrement">
        <button
          class="min-w-[25px] min-h-[25px] cursor-pointer mx-1"
          @click="decrement"
          :disabled="pageInputValue == '1'"
        >
          -
        </button>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const pageInputValue = ref<any>('1')

const decrement = () => {
  if (pageInputValue.value == '1') {
    pageInputValue.value = '1'
  } else {
    pageInputValue.value--
  }
}
const increment = () => {
  if (pageInputValue.value == '10') {
    pageInputValue.value = '10'
  } else {
    pageInputValue.value++
  }
}
</script>
