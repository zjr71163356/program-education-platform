

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <el-menu class="el-menu-demo" mode="horizontal"  :router="true">
          <el-menu-item index="1" :route="{ name: 'ClassList' }"> 课程中心 </el-menu-item>
          <el-menu-item index="2" :route="{ name: 'QuestionBank' }">题库 </el-menu-item>
        </el-menu> -->
        <MyNavbar />
      </el-header>
      <el-main class="centered-content"> <router-view /></el-main>
    </el-container>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import MyNavbar from './components/MyNavbar.vue'
import { onMounted } from 'vue'
import { initTE, Sidenav } from 'tw-elements'
onMounted(() => {
  
  initTE({ Sidenav }) // set second parameter to true if you want to use a debugger

})
</script>

<style scoped>
.centered-content {
  display: flex;
  justify-content: center;
}
RouterLink {
  text-decoration: none;
  display: block;
}

/* 如果需要设置 el-main 的高度 */
</style>
