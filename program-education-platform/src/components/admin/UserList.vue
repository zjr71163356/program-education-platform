<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column prop="userId" label="用户Id" width="180" />
    <el-table-column prop="account" label="账号" width="180" />
    <el-table-column prop="userName" label="用户名" width="180" />
    <el-table-column prop="role" label="角色" width="180" />

    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="输入用户名进行搜索" />
      </template>
      <template #default="{ row }">
        <div class="flex justify-center">
          <el-button size="small" type="primary" @click="toUserDesc(row.userId)"
            >编辑</el-button
          >
          <el-button size="small" type="danger" @click="removeUser(row.userId)">删除</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="total"     :page-size="pageSize"
  v-model:current-page="currentpage" />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import UserServices from '@/api/UserServices'

const pageSize = ref(10)
const currentpage = ref(1)
const total = ref(0)
const router = useRouter()
const toUserDesc = (userId) => {
  console.log(userId)
  router.push({ name: 'UserDesc', params: { userId: userId } })
}
const search = ref('')
const filterTableData = ref([])
onMounted(async () => {
  await UserServices.getUserList(1, null).then((data) => {
    filterTableData.value = data
    total.value=data.length
  })
  await UserServices.getUserList(1, pageSize.value).then((data) => {
    filterTableData.value = data
   
  })
})
watch( currentpage, (val) => {
  UserServices.getUserList(val, pageSize.value).then((data) => {
    filterTableData.value = data
  })
})
</script>
<style scoped>
:deep(.el-input__inner) {
  --tw-ring-shadow: 0 0 #000000;
}
</style>
