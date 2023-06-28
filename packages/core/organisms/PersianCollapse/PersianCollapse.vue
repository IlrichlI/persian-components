<template>
    <div>
      <div 
        v-for="item in items" 
        :key="item.id" 
        class="border-b border-gray-200"
      >
        <div 
          @click="toggleCollapse(item.id)" 
          class="cursor-pointer p-4 bg-gray-100"
        >
          {{ item.name }}
        </div>
        <div 
          v-if="item.isCollapsed" 
          class="p-4"
        >
          <div 
            v-for="child in item.children" 
            :key="child.id" 
            class="border-t border-gray-200 p-2"
          >
            {{ child.name }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface Child {
    id: number;
    name: string;
  }
  
  interface TItem {
    id: number;
    name: string;
    isCollapsed: boolean;
    children: Child[];
  }
  
      const items= ref<TItem[]>([
        { id: 1, name: 'Item 1', isCollapsed: false, children: [{ id: 1, name: 'Child 1' }] },
        { id: 2, name: 'Item 2', isCollapsed: false, children: [{ id: 2, name: 'Child 2' }, { id: 3, name: 'Child 3' }] },
        { id: 3, name: 'Item 3', isCollapsed: false, children: [] },
        { id: 4, name: 'Item 4', isCollapsed: false, children: [{ id: 4, name: 'Child 4' }] },
        { id: 5, name: 'Item 5', isCollapsed: false, children: [{ id: 5, name: 'Child 5' }] },
      ]);
  
      const toggleCollapse = (id: number) => {
        const item = items.value.find(item => item.id === id);
        if (item) {
          item.isCollapsed = !item.isCollapsed;
        }
      };
    