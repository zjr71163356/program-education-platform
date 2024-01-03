<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <RouterLink :to="{ name: 'ClassList' }">课程中心</RouterLink>
          </el-menu-item>
          <el-menu-item index="2"
            ><RouterLink :to="{ name: 'MyClassList' }">题库</RouterLink>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="centered-content"><RouterView /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.centered-content {
  display: flex;
  justify-content: center;
}
#RouterLink {
  text-decoration: none;
}

/* 如果需要设置 el-main 的高度 */
</style>
