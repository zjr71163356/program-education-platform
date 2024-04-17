<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="problemId" label="Id" width="50" />
    <el-table-column prop="title" label="标题">
      <template #default="scope">
        <router-link :to="{ name: 'ProblemDesc', params: { problemId: scope.row.problemId } }">{{
          scope.row.title
        }}</router-link>
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
    <!-- <el-table-column prop="acceptRate" label="通过率" width="80" /> -->
    <el-table-column align="right">
      <template #header> </template>
      <template #default="scope">
        <div class="flex justify-center">
          <!-- <router-link :to="{ name: 'ClassAddStepOne' }"> -->
          <el-button size="small" type="primary" @click="toEdit(scope.row.problemId)"
            >编辑</el-button
          >
          <!-- </router-link> -->
          <el-button
            size="small"
            type="danger"
            @click="removeProblem(scope.$index, scope.row.problemId)"
            >删除</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    :page-size="10"
    v-model:current-page="currentpage"
  />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { tagColorList } from '@/api/staticdata'
import { useRouter } from 'vue-router'
import ProblemServices from '@/api/ProblemServices'
import { ElMessageBox, ElMessage } from 'element-plus'
const router = useRouter()
const tableData = ref([])
const total = ref(0)
const currentpage = ref(1)

const removeProblem = async (index, problemId) => {
  ElMessageBox.confirm('删除当前数据?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await ProblemServices.deleteProblem(problemId).then((res) => {
      tableData.value.splice(index, 1)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      console.log(res)
    })
  })
}

const toEdit = (problemId) => {
  console.log(problemId)
  router.push({ name: 'ProblemUpdateStepOne', params: { problemId: problemId } })
}
onMounted(async () => {
  await ProblemServices.getProblemList(null, 1, null).then((res) => {
    total.value = res.length
    // tableData.value = res
    // console.log(tableData.value)
  })
  await ProblemServices.getProblemList(null, 1, 10).then((res) => {
    // total.value = res.length
    tableData.value = res
    // console.log(tableData.value)
  })
})
watch(currentpage, async (newVal) => {
  await ProblemServices.getProblemList(null, newVal, 10).then((res) => {
    tableData.value = res
  })
})
</script>

<style scoped>
.margin {
  margin-right: 10px;
}
</style>
