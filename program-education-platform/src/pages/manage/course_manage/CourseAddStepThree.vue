<template lang="">
  <el-steps :active="3" align-center class="mt-5">
    <el-step title="添加/修改教程信息" />
    <el-step title="添加/修改教程章节详情" />
    <el-step title="完成" />
  </el-steps>

  <div class="flex flex-col items-center justify-center mt-10">
    <el-icon size="200" color="rgb(190 242 100)"><CircleCheck /></el-icon>
    <span class="text-3xl">教程添加成功</span>
    <div class="flex gap-5">
      <el-button type="primary" @click="laststep" class="mt-5">上一步</el-button>
      <el-button type="primary" @click="returnToCourseList" class="mt-5">查看教程列表</el-button>
    </div>
  </div>
</template>
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router' // Add this import statement
const router = useRouter() //
const returnToCourseList = () => {
  router.push({ name: 'CourseListManage' })
}
const laststep = () => {
  router.go(-1)
}
</script>
<style lang=""></style>
