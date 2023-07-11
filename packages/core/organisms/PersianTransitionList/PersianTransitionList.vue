<template>
  <div class="flex flex-col component-container">
    <div class="flex justify-between mb-5">
      <div class="filters-container">filters</div>
      <div class="search-container"><input type="text" /> search</div>
    </div>
    <div class="all-list-container flex justify-between">
      <div class="principle-agreement-container flex flex-col justify-between">
        <div class="list-title-container items-center flex">
          <h2 class="m-0">موافقت اصولی</h2>
        </div>
        <div class="list-item-col">
          <div class="list-item">
            <h4>درخواست نهاد مالی (۱۲۰۴۵۹۲۴۳۴۵۴۴)</h4>
            <div class="flex justify-between mx-1">
              <button>تایید شده</button>
              <span>جدید</span>
            </div>
          </div>
          <div class="list-item">
            <h4>درخواست نهاد مالی (۱۲۰۴۵۹۲۴۳۴۵۴۴)</h4>
            <div class="flex justify-between mx-1">
              <button>تایید شده</button>
              <span>جدید</span>
            </div>
          </div>
        </div>
        <div class="list-footer-container">
          <div class="flex justify-between pagination-container">
            <button>+</button>
            <div>
              <span>صفحه</span>
              <input class="pagination-input" type="text" />
              <span>از 2</span>
            </div>
            <button>-</button>
          </div>
        </div>
      </div>
      <div class="establishment-container flex flex-col justify-between">
        <div class="list-title-container items-center flex">
          <h2 class="m-0">تاسیس</h2>
        </div>
        <div class="list-item-col">
          <div class="list-item">
            <h4>درخواست فعالسازی صندوق (۱۲۰۴۵۹۲۴۳۴۵۴۴)</h4>
            <div class="flex justify-between mx-1">
              <button>رد شده</button>
              <span>جدید</span>
            </div>
          </div>
          <div class="list-item">
            <h4>درخواست فعالسازی صندوق (۱۲۰۴۵۹۲۴۳۴۵۴۴)</h4>
            <div class="flex justify-between mx-1">
              <button>رد شده</button>
              <span>جدید</span>
            </div>
          </div>
        </div>
        <div class="list-footer-container">
          <div class="flex justify-between pagination-container">
            <button>+</button>
            <div>
              <span>صفحه</span>
              <input class="pagination-input" type="text" />
              <span>از 2</span>
            </div>
            <button>-</button>
          </div>
        </div>
      </div>
      <div class="activity-container flex flex-col justify-between">
        <div class="list-title-container items-center flex">
          <h2 class="m-0">فعالیت</h2>
        </div>
        <div class="list-item-col">
          <div class="list-item" v-if="activityData.length > 0" v-for="data in activityData">
            <h4>{{ data.title }}</h4>
            <div class="flex justify-between mx-1">
              <button>{{ data.button }}</button>
              <span>{{ data.span }}</span>
            </div>
          </div>
          <div v-else class="flex justify-center items-center">
            <PersianEmpty :addI18n="'asdasd'" />
          </div>
        </div>
        <div class="list-footer-container">
          <div class="flex justify-between pagination-container">
            <button>+</button>
            <div>
              <span>صفحه</span>
              <input class="pagination-input" type="text" />
              <span>از 2</span>
            </div>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { PersianEmpty } from '../../atoms/PersianEmpty'
type dataTypes = {
  title: string
  button: string
  span: string
}
const activityData = ref<dataTypes[]>([
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' },
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' }
])
const principleAgreementData = ref<dataTypes[]>([
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' },
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' }
])
const establishmentData = ref<dataTypes[]>([
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' },
  { title: 'درخواست کارگزاری (۱۲۰۴۵۹۲۴۳۴۵۴۴)', button: 'رد شده', span: 'جدید' }
])
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.pagination-input {
  width: 40px;
  margin: 0px 5px;
}
.component-container {
  max-width: fit-content;
  margin: 0 auto;
}
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.brown {
  background-color: brown;
}
.search-container,
.filters-container {
  background-color: aquamarine;
  /* width: 400px; */
}
.all-list-container {
  min-height: 550px;
}
.activity-container,
.establishment-container,
.principle-agreement-container {
  border: 0.5px solid #dde8ed;
  background-color: #fafafa;
  width: 30%;
  padding: 8px;
}
.establishment-container {
  margin: 0rem 4rem;
}
.list-title-container {
  min-height: 32px;
  padding: 0.5rem;
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
.list-footer-container {
  min-height: 43px;
  display: flex;
  align-items: center;
}
.pagination-container {
  min-width: 150px;
}
</style>
