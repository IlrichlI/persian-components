<template>
  <div class="w-full h-full flex flex-wrap">
    <div
      v-for="item in items"
      :key="item.id"
      :style="{ flex: item.size }"
      class="border border-gray-300"
    >
      <div class="p-2 text-sm text-gray-700">
        {{ item.name }}
      </div>
      <div
        v-for="child in item.children"
        :key="child.id"
        :style="{ flex: child.size }"
        class="border border-gray-300 mt-2"
      >
        <div class="p-2 text-sm text-gray-700">
          {{ child.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Child {
  id: number
  name: string
  size: number
}

interface Item {
  id: number
  name: string
  size: number
  children: Child[]
}

const items: Item[] = [
  { id: 1, name: 'Item 1', size: 1, children: [{ id: 1, name: 'Child 1', size: 1 }] },
  {
    id: 2,
    name: 'Item 2',
    size: 2,
    children: [
      { id: 2, name: 'Child 2', size: 1 },
      { id: 3, name: 'Child 3', size: 1 }
    ]
  },
  { id: 3, name: 'Item 3', size: 1, children: [] },
  { id: 4, name: 'Item 4', size: 1, children: [{ id: 4, name: 'Child 4', size: 1 }] },
  { id: 5, name: 'Item 5', size: 1, children: [{ id: 5, name: 'Child 5', size: 1 }] }
]
</script>

<style scoped></style>
