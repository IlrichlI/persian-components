<template>
  <div class="mt-[140px] flex justify-center items-center flex-col">
    <img src="/assets/images/empty.png" class="mb-[80px]" alt="No data found" />
    <span :text-i18n="titleI18n" class="font-[500]" />
    <span :text-i18n="textI18n" class="max-w-[315px] text-center" />
    <RichButton
      :button-props="{
        type: 'primary'
      }"
      class="mt-4 w-[250px]"
      :text-i18n="addI18n"
      @click="$emit('on-add')"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  titleI18n: {
    type: String,
    default: () => 'Title'
  },
  textI18n: {
    type: String,
    default: () => 'Text'
  },
  addI18n: {
    type: String,
    default: () => 'Text'
  }
})

defineEmits(['on-add'])
</script>
