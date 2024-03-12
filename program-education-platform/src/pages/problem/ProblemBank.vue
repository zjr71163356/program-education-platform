<template>
  <el-card class="box-card w-4/5">
    <template #header>
      <div class="card-header">
        <h1>题库</h1>
      </div>
    </template>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="problemId" label="Id" width="50" />
      <el-table-column prop="title" label="标题">
        <template #default="scope">
          <router-link :to="{ name: 'ProblemDesc',params:{problemId:scope.row.problemId} }">{{ scope.row.title }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="tag" label="标签">
        <template #default="scope">
          <div class="flex">
            <el-tag
              v-for="(tag, index) in scope.row.problemTags"
              :type="tagColorList[tag.tagColor - 1]"
              :key="index"
              class="margin"
              >{{ tag.tagName }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="difficulty" label="难度" width="80" />
      <el-table-column prop="acceptRate" label="通过率" width="80" />
    </el-table>

    <template #footer>
      <div class="example-pagination-block">
        <div class="example-demonstration"></div>
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :page-size="10"
          v-model:current-page="currentpage"
        /></div
    ></template>
  </el-card>
</template>

<script setup>
// import Data from '@/data/data'
import { onMounted, ref,watch } from 'vue'

import ProblemServices from '@/api/ProblemServices.js'
import { tagColorList } from '@/api/staticdata'
const tableData = ref('')
const total = ref(0)
const currentpage=ref(1)
onMounted(async () => {
  console.log('mounted')
  await ProblemServices.getProblemList(null, 1, null).then((data) => {
    total.value = data.length
    console.log(data.length)
  }).catch((error) => {
    console.log(error)
  })

  await ProblemServices.getProblemList(null, 1, 10).then((data) => {
    console.log(data)
    tableData.value = data
  }).catch((error) => {
    console.log(error)
  })
})

watch(currentpage, async (newVal, oldVal) => {
  await ProblemServices.getProblemList(null, newVal, 10).then((data) => {
    console.log(data)
    tableData.value = data
  }).catch((error) => {
    console.log(error)
  })
})
</script>

<style scoped>
.margin {
  margin-right: 10px;
}
</style>
../../data/data
