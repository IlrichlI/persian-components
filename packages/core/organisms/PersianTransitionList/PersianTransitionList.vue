<template>
  <div class="flex flex-col component-container">
    <div class="flex justify-between mb-2">
      <slot name="filters-container">
        <div class="filters-container">This is Filter section</div>
      </slot>
      <slot name="search-container">
        <div class="search-container">This is search section</div>
      </slot>
    </div>
    <div class="all-list-container flex">
      <div
        :class="{
          open: listsOpenStatus.principleAgreement,
          close: !listsOpenStatus.principleAgreement && !noList,
          justTitle: noList
        }"
        class="principle-agreement-container flex flex-col justify-between"
        @click="atleastOneList && principleAgreementSetOpen()"
      >
        <button
          :class="{
            rotateButton: !listsOpenStatus.principleAgreement && !noList
          }"
          class="list-title-container items-center flex justify-between cursor-pointer"
          @click="principleAgreementSetOpen"
        >
          <h2 class="m-0">موافقت اصولی</h2>
          <slot
            name="list-header-button"
            :default-position="defaultPosition"
            v-if="listsOpenStatus.principleAgreement"
          >
            <button
              v-if="listsOpenStatus.principleAgreement"
              class="cursor-pointer"
              :onClick="defaultPosition"
            >
              default
            </button>
          </slot>
        </button>
        <div
          :class="{
            hideList: listsOpenStatus.establishment || listsOpenStatus.activity
          }"
          class="list-item-col"
        >
          <div
            class="list-item"
            v-if="principleAgreementData.length > 0"
            v-for="data in principleAgreementData"
          >
            <h4>{{ data.title }}</h4>
            <div class="flex justify-between mx-1">
              <button>{{ data.button }}</button>
              <span>{{ data.span }}</span>
            </div>
          </div>
          <div v-else class="flex justify-center items-center">
            <PersianEmpty :titleI18n="'درخواستی ثبت نکرده اید .'" />
          </div>
        </div>
        <ListFooter v-if="listsOpenStatus.principleAgreement || noList" />
      </div>
      <div
        :class="{
          open: listsOpenStatus.establishment,
          close: !listsOpenStatus.establishment && !noList,
          justTitle: noList
        }"
        class="establishment-container flex flex-col justify-between"
        @click="atleastOneList && establishmentSetOpen()"
      >
        <button
          :class="{
            rotateButton: !listsOpenStatus.establishment && !noList
          }"
          class="list-title-container items-center flex justify-between cursor-pointer"
          @click="establishmentSetOpen"
        >
          <h2 class="m-0">تاسیس</h2>
          <slot
            name="list-header-button"
            :default-position="defaultPosition"
            v-if="listsOpenStatus.establishment"
          >
            <button
              v-if="listsOpenStatus.establishment"
              class="cursor-pointer"
              :onClick="defaultPosition"
            >
              default
            </button>
          </slot>
        </button>
        <div
          :class="{
            hideList: listsOpenStatus.principleAgreement || listsOpenStatus.activity
          }"
          class="list-item-col"
        >
          <div
            class="list-item"
            v-if="establishmentData.length > 0"
            v-for="data in establishmentData"
          >
            <h4>{{ data.title }}</h4>
            <div class="flex justify-between mx-1">
              <button>{{ data.button }}</button>
              <span>{{ data.span }}</span>
            </div>
          </div>
          <div v-else class="flex justify-center items-center">
            <PersianEmpty :titleI18n="'درخواستی ثبت نکرده اید .'" />
          </div>
        </div>
        <ListFooter v-if="listsOpenStatus.establishment || noList" />
      </div>
      <div
        :class="{
          open: listsOpenStatus.activity,
          close: !listsOpenStatus.activity && !noList,
          justTitle: noList
        }"
        class="activity-container flex flex-col justify-between"
        @click="atleastOneList && activitySetOpen()"
      >
        <button
          :class="{
            rotateButton: !listsOpenStatus.activity && !noList
          }"
          class="list-title-container items-center flex justify-between cursor-pointer"
          @click="activitySetOpen"
        >
          <h2 class="m-0">فعالیت</h2>
          <slot
            name="list-header-button"
            :default-position="defaultPosition"
            v-if="listsOpenStatus.activity"
          >
            <button
              v-if="listsOpenStatus.activity"
              class="cursor-pointer"
              :onClick="defaultPosition"
            >
              default
            </button>
          </slot>
        </button>
        <div
          :class="{
            hideList: listsOpenStatus.principleAgreement || listsOpenStatus.establishment
          }"
          class="list-item-col"
        >
          <div class="list-item" v-if="activityData.length > 0" v-for="data in activityData">
            <h4>{{ data.title }}</h4>
            <div class="flex justify-between mx-1">
              <button>{{ data.button }}</button>
              <span>{{ data.span }}</span>
            </div>
          </div>
          <div v-else class="flex justify-center items-center">
            <PersianEmpty :titleI18n="'درخواستی ثبت نکرده اید .'" />
          </div>
        </div>
        <ListFooter v-if="listsOpenStatus.activity || noList" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { PersianEmpty } from '../../atoms/PersianEmpty'
import ListFooter from './ListFooter.vue'

type dataTypes = {
  title: string
  button: string
  span: string
}
type openTypes = {
  principleAgreement: boolean | false
  establishment: boolean | false
  activity: boolean | false
}

const principleAgreementData = ref<dataTypes[]>([
  { title: 'درخواست فعالسازی صندوق (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' },
  { title: 'درخواست فعالسازی صندوق (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' }
])
const establishmentData = ref<dataTypes[]>([
  // { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' },
  // { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' }
])
const activityData = ref<dataTypes[]>([
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' },
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' }
])
const listsOpenStatus = ref<openTypes>({
  principleAgreement: false,
  establishment: false,
  activity: false
})
const atleastOneList = computed(
  () =>
    listsOpenStatus.value.activity ||
    listsOpenStatus.value.establishment ||
    listsOpenStatus.value.principleAgreement
)
const noList = computed(() => {
  return (
    !listsOpenStatus.value.activity &&
    !listsOpenStatus.value.establishment &&
    !listsOpenStatus.value.principleAgreement
  )
})
const principleAgreementSetOpen = () => {
  listsOpenStatus.value.principleAgreement = true
  listsOpenStatus.value.establishment = false
  listsOpenStatus.value.activity = false
}
const establishmentSetOpen = () => {
  listsOpenStatus.value.establishment = true
  listsOpenStatus.value.principleAgreement = false
  listsOpenStatus.value.activity = false
}
const activitySetOpen = () => {
  listsOpenStatus.value.activity = true
  listsOpenStatus.value.principleAgreement = false
  listsOpenStatus.value.establishment = false
}
const defaultPosition = (e: any) => {
  e.stopPropagation()
  listsOpenStatus.value.activity = false
  listsOpenStatus.value.principleAgreement = false
  listsOpenStatus.value.establishment = false
}
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
    width: 30%;
  }
  to {
    width: 100%;
  }
}
@keyframes defaultWidth {
  from {
    width: 20%;
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
}
.justTitle {
  animation: defaultWidth 1s alternate both;
}
.hideList {
  display: none;
}
.rotateButton {
  animation: rotateButton 1s alternate both;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
}
.component-container {
  margin: 0 auto;
  width: 1200px;
}
.search-container,
.filters-container {
  padding: 8px 12px;
  border: 0.5px solid #dde8ed;
  border-radius: 8px;
}
.all-list-container {
  margin-top: 15px;
}
.activity-container,
.establishment-container,
.principle-agreement-container {
  border: 0.5px solid #dde8ed;
  background-color: #fafafa;
  width: 32%;
  padding: 8px;
}
.establishment-container {
  margin: 0rem 0.9rem;
}
.list-title-container {
  min-height: 32px;
  padding: 0.5rem;
  font-size: 13px;
  background: transparent;
  border: none;
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
.list-item-col {
  height: 100%;
}
.list-item {
  min-height: 85px;
  background-color: #fff;
  margin: 5px 0px;
  border-radius: 2px;
  padding: 0rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 0.5px solid #dde8ed;
}
</style>
