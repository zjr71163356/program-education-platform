<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal"  :router="true">
          <el-menu-item index="1" :route="{ name: 'ClassList' }"> 课程中心 </el-menu-item>
          <el-menu-item index="2" :route="{ name: 'QuestionBank' }">题库 </el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="centered-content"><RouterView /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>

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
