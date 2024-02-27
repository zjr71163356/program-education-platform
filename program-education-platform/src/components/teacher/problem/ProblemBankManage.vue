<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="problemId" label="Id" width="80" />
    <el-table-column prop="title" label="标题" width="500">
      <template #default="scope">
        <router-link :to="{ name: 'ProblemDesc' }">{{ scope.row.title }}</router-link>
      </template>
    </el-table-column>
    <el-table-column prop="tag" label="标签">
      <template #default="scope">
        <div class="flex">
          <el-tag
            v-for="(tag, index) in scope.row.tag"
            :type="stringToTag(tag)"
            :key="index"
            class="margin"
            >{{ tag }}
          </el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="difficulty" label="难度" />
    <el-table-column prop="acceptRate" label="通过率" />
    <el-table-column align="right">
      <template #header> </template>
      <template #default>
        <div class="flex justify-center">
          <!-- <router-link :to="{ name: 'ClassAddStepOne' }"> -->
          <el-button size="small" type="primary"   @click="toEdit">编辑</el-button>
          <!-- </router-link> -->
          <el-button size="small" type="danger">删除</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>

<script setup>
import Data from '../../../data/data'
import { ref } from 'vue'
import { stringToTag } from '@/utils/tools.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const tableData = ref(Data.tableData)
const toEdit = () => {
  router.push({ name: 'ProblemAddStepOne' })
}
</script>

<style scoped>
.margin {
  margin-right: 10px;
}
</style>
