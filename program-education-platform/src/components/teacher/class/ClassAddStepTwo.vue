<template lang="">
  <el-steps :active="2" align-center class="mt-5">
    <el-step title="添加课程信息" />
    <el-step title="添加课程章节详情" />
    <el-step title="完成" />
  </el-steps>

  <div class="mt-5 flex flex-col items-center">
    <div class="my-5 font-semibold">添加课程章节详情</div>
    <div class="w-2/3">
      <el-table :data="classoutline" style="width: 100%">
        <el-table-column label="标题" prop="title">
          <template #default="{ row }"> {{ row.chapterNumber }}.{{ row.title }} </template>
        </el-table-column>
 
        <el-table-column align="right" >
      
        </el-table-column>
        <el-table-column align="right" type="expand">
      
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { classoutline } from '@/data/data'
const form = reactive({})
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
