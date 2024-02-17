<template>
  <div class="common-layout">
    <div id="myNavbar">
      <TheNavbar class="" />
    </div>

    <div id="myContainer" class="   container-height">
      <div class="flex justify-center p-0 "> <router-view /></div>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/user/layout/TheNavbar.vue'
</script>

<style scoped>
RouterLink {
  text-decoration: none;
 
}
.container-height {
  height: calc(100vh - 48px);
}

/* 如果需要设置 el-main 的高度 */
</style>
