<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits([
  'input',
  'update:modelValue',
  'blurred',
  'keyup',
  'keydown',
  'keypress',
  'focused',
  'click'
])

const props = defineProps({
  readonly: { type: Boolean, default: true },
  id: { type: String, default: '' },
  type: { type: String, default: 'text' },
  label: { type: String, default: '' },
  error: { type: String, default: '' },
  labelClass: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
  disabled: { type: Boolean, default: false },
  inputClass: { type: String, default: '' },
  inputProps: { type: Object, default: () => ({}) }
})

const inputProperties = computed(() => ({
  ...(props.id ? { id: props.id } : {}),
  class: props.inputClass,
  value: props.modelValue,
  type: props.type,
  placeholder: props.placeholder,
  disabled: props.disabled,
  autocomplete: 'off',
  spellcheck: false,
  readonly: props.readonly,
  ...props.inputProps
}))

const refine = (event: Event) => {
  emit('input', event)
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const onBlur = () => {
  emit('blurred', {})
}

const onFocus = () => {
  emit('focused', {})
}
</script>

<template>
  <div>
    <label v-if="label" class="block" :class="[labelClass, { 'opacity-40': disabled }]" :for="id">
      {{ label }}
    </label>
    <div class="relative flex flex-row-reverse overflow-hidden">
      <slot name="prepend" />
      <span
        v-if="error"
        class="text-red-600 absolute top-0"
        :class="{ 'left-1': !ltr, 'right-1': ltr }"
      >
        *
      </span>
      <input
        :model-value="modelValue"
        class="px-2 w-full appearance-none focus:ring-0 placeholder-gray-400 transition-colors duration-100 ease-in-out leading-normal rounded disabled:opacity-40 border-black border-opacity-50 !bg-white text-[16px] min-h-[40px]"
        :class="{
          '!border-red-400': error,
          ltr: ltr
        }"
        v-bind="inputProperties"
        @input="refine"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="$emit('keyup', $event)"
        @keydown="$emit('keydown', $event)"
        @keypress="$emit('keypress', $event)"
        @click="$emit('click', $event)"
      />
      <slot name="append" />
    </div>
    <slot name="validation">
      <div v-show="error" class="text-sm mt-2 h-6">
        <div v-if="error" class="text-red px-1">
          {{ error }}
        </div>
      </div>
    </slot>
    <slot />
  </div>
</template>
<style lang="postcss" scoped>
input {
  text-align: inherit;
  padding: 3px 0.5rem 0;
}
</style>
