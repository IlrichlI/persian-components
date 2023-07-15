<template>
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
</template>
<script setup lang="ts"></script>
<style scoped>
.list-footer-container {
  min-height: 43px;
  display: flex;
  align-items: center;
}
.pagination-container {
  min-width: 150px;
}
.pagination-input {
  width: 40px;
  margin: 0px 5px;
}
</style>
