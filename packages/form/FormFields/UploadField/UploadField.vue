<template>
  <div
    class="w-64 h-64 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer relative"
    @dragover.prevent
    @drop="onDrop"
  >
    <input
      type="file"
      ref="fileInput"
      class="absolute w-full h-full opacity-0 cursor-pointer"
      @change="onFileChange"
    />
    <div class="text-center">
      <div class="text-gray-700">Drag & Drop your files here</div>
      <div class="mt-2 text-blue-600">or click to select files</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fileInput = ref<HTMLInputElement | null>(null)

const onFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files) {
    console.log(files)
    // Here you would typically handle the selected files.
  }
}

const onDrop = (event: DragEvent) => {
  event.preventDefault()
  if (event.dataTransfer) {
    const files = event.dataTransfer.files
    console.log(files)
    // Here you would typically handle the dropped files.
  }
}
</script>
