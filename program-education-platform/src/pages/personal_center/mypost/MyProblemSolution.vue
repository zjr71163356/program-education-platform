<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Id" prop="postId" />
    <el-table-column label="标题" prop="title">
      <template #default="{ row }">
        <router-link
          class="text-sky-400"
          :to="{
            name: 'PostAdd',
            params: { problemId: row.problemId },
            query: { title: row.title, postType: true, postId: row.postId }
          }"
          >{{ row.title }}</router-link
        >
      </template>
    </el-table-column>
    <el-table-column label="发布时间" prop="postTime" />
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
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    v-model:current-page="currentpage"
  />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import PostServices from '@/api/PostServices'
import { useRouter } from 'vue-router'
import ProblemServices from '@/api/ProblemServices'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useProfileStore } from '@/stores/user'
const userId = useProfileStore().userId
const total = ref(0)
const currentpage = ref(1)
const pageSize = 10
const router = useRouter()

const handleEdit = async (index, row) => {
  console.log(index, row)
  const problemTitle = ref('')
  await ProblemServices.getProblemById(row.problemId).then((data) => {
    problemTitle.value = data.title
  })
  router.push({
    name: 'PostAdd',
    params: { problemId: row.problemId },
    query: { title: problemTitle.value, postType: true, postId: row.postId }
  })
}

const handleDelete = async (index, row) => {
  // console.log(index, row)
  ElMessageBox.confirm('删除当前题解?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await PostServices.removePostById(row.postId).then((res) => {
      console.log(res)
      tableData.value.splice(index, 1)
    })
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
  })
}
onMounted(async () => {
  console.log('mounted')
  await PostServices.getPostByUserId(userId).then((data) => {
    total.value = data.length
    tableData.value = data
    console.log(data)
  })
  await PostServices.getPostByUserId(userId, 1, pageSize).then((data) => {
    tableData.value = data
    console.log(data)
  })
})
watch(currentpage, async (newVal, oldVal) => {
  console.log('currentpage', newVal)
  await PostServices.getPostByUserId(userId, newVal, pageSize).then((data) => {
    tableData.value = data
    console.log(data)
  })
})

const tableData = ref([])
</script>
