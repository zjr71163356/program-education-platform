<template lang="">
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold"> 添加课程章节详情 </div>
    <div class="w-2/3">
 
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand" />
        <el-table-column prop="name"   width="180" />
        <el-table-column prop="address"  />
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const form = reactive({
 
})
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
