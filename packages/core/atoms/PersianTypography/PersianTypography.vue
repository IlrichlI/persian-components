<template>
  {{ getText(text) }}
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: () => ''
  }
})

const getText = (text: string) => text.replace(' ها', '\u200cها')
</script>
