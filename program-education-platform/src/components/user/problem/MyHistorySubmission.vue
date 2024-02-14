<template>
  <el-table :data="historyRecords" stripe style="width: 100%; font-size: 12px">
    <el-table-column label="提交时间" prop="submittime" />
    <el-table-column label="状态" prop="state" />

    <el-table-column label="题目" prop="title">
      <template #default="{ row }">
        <router-link class="text-sky-400" :to="{ name: 'ProblemDesc', params: { id: row.id } }">{{
          row.title
        }}</router-link>
      </template>
    </el-table-column>

    <el-table-column label="编译器" prop="compiler" />
    <el-table-column label="内存" prop="memory" />
    <el-table-column label="用时" prop="runtime" />
    <el-table-column align="right">
      <template #header> </template>
      <template #default >
        <router-link  :to="{name:'SubmitResultDescPage'}">
          <div class="flex justify-center">
            <el-button size="small"  >查看</el-button>
          </div>
        </router-link>
  
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>

<script setup>
import { computed, ref } from 'vue'
import { historyRecords } from '@/data/data'

</script>
