<template>
  <div class="flex flex-col w-[100%] m-auto">
    <div class="flex justify-between mb-2">
      <slot name="filters-container">
        <div class="filters-container py-[8px] px-[12px] round-[8px]">This is Filter section</div>
      </slot>
      <slot name="search-container">
        <div class="search-container py-[8px] px-[12px]">This is search section</div>
      </slot>
    </div>
    <div class="mt-[15px] flex">
      <div
        v-for="list in listsContainer"
        :key="list.key"
        :class="{
          open: activeMode === list.key,
          close: !['default', list.key].includes(activeMode),
          justTitle: activeMode === 'default'
        }"
        class="activity-container bg-[#fafafa] p-[8px] flex flex-col justify-between mx-[0.2rem]"
        :style="{ width: 100 / listsContainer.length + '%' }"
        @click="activeMode !== 'default' && setActiveList(list.key)"
      >
        <button
          :class="{
            rotateButton: !['default', list.key].includes(activeMode)
          }"
          class="list-title-container min-h-[32px] p-[0.5rem] border-none bg-transparent text-[13px] items-center flex justify-between cursor-pointer"
          @click="setDefaultActive(list.key)"
        >
          <h2 class="m-0">{{ list.label }}</h2>
          <slot
            name="list-header-button"
            :default-position="defaultPosition"
            v-if="activeMode === list.key"
          >
            <button
              v-if="activeMode === list.key"
              class="cursor-pointer"
              :onClick="defaultPosition"
            >
              default
            </button>
          </slot>
        </button>
        <div
          :class="{
            hidden: !['default', list.key].includes(activeMode)
          }"
          class="list-item-col h-[100%]"
        >
          <div v-if="loading">
            <slot v-if="loading" name="loading">
              <div class="flex justify-center items-center">This is loading</div>
            </slot>
          </div>
          <div v-else>
            <slot
              :name="list.key + '-container'"
              v-if="listData[list.key] && listData[list.key].length > 0"
              :active-mode="activeMode"
            >
              <span>This is your Card Container</span>
            </slot>
            <div v-else class="flex justify-center items-center">
              <PersianEmpty :titleI18n="'درخواستی ثبت نکرده اید .'" />
            </div>
          </div>
        </div>
        <slot
          name="footer"
          v-if="
            (list.key === activeMode || 'default' === activeMode) && listData[list.key]?.length !== 0
          "
        >
          This is your default footer
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { PersianEmpty } from '../../atoms'

type TListsContainer = {
  key: string
  label: string
}

const activeMode = ref('default')
const setActiveList = (key: string) => {
  activeMode.value = key
}
const setDefaultActive = (key: string) => {
  activeMode.value = key
}
const defaultPosition = (e: Event) => {
  e.stopPropagation()
  activeMode.value = 'default'
}
defineProps({
  listsContainer: {
    type: Array as PropType<Array<TListsContainer>>,
    default: () => []
  },
  listData: {
    type: Object as PropType<
      Record<
        string,
        Array<{
          key: string
          title: string
          button: string
          span: string
          date: string
          details: string
        }>
      >
    >,
    default: () => ({})
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: () => false
  }
})
</script>
<style scoped>
@keyframes rotation {
  30% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes closeWidth {
  from {
    width: 100%;
  }
  to {
    width: 5%;
  }
}
@keyframes openWidth {
  from {
    width: 33%;
  }
  to {
    width: 100%;
  }
}
@keyframes defaultWidth {
  from {
    width: 10%;
  }
  to {
    width: 33%;
  }
}
@keyframes rotateButton {
  from {
    transform: rotate(-20deg);
  }
  to {
    transform: rotate(-90deg);
  }
}
.open {
  animation: openWidth 1s alternate both;
}
.close {
  animation: closeWidth 1s alternate both;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-height: 285px;
}
.justTitle {
  animation: defaultWidth 1s alternate both;
  height: fit-content;
}
.rotateButton {
  animation: rotateButton 1s alternate both;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
}
.search-container,
.filters-container {
  border: 0.5px solid #dde8ed;
}
.activity-container {
  border: 0.5px solid #dde8ed;
}
.list-title-container h2::before {
  content: '';
  width: 6px;
  height: 6px;
  background-color: #187ee4;
  border-radius: 50%;
  display: inline-block;
  margin: 0px 0px 0px 10px;
}
</style>
