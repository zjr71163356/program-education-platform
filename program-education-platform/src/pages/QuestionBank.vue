<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h1>题库</h1>
      </div>
    </template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="problemId" label="Id" width="80" />
      <el-table-column prop="title" label="标题" width="500" />
      <el-table-column prop="tag" label="标签">
        <template #default="scope">
          <div class="flex">
            <el-tag
              v-for="(tag, index) in scope.row.tag"
              :type="tagtype[index]"
              :key="index"
              class="margin"
              >{{ tag }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="acceptRate" label="通过率" />
    </el-table>

    <template #footer>
      <div class="example-pagination-block">
        <div class="example-demonstration"></div>
        <el-pagination layout="prev, pager, next" :total="1000" /></div
    ></template>
  </el-card>
</template>

<script setup>
import tableData from '../data/data'
const tagtype = ['success', 'info', 'warning', 'danger']
</script>

<style scoped>
.margin {
  margin-right: 10px;
}
</style>
