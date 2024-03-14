<template>
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="添加用户" />
    <el-step title="完成" />
  </el-steps>

  <div class="flex flex-col items-center justify-center mt-10">
    <el-icon size="200" color="rgb(190 242 100)"><CircleCheck /></el-icon>
    <span class="text-3xl">用户添加成功</span>
    <div class="flex gap-5">
      <el-button type="primary" @click="laststep" class="mt-5">上一步</el-button>
      <el-button type="primary" @click="returnToClassList" class="mt-5">查看用户列表</el-button>
    </div>
  </div>
  <!-- Card -->
</template>

<script setup>
import { CircleCheck } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router' // Add this import statement
const router = useRouter() //
const returnToClassList = () => {
  router.push({ name: 'UserList' })
}
const laststep = () => {
  router.go(-1)
}

// watch(()=>userInfo.value.role,(newVal,oldVal)=>{
//   console.log(newVal,oldVal)
// })
</script>
