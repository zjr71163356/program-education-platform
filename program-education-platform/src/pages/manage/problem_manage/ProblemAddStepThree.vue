<template lang="">
  <el-steps :active="3" align-center class="mt-5">
    <el-step title="添加/修改题库信息" />
    <el-step title="添加/修改数据" />
    <el-step title="完成" />
  </el-steps>
  <div class="flex flex-col items-center justify-center mt-10">
    <el-icon size="200" color="rgb(190 242 100)"><CircleCheck /></el-icon>
    <span class="text-3xl">题目添加成功</span>
    <div class="flex gap-5">
      <el-button type="primary" @click="laststep" class="mt-5">上一步</el-button>
      <el-button type="primary" @click="returnToProblemBankManage" class="mt-5"
        >查看题目列表</el-button
      >
    </div>
  </div>
</template>
<script setup>
import { CircleCheck } from '@element-plus/icons-vue'
import { useRouter,useRoute } from 'vue-router' // Add this import statement
const router = useRouter() //
const route = useRoute() //
const laststep = () => {
  router.go(-1)
}
const returnToProblemBankManage = () => {
  router.push({ name: 'ProblemManage' })
}
</script>
<style lang=""></style>
