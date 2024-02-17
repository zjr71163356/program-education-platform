<template>
  <el-table :data="tableData"  style="width: 100%">
    <el-table-column label="标题" prop="title">
      <template #default="{ row }">
        <router-link   class="text-sky-400" :to="{ name: 'PostDesc', params: { id: row.id } }">{{
          row.title
        }}</router-link>
      </template>
    </el-table-column>
    <el-table-column label="发布时间" prop="date" width="100" />
    <el-table-column align="right">
      <template #header> </template>
      <template #default="scope">
        <div class="flex justify-center">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>

<script setup>
import { computed, ref } from 'vue'

const tableData = [
  {
    date: '2016-05-03',
    title: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    title: 'John',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    title: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    title: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
